import { createApp } from "vue";
import { createRouter,createWebHashHistory } from "vue-router";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import App from './App.vue'

import routes from "./router/test"
const app = createApp(App);
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

Sentry.init({
  app,
  dsn: "https://8664f87979f649a9a27b365896f93321@o911990.ingest.sentry.io/5907563",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(router);
app.mount("#app");