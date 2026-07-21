"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endCautionaryAlert = exports.addCautionaryAlert = exports.getPropertyCautionaryAlerts = exports.usePropertyCautionaryAlert = exports.useCautionaryAlertByAlertId = exports.useCautionaryAlert = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const useCautionaryAlert = (id, options) => {
    return (0, http_1.useAxiosSWR)(id && `${config_1.config.cautionaryApiUrlV1}/cautionary-alerts/persons/${id}`, options);
};
exports.useCautionaryAlert = useCautionaryAlert;
const useCautionaryAlertByAlertId = (alertId, options) => {
    return (0, http_1.useAxiosSWR)(alertId && `${config_1.config.cautionaryApiUrlV1}/cautionary-alerts/alert/${alertId}`, options);
};
exports.useCautionaryAlertByAlertId = useCautionaryAlertByAlertId;
const usePropertyCautionaryAlert = (propertyRef, options) => {
    return (0, http_1.useAxiosSWR)(propertyRef &&
        `${config_1.config.cautionaryApiUrlV1}/cautionary-alerts/properties-new/${propertyRef}`, options);
};
exports.usePropertyCautionaryAlert = usePropertyCautionaryAlert;
const getPropertyCautionaryAlerts = async (assetId) => {
    return new Promise((resolve, reject) => {
        http_1.axiosInstance
            .get(`${config_1.config.cautionaryApiUrlV1}/cautionary-alerts/properties-new/${assetId}`, {
            headers: {
                "skip-x-correlation-id": true,
            },
        })
            .then((res) => resolve(res.data))
            .catch((error) => reject(error));
    });
};
exports.getPropertyCautionaryAlerts = getPropertyCautionaryAlerts;
const addCautionaryAlert = async (data) => {
    const { data: alert } = await http_1.axiosInstance.post(`${config_1.config.cautionaryApiUrlV1}/cautionary-alerts/`, data);
    return {
        ...alert,
        alertCode: alert.code,
        description: alert.cautionOnSystem,
        personName: alert.name,
        startDate: alert.dateOfIncident,
    };
};
exports.addCautionaryAlert = addCautionaryAlert;
const endCautionaryAlert = async (alertId, data) => {
    await http_1.axiosInstance.patch(`${config_1.config.cautionaryApiUrlV1}/cautionary-alerts/alerts/${alertId}/end-alert`, data);
};
exports.endCautionaryAlert = endCautionaryAlert;
