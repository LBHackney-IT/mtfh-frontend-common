"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCautionaryAlertCodes = void 0;
const react_1 = require("react");
const v1_1 = require("@mtfh/common/lib/api/reference-data/v1");
const locale_1 = __importDefault(require("../locale"));
const { hooks } = locale_1.default;
const { defaultCautionaryAlerts } = hooks;
const useCautionaryAlertCodes = () => {
    const [cautionaryAlerts, setCautionaryAlerts] = (0, react_1.useState)(defaultCautionaryAlerts);
    const { data, error } = (0, v1_1.useReferenceData)({
        category: "cautionary-alert",
        subCategory: "alert-type",
    });
    (0, react_1.useEffect)(() => {
        if (data === null || data === void 0 ? void 0 : data["alert-type"]) {
            const fromErr = data === null || data === void 0 ? void 0 : data["alert-type"].reduce((acc, obj) => {
                acc[obj.code] = obj.value;
                return acc;
            }, {});
            const mergedCautionaryAlerts = { ...defaultCautionaryAlerts, ...fromErr };
            setCautionaryAlerts(mergedCautionaryAlerts);
        }
    }, [data]);
    if (!data && !error) {
        return null;
    }
    return cautionaryAlerts;
};
exports.useCautionaryAlertCodes = useCautionaryAlertCodes;
