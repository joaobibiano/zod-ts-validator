export function reportError(error: any) {
  // Sentry
  // Bugsnag
  // LogRocket

  fetch("https://myserver.com/log", {
    method: "POST",
    body: JSON.stringify({
      error: error.message,
      stack: error.stack,
    }),
  });
}
