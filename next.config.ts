import type { NextConfig } from "next";

// basePath is needed because GitHub Pages serves the site at
// azaworld.github.io/my-portfolio (a subpath, not the domain root).
const isCI = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isCI ? "/my-portfolio" : "",
  images: { unoptimized: true },
};

export default nextConfig;
