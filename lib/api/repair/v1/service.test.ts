import { config } from "@mtfh/common/lib/config";
import { useAxiosSWR } from "@mtfh/common/lib/http";
import { useRepairs } from "./service";

import { RepairsFilters } from "./types";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  useAxiosSWR: jest.fn(),
}));

const repairsMock = [
  {
    reference: 10036383,
    dateRaised: "2021-11-05T17:38:21.748934Z",
    lastUpdated: null,
    priority: "5 [N] NORMAL",
    property: "339-428 Fellows Court  Weymouth Terrace",
    propertyPostCode: "E2 8LB",
    owner: "HH General Building Repai",
    description: "ELC - 5 lights on balcony walkway on 9th floor are out. ",
    propertyReference: "00075623",
    tradeCode: "EL",
    tradeDescription: "Electrical - EL",
    status: "In Progress",
  },
];

test("useRepairs: it should send the correct query params to the API", async () => {
  const id = "00075623";
  (useAxiosSWR as jest.Mock).mockResolvedValueOnce(repairsMock);
  const response = await useRepairs(id);
  expect(useAxiosSWR).toBeCalledWith(
    `${config.tenureApiUrlV1}/worksOrders?PageNumber=1&PageSize=12&propertyReference=${id}`,
  );
  expect(response).toBe(repairsMock);
});

test("useRepairs: it should send the correct query params to the API for LOCKED status", async () => {
  const id = "00075623";
  (useAxiosSWR as jest.Mock).mockResolvedValueOnce(repairsMock);
  const response = await useRepairs(id, RepairsFilters.LOCKED);
  expect(useAxiosSWR).toBeCalledWith(
    `${config.tenureApiUrlV1}/worksOrders?PageNumber=1&PageSize=12&StatusCode=200&propertyReference=${id}`,
  );
  expect(response).toBe(repairsMock);
});

test("useRepairs: it should send the correct query params to the API for IN_PROGRESS status", async () => {
  const id = "00075623";
  (useAxiosSWR as jest.Mock).mockResolvedValueOnce(repairsMock);
  const response = await useRepairs(id, RepairsFilters.IN_PROGRESS);
  expect(useAxiosSWR).toBeCalledWith(
    `${config.tenureApiUrlV1}/worksOrders?PageNumber=1&PageSize=12&StatusCode=20%2660%2680%2690%26100%26110%26120%261000%261010%261080%261090&propertyReference=${id}`,
  );
  expect(response).toBe(repairsMock);
});

test("useRepairs: it should send the correct query params to the API for CANCELLED status", async () => {
  const id = "00075623";
  (useAxiosSWR as jest.Mock).mockResolvedValueOnce(repairsMock);
  const response = await useRepairs(id, RepairsFilters.CANCELLED);
  expect(useAxiosSWR).toBeCalledWith(
    `${config.tenureApiUrlV1}/worksOrders?PageNumber=1&PageSize=12&StatusCode=30&propertyReference=${id}`,
  );
  expect(response).toBe(repairsMock);
});

test("useRepairs: it should send the correct query params to the API for COMPLETED status", async () => {
  const id = "00075623";
  (useAxiosSWR as jest.Mock).mockResolvedValueOnce(repairsMock);
  const response = await useRepairs(id, RepairsFilters.COMPLETED);
  expect(useAxiosSWR).toBeCalledWith(
    `${config.tenureApiUrlV1}/worksOrders?PageNumber=1&PageSize=12&StatusCode=40%2650&propertyReference=${id}`,
  );
  expect(response).toBe(repairsMock);
});

test("useRepairs: it should send the correct query params to the API for ON_HOLD status", async () => {
  const id = "00075623";
  (useAxiosSWR as jest.Mock).mockResolvedValueOnce(repairsMock);
  const response = await useRepairs(id, RepairsFilters.ON_HOLD);
  expect(useAxiosSWR).toBeCalledWith(
    `${config.tenureApiUrlV1}/worksOrders?PageNumber=1&PageSize=12&StatusCode=10%2670&propertyReference=${id}`,
  );
  expect(response).toBe(repairsMock);
});
