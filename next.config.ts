/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
};

export default withSentryConfig(nextConfig, {
  org: "jsm-yf",
  project: "javascript-nextjs-2o",

  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false,

  hideSourceMaps: true,

  disableLogger: true,
});
