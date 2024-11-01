/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.NEXT_SENTRY_PROJECT,

  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false,

  hideSourceMaps: true,

  disableLogger: true,
});
