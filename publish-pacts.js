const path = require("path");
const publisher = require("@pact-foundation/pact-node");

const certPath = path.resolve(__dirname, "ca-bundle.crt");
process.env.SSL_CERT_FILE = certPath;
console.log("process.env.SSL_CERT_FILE", process.env.SSL_CERT_FILE);
console.log("PACT_BROKER_USERNAME", process.env.PACT_BROKER_USERNAME);
const opts = {
  providerBaseUrl: "/",
  pactFilesOrDirs: [path.resolve(process.cwd(), "pact", "pacts")],
  pactBroker: process.env.PACT_BROKER_BASE_URL,
  consumerVersion: "0.0.1",
};

publisher.publishPacts(opts).then(() => console.log("Pacts successfully published"));
