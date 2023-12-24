import { NextResponse } from "next/server";
import QEC from "../../../models/QEC";

export async function POST(req) {
  const { campus } = await req.json();
  try {
    const campusData = await QEC.find({ campus });

    // Extract unique departments, subjects, and teachers
    const departments = new Set();
    const subjects = new Set();
    const teachers = new Set();

    campusData.forEach((doc) => {
      departments.add(doc.department);
      subjects.add(doc.subject);
      teachers.add(doc.teacher);
    });

    // Return the counts
    const result = {
      totalDepartments: departments.size,
      totalSubjects: subjects.size,
      totalTeachers: teachers.size,
    };

    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}
