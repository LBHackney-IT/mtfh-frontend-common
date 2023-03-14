import {jsx as $2HdCV$jsx, jsxs as $2HdCV$jsxs, Fragment as $2HdCV$Fragment} from "react/jsx-runtime";
import $2HdCV$react, {forwardRef as $2HdCV$forwardRef, useRef as $2HdCV$useRef, useEffect as $2HdCV$useEffect, useMemo as $2HdCV$useMemo, Children as $2HdCV$Children, isValidElement as $2HdCV$isValidElement, cloneElement as $2HdCV$cloneElement, useState as $2HdCV$useState, useCallback as $2HdCV$useCallback, createContext as $2HdCV$createContext, useContext as $2HdCV$useContext, useReducer as $2HdCV$useReducer} from "react";
import $2HdCV$axios from "axios";
import {v4 as $2HdCV$v4} from "uuid";
import $2HdCV$jscookie from "js-cookie";
import $2HdCV$jwtdecode from "jwt-decode";
import {BehaviorSubject as $2HdCV$BehaviorSubject} from "rxjs";
import $2HdCV$swr, {mutate as $88fa3d186dcadbc0$re_export$mutate} from "swr";
import $2HdCV$swrinfinite from "swr/infinite";
import $2HdCV$reactmergerefs from "react-merge-refs";
import $2HdCV$classnames from "classnames";
import {Accordion as $2HdCV$Accordion, Checkboxes as $2HdCV$Checkboxes, ErrorSummary as $2HdCV$ErrorSummary, Details as $2HdCV$Details, Radios as $2HdCV$Radios} from "lbh-frontend";
import {differenceInYears as $2HdCV$differenceInYears, parseISO as $2HdCV$parseISO, isSameDay as $2HdCV$isSameDay, isValid as $2HdCV$isValid, format as $2HdCV$format, isFuture as $2HdCV$isFuture, parse as $2HdCV$parse} from "date-fns";
import {diff as $2HdCV$diff} from "deep-diff";
import {stringify as $2HdCV$stringify} from "query-string";
import {BrowserRouter as $2HdCV$BrowserRouter, matchPath as $2HdCV$matchPath, useLocation as $2HdCV$useLocation, useHistory as $2HdCV$useHistory, useRouteMatch as $2HdCV$useRouteMatch, Prompt as $2HdCV$Prompt} from "react-router-dom";
import {Dialog as $2HdCV$Dialog} from "@reach/dialog";
import "@reach/dialog/styles.css";
import {useField as $2HdCV$useField} from "formik";
import $2HdCV$usebreakpoint from "use-breakpoint";

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}


const $08398a1b9daf8edd$export$59e116b9e6c36e7f = ()=>/*#__PURE__*/ (0, $2HdCV$jsx)("button", {
        children: "Test Button"
    });


var $2af0713ce5b1dfb1$exports = {};
var $6c736a18ee080817$exports = {};

$parcel$export($6c736a18ee080817$exports, "axiosInstance", function () { return $6c736a18ee080817$export$155ec85c4e3b5e85; });
$parcel$export($6c736a18ee080817$exports, "createCancelToken", function () { return $6c736a18ee080817$export$a9a71abd6e0b56fe; });
$parcel$export($6c736a18ee080817$exports, "isAxiosError", function () { return $6c736a18ee080817$export$fbafdbe06a5b5a9a; });


var $a39849e573d08451$exports = {};
var $6f8b946ffabfebb4$exports = {};

$parcel$export($6f8b946ffabfebb4$exports, "$auth", function () { return $6f8b946ffabfebb4$export$94f900a053ab5369; });
$parcel$export($6f8b946ffabfebb4$exports, "processToken", function () { return $6f8b946ffabfebb4$export$ef9b508a7de1e84d; });
$parcel$export($6f8b946ffabfebb4$exports, "isAuthorisedForGroups", function () { return $6f8b946ffabfebb4$export$aa1859fa13b5bc66; });
$parcel$export($6f8b946ffabfebb4$exports, "isAuthorised", function () { return $6f8b946ffabfebb4$export$a985eb0635740fe9; });
$parcel$export($6f8b946ffabfebb4$exports, "logout", function () { return $6f8b946ffabfebb4$export$a0973bcfe11b05c9; });
$parcel$export($6f8b946ffabfebb4$exports, "login", function () { return $6f8b946ffabfebb4$export$596d806903d1f59e; });



const $359379e3835f5ff6$var$config = {
    appEnv: "test",
    authAllowedGroups: undefined?.split(",") || [
        "TEST_GROUP"
    ],
    authDomain: "//auth.hackney.gov.uk/auth",
    cookieDomain: "hackney.gov.uk",
    authToken: "hackneyToken",
    configurationApiUrlV1: "",
    contactDetailsApiUrlV1: "/api/v1",
    contactDetailsApiUrlV2: "/api/v2",
    cautionaryApiUrlV1: "/api/v1",
    personApiUrlV1: "/api/v1",
    personApiUrlV2: "/api/v2",
    notesApiUrlV1: "/api/v1",
    notesApiUrlV2: "/api/v2",
    tenureApiUrlV1: "/api/v1",
    assetApiUrlV1: "/api/v1",
    referenceDataApiUrlV1: "/api/v1",
    addressApiUrlV1: "/api/v1",
    addressApiUrlV2: "/api/v2",
    equalityInformationApiUrlV1: "/api/v1",
    repairsHubAppUrl: "/api/v1",
    repairsHubApiUrl: "/api/v1",
    processApiUrlV1: "/api/v1",
    processApiUrlV2: "/api/v2"
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
    const token = (0, $2HdCV$jscookie).get((0, $359379e3835f5ff6$export$2e2bcd8739ae039).authToken) || null;
    if (!token) return $6f8b946ffabfebb4$var$voidUser;
    try {
        const decodedToken = (0, $2HdCV$jwtdecode)(token);
        return {
            ...decodedToken,
            token: token
        };
    } catch  {
        return $6f8b946ffabfebb4$var$voidUser;
    }
};
const $6f8b946ffabfebb4$export$94f900a053ab5369 = new (0, $2HdCV$BehaviorSubject)($6f8b946ffabfebb4$var$parseToken());
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
    (0, $2HdCV$jscookie).remove((0, $359379e3835f5ff6$export$2e2bcd8739ae039).authToken, {
        domain: (0, $359379e3835f5ff6$export$2e2bcd8739ae039).cookieDomain
    });
    window.location.reload();
};
const $6f8b946ffabfebb4$export$596d806903d1f59e = (redirectUrl = `${window.location.origin}/search`)=>{
    $6f8b946ffabfebb4$export$a0973bcfe11b05c9();
    window.location.href = `${(0, $359379e3835f5ff6$export$2e2bcd8739ae039).authDomain}?redirect_uri=${encodeURIComponent(redirectUrl)}`;
};


$parcel$exportWildcard($a39849e573d08451$exports, $6f8b946ffabfebb4$exports);


const $6c736a18ee080817$export$155ec85c4e3b5e85 = (0, $2HdCV$axios).create({
    responseType: "json"
});
$6c736a18ee080817$export$155ec85c4e3b5e85.interceptors.request.use((reqConfig)=>{
    const req = {
        ...reqConfig,
        headers: {
            ...reqConfig.headers,
            Authorization: `Bearer ${(0, $6f8b946ffabfebb4$export$94f900a053ab5369).getValue().token}`,
            ...reqConfig.headers["skip-x-correlation-id"] ? {} : {
                "x-correlation-id": (0, $2HdCV$v4)()
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
$6c736a18ee080817$export$155ec85c4e3b5e85.interceptors.response.use((res)=>{
    if (res.config.method === "get" && res.data?.id) res.data.etag = res.headers.etag;
    return res;
}, (error)=>{
    if (error.response?.status === 403) {
        if ((0, $6f8b946ffabfebb4$export$a985eb0635740fe9)()) (0, $6f8b946ffabfebb4$export$a0973bcfe11b05c9)();
    }
    throw error;
});
const $6c736a18ee080817$export$a9a71abd6e0b56fe = ()=>(0, $2HdCV$axios).CancelToken.source();
const $6c736a18ee080817$export$fbafdbe06a5b5a9a = (e)=>(0, $2HdCV$axios).isAxiosError(e);


var $b6bbd78182bcd135$exports = {};
var $88fa3d186dcadbc0$exports = {};

$parcel$export($88fa3d186dcadbc0$exports, "axiosFetcher", function () { return $88fa3d186dcadbc0$export$91375b104025299; });
$parcel$export($88fa3d186dcadbc0$exports, "useAxiosSWR", function () { return $88fa3d186dcadbc0$export$a84fc53129590f47; });
$parcel$export($88fa3d186dcadbc0$exports, "useAxiosSWRInfinite", function () { return $88fa3d186dcadbc0$export$18b3a6cf21214f90; });
$parcel$export($88fa3d186dcadbc0$exports, "mutate", function () { return $88fa3d186dcadbc0$re_export$mutate; });



const $88fa3d186dcadbc0$export$91375b104025299 = (options = {})=>(url)=>(0, $6c736a18ee080817$export$155ec85c4e3b5e85).get(url, options).then((res)=>res.data);
const $88fa3d186dcadbc0$export$a84fc53129590f47 = (key, options = {})=>(0, $2HdCV$swr)(key, $88fa3d186dcadbc0$export$91375b104025299(options), {
        shouldRetryOnError: false,
        ...options
    });
const $88fa3d186dcadbc0$export$18b3a6cf21214f90 = (key, options = {})=>(0, $2HdCV$swrinfinite)(key, $88fa3d186dcadbc0$export$91375b104025299(options), options);


$parcel$exportWildcard($b6bbd78182bcd135$exports, $88fa3d186dcadbc0$exports);


$parcel$exportWildcard($2af0713ce5b1dfb1$exports, $6c736a18ee080817$exports);
$parcel$exportWildcard($2af0713ce5b1dfb1$exports, $b6bbd78182bcd135$exports);



var $f519227ee9dfa697$exports = {};
var $b42111426b53f26f$exports = {};

$parcel$export($b42111426b53f26f$exports, "hydrateConfiguration", function () { return $b42111426b53f26f$export$99fef60adacea338; });
$parcel$export($b42111426b53f26f$exports, "$configuration", function () { return $b42111426b53f26f$export$c7de631ed348a50; });
$parcel$export($b42111426b53f26f$exports, "getConfiguration", function () { return $b42111426b53f26f$export$3de01744a82b21a4; });
$parcel$export($b42111426b53f26f$exports, "getConfigItem", function () { return $b42111426b53f26f$export$bd5d7e8cfaa78c6f; });
$parcel$export($b42111426b53f26f$exports, "getFeatureToggle", function () { return $b42111426b53f26f$export$8f4de18e72a21ac0; });



const $b42111426b53f26f$var$initialConfiguration = {
    MMH: {
        configuration: {
            TestConfig: ""
        },
        featureToggles: {
            Test: false,
            EqualityDetails: false,
            ReassignCase: false
        }
    },
    RH: {
        configuration: {},
        featureToggles: {
            WorkOrderPrinting: false,
            OperativeSplitting: false,
            OperativeManagementMobile: false,
            UpdatingMultiTrades: false,
            LegalDisrepairDisplay: false,
            BudgetCodeSelection: false
        }
    }
};
const $b42111426b53f26f$export$99fef60adacea338 = ()=>{
    try {
        const features = JSON.parse(window.localStorage.getItem("features") || "");
        if (typeof features === "object") return features;
        throw new Error("Invalid feature store in local storage");
    } catch (e) {
        if (localStorage.getItem("features")) window.localStorage.removeItem("features");
    }
    return {};
};
const $b42111426b53f26f$export$c7de631ed348a50 = new (0, $2HdCV$BehaviorSubject)($b42111426b53f26f$export$99fef60adacea338());
const $b42111426b53f26f$export$3de01744a82b21a4 = async ()=>{
    try {
        const res = await (0, $6c736a18ee080817$export$155ec85c4e3b5e85).get(`${(0, $359379e3835f5ff6$export$2e2bcd8739ae039).configurationApiUrlV1}/api/v1/configuration?types=MMH`);
        res.data.forEach(({ type: type , featureToggles: featureToggles , configuration: configuration  })=>{
            const configs = $b42111426b53f26f$export$c7de631ed348a50.getValue();
            $b42111426b53f26f$export$c7de631ed348a50.next({
                ...configs,
                [type]: {
                    featureToggles: featureToggles,
                    configuration: configuration
                }
            });
        });
        window.localStorage.setItem("features", JSON.stringify($b42111426b53f26f$export$c7de631ed348a50.getValue()));
    } catch (e) {
    // TODO add logging for failed configuration
    }
};
const $b42111426b53f26f$var$getAppConfig = (type)=>{
    const configs = $b42111426b53f26f$export$c7de631ed348a50.getValue();
    const appConfig = configs[type];
    return appConfig || null;
};
const $b42111426b53f26f$export$bd5d7e8cfaa78c6f = (path)=>{
    const [type, key] = path.split(".");
    const appConfig = $b42111426b53f26f$var$getAppConfig(type);
    return appConfig?.configuration[key] || "";
};
const $b42111426b53f26f$export$8f4de18e72a21ac0 = (path)=>{
    const [type, key] = path.split(".");
    const appConfig = $b42111426b53f26f$var$getAppConfig(type);
    const value = appConfig?.featureToggles[key];
    return typeof value === "boolean" ? value : false;
};


$parcel$exportWildcard($f519227ee9dfa697$exports, $b42111426b53f26f$exports);









const $03d980bb1cadebff$var$voidDate = new Date("1900-01-01T00:00:00");
function $03d980bb1cadebff$export$6b862160d295c8e(date) {
    if (!date) return null;
    const parsedDate = (0, $2HdCV$parseISO)(date);
    return !(0, $2HdCV$isSameDay)(parsedDate, $03d980bb1cadebff$var$voidDate) && (0, $2HdCV$isValid)(parsedDate) ? parsedDate : null;
}
const $03d980bb1cadebff$export$3ae94a2503e890a1 = (date)=>{
    const parsedDate = $03d980bb1cadebff$export$6b862160d295c8e(date);
    if (!parsedDate) return "";
    return (0, $2HdCV$format)(parsedDate, "dd/MM/yyyy");
};
const $03d980bb1cadebff$export$3203edd9e5edd663 = (date)=>{
    const parsedDate = $03d980bb1cadebff$export$6b862160d295c8e(date);
    if (!parsedDate) return "";
    return (0, $2HdCV$format)(parsedDate, "HH:mm:ss");
};
const $03d980bb1cadebff$export$3c3ec13c4ecfb550 = (date)=>{
    const parsedDate = $03d980bb1cadebff$export$6b862160d295c8e(date);
    if (!parsedDate) return true;
    return (0, $2HdCV$isFuture)(parsedDate);
};
const $03d980bb1cadebff$export$8cca4e1da6b1437 = (dateStr, formatStr)=>{
    return (0, $2HdCV$parse)(dateStr, formatStr, $03d980bb1cadebff$var$voidDate);
};
const $03d980bb1cadebff$export$60dfd74aa96791bd = (date, formatStr)=>{
    return (0, $2HdCV$format)(date, formatStr);
};




const $4e8f64dae4801307$export$fdda6b0e6ad825d = (dob, age)=>{
    const isValidDate = (0, $03d980bb1cadebff$export$6b862160d295c8e)(dob);
    if (!isValidDate) return true;
    const ageInYears = (0, $2HdCV$differenceInYears)(new Date(), isValidDate);
    return ageInYears < age;
};


const $4ea337e890e9a464$export$2903f02042bf33f2 = (value)=>{
    if (value === null || value === undefined) return null;
    return value.replace(/\s/g, "");
};
const $4ea337e890e9a464$export$fc81ed7d6171f33d = (value)=>{
    if (value === null || value === undefined) return null;
    return $4ea337e890e9a464$export$2903f02042bf33f2(value.toUpperCase());
};
const $4ea337e890e9a464$export$cefb40c9962541b5 = (word, value)=>`${word}${Math.abs(value) !== 1 ? "s" : ""}`;



var $261bb599b6ea6324$export$2e2bcd8739ae039 = (width)=>{
    switch(width){
        case 1:
            return "govuk-!-width-full";
        case 0.5:
            return "govuk-!-width-one-half";
        case 1 / 3:
            return "govuk-!-width-one-third";
        case 2 / 3:
            return "govuk-!-width-two-thirds";
        case 1 / 4:
            return "govuk-!-width-one-quarter";
        case 3 / 4:
            return "govuk-!-width-three-quarters";
        default:
            return "";
    }
};



const $8937b2fe2a309ea3$export$19bfa4207d4c5713 = (lhs, rhs)=>{
    const deepDiff = (0, $2HdCV$diff)(lhs, rhs) || [];
    return deepDiff.reduce((acc, change)=>{
        const [path] = change.path;
        acc[path] = rhs[path] || null;
        return acc;
    }, {});
};









const $ad5b03a44afaa2a4$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Heading({ as: HeadingComp , variant: variant = "h1" , className: className , ...props }, ref) {
    const Comp = HeadingComp || variant;
    return /*#__PURE__*/ (0, $2HdCV$jsx)(Comp, {
        ref: ref,
        className: (0, $2HdCV$classnames)(`lbh-heading-${variant}`, className),
        ...props
    });
});




const $d45eb4ba04710c97$export$d99097c13d4dac9f = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function AccordionItem({ as: AccordionItemComp = "div" , children: children , className: className , id: id , title: title  }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)(AccordionItemComp, {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-accordion__section", className),
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                className: "govuk-accordion__section-header",
                children: /*#__PURE__*/ (0, $2HdCV$jsx)((0, $ad5b03a44afaa2a4$export$a8a3e93435678ff9), {
                    as: "h3",
                    variant: "h5",
                    className: "govuk-accordion__section-heading",
                    children: /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                        className: "govuk-accordion__section-button",
                        id: `accordion-heading-${id}`,
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                id: `accordion-content-${id}`,
                className: "govuk-accordion__section-content",
                "aria-labelledby": `accordion-heading-${id}`,
                children: children
            })
        ]
    });
});
const $d45eb4ba04710c97$export$a766cd26d0d69044 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Accordion({ as: AccordionComp = "div" , className: className , defaultIndex: defaultIndex , override: override , visuallyHideControls: visuallyHideControls = false , ...props }, ref) {
    const localRef = (0, $2HdCV$useRef)(null);
    const defaultIndexRef = (0, $2HdCV$useRef)(defaultIndex);
    (0, $2HdCV$useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) {
            const acc = new (0, $2HdCV$Accordion)(localRef.current);
            acc.init();
            /* istanbul ignore else */ if (defaultIndexRef.current !== undefined) {
                const section = acc.$sections.item(defaultIndexRef.current);
                /* istanbul ignore else */ if (section) {
                    const button = section.querySelector(`.${acc.sectionButtonClass}`);
                    /* istanbul ignore else */ if (button) {
                        const contentId = button.getAttribute("aria-controls");
                        /* istanbul ignore else */ if (contentId && !window.sessionStorage.getItem(contentId)) acc.setExpanded(true, acc.$sections.item(defaultIndexRef.current));
                    }
                }
            }
        }
    }, []);
    return /*#__PURE__*/ (0, $2HdCV$jsx)(AccordionComp, {
        className: (0, $2HdCV$classnames)("govuk-accordion", "lbh-accordion", {
            "lbh-accordion--hide-controls": visuallyHideControls
        }, (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className),
        "data-attribute": "value",
        ref: (0, $2HdCV$reactmergerefs)([
            localRef,
            ref
        ]),
        ...props
    });
});









const $c3b0cb676fa5b786$export$f04a61298a47a40f = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Icon({ width: width , height: height , color: color , className: className , size: size = "1em" , focusable: focusable = false , ...props }, ref) {
    const iconClasses = (0, $2HdCV$classnames)("mtfh-icon", className);
    const style = {};
    if (color && color !== "currentColor") style.color = color;
    return /*#__PURE__*/ (0, $2HdCV$jsx)("svg", {
        ref: ref,
        className: iconClasses,
        width: width || size,
        height: height || size,
        focusable: focusable,
        style: style,
        ...props
    });
});




const $5c7455bce6186693$export$caec2af78bcc877f = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Spinner({ size: size = "24" , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $c3b0cb676fa5b786$export$f04a61298a47a40f), {
        ref: ref,
        size: size,
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                d: "M16.5 42.6212C18.7688 42.6212 20.625 40.7605 20.625 38.4863H12.375C12.375 40.7605 14.2312 42.6212 16.5 42.6212Z",
                fill: "#BE3A34"
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                d: "M28.875 30.2225V19.8849C28.875 13.5376 25.5131 8.22412 19.5938 6.81821V5.4123C19.5938 3.69627 18.2119 2.31104 16.5 2.31104C14.7881 2.31104 13.4062 3.69627 13.4062 5.4123V6.81821C7.5075 8.22412 4.125 13.517 4.125 19.8849V30.2225L0 34.3575V36.425H33V34.3575L31.1268 32.4797L28.875 30.2225Z",
                fill: "#BE3A34"
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                d: "M17.5808 25.7373H15.4363L14.988 17.1504H18.0291L17.5808 25.7373ZM14.9529 28.7432C14.9529 28.1924 15.1023 27.8057 15.4011 27.583C15.7058 27.3604 16.072 27.249 16.4998 27.249C16.9158 27.249 17.2732 27.3604 17.572 27.583C17.8767 27.8057 18.0291 28.1924 18.0291 28.7432C18.0291 29.2705 17.8767 29.6514 17.572 29.8857C17.2732 30.1201 16.9158 30.2373 16.4998 30.2373C16.072 30.2373 15.7058 30.1201 15.4011 29.8857C15.1023 29.6514 14.9529 29.2705 14.9529 28.7432Z",
                fill: "white"
            })
        ]
    });
});








// import "./styles.scss";
const $15374ca0713628ab$var$AddIcon = ()=>{
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                d: "M6.94 0L5 0V12H6.94V0Z"
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                d: "M12 5H0V7H12V5Z"
            })
        ]
    });
};
const $15374ca0713628ab$var$ChevronIcon = ()=>{
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("svg", {
        width: "20",
        height: "22",
        viewBox: "0 0 20 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 0H8.54573L20 10H11.4543L0 0Z",
                fill: "white"
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 22L8.54573 22L20 10H11.4543L0 22Z",
                fill: "#96CCAE"
            })
        ]
    });
};
const $15374ca0713628ab$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Button({ as: ButtonComp = "button" , variant: variant = "primary" , isLoading: isLoading = false , loadingText: loadingText , isDisabled: isDisabled , children: children , className: className , override: override , ...props }, ref) {
    const buttonClasses = (0, $2HdCV$classnames)("govuk-button", "lbh-button", {
        "govuk-button--primary lbh-button--add": variant === "add",
        "lbh-button--chevron": variant === "chevron",
        "govuk-button--secondary lbh-button--secondary": variant === "secondary",
        "lbh-button--disabled govuk-button--disabled": isDisabled
    }, (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className);
    const disabled = isDisabled || isLoading || undefined;
    return /*#__PURE__*/ (0, $2HdCV$jsxs)(ButtonComp, {
        ref: ref,
        className: buttonClasses,
        type: ButtonComp === "button" ? "button" : undefined,
        disabled: ButtonComp === "button" ? disabled : undefined,
        "aria-disabled": disabled,
        ...props,
        children: [
            variant === "add" && !isLoading && /*#__PURE__*/ (0, $2HdCV$jsx)($15374ca0713628ab$var$AddIcon, {}),
            isLoading && /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                className: "button-loading-indicator",
                children: /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                    children: "Loading..."
                })
            }),
            isLoading && loadingText ? loadingText : children,
            variant === "chevron" && /*#__PURE__*/ (0, $2HdCV$jsx)($15374ca0713628ab$var$ChevronIcon, {})
        ]
    });
});







const $8f57067b1c0d7880$export$e71c4d32a2263218 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Box({ as: BoxComponent = "div" , variant: variant = "default" , children: children  }, ref) {
    const classes = {
        "mtfh-box": true,
        "mtfh-box--success": variant === "success",
        "mtfh-box--warning": variant === "warning"
    };
    return /*#__PURE__*/ (0, $2HdCV$jsx)(BoxComponent, {
        ref: ref,
        className: (0, $2HdCV$classnames)(classes),
        children: children
    });
});






const $2e2c3f879bb7bf3b$export$bb29c16f5612603e = ({ children: children  })=>{
    return /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        className: "mtfh-card-list",
        children: children
    });
};








const $7a53719b8c8c5793$export$1f54913ccc4368b1 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Center({ as: CenterComp = "div" , horizontally: horizontally = true , vertically: vertically = true , className: className , override: override , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)(CenterComp, {
        ref: ref,
        className: (0, $2HdCV$classnames)("mtfh-center", {
            "mtfh-center--horizontal": horizontally,
            "mtfh-center--vertical": vertically
        }, (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className),
        ...props
    });
});









const $c362af05c15c43eb$export$48513f6b9f8ce62d = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Checkbox({ id: id , className: className , type: type = "checkbox" , hint: hint , children: children , conditionalId: conditionalId , error: error , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        className: (0, $2HdCV$classnames)("govuk-checkboxes__item", className),
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("input", {
                ref: ref,
                id: id,
                className: "govuk-checkboxes__input",
                type: type,
                "aria-describedby": hint ? `${id}-hint` : undefined,
                "data-aria-controls": conditionalId,
                ...props
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("label", {
                className: "govuk-label govuk-checkboxes__label",
                htmlFor: id,
                children: children
            }),
            hint ? /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                id: `${id}-hint`,
                className: "govuk-hint govuk-checkboxes__hint lbh-hint",
                children: hint
            }) : null
        ]
    });
});
const $c362af05c15c43eb$export$e94eb22bc40d1a06 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function CheckboxConditional(props, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        ref: ref,
        className: "govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden",
        ...props
    });
});
const $c362af05c15c43eb$export$4aa08d5625cb8ead = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function CheckboxGroup({ variant: variant = "base" , children: children , error: error , ...props }, ref) {
    const localRef = (0, $2HdCV$useRef)();
    (0, $2HdCV$useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) new (0, $2HdCV$Checkboxes)(localRef.current).init();
    }, []);
    const hasConditionals = (0, $2HdCV$useMemo)(()=>(0, $2HdCV$Children).toArray(children).some((child)=>/*#__PURE__*/ (0, $2HdCV$isValidElement)(child) && child.type === $c362af05c15c43eb$export$e94eb22bc40d1a06), [
        children
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        ref: (0, $2HdCV$reactmergerefs)([
            localRef,
            ref
        ]),
        className: (0, $2HdCV$classnames)("govuk-checkboxes", {
            "govuk-checkboxes--small": variant === "small",
            "govuk-checkboxes--conditionals": hasConditionals
        }, "lbh-checkboxes"),
        ...props,
        children: children
    });
});






// import "./styles.scss";
const $7614cc32bf5a537e$var$CrossIcon = ()=>{
    return /*#__PURE__*/ (0, $2HdCV$jsx)("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
            d: "M5 5L23 23M23 5L5 23",
            stroke: "inherit",
            strokeWidth: "6",
            strokeLinecap: "square"
        })
    });
};
const $7614cc32bf5a537e$var$TickIcon = ()=>{
    return /*#__PURE__*/ (0, $2HdCV$jsx)("svg", {
        width: "31",
        height: "24",
        viewBox: "0 0 31 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
            d: "M26 5L12 19L5 12",
            stroke: "inherit",
            strokeWidth: "6",
            strokeLinecap: "square"
        })
    });
};
const $7614cc32bf5a537e$export$d347637cd596c7c2 = ({ items: items  })=>{
    return /*#__PURE__*/ (0, $2HdCV$jsx)("ul", {
        className: "mtfh-checklist",
        children: items.map((item, index)=>/*#__PURE__*/ (0, $2HdCV$jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                        className: `mtfh-checklist__${item.success ? "tick" : "cross"}-icon`,
                        children: item.success ? /*#__PURE__*/ (0, $2HdCV$jsx)($7614cc32bf5a537e$var$TickIcon, {}) : /*#__PURE__*/ (0, $2HdCV$jsx)($7614cc32bf5a537e$var$CrossIcon, {})
                    }),
                    item.label
                ]
            }, index))
    });
};










const $22b04e3337ac1917$export$80ad823ea511ef0f = (id, { pageSize: pageSize = 5 , ...options } = {})=>{
    return (0, $88fa3d186dcadbc0$export$18b3a6cf21214f90)((page, previous)=>{
        if (!id || previous && !previous?.paginationDetails?.nextToken) return null;
        const params = {
            targetId: id,
            pageSize: pageSize
        };
        if (page !== 0 && previous?.paginationDetails.nextToken) params.paginationToken = previous.paginationDetails.nextToken;
        return `${(0, $359379e3835f5ff6$export$2e2bcd8739ae039).notesApiUrlV2}/notes?${(0, $2HdCV$stringify)(params)}`;
    }, options);
};
const $22b04e3337ac1917$export$1cab2cf04e810197 = async (data)=>{
    const auth = (0, $6f8b946ffabfebb4$export$94f900a053ab5369).getValue();
    const { data: comment  } = await (0, $6c736a18ee080817$export$155ec85c4e3b5e85).post(`${(0, $359379e3835f5ff6$export$2e2bcd8739ae039).notesApiUrlV2}/notes`, {
        ...data,
        createdAt: new Date().toISOString(),
        author: {
            id: auth.sub,
            email: auth.email,
            fullName: auth.name
        }
    });
    return comment;
};








const $acadb3aa92b15cd6$export$caa1c15223f8c264 = ({ category: category , subCategory: subCategory  }, options)=>{
    let params = `category=${category}`;
    /* istanbul ignore else */ if (subCategory) params += `&subCategory=${subCategory}`;
    return (0, $88fa3d186dcadbc0$export$a84fc53129590f47)(`${(0, $359379e3835f5ff6$export$2e2bcd8739ae039).referenceDataApiUrlV1}/reference-data?${params}`, options);
};






const $27ebdec7eb9f670c$var$locale = {
    components: {
        conflictErrorSummary: {
            changesNotSaved: "Changes not saved",
            anotherUserMadeEdit: "Another user has edited this page since you opened it.",
            youEntered: "You entered:",
            toSaveMakeEdit: "To save your changes you must make your edits again."
        },
        formErrorSummary: {
            error: "Error"
        },
        commentList: {
            errors: {
                unableToFetchReferenceData: "There was a problem retrieving the reference data",
                unableToFetchReferenceDataDescription: "Please try again. If the issue persists, please contact support."
            },
            noCommentsAdded: "No comments added"
        },
        workOrderList: {
            raisedAt: "Raised at",
            priority: "Priority",
            errors: {
                unableToFetchWorkOrder: "There was a problem retrieving repairs",
                unableToFetchWorkOrderDescription: "Please try again. If the issue persists, please contact support."
            },
            noRepairs: "No repairs",
            seeAllWorkOrders: "See all repairs in Repairs Hub >",
            selectLabel: "Show",
            selectOptionLabel: "repairs"
        },
        stepper: {
            step: "Step"
        },
        statusErrorSummary: {
            statusTitle: (code)=>{
                switch(code){
                    case 403:
                        return "You don't have the required persmissions to access this resource.";
                    case 409:
                        return $27ebdec7eb9f670c$var$locale.components.conflictErrorSummary.changesNotSaved;
                    default:
                        return "There was a problem with completing the action";
                }
            },
            statusDescription: (code)=>{
                switch(code){
                    case 409:
                        return $27ebdec7eb9f670c$var$locale.components.conflictErrorSummary.anotherUserMadeEdit;
                    default:
                        return "Please try again. If the issue persists, please contact support.";
                }
            }
        }
    },
    hooks: {
        defaultErrorMessages: {
            W1: "You must correct the indicated errors",
            W2: "You must enter a description for this comment",
            W3: "You have 500 characters remaining",
            W4: "You must select an option to proceed",
            W5: "You must select a title to proceed",
            W6: "You must enter this information to proceeed",
            W7: "Date of birth must be in numerical format",
            W8: "You must remove special characters to proceed e.g. #@%$",
            W9: "You must enter a valid date to proceed",
            W10: "This date cannot be in the future",
            W11: "You must enter a valid month to proceed e.g. 01-12",
            W12: "You must enter a valid day to proceed e.g. 01-31",
            W13: "You must enter a valid year to proceed e.g. 1980",
            W14: "You must select a person type to proceed",
            W15: "You must enter a first name for this person",
            W16: "You must enter a last name for this person",
            W17: "You must enter a reason for creating this person",
            W18: "You must select a language or remove the language spoken",
            W19: "You must enter the ID number or remove the ID document",
            W20: "You must indicate if you have seen the ID document",
            W21: "You must select a gender",
            W22: "You must select a nationality",
            W23: "You must enter a valid National Insurance number",
            W24: "You must indicate one language as primary",
            W25: "You cannot enter more than 10 languages",
            W26: "You cannot enter more than 5 IDs",
            W27: "You must enter at least 2 characters.",
            W29: "End date must occur after start date",
            W30: "Start date must occur after the end date of the previous tenure",
            W31: "You must provide a title for this comment",
            W32: "You must select a category for this comment",
            W33: "You must select a valid type to proceed",
            W35: "You must enter a phone number to proceed",
            W36: "You must select a valid type to proceed",
            W38: "You must enter an email address to proceed",
            W40: "You must enter a valid email number to proceed",
            W41: "You must enter a valid phone number to proceed",
            W43: "You cannot add more than xx contact details",
            W44: "We encountered an error. Try again.",
            W45: "You cannot add more than 4 tenure holders",
            W46: "Person could not be created",
            W47: "Person created but could not be added to tenure",
            W48: "Person created but could not be added to tenure",
            W49: "You must enter details when Other is selected",
            W50: "You must enter a reason for closing this case",
            W51: "You must select all options to proceed",
            W52: "The date and time must be in the future",
            W53: "You must enter manager's name.",
            W54: "You must enter a valid hour to proceed e.g. 01-12",
            W55: "You must enter a valid minute to proceed e.g. 00-59",
            W56: "You must enter the tenant's first name",
            W57: "You must enter the tenant's last name",
            W58: "You must remove numbers and special characters to proceed e.g. 0-9 and #@%$"
        },
        defaultCautionaryAlerts: {
            "10‑10": "Verbal abuse"
        }
    }
};
var $27ebdec7eb9f670c$export$2e2bcd8739ae039 = $27ebdec7eb9f670c$var$locale;









const $6c85cfad8f67e2c1$export$d0acb541148b73bf = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function ErrorSummary({ as: ErrorSummaryComp = "div" , id: id , title: title , description: description , className: className , children: children , reFocus: reFocus , override: override , ...props }, ref) {
    const localRef = (0, $2HdCV$useRef)(null);
    (0, $2HdCV$useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) {
            // eslint-disable-next-line no-new
            new (0, $2HdCV$ErrorSummary)(localRef.current);
            localRef.current.scrollIntoView(true);
        }
    }, []);
    (0, $2HdCV$useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) localRef.current.scrollIntoView(true);
    }, [
        reFocus
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsxs)(ErrorSummaryComp, {
        ref: (0, $2HdCV$reactmergerefs)([
            localRef,
            ref
        ]),
        className: (0, $2HdCV$classnames)("govuk-error-summary", "lbh-error-summary", (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className),
        "aria-labelledby": id,
        role: "alert",
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("h2", {
                className: "govuk-error-summary__title",
                id: id,
                children: title
            }),
            description || children ? /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "govuk-error-summary__body",
                children: [
                    description ? /*#__PURE__*/ (0, $2HdCV$jsx)("p", {
                        children: description
                    }) : null,
                    children
                ]
            }) : null
        ]
    });
});









const $c0b0747e319a57c2$export$2b379a888faa093d = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function SummaryListItem({ title: title , actions: actions , children: children , className: className , fallback: fallback , overrides: overrides = [] , ...props }, ref) {
    const value = (0, $2HdCV$useMemo)(()=>typeof children === "string" ? children.trim() : children, [
        children
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-summary-list__row", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("dt", {
                className: (0, $2HdCV$classnames)("govuk-summary-list__key", (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(overrides[0])),
                children: title
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("dd", {
                className: (0, $2HdCV$classnames)("govuk-summary-list__value", (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(overrides[1])),
                children: value || fallback || "N/A"
            }),
            actions && /*#__PURE__*/ (0, $2HdCV$jsx)("dd", {
                className: (0, $2HdCV$classnames)("govuk-summary-list__actions", (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(overrides[2])),
                children: /*#__PURE__*/ (0, $2HdCV$jsx)("ul", {
                    className: "govuk-summary-list__actions-list",
                    children: (0, $2HdCV$Children).map(actions, (action)=>/*#__PURE__*/ (0, $2HdCV$jsx)("li", {
                            className: "govuk-summary-list__actions-list-item",
                            children: action
                        }, action.key))
                })
            })
        ]
    });
});
const $c0b0747e319a57c2$export$2b959bb44e385245 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function SummaryList({ variant: variant = "base" , className: className , overrides: overrides , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("dl", {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-summary-list", {
            "govuk-summary-list--no-border": variant !== "border"
        }, {
            "mtfh-summary-list--inline": variant === "inline"
        }, "lbh-summary-list", className),
        ...props,
        children: (0, $2HdCV$Children).map(children, (child, index)=>child && /*#__PURE__*/ (0, $2HdCV$isValidElement)(child) && /*#__PURE__*/ (0, $2HdCV$cloneElement)(child, {
                overrides: !child.props.overrides && index === 0 ? overrides : child.props.overrides
            }))
    });
});





const { changesNotSaved: $59db15b17c8fb4ab$var$changesNotSaved , anotherUserMadeEdit: $59db15b17c8fb4ab$var$anotherUserMadeEdit , youEntered: $59db15b17c8fb4ab$var$youEntered , toSaveMakeEdit: $59db15b17c8fb4ab$var$toSaveMakeEdit  } = (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039).components.conflictErrorSummary;
const $59db15b17c8fb4ab$export$93a351e205137f1b = ({ updatedFields: updatedFields , fieldLocale: fieldLocale , fieldTransforms: fieldTransforms , title: title = $59db15b17c8fb4ab$var$changesNotSaved , description: description = $59db15b17c8fb4ab$var$anotherUserMadeEdit , footNote: footNote = $59db15b17c8fb4ab$var$toSaveMakeEdit , ...props })=>{
    const keys = Object.keys(updatedFields || {});
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $6c85cfad8f67e2c1$export$d0acb541148b73bf), {
        className: "mtfh-change-conflict",
        title: title,
        description: description,
        ...props,
        children: keys.length > 0 && updatedFields && /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $2HdCV$Fragment), {
            children: [
                /*#__PURE__*/ (0, $2HdCV$jsx)("p", {
                    children: $59db15b17c8fb4ab$var$youEntered
                }),
                /*#__PURE__*/ (0, $2HdCV$jsx)((0, $c0b0747e319a57c2$export$2b959bb44e385245), {
                    variant: "inline",
                    children: Object.keys(updatedFields).map((key)=>/*#__PURE__*/ (0, $2HdCV$jsx)((0, $c0b0747e319a57c2$export$2b379a888faa093d), {
                            title: `${fieldLocale[key] || key}:`,
                            children: fieldTransforms && fieldTransforms[key] ? fieldTransforms[key](updatedFields[key]) : `${updatedFields[key]}`
                        }, key))
                }),
                footNote && /*#__PURE__*/ (0, $2HdCV$jsx)("p", {
                    children: footNote
                })
            ]
        })
    });
};






const { error: $7c9590fa8027579f$var$error  } = (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039).components.formErrorSummary;
const $7c9590fa8027579f$export$a44acad2429d499 = ({ id: id , prefix: prefix , errors: errors , title: title = $7c9590fa8027579f$var$error , ...props })=>{
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $6c85cfad8f67e2c1$export$d0acb541148b73bf), {
        id: id,
        title: title,
        ...props,
        children: /*#__PURE__*/ (0, $2HdCV$jsx)("ul", {
            className: "govuk-list govuk-error-summary__list",
            children: Object.keys(errors).filter((key)=>errors[key]).map((key)=>{
                return /*#__PURE__*/ (0, $2HdCV$jsx)("li", {
                    children: /*#__PURE__*/ (0, $2HdCV$jsx)("a", {
                        href: `#${prefix}-${key}`,
                        children: errors[key]
                    })
                }, key);
            })
        })
    });
};






const { statusTitle: $11adfb8764310596$var$statusTitle , statusDescription: $11adfb8764310596$var$statusDescription  } = (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039).components.statusErrorSummary;
const $11adfb8764310596$export$1721328aaf9ab457 = ({ id: id , code: code , title: title = $11adfb8764310596$var$statusTitle(code) , description: description = $11adfb8764310596$var$statusDescription(code) , ...props })=>{
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $6c85cfad8f67e2c1$export$d0acb541148b73bf), {
        id: id,
        title: title,
        description: description,
        ...props
    });
};







const $213c8cee8cc98f77$export$ffae15b9f9d82913 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function SimplePagination({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("nav", {
        ref: ref,
        className: (0, $2HdCV$classnames)("lbh-simple-pagination", className),
        ...props
    });
});
const $213c8cee8cc98f77$export$e95940c44c6c4ae6 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function SimplePaginationButton({ as: SimplePaginationComp = "a" , variant: variant , className: className , title: title , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)(SimplePaginationComp, {
        ref: ref,
        className: (0, $2HdCV$classnames)("lbh-simple-pagination__link", {
            "lbh-simple-pagination__link--next": variant === "next"
        }, className),
        rel: variant,
        ...props,
        children: [
            variant === "previous" ? /*#__PURE__*/ (0, $2HdCV$jsx)("svg", {
                width: "11",
                height: "19",
                viewBox: "0 0 11 19",
                fill: "none",
                children: /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                    d: "M10 1L2 9.5L10 18",
                    strokeWidth: "2"
                })
            }) : null,
            children,
            title ? /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                className: "lbh-simple-pagination__title",
                children: title
            }) : null,
            variant === "next" ? /*#__PURE__*/ (0, $2HdCV$jsx)("svg", {
                width: "11",
                height: "19",
                viewBox: "0 0 11 19",
                fill: "none",
                children: /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                    d: "M1 18L9 9.5L1 1",
                    strokeWidth: "2"
                })
            }) : null
        ]
    });
});







const $146de147e9b0ec0a$export$7f7cbe89f1eacd2 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Spinner({ size: size = "50" , label: label = "Loading..." , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $c3b0cb676fa5b786$export$f04a61298a47a40f), {
        ref: ref,
        viewBox: "0 0 42 42",
        stroke: "#00703c",
        size: size,
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("title", {
                children: label
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, $2HdCV$jsxs)("g", {
                    transform: "translate(3 3)",
                    strokeWidth: "5",
                    children: [
                        /*#__PURE__*/ (0, $2HdCV$jsx)("circle", {
                            strokeOpacity: ".5",
                            cx: "18",
                            cy: "18",
                            r: "18"
                        }),
                        /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                            d: "M36 18c0-9.94-8.06-18-18-18",
                            transform: "rotate(112.708 18 18)",
                            children: /*#__PURE__*/ (0, $2HdCV$jsx)("animateTransform", {
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







const $5cb583b9cc5f5d84$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Text({ as: TextComp = "p" , variant: variant = "base" , size: size = "md" , className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)(TextComp, {
        ref: ref,
        className: (0, $2HdCV$classnames)({
            "lbh-body-xs": size === "xs",
            "lbh-body-s": size === "sm",
            "lbh-body-m": size === "md",
            "lbh-body-l": size === "lg",
            "lbh-!-font-weight-regular": variant === "regular",
            "lbh-!-font-weight-bold": variant === "bold"
        }, className),
        ...props
    });
});








const $2feb570c81f65775$var$getCategoryLabel = (categoryCode, categories)=>{
    const category = categories.find((cat)=>cat.code === categoryCode);
    return category?.value;
};
const $2feb570c81f65775$export$854bb7e533a6d075 = ({ comment: { categorisation: categorisation , createdAt: createdAt , title: title , description: description , author: author , highlight: highlight  } , categories: categories  })=>{
    const createdAtDate = (0, $2HdCV$useMemo)(()=>(0, $03d980bb1cadebff$export$3ae94a2503e890a1)(createdAt), [
        createdAt
    ]);
    const createdAtTime = (0, $2HdCV$useMemo)(()=>(0, $03d980bb1cadebff$export$3203edd9e5edd663)(createdAt), [
        createdAt
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        className: "comment",
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "comment__item",
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                        className: "comment__date-time",
                        children: createdAtDate
                    }),
                    /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                        className: "comment__date-time",
                        children: createdAtTime
                    })
                ]
            }),
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "comment__item --center",
                children: [
                    title && /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                        className: (0, $2HdCV$classnames)("comment__title", {
                            "--highlight": highlight
                        }),
                        children: title
                    }),
                    categorisation?.category && /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                        className: "comment__category",
                        children: $2feb570c81f65775$var$getCategoryLabel(categorisation.category, categories)
                    }),
                    description
                ]
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                className: "comment__item",
                children: author.fullName
            })
        ]
    });
};


const $eec8b165b131b697$var$NoComments = ()=>{
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $5cb583b9cc5f5d84$export$5f1af8db9871e1d6), {
        size: "sm",
        children: (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039).components.commentList.noCommentsAdded
    });
};
const $eec8b165b131b697$export$c77c63b4dd2cbdbc = ({ targetId: targetId  })=>{
    const { data: data , size: size , setSize: setSize , error: error  } = (0, $22b04e3337ac1917$export$80ad823ea511ef0f)(targetId);
    const { components: components  } = (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039);
    const { data: referenceData , error: referenceError  } = (0, $acadb3aa92b15cd6$export$caa1c15223f8c264)({
        category: "comment",
        subCategory: "category"
    });
    const response = (0, $2HdCV$useMemo)(()=>{
        if (!data) return null;
        return data[size - 1];
    }, [
        data,
        size
    ]);
    if (error?.response?.status === 404) return /*#__PURE__*/ (0, $2HdCV$jsx)($eec8b165b131b697$var$NoComments, {});
    if (referenceError) return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $6c85cfad8f67e2c1$export$d0acb541148b73bf), {
        id: "comment-list-error",
        title: components.commentList.errors.unableToFetchReferenceData,
        description: components.commentList.errors.unableToFetchReferenceDataDescription
    });
    if (!response || !referenceData) return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $7a53719b8c8c5793$export$1f54913ccc4368b1), {
        children: /*#__PURE__*/ (0, $2HdCV$jsx)((0, $146de147e9b0ec0a$export$7f7cbe89f1eacd2), {})
    });
    const { results: comments , paginationDetails: { nextToken: nextToken  }  } = response;
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        children: [
            comments.map((comment)=>/*#__PURE__*/ (0, $2HdCV$jsx)((0, $2feb570c81f65775$export$854bb7e533a6d075), {
                    categories: referenceData.category,
                    comment: comment
                }, comment.id)),
            (size > 1 || nextToken) && /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $213c8cee8cc98f77$export$ffae15b9f9d82913), {
                children: [
                    size !== 1 && /*#__PURE__*/ (0, $2HdCV$jsx)((0, $213c8cee8cc98f77$export$e95940c44c6c4ae6), {
                        variant: "previous",
                        onClick: ()=>setSize(size - 1),
                        children: "Previous"
                    }),
                    nextToken && /*#__PURE__*/ (0, $2HdCV$jsx)((0, $213c8cee8cc98f77$export$e95940c44c6c4ae6), {
                        variant: "next",
                        onClick: ()=>setSize(size + 1),
                        children: "Next"
                    })
                ]
            })
        ]
    });
};














const $4664be7a4b2d9091$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Dialog({ isOpen: isOpen , onDismiss: onDismiss , children: children , className: className , title: title , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $2HdCV$Dialog), {
        ref: ref,
        isOpen: isOpen,
        onDismiss: onDismiss,
        className: (0, $2HdCV$classnames)("lbh-dialog", className),
        "aria-label": title,
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)((0, $ad5b03a44afaa2a4$export$a8a3e93435678ff9), {
                as: "h2",
                variant: "h2",
                className: "lbh-dialog__title",
                children: title
            }),
            /*#__PURE__*/ (0, $2HdCV$jsxs)("button", {
                type: "button",
                onClick: onDismiss,
                className: "lbh-dialog__close",
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                        className: "govuk-visually-hidden",
                        children: "Close"
                    }),
                    /*#__PURE__*/ (0, $2HdCV$jsxs)("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 13 13",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                                d: "M-0.0501709 1.36379L1.36404 -0.050415L12.6778 11.2633L11.2635 12.6775L-0.0501709 1.36379Z",
                                fill: "#0B0C0C"
                            }),
                            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                                d: "M11.2635 -0.050293L12.6778 1.36392L1.36404 12.6776L-0.0501709 11.2634L11.2635 -0.050293Z",
                                fill: "#0B0C0C"
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
});
const $4664be7a4b2d9091$export$702322f34446412d = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function DialogActions({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        ref: ref,
        className: (0, $2HdCV$classnames)("lbh-dialog__actions", className),
        ...props
    });
});








const $3988fb5c053869e0$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Link({ as: LinkComp = "a" , variant: variant = "link" , isExternal: isExternal = false , className: className , rel: rel , target: target , override: override , ...props }, ref) {
    const linkClasses = (0, $2HdCV$classnames)(variant !== "native" && {
        "govuk-link lbh-link": variant !== "back-link",
        "govuk-back-link lbh-back-link": variant === "back-link",
        [`lbh-link--${variant}`]: variant !== "link" && variant !== "back-link",
        "lbh-link--no-visited-state": !isExternal
    }, (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className);
    return(// eslint-disable-next-line react/jsx-no-target-blank
    /*#__PURE__*/ (0, $2HdCV$jsx)(LinkComp, {
        ref: ref,
        className: linkClasses,
        rel: isExternal ? "noopener noreferrer" : rel,
        target: isExternal ? "_blank" : target,
        ...props
    }));
});






const $3ce6ec013c93b6a6$export$e0a2fa2ca78dc95 = ()=>{
    const { pathname: pathname  } = (0, $2HdCV$useLocation)();
    const prevPathname = (0, $2HdCV$useRef)(pathname);
    const { action: action  } = (0, $2HdCV$useHistory)();
    (0, $2HdCV$useEffect)(()=>{
        if (action !== "POP" && pathname !== prevPathname.current) window.scrollTo(0, 0);
        prevPathname.current = pathname;
    }, [
        pathname,
        action
    ]);
    return null;
};




const $7e10fd9b775043df$export$a6c9ba3e1190d848 = ({ children: children , ...props })=>{
    const [message, setMessage] = (0, $2HdCV$useState)();
    const [isConfirm, setIsConfim] = (0, $2HdCV$useState)(false);
    const [confirmation, setConfirmation] = (0, $2HdCV$useState)();
    const onConfirmation = (0, $2HdCV$useCallback)((ok)=>{
        /* istanbul ignore else: this should be set by the time we call it */ if (confirmation) confirmation(ok);
        if (!ok && message?.action === "POP") window.history.forward();
        setIsConfim(false);
    }, [
        confirmation,
        setIsConfim,
        message
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $2HdCV$BrowserRouter), {
        getUserConfirmation: (payload, callback)=>{
            try {
                const incomingMessage = JSON.parse(payload);
                if (incomingMessage && !(0, $2HdCV$matchPath)(incomingMessage.pathname, {
                    path: incomingMessage.path,
                    exact: true,
                    strict: true
                })) {
                    setIsConfim(true);
                    setConfirmation(()=>callback);
                    setMessage(incomingMessage);
                }
            } catch (e) {
                setIsConfim(false);
                setMessage(undefined);
                callback(true);
            }
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)((0, $3ce6ec013c93b6a6$export$e0a2fa2ca78dc95), {}),
            children,
            message && /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $4664be7a4b2d9091$export$3ddf2d174ce01153), {
                isOpen: isConfirm,
                title: message.title,
                onDismiss: ()=>onConfirmation(false),
                children: [
                    message?.body && /*#__PURE__*/ (0, $2HdCV$jsx)("p", {
                        children: message.body
                    }),
                    /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $4664be7a4b2d9091$export$702322f34446412d), {
                        children: [
                            /*#__PURE__*/ (0, $2HdCV$jsx)((0, $15374ca0713628ab$export$353f5b6fc5456de1), {
                                onClick: ()=>onConfirmation(true),
                                children: "Yes"
                            }),
                            /*#__PURE__*/ (0, $2HdCV$jsx)((0, $3988fb5c053869e0$export$a6c7ac8248d6e38a), {
                                as: "button",
                                onClick: ()=>onConfirmation(false),
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};













const $6e096fc2d40bcbcf$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Input({ error: error , className: className , override: override , ...props }, ref) {
    const inputClasses = (0, $2HdCV$classnames)("govuk-input", "lbh-input", {
        "govuk-input--error": error
    }, (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className);
    return /*#__PURE__*/ (0, $2HdCV$jsx)("input", {
        ref: ref,
        className: inputClasses,
        ...props
    });
});




const $84a35b858fda9937$export$6bf0cd3a219bbade = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function NumberInput({ onChange: onChange , onBlur: onBlur , min: min , max: max , value: value , defaultValue: defaultValue , maxLength: maxLength , padStart: padStart = 0 , ...props }, ref) {
    const parser = (0, $2HdCV$useCallback)((num)=>{
        let numString = String(num).replace(/[^\d]+/g, "");
        if (maxLength !== undefined && maxLength < numString.length) numString = numString.slice(0, maxLength);
        return numString;
    }, [
        maxLength
    ]);
    const formatter = (0, $2HdCV$useCallback)((num)=>{
        if (num === "") return "";
        let numInt = parseInt(String(num), 10);
        if (max !== undefined && numInt > max) numInt = max;
        if (min !== undefined && numInt < min) numInt = min;
        return String(numInt).padStart(padStart, "0");
    }, [
        min,
        max,
        padStart
    ]);
    const [output, setOutput] = (0, $2HdCV$useState)(parser(defaultValue ?? value ?? ""));
    const outputInt = (0, $2HdCV$useMemo)(()=>{
        const target = parseInt(output, 10);
        return !Number.isNaN(target) ? target : undefined;
    }, [
        output
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $6e096fc2d40bcbcf$export$f5b8910cec6cf069), {
        ref: ref,
        role: "spinbutton",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": outputInt,
        "aria-valuetext": output || undefined,
        value: output,
        onChange: (e)=>{
            const update = parser(e.target.value);
            e.target.value = update;
            e.currentTarget.value = update;
            setOutput(update);
            if (onChange) onChange(e);
        },
        onBlur: (e)=>{
            const update = formatter(e.target.value);
            e.target.value = update;
            e.currentTarget.value = update;
            setOutput(update);
            if (onChange) onChange(e);
            if (onBlur) onBlur(e);
        },
        ...props
    });
});




const $80ea53bcd321c4c7$export$7edc06cf1783b30f = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function DateInput({ id: id = "date-input" , dayProps: dayProps , monthProps: monthProps , yearProps: yearProps , dayLabel: dayLabel = "Day" , monthLabel: monthLabel = "Month" , yearLabel: yearLabel = "Year" , error: error , required: required , className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-date-input", "lbh-date-input", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-day`,
                        children: dayLabel
                    }),
                    /*#__PURE__*/ (0, $2HdCV$jsx)((0, $84a35b858fda9937$export$6bf0cd3a219bbade), {
                        className: "govuk-date-input__input govuk-input--width-2",
                        name: "day",
                        required: required,
                        maxLength: 2,
                        min: 1,
                        max: 31,
                        padStart: 2,
                        "aria-label": "Day",
                        ...dayProps
                    })
                ]
            }),
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-month`,
                        children: monthLabel
                    }),
                    /*#__PURE__*/ (0, $2HdCV$jsx)((0, $84a35b858fda9937$export$6bf0cd3a219bbade), {
                        className: "govuk-date-input__input govuk-input--width-2",
                        name: "month",
                        required: required,
                        maxLength: 2,
                        min: 1,
                        max: 12,
                        padStart: 2,
                        "aria-label": "Month",
                        ...monthProps
                    })
                ]
            }),
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-year`,
                        children: yearLabel
                    }),
                    /*#__PURE__*/ (0, $2HdCV$jsx)((0, $84a35b858fda9937$export$6bf0cd3a219bbade), {
                        className: "govuk-input govuk-date-input__input govuk-input--width-4",
                        name: "year",
                        required: required,
                        maxLength: 4,
                        padStart: 4,
                        "aria-label": "Year",
                        ...yearProps
                    })
                ]
            })
        ]
    });
});












const $26b38223ecc043a9$export$ef9b1a59e592288f = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Select({ error: error , className: className , override: override , ...props }, ref) {
    const selectClasses = (0, $2HdCV$classnames)("govuk-select", "lbh-select", {
        "govuk-select--error": error
    }, (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className);
    return /*#__PURE__*/ (0, $2HdCV$jsx)("select", {
        ref: ref,
        className: selectClasses,
        ...props
    });
});




const $42a5f0178b42943a$export$a1af6f79df847fac = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function TimeInput({ id: id = "time-input" , hourProps: hourProps , minuteProps: minuteProps , amPmProps: amPmProps , hourLabel: hourLabel = "Hour" , minuteLabel: minuteLabel = "Minute" , amPmLabel: amPmLabel = "AM/PM" , error: error , required: required , className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-date-input", "lbh-date-input", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-hour`,
                        children: hourLabel
                    }),
                    /*#__PURE__*/ (0, $2HdCV$jsx)((0, $84a35b858fda9937$export$6bf0cd3a219bbade), {
                        className: "govuk-date-input__input govuk-input--width-2",
                        name: "hour",
                        required: required,
                        maxLength: 2,
                        min: 0,
                        max: 12,
                        padStart: 2,
                        "aria-label": "Hour",
                        ...hourProps
                    })
                ]
            }),
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-minute`,
                        children: minuteLabel
                    }),
                    /*#__PURE__*/ (0, $2HdCV$jsx)((0, $84a35b858fda9937$export$6bf0cd3a219bbade), {
                        className: "govuk-date-input__input govuk-input--width-2",
                        name: "minute",
                        required: required,
                        maxLength: 2,
                        min: 0,
                        max: 59,
                        padStart: 2,
                        "aria-label": "Minute",
                        ...minuteProps
                    })
                ]
            }),
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-amPm`,
                        children: amPmLabel
                    }),
                    /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $26b38223ecc043a9$export$ef9b1a59e592288f), {
                        id: "amPm",
                        name: "amPm",
                        "aria-label": "AM/PM",
                        ...amPmProps,
                        children: [
                            /*#__PURE__*/ (0, $2HdCV$jsx)("option", {
                                value: "",
                                children: amPmProps?.placeholder || "AM/PM"
                            }),
                            /*#__PURE__*/ (0, $2HdCV$jsx)("option", {
                                value: "am",
                                children: "AM"
                            }),
                            /*#__PURE__*/ (0, $2HdCV$jsx)("option", {
                                value: "pm",
                                children: "PM"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});








const $8bac8629531165ac$export$bf1308127b24ea84 = ({ title: title , body: body , skipConfirmation: skipConfirmation , ...props })=>{
    const { path: path  } = (0, $2HdCV$useRouteMatch)();
    (0, $2HdCV$useEffect)(()=>{
        const handler = (e)=>{
            e.returnValue = "";
            return e.returnValue;
        };
        window.addEventListener("beforeunload", handler);
        return ()=>{
            window.removeEventListener("beforeunload", handler);
        };
    }, []);
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $2HdCV$Prompt), {
        ...props,
        message: (location, action)=>{
            if (skipConfirmation && skipConfirmation(location)) return true;
            return JSON.stringify({
                action: action,
                path: path,
                pathname: location.pathname,
                title: title,
                body: body || ""
            });
        }
    });
};









const $b6cc80ba8cee2a71$export$3e8048d3cf2ba3fd = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Details({ title: title , children: children , className: className  }, ref) {
    const localRef = (0, $2HdCV$useRef)(null);
    (0, $2HdCV$useEffect)(()=>{
        if (localRef.current) new (0, $2HdCV$Details)(localRef.current).init();
    }, []);
    const classes = {
        "govuk-details lbh-details": true
    };
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("details", {
        id: "mtfh-details",
        "data-testid": "mtfh-details",
        className: (0, $2HdCV$classnames)(classes, className),
        "data-module": "govuk-details",
        ref: (0, $2HdCV$reactmergerefs)([
            localRef,
            ref
        ]),
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("summary", {
                className: "govuk-details__summary",
                children: /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                    className: "govuk-details__summary-text",
                    children: title
                })
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                className: "govuk-details__text",
                children: children
            })
        ]
    });
});

















const $84fff3bafd18a886$var$getLengthOfValue = (initialValue)=>{
    if (typeof initialValue === "string") return initialValue.length;
    if (Array.isArray(initialValue)) return initialValue.join(",").length;
    return String(initialValue || "").length;
};
const $84fff3bafd18a886$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function TextArea({ maxLength: maxLength , error: error , className: className , onChange: onChange , override: override , ...props }, ref) {
    const { value: value , defaultValue: defaultValue  } = props;
    const isControlled = value !== undefined;
    const initialValue = value || defaultValue;
    const [characterCount, setCharacterCount] = (0, $2HdCV$useState)($84fff3bafd18a886$var$getLengthOfValue(initialValue));
    const onChangeHandler = (0, $2HdCV$useCallback)((event)=>{
        if (event?.currentTarget?.value !== undefined && !isControlled && maxLength !== undefined) setCharacterCount(String(event.currentTarget.value).length);
        if (typeof onChange === "function") onChange(event);
    }, [
        onChange,
        maxLength,
        isControlled
    ]);
    const exceedingValue = (0, $2HdCV$useMemo)(()=>maxLength !== undefined && maxLength - (isControlled ? $84fff3bafd18a886$var$getLengthOfValue(value) : characterCount), [
        maxLength,
        characterCount,
        value,
        isControlled
    ]);
    const textareaClasses = (0, $2HdCV$classnames)("govuk-textarea", "lbh-textarea", {
        "govuk-textarea--error": error
    }, "lbh-character-count", (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className);
    const messageClasses = (0, $2HdCV$classnames)({
        "govuk-hint": exceedingValue >= 0
    }, "govuk-character-count__message", {
        "govuk-error-message": exceedingValue < 0
    }, (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override));
    return /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $2HdCV$Fragment), {
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("textarea", {
                ref: ref,
                className: textareaClasses,
                onChange: onChangeHandler,
                ...props
            }),
            maxLength !== undefined && /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                className: messageClasses,
                "aria-live": "polite",
                children: exceedingValue >= 0 ? `You have ${exceedingValue} ${(0, $4ea337e890e9a464$export$cefb40c9962541b5)("character", exceedingValue)} remaining` : `You have ${Math.abs(exceedingValue)} ${(0, $4ea337e890e9a464$export$cefb40c9962541b5)("character", exceedingValue)} too many`
            })
        ]
    });
});




const $eaa0448fa119ca25$export$2d00230e1e6f7fbc = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function FormGroup({ as: FormGroupComp = "div" , id: id , name: name , label: label , hint: hint , error: error , required: required , children: children , className: className , override: override , ...props }, ref) {
    const formGroupClasses = (0, $2HdCV$classnames)("govuk-form-group", {
        "govuk-form-group--error": !!error
    }, "lbh-form-group", (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className);
    const describedBy = (0, $2HdCV$useMemo)(()=>{
        const classes = [];
        if (hint) classes.push(`${id}-hint`);
        if (error) classes.push(`${id}-error`);
        return classes.join(" ");
    }, [
        id,
        hint,
        error
    ]);
    const LabelComp = typeof FormGroupComp === "string" && FormGroupComp === "fieldset" ? "legend" : "label";
    const formGroup = /*#__PURE__*/ (0, $2HdCV$jsxs)(FormGroupComp, {
        ref: ref,
        id: id,
        className: formGroupClasses,
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsxs)(LabelComp, {
                className: "govuk-label lbh-label",
                htmlFor: `${id}-field`,
                children: [
                    label,
                    required ? /*#__PURE__*/ (0, $2HdCV$jsx)("sup", {
                        "aria-hidden": "true",
                        children: "*"
                    }) : ""
                ]
            }),
            !!hint && /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                id: `${id}-hint`,
                className: "govuk-hint lbh-hint",
                children: hint
            }),
            !!error && /*#__PURE__*/ (0, $2HdCV$jsxs)("span", {
                id: `${id}-error`,
                className: "govuk-error-message lbh-error-message",
                children: [
                    /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                        className: "govuk-visually-hidden",
                        children: "Error:"
                    }),
                    " ",
                    error
                ]
            }),
            !!children && (0, $2HdCV$Children).only(/*#__PURE__*/ (0, $2HdCV$cloneElement)(children, {
                id: `${id}-field`,
                name: name,
                required: required,
                error: !!error,
                "aria-describedby": describedBy || undefined,
                ...children.props
            }))
        ]
    });
    return /*#__PURE__*/ (0, $2HdCV$isValidElement)(children) && children.type === (0, $84fff3bafd18a886$export$f5c9f3c2c4054eec) ? /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        className: "govuk-character-count",
        children: formGroup
    }) : formGroup;
});





const $25ec85fbd9d3e8ff$export$a455218a85c89869 = ({ id: id , label: label , children: children , name: name , type: type , ...props })=>{
    const [field, meta] = (0, $2HdCV$useField)({
        name: name,
        type: type,
        value: children.props.value
    });
    const comp = type === "checkbox" || type === "radio" ? "fieldset" : "div";
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $eaa0448fa119ca25$export$2d00230e1e6f7fbc), {
        as: comp,
        id: id,
        label: label,
        error: meta.error,
        ...props,
        children: /*#__PURE__*/ (0, $2HdCV$cloneElement)(children, {
            ...field
        })
    });
};
const $25ec85fbd9d3e8ff$export$f30174d63e654145 = ({ children: children , name: name , type: type , ...props })=>{
    const [field, meta] = (0, $2HdCV$useField)({
        name: name,
        type: type,
        value: children.props.value
    });
    return /*#__PURE__*/ (0, $2HdCV$cloneElement)(children, {
        ...field,
        ...props,
        error: meta.error
    });
};
const $25ec85fbd9d3e8ff$export$d9781c7894a82487 = ({ dayProps: { name: dayName , ...dayProps } , monthProps: { name: monthName , ...monthProps } , yearProps: { name: yearName , ...yearProps } , dayLabel: dayLabel = "Day" , monthLabel: monthLabel = "Month" , yearLabel: yearLabel = "Year" , fieldError: fieldError , ...props })=>{
    const [dayField, dayMeta] = (0, $2HdCV$useField)(dayName);
    const [monthField, monthMeta] = (0, $2HdCV$useField)(monthName);
    const [yearField, yearMeta] = (0, $2HdCV$useField)(yearName);
    const error = fieldError || dayMeta.error || monthMeta.error || yearMeta.error;
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $eaa0448fa119ca25$export$2d00230e1e6f7fbc), {
        as: "fieldset",
        error: error,
        ...props,
        children: /*#__PURE__*/ (0, $2HdCV$jsx)((0, $80ea53bcd321c4c7$export$7edc06cf1783b30f), {
            dayProps: {
                ...dayField,
                ...dayProps,
                error: !!dayMeta.error
            },
            dayLabel: dayLabel,
            monthProps: {
                ...monthField,
                ...monthProps,
                error: !!monthMeta.error
            },
            monthLabel: monthLabel,
            yearProps: {
                ...yearField,
                ...yearProps,
                error: !!yearMeta.error
            },
            yearLabel: yearLabel
        })
    });
};
const $25ec85fbd9d3e8ff$export$5eaee2322dd727eb = ({ hourProps: { name: hourName , ...hourProps } , minuteProps: { name: minuteName , ...minuteProps } , amPmProps: { name: amPmName , ...amPmProps } , hourLabel: hourLabel = "Hour" , minuteLabel: minuteLabel = "Minute" , amPmLabel: amPmLabel = "am/pm" , ...props })=>{
    const [hourField, hourMeta] = (0, $2HdCV$useField)(hourName);
    const [minuteField, minuteMeta] = (0, $2HdCV$useField)(minuteName);
    const [amPmField, amPmMeta] = (0, $2HdCV$useField)(amPmName);
    const error = hourMeta.error || minuteMeta.error || amPmMeta.error;
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $eaa0448fa119ca25$export$2d00230e1e6f7fbc), {
        as: "fieldset",
        error: error,
        ...props,
        children: /*#__PURE__*/ (0, $2HdCV$jsx)((0, $42a5f0178b42943a$export$a1af6f79df847fac), {
            hourProps: {
                ...hourField,
                ...hourProps,
                error: !!hourMeta.error
            },
            hourLabel: hourLabel,
            minuteProps: {
                ...minuteField,
                ...minuteProps,
                error: !!minuteMeta.error
            },
            minuteLabel: minuteLabel,
            amPmProps: {
                ...amPmField,
                ...amPmProps,
                error: !!amPmMeta.error
            },
            amPmLabel: amPmLabel
        })
    });
};








const $f7a719e30cf3ecd0$export$e154be390aa0e14 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Fieldset({ variant: variant = "base" , indent: indent = false , error: error , heading: heading , children: children , className: className , override: override , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("fieldset", {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-fieldset", "lbh-fieldset", {
            "mtfh-fieldset--indent": indent,
            "mtfh-fieldset--error": !!error
        }, (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className),
        ...props,
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsxs)("legend", {
                className: (0, $2HdCV$classnames)("govuk-fieldset__legend", {
                    "govuk-fieldset__legend--s": variant === "small",
                    "govuk-fieldset__legend--m": variant === "medium",
                    "govuk-fieldset__legend--l": variant === "large",
                    "govuk-fieldset__legend--xl": variant === "xlarge",
                    "govuk-visually-hidden": variant === "hidden"
                }),
                children: [
                    typeof heading !== "string" ? /*#__PURE__*/ (0, $2HdCV$isValidElement)(heading) && /*#__PURE__*/ (0, $2HdCV$cloneElement)(heading, {
                        className: (0, $2HdCV$classnames)("govuk-fieldset__heading", heading.props.className)
                    }) : heading,
                    error && /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                        className: "govuk-visually-hidden",
                        children: [
                            " ",
                            error
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: (0, $2HdCV$classnames)("mtfh-fieldset__content"),
                children: [
                    error && /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                        className: "govuk-error-message lbh-error-message",
                        "aria-hidden": "true",
                        children: error
                    }),
                    children
                ]
            })
        ]
    });
});











const $40caa25d8508f77a$export$c84671f46d6a1ca = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Layout({ children: children , top: top , backLink: backLink , side: side , className: className , sidePosition: sidePosition = "left" , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        ref: ref,
        className: (0, $2HdCV$classnames)("mtfh-layout", {
            "mtfh-layout--narrow": !side,
            "mtfh-layout--right": sidePosition === "right"
        }, className),
        ...props,
        children: [
            backLink,
            /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                id: "content"
            }),
            top,
            /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                className: "mtfh-layout__container",
                children: [
                    side ? /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                        className: "mtfh-layout__aside",
                        children: side
                    }) : null,
                    /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                        className: "mtfh-layout__main",
                        children: children
                    })
                ]
            })
        ]
    });
});









const $67565638ca7adf52$export$155d86d4b6139452 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function LinkOverlay({ as: LinkOverlayComp = "div" , className: className , override: override , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)(LinkOverlayComp, {
        ref: ref,
        className: (0, $2HdCV$classnames)("mtfh-link-overlay", (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className),
        ...props
    });
});
const $67565638ca7adf52$export$d79f4543fbc1d78a = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function LinkBox({ as: LinkBoxComp = "div" , className: className , override: override , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)(LinkBoxComp, {
        ref: ref,
        className: (0, $2HdCV$classnames)("mtfh-link-box", (0, $261bb599b6ea6324$export$2e2bcd8739ae039)(override), className),
        ...props
    });
});







const $f039f8f765f427dd$export$29d11c0fe2fc51d8 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function LinkButton({ variant: variant = "link" , className: className , children: children , ...props }, ref) {
    const linkClasses = (0, $2HdCV$classnames)(variant !== "native" && {
        "govuk-link lbh-link": variant !== "back-link",
        "govuk-back-link lbh-back-link": variant === "back-link",
        [`lbh-link--${variant}`]: variant !== "link" && variant !== "back-link"
    }, className);
    return /*#__PURE__*/ (0, $2HdCV$jsx)("button", {
        ref: ref,
        className: linkClasses,
        type: "button",
        ...props,
        children: children
    });
});







const $b8af80eb3a22e09c$export$54c2e3dc7acea9f5 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function List({ as: ListComp = "ul" , variant: variant = "base" , className: className , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)(ListComp, {
        ref: ref,
        className: (0, $2HdCV$classnames)("lbh-list", {
            "lbh-list--bullet": variant === "bullets",
            "lbh-list--number": variant === "numbers"
        }, className),
        ...props,
        children: (0, $2HdCV$react).Children.map(children, (child, index)=>child && /*#__PURE__*/ (0, $2HdCV$isValidElement)(child) && /*#__PURE__*/ (0, $2HdCV$jsx)("li", {
                children: child
            }, index))
    });
});







const $a414a8b7d64b1c1f$export$3d163c0234443c1e = /*#__PURE__*/ (0, $2HdCV$createContext)(undefined);
$a414a8b7d64b1c1f$export$3d163c0234443c1e.displayName = "PageAnnouncementContext";
const $a414a8b7d64b1c1f$export$3c21ce9329ea303e = ()=>{
    const context = (0, $2HdCV$useContext)($a414a8b7d64b1c1f$export$3d163c0234443c1e);
    if (!context) {
        const error = new Error("usePageAnnouncementContext: `context` is undefined. Seems you forgot to wrap component within the Provider");
        Error.captureStackTrace?.(error, $a414a8b7d64b1c1f$export$3c21ce9329ea303e);
        throw error;
    }
    const { state: state , dispatch: dispatch  } = context;
    const addAnnouncement = (0, $2HdCV$useCallback)((props)=>{
        dispatch({
            type: "ADD",
            payload: props
        });
    }, [
        dispatch
    ]);
    const clearAnnouncement = (0, $2HdCV$useCallback)(()=>{
        dispatch({
            type: "CLEAR"
        });
    }, [
        dispatch
    ]);
    return {
        state: state,
        addAnnouncement: addAnnouncement,
        clearAnnouncement: clearAnnouncement
    };
};
const $a414a8b7d64b1c1f$export$18fb9d28ec4899ae = ({ sessionKey: sessionKey , children: children  })=>{
    const reducer = (state, action)=>{
        switch(action.type){
            case "ADD":
                return action.payload;
            case "CLEAR":
            default:
                return undefined;
        }
    };
    const initialData = (0, $2HdCV$useMemo)(()=>{
        if (sessionKey) {
            const data = {
                heading: window.sessionStorage.getItem(`${sessionKey}:heading`) || "",
                variant: window.sessionStorage.getItem(`${sessionKey}:variant`) || "success",
                description: window.sessionStorage.getItem(`${sessionKey}:description`) || ""
            };
            if (data.heading) {
                window.sessionStorage.removeItem(`${sessionKey}:heading`);
                window.sessionStorage.removeItem(`${sessionKey}:variant`);
                window.sessionStorage.removeItem(`${sessionKey}:description`);
                return data;
            }
        }
        return undefined;
    }, [
        sessionKey
    ]);
    const [state, dispatch] = (0, $2HdCV$useReducer)(reducer, initialData);
    const value = (0, $2HdCV$useMemo)(()=>({
            state: state,
            dispatch: dispatch
        }), [
        state,
        dispatch
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsx)($a414a8b7d64b1c1f$export$3d163c0234443c1e.Provider, {
        value: value,
        children: children
    });
};






const $1c9abfd00f5a85fc$export$f886b3ad0951ea15 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function PageAnnouncement({ className: className , ...props }, ref) {
    const context = (0, $2HdCV$useContext)((0, $a414a8b7d64b1c1f$export$3d163c0234443c1e));
    if (!context?.state?.heading && !props.heading) return null;
    const { heading: heading , description: description , variant: variant = "success" , ...rest } = {
        ...context?.state,
        ...props
    };
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("section", {
        ref: ref,
        className: (0, $2HdCV$classnames)("lbh-page-announcement", {
            [`lbh-page-announcement--${variant}`]: variant && variant !== "success"
        }, className),
        ...rest,
        role: "alert",
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("h3", {
                className: "lbh-page-announcement__title",
                children: heading
            }),
            !!description && /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                className: "lbh-page-announcement__content",
                children: description
            })
        ]
    });
});







const $bd241ddb6762d848$export$68f5e1453c188a82 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Pagination({ className: className , variant: variant = "base" , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("nav", {
        ref: ref,
        className: (0, $2HdCV$classnames)("lbh-pagination", {
            "lbh-pagination--center": variant === "center"
        }, className),
        ...props
    });
});
const $bd241ddb6762d848$export$ff17519edeb6015d = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function PaginationControls({ className: className , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("ul", {
        ref: ref,
        className: (0, $2HdCV$classnames)("lbh-pagination__list", className),
        ...props,
        children: (0, $2HdCV$Children).map(children, (child)=>child && /*#__PURE__*/ (0, $2HdCV$jsx)("li", {
                className: "lbh-pagination__item",
                children: child
            }))
    });
});
const $bd241ddb6762d848$export$94528e113b92ad1e = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function PaginationSummary({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        ref: ref,
        className: (0, $2HdCV$classnames)("lbh-pagination__summary", className),
        ...props
    });
});
const $bd241ddb6762d848$export$c3639e97caabff2c = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function PaginationButton({ as: PaginationComp = "a" , variant: variant = "base" , active: active = false , className: className , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)(PaginationComp, {
        ref: ref,
        className: (0, $2HdCV$classnames)("lbh-pagination__link", {
            "lbh-pagination__link--next": variant === "next",
            "lbh-pagination__link--current": variant === "base" && active
        }, className),
        rel: variant !== "base" ? variant : undefined,
        ...props,
        children: [
            variant === "previous" ? /*#__PURE__*/ (0, $2HdCV$jsxs)("span", {
                "aria-hidden": "true",
                role: "presentation",
                children: [
                    "\xab",
                    " "
                ]
            }) : null,
            children,
            variant === "next" ? /*#__PURE__*/ (0, $2HdCV$jsxs)("span", {
                "aria-hidden": "true",
                role: "presentation",
                children: [
                    " ",
                    "\xbb"
                ]
            }) : null
        ]
    });
});







const $d90db6eae6b02a0c$export$e345a1a4b7910594 = ({ tag: tag , children: children , variant: variant = "grey"  })=>{
    const lbhTagColor = `lbh-tag--${variant}`;
    return /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        className: "container-max-width lbh-phase-banner",
        children: /*#__PURE__*/ (0, $2HdCV$jsxs)("p", {
            className: "govuk-phase-banner__content",
            children: [
                /*#__PURE__*/ (0, $2HdCV$jsx)("strong", {
                    className: (0, $2HdCV$classnames)(`${lbhTagColor}`, "govuk-phase-banner__content__tag govuk-tag lbh-tag"),
                    children: tag
                }),
                /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                    className: "govuk-phase-banner__text",
                    children: children
                })
            ]
        })
    });
};









const $dde93f4e700fb24a$export$d7b12c4107be0d61 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Radio({ id: id , className: className , type: type = "radio" , hint: hint , children: children , conditionalId: conditionalId , error: error , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        className: (0, $2HdCV$classnames)("govuk-radios__item", className),
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("input", {
                ref: ref,
                id: id,
                className: "govuk-radios__input",
                type: type,
                "aria-describedby": hint ? `${id}-hint` : undefined,
                "data-aria-controls": conditionalId,
                ...props
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("label", {
                className: "govuk-label govuk-radios__label",
                htmlFor: id,
                children: children
            }),
            hint ? /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                id: `${id}-hint`,
                className: "govuk-hint govuk-radios__hint",
                children: hint
            }) : null
        ]
    });
});
const $dde93f4e700fb24a$export$df58ef6abee09aae = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function RadioDivider(props, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        ref: ref,
        className: "govuk-radios__divider",
        ...props
    });
});
const $dde93f4e700fb24a$export$baad22d6b72c158a = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function RadioConditional(props, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        ref: ref,
        className: "govuk-radios__conditional govuk-radios__conditional--hidden",
        ...props
    });
});
const $dde93f4e700fb24a$export$a98f0dcb43a68a25 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function RadioGroup({ variant: variant = "base" , inline: inline = false , name: name , children: children , error: error , required: required , ...props }, ref) {
    const localRef = (0, $2HdCV$useRef)();
    (0, $2HdCV$useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) new (0, $2HdCV$Radios)(localRef.current).init();
    }, []);
    const hasConditionals = (0, $2HdCV$useMemo)(()=>(0, $2HdCV$Children).toArray(children).some((child)=>/*#__PURE__*/ (0, $2HdCV$isValidElement)(child) && child.type === $dde93f4e700fb24a$export$baad22d6b72c158a), [
        children
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        ref: (0, $2HdCV$reactmergerefs)([
            localRef,
            ref
        ]),
        className: (0, $2HdCV$classnames)("govuk-radios", {
            "govuk-radios--small": variant === "small",
            "govuk-radios--inline": inline,
            "govuk-radios--conditionals": hasConditionals
        }, "lbh-radios"),
        ...props,
        children: (0, $2HdCV$Children).map(children, (child)=>child && /*#__PURE__*/ (0, $2HdCV$isValidElement)(child) && /*#__PURE__*/ (0, $2HdCV$cloneElement)(child, {
                name: name,
                required: required,
                ...child.props
            }))
    });
});









let $7bfff1c2eb4e6bfc$export$a932fb750d9fd996;
(function(WorkOrdersFilters) {
    WorkOrdersFilters["CANCELLED"] = "Cancelled";
    WorkOrdersFilters["COMPLETED"] = "Completed";
    WorkOrdersFilters["IN_PROGRESS"] = "InProgress";
    WorkOrdersFilters["LOCKED"] = "Locked";
    WorkOrdersFilters["ON_HOLD"] = "OnHold";
})($7bfff1c2eb4e6bfc$export$a932fb750d9fd996 || ($7bfff1c2eb4e6bfc$export$a932fb750d9fd996 = {}));
const $7bfff1c2eb4e6bfc$export$a4729db15693d5b0 = [
    {
        code: $7bfff1c2eb4e6bfc$export$a932fb750d9fd996.CANCELLED,
        value: "cancelled"
    },
    {
        code: $7bfff1c2eb4e6bfc$export$a932fb750d9fd996.COMPLETED,
        value: "completed"
    },
    {
        code: $7bfff1c2eb4e6bfc$export$a932fb750d9fd996.IN_PROGRESS,
        value: "in progress"
    },
    {
        code: $7bfff1c2eb4e6bfc$export$a932fb750d9fd996.LOCKED,
        value: "locked"
    },
    {
        code: $7bfff1c2eb4e6bfc$export$a932fb750d9fd996.ON_HOLD,
        value: "on hold"
    }
];


const $01baca9d46e421d5$var$repairStatusGroupings = {
    [(0, $7bfff1c2eb4e6bfc$export$a932fb750d9fd996).CANCELLED]: [
        "30"
    ],
    [(0, $7bfff1c2eb4e6bfc$export$a932fb750d9fd996).COMPLETED]: [
        "40",
        "50"
    ],
    [(0, $7bfff1c2eb4e6bfc$export$a932fb750d9fd996).IN_PROGRESS]: [
        "20",
        "60",
        "80",
        "90",
        "100",
        "110",
        "120",
        "1000",
        "1010",
        "1080",
        "1090"
    ],
    [(0, $7bfff1c2eb4e6bfc$export$a932fb750d9fd996).LOCKED]: [
        "200"
    ],
    [(0, $7bfff1c2eb4e6bfc$export$a932fb750d9fd996).ON_HOLD]: [
        "10",
        "70"
    ]
};
const $01baca9d46e421d5$export$888eda2be6b7998 = (id, filter, pageNumber = "1", pageSize = "12")=>{
    const params = new URLSearchParams();
    params.append("propertyReference", id);
    params.append("PageNumber", pageNumber);
    params.append("PageSize", pageSize);
    if (filter && $01baca9d46e421d5$var$repairStatusGroupings[filter]) $01baca9d46e421d5$var$repairStatusGroupings[filter].forEach((status)=>{
        params.append("StatusCode", status);
    });
    return (0, $88fa3d186dcadbc0$export$a84fc53129590f47)(`${(0, $359379e3835f5ff6$export$2e2bcd8739ae039).repairsHubApiUrl}/workOrders?${params}`, {
        headers: {
            "x-hackney-user": (0, $6f8b946ffabfebb4$export$94f900a053ab5369).getValue().token
        }
    });
};






















const $f335e6f2c6d718a9$export$5a9fc13fffea5796 = ()=>{
    return /*#__PURE__*/ (0, $2HdCV$jsx)("hr", {
        className: "mtfh-card-break"
    });
};





const $05cd8e7a841f591e$export$60332b2344f7fe41 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Link({ as: CardComp = "div" , className: className , children: children  }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)(CardComp, {
        ref: ref,
        className: (0, $2HdCV$classnames)("mtfh-card", className),
        children: children
    });
});





const $1b914fb82b6258ec$export$85cca3214a2e079d = ({ rows: rows  })=>{
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $c0b0747e319a57c2$export$2b959bb44e385245), {
        variant: "inline",
        children: rows.map((row, index)=>/*#__PURE__*/ (0, $2HdCV$jsx)((0, $c0b0747e319a57c2$export$2b379a888faa093d), {
                title: `${row.label}:`,
                children: row.value
            }, index))
    });
};






const $bdcd2d3867c14b67$var$DESCRIPTION_LENGTH = 50;
const $bdcd2d3867c14b67$var$WorkOrderListItem = ({ workOrder: { dateRaised: dateRaised , priority: priority , tradeDescription: tradeDescription , status: status , description: description , reference: reference  }  })=>{
    const { components: components  } = (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039);
    const dateRaisedAt = (0, $2HdCV$useMemo)(()=>(0, $03d980bb1cadebff$export$3ae94a2503e890a1)(dateRaised), [
        dateRaised
    ]);
    const rows = [
        {
            value: dateRaisedAt,
            label: components.workOrderList.raisedAt
        },
        {
            value: priority,
            label: components.workOrderList.priority
        }
    ];
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $67565638ca7adf52$export$d79f4543fbc1d78a), {
        children: /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $05cd8e7a841f591e$export$60332b2344f7fe41), {
            children: [
                /*#__PURE__*/ (0, $2HdCV$jsx)((0, $67565638ca7adf52$export$155d86d4b6139452), {
                    children: /*#__PURE__*/ (0, $2HdCV$jsx)((0, $3988fb5c053869e0$export$a6c7ac8248d6e38a), {
                        className: "lbh-link",
                        isExternal: true,
                        href: `${(0, $359379e3835f5ff6$export$2e2bcd8739ae039).repairsHubAppUrl}/work-orders/${reference}`,
                        children: /*#__PURE__*/ (0, $2HdCV$jsxs)("span", {
                            className: (0, $2HdCV$classnames)({
                                "work-order-list-item__trim": description.length > $bdcd2d3867c14b67$var$DESCRIPTION_LENGTH
                            }),
                            children: [
                                tradeDescription,
                                ": ",
                                description.substring(0, $bdcd2d3867c14b67$var$DESCRIPTION_LENGTH)
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0, $2HdCV$jsx)((0, $1b914fb82b6258ec$export$85cca3214a2e079d), {
                    rows: rows
                }),
                /*#__PURE__*/ (0, $2HdCV$jsx)((0, $f335e6f2c6d718a9$export$5a9fc13fffea5796), {}),
                /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                    className: "work-order-list-item__status",
                    children: [
                        " ",
                        status
                    ]
                })
            ]
        })
    });
};
var $bdcd2d3867c14b67$export$2e2bcd8739ae039 = $bdcd2d3867c14b67$var$WorkOrderListItem;


// import "./work-order-list.scss";
const { components: $81cf34f037180acd$var$components  } = (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039);
const $81cf34f037180acd$var$ExternalLink = ({ assetId: assetId  })=>/*#__PURE__*/ (0, $2HdCV$jsx)((0, $3988fb5c053869e0$export$a6c7ac8248d6e38a), {
        href: `${(0, $359379e3835f5ff6$export$2e2bcd8739ae039).repairsHubAppUrl}/properties/${assetId}`,
        isExternal: true,
        className: "repair-list__link",
        children: $81cf34f037180acd$var$components.workOrderList.seeAllWorkOrders
    });
const $81cf34f037180acd$export$2ebe11bf466082a5 = ({ assetId: assetId , statusCode: statusCode  })=>{
    const { data: workOrders , error: error  } = (0, $01baca9d46e421d5$export$888eda2be6b7998)(assetId, statusCode);
    if (error) return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $6c85cfad8f67e2c1$export$d0acb541148b73bf), {
        id: "work-order-list-error",
        title: $81cf34f037180acd$var$components.workOrderList.errors.unableToFetchWorkOrder,
        description: $81cf34f037180acd$var$components.workOrderList.errors.unableToFetchWorkOrderDescription
    });
    if (!workOrders) return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $7a53719b8c8c5793$export$1f54913ccc4368b1), {
        children: /*#__PURE__*/ (0, $2HdCV$jsx)((0, $146de147e9b0ec0a$export$7f7cbe89f1eacd2), {})
    });
    const getStatusLabel = (code)=>{
        const label = (0, $7bfff1c2eb4e6bfc$export$a4729db15693d5b0).find((item)=>item.code === code)?.value;
        return label || code;
    };
    if (!workOrders.length) return /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $2HdCV$Fragment), {
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("p", {
                className: "repair-list__no-work-orders",
                children: `${(0, $27ebdec7eb9f670c$export$2e2bcd8739ae039).components.workOrderList.noRepairs} ${getStatusLabel(statusCode)}`
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)($81cf34f037180acd$var$ExternalLink, {
                assetId: assetId
            })
        ]
    });
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)((0, $2e2c3f879bb7bf3b$export$bb29c16f5612603e), {
                children: workOrders.map((workOrder, index)=>/*#__PURE__*/ (0, $2HdCV$jsx)((0, $bdcd2d3867c14b67$export$2e2bcd8739ae039), {
                        workOrder: workOrder
                    }, index))
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)($81cf34f037180acd$var$ExternalLink, {
                assetId: assetId
            })
        ]
    });
};
const $81cf34f037180acd$export$f63a0de43af3043f = ({ assetId: assetId  })=>{
    const [statusCode, setStatusCode] = (0, $2HdCV$useState)((0, $7bfff1c2eb4e6bfc$export$a932fb750d9fd996).IN_PROGRESS);
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        className: "work-order-list",
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)((0, $eaa0448fa119ca25$export$2d00230e1e6f7fbc), {
                id: "filter",
                label: `${$81cf34f037180acd$var$components.workOrderList.selectLabel}:`,
                children: /*#__PURE__*/ (0, $2HdCV$jsx)((0, $26b38223ecc043a9$export$ef9b1a59e592288f), {
                    value: statusCode,
                    onChange: (e)=>setStatusCode(e.target.value),
                    "data-testid": "work-order-list:filter",
                    children: (0, $7bfff1c2eb4e6bfc$export$a4729db15693d5b0)?.map((filter, index)=>/*#__PURE__*/ (0, $2HdCV$jsxs)("option", {
                            value: filter.code,
                            children: [
                                $81cf34f037180acd$var$components.workOrderList.selectOptionLabel,
                                " ",
                                filter.value
                            ]
                        }, index))
                })
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)($81cf34f037180acd$export$2ebe11bf466082a5, {
                assetId: assetId,
                statusCode: statusCode
            })
        ]
    });
};









var $3c46803b3be84f8a$exports = {};
var $8f85306888d52331$exports = {};

$parcel$export($8f85306888d52331$exports, "BREAKPOINTS", function () { return $8f85306888d52331$export$426e07cd0772984d; });
$parcel$export($8f85306888d52331$exports, "queries", function () { return $8f85306888d52331$export$973f5a1dfb5a80d2; });
$parcel$export($8f85306888d52331$exports, "useBreakpoint", function () { return $8f85306888d52331$export$199d6754bdf4e1e3; });
$parcel$export($8f85306888d52331$exports, "useBreakpointValue", function () { return $8f85306888d52331$export$dc0946e21e709aff; });

const $8f85306888d52331$export$426e07cd0772984d = {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    "2xl": 1536
};
const $8f85306888d52331$export$973f5a1dfb5a80d2 = {
    base: "(min-width: 0px) and (max-width: 479px)",
    sm: "(min-width: 480px) and (max-width: 767px)",
    md: "(min-width: 768px) and (max-width: 991px)",
    lg: "(min-width: 992px) and (max-width: 1279px)",
    xl: "(min-width: 1280px) and (max-width: 1535px)",
    "2xl": "(min-width: 1536px)"
};
const $8f85306888d52331$var$breakpoints = new Map(Object.entries($8f85306888d52331$export$426e07cd0772984d));
const $8f85306888d52331$export$199d6754bdf4e1e3 = (breakpoint, defaultBreakpoint)=>{
    const { minWidth: minWidth  } = (0, $2HdCV$usebreakpoint)($8f85306888d52331$export$426e07cd0772984d, defaultBreakpoint);
    const point = $8f85306888d52331$var$breakpoints.get(breakpoint);
    if (point !== undefined) return minWidth >= point;
    return undefined;
};
const $8f85306888d52331$export$dc0946e21e709aff = (breakpointRecord, defaultBreakpoint)=>{
    const { minWidth: minWidth , breakpoint: breakpoint  } = (0, $2HdCV$usebreakpoint)($8f85306888d52331$export$426e07cd0772984d, defaultBreakpoint);
    const valueKeys = Object.keys(breakpointRecord);
    const index = valueKeys.indexOf(breakpoint);
    if (index !== -1) return breakpointRecord[`${breakpoint}`];
    let maxPointMatch = 0;
    let keyMatch = null;
    for(let i = 0; i < valueKeys.length; i += 1){
        const key = valueKeys[Number(i)];
        const point = $8f85306888d52331$var$breakpoints.get(key);
        if (point !== undefined && minWidth >= point && maxPointMatch <= point) {
            maxPointMatch = point;
            keyMatch = key;
        }
    }
    if (keyMatch) return breakpointRecord[`${keyMatch}`];
    return undefined;
};


var $c4bcad45531fd6f3$exports = {};

$parcel$export($c4bcad45531fd6f3$exports, "useCautionaryAlertCodes", function () { return $c4bcad45531fd6f3$export$c3ce0ce047cd24b3; });



const { hooks: $c4bcad45531fd6f3$var$hooks  } = (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039);
const { defaultCautionaryAlerts: $c4bcad45531fd6f3$var$defaultCautionaryAlerts  } = $c4bcad45531fd6f3$var$hooks;
const $c4bcad45531fd6f3$export$c3ce0ce047cd24b3 = ()=>{
    const [cautionaryAlerts, setCautionaryAlerts] = (0, $2HdCV$useState)($c4bcad45531fd6f3$var$defaultCautionaryAlerts);
    const { data: data , error: error  } = (0, $acadb3aa92b15cd6$export$caa1c15223f8c264)({
        category: "cautionary-alert",
        subCategory: "alert-type"
    });
    (0, $2HdCV$useEffect)(()=>{
        if (data?.["alert-type"]) {
            const fromErr = data?.["alert-type"].reduce((acc, obj)=>{
                acc[obj.code] = obj.value;
                return acc;
            }, {});
            const mergedCautionaryAlerts = {
                ...$c4bcad45531fd6f3$var$defaultCautionaryAlerts,
                ...fromErr
            };
            setCautionaryAlerts(mergedCautionaryAlerts);
        }
    }, [
        data
    ]);
    if (!data && !error) return null;
    return cautionaryAlerts;
};


var $445d702ca02466de$exports = {};

$parcel$export($445d702ca02466de$exports, "useConfiguration", function () { return $445d702ca02466de$export$730006aaa55ed657; });


const $445d702ca02466de$export$730006aaa55ed657 = (path)=>{
    const [config, setConfig] = (0, $2HdCV$useState)((0, $b42111426b53f26f$export$bd5d7e8cfaa78c6f)(path));
    (0, $2HdCV$useEffect)(()=>{
        const subscription = (0, $b42111426b53f26f$export$c7de631ed348a50).subscribe(()=>{
            setConfig((0, $b42111426b53f26f$export$bd5d7e8cfaa78c6f)(path));
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, [
        path
    ]);
    return config;
};


var $08e9db2df67ad9a4$exports = {};

$parcel$export($08e9db2df67ad9a4$exports, "useErrorCodes", function () { return $08e9db2df67ad9a4$export$cbb653210e90d2a9; });



const { hooks: $08e9db2df67ad9a4$var$hooks  } = (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039);
const { defaultErrorMessages: $08e9db2df67ad9a4$var$defaultErrorMessages  } = $08e9db2df67ad9a4$var$hooks;
const $08e9db2df67ad9a4$export$cbb653210e90d2a9 = ()=>{
    const [errorMessages, setErrorMessages] = (0, $2HdCV$useState)($08e9db2df67ad9a4$var$defaultErrorMessages);
    const { data: data , error: error  } = (0, $acadb3aa92b15cd6$export$caa1c15223f8c264)({
        category: "error-code",
        subCategory: "mmh"
    });
    (0, $2HdCV$useEffect)(()=>{
        if (data?.mmh) {
            const fromErr = data?.mmh.reduce((acc, obj)=>{
                acc[obj.code] = obj.value;
                return acc;
            }, {});
            const mergedErrors = {
                ...$08e9db2df67ad9a4$var$defaultErrorMessages,
                ...fromErr
            };
            setErrorMessages(mergedErrors);
        }
    }, [
        data
    ]);
    if (!data && !error) return null;
    return errorMessages;
};


var $484e339979407b15$exports = {};

$parcel$export($484e339979407b15$exports, "useFeatureToggle", function () { return $484e339979407b15$export$15a3adca94dec8dc; });


const $484e339979407b15$export$15a3adca94dec8dc = (path)=>{
    const [toggle, setToggle] = (0, $2HdCV$useState)((0, $b42111426b53f26f$export$8f4de18e72a21ac0)(path));
    (0, $2HdCV$useEffect)(()=>{
        const subscription = (0, $b42111426b53f26f$export$c7de631ed348a50).subscribe(()=>{
            setToggle((0, $b42111426b53f26f$export$8f4de18e72a21ac0)(path));
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, [
        path
    ]);
    return toggle;
};


$parcel$exportWildcard($3c46803b3be84f8a$exports, $8f85306888d52331$exports);
$parcel$exportWildcard($3c46803b3be84f8a$exports, $c4bcad45531fd6f3$exports);
$parcel$exportWildcard($3c46803b3be84f8a$exports, $445d702ca02466de$exports);
$parcel$exportWildcard($3c46803b3be84f8a$exports, $08e9db2df67ad9a4$exports);
$parcel$exportWildcard($3c46803b3be84f8a$exports, $484e339979407b15$exports);




const $9faa7f69be5a2179$export$71214b16dbc210d1 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function SideBarSection({ children: children , heading: heading , className: className , isCollapsed: isCollapsed = false , ...props }, ref) {
    if (isCollapsed) return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $d45eb4ba04710c97$export$d99097c13d4dac9f), {
        ref: ref,
        ...props,
        children: children
    });
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        ref: ref,
        className: (0, $2HdCV$classnames)("mtfh-sidebar-section", className),
        ...props,
        children: [
            heading ? /*#__PURE__*/ (0, $2HdCV$jsx)((0, $ad5b03a44afaa2a4$export$a8a3e93435678ff9), {
                as: "h2",
                children: heading
            }) : undefined,
            children
        ]
    });
});
const $9faa7f69be5a2179$export$614264b7ca4804e6 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function SideBar({ as: SideBarComp = "div" , id: id , top: top , children: children , className: className , ...props }, ref) {
    const isDesktop = (0, $8f85306888d52331$export$199d6754bdf4e1e3)("md");
    const sidebarClasses = (0, $2HdCV$classnames)("mtfh-sidebar", className);
    return /*#__PURE__*/ (0, $2HdCV$jsxs)(SideBarComp, {
        ref: ref,
        className: sidebarClasses,
        ...props,
        children: [
            top,
            !isDesktop ? /*#__PURE__*/ (0, $2HdCV$jsx)((0, $d45eb4ba04710c97$export$a766cd26d0d69044), {
                id: id,
                children: (0, $2HdCV$Children).map(children, (child)=>child && /*#__PURE__*/ (0, $2HdCV$isValidElement)(child) ? /*#__PURE__*/ (0, $2HdCV$cloneElement)(child, {
                        isCollapsed: true
                    }) : undefined)
            }) : /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                id: id,
                children: children
            })
        ]
    });
});












const $e6f14e429db19897$export$63b4fc557d1c57af = ()=>{
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("circle", {
                cx: "22.5",
                cy: "22.5",
                r: "21.75",
                fill: "white",
                stroke: "#00664F",
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M35 15.5127L18.775 33L11 24.6201L14.2591 21.1074L18.775 25.9746L31.7409 12L35 15.5127Z",
                fill: "#00664F"
            })
        ]
    });
};
const $e6f14e429db19897$export$f7dc499a72baa103 = ()=>{
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("circle", {
                cx: "22.5",
                cy: "22.5",
                r: "21.75",
                fill: "white",
                stroke: "#BE3A34",
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                d: "M24.2969 26.6587H20.6035L19.8315 11.8701H25.0688L24.2969 26.6587ZM19.771 31.8354C19.771 30.9878 19.998 30.347 20.4521 29.9131C20.9062 29.4792 21.5672 29.2622 22.4351 29.2622C23.2726 29.2622 23.9185 29.4842 24.3726 29.9282C24.8368 30.3722 25.0688 31.008 25.0688 31.8354C25.0688 32.6326 24.8368 33.2633 24.3726 33.7275C23.9084 34.1816 23.2625 34.4087 22.4351 34.4087C21.5874 34.4087 20.9315 34.1867 20.4673 33.7427C20.0031 33.2886 19.771 32.6528 19.771 31.8354Z",
                fill: "#BE3A34"
            })
        ]
    });
};
const $e6f14e429db19897$export$d206ce4c12e8ddf6 = ()=>{
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $2HdCV$jsx)("circle", {
                cx: "22.5",
                cy: "22.5",
                r: "21.75",
                fill: "white",
                stroke: "#0B0C0C",
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("path", {
                d: "M20.2251 12.7026C20.2251 11.1991 21.0627 10.4473 22.7378 10.4473C24.4129 10.4473 25.2505 11.1991 25.2505 12.7026C25.2505 13.4191 25.0386 13.9792 24.6147 14.3828C24.201 14.7764 23.5754 14.9731 22.7378 14.9731C21.0627 14.9731 20.2251 14.2163 20.2251 12.7026ZM25.0386 34H20.4219V17.0771H25.0386V34Z",
                fill: "#0B0C0C"
            })
        ]
    });
};




const $de2a8bbe5d595d52$export$88b4b1f88672e6b1 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function StatusBox({ children: children , className: className , title: title , variant: variant , ...props }, ref) {
    const icon = (0, $2HdCV$useMemo)(()=>{
        if (variant === "success") return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $e6f14e429db19897$export$63b4fc557d1c57af), {});
        if (variant === "warning") return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $e6f14e429db19897$export$f7dc499a72baa103), {});
        return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $e6f14e429db19897$export$d206ce4c12e8ddf6), {});
    }, [
        variant
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $8f57067b1c0d7880$export$e71c4d32a2263218), {
        variant: variant,
        children: /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
            ref: ref,
            className: "mtfh-status-box",
            ...props,
            children: [
                icon,
                /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                            className: "mtfh-status-heading__title",
                            children: /*#__PURE__*/ (0, $2HdCV$jsx)((0, $ad5b03a44afaa2a4$export$a8a3e93435678ff9), {
                                variant: "h4",
                                children: title
                            })
                        }),
                        children
                    ]
                })
            ]
        })
    });
});







const $8767e9eb2c7bc292$export$dff1cead12425332 = ({ title: title , variant: variant = "base"  })=>{
    const icon = (0, $2HdCV$useMemo)(()=>{
        if (variant === "success") return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $e6f14e429db19897$export$63b4fc557d1c57af), {});
        if (variant === "warning") return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $e6f14e429db19897$export$f7dc499a72baa103), {});
        return /*#__PURE__*/ (0, $2HdCV$jsx)((0, $e6f14e429db19897$export$d206ce4c12e8ddf6), {});
    }, [
        variant
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        className: "mtfh-status-heading",
        children: [
            icon,
            /*#__PURE__*/ (0, $2HdCV$jsx)("h4", {
                className: "lbh-heading-h4 mtfh-status-heading__title",
                children: title
            })
        ]
    });
};








const $746c0b0dec746872$export$54ec01a60f47d33d = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Thead({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("table", {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-table", "lbh-table", className),
        ...props
    });
});
const $746c0b0dec746872$export$5de8fa06af5ae15a = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Thead({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("thead", {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-table__head", className),
        ...props
    });
});
const $746c0b0dec746872$export$e4d84274604d936d = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Tbody({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("tbody", {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-table__body", className),
        ...props
    });
});
const $746c0b0dec746872$export$3be148b8762ca608 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Tr({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $2HdCV$jsx)("tr", {
        ref: ref,
        className: (0, $2HdCV$classnames)("govuk-table__row", className),
        ...props
    });
});
const $746c0b0dec746872$export$478f015b832c0fb2 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Th({ className: className , isNumeric: isNumeric , ...props }, ref) {
    const thClasses = (0, $2HdCV$classnames)("govuk-table__cell", "govuk-table__header", {
        "govuk-table__cell--numeric": isNumeric
    }, className);
    return /*#__PURE__*/ (0, $2HdCV$jsx)("th", {
        ref: ref,
        className: thClasses,
        ...props
    });
});
const $746c0b0dec746872$export$8f04ceab90eac988 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function Td({ className: className , isNumeric: isNumeric , ...props }, ref) {
    const tdClasses = (0, $2HdCV$classnames)("govuk-table__cell", {
        "govuk-table__cell--numeric": isNumeric
    }, className);
    return /*#__PURE__*/ (0, $2HdCV$jsx)("td", {
        ref: ref,
        className: tdClasses,
        ...props
    });
});
const $746c0b0dec746872$export$35468a455d619eb3 = /*#__PURE__*/ (0, $2HdCV$forwardRef)(function TableCaption({ children: children , className: className , variant: variant , ...props }, ref) {
    const captionClasses = (0, $2HdCV$classnames)("govuk-table__caption", "lbh-table__caption", {
        "govuk-table__caption--s": variant === "small",
        "govuk-table__caption--m": variant === "medium",
        "govuk-table__caption--l": variant === "large",
        "govuk-table__caption--xl": variant === "xlarge"
    }, className);
    return /*#__PURE__*/ (0, $2HdCV$jsx)("caption", {
        ref: ref,
        className: captionClasses,
        ...props,
        children: children
    });
});










const $f77e1ea6814df0b2$export$ed8ca599049e8881 = ({ activeStep: activeStep = 0 , title: title , children: children , startIndex: startIndex , ...props })=>{
    return /*#__PURE__*/ (0, $2HdCV$jsxs)("div", {
        ...props,
        children: [
            title && /*#__PURE__*/ (0, $2HdCV$jsx)((0, $ad5b03a44afaa2a4$export$a8a3e93435678ff9), {
                as: "h3",
                variant: "h3",
                className: "mtfh-stepper__main-title",
                children: title
            }),
            /*#__PURE__*/ (0, $2HdCV$jsx)("div", {
                className: "mtfh-stepper mtfh-stepper--large mtfh-stepper--active",
                children: /*#__PURE__*/ (0, $2HdCV$jsx)("ol", {
                    className: "mtfh-stepper",
                    children: (0, $2HdCV$Children).map(children, (child, stepIndex)=>child && /*#__PURE__*/ (0, $2HdCV$isValidElement)(child) && /*#__PURE__*/ (0, $2HdCV$jsx)("li", {
                            className: (0, $2HdCV$classnames)("mtfh-stepper__step", {
                                "mtfh-stepper__step--active": stepIndex === activeStep
                            }),
                            children: /*#__PURE__*/ (0, $2HdCV$cloneElement)(child, {
                                ...child.props,
                                stepIndex: startIndex && startIndex > 0 ? startIndex + stepIndex + 1 : stepIndex + 1
                            })
                        }))
                })
            })
        ]
    });
};






const $7c0c1a24decf580c$export$fd55ce593607084a = ({ stepIndex: stepIndex , children: children  })=>/*#__PURE__*/ (0, $2HdCV$jsx)("div", {
        className: "mtfh-stepper__header",
        children: /*#__PURE__*/ (0, $2HdCV$jsxs)((0, $ad5b03a44afaa2a4$export$a8a3e93435678ff9), {
            as: "h4",
            variant: "h4",
            className: "mtfh-stepper__title",
            children: [
                /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                    className: "mtfh-stepper__circle mtfh-stepper__circle--number",
                    children: /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                        className: "mtfh-stepper__circle-inner",
                        children: /*#__PURE__*/ (0, $2HdCV$jsxs)("span", {
                            className: "mtfh-stepper__circle-background",
                            children: [
                                /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                                    className: "govuk-visually-hidden",
                                    children: (0, $27ebdec7eb9f670c$export$2e2bcd8739ae039).components.stepper.step
                                }),
                                stepIndex
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                    children: /*#__PURE__*/ (0, $2HdCV$jsx)("button", {
                        className: "mtfh-stepper__button mtfh-stepper__button--title",
                        children: /*#__PURE__*/ (0, $2HdCV$jsx)("span", {
                            children: children
                        })
                    })
                })
            ]
        })
    });






var $b4585d079097b034$exports = {};
var $1678d6e4620c1f8a$exports = {};
var $57bfbadd3acaa576$exports = {};

$parcel$export($57bfbadd3acaa576$exports, "BooleanContext", function () { return $57bfbadd3acaa576$export$b379541fcb8ba4dc; });
$parcel$export($57bfbadd3acaa576$exports, "BooleanContextProvider", function () { return $57bfbadd3acaa576$export$515106df47ff5e43; });


const $57bfbadd3acaa576$export$b379541fcb8ba4dc = /*#__PURE__*/ (0, $2HdCV$createContext)({
    booleans: {},
    setBooleans: ()=>{}
});
const $57bfbadd3acaa576$export$515106df47ff5e43 = ({ children: children , initialValue: initialValue = {}  })=>{
    const [booleans, setBooleansState] = (0, $2HdCV$useState)(initialValue);
    const setBooleans = (0, $2HdCV$useCallback)((newBooleans)=>setBooleansState((current)=>({
                ...current,
                ...newBooleans
            })), [
        setBooleansState
    ]);
    const value = (0, $2HdCV$useMemo)(()=>({
            booleans: booleans,
            setBooleans: setBooleans
        }), [
        booleans,
        setBooleans
    ]);
    return /*#__PURE__*/ (0, $2HdCV$jsx)($57bfbadd3acaa576$export$b379541fcb8ba4dc.Provider, {
        value: value,
        children: children
    });
};


$parcel$exportWildcard($1678d6e4620c1f8a$exports, $57bfbadd3acaa576$exports);


$parcel$exportWildcard($b4585d079097b034$exports, $1678d6e4620c1f8a$exports);



const $1c15e570107e2424$export$c7bd411105e2dec3 = "Callum";


export {$1c15e570107e2424$export$c7bd411105e2dec3 as Name, $08398a1b9daf8edd$export$59e116b9e6c36e7f as TestButton, $5c7455bce6186693$export$caec2af78bcc877f as Alert, $6c85cfad8f67e2c1$export$d0acb541148b73bf as ErrorSummary, $42a5f0178b42943a$export$a1af6f79df847fac as TimeInput, $6c736a18ee080817$export$155ec85c4e3b5e85 as axiosInstance, $6c736a18ee080817$export$a9a71abd6e0b56fe as createCancelToken, $6c736a18ee080817$export$fbafdbe06a5b5a9a as isAxiosError, $88fa3d186dcadbc0$export$91375b104025299 as axiosFetcher, $88fa3d186dcadbc0$export$a84fc53129590f47 as useAxiosSWR, $88fa3d186dcadbc0$export$18b3a6cf21214f90 as useAxiosSWRInfinite, $88fa3d186dcadbc0$re_export$mutate as mutate, $6f8b946ffabfebb4$export$94f900a053ab5369 as $auth, $6f8b946ffabfebb4$export$ef9b508a7de1e84d as processToken, $6f8b946ffabfebb4$export$aa1859fa13b5bc66 as isAuthorisedForGroups, $6f8b946ffabfebb4$export$a985eb0635740fe9 as isAuthorised, $6f8b946ffabfebb4$export$a0973bcfe11b05c9 as logout, $6f8b946ffabfebb4$export$596d806903d1f59e as login, $b42111426b53f26f$export$99fef60adacea338 as hydrateConfiguration, $b42111426b53f26f$export$c7de631ed348a50 as $configuration, $b42111426b53f26f$export$3de01744a82b21a4 as getConfiguration, $b42111426b53f26f$export$bd5d7e8cfaa78c6f as getConfigItem, $b42111426b53f26f$export$8f4de18e72a21ac0 as getFeatureToggle, $57bfbadd3acaa576$export$b379541fcb8ba4dc as BooleanContext, $57bfbadd3acaa576$export$515106df47ff5e43 as BooleanContextProvider, $8f85306888d52331$export$426e07cd0772984d as BREAKPOINTS, $8f85306888d52331$export$973f5a1dfb5a80d2 as queries, $8f85306888d52331$export$199d6754bdf4e1e3 as useBreakpoint, $8f85306888d52331$export$dc0946e21e709aff as useBreakpointValue, $c4bcad45531fd6f3$export$c3ce0ce047cd24b3 as useCautionaryAlertCodes, $445d702ca02466de$export$730006aaa55ed657 as useConfiguration, $08e9db2df67ad9a4$export$cbb653210e90d2a9 as useErrorCodes, $484e339979407b15$export$15a3adca94dec8dc as useFeatureToggle};
//# sourceMappingURL=main.js.map
