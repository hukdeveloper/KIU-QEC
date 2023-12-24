import { NextResponse } from "next/server";
import QEC from "../../../../models/QEC";
import dbConnect from "../../../../lib/dbConnect";

export async function GET(req, { params }) {
  const { slug } = await params;
  const teacherName = slug.replace(/-/g, " ");

  try {
    await dbConnect();
    const teachers = await QEC.find({
      teacher: teacherName,
    });

    return new NextResponse(JSON.stringify(teachers), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}
