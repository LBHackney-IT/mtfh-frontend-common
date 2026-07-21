"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformTenureToTenureSummary = void 0;
const transformTenureToTenureSummary = ({ id, startOfTenureDate, endOfTenureDate, tenuredAsset: { id: assetId, fullAddress, uprn, propertyReference }, tenureType: { description: type }, isActive, paymentReference, }) => ({
    id,
    startDate: startOfTenureDate,
    endDate: endOfTenureDate,
    assetFullAddress: fullAddress,
    assetId,
    uprn,
    isActive,
    type,
    paymentReference,
    propertyReference,
});
exports.transformTenureToTenureSummary = transformTenureToTenureSummary;
