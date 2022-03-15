const path = require("path");
const publisher = require("@pact-foundation/pact-node");
const { execSync } = require("child_process");

const exec = (command) => execSync(command).toString().trim();
const branch = process.env.CIRCLE_BRANCH || exec("git rev-parse --abbrev-ref HEAD");

const opts = {
  providerBaseUrl: "/",
  pactFilesOrDirs: [path.resolve(process.cwd(), "pact", "pacts")],
  pactBroker: process.env.PACT_BROKER_BASE_URL,
  pactBrokerUsername: process.env.PACT_BROKER_USERNAME,
  pactBrokerPassword: process.env.PACT_BROKER_PASSWORD,
  tags: [branch || "main"],
  consumerVersion: "0.0.1",
  log: "verbose",
};

publisher.publishPacts(opts).then(
  () => console.log("Pacts successfully published"),
  (e) => {
    console.log(`{act publishing failed: ${e}`);
    process.exit(1);
  },
);
