"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfiguration = void 0;
const react_1 = require("react");
const configuration_1 = require("@mtfh/common/lib/configuration");
const useConfiguration = (path) => {
  const [config, setConfig] = (0, react_1.useState)(
    (0, configuration_1.getConfigItem)(path),
  );
  (0, react_1.useEffect)(() => {
    const subscription = configuration_1.$configuration.subscribe(() => {
      setConfig((0, configuration_1.getConfigItem)(path));
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [path]);
  return config;
};
exports.useConfiguration = useConfiguration;
