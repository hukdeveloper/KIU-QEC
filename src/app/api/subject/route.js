import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import QEC from "../../../models/QEC";

export async function GET() {
  try {
    await dbConnect();

    const teachersAll = await QEC.distinct("subject");

    const result = await Promise.all(
      teachersAll.map(async (item) => {
        const teachers = await QEC.find({
          subject: item,
        });

        let totalScore = 0;
        let totalParticipants = 0;
        let totalSubjects = 0;

        await Promise.all(
          teachers.map(async (teacher) => {
            await Promise.all(
              teacher.reviews.map(async (review, key) => {
                let subjectScore = 0;
                const sta = review.count["Strongly Agree"];
                const ag = review.count.Agree;
                const da = review.count.Disagree;
                const sda = review.count["Strongly Disagree"];

                if (key === 0) {
                  totalParticipants =
                    parseInt(sta, 10) +
                    parseInt(ag, 10) +
                    parseInt(da, 10) +
                    parseInt(sda, 10);
                }

                subjectScore +=
                  parseInt(sta, 10) * 3 +
                  parseInt(ag, 10) * 2 +
                  parseInt(da, 10) * 1 +
                  parseInt(sda, 10) * -1;
                subjectScore = subjectScore / totalParticipants;
                subjectScore = (subjectScore / 48) * 100;
                totalScore = totalScore + subjectScore;
              })
            );
          })
        );

        totalScore /= teachers.length;
        totalSubjects = totalSubjects + teachers.length;
        totalScore = parseFloat(totalScore.toFixed(2));

        return {
          name: item,
          department: teachers[0].department,
          averageScore: totalScore,
        };
      })
    );

    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(error, { status: 500 });
  }
}
