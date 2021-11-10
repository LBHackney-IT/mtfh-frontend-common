import {
  generateMockCommentV2,
  generateMockReferenceDataV1,
  getCommentV2,
  getReferenceDataV1,
  mockCommentReferenceDataV1,
  server,
} from "@hackney/mtfh-test-utils";
import { rest } from "msw";
import { config } from "@mtfh/common/lib/config";

export const mockCategoryReferenceDataV1 = Array.from({ length: 3 }).map((_, index) =>
  generateMockReferenceDataV1({
    category: "comment",
    subCategory: "category",
    code: `categoryCode${index + 1}`,
    value: `Category value ${index + 1}`,
  }),
);

export const mockCommentsV2 = Array.from({ length: 20 }).map((_, index) =>
  generateMockCommentV2({
    title: `Comment title ${index + 1}`,
    author: {
      id: String(index + 1),
      fullName: `Full name ${index + 1}`,
      email: `email${index}@test.com`,
    },
    categorisation: {
      category: `categoryCode${index + 1}`,
      subCategory: "Laborum ratione a officia quaerat cumque incidunt.",
      description: "aut",
    },
  }),
);

export const mockRepairs = [
  {
    reference: 2267941,
    dateRaised: "2020-09-07T09:01:09Z",
    lastUpdated: null,
    priority: "ELECTRICAL PLANS",
    property: "Somerford Grove Estate 103",
    owner: "HH Electrical Planned",
    description: "Please carryout full NICEIC testing to Property (2nd QTR test 2020/21)",
    propertyReference: "00010773",
    tradeCode: "EL",
    tradeDescription: "Electrical",
    status: "Locked",
  },
  {
    reference: 2254479,
    dateRaised: "2020-08-07T20:00:55Z",
    lastUpdated: null,
    priority: "GAS SERVICING",
    property: "Somerford Grove Estate 103",
    owner: "HH Gas Breakdown",
    description: "Annual Gas Service",
    propertyReference: "00010773",
    tradeCode: "GS",
    tradeDescription: "Domestic gas: servicing",
    status: "In Progress",
  },
];

export const getRepairsV1 = (data: any = mockRepairs, code = 200) =>
  rest.get(`${config.repairsHubApiUrl}/worksOrders`, (req, res, ctx) => {
    return res(ctx.status(code), ctx.json(data));
  });

beforeEach(() => {
  server.use(
    getCommentV2(mockCommentsV2),
    getReferenceDataV1([...mockCategoryReferenceDataV1, ...mockCommentReferenceDataV1]),
    getRepairsV1(),
  );
});
