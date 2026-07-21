import { TenureSummary } from "@mtfh/common/lib/api/person/v1";
import { AxiosSWRConfiguration, AxiosSWRResponse } from "@mtfh/common/lib/http";
import { Alert, CautionaryAlert } from "./types";
export declare const useCautionaryAlert: (id: string | null, options?: AxiosSWRConfiguration<any>) => AxiosSWRResponse<CautionaryAlert>;
export declare const useCautionaryAlertByAlertId: (alertId: string, options?: AxiosSWRConfiguration<any>) => AxiosSWRResponse<CautionaryAlert>;
export declare const usePropertyCautionaryAlert: (propertyRef: string | null, options?: AxiosSWRConfiguration<any>) => AxiosSWRResponse<CautionaryAlert>;
export declare const getPropertyCautionaryAlerts: (assetId: string) => Promise<CautionaryAlert>;
export type PostCautionaryAlertRequestData = Pick<Alert, "assureReference"> & {
    incidentDate: string;
    incidentDescription: string;
    alert: {
        code: string;
        description: string;
    };
    assetDetails?: Pick<TenureSummary, "propertyReference" | "uprn"> & {
        id: string;
        fullAddress: string;
    };
    personDetails: {
        id: string;
        name: string;
    };
};
export declare const addCautionaryAlert: (data: PostCautionaryAlertRequestData) => Promise<Alert>;
export interface EndCautionaryAlertRequestData {
    endDate: Date;
}
export declare const endCautionaryAlert: (alertId: string, data: EndCautionaryAlertRequestData) => Promise<void>;
//# sourceMappingURL=service.d.ts.map