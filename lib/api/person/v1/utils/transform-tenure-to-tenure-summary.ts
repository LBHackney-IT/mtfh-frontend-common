import { Tenure } from '../../../tenure/v1/types';
import { TenureSummary } from '../types';

export const transformTenureToTenureSummary = ({
  id,
  startOfTenureDate,
  endOfTenureDate,
  tenuredAsset: { id: assetId, fullAddress, uprn },
  tenureType: { description: type },
  isActive,
  paymentReference,
  propertyReference,
}: Tenure): TenureSummary => ({
  id,
  startDate: startOfTenureDate,
  endDate: endOfTenureDate!,
  assetFullAddress: fullAddress,
  assetId,
  uprn,
  isActive,
  type,
  paymentReference,
  propertyReference,
});
