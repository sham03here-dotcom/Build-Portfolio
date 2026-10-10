import type { NextConfig } from "next";

/**
 * `npm run build:static` sets EXPORT=1 and emits a self-contained static site
 * into `out/` — plain HTML/CSS/JS that any file host can serve.
 *
 * The flag is opt-in on purpose: a static export has no server, so Next's image
 * optimizer is unavailable and every image ships at its source size. Leaving
 * that on for normal builds and for `next dev` would throw away the resizing
 * and WebP conversion the case-study art relies on.
 */
const isStaticExport = process.env.EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export",
    // Emit work/epayhub/index.html rather than work/epayhub.html, so hosts that
    // don't silently append `.html` still resolve every route.
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
