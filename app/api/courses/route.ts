import { addCourse, getCourses } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const courses = getCourses();
    return NextResponse.json({ message: "OK", courses }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { title, desc } = await req.json();
  try {
    const course = { title, desc, date: new Date(), id: Date.now().toString() };
    addCourse(course);
    return NextResponse.json({ message: "OK", course }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
