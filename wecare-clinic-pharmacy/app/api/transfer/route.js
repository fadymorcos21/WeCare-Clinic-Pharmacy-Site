// app/api/transfer/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Transfer route received body:", body);
    console.log(
      "Using TRANSFER_REQUEST_API_URL =",
      process.env.TRANSFER_REQUEST_API_URL
    );

    const lambdaResponse = await fetch(process.env.TRANSFER_REQUEST_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // Forward non-201 statuses directly
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
    console.error("Error in /api/transfer proxy:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
