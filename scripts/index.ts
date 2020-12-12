import { google } from "googleapis";

console.log("asd", process.env.GOOGLE_APPLICATION_CREDENTIALS);

const VIEW_ID = "208092580";
const SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"];

const ana = google.analyticsreporting("v4");

async function main() {
  const auth = new google.auth.JWT({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: SCOPES,
  });

  await auth.authorize();

  const res = await ana.reports.batchGet(
    {
      auth,
      requestBody: {
        reportRequests: [
          {
            viewId: VIEW_ID,
            dimensions: [
              {
                name: "ga:pageTitle",
              },
            ],
            metrics: [
              {
                expression: "ga:pageviews",
              },
            ],
            //dimensionFilterClauses: [
            //{
            //filters: [
            //{
            //operator: "EXACT",
            //dimensionName: "ga:pagePath",
            //expressions: ["*"],
            //},
            //],
            //},
            //],
            dateRanges: [
              {
                startDate: "2018-12-31",
                endDate: new Date().toISOString().split("T")[0],
              },
            ],
          },
        ],
      },
    },
    {}
  );

  console.log(JSON.stringify(res.data, null, 2));
}

console.log("Downloading report");
main().then(console.log, console.error);
