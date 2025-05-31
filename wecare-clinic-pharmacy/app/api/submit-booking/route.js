// File: app/api/consultation/submit-booking/route.js

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // 1) Parse the incoming JSON from the client
    const body = await request.json();
    console.log("Proxying submit-booking with body:", body);

    const lambdaUrl = process.env.WECARE_CONSULTATION_API_URL;
    if (!lambdaUrl) {
      throw new Error("Missing WECARE_CONSULTATION_API_URL in environment");
    }

    const lambdaResponse = await fetch(lambdaUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // 3) If Lambda didn’t return 201, forward that status+JSON (or text)
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

    // 4) On success, parse its JSON and return 201
    const data = await lambdaResponse.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error in /api/consultation/submit-booking proxy:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
