import { Tenure } from "../../../tenure/v1/types";
import { TenureSummary } from "../types";
export declare const transformTenureToTenureSummary: ({ id, startOfTenureDate, endOfTenureDate, tenuredAsset: { id: assetId, fullAddress, uprn, propertyReference }, tenureType: { description: type }, isActive, paymentReference, }: Tenure) => TenureSummary;
