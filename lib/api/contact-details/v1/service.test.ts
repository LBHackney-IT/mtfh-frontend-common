import { deleteContactDetailV1, server } from "@hackney/mtfh-test-utils";
import { RestRequest } from "msw";

import { config } from "@mtfh/common/lib/config";

import { deleteContactDetail } from "./service";

describe("when deleteContactDetails is called", () => {
  test("the request should be sent to the correct URL with the expected HTTP method, and the correct response should be returned", async () => {
    const id = "uuid";
    const targetId = "targetId";
    let method = "";
    const expectedMethod = "DELETE";
    let url = "";
    const expectedUrl = `${config.contactDetailsApiUrlV1}/contactDetails`;
    const mockApiResponse = { id };

    server.use(
      deleteContactDetailV1((req: RestRequest) => {
        method = req.method;
        url = req.url.toString();
        return mockApiResponse;
      }),
    );

    const apiResponse = await deleteContactDetail(id, targetId);

    expect(apiResponse).toMatchObject(mockApiResponse);
    expect(url).toContain(expectedUrl);
    expect(method).toBe(expectedMethod);
  });
});
