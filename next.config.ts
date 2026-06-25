import type { NextConfig } from "next";

// Served at the root of the custom domain (azantor.xyz), so no basePath.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  images: { unoptimized: true },
};

export default nextConfig;
