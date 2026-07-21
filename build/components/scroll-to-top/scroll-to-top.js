"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollToTop = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const ScrollToTop = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const prevPathname = (0, react_1.useRef)(pathname);
    const { action } = (0, react_router_dom_1.useHistory)();
    (0, react_1.useEffect)(() => {
        if (action !== "POP" && pathname !== prevPathname.current) {
            window.scrollTo(0, 0);
        }
        prevPathname.current = pathname;
    }, [pathname, action]);
    return null;
};
exports.ScrollToTop = ScrollToTop;
