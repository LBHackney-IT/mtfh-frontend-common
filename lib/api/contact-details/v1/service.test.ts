import { deleteContactDetailV1, server } from "@hackney/mtfh-test-utils";
import { RestRequest } from "msw";

import { CommonAuth, setAuth } from "../../../auth";
import { config } from "../../../config";
import { deleteContactDetail } from "./service";

setAuth(new CommonAuth());

test("deleteContactDetail: it should send the right thing to the API and return the response", async () => {
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
