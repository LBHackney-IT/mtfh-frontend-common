"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrorCodes = void 0;
const react_1 = require("react");
const v1_1 = require("@mtfh/common/lib/api/reference-data/v1");
const locale_1 = __importDefault(require("../locale"));
const { hooks } = locale_1.default;
const { defaultErrorMessages } = hooks;
const useErrorCodes = () => {
    const [errorMessages, setErrorMessages] = (0, react_1.useState)(defaultErrorMessages);
    const { data, error } = (0, v1_1.useReferenceData)({
        category: "error-code",
        subCategory: "mmh",
    });
    (0, react_1.useEffect)(() => {
        if (data === null || data === void 0 ? void 0 : data.mmh) {
            const fromErr = data === null || data === void 0 ? void 0 : data.mmh.reduce((acc, obj) => {
                acc[obj.code] = obj.value;
                return acc;
            }, {});
            const mergedErrors = { ...defaultErrorMessages, ...fromErr };
            setErrorMessages(mergedErrors);
        }
    }, [data]);
    if (!data && !error) {
        return null;
    }
    return errorMessages;
};
exports.useErrorCodes = useErrorCodes;
