// File: app/api/booked-slots/route.js

import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Extract the “date” query parameter
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    if (!date) {
      return NextResponse.json(
        { message: "Missing `date` query parameter." },
        { status: 400 }
      );
    }

    // Forward to the Lambda endpoint (make sure WECARE_APPT_BOOKED_SLOTS_URL is set)
    const lambdaUrl = `${
      process.env.WECARE_APPT_BOOKED_SLOTS_URL
    }?date=${encodeURIComponent(date)}`;
    console.log("Forwarding booked‑slots request to:", lambdaUrl);

    const lambdaResponse = await fetch(lambdaUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await lambdaResponse.json();
    return NextResponse.json(data, { status: lambdaResponse.status });
  } catch (error) {
    console.error("Error in /api/booked-slots proxy:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
