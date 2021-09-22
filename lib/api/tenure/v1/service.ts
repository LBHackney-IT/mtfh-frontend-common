import { config } from '@mtfh/common/lib/config';
import { AxiosSWRResponse, mutate, useAxiosSWR } from '@mtfh/common/lib/hooks';
import { axiosInstance } from '@mtfh/common/lib/http';
import { HouseholdMember, Tenure, TenureAsset, TenureType } from './types';

export const useTenure = (targetId: string): AxiosSWRResponse<Tenure> => {
  return useAxiosSWR(`${config.tenureApiUrlV1}/tenures/${targetId}`);
};

export interface AddTenureParams {
  tenuredAsset: TenureAsset;
  startOfTenureDate: string;
  endOfTenureDate?: string;
  tenureType: TenureType;
}

export const addTenure = async (params: AddTenureParams): Promise<Tenure> => {
  const { data: tenure } = await axiosInstance.post<Tenure>(
    `${config.tenureApiUrlV1}/tenures`,
    params
  );
  mutate(`${config.tenureApiUrlV1}/tenures/${tenure.id}`, tenure, false);

  return tenure;
};

export interface AddPersonToTenureParams {
  etag: string;
  tenureId: string;
  householdMember: HouseholdMember;
}

export const addPersonToTenure = async (
  params: AddPersonToTenureParams
): Promise<HouseholdMember> => {
  const { data: householdMember } = await axiosInstance.patch<HouseholdMember>(
    `${config.tenureApiUrlV1}/tenures/${params.tenureId}/person/${params.householdMember.id}`,
    { ...params.householdMember, etag: params.etag }
  );
  return householdMember;
};
