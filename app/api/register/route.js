import { NextResponse } from "next/server";
import { registrationSchema } from "@/lib/validation";
import { saveStudent } from "@/lib/registerService";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = registrationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the form and try again.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  try {
    const data = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
    };

    await saveStudent(data);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while saving your details. Please try again.",
      },
      { status: 500 }
    );
  }
}

