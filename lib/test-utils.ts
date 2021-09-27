import { getCommentV2, server } from "@hackney/mtfh-test-utils";

beforeEach(() => {
  server.use(getCommentV2());
});
