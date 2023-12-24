import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import QEC from "../../../../models/QEC";

export async function POST(req) {
  const { campus, department, teacher, subject } = await req.json();
  try {
    await dbConnect();
    if (!campus || !department || !teacher || !subject) {
      return new NextResponse("Missing required parameters", { status: 400 });
    }

    // Find records based on the provided parameters
    const records = await QEC.find({
      campus: campus,
      department: department,
      teacher: teacher,
      subject: subject,
    });

    // Extract reviews from the records
    const reviews = records
      .map((record) =>
        record.reviews.map((review) => ({
          quiz: review.quiz,
          "Strongly Agree": review.count["Strongly Agree"],
          Agree: review.count.Agree,
          Disagree: review.count.Disagree,
          "Strongly Disagree": review.count["Strongly Disagree"],
        }))
      )
      .flat();

    // Respond with the reviews
    return new NextResponse(JSON.stringify(reviews), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}
