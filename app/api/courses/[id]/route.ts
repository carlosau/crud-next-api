import { getById } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const id = req.url.split("courses/")[1];
  const course = getById(id);

  try {
    if (!course) {
      return NextResponse.json({ message: "Not found!!!" }, { status: 404 });
    } else {
      return NextResponse.json({ message: "Ok", course }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
