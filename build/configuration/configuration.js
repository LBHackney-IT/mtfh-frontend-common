"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeatureToggle = exports.getConfigItem = exports.getConfiguration = exports.$configuration = exports.hydrateConfiguration = void 0;
const rxjs_1 = require("rxjs");
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const initialConfiguration = {
    MMH: {
        configuration: {
            TestConfig: "",
        },
        featureToggles: {
            Test: false,
            EqualityDetails: false,
            ReassignCase: false,
        },
    },
    RH: {
        configuration: {},
        featureToggles: {
            WorkOrderPrinting: false,
            OperativeSplitting: false,
            OperativeManagementMobile: false,
            UpdatingMultiTrades: false,
            LegalDisrepairDisplay: false,
            BudgetCodeSelection: false,
        },
    },
};
const hydrateConfiguration = () => {
    try {
        const features = JSON.parse(window.localStorage.getItem("features") || "");
        if (typeof features === "object") {
            return features;
        }
        throw new Error("Invalid feature store in local storage");
    }
    catch (e) {
        if (localStorage.getItem("features")) {
            window.localStorage.removeItem("features");
        }
    }
    return {};
};
exports.hydrateConfiguration = hydrateConfiguration;
exports.$configuration = new rxjs_1.BehaviorSubject((0, exports.hydrateConfiguration)());
const getConfiguration = async () => {
    try {
        const res = await http_1.axiosInstance.get(`${config_1.config.configurationApiUrlV1}/api/v1/configuration?types=MMH`);
        res.data.forEach(({ type, featureToggles, configuration }) => {
            const configs = exports.$configuration.getValue();
            exports.$configuration.next({
                ...configs,
                [type]: {
                    featureToggles,
                    configuration,
                },
            });
        });
        window.localStorage.setItem("features", JSON.stringify(exports.$configuration.getValue()));
    }
    catch (e) {
        // TODO add logging for failed configuration
    }
};
exports.getConfiguration = getConfiguration;
const getAppConfig = (type) => {
    const configs = exports.$configuration.getValue();
    const appConfig = configs[type];
    return appConfig || null;
};
const getConfigItem = (path) => {
    const [type, key] = path.split(".");
    const appConfig = getAppConfig(type);
    return (appConfig === null || appConfig === void 0 ? void 0 : appConfig.configuration[key]) || "";
};
exports.getConfigItem = getConfigItem;
const getFeatureToggle = (path) => {
    const [type, key] = path.split(".");
    const appConfig = getAppConfig(type);
    const value = appConfig === null || appConfig === void 0 ? void 0 : appConfig.featureToggles[key];
    return typeof value === "boolean" ? value : false;
};
exports.getFeatureToggle = getFeatureToggle;
