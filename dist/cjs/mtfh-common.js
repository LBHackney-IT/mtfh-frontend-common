import "./mtfh-common.css";
import $kr0JH$axios from "axios";
import $kr0JH$swr from "swr";
import $kr0JH$swrinfinite from "swr/infinite";
import {jsxs as $kr0JH$jsxs, jsx as $kr0JH$jsx} from "react/jsx-runtime";
import {forwardRef as $kr0JH$forwardRef} from "react";
import $kr0JH$classnames from "classnames";

// export { axiosInstance } from './http/http'

const $31c17c4cc7aaa36d$export$155ec85c4e3b5e85 = (0, $kr0JH$axios).create({
    responseType: "json"
}); // axiosInstance.interceptors.request.use((reqConfig) => {
 //   const req: Config = {
 //     ...reqConfig,
 //     headers: {
 //       ...reqConfig.headers,
 //       Authorization: `Bearer ${$auth.getValue().token}`,
 //       ...(reqConfig.headers["skip-x-correlation-id"]
 //         ? {}
 //         : { "x-correlation-id": uuid() }),
 //     },
 //   };
 //   delete req.headers["skip-x-correlation-id"];
 //   if (req.method === "patch" && Object.keys(req.data || {}).includes("etag")) {
 //     req.headers["If-Match"] = req.data.etag;
 //     delete req.data.etag;
 //   }
 //   return req;
 // });
 // axiosInstance.interceptors.response.use(
 //   (res) => {
 //     if (res.config.method === "get" && res.data?.id) {
 //       res.data.etag = res.headers.etag;
 //     }
 //     return res;
 //   },
 //   (error: AxiosError) => {
 //     if (error.response?.status === 403) {
 //       if (isAuthorised()) {
 //         logout();
 //       }
 //     }
 //     throw error;
 //   },
 // );
 // export const createCancelToken = (): CancelTokenSource => axios.CancelToken.source();
 // export const isAxiosError = (e: unknown): e is AxiosError => axios.isAxiosError(e);





const $88fa3d186dcadbc0$export$91375b104025299 = (options = {})=>(url)=>(0, $31c17c4cc7aaa36d$export$155ec85c4e3b5e85).get(url, options).then((res)=>res.data);
const $88fa3d186dcadbc0$export$a84fc53129590f47 = (key, options = {})=>(0, $kr0JH$swr)(key, $88fa3d186dcadbc0$export$91375b104025299(options), {
        shouldRetryOnError: false,
        ...options
    });
const $88fa3d186dcadbc0$export$18b3a6cf21214f90 = (key, options = {})=>(0, $kr0JH$swrinfinite)(key, $88fa3d186dcadbc0$export$91375b104025299(options), options);






// export * from "./accordion";






const $c3b0cb676fa5b786$export$f04a61298a47a40f = /*#__PURE__*/ (0, $kr0JH$forwardRef)(function Icon({ width: width , height: height , color: color , className: className , size: size = "1em" , focusable: focusable = false , ...props }, ref) {
    const iconClasses = (0, $kr0JH$classnames)("mtfh-icon", className);
    const style = {};
    if (color && color !== "currentColor") style.color = color;
    return /*#__PURE__*/ (0, $kr0JH$jsx)("svg", {
        ref: ref,
        className: iconClasses,
        width: width || size,
        height: height || size,
        focusable: focusable,
        style: style,
        ...props
    });
});




const $5c7455bce6186693$export$caec2af78bcc877f = /*#__PURE__*/ (0, $kr0JH$forwardRef)(function Spinner({ size: size = "24" , ...props }, ref) {
    return /*#__PURE__*/ (0, $kr0JH$jsxs)((0, $c3b0cb676fa5b786$export$f04a61298a47a40f), {
        ref: ref,
        size: size,
        ...props,
        children: [
            /*#__PURE__*/ (0, $kr0JH$jsx)("path", {
                d: "M16.5 42.6212C18.7688 42.6212 20.625 40.7605 20.625 38.4863H12.375C12.375 40.7605 14.2312 42.6212 16.5 42.6212Z",
                fill: "#BE3A34"
            }),
            /*#__PURE__*/ (0, $kr0JH$jsx)("path", {
                d: "M28.875 30.2225V19.8849C28.875 13.5376 25.5131 8.22412 19.5938 6.81821V5.4123C19.5938 3.69627 18.2119 2.31104 16.5 2.31104C14.7881 2.31104 13.4062 3.69627 13.4062 5.4123V6.81821C7.5075 8.22412 4.125 13.517 4.125 19.8849V30.2225L0 34.3575V36.425H33V34.3575L31.1268 32.4797L28.875 30.2225Z",
                fill: "#BE3A34"
            }),
            /*#__PURE__*/ (0, $kr0JH$jsx)("path", {
                d: "M17.5808 25.7373H15.4363L14.988 17.1504H18.0291L17.5808 25.7373ZM14.9529 28.7432C14.9529 28.1924 15.1023 27.8057 15.4011 27.583C15.7058 27.3604 16.072 27.249 16.4998 27.249C16.9158 27.249 17.2732 27.3604 17.572 27.583C17.8767 27.8057 18.0291 28.1924 18.0291 28.7432C18.0291 29.2705 17.8767 29.6514 17.572 29.8857C17.2732 30.1201 16.9158 30.2373 16.4998 30.2373C16.072 30.2373 15.7058 30.1201 15.4011 29.8857C15.1023 29.6514 14.9529 29.2705 14.9529 28.7432Z",
                fill: "white"
            })
        ]
    });
});




 // export * from "./button";
 // export * from "./box";
 // export * from "./card-list";
 // export * from "./center";
 // export * from "./checkboxes";
 // export * from "./checklist";
 // export * from "./comment-list";
 // export * from "./confirmation-router";
 // export * from "./date-input";
 // export * from "./time-input";
 // export * from "./dialog";
 // export * from "./dialog-prompt";
 // export * from "./details";
 // export * from "./error-summary";
 // export * from "./field";
 // export * from "./fieldset";
 // export * from "./form-group";
 // export * from "./heading";
 // export * from "./icon";
 // export * from "./input";
 // export * from "./layout";
 // export * from "./link";
 // export * from "./link-box";
 // export * from "./link-button";
 // export * from "./list";
 // export * from "./number-input";
 // export * from "./page-announcement";
 // export * from "./pagination";
 // export * from "./phase-banner";
 // export * from "./radios";
 // export * from "./work-order-list";
 // export * from "./scroll-to-top";
 // export * from "./select";
 // export * from "./side-bar";
 // export * from "./simple-pagination";
 // export * from "./spinner";
 // export * from "./status-box";
 // export * from "./status-heading";
 // export * from "./summary-list";
 // export * from "./table";
 // export * from "./text-area";
 // export * from "./text";
 // export * from "./stepper";


const $1c15e570107e2424$export$c7bd411105e2dec3 = "Callum";


export {$1c15e570107e2424$export$c7bd411105e2dec3 as Name, $31c17c4cc7aaa36d$export$155ec85c4e3b5e85 as axiosInstance, $5c7455bce6186693$export$caec2af78bcc877f as Alert};
//# sourceMappingURL=mtfh-common.js.map
