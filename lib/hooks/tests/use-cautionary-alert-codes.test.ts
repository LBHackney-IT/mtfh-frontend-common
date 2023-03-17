import {
  generateMockReferenceDataV1,
  getReferenceDataV1,
  server,
} from "@hackney/mtfh-test-utils";
import { renderHook } from "@testing-library/react-hooks";

import { useCautionaryAlertCodes } from "../use-cautionary-alert-codes";

describe("useCautionaryAlertCodes", () => {
  test("it makes a call to the referenceData API for cautionary alerts and returns them correctly", async () => {
    const code = "VA";
    const value = "Verbal Abuse";
    const mockRefData = [
      generateMockReferenceDataV1({
        category: "cautionary-alert",
        subCategory: "alert-type",
        code,
        value,
      }),
    ];
    server.use(getReferenceDataV1(mockRefData));

    const { result, waitForNextUpdate } = renderHook(() => useCautionaryAlertCodes());
    expect(result.current).toBe(null);
    await waitForNextUpdate();

    expect(result.current?.[code]).toStrictEqual(value);
  });
});
