import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  useAxiosSWR,
} from "@mtfh/common/lib/http";

import { DiscretionaryAlert } from "./types";

export const useDiscretionaryAlert = (
  id: string | null,
  options?: AxiosSWRConfiguration<any>,
): AxiosSWRResponse<DiscretionaryAlert> => {
  return useAxiosSWR(id && `${config.discretionaryApiUrlV1}/persons/${id}`, options);
};
