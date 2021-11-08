import { config } from "@mtfh/common/lib/config";
import { AxiosSWRConfiguration, useAxiosSWR } from "@mtfh/common/lib/http";
import { useRepair } from "./service";

import { Repair } from "./types";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: { patch: jest.fn(), post: jest.fn(), delete: jest.fn() },
  useAxiosSWR: jest.fn(),
}));

test("useRepair: it should send the right body to the API", async () => {
  const returnedValue = { tenureId: "" };
  const id = "id";
  const options: AxiosSWRConfiguration<Repair> = { dedupingInterval: 10 };
  (useAxiosSWR as jest.Mock).mockResolvedValueOnce(returnedValue);

  const response = await useRepair(id, options);
  expect(useAxiosSWR).toBeCalledWith(`${config.tenureApiUrlV1}/tenures/${id}`, options);
  expect(response).toBe(returnedValue);
});
