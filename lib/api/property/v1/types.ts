export interface AssetAddress {
  uprn: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  postCode: string;
  postPreamble: string;
}

export interface TenureSummary {
  endOfTenureDate: string | null;
}

export interface Property {
  id: string;
  assetId: string;
  assetType: string;
  assetAddress: AssetAddress;
  tenure: TenureSummary | null;
}
