import { stringify } from "query-string";

import { config } from "../../../config";
import {
  AxiosSWRInfiniteResponse,
  getAxiosInstance,
  useAxiosSWRInfinite,
} from "../../../http";
import { getAuth } from "../../../auth";

import type { Comment } from "./types";

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
  return useAxiosSWRInfinite<GetCommentsByTargetIdResponse>((page, previous) => {
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
  });
};

export type PostCommentRequestData = Omit<
  Comment,
  "id" | "categorisation" | "author" | "createdAt"
>;

export const addComment = async (data: PostCommentRequestData): Promise<Comment> => {
  const axiosInstance = getAxiosInstance();

  const { sub: id, email, name: fullName } = getAuth().user;

  const { data: comment } = await axiosInstance.post(`${config.notesApiUrlV1}/notes`, {
    ...data,
    createdAt: new Date().toISOString(),
    author: {
      id,
      email,
      fullName,
    },
  });
  return comment;
};
