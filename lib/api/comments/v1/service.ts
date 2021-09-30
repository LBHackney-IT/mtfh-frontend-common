import { stringify } from "query-string";

import { config } from "@mtfh/common/lib/config";
import { AxiosSWRInfiniteResponse, useAxiosSWRInfinite } from "@mtfh/common/lib/http";
import { Comment } from "./types";

export interface GetCommentsByTargetIdResponse {
  results: Comment[];
  paginationDetails: {
    nextToken: string | null;
  };
}

export interface GetCommentsByIdRequestData {
  targetId: string;
  pageSize?: number;
  paginationToken?: string | null;
}

export const useComments = (
  id: string,
  pageSize = 5,
): AxiosSWRInfiniteResponse<GetCommentsByTargetIdResponse> => {
  return useAxiosSWRInfinite<GetCommentsByTargetIdResponse>(
    (page, previous) => {
      if (previous && !previous?.paginationDetails?.nextToken) {
        return null;
      }

      const params: GetCommentsByIdRequestData = {
        targetId: id,
        pageSize,
      };

      if (page !== 0 && previous?.paginationDetails.nextToken) {
        params.paginationToken = previous.paginationDetails.nextToken;
      }

      return `${config.notesApiUrlV1}/notes?${stringify(params)}`;
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
    },
  );
};
