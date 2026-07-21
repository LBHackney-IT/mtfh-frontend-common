"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = exports.useComments = void 0;
const query_string_1 = require("query-string");
const auth_1 = require("@mtfh/common/lib/auth");
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const useComments = (id, { pageSize = 5, ...options } = {}) => {
  return (0, http_1.useAxiosSWRInfinite)((page, previous) => {
    var _a;
    if (
      !id ||
      (previous &&
        !((_a =
          previous === null || previous === void 0
            ? void 0
            : previous.paginationDetails) === null || _a === void 0
          ? void 0
          : _a.nextToken))
    ) {
      return null;
    }
    const params = {
      targetId: id,
      pageSize,
    };
    if (
      page !== 0 &&
      (previous === null || previous === void 0
        ? void 0
        : previous.paginationDetails.nextToken)
    ) {
      params.paginationToken = previous.paginationDetails.nextToken;
    }
    return `${config_1.config.notesApiUrlV2}/notes?${(0, query_string_1.stringify)(
      params,
    )}`;
  }, options);
};
exports.useComments = useComments;
const addComment = async (data) => {
  const auth = auth_1.$auth.getValue();
  const { data: comment } = await http_1.axiosInstance.post(
    `${config_1.config.notesApiUrlV2}/notes`,
    {
      ...data,
      createdAt: new Date().toISOString(),
      author: {
        id: auth.sub,
        email: auth.email,
        fullName: auth.name,
      },
    },
  );
  return comment;
};
exports.addComment = addComment;
