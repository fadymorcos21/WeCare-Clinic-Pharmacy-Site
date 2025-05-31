import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Log to confirm we actually have the URL
    console.log("NEW_PATIENT_API_URL:", process.env.NEW_PATIENT_API_URL);

    // Forward the request to your dedicated Lambda endpoint
    const lambdaResponse = await fetch(process.env.NEW_PATIENT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // If the Lambda returned anything other than 201, forward that status/message
    if (lambdaResponse.status !== 201) {
      let errorData;
      try {
        errorData = await lambdaResponse.json();
      } catch {
        errorData = { message: lambdaResponse.statusText };
      }
      return NextResponse.json(errorData, {
        status: lambdaResponse.status,
      });
    }

    // Otherwise parse and return its JSON + status 201
    const data = await lambdaResponse.json();
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error("Error in /api/new-patient proxy:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
