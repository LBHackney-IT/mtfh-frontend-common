import {jsx as $2HdCV$jsx, jsxs as $2HdCV$jsxs} from "react/jsx-runtime";
import {createContext as $2HdCV$createContext, useState as $2HdCV$useState, useCallback as $2HdCV$useCallback, useMemo as $2HdCV$useMemo, useEffect as $2HdCV$useEffect, forwardRef as $2HdCV$forwardRef, useRef as $2HdCV$useRef} from "react";
import $2HdCV$axios from "axios";
import {v4 as $2HdCV$v4} from "uuid";
import $2HdCV$jscookie from "js-cookie";
import $2HdCV$jwtdecode from "jwt-decode";
import {BehaviorSubject as $2HdCV$BehaviorSubject} from "rxjs";
import $2HdCV$swr, {mutate as $88fa3d186dcadbc0$re_export$mutate} from "swr";
import $2HdCV$swrinfinite from "swr/infinite";
import $2HdCV$usebreakpoint from "use-breakpoint";
import $2HdCV$classnames from "classnames";
import $2HdCV$reactmergerefs from "react-merge-refs";
import {ErrorSummary as $2HdCV$ErrorSummary} from "lbh-frontend";
import {differenceInYears as $2HdCV$differenceInYears, parseISO as $2HdCV$parseISO, isSameDay as $2HdCV$isSameDay, isValid as $2HdCV$isValid, format as $2HdCV$format, isFuture as $2HdCV$isFuture, parse as $2HdCV$parse} from "date-fns";
import {diff as $2HdCV$diff} from "deep-diff";

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


const $1c15e570107e2424$export$c7bd411105e2dec3 = "Callum";


export {$1c15e570107e2424$export$c7bd411105e2dec3 as Name, $08398a1b9daf8edd$export$59e116b9e6c36e7f as TestButton, $5c7455bce6186693$export$caec2af78bcc877f as Alert, $6c85cfad8f67e2c1$export$d0acb541148b73bf as ErrorSummary, $42a5f0178b42943a$export$a1af6f79df847fac as TimeInput, $6c736a18ee080817$export$155ec85c4e3b5e85 as axiosInstance, $6c736a18ee080817$export$a9a71abd6e0b56fe as createCancelToken, $6c736a18ee080817$export$fbafdbe06a5b5a9a as isAxiosError, $88fa3d186dcadbc0$export$91375b104025299 as axiosFetcher, $88fa3d186dcadbc0$export$a84fc53129590f47 as useAxiosSWR, $88fa3d186dcadbc0$export$18b3a6cf21214f90 as useAxiosSWRInfinite, $88fa3d186dcadbc0$re_export$mutate as mutate, $6f8b946ffabfebb4$export$94f900a053ab5369 as $auth, $6f8b946ffabfebb4$export$ef9b508a7de1e84d as processToken, $6f8b946ffabfebb4$export$aa1859fa13b5bc66 as isAuthorisedForGroups, $6f8b946ffabfebb4$export$a985eb0635740fe9 as isAuthorised, $6f8b946ffabfebb4$export$a0973bcfe11b05c9 as logout, $6f8b946ffabfebb4$export$596d806903d1f59e as login, $b42111426b53f26f$export$99fef60adacea338 as hydrateConfiguration, $b42111426b53f26f$export$c7de631ed348a50 as $configuration, $b42111426b53f26f$export$3de01744a82b21a4 as getConfiguration, $b42111426b53f26f$export$bd5d7e8cfaa78c6f as getConfigItem, $b42111426b53f26f$export$8f4de18e72a21ac0 as getFeatureToggle, $57bfbadd3acaa576$export$b379541fcb8ba4dc as BooleanContext, $57bfbadd3acaa576$export$515106df47ff5e43 as BooleanContextProvider, $8f85306888d52331$export$426e07cd0772984d as BREAKPOINTS, $8f85306888d52331$export$973f5a1dfb5a80d2 as queries, $8f85306888d52331$export$199d6754bdf4e1e3 as useBreakpoint, $8f85306888d52331$export$dc0946e21e709aff as useBreakpointValue, $c4bcad45531fd6f3$export$c3ce0ce047cd24b3 as useCautionaryAlertCodes, $445d702ca02466de$export$730006aaa55ed657 as useConfiguration, $08e9db2df67ad9a4$export$cbb653210e90d2a9 as useErrorCodes, $484e339979407b15$export$15a3adca94dec8dc as useFeatureToggle};
//# sourceMappingURL=main.js.map
