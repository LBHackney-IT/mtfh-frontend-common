import { server } from "@hackney/mtfh-test-utils";
import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";

import { useWorkOrders } from "./service";

import { WorkOrdersFilters } from "./types";

const workOrdersMock = [
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

describe("useWorkOrders", () => {
  test("useWorkOrders: it should send the correct query params to the API", async () => {
    const id = "00075623";

    // To be updated with mockRepairs
    const genericWorkOrdersMock = workOrdersMock;

    server.use(
      rest.get("/api/v1/worksOrders", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.set("ETag", '"1"'),
          ctx.json(genericWorkOrdersMock),
        );
      }),
    );
    const { result, waitForNextUpdate } = renderHook(() => useWorkOrders(id));
    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(genericWorkOrdersMock);
  });

  test("useWorkOrders: it should send the correct query params to the API for LOCKED status", async () => {
    const id = "00075623";

    // To be updated with mockRepairs
    const lockedWorkOrdersMock = workOrdersMock;

    server.use(
      rest.get("/api/v1/worksOrders", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.set("ETag", '"1"'),
          ctx.json(lockedWorkOrdersMock),
        );
      }),
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.LOCKED),
    );
    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(lockedWorkOrdersMock);
  });

  test("useWorkOrders: it should send the correct query params to the API for IN_PROGRESS status", async () => {
    const id = "00075623";

    // To be updated with mockRepairs
    const inProgressWorkOrdersMock = workOrdersMock;

    server.use(
      rest.get("/api/v1/worksOrders", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.set("ETag", '"1"'),
          ctx.json(inProgressWorkOrdersMock),
        );
      }),
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.IN_PROGRESS),
    );

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(inProgressWorkOrdersMock);
  });

  test("useWorkOrders: it should send the correct query params to the API for CANCELLED status", async () => {
    const id = "00075623";
    // To be updated with mockRepairs
    const cancelledWorkOrdersMock = workOrdersMock;

    server.use(
      rest.get("/api/v1/worksOrders", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.set("ETag", '"1"'),
          ctx.json(cancelledWorkOrdersMock),
        );
      }),
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.CANCELLED),
    );

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(cancelledWorkOrdersMock);
  });

  test("useWorkOrders: it should send the correct query params to the API for COMPLETED status", async () => {
    const id = "00075623";
    // To be updated with mockRepairs
    const completedWorkOrdersMock = workOrdersMock;

    server.use(
      rest.get("/api/v1/worksOrders", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.set("ETag", '"1"'),
          ctx.json(completedWorkOrdersMock),
        );
      }),
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.COMPLETED),
    );

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(completedWorkOrdersMock);
  });

  test("useWorkOrders: it should send the correct query params to the API for ON_HOLD status", async () => {
    const id = "00075623";
    // To be updated with mockRepairs
    const onHoldWorkOrdersMock = workOrdersMock;

    server.use(
      rest.get("/api/v1/worksOrders", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.set("ETag", '"1"'),
          ctx.json(onHoldWorkOrdersMock),
        );
      }),
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.ON_HOLD),
    );

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(onHoldWorkOrdersMock);
  });
});
