"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageAnnouncementProvider =
  exports.usePageAnnouncement =
  exports.PageAnnouncementContext =
    void 0;
const react_1 = __importStar(require("react"));
exports.PageAnnouncementContext = (0, react_1.createContext)(undefined);
exports.PageAnnouncementContext.displayName = "PageAnnouncementContext";
const usePageAnnouncement = () => {
  var _a;
  const context = (0, react_1.useContext)(exports.PageAnnouncementContext);
  if (!context) {
    const error = new Error(
      "usePageAnnouncementContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    );
    (_a = Error.captureStackTrace) === null || _a === void 0
      ? void 0
      : _a.call(Error, error, exports.usePageAnnouncement);
    throw error;
  }
  const { state, dispatch } = context;
  const addAnnouncement = (0, react_1.useCallback)(
    (props) => {
      dispatch({ type: "ADD", payload: props });
    },
    [dispatch],
  );
  const clearAnnouncement = (0, react_1.useCallback)(() => {
    dispatch({ type: "CLEAR" });
  }, [dispatch]);
  return {
    state,
    addAnnouncement,
    clearAnnouncement,
  };
};
exports.usePageAnnouncement = usePageAnnouncement;
const PageAnnouncementProvider = ({ sessionKey, children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return action.payload;
      case "CLEAR":
      default:
        return undefined;
    }
  };
  const initialData = (0, react_1.useMemo)(() => {
    if (sessionKey) {
      const data = {
        heading: window.sessionStorage.getItem(`${sessionKey}:heading`) || "",
        variant: window.sessionStorage.getItem(`${sessionKey}:variant`) || "success",
        description: window.sessionStorage.getItem(`${sessionKey}:description`) || "",
      };
      if (data.heading) {
        window.sessionStorage.removeItem(`${sessionKey}:heading`);
        window.sessionStorage.removeItem(`${sessionKey}:variant`);
        window.sessionStorage.removeItem(`${sessionKey}:description`);
        return data;
      }
    }
    return undefined;
  }, [sessionKey]);
  const [state, dispatch] = (0, react_1.useReducer)(reducer, initialData);
  const value = (0, react_1.useMemo)(() => ({ state, dispatch }), [state, dispatch]);
  return react_1.default.createElement(
    exports.PageAnnouncementContext.Provider,
    { value: value },
    children,
  );
};
exports.PageAnnouncementProvider = PageAnnouncementProvider;
