import {
  generateMockWorkOrdersV2,
  getWorkOrdersV2,
  server,
} from "@hackney/mtfh-test-utils";
import { renderHook } from "@testing-library/react-hooks";

import { useWorkOrders } from "./service";
import { WorkOrdersFilters } from "./types";

describe.skip("when useWorkOrders is called", () => {
  const id = "00075623";

  test("the request should include the correct query params", async () => {
    const genericWorkOrdersMock = Array.from({ length: 3 }).map(() =>
      generateMockWorkOrdersV2(),
    );
    server.use(getWorkOrdersV2(genericWorkOrdersMock, 200));

    const { result, waitForNextUpdate } = renderHook(() => useWorkOrders(id));

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(genericWorkOrdersMock);
  });

  test("the request should include correct query params for LOCKED status", async () => {
    const lockedWorkOrdersMock = Array.from({ length: 3 }).map(() =>
      generateMockWorkOrdersV2({
        status: "Locked",
      }),
    );
    server.use(getWorkOrdersV2(lockedWorkOrdersMock, 200));

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.LOCKED),
    );

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(lockedWorkOrdersMock);
  });

  test("the request should include correct query params for IN_PROGRESS status", async () => {
    const inProgressWorkOrdersMock = Array.from({ length: 3 }).map(() =>
      generateMockWorkOrdersV2({
        status: "In progress",
      }),
    );
    server.use(getWorkOrdersV2(inProgressWorkOrdersMock, 200));

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.IN_PROGRESS),
    );

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(inProgressWorkOrdersMock);
  });

  test("the request should include correct query params for CANCELLED status", async () => {
    const cancelledWorkOrdersMock = Array.from({ length: 3 }).map(() =>
      generateMockWorkOrdersV2({
        status: "Cancelled",
      }),
    );
    server.use(getWorkOrdersV2(cancelledWorkOrdersMock, 200));

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.CANCELLED),
    );

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(cancelledWorkOrdersMock);
  });

  test("the request should include correct query params for COMPLETED status", async () => {
    const completedWorkOrdersMock = Array.from({ length: 3 }).map(() =>
      generateMockWorkOrdersV2({
        status: "Completed",
      }),
    );

    server.use(getWorkOrdersV2(completedWorkOrdersMock, 200));

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.COMPLETED),
    );

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(completedWorkOrdersMock);
  });

  test("the request should include correct query params for ON_HOLD status", async () => {
    const onHoldWorkOrdersMock = Array.from({ length: 3 }).map(() =>
      generateMockWorkOrdersV2({
        status: "On hold",
      }),
    );

    server.use(getWorkOrdersV2(onHoldWorkOrdersMock, 200));

    const { result, waitForNextUpdate } = renderHook(() =>
      useWorkOrders(id, WorkOrdersFilters.ON_HOLD),
    );

    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(onHoldWorkOrdersMock);
  });
});
