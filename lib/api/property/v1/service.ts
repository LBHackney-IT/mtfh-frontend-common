import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  useAxiosSWR,
} from "@mtfh/common/lib/hooks";
import { Property } from "./types";

export function useProperty(
  id: string | null,
  options?: AxiosSWRConfiguration<Property>,
): AxiosSWRResponse<Property> {
  return useAxiosSWR(id && `${config.propertyApiUrlV1}/assets/${id}`, options);
}
