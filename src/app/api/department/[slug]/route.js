import { NextResponse } from "next/server";
import QEC from "../../../../models/QEC";
import dbConnect from "../../../../lib/dbConnect";

export async function GET(req, { params }) {
  const { slug } = await params;
  const departmentName = slug.replace(/-/g, " ");

  try {
    await dbConnect();
    const departments = await QEC.find({
      department: departmentName,
    });

    return new NextResponse(JSON.stringify(departments), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}
