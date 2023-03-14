import "./mtfh-common.css";
import $kr0JH$axios from "axios";
import {v4 as $kr0JH$v4} from "uuid";
import $kr0JH$jscookie from "js-cookie";
import $kr0JH$jwtdecode from "jwt-decode";
import {BehaviorSubject as $kr0JH$BehaviorSubject} from "rxjs";
import $kr0JH$swr from "swr";
import $kr0JH$swrinfinite from "swr/infinite";
import {jsxs as $kr0JH$jsxs, jsx as $kr0JH$jsx} from "react/jsx-runtime";
import {forwardRef as $kr0JH$forwardRef} from "react";
import $kr0JH$classnames from "classnames";

// export { axiosInstance } from './http/http'





const $359379e3835f5ff6$var$config = {
    appEnv: "development",
    authAllowedGroups: "saml-aws-mtfh-developer,e2e-testing-development,Security_Testing,mmh-project-team,mmh-general-user-access"?.split(",") || [
        "TEST_GROUP"
    ],
    authDomain: "//auth.hackney.gov.uk/auth",
    cookieDomain: "hackney.gov.uk",
    authToken: "hackneyToken",
    configurationApiUrlV1: "https://a9nuohv61k.execute-api.eu-west-2.amazonaws.com/development",
    contactDetailsApiUrlV1: "https://gos4l9my1a.execute-api.eu-west-2.amazonaws.com/development/api/v1",
    contactDetailsApiUrlV2: "https://gos4l9my1a.execute-api.eu-west-2.amazonaws.com/development/api/v2",
    cautionaryApiUrlV1: "https://wv694tecog.execute-api.eu-west-2.amazonaws.com/staging/api/v1",
    personApiUrlV1: "https://sr1g61wye9.execute-api.eu-west-2.amazonaws.com/development/api/v1",
    personApiUrlV2: "https://sr1g61wye9.execute-api.eu-west-2.amazonaws.com/development/api/v2",
    notesApiUrlV1: "https://gvhd4fbr63.execute-api.eu-west-2.amazonaws.com/development/api/v1",
    notesApiUrlV2: "https://gvhd4fbr63.execute-api.eu-west-2.amazonaws.com/development/api/v2",
    tenureApiUrlV1: "https://2524go3mdg.execute-api.eu-west-2.amazonaws.com/development/api/v1",
    assetApiUrlV1: "https://xw8x2e7q06.execute-api.eu-west-2.amazonaws.com/development/api/v1",
    referenceDataApiUrlV1: "https://wu66106de1.execute-api.eu-west-2.amazonaws.com/development/api/v1",
    addressApiUrlV1: "https://6kb2p9kgb0.execute-api.eu-west-2.amazonaws.com/production/api/v1",
    addressApiUrlV2: "/api/v2",
    equalityInformationApiUrlV1: "https://rgq79ov75i.execute-api.eu-west-2.amazonaws.com/development/api/v1",
    repairsHubAppUrl: "https://repairs-hub-development.hackney.gov.uk",
    repairsHubApiUrl: "https://1oxvkycnmc.execute-api.eu-west-2.amazonaws.com/development/api/v2",
    processApiUrlV1: "https://bj7sld6363.execute-api.eu-west-2.amazonaws.com/development/api/v1",
    processApiUrlV2: "https://bj7sld6363.execute-api.eu-west-2.amazonaws.com/development/api/v2"
};
var $359379e3835f5ff6$export$2e2bcd8739ae039 = $359379e3835f5ff6$var$config;




const $6f8b946ffabfebb4$var$voidUser = {
    token: "",
    sub: "",
    email: "",
    iss: "",
    name: "",
    groups: [],
    iat: Number.NaN
};
const $6f8b946ffabfebb4$var$parseToken = ()=>{
    const token = (0, $kr0JH$jscookie).get((0, $359379e3835f5ff6$export$2e2bcd8739ae039).authToken) || null;
    if (!token) return $6f8b946ffabfebb4$var$voidUser;
    try {
        const decodedToken = (0, $kr0JH$jwtdecode)(token);
        return {
            ...decodedToken,
            token: token
        };
    } catch  {
        return $6f8b946ffabfebb4$var$voidUser;
    }
};
const $6f8b946ffabfebb4$export$94f900a053ab5369 = new (0, $kr0JH$BehaviorSubject)($6f8b946ffabfebb4$var$parseToken());
const $6f8b946ffabfebb4$export$ef9b508a7de1e84d = ()=>{
    $6f8b946ffabfebb4$export$94f900a053ab5369.next($6f8b946ffabfebb4$var$parseToken());
};
const $6f8b946ffabfebb4$export$aa1859fa13b5bc66 = (groups)=>{
    const auth = $6f8b946ffabfebb4$export$94f900a053ab5369.getValue();
    return groups.some((group)=>auth.groups.includes(group));
};
const $6f8b946ffabfebb4$export$a985eb0635740fe9 = ()=>$6f8b946ffabfebb4$export$aa1859fa13b5bc66((0, $359379e3835f5ff6$export$2e2bcd8739ae039).authAllowedGroups);
const $6f8b946ffabfebb4$export$a0973bcfe11b05c9 = ()=>{
    $6f8b946ffabfebb4$export$94f900a053ab5369.next($6f8b946ffabfebb4$var$voidUser);
    (0, $kr0JH$jscookie).remove((0, $359379e3835f5ff6$export$2e2bcd8739ae039).authToken, {
        domain: (0, $359379e3835f5ff6$export$2e2bcd8739ae039).cookieDomain
    });
    window.location.reload();
};
const $6f8b946ffabfebb4$export$596d806903d1f59e = (redirectUrl = `${window.location.origin}/search`)=>{
    $6f8b946ffabfebb4$export$a0973bcfe11b05c9();
    window.location.href = `${(0, $359379e3835f5ff6$export$2e2bcd8739ae039).authDomain}?redirect_uri=${encodeURIComponent(redirectUrl)}`;
};




const $31c17c4cc7aaa36d$export$155ec85c4e3b5e85 = (0, $kr0JH$axios).create({
    responseType: "json"
});
$31c17c4cc7aaa36d$export$155ec85c4e3b5e85.interceptors.request.use((reqConfig)=>{
    const req = {
        ...reqConfig,
        headers: {
            ...reqConfig.headers,
            Authorization: `Bearer ${(0, $6f8b946ffabfebb4$export$94f900a053ab5369).getValue().token}`,
            ...reqConfig.headers["skip-x-correlation-id"] ? {} : {
                "x-correlation-id": (0, $kr0JH$v4)()
            }
        }
    };
    delete req.headers["skip-x-correlation-id"];
    if (req.method === "patch" && Object.keys(req.data || {}).includes("etag")) {
        req.headers["If-Match"] = req.data.etag;
        delete req.data.etag;
    }
    return req;
});
$31c17c4cc7aaa36d$export$155ec85c4e3b5e85.interceptors.response.use((res)=>{
    if (res.config.method === "get" && res.data?.id) res.data.etag = res.headers.etag;
    return res;
}, (error)=>{
    if (error.response?.status === 403) {
        if ((0, $6f8b946ffabfebb4$export$a985eb0635740fe9)()) (0, $6f8b946ffabfebb4$export$a0973bcfe11b05c9)();
    }
    throw error;
});
const $31c17c4cc7aaa36d$export$a9a71abd6e0b56fe = ()=>(0, $kr0JH$axios).CancelToken.source();
const $31c17c4cc7aaa36d$export$fbafdbe06a5b5a9a = (e)=>(0, $kr0JH$axios).isAxiosError(e);





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







const $146de147e9b0ec0a$export$7f7cbe89f1eacd2 = /*#__PURE__*/ (0, $kr0JH$forwardRef)(function Spinner({ size: size = "50" , label: label = "Loading..." , ...props }, ref) {
    return /*#__PURE__*/ (0, $kr0JH$jsxs)((0, $c3b0cb676fa5b786$export$f04a61298a47a40f), {
        ref: ref,
        viewBox: "0 0 42 42",
        stroke: "#00703c",
        size: size,
        ...props,
        children: [
            /*#__PURE__*/ (0, $kr0JH$jsx)("title", {
                children: label
            }),
            /*#__PURE__*/ (0, $kr0JH$jsx)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, $kr0JH$jsxs)("g", {
                    transform: "translate(3 3)",
                    strokeWidth: "5",
                    children: [
                        /*#__PURE__*/ (0, $kr0JH$jsx)("circle", {
                            strokeOpacity: ".5",
                            cx: "18",
                            cy: "18",
                            r: "18"
                        }),
                        /*#__PURE__*/ (0, $kr0JH$jsx)("path", {
                            d: "M36 18c0-9.94-8.06-18-18-18",
                            transform: "rotate(112.708 18 18)",
                            children: /*#__PURE__*/ (0, $kr0JH$jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                from: "0 18 18",
                                to: "360 18 18",
                                dur: "1s",
                                repeatCount: "indefinite"
                            })
                        })
                    ]
                })
            })
        ]
    });
});




 // export * from "./status-box";
 // export * from "./status-heading";
 // export * from "./summary-list";
 // export * from "./table";
 // export * from "./text-area";
 // export * from "./text";
 // export * from "./stepper";


const $1c15e570107e2424$export$c7bd411105e2dec3 = "Callum";


export {$1c15e570107e2424$export$c7bd411105e2dec3 as Name, $31c17c4cc7aaa36d$export$155ec85c4e3b5e85 as axiosInstance, $5c7455bce6186693$export$caec2af78bcc877f as Alert, $146de147e9b0ec0a$export$7f7cbe89f1eacd2 as Spinner};
//# sourceMappingURL=mtfh-common.js.map
