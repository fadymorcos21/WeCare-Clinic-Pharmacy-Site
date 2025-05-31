// app/api/contact-us/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("CONTACT_US_API_URL:", process.env.CONTACT_US_API_URL);

    const lambdaResponse = await fetch(process.env.CONTACT_US_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (lambdaResponse.status !== 201) {
      let errorData;
      try {
        errorData = await lambdaResponse.json();
      } catch {
        errorData = { message: lambdaResponse.statusText };
      }
      return NextResponse.json(errorData, { status: lambdaResponse.status });
    }

    const data = await lambdaResponse.json();
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error("Error in /api/contact-us proxy:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
