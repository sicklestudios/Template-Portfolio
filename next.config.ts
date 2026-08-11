import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allows viewing the dev server from other devices on the LAN
  // (e.g. http://192.168.x.x:3000) — Next.js blocks this by default.
  allowedDevOrigins: ["192.168.1.9", "localhost", "127.0.0.1"],
};

export default nextConfig;
