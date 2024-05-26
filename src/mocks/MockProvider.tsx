"use client";

let triggered = false;

async function enableApiMocking() {
  const { worker } = await import("../mocks/browser");
  if (process.env.NODE_ENV === "development") {
    await worker.start();
  }
}

export function MockProvider() {
  if (!triggered) {
    triggered = true;
    throw enableApiMocking();
  }

  return null;
}
