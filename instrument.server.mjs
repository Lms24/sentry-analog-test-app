import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://a50fa6e0db70cc84be4627346540ef49@o447951.ingest.us.sentry.io/4508795813625856",
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  debug: true,
});
