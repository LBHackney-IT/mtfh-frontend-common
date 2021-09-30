import { stringify } from "query-string";

import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRInfiniteConfiguration,
  AxiosSWRInfiniteResponse,
  useAxiosSWRInfinite,
} from "@mtfh/common/lib/http";
import type { Comment } from "./types";

export interface CommentsResponse {
  results: Comment[];
  paginationDetails: {
    nextToken: string | null;
  };
}

export interface GetCommentsRequestData {
  targetId: string;
  pageSize?: number;
}

export interface CommentsRequestParams extends GetCommentsRequestData {
  paginationToken?: string | null;
}

export interface CommentsConfiguration
  extends AxiosSWRInfiniteConfiguration<CommentsResponse> {
  pageSize?: number;
}

export const useComments = (
  id: string | null,
  { pageSize = 5, ...options }: CommentsConfiguration = {},
): AxiosSWRInfiniteResponse<CommentsResponse> => {
  return useAxiosSWRInfinite<CommentsResponse>(
    (page, previous) => {
      if (!id || (previous && !previous?.paginationDetails?.nextToken)) {
        return null;
      }

      const params: CommentsRequestParams = {
        targetId: id,
        pageSize,
      };

      if (page !== 0 && previous?.paginationDetails.nextToken) {
        params.paginationToken = previous.paginationDetails.nextToken;
      }

      return `${config.notesApiUrlV2}/notes?${stringify(params)}`;
    },
    {
      onErrorRetry: /* istanbul ignore next: unreachable in test suite */ (
        error,
        key,
        config,
        revalidate,
        { retryCount },
      ) => {
        if (error.response?.status === 404) return;
        if (retryCount >= 3) return;

        const count = Math.min(retryCount, 8);
        const timeout =
          ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
        setTimeout(() => revalidate({ retryCount }), timeout);
      },
      ...options,
    },
  );
};
