export interface UpdateAddressDetailsRequest {
  postPreamble: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  postCode: string;
}
export declare const updateAddressDetails: (
  propertyReference: string,
  request: UpdateAddressDetailsRequest,
) => Promise<void>;
//# sourceMappingURL=service.d.ts.map
