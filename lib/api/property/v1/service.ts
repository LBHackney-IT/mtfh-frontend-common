import { config } from '@mtfh/common/lib/config';
import { AxiosSWRResponse, useAxiosSWR } from '@mtfh/common/lib/hooks';
import { Property } from './types';

export function useProperty(targetId: string): AxiosSWRResponse<Property> {
  return useAxiosSWR(`${config.propertyApiUrlV1}/assets/${targetId}`);
}
