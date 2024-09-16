/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "tollgate-upload.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
     
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
      },
    ],
  },
};

export default config;
