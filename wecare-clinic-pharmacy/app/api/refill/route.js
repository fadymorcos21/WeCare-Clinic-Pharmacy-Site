// app/api/refill/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the JSON payload from the client
    const body = await request.json();

    // Forward the request to your Lambda API using the env variable
    const lambdaResponse = await fetch(process.env.REFILL_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // If the Lambda didn’t return 201, bubble up an error
    if (lambdaResponse.status !== 201) {
      let errorMessage = lambdaResponse.statusText;
      try {
        const errorData = await lambdaResponse.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        // keep statusText if response isn’t JSON
      }
      throw new Error(
        `Lambda API responded with status ${lambdaResponse.status}: ${errorMessage}`
      );
    }

    // Otherwise, forward the JSON + 201 back to the client
    const data = await lambdaResponse.json();
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error("Error in /api/refill:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
