import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://f58072cb1fe1375efc7f7a1c38ef7549@o4506579617710080.ingest.us.sentry.io/4509839299051520",
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
