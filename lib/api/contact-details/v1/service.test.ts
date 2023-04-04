import { deleteContactDetailV1, server } from "@hackney/mtfh-test-utils";
import { RestRequest } from "msw";

import { config } from "@mtfh/common/lib/config";

import { deleteContactDetail } from "./service";

describe("deleteContactDetails", () => {
  test("it calls the api endpoint with the correct url and parameters and returns the correct response", async () => {
    const id = "uuid";
    const targetId = "targetId";
    let method = "";
    const expectedMethod = "DELETE";
    let url = "";
    const expectedUrl = `${config.contactDetailsApiUrlV1}/contactDetails`;
    const response = { id };

    server.use(
      deleteContactDetailV1((req: RestRequest) => {
        method = req.method;
        url = req.url.toString();
        return response;
      }),
    );

    const res = await deleteContactDetail(id, targetId);

    expect(res).toMatchObject(response);
    expect(url).toContain(expectedUrl);
    expect(method).toBe(expectedMethod);
  });
});
