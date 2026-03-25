import Vapi from "@vapi-ai/web";

export function createVapiClient() {
  const apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY;
  if (!apiKey) return null;

  try {
    return new Vapi(apiKey);
  } catch (error) {
    console.error("Failed to initialize Vapi client", error);
    return null;
  }
}
