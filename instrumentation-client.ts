import posthog from "posthog-js";
import { trackOutboundClicks } from "@/lib/analytics";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (token) {
  posthog.init(token, {
    // Proxied through next.config.ts rewrites so the CSP can stay at connect-src 'self'
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-08-30",
  });
  trackOutboundClicks();
}
