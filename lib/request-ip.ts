import { headers } from "next/headers";

export async function getClientIp(): Promise<string> {
  const h = await headers();
  const forwardedFor = h.get("x-forwarded-for");
  const realIp = h.get("x-real-ip");

  const ipFromForwarded = forwardedFor?.split(",")[0]?.trim();
  const ip = ipFromForwarded || realIp || "unknown";

  return ip.toLowerCase();
}
