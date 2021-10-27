import { Matchers } from "@pact-foundation/pact";
import { renderHook } from "@testing-library/react-hooks";
import { pactWith } from "jest-pact";

import { config } from "../../../config";
import { usePerson } from "./service";

const { like, eachLike } = Matchers;

const mockPersonMatcher = {
  id: like("6fbe024f-2316-4265-a6e8-d65a837e308a"),
  title: like("OTHER"),
  firstName: like("Haylee"),
  middleName: like(""),
  surname: like("Macejkovic"),
  preferredTitle: like(""),
  preferredFirstName: like(""),
  preferredMiddleName: like("a"),
  preferredSurname: like("Schmidt"),
  placeOfBirth: like("Wisokyfort"),
  dateOfBirth: like("2021-06-07T01:55:25.852Z"),
  personTypes: eachLike("Freeholder"),
  tenures: eachLike({
    id: like("ed1d0420-ea19-46af-a83b-452acd600c9f"),
    type: like("Short Life Lse"),
    assetFullAddress: like("224 Brakus Square, 44902"),
    assetId: like("e412801a-e3e4-4479-8999-2f94b3186fb7"),
    startDate: like("2018-08-26T01:17:40.061Z"),
    endDate: like(""),
    isActive: like(true),
    paymentReference: like("ej1rj1n5is"),
    propertyReference: like("y1lvwj4g5w"),
    uprn: like("tdej5nxdck"),
  }),
  reason: like("Voluptas molestiae fuga voluptatem quia et qui."),
};

const baseUrl = new URL(config.personApiUrlV1);

pactWith(
  { consumer: "FE", provider: "Person API V1", port: Number(baseUrl.port), cors: true },
  (provider) => {
    describe("Persons V1", () => {
      beforeEach(async () => {
        await provider.addInteraction({
          state:
            "the Person API has a person with an id:6fbe024f-2316-4265-a6e8-d65a837e308a",
          uponReceiving: "A GET request for /persons/:id",
          withRequest: {
            method: "GET",
            headers: {
              Authorization: "Bearer",
            },
            path: `/api/v1/persons/6fbe024f-2316-4265-a6e8-d65a837e308a`,
          },
          willRespondWith: {
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              etag: like("8"),
            },
            body: mockPersonMatcher,
          },
        });
      });

      it("returns a person by id", async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          usePerson("6fbe024f-2316-4265-a6e8-d65a837e308a"),
        );
        expect(result.current.data).toBe(undefined);
        await waitForNextUpdate();
        expect(result.current.data).toHaveProperty("id");
      });
    });
  },
);
