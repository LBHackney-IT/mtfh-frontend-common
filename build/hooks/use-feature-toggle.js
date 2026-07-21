"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFeatureToggle = void 0;
const react_1 = require("react");
const configuration_1 = require("@mtfh/common/lib/configuration");
const useFeatureToggle = (path) => {
    const [toggle, setToggle] = (0, react_1.useState)((0, configuration_1.getFeatureToggle)(path));
    (0, react_1.useEffect)(() => {
        const subscription = configuration_1.$configuration.subscribe(() => {
            setToggle((0, configuration_1.getFeatureToggle)(path));
        });
        return () => {
            subscription.unsubscribe();
        };
    }, [path]);
    return toggle;
};
exports.useFeatureToggle = useFeatureToggle;
