require("./main.css");
var $i684g$axios = require("axios");
var $i684g$uuid = require("uuid");
var $i684g$swr = require("swr");
var $i684g$swrinfinite = require("swr/infinite");
var $i684g$jscookie = require("js-cookie");
var $i684g$jwtdecode = require("jwt-decode");
var $i684g$usebreakpoint = require("use-breakpoint");
var $i684g$react = require("react");
var $i684g$rxjs = require("rxjs");
var $i684g$reactjsxruntime = require("react/jsx-runtime");
var $i684g$reactmergerefs = require("react-merge-refs");
var $i684g$classnames = require("classnames");
var $i684g$lbhfrontend = require("lbh-frontend");
var $i684g$datefns = require("date-fns");
var $i684g$deepdiff = require("deep-diff");
var $i684g$querystring = require("query-string");
var $i684g$reactrouterdom = require("react-router-dom");
var $i684g$reachdialog = require("@reach/dialog");
require("@reach/dialog/styles.css");
var $i684g$formik = require("formik");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $569092d0c967ee8e$exports = {};
var $681e52e5f1c343a3$exports = {};

$parcel$export($681e52e5f1c343a3$exports, "getAxiosInstance", function () { return $681e52e5f1c343a3$export$b54474b5f400d58a; });
$parcel$export($681e52e5f1c343a3$exports, "createCancelToken", function () { return $681e52e5f1c343a3$export$a9a71abd6e0b56fe; });
$parcel$export($681e52e5f1c343a3$exports, "isAxiosError", function () { return $681e52e5f1c343a3$export$fbafdbe06a5b5a9a; });


const $681e52e5f1c343a3$export$b54474b5f400d58a = (auth)=>{
    const axiosInstance = (0, ($parcel$interopDefault($i684g$axios))).create({
        responseType: "json"
    });
    axiosInstance.interceptors.request.use((reqConfig)=>{
        const req = {
            ...reqConfig,
            headers: {
                ...reqConfig.headers,
                Authorization: `Bearer ${auth.user.token}`,
                ...reqConfig.headers["skip-x-correlation-id"] ? {} : {
                    "x-correlation-id": (0, $i684g$uuid.v4)()
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
    axiosInstance.interceptors.response.use((res)=>{
        if (res.config.method === "get" && res.data?.id) res.data.etag = res.headers.etag;
        return res;
    }, (error)=>{
        if (error.response?.status === 403) {
            if (auth.isAuthorised()) auth.logout();
        }
        throw error;
    });
    return axiosInstance;
};
const $681e52e5f1c343a3$export$a9a71abd6e0b56fe = ()=>(0, ($parcel$interopDefault($i684g$axios))).CancelToken.source();
const $681e52e5f1c343a3$export$fbafdbe06a5b5a9a = (e)=>(0, ($parcel$interopDefault($i684g$axios))).isAxiosError(e);


var $806744a72941830a$exports = {};
var $08fd481a73641560$exports = {};

$parcel$export($08fd481a73641560$exports, "axiosFetcher", function () { return $08fd481a73641560$export$91375b104025299; });
$parcel$export($08fd481a73641560$exports, "useAxiosSWR", function () { return $08fd481a73641560$export$a84fc53129590f47; });
$parcel$export($08fd481a73641560$exports, "useAxiosSWRInfinite", function () { return $08fd481a73641560$export$18b3a6cf21214f90; });
$parcel$export($08fd481a73641560$exports, "mutate", function () { return $08fd481a73641560$re_export$mutate; });



const $08fd481a73641560$export$91375b104025299 = (auth, options = {})=>(url)=>{
        const axiosInstance = (0, $681e52e5f1c343a3$export$b54474b5f400d58a)(auth);
        return axiosInstance.get(url, options).then((res)=>res.data);
    };
const $08fd481a73641560$export$a84fc53129590f47 = (key, auth, options = {})=>(0, ($parcel$interopDefault($i684g$swr)))(key, $08fd481a73641560$export$91375b104025299(auth, options), {
        shouldRetryOnError: false,
        ...options
    });
const $08fd481a73641560$export$18b3a6cf21214f90 = (key, auth, options = {})=>(0, ($parcel$interopDefault($i684g$swrinfinite)))(key, $08fd481a73641560$export$91375b104025299(auth, options), options);


$parcel$exportWildcard($806744a72941830a$exports, $08fd481a73641560$exports);


$parcel$exportWildcard($569092d0c967ee8e$exports, $681e52e5f1c343a3$exports);
$parcel$exportWildcard($569092d0c967ee8e$exports, $806744a72941830a$exports);


var $770ca302370776db$exports = {};
var $6b4f1832ab8ff3f5$exports = {};

$parcel$export($6b4f1832ab8ff3f5$exports, "CommonAuth", function () { return $6b4f1832ab8ff3f5$export$1aef0919781140fb; });


const $6b4f1832ab8ff3f5$var$voidUser = {
    token: "",
    sub: "",
    email: "",
    iss: "",
    name: "",
    groups: [],
    iat: Number.NaN
};
class $6b4f1832ab8ff3f5$export$1aef0919781140fb {
    get user() {
        return this._user;
    }
    parseToken() {
        const token = (0, ($parcel$interopDefault($i684g$jscookie))).get(this._authToken) || null;
        if (!token) return $6b4f1832ab8ff3f5$var$voidUser;
        try {
            const decodedToken = (0, ($parcel$interopDefault($i684g$jwtdecode)))(token);
            return {
                ...decodedToken,
                token: token
            };
        } catch  {
            return $6b4f1832ab8ff3f5$var$voidUser;
        }
    }
    processToken() {
        this._user = this.parseToken();
    }
    isAuthorisedForGroups(groups) {
        return groups.some((group)=>this._user.groups.includes(group));
    }
    isAuthorised() {
        return this.isAuthorisedForGroups(this._authAllowedGroups);
    }
    logout() {
        this._user = $6b4f1832ab8ff3f5$var$voidUser;
        (0, ($parcel$interopDefault($i684g$jscookie))).remove(this._authToken, {
            domain: this._cookieDomain
        });
        window.location.reload();
    }
    login(redirectUrl = `${window.location.origin}/search`) {
        this.logout();
        window.location.href = `${this._authDomain}?redirect_uri=${encodeURIComponent(redirectUrl)}`;
    }
    constructor(authAllowedGroups = [
        "TEST_GROUP"
    ], authDomain = "//auth.hackney.gov.uk/auth", cookieDomain = "hackney.gov.uk", authToken = "hackneyToken"){
        this._authAllowedGroups = authAllowedGroups;
        this._authDomain = authDomain;
        this._cookieDomain = cookieDomain;
        this._authToken = authToken;
        this._user = this.parseToken();
    }
}


$parcel$exportWildcard($770ca302370776db$exports, $6b4f1832ab8ff3f5$exports);


var $3e992cfbf7a8a728$exports = {};
var $acd2d3fb03fcdf14$exports = {};

$parcel$export($acd2d3fb03fcdf14$exports, "BREAKPOINTS", function () { return $acd2d3fb03fcdf14$export$426e07cd0772984d; });
$parcel$export($acd2d3fb03fcdf14$exports, "queries", function () { return $acd2d3fb03fcdf14$export$973f5a1dfb5a80d2; });
$parcel$export($acd2d3fb03fcdf14$exports, "useBreakpoint", function () { return $acd2d3fb03fcdf14$export$199d6754bdf4e1e3; });
$parcel$export($acd2d3fb03fcdf14$exports, "useBreakpointValue", function () { return $acd2d3fb03fcdf14$export$dc0946e21e709aff; });

const $acd2d3fb03fcdf14$export$426e07cd0772984d = {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    "2xl": 1536
};
const $acd2d3fb03fcdf14$export$973f5a1dfb5a80d2 = {
    base: "(min-width: 0px) and (max-width: 479px)",
    sm: "(min-width: 480px) and (max-width: 767px)",
    md: "(min-width: 768px) and (max-width: 991px)",
    lg: "(min-width: 992px) and (max-width: 1279px)",
    xl: "(min-width: 1280px) and (max-width: 1535px)",
    "2xl": "(min-width: 1536px)"
};
const $acd2d3fb03fcdf14$var$breakpoints = new Map(Object.entries($acd2d3fb03fcdf14$export$426e07cd0772984d));
const $acd2d3fb03fcdf14$export$199d6754bdf4e1e3 = (breakpoint, defaultBreakpoint)=>{
    const { minWidth: minWidth  } = (0, ($parcel$interopDefault($i684g$usebreakpoint)))($acd2d3fb03fcdf14$export$426e07cd0772984d, defaultBreakpoint);
    const point = $acd2d3fb03fcdf14$var$breakpoints.get(breakpoint);
    if (point !== undefined) return minWidth >= point;
    return undefined;
};
const $acd2d3fb03fcdf14$export$dc0946e21e709aff = (breakpointRecord, defaultBreakpoint)=>{
    const { minWidth: minWidth , breakpoint: breakpoint  } = (0, ($parcel$interopDefault($i684g$usebreakpoint)))($acd2d3fb03fcdf14$export$426e07cd0772984d, defaultBreakpoint);
    const valueKeys = Object.keys(breakpointRecord);
    const index = valueKeys.indexOf(breakpoint);
    if (index !== -1) return breakpointRecord[`${breakpoint}`];
    let maxPointMatch = 0;
    let keyMatch = null;
    for(let i = 0; i < valueKeys.length; i += 1){
        const key = valueKeys[Number(i)];
        const point = $acd2d3fb03fcdf14$var$breakpoints.get(key);
        if (point !== undefined && minWidth >= point && maxPointMatch <= point) {
            maxPointMatch = point;
            keyMatch = key;
        }
    }
    if (keyMatch) return breakpointRecord[`${keyMatch}`];
    return undefined;
};


var $51552beaa5d26bca$exports = {};

$parcel$export($51552beaa5d26bca$exports, "useCautionaryAlertCodes", function () { return $51552beaa5d26bca$export$c3ce0ce047cd24b3; });

const $c76f4f81e9b49394$var$config = {
    appEnv: "development",
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
var $c76f4f81e9b49394$export$2e2bcd8739ae039 = $c76f4f81e9b49394$var$config;





const $84a1308d155a914a$export$caa1c15223f8c264 = ({ category: category , subCategory: subCategory  }, auth, options)=>{
    let params = `category=${category}`;
    /* istanbul ignore else */ if (subCategory) params += `&subCategory=${subCategory}`;
    return (0, $08fd481a73641560$export$a84fc53129590f47)(`${(0, $c76f4f81e9b49394$export$2e2bcd8739ae039).referenceDataApiUrlV1}/reference-data?${params}`, auth, options);
};






const $99138c4371ee1491$var$locale = {
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
                        return $99138c4371ee1491$var$locale.components.conflictErrorSummary.changesNotSaved;
                    default:
                        return "There was a problem with completing the action";
                }
            },
            statusDescription: (code)=>{
                switch(code){
                    case 409:
                        return $99138c4371ee1491$var$locale.components.conflictErrorSummary.anotherUserMadeEdit;
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
var $99138c4371ee1491$export$2e2bcd8739ae039 = $99138c4371ee1491$var$locale;


const { hooks: $51552beaa5d26bca$var$hooks  } = (0, $99138c4371ee1491$export$2e2bcd8739ae039);
const { defaultCautionaryAlerts: $51552beaa5d26bca$var$defaultCautionaryAlerts  } = $51552beaa5d26bca$var$hooks;
const $51552beaa5d26bca$export$c3ce0ce047cd24b3 = (auth)=>{
    const [cautionaryAlerts, setCautionaryAlerts] = (0, $i684g$react.useState)($51552beaa5d26bca$var$defaultCautionaryAlerts);
    const { data: data , error: error  } = (0, $84a1308d155a914a$export$caa1c15223f8c264)({
        category: "cautionary-alert",
        subCategory: "alert-type"
    }, auth);
    (0, $i684g$react.useEffect)(()=>{
        if (data?.["alert-type"]) {
            const fromErr = data?.["alert-type"].reduce((acc, obj)=>{
                acc[obj.code] = obj.value;
                return acc;
            }, {});
            const mergedCautionaryAlerts = {
                ...$51552beaa5d26bca$var$defaultCautionaryAlerts,
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


var $4e8909cc648bafd1$exports = {};

$parcel$export($4e8909cc648bafd1$exports, "useConfiguration", function () { return $4e8909cc648bafd1$export$730006aaa55ed657; });

var $f1498986601cb3ee$exports = {};
var $4ed1c8ae8173298c$exports = {};

$parcel$export($4ed1c8ae8173298c$exports, "hydrateConfiguration", function () { return $4ed1c8ae8173298c$export$99fef60adacea338; });
$parcel$export($4ed1c8ae8173298c$exports, "$configuration", function () { return $4ed1c8ae8173298c$export$c7de631ed348a50; });
$parcel$export($4ed1c8ae8173298c$exports, "getConfiguration", function () { return $4ed1c8ae8173298c$export$3de01744a82b21a4; });
$parcel$export($4ed1c8ae8173298c$exports, "getConfigItem", function () { return $4ed1c8ae8173298c$export$bd5d7e8cfaa78c6f; });
$parcel$export($4ed1c8ae8173298c$exports, "getFeatureToggle", function () { return $4ed1c8ae8173298c$export$8f4de18e72a21ac0; });



const $4ed1c8ae8173298c$var$initialConfiguration = {
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
const $4ed1c8ae8173298c$export$99fef60adacea338 = ()=>{
    try {
        const features = JSON.parse(window.localStorage.getItem("features") || "");
        if (typeof features === "object") return features;
        throw new Error("Invalid feature store in local storage");
    } catch (e) {
        if (localStorage.getItem("features")) window.localStorage.removeItem("features");
    }
    return {};
};
const $4ed1c8ae8173298c$export$c7de631ed348a50 = new (0, $i684g$rxjs.BehaviorSubject)($4ed1c8ae8173298c$export$99fef60adacea338());
const $4ed1c8ae8173298c$export$3de01744a82b21a4 = async (auth)=>{
    const axiosInstance = (0, $681e52e5f1c343a3$export$b54474b5f400d58a)(auth);
    try {
        const res = await axiosInstance.get(`${(0, $c76f4f81e9b49394$export$2e2bcd8739ae039).configurationApiUrlV1}/api/v1/configuration?types=MMH`);
        res.data.forEach(({ type: type , featureToggles: featureToggles , configuration: configuration  })=>{
            const configs = $4ed1c8ae8173298c$export$c7de631ed348a50.getValue();
            $4ed1c8ae8173298c$export$c7de631ed348a50.next({
                ...configs,
                [type]: {
                    featureToggles: featureToggles,
                    configuration: configuration
                }
            });
        });
        window.localStorage.setItem("features", JSON.stringify($4ed1c8ae8173298c$export$c7de631ed348a50.getValue()));
    } catch (e) {
    // TODO add logging for failed configuration
    }
};
const $4ed1c8ae8173298c$var$getAppConfig = (type)=>{
    const configs = $4ed1c8ae8173298c$export$c7de631ed348a50.getValue();
    const appConfig = configs[type];
    return appConfig || null;
};
const $4ed1c8ae8173298c$export$bd5d7e8cfaa78c6f = (path)=>{
    const [type, key] = path.split(".");
    const appConfig = $4ed1c8ae8173298c$var$getAppConfig(type);
    return appConfig?.configuration[key] || "";
};
const $4ed1c8ae8173298c$export$8f4de18e72a21ac0 = (path)=>{
    const [type, key] = path.split(".");
    const appConfig = $4ed1c8ae8173298c$var$getAppConfig(type);
    const value = appConfig?.featureToggles[key];
    return typeof value === "boolean" ? value : false;
};


$parcel$exportWildcard($f1498986601cb3ee$exports, $4ed1c8ae8173298c$exports);


const $4e8909cc648bafd1$export$730006aaa55ed657 = (path)=>{
    const [config, setConfig] = (0, $i684g$react.useState)((0, $4ed1c8ae8173298c$export$bd5d7e8cfaa78c6f)(path));
    (0, $i684g$react.useEffect)(()=>{
        const subscription = (0, $4ed1c8ae8173298c$export$c7de631ed348a50).subscribe(()=>{
            setConfig((0, $4ed1c8ae8173298c$export$bd5d7e8cfaa78c6f)(path));
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, [
        path
    ]);
    return config;
};


var $b14faf8215ffc715$exports = {};

$parcel$export($b14faf8215ffc715$exports, "useErrorCodes", function () { return $b14faf8215ffc715$export$cbb653210e90d2a9; });



const { hooks: $b14faf8215ffc715$var$hooks  } = (0, $99138c4371ee1491$export$2e2bcd8739ae039);
const { defaultErrorMessages: $b14faf8215ffc715$var$defaultErrorMessages  } = $b14faf8215ffc715$var$hooks;
const $b14faf8215ffc715$export$cbb653210e90d2a9 = (auth)=>{
    const [errorMessages, setErrorMessages] = (0, $i684g$react.useState)($b14faf8215ffc715$var$defaultErrorMessages);
    const { data: data , error: error  } = (0, $84a1308d155a914a$export$caa1c15223f8c264)({
        category: "error-code",
        subCategory: "mmh"
    }, auth);
    (0, $i684g$react.useEffect)(()=>{
        if (data?.mmh) {
            const fromErr = data?.mmh.reduce((acc, obj)=>{
                acc[obj.code] = obj.value;
                return acc;
            }, {});
            const mergedErrors = {
                ...$b14faf8215ffc715$var$defaultErrorMessages,
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


var $1be2d82668ff6467$exports = {};

$parcel$export($1be2d82668ff6467$exports, "useFeatureToggle", function () { return $1be2d82668ff6467$export$15a3adca94dec8dc; });


const $1be2d82668ff6467$export$15a3adca94dec8dc = (path)=>{
    const [toggle, setToggle] = (0, $i684g$react.useState)((0, $4ed1c8ae8173298c$export$8f4de18e72a21ac0)(path));
    (0, $i684g$react.useEffect)(()=>{
        const subscription = (0, $4ed1c8ae8173298c$export$c7de631ed348a50).subscribe(()=>{
            setToggle((0, $4ed1c8ae8173298c$export$8f4de18e72a21ac0)(path));
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, [
        path
    ]);
    return toggle;
};


$parcel$exportWildcard($3e992cfbf7a8a728$exports, $acd2d3fb03fcdf14$exports);
$parcel$exportWildcard($3e992cfbf7a8a728$exports, $51552beaa5d26bca$exports);
$parcel$exportWildcard($3e992cfbf7a8a728$exports, $4e8909cc648bafd1$exports);
$parcel$exportWildcard($3e992cfbf7a8a728$exports, $b14faf8215ffc715$exports);
$parcel$exportWildcard($3e992cfbf7a8a728$exports, $1be2d82668ff6467$exports);



var $6e36880b690f20d7$exports = {};
var $916f8d12cf0a4a60$exports = {};
var $1d42ed6d73f0771e$exports = {};

$parcel$export($1d42ed6d73f0771e$exports, "BooleanContext", function () { return $1d42ed6d73f0771e$export$b379541fcb8ba4dc; });
$parcel$export($1d42ed6d73f0771e$exports, "BooleanContextProvider", function () { return $1d42ed6d73f0771e$export$515106df47ff5e43; });


const $1d42ed6d73f0771e$export$b379541fcb8ba4dc = /*#__PURE__*/ (0, $i684g$react.createContext)({
    booleans: {},
    setBooleans: ()=>{}
});
const $1d42ed6d73f0771e$export$515106df47ff5e43 = ({ children: children , initialValue: initialValue = {}  })=>{
    const [booleans, setBooleansState] = (0, $i684g$react.useState)(initialValue);
    const setBooleans = (0, $i684g$react.useCallback)((newBooleans)=>setBooleansState((current)=>({
                ...current,
                ...newBooleans
            })), [
        setBooleansState
    ]);
    const value = (0, $i684g$react.useMemo)(()=>({
            booleans: booleans,
            setBooleans: setBooleans
        }), [
        booleans,
        setBooleans
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($1d42ed6d73f0771e$export$b379541fcb8ba4dc.Provider, {
        value: value,
        children: children
    });
};


$parcel$exportWildcard($916f8d12cf0a4a60$exports, $1d42ed6d73f0771e$exports);


$parcel$exportWildcard($6e36880b690f20d7$exports, $916f8d12cf0a4a60$exports);


var $ba3b58505e93ee14$exports = {};
var $b8e52145916624cb$exports = {};
var $3058c3202bbcec0b$exports = {};

$parcel$export($3058c3202bbcec0b$exports, "AccordionItem", function () { return $3058c3202bbcec0b$export$d99097c13d4dac9f; });
$parcel$export($3058c3202bbcec0b$exports, "Accordion", function () { return $3058c3202bbcec0b$export$a766cd26d0d69044; });





var $2c0f4283876f600a$exports = {};

$parcel$export($2c0f4283876f600a$exports, "widthOverrides", function () { return $0dbe8b95c9171c6a$export$2e2bcd8739ae039; });
var $d87b40b2cf165392$exports = {};

$parcel$export($d87b40b2cf165392$exports, "isUnderAge", function () { return $d87b40b2cf165392$export$fdda6b0e6ad825d; });

var $fce92c1c258a10af$exports = {};
var $91989fb0a0d86f92$exports = {};

$parcel$export($91989fb0a0d86f92$exports, "parseDate", function () { return $91989fb0a0d86f92$export$6b862160d295c8e; });
$parcel$export($91989fb0a0d86f92$exports, "formatDate", function () { return $91989fb0a0d86f92$export$3ae94a2503e890a1; });
$parcel$export($91989fb0a0d86f92$exports, "formatTime", function () { return $91989fb0a0d86f92$export$3203edd9e5edd663; });
$parcel$export($91989fb0a0d86f92$exports, "isFutureDate", function () { return $91989fb0a0d86f92$export$3c3ec13c4ecfb550; });
$parcel$export($91989fb0a0d86f92$exports, "stringToDate", function () { return $91989fb0a0d86f92$export$8cca4e1da6b1437; });
$parcel$export($91989fb0a0d86f92$exports, "dateToString", function () { return $91989fb0a0d86f92$export$60dfd74aa96791bd; });

const $91989fb0a0d86f92$var$voidDate = new Date("1900-01-01T00:00:00");
function $91989fb0a0d86f92$export$6b862160d295c8e(date) {
    if (!date) return null;
    const parsedDate = (0, $i684g$datefns.parseISO)(date);
    return !(0, $i684g$datefns.isSameDay)(parsedDate, $91989fb0a0d86f92$var$voidDate) && (0, $i684g$datefns.isValid)(parsedDate) ? parsedDate : null;
}
const $91989fb0a0d86f92$export$3ae94a2503e890a1 = (date)=>{
    const parsedDate = $91989fb0a0d86f92$export$6b862160d295c8e(date);
    if (!parsedDate) return "";
    return (0, $i684g$datefns.format)(parsedDate, "dd/MM/yyyy");
};
const $91989fb0a0d86f92$export$3203edd9e5edd663 = (date)=>{
    const parsedDate = $91989fb0a0d86f92$export$6b862160d295c8e(date);
    if (!parsedDate) return "";
    return (0, $i684g$datefns.format)(parsedDate, "HH:mm:ss");
};
const $91989fb0a0d86f92$export$3c3ec13c4ecfb550 = (date)=>{
    const parsedDate = $91989fb0a0d86f92$export$6b862160d295c8e(date);
    if (!parsedDate) return true;
    return (0, $i684g$datefns.isFuture)(parsedDate);
};
const $91989fb0a0d86f92$export$8cca4e1da6b1437 = (dateStr, formatStr)=>{
    return (0, $i684g$datefns.parse)(dateStr, formatStr, $91989fb0a0d86f92$var$voidDate);
};
const $91989fb0a0d86f92$export$60dfd74aa96791bd = (date, formatStr)=>{
    return (0, $i684g$datefns.format)(date, formatStr);
};


$parcel$exportWildcard($fce92c1c258a10af$exports, $91989fb0a0d86f92$exports);


const $d87b40b2cf165392$export$fdda6b0e6ad825d = (dob, age)=>{
    const isValidDate = (0, $91989fb0a0d86f92$export$6b862160d295c8e)(dob);
    if (!isValidDate) return true;
    const ageInYears = (0, $i684g$datefns.differenceInYears)(new Date(), isValidDate);
    return ageInYears < age;
};


var $2513a6ebe66af095$exports = {};

$parcel$export($2513a6ebe66af095$exports, "removeWhitespace", function () { return $2513a6ebe66af095$export$2903f02042bf33f2; });
$parcel$export($2513a6ebe66af095$exports, "removeWhitespaceAndCapitalise", function () { return $2513a6ebe66af095$export$fc81ed7d6171f33d; });
$parcel$export($2513a6ebe66af095$exports, "pluralize", function () { return $2513a6ebe66af095$export$cefb40c9962541b5; });
const $2513a6ebe66af095$export$2903f02042bf33f2 = (value)=>{
    if (value === null || value === undefined) return null;
    return value.replace(/\s/g, "");
};
const $2513a6ebe66af095$export$fc81ed7d6171f33d = (value)=>{
    if (value === null || value === undefined) return null;
    return $2513a6ebe66af095$export$2903f02042bf33f2(value.toUpperCase());
};
const $2513a6ebe66af095$export$cefb40c9962541b5 = (word, value)=>`${word}${Math.abs(value) !== 1 ? "s" : ""}`;



var $0dbe8b95c9171c6a$export$2e2bcd8739ae039 = (width)=>{
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


var $b41450aeda5a6863$exports = {};
var $91705f1fedfa9a84$exports = {};

$parcel$export($91705f1fedfa9a84$exports, "entityDiff", function () { return $91705f1fedfa9a84$export$19bfa4207d4c5713; });

const $91705f1fedfa9a84$export$19bfa4207d4c5713 = (lhs, rhs)=>{
    const deepDiff = (0, $i684g$deepdiff.diff)(lhs, rhs) || [];
    return deepDiff.reduce((acc, change)=>{
        const [path] = change.path;
        acc[path] = rhs[path] || null;
        return acc;
    }, {});
};


$parcel$exportWildcard($b41450aeda5a6863$exports, $91705f1fedfa9a84$exports);


$parcel$exportWildcard($2c0f4283876f600a$exports, $d87b40b2cf165392$exports);
$parcel$exportWildcard($2c0f4283876f600a$exports, $2513a6ebe66af095$exports);
$parcel$exportWildcard($2c0f4283876f600a$exports, $fce92c1c258a10af$exports);
$parcel$exportWildcard($2c0f4283876f600a$exports, $b41450aeda5a6863$exports);


var $57b31647f201adaa$exports = {};
var $3dc96cd2fd1a59d9$exports = {};

$parcel$export($3dc96cd2fd1a59d9$exports, "Heading", function () { return $3dc96cd2fd1a59d9$export$a8a3e93435678ff9; });




const $3dc96cd2fd1a59d9$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Heading({ as: HeadingComp , variant: variant = "h1" , className: className , ...props }, ref) {
    const Comp = HeadingComp || variant;
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(Comp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))(`lbh-heading-${variant}`, className),
        ...props
    });
});


$parcel$exportWildcard($57b31647f201adaa$exports, $3dc96cd2fd1a59d9$exports);



const $3058c3202bbcec0b$export$d99097c13d4dac9f = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function AccordionItem({ as: AccordionItemComp = "div" , children: children , className: className , id: id , title: title  }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)(AccordionItemComp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-accordion__section", className),
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                className: "govuk-accordion__section-header",
                children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3dc96cd2fd1a59d9$export$a8a3e93435678ff9), {
                    as: "h3",
                    variant: "h5",
                    className: "govuk-accordion__section-heading",
                    children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                        className: "govuk-accordion__section-button",
                        id: `accordion-heading-${id}`,
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                id: `accordion-content-${id}`,
                className: "govuk-accordion__section-content",
                "aria-labelledby": `accordion-heading-${id}`,
                children: children
            })
        ]
    });
});
const $3058c3202bbcec0b$export$a766cd26d0d69044 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Accordion({ as: AccordionComp = "div" , className: className , defaultIndex: defaultIndex , override: override , visuallyHideControls: visuallyHideControls = false , ...props }, ref) {
    const localRef = (0, $i684g$react.useRef)(null);
    const defaultIndexRef = (0, $i684g$react.useRef)(defaultIndex);
    (0, $i684g$react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) {
            const acc = new (0, $i684g$lbhfrontend.Accordion)(localRef.current);
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
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(AccordionComp, {
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-accordion", "lbh-accordion", {
            "lbh-accordion--hide-controls": visuallyHideControls
        }, (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className),
        "data-attribute": "value",
        ref: (0, ($parcel$interopDefault($i684g$reactmergerefs)))([
            localRef,
            ref
        ]),
        ...props
    });
});


$parcel$exportWildcard($b8e52145916624cb$exports, $3058c3202bbcec0b$exports);


var $6e439be24c76daaa$exports = {};
var $fb86b2c76d6dd5be$exports = {};

$parcel$export($fb86b2c76d6dd5be$exports, "Alert", function () { return $fb86b2c76d6dd5be$export$caec2af78bcc877f; });


var $5d49091b4fbff3c5$exports = {};
var $5163f4162816ba31$exports = {};

$parcel$export($5163f4162816ba31$exports, "Icon", function () { return $5163f4162816ba31$export$f04a61298a47a40f; });




const $5163f4162816ba31$export$f04a61298a47a40f = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Icon({ width: width , height: height , color: color , className: className , size: size = "1em" , focusable: focusable = false , ...props }, ref) {
    const iconClasses = (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-icon", className);
    const style = {};
    if (color && color !== "currentColor") style.color = color;
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("svg", {
        ref: ref,
        className: iconClasses,
        width: width || size,
        height: height || size,
        focusable: focusable,
        style: style,
        ...props
    });
});


$parcel$exportWildcard($5d49091b4fbff3c5$exports, $5163f4162816ba31$exports);


const $fb86b2c76d6dd5be$export$caec2af78bcc877f = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Spinner({ size: size = "24" , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $5163f4162816ba31$export$f04a61298a47a40f), {
        ref: ref,
        size: size,
        ...props,
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                d: "M16.5 42.6212C18.7688 42.6212 20.625 40.7605 20.625 38.4863H12.375C12.375 40.7605 14.2312 42.6212 16.5 42.6212Z",
                fill: "#BE3A34"
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                d: "M28.875 30.2225V19.8849C28.875 13.5376 25.5131 8.22412 19.5938 6.81821V5.4123C19.5938 3.69627 18.2119 2.31104 16.5 2.31104C14.7881 2.31104 13.4062 3.69627 13.4062 5.4123V6.81821C7.5075 8.22412 4.125 13.517 4.125 19.8849V30.2225L0 34.3575V36.425H33V34.3575L31.1268 32.4797L28.875 30.2225Z",
                fill: "#BE3A34"
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                d: "M17.5808 25.7373H15.4363L14.988 17.1504H18.0291L17.5808 25.7373ZM14.9529 28.7432C14.9529 28.1924 15.1023 27.8057 15.4011 27.583C15.7058 27.3604 16.072 27.249 16.4998 27.249C16.9158 27.249 17.2732 27.3604 17.572 27.583C17.8767 27.8057 18.0291 28.1924 18.0291 28.7432C18.0291 29.2705 17.8767 29.6514 17.572 29.8857C17.2732 30.1201 16.9158 30.2373 16.4998 30.2373C16.072 30.2373 15.7058 30.1201 15.4011 29.8857C15.1023 29.6514 14.9529 29.2705 14.9529 28.7432Z",
                fill: "white"
            })
        ]
    });
});


$parcel$exportWildcard($6e439be24c76daaa$exports, $fb86b2c76d6dd5be$exports);


var $51daab27a361364a$exports = {};
var $c76f7478b8884a6c$exports = {};

$parcel$export($c76f7478b8884a6c$exports, "Button", function () { return $c76f7478b8884a6c$export$353f5b6fc5456de1; });





const $c76f7478b8884a6c$var$AddIcon = ()=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                d: "M6.94 0L5 0V12H6.94V0Z"
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                d: "M12 5H0V7H12V5Z"
            })
        ]
    });
};
const $c76f7478b8884a6c$var$ChevronIcon = ()=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("svg", {
        width: "20",
        height: "22",
        viewBox: "0 0 20 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 0H8.54573L20 10H11.4543L0 0Z",
                fill: "white"
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 22L8.54573 22L20 10H11.4543L0 22Z",
                fill: "#96CCAE"
            })
        ]
    });
};
const $c76f7478b8884a6c$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Button({ as: ButtonComp = "button" , variant: variant = "primary" , isLoading: isLoading = false , loadingText: loadingText , isDisabled: isDisabled , children: children , className: className , override: override , ...props }, ref) {
    const buttonClasses = (0, ($parcel$interopDefault($i684g$classnames)))("govuk-button", "lbh-button", {
        "govuk-button--primary lbh-button--add": variant === "add",
        "lbh-button--chevron": variant === "chevron",
        "govuk-button--secondary lbh-button--secondary": variant === "secondary",
        "lbh-button--disabled govuk-button--disabled": isDisabled
    }, (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className);
    const disabled = isDisabled || isLoading || undefined;
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)(ButtonComp, {
        ref: ref,
        className: buttonClasses,
        type: ButtonComp === "button" ? "button" : undefined,
        disabled: ButtonComp === "button" ? disabled : undefined,
        "aria-disabled": disabled,
        ...props,
        children: [
            variant === "add" && !isLoading && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($c76f7478b8884a6c$var$AddIcon, {}),
            isLoading && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                className: "button-loading-indicator",
                children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                    children: "Loading..."
                })
            }),
            isLoading && loadingText ? loadingText : children,
            variant === "chevron" && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($c76f7478b8884a6c$var$ChevronIcon, {})
        ]
    });
});


$parcel$exportWildcard($51daab27a361364a$exports, $c76f7478b8884a6c$exports);


var $0a5014c170d753c4$exports = {};
var $41cf19104d9704c5$exports = {};

$parcel$export($41cf19104d9704c5$exports, "Box", function () { return $41cf19104d9704c5$export$e71c4d32a2263218; });




const $41cf19104d9704c5$export$e71c4d32a2263218 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Box({ as: BoxComponent = "div" , variant: variant = "default" , children: children  }, ref) {
    const classes = {
        "mtfh-box": true,
        "mtfh-box--success": variant === "success",
        "mtfh-box--warning": variant === "warning"
    };
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(BoxComponent, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))(classes),
        children: children
    });
});


$parcel$exportWildcard($0a5014c170d753c4$exports, $41cf19104d9704c5$exports);


var $1ad562248bbc59b7$exports = {};
var $9de03c3a1a10d852$exports = {};

$parcel$export($9de03c3a1a10d852$exports, "CardList", function () { return $9de03c3a1a10d852$export$bb29c16f5612603e; });



const $9de03c3a1a10d852$export$bb29c16f5612603e = ({ children: children  })=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        className: "mtfh-card-list",
        children: children
    });
};


$parcel$exportWildcard($1ad562248bbc59b7$exports, $9de03c3a1a10d852$exports);


var $0cd95a48d1dcaa91$exports = {};
var $72f26d7d8c275005$exports = {};

$parcel$export($72f26d7d8c275005$exports, "Center", function () { return $72f26d7d8c275005$export$1f54913ccc4368b1; });





const $72f26d7d8c275005$export$1f54913ccc4368b1 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Center({ as: CenterComp = "div" , horizontally: horizontally = true , vertically: vertically = true , className: className , override: override , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(CenterComp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-center", {
            "mtfh-center--horizontal": horizontally,
            "mtfh-center--vertical": vertically
        }, (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className),
        ...props
    });
});


$parcel$exportWildcard($0cd95a48d1dcaa91$exports, $72f26d7d8c275005$exports);


var $4c8519a2f6e45481$exports = {};
var $3033f0a79c2d3df0$exports = {};

$parcel$export($3033f0a79c2d3df0$exports, "Checkbox", function () { return $3033f0a79c2d3df0$export$48513f6b9f8ce62d; });
$parcel$export($3033f0a79c2d3df0$exports, "CheckboxConditional", function () { return $3033f0a79c2d3df0$export$e94eb22bc40d1a06; });
$parcel$export($3033f0a79c2d3df0$exports, "CheckboxGroup", function () { return $3033f0a79c2d3df0$export$4aa08d5625cb8ead; });






const $3033f0a79c2d3df0$export$48513f6b9f8ce62d = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Checkbox({ id: id , className: className , type: type = "checkbox" , hint: hint , children: children , conditionalId: conditionalId , error: error , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-checkboxes__item", className),
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("input", {
                ref: ref,
                id: id,
                className: "govuk-checkboxes__input",
                type: type,
                "aria-describedby": hint ? `${id}-hint` : undefined,
                "data-aria-controls": conditionalId,
                ...props
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("label", {
                className: "govuk-label govuk-checkboxes__label",
                htmlFor: id,
                children: children
            }),
            hint ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                id: `${id}-hint`,
                className: "govuk-hint govuk-checkboxes__hint lbh-hint",
                children: hint
            }) : null
        ]
    });
});
const $3033f0a79c2d3df0$export$e94eb22bc40d1a06 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function CheckboxConditional(props, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        ref: ref,
        className: "govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden",
        ...props
    });
});
const $3033f0a79c2d3df0$export$4aa08d5625cb8ead = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function CheckboxGroup({ variant: variant = "base" , children: children , error: error , ...props }, ref) {
    const localRef = (0, $i684g$react.useRef)();
    (0, $i684g$react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) new (0, $i684g$lbhfrontend.Checkboxes)(localRef.current).init();
    }, []);
    const hasConditionals = (0, $i684g$react.useMemo)(()=>(0, $i684g$react.Children).toArray(children).some((child)=>/*#__PURE__*/ (0, $i684g$react.isValidElement)(child) && child.type === $3033f0a79c2d3df0$export$e94eb22bc40d1a06), [
        children
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        ref: (0, ($parcel$interopDefault($i684g$reactmergerefs)))([
            localRef,
            ref
        ]),
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-checkboxes", {
            "govuk-checkboxes--small": variant === "small",
            "govuk-checkboxes--conditionals": hasConditionals
        }, "lbh-checkboxes"),
        ...props,
        children: children
    });
});


$parcel$exportWildcard($4c8519a2f6e45481$exports, $3033f0a79c2d3df0$exports);


var $dccb41a13ecc3fbf$exports = {};
var $3d61aa79924b8d53$exports = {};

$parcel$export($3d61aa79924b8d53$exports, "Checklist", function () { return $3d61aa79924b8d53$export$d347637cd596c7c2; });



const $3d61aa79924b8d53$var$CrossIcon = ()=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
            d: "M5 5L23 23M23 5L5 23",
            stroke: "inherit",
            strokeWidth: "6",
            strokeLinecap: "square"
        })
    });
};
const $3d61aa79924b8d53$var$TickIcon = ()=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("svg", {
        width: "31",
        height: "24",
        viewBox: "0 0 31 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
            d: "M26 5L12 19L5 12",
            stroke: "inherit",
            strokeWidth: "6",
            strokeLinecap: "square"
        })
    });
};
const $3d61aa79924b8d53$export$d347637cd596c7c2 = ({ items: items  })=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("ul", {
        className: "mtfh-checklist",
        children: items.map((item, index)=>/*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                        className: `mtfh-checklist__${item.success ? "tick" : "cross"}-icon`,
                        children: item.success ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($3d61aa79924b8d53$var$TickIcon, {}) : /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($3d61aa79924b8d53$var$CrossIcon, {})
                    }),
                    item.label
                ]
            }, index))
    });
};


$parcel$exportWildcard($dccb41a13ecc3fbf$exports, $3d61aa79924b8d53$exports);


var $81715dd964e83575$exports = {};
var $0749ea49dee81dcd$exports = {};

$parcel$export($0749ea49dee81dcd$exports, "CommentList", function () { return $0749ea49dee81dcd$export$c77c63b4dd2cbdbc; });





const $abc8a1166444b126$export$80ad823ea511ef0f = (id, auth, { pageSize: pageSize = 5 , ...options } = {})=>{
    return (0, $08fd481a73641560$export$18b3a6cf21214f90)((page, previous)=>{
        if (!id || previous && !previous?.paginationDetails?.nextToken) return null;
        const params = {
            targetId: id,
            pageSize: pageSize
        };
        if (page !== 0 && previous?.paginationDetails.nextToken) params.paginationToken = previous.paginationDetails.nextToken;
        return `${(0, $c76f4f81e9b49394$export$2e2bcd8739ae039).notesApiUrlV2}/notes?${(0, $i684g$querystring.stringify)(params)}`;
    }, auth, options);
};
const $abc8a1166444b126$export$1cab2cf04e810197 = async (data, auth)=>{
    const { sub: id , email: email , name: fullName  } = auth.user;
    const axiosInstance = (0, $681e52e5f1c343a3$export$b54474b5f400d58a)(auth);
    const { data: comment  } = await axiosInstance.post(`${(0, $c76f4f81e9b49394$export$2e2bcd8739ae039).notesApiUrlV2}/notes`, {
        ...data,
        createdAt: new Date().toISOString(),
        author: {
            id: id,
            email: email,
            fullName: fullName
        }
    });
    return comment;
};









var $570eaa952d8e00b9$exports = {};
var $c409b756a3ce249f$exports = {};

$parcel$export($c409b756a3ce249f$exports, "ErrorSummary", function () { return $c409b756a3ce249f$export$d0acb541148b73bf; });







const $c409b756a3ce249f$export$d0acb541148b73bf = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function ErrorSummary({ as: ErrorSummaryComp = "div" , id: id , title: title , description: description , className: className , children: children , reFocus: reFocus , override: override , ...props }, ref) {
    const localRef = (0, $i684g$react.useRef)(null);
    (0, $i684g$react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) {
            // eslint-disable-next-line no-new
            new (0, $i684g$lbhfrontend.ErrorSummary)(localRef.current);
            localRef.current.scrollIntoView(true);
        }
    }, []);
    (0, $i684g$react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) localRef.current.scrollIntoView(true);
    }, [
        reFocus
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)(ErrorSummaryComp, {
        ref: (0, ($parcel$interopDefault($i684g$reactmergerefs)))([
            localRef,
            ref
        ]),
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-error-summary", "lbh-error-summary", (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className),
        "aria-labelledby": id,
        role: "alert",
        ...props,
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("h2", {
                className: "govuk-error-summary__title",
                id: id,
                children: title
            }),
            description || children ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "govuk-error-summary__body",
                children: [
                    description ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("p", {
                        children: description
                    }) : null,
                    children
                ]
            }) : null
        ]
    });
});


var $07e7c452d24206cf$exports = {};

$parcel$export($07e7c452d24206cf$exports, "ConflictErrorSummary", function () { return $07e7c452d24206cf$export$93a351e205137f1b; });



var $a0d1efbed41b76e7$exports = {};
var $93b37cb8d58eee2c$exports = {};

$parcel$export($93b37cb8d58eee2c$exports, "SummaryListItem", function () { return $93b37cb8d58eee2c$export$2b379a888faa093d; });
$parcel$export($93b37cb8d58eee2c$exports, "SummaryList", function () { return $93b37cb8d58eee2c$export$2b959bb44e385245; });





const $93b37cb8d58eee2c$export$2b379a888faa093d = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function SummaryListItem({ title: title , actions: actions , children: children , className: className , fallback: fallback , overrides: overrides = [] , ...props }, ref) {
    const value = (0, $i684g$react.useMemo)(()=>typeof children === "string" ? children.trim() : children, [
        children
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-summary-list__row", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("dt", {
                className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-summary-list__key", (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(overrides[0])),
                children: title
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("dd", {
                className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-summary-list__value", (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(overrides[1])),
                children: value || fallback || "N/A"
            }),
            actions && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("dd", {
                className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-summary-list__actions", (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(overrides[2])),
                children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("ul", {
                    className: "govuk-summary-list__actions-list",
                    children: (0, $i684g$react.Children).map(actions, (action)=>/*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("li", {
                            className: "govuk-summary-list__actions-list-item",
                            children: action
                        }, action.key))
                })
            })
        ]
    });
});
const $93b37cb8d58eee2c$export$2b959bb44e385245 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function SummaryList({ variant: variant = "base" , className: className , overrides: overrides , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("dl", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-summary-list", {
            "govuk-summary-list--no-border": variant !== "border"
        }, {
            "mtfh-summary-list--inline": variant === "inline"
        }, "lbh-summary-list", className),
        ...props,
        children: (0, $i684g$react.Children).map(children, (child, index)=>child && /*#__PURE__*/ (0, $i684g$react.isValidElement)(child) && /*#__PURE__*/ (0, $i684g$react.cloneElement)(child, {
                overrides: !child.props.overrides && index === 0 ? overrides : child.props.overrides
            }))
    });
});


$parcel$exportWildcard($a0d1efbed41b76e7$exports, $93b37cb8d58eee2c$exports);



const { changesNotSaved: $07e7c452d24206cf$var$changesNotSaved , anotherUserMadeEdit: $07e7c452d24206cf$var$anotherUserMadeEdit , youEntered: $07e7c452d24206cf$var$youEntered , toSaveMakeEdit: $07e7c452d24206cf$var$toSaveMakeEdit  } = (0, $99138c4371ee1491$export$2e2bcd8739ae039).components.conflictErrorSummary;
const $07e7c452d24206cf$export$93a351e205137f1b = ({ updatedFields: updatedFields , fieldLocale: fieldLocale , fieldTransforms: fieldTransforms , title: title = $07e7c452d24206cf$var$changesNotSaved , description: description = $07e7c452d24206cf$var$anotherUserMadeEdit , footNote: footNote = $07e7c452d24206cf$var$toSaveMakeEdit , ...props })=>{
    const keys = Object.keys(updatedFields || {});
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $c409b756a3ce249f$export$d0acb541148b73bf), {
        className: "mtfh-change-conflict",
        title: title,
        description: description,
        ...props,
        children: keys.length > 0 && updatedFields && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $i684g$reactjsxruntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("p", {
                    children: $07e7c452d24206cf$var$youEntered
                }),
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $93b37cb8d58eee2c$export$2b959bb44e385245), {
                    variant: "inline",
                    children: Object.keys(updatedFields).map((key)=>/*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $93b37cb8d58eee2c$export$2b379a888faa093d), {
                            title: `${fieldLocale[key] || key}:`,
                            children: fieldTransforms && fieldTransforms[key] ? fieldTransforms[key](updatedFields[key]) : `${updatedFields[key]}`
                        }, key))
                }),
                footNote && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("p", {
                    children: footNote
                })
            ]
        })
    });
};


var $de02523b6015c6d4$exports = {};

$parcel$export($de02523b6015c6d4$exports, "FormErrorSummary", function () { return $de02523b6015c6d4$export$a44acad2429d499; });




const { error: $de02523b6015c6d4$var$error  } = (0, $99138c4371ee1491$export$2e2bcd8739ae039).components.formErrorSummary;
const $de02523b6015c6d4$export$a44acad2429d499 = ({ id: id , prefix: prefix , errors: errors , title: title = $de02523b6015c6d4$var$error , ...props })=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $c409b756a3ce249f$export$d0acb541148b73bf), {
        id: id,
        title: title,
        ...props,
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("ul", {
            className: "govuk-list govuk-error-summary__list",
            children: Object.keys(errors).filter((key)=>errors[key]).map((key)=>{
                return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("li", {
                    children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("a", {
                        href: `#${prefix}-${key}`,
                        children: errors[key]
                    })
                }, key);
            })
        })
    });
};


var $838d65fc8518eeb8$exports = {};

$parcel$export($838d65fc8518eeb8$exports, "StatusErrorSummary", function () { return $838d65fc8518eeb8$export$1721328aaf9ab457; });




const { statusTitle: $838d65fc8518eeb8$var$statusTitle , statusDescription: $838d65fc8518eeb8$var$statusDescription  } = (0, $99138c4371ee1491$export$2e2bcd8739ae039).components.statusErrorSummary;
const $838d65fc8518eeb8$export$1721328aaf9ab457 = ({ id: id , code: code , title: title = $838d65fc8518eeb8$var$statusTitle(code) , description: description = $838d65fc8518eeb8$var$statusDescription(code) , ...props })=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $c409b756a3ce249f$export$d0acb541148b73bf), {
        id: id,
        title: title,
        description: description,
        ...props
    });
};


$parcel$exportWildcard($570eaa952d8e00b9$exports, $c409b756a3ce249f$exports);
$parcel$exportWildcard($570eaa952d8e00b9$exports, $07e7c452d24206cf$exports);
$parcel$exportWildcard($570eaa952d8e00b9$exports, $de02523b6015c6d4$exports);
$parcel$exportWildcard($570eaa952d8e00b9$exports, $838d65fc8518eeb8$exports);


var $0eee8031dfefd309$exports = {};
var $83bb233762e4ca5c$exports = {};

$parcel$export($83bb233762e4ca5c$exports, "SimplePagination", function () { return $83bb233762e4ca5c$export$ffae15b9f9d82913; });
$parcel$export($83bb233762e4ca5c$exports, "SimplePaginationButton", function () { return $83bb233762e4ca5c$export$e95940c44c6c4ae6; });




const $83bb233762e4ca5c$export$ffae15b9f9d82913 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function SimplePagination({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("nav", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-simple-pagination", className),
        ...props
    });
});
const $83bb233762e4ca5c$export$e95940c44c6c4ae6 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function SimplePaginationButton({ as: SimplePaginationComp = "a" , variant: variant , className: className , title: title , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)(SimplePaginationComp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-simple-pagination__link", {
            "lbh-simple-pagination__link--next": variant === "next"
        }, className),
        rel: variant,
        ...props,
        children: [
            variant === "previous" ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("svg", {
                width: "11",
                height: "19",
                viewBox: "0 0 11 19",
                fill: "none",
                children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                    d: "M10 1L2 9.5L10 18",
                    strokeWidth: "2"
                })
            }) : null,
            children,
            title ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                className: "lbh-simple-pagination__title",
                children: title
            }) : null,
            variant === "next" ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("svg", {
                width: "11",
                height: "19",
                viewBox: "0 0 11 19",
                fill: "none",
                children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                    d: "M1 18L9 9.5L1 1",
                    strokeWidth: "2"
                })
            }) : null
        ]
    });
});


$parcel$exportWildcard($0eee8031dfefd309$exports, $83bb233762e4ca5c$exports);


var $e38ba771f6f65b62$exports = {};
var $9932e6f0a7a23a65$exports = {};

$parcel$export($9932e6f0a7a23a65$exports, "Spinner", function () { return $9932e6f0a7a23a65$export$7f7cbe89f1eacd2; });



const $9932e6f0a7a23a65$export$7f7cbe89f1eacd2 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Spinner({ size: size = "50" , label: label = "Loading..." , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $5163f4162816ba31$export$f04a61298a47a40f), {
        ref: ref,
        viewBox: "0 0 42 42",
        stroke: "#00703c",
        size: size,
        ...props,
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("title", {
                children: label
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("g", {
                    transform: "translate(3 3)",
                    strokeWidth: "5",
                    children: [
                        /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("circle", {
                            strokeOpacity: ".5",
                            cx: "18",
                            cy: "18",
                            r: "18"
                        }),
                        /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                            d: "M36 18c0-9.94-8.06-18-18-18",
                            transform: "rotate(112.708 18 18)",
                            children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("animateTransform", {
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


$parcel$exportWildcard($e38ba771f6f65b62$exports, $9932e6f0a7a23a65$exports);


var $b8c89689d2113c90$exports = {};
var $79b622806976a0c8$exports = {};

$parcel$export($79b622806976a0c8$exports, "Text", function () { return $79b622806976a0c8$export$5f1af8db9871e1d6; });




const $79b622806976a0c8$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Text({ as: TextComp = "p" , variant: variant = "base" , size: size = "md" , className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(TextComp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))({
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


$parcel$exportWildcard($b8c89689d2113c90$exports, $79b622806976a0c8$exports);







const $1bf1b14b45737b3d$var$getCategoryLabel = (categoryCode, categories)=>{
    const category = categories.find((cat)=>cat.code === categoryCode);
    return category?.value;
};
const $1bf1b14b45737b3d$export$854bb7e533a6d075 = ({ comment: { categorisation: categorisation , createdAt: createdAt , title: title , description: description , author: author , highlight: highlight  } , categories: categories  })=>{
    const createdAtDate = (0, $i684g$react.useMemo)(()=>(0, $91989fb0a0d86f92$export$3ae94a2503e890a1)(createdAt), [
        createdAt
    ]);
    const createdAtTime = (0, $i684g$react.useMemo)(()=>(0, $91989fb0a0d86f92$export$3203edd9e5edd663)(createdAt), [
        createdAt
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        className: "comment",
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "comment__item",
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                        className: "comment__date-time",
                        children: createdAtDate
                    }),
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                        className: "comment__date-time",
                        children: createdAtTime
                    })
                ]
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "comment__item --center",
                children: [
                    title && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($i684g$classnames)))("comment__title", {
                            "--highlight": highlight
                        }),
                        children: title
                    }),
                    categorisation?.category && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                        className: "comment__category",
                        children: $1bf1b14b45737b3d$var$getCategoryLabel(categorisation.category, categories)
                    }),
                    description
                ]
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                className: "comment__item",
                children: author.fullName
            })
        ]
    });
};


const $0749ea49dee81dcd$var$NoComments = ()=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $79b622806976a0c8$export$5f1af8db9871e1d6), {
        size: "sm",
        children: (0, $99138c4371ee1491$export$2e2bcd8739ae039).components.commentList.noCommentsAdded
    });
};
const $0749ea49dee81dcd$export$c77c63b4dd2cbdbc = ({ targetId: targetId  }, auth)=>{
    const { data: data , size: size , setSize: setSize , error: error  } = (0, $abc8a1166444b126$export$80ad823ea511ef0f)(targetId, auth);
    const { components: components  } = (0, $99138c4371ee1491$export$2e2bcd8739ae039);
    const { data: referenceData , error: referenceError  } = (0, $84a1308d155a914a$export$caa1c15223f8c264)({
        category: "comment",
        subCategory: "category"
    }, auth);
    const response = (0, $i684g$react.useMemo)(()=>{
        if (!data) return null;
        return data[size - 1];
    }, [
        data,
        size
    ]);
    if (error?.response?.status === 404) return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($0749ea49dee81dcd$var$NoComments, {});
    if (referenceError) return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $c409b756a3ce249f$export$d0acb541148b73bf), {
        id: "comment-list-error",
        title: components.commentList.errors.unableToFetchReferenceData,
        description: components.commentList.errors.unableToFetchReferenceDataDescription
    });
    if (!response || !referenceData) return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $72f26d7d8c275005$export$1f54913ccc4368b1), {
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $9932e6f0a7a23a65$export$7f7cbe89f1eacd2), {})
    });
    const { results: comments , paginationDetails: { nextToken: nextToken  }  } = response;
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        children: [
            comments.map((comment)=>/*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $1bf1b14b45737b3d$export$854bb7e533a6d075), {
                    categories: referenceData.category,
                    comment: comment
                }, comment.id)),
            (size > 1 || nextToken) && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $83bb233762e4ca5c$export$ffae15b9f9d82913), {
                children: [
                    size !== 1 && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $83bb233762e4ca5c$export$e95940c44c6c4ae6), {
                        variant: "previous",
                        onClick: ()=>setSize(size - 1),
                        children: "Previous"
                    }),
                    nextToken && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $83bb233762e4ca5c$export$e95940c44c6c4ae6), {
                        variant: "next",
                        onClick: ()=>setSize(size + 1),
                        children: "Next"
                    })
                ]
            })
        ]
    });
};


$parcel$exportWildcard($81715dd964e83575$exports, $0749ea49dee81dcd$exports);


var $3cb78742846f278e$exports = {};
var $89401ee2a53a5d08$exports = {};

$parcel$export($89401ee2a53a5d08$exports, "ConfirmationRouter", function () { return $89401ee2a53a5d08$export$a6c9ba3e1190d848; });




var $1cb230a5acd30dbe$exports = {};
var $ab12b53074fbb201$exports = {};

$parcel$export($ab12b53074fbb201$exports, "Dialog", function () { return $ab12b53074fbb201$export$3ddf2d174ce01153; });
$parcel$export($ab12b53074fbb201$exports, "DialogActions", function () { return $ab12b53074fbb201$export$702322f34446412d; });







const $ab12b53074fbb201$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Dialog({ isOpen: isOpen , onDismiss: onDismiss , children: children , className: className , title: title , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $i684g$reachdialog.Dialog), {
        ref: ref,
        isOpen: isOpen,
        onDismiss: onDismiss,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-dialog", className),
        "aria-label": title,
        ...props,
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3dc96cd2fd1a59d9$export$a8a3e93435678ff9), {
                as: "h2",
                variant: "h2",
                className: "lbh-dialog__title",
                children: title
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("button", {
                type: "button",
                onClick: onDismiss,
                className: "lbh-dialog__close",
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                        className: "govuk-visually-hidden",
                        children: "Close"
                    }),
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 13 13",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                                d: "M-0.0501709 1.36379L1.36404 -0.050415L12.6778 11.2633L11.2635 12.6775L-0.0501709 1.36379Z",
                                fill: "#0B0C0C"
                            }),
                            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
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
const $ab12b53074fbb201$export$702322f34446412d = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function DialogActions({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-dialog__actions", className),
        ...props
    });
});


$parcel$exportWildcard($1cb230a5acd30dbe$exports, $ab12b53074fbb201$exports);


var $f7d575a110a1174f$exports = {};
var $0ee4d96298d0e0c6$exports = {};

$parcel$export($0ee4d96298d0e0c6$exports, "Link", function () { return $0ee4d96298d0e0c6$export$a6c7ac8248d6e38a; });





const $0ee4d96298d0e0c6$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Link({ as: LinkComp = "a" , variant: variant = "link" , isExternal: isExternal = false , className: className , rel: rel , target: target , override: override , ...props }, ref) {
    const linkClasses = (0, ($parcel$interopDefault($i684g$classnames)))(variant !== "native" && {
        "govuk-link lbh-link": variant !== "back-link",
        "govuk-back-link lbh-back-link": variant === "back-link",
        [`lbh-link--${variant}`]: variant !== "link" && variant !== "back-link",
        "lbh-link--no-visited-state": !isExternal
    }, (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className);
    return(// eslint-disable-next-line react/jsx-no-target-blank
    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(LinkComp, {
        ref: ref,
        className: linkClasses,
        rel: isExternal ? "noopener noreferrer" : rel,
        target: isExternal ? "_blank" : target,
        ...props
    }));
});


$parcel$exportWildcard($f7d575a110a1174f$exports, $0ee4d96298d0e0c6$exports);


var $6c59dee70ac360b9$exports = {};
var $d7925e79f5f96cb6$exports = {};

$parcel$export($d7925e79f5f96cb6$exports, "ScrollToTop", function () { return $d7925e79f5f96cb6$export$e0a2fa2ca78dc95; });


const $d7925e79f5f96cb6$export$e0a2fa2ca78dc95 = ()=>{
    const { pathname: pathname  } = (0, $i684g$reactrouterdom.useLocation)();
    const prevPathname = (0, $i684g$react.useRef)(pathname);
    const { action: action  } = (0, $i684g$reactrouterdom.useHistory)();
    (0, $i684g$react.useEffect)(()=>{
        if (action !== "POP" && pathname !== prevPathname.current) window.scrollTo(0, 0);
        prevPathname.current = pathname;
    }, [
        pathname,
        action
    ]);
    return null;
};


$parcel$exportWildcard($6c59dee70ac360b9$exports, $d7925e79f5f96cb6$exports);


const $89401ee2a53a5d08$export$a6c9ba3e1190d848 = ({ children: children , ...props })=>{
    const [message, setMessage] = (0, $i684g$react.useState)();
    const [isConfirm, setIsConfim] = (0, $i684g$react.useState)(false);
    const [confirmation, setConfirmation] = (0, $i684g$react.useState)();
    const onConfirmation = (0, $i684g$react.useCallback)((ok)=>{
        /* istanbul ignore else: this should be set by the time we call it */ if (confirmation) confirmation(ok);
        if (!ok && message?.action === "POP") window.history.forward();
        setIsConfim(false);
    }, [
        confirmation,
        setIsConfim,
        message
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $i684g$reactrouterdom.BrowserRouter), {
        getUserConfirmation: (payload, callback)=>{
            try {
                const incomingMessage = JSON.parse(payload);
                if (incomingMessage && !(0, $i684g$reactrouterdom.matchPath)(incomingMessage.pathname, {
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
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $d7925e79f5f96cb6$export$e0a2fa2ca78dc95), {}),
            children,
            message && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $ab12b53074fbb201$export$3ddf2d174ce01153), {
                isOpen: isConfirm,
                title: message.title,
                onDismiss: ()=>onConfirmation(false),
                children: [
                    message?.body && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("p", {
                        children: message.body
                    }),
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $ab12b53074fbb201$export$702322f34446412d), {
                        children: [
                            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $c76f7478b8884a6c$export$353f5b6fc5456de1), {
                                onClick: ()=>onConfirmation(true),
                                children: "Yes"
                            }),
                            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $0ee4d96298d0e0c6$export$a6c7ac8248d6e38a), {
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


$parcel$exportWildcard($3cb78742846f278e$exports, $89401ee2a53a5d08$exports);


var $5e01b0390258679e$exports = {};
var $d4f9bb7f87bb916e$exports = {};

$parcel$export($d4f9bb7f87bb916e$exports, "DateInput", function () { return $d4f9bb7f87bb916e$export$7edc06cf1783b30f; });



var $f7389a6cf3d553f6$exports = {};
var $2e17fefe9fc75ea2$exports = {};

$parcel$export($2e17fefe9fc75ea2$exports, "NumberInput", function () { return $2e17fefe9fc75ea2$export$6bf0cd3a219bbade; });


var $165ff1fef9a7a447$exports = {};
var $c24864f872aaace1$exports = {};

$parcel$export($c24864f872aaace1$exports, "Input", function () { return $c24864f872aaace1$export$f5b8910cec6cf069; });





const $c24864f872aaace1$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Input({ error: error , className: className , override: override , ...props }, ref) {
    const inputClasses = (0, ($parcel$interopDefault($i684g$classnames)))("govuk-input", "lbh-input", {
        "govuk-input--error": error
    }, (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("input", {
        ref: ref,
        className: inputClasses,
        ...props
    });
});


$parcel$exportWildcard($165ff1fef9a7a447$exports, $c24864f872aaace1$exports);


const $2e17fefe9fc75ea2$export$6bf0cd3a219bbade = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function NumberInput({ onChange: onChange , onBlur: onBlur , min: min , max: max , value: value , defaultValue: defaultValue , maxLength: maxLength , padStart: padStart = 0 , ...props }, ref) {
    const parser = (0, $i684g$react.useCallback)((num)=>{
        let numString = String(num).replace(/[^\d]+/g, "");
        if (maxLength !== undefined && maxLength < numString.length) numString = numString.slice(0, maxLength);
        return numString;
    }, [
        maxLength
    ]);
    const formatter = (0, $i684g$react.useCallback)((num)=>{
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
    const [output, setOutput] = (0, $i684g$react.useState)(parser(defaultValue ?? value ?? ""));
    const outputInt = (0, $i684g$react.useMemo)(()=>{
        const target = parseInt(output, 10);
        return !Number.isNaN(target) ? target : undefined;
    }, [
        output
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $c24864f872aaace1$export$f5b8910cec6cf069), {
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


$parcel$exportWildcard($f7389a6cf3d553f6$exports, $2e17fefe9fc75ea2$exports);



const $d4f9bb7f87bb916e$export$7edc06cf1783b30f = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function DateInput({ id: id = "date-input" , dayProps: dayProps , monthProps: monthProps , yearProps: yearProps , dayLabel: dayLabel = "Day" , monthLabel: monthLabel = "Month" , yearLabel: yearLabel = "Year" , error: error , required: required , className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-date-input", "lbh-date-input", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-day`,
                        children: dayLabel
                    }),
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $2e17fefe9fc75ea2$export$6bf0cd3a219bbade), {
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
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-month`,
                        children: monthLabel
                    }),
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $2e17fefe9fc75ea2$export$6bf0cd3a219bbade), {
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
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-year`,
                        children: yearLabel
                    }),
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $2e17fefe9fc75ea2$export$6bf0cd3a219bbade), {
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


$parcel$exportWildcard($5e01b0390258679e$exports, $d4f9bb7f87bb916e$exports);


var $7c0c76825baed95e$exports = {};
var $a31dcead500d15da$exports = {};

$parcel$export($a31dcead500d15da$exports, "TimeInput", function () { return $a31dcead500d15da$export$a1af6f79df847fac; });




var $c6537740902d4927$exports = {};
var $6062d3d292877f4a$exports = {};

$parcel$export($6062d3d292877f4a$exports, "Select", function () { return $6062d3d292877f4a$export$ef9b1a59e592288f; });





const $6062d3d292877f4a$export$ef9b1a59e592288f = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Select({ error: error , className: className , override: override , ...props }, ref) {
    const selectClasses = (0, ($parcel$interopDefault($i684g$classnames)))("govuk-select", "lbh-select", {
        "govuk-select--error": error
    }, (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("select", {
        ref: ref,
        className: selectClasses,
        ...props
    });
});


$parcel$exportWildcard($c6537740902d4927$exports, $6062d3d292877f4a$exports);



const $a31dcead500d15da$export$a1af6f79df847fac = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function TimeInput({ id: id = "time-input" , hourProps: hourProps , minuteProps: minuteProps , amPmProps: amPmProps , hourLabel: hourLabel = "Hour" , minuteLabel: minuteLabel = "Minute" , amPmLabel: amPmLabel = "AM/PM" , error: error , required: required , className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-date-input", "lbh-date-input", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-hour`,
                        children: hourLabel
                    }),
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $2e17fefe9fc75ea2$export$6bf0cd3a219bbade), {
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
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-minute`,
                        children: minuteLabel
                    }),
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $2e17fefe9fc75ea2$export$6bf0cd3a219bbade), {
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
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "govuk-date-input__item",
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("label", {
                        className: "govuk-label lbh-label",
                        htmlFor: `${id}-amPm`,
                        children: amPmLabel
                    }),
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $6062d3d292877f4a$export$ef9b1a59e592288f), {
                        id: "amPm",
                        name: "amPm",
                        "aria-label": "AM/PM",
                        ...amPmProps,
                        children: [
                            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("option", {
                                value: "",
                                children: amPmProps?.placeholder || "AM/PM"
                            }),
                            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("option", {
                                value: "am",
                                children: "AM"
                            }),
                            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("option", {
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


$parcel$exportWildcard($7c0c76825baed95e$exports, $a31dcead500d15da$exports);



var $b588b0d721a5aa87$exports = {};
var $8e40873516d34abc$exports = {};

$parcel$export($8e40873516d34abc$exports, "DialogPrompt", function () { return $8e40873516d34abc$export$bf1308127b24ea84; });



const $8e40873516d34abc$export$bf1308127b24ea84 = ({ title: title , body: body , skipConfirmation: skipConfirmation , ...props })=>{
    const { path: path  } = (0, $i684g$reactrouterdom.useRouteMatch)();
    (0, $i684g$react.useEffect)(()=>{
        const handler = (e)=>{
            e.returnValue = "";
            return e.returnValue;
        };
        window.addEventListener("beforeunload", handler);
        return ()=>{
            window.removeEventListener("beforeunload", handler);
        };
    }, []);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $i684g$reactrouterdom.Prompt), {
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


$parcel$exportWildcard($b588b0d721a5aa87$exports, $8e40873516d34abc$exports);


var $dcde123d5eff736d$exports = {};
var $24719bf0a11056ec$exports = {};

$parcel$export($24719bf0a11056ec$exports, "Details", function () { return $24719bf0a11056ec$export$3e8048d3cf2ba3fd; });






const $24719bf0a11056ec$export$3e8048d3cf2ba3fd = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Details({ title: title , children: children , className: className  }, ref) {
    const localRef = (0, $i684g$react.useRef)(null);
    (0, $i684g$react.useEffect)(()=>{
        if (localRef.current) new (0, $i684g$lbhfrontend.Details)(localRef.current).init();
    }, []);
    const classes = {
        "govuk-details lbh-details": true
    };
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("details", {
        id: "mtfh-details",
        "data-testid": "mtfh-details",
        className: (0, ($parcel$interopDefault($i684g$classnames)))(classes, className),
        "data-module": "govuk-details",
        ref: (0, ($parcel$interopDefault($i684g$reactmergerefs)))([
            localRef,
            ref
        ]),
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("summary", {
                className: "govuk-details__summary",
                children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                    className: "govuk-details__summary-text",
                    children: title
                })
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                className: "govuk-details__text",
                children: children
            })
        ]
    });
});


$parcel$exportWildcard($dcde123d5eff736d$exports, $24719bf0a11056ec$exports);



var $75b5dd6c05428eea$exports = {};
var $136b7732e8aceff6$exports = {};

$parcel$export($136b7732e8aceff6$exports, "Field", function () { return $136b7732e8aceff6$export$a455218a85c89869; });
$parcel$export($136b7732e8aceff6$exports, "InlineField", function () { return $136b7732e8aceff6$export$f30174d63e654145; });
$parcel$export($136b7732e8aceff6$exports, "DateField", function () { return $136b7732e8aceff6$export$d9781c7894a82487; });
$parcel$export($136b7732e8aceff6$exports, "TimeField", function () { return $136b7732e8aceff6$export$5eaee2322dd727eb; });




var $12c1e7079cef95d7$exports = {};
var $21fe3bd2b5f1a50d$exports = {};

$parcel$export($21fe3bd2b5f1a50d$exports, "FormGroup", function () { return $21fe3bd2b5f1a50d$export$2d00230e1e6f7fbc; });




var $30cb9ca3841e837d$exports = {};
var $fce28c0a9ce8552c$exports = {};

$parcel$export($fce28c0a9ce8552c$exports, "TextArea", function () { return $fce28c0a9ce8552c$export$f5c9f3c2c4054eec; });





const $fce28c0a9ce8552c$var$getLengthOfValue = (initialValue)=>{
    if (typeof initialValue === "string") return initialValue.length;
    if (Array.isArray(initialValue)) return initialValue.join(",").length;
    return String(initialValue || "").length;
};
const $fce28c0a9ce8552c$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function TextArea({ maxLength: maxLength , error: error , className: className , onChange: onChange , override: override , ...props }, ref) {
    const { value: value , defaultValue: defaultValue  } = props;
    const isControlled = value !== undefined;
    const initialValue = value || defaultValue;
    const [characterCount, setCharacterCount] = (0, $i684g$react.useState)($fce28c0a9ce8552c$var$getLengthOfValue(initialValue));
    const onChangeHandler = (0, $i684g$react.useCallback)((event)=>{
        if (event?.currentTarget?.value !== undefined && !isControlled && maxLength !== undefined) setCharacterCount(String(event.currentTarget.value).length);
        if (typeof onChange === "function") onChange(event);
    }, [
        onChange,
        maxLength,
        isControlled
    ]);
    const exceedingValue = (0, $i684g$react.useMemo)(()=>maxLength !== undefined && maxLength - (isControlled ? $fce28c0a9ce8552c$var$getLengthOfValue(value) : characterCount), [
        maxLength,
        characterCount,
        value,
        isControlled
    ]);
    const textareaClasses = (0, ($parcel$interopDefault($i684g$classnames)))("govuk-textarea", "lbh-textarea", {
        "govuk-textarea--error": error
    }, "lbh-character-count", (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className);
    const messageClasses = (0, ($parcel$interopDefault($i684g$classnames)))({
        "govuk-hint": exceedingValue >= 0
    }, "govuk-character-count__message", {
        "govuk-error-message": exceedingValue < 0
    }, (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override));
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $i684g$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("textarea", {
                ref: ref,
                className: textareaClasses,
                onChange: onChangeHandler,
                ...props
            }),
            maxLength !== undefined && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                className: messageClasses,
                "aria-live": "polite",
                children: exceedingValue >= 0 ? `You have ${exceedingValue} ${(0, $2513a6ebe66af095$export$cefb40c9962541b5)("character", exceedingValue)} remaining` : `You have ${Math.abs(exceedingValue)} ${(0, $2513a6ebe66af095$export$cefb40c9962541b5)("character", exceedingValue)} too many`
            })
        ]
    });
});


$parcel$exportWildcard($30cb9ca3841e837d$exports, $fce28c0a9ce8552c$exports);



const $21fe3bd2b5f1a50d$export$2d00230e1e6f7fbc = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function FormGroup({ as: FormGroupComp = "div" , id: id , name: name , label: label , hint: hint , error: error , required: required , children: children , className: className , override: override , ...props }, ref) {
    const formGroupClasses = (0, ($parcel$interopDefault($i684g$classnames)))("govuk-form-group", {
        "govuk-form-group--error": !!error
    }, "lbh-form-group", (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className);
    const describedBy = (0, $i684g$react.useMemo)(()=>{
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
    const formGroup = /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)(FormGroupComp, {
        ref: ref,
        id: id,
        className: formGroupClasses,
        ...props,
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)(LabelComp, {
                className: "govuk-label lbh-label",
                htmlFor: `${id}-field`,
                children: [
                    label,
                    required ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("sup", {
                        "aria-hidden": "true",
                        children: "*"
                    }) : ""
                ]
            }),
            !!hint && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                id: `${id}-hint`,
                className: "govuk-hint lbh-hint",
                children: hint
            }),
            !!error && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("span", {
                id: `${id}-error`,
                className: "govuk-error-message lbh-error-message",
                children: [
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                        className: "govuk-visually-hidden",
                        children: "Error:"
                    }),
                    " ",
                    error
                ]
            }),
            !!children && (0, $i684g$react.Children).only(/*#__PURE__*/ (0, $i684g$react.cloneElement)(children, {
                id: `${id}-field`,
                name: name,
                required: required,
                error: !!error,
                "aria-describedby": describedBy || undefined,
                ...children.props
            }))
        ]
    });
    return /*#__PURE__*/ (0, $i684g$react.isValidElement)(children) && children.type === (0, $fce28c0a9ce8552c$export$f5c9f3c2c4054eec) ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        className: "govuk-character-count",
        children: formGroup
    }) : formGroup;
});


$parcel$exportWildcard($12c1e7079cef95d7$exports, $21fe3bd2b5f1a50d$exports);



const $136b7732e8aceff6$export$a455218a85c89869 = ({ id: id , label: label , children: children , name: name , type: type , ...props })=>{
    const [field, meta] = (0, $i684g$formik.useField)({
        name: name,
        type: type,
        value: children.props.value
    });
    const comp = type === "checkbox" || type === "radio" ? "fieldset" : "div";
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $21fe3bd2b5f1a50d$export$2d00230e1e6f7fbc), {
        as: comp,
        id: id,
        label: label,
        error: meta.error,
        ...props,
        children: /*#__PURE__*/ (0, $i684g$react.cloneElement)(children, {
            ...field
        })
    });
};
const $136b7732e8aceff6$export$f30174d63e654145 = ({ children: children , name: name , type: type , ...props })=>{
    const [field, meta] = (0, $i684g$formik.useField)({
        name: name,
        type: type,
        value: children.props.value
    });
    return /*#__PURE__*/ (0, $i684g$react.cloneElement)(children, {
        ...field,
        ...props,
        error: meta.error
    });
};
const $136b7732e8aceff6$export$d9781c7894a82487 = ({ dayProps: { name: dayName , ...dayProps } , monthProps: { name: monthName , ...monthProps } , yearProps: { name: yearName , ...yearProps } , dayLabel: dayLabel = "Day" , monthLabel: monthLabel = "Month" , yearLabel: yearLabel = "Year" , fieldError: fieldError , ...props })=>{
    const [dayField, dayMeta] = (0, $i684g$formik.useField)(dayName);
    const [monthField, monthMeta] = (0, $i684g$formik.useField)(monthName);
    const [yearField, yearMeta] = (0, $i684g$formik.useField)(yearName);
    const error = fieldError || dayMeta.error || monthMeta.error || yearMeta.error;
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $21fe3bd2b5f1a50d$export$2d00230e1e6f7fbc), {
        as: "fieldset",
        error: error,
        ...props,
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $d4f9bb7f87bb916e$export$7edc06cf1783b30f), {
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
const $136b7732e8aceff6$export$5eaee2322dd727eb = ({ hourProps: { name: hourName , ...hourProps } , minuteProps: { name: minuteName , ...minuteProps } , amPmProps: { name: amPmName , ...amPmProps } , hourLabel: hourLabel = "Hour" , minuteLabel: minuteLabel = "Minute" , amPmLabel: amPmLabel = "am/pm" , ...props })=>{
    const [hourField, hourMeta] = (0, $i684g$formik.useField)(hourName);
    const [minuteField, minuteMeta] = (0, $i684g$formik.useField)(minuteName);
    const [amPmField, amPmMeta] = (0, $i684g$formik.useField)(amPmName);
    const error = hourMeta.error || minuteMeta.error || amPmMeta.error;
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $21fe3bd2b5f1a50d$export$2d00230e1e6f7fbc), {
        as: "fieldset",
        error: error,
        ...props,
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $a31dcead500d15da$export$a1af6f79df847fac), {
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


$parcel$exportWildcard($75b5dd6c05428eea$exports, $136b7732e8aceff6$exports);


var $e5d671463ee8fb76$exports = {};
var $4e36fd3d28bb783a$exports = {};

$parcel$export($4e36fd3d28bb783a$exports, "Fieldset", function () { return $4e36fd3d28bb783a$export$e154be390aa0e14; });





const $4e36fd3d28bb783a$export$e154be390aa0e14 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Fieldset({ variant: variant = "base" , indent: indent = false , error: error , heading: heading , children: children , className: className , override: override , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("fieldset", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-fieldset", "lbh-fieldset", {
            "mtfh-fieldset--indent": indent,
            "mtfh-fieldset--error": !!error
        }, (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className),
        ...props,
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("legend", {
                className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-fieldset__legend", {
                    "govuk-fieldset__legend--s": variant === "small",
                    "govuk-fieldset__legend--m": variant === "medium",
                    "govuk-fieldset__legend--l": variant === "large",
                    "govuk-fieldset__legend--xl": variant === "xlarge",
                    "govuk-visually-hidden": variant === "hidden"
                }),
                children: [
                    typeof heading !== "string" ? /*#__PURE__*/ (0, $i684g$react.isValidElement)(heading) && /*#__PURE__*/ (0, $i684g$react.cloneElement)(heading, {
                        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-fieldset__heading", heading.props.className)
                    }) : heading,
                    error && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                        className: "govuk-visually-hidden",
                        children: [
                            " ",
                            error
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-fieldset__content"),
                children: [
                    error && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
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


$parcel$exportWildcard($e5d671463ee8fb76$exports, $4e36fd3d28bb783a$exports);






var $0fb9a6868d1609bf$exports = {};
var $820848fad28fd1d6$exports = {};

$parcel$export($820848fad28fd1d6$exports, "Layout", function () { return $820848fad28fd1d6$export$c84671f46d6a1ca; });




const $820848fad28fd1d6$export$c84671f46d6a1ca = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Layout({ children: children , top: top , backLink: backLink , side: side , className: className , sidePosition: sidePosition = "left" , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-layout", {
            "mtfh-layout--narrow": !side,
            "mtfh-layout--right": sidePosition === "right"
        }, className),
        ...props,
        children: [
            backLink,
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                id: "content"
            }),
            top,
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                className: "mtfh-layout__container",
                children: [
                    side ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                        className: "mtfh-layout__aside",
                        children: side
                    }) : null,
                    /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                        className: "mtfh-layout__main",
                        children: children
                    })
                ]
            })
        ]
    });
});


$parcel$exportWildcard($0fb9a6868d1609bf$exports, $820848fad28fd1d6$exports);



var $3854719fd5a00f63$exports = {};
var $008f064a25cdb713$exports = {};

$parcel$export($008f064a25cdb713$exports, "LinkOverlay", function () { return $008f064a25cdb713$export$155d86d4b6139452; });
$parcel$export($008f064a25cdb713$exports, "LinkBox", function () { return $008f064a25cdb713$export$d79f4543fbc1d78a; });





const $008f064a25cdb713$export$155d86d4b6139452 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function LinkOverlay({ as: LinkOverlayComp = "div" , className: className , override: override , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(LinkOverlayComp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-link-overlay", (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className),
        ...props
    });
});
const $008f064a25cdb713$export$d79f4543fbc1d78a = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function LinkBox({ as: LinkBoxComp = "div" , className: className , override: override , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(LinkBoxComp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-link-box", (0, $0dbe8b95c9171c6a$export$2e2bcd8739ae039)(override), className),
        ...props
    });
});


$parcel$exportWildcard($3854719fd5a00f63$exports, $008f064a25cdb713$exports);


var $2c5cf46c35ce7028$exports = {};
var $e958fc6bf6d3f984$exports = {};

$parcel$export($e958fc6bf6d3f984$exports, "LinkButton", function () { return $e958fc6bf6d3f984$export$29d11c0fe2fc51d8; });




const $e958fc6bf6d3f984$export$29d11c0fe2fc51d8 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function LinkButton({ variant: variant = "link" , className: className , children: children , ...props }, ref) {
    const linkClasses = (0, ($parcel$interopDefault($i684g$classnames)))(variant !== "native" && {
        "govuk-link lbh-link": variant !== "back-link",
        "govuk-back-link lbh-back-link": variant === "back-link",
        [`lbh-link--${variant}`]: variant !== "link" && variant !== "back-link"
    }, className);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("button", {
        ref: ref,
        className: linkClasses,
        type: "button",
        ...props,
        children: children
    });
});


$parcel$exportWildcard($2c5cf46c35ce7028$exports, $e958fc6bf6d3f984$exports);


var $44455de626eb7417$exports = {};
var $6d86023b75c6886f$exports = {};

$parcel$export($6d86023b75c6886f$exports, "List", function () { return $6d86023b75c6886f$export$54c2e3dc7acea9f5; });




const $6d86023b75c6886f$export$54c2e3dc7acea9f5 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function List({ as: ListComp = "ul" , variant: variant = "base" , className: className , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(ListComp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-list", {
            "lbh-list--bullet": variant === "bullets",
            "lbh-list--number": variant === "numbers"
        }, className),
        ...props,
        children: (0, ($parcel$interopDefault($i684g$react))).Children.map(children, (child, index)=>child && /*#__PURE__*/ (0, $i684g$react.isValidElement)(child) && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("li", {
                children: child
            }, index))
    });
});


$parcel$exportWildcard($44455de626eb7417$exports, $6d86023b75c6886f$exports);



var $17b2842e98f74990$exports = {};
var $d05b633602b4cd9c$exports = {};

$parcel$export($d05b633602b4cd9c$exports, "PageAnnouncementContext", function () { return $d05b633602b4cd9c$export$3d163c0234443c1e; });
$parcel$export($d05b633602b4cd9c$exports, "usePageAnnouncement", function () { return $d05b633602b4cd9c$export$3c21ce9329ea303e; });
$parcel$export($d05b633602b4cd9c$exports, "PageAnnouncementProvider", function () { return $d05b633602b4cd9c$export$18fb9d28ec4899ae; });


const $d05b633602b4cd9c$export$3d163c0234443c1e = /*#__PURE__*/ (0, $i684g$react.createContext)(undefined);
$d05b633602b4cd9c$export$3d163c0234443c1e.displayName = "PageAnnouncementContext";
const $d05b633602b4cd9c$export$3c21ce9329ea303e = ()=>{
    const context = (0, $i684g$react.useContext)($d05b633602b4cd9c$export$3d163c0234443c1e);
    if (!context) {
        const error = new Error("usePageAnnouncementContext: `context` is undefined. Seems you forgot to wrap component within the Provider");
        Error.captureStackTrace?.(error, $d05b633602b4cd9c$export$3c21ce9329ea303e);
        throw error;
    }
    const { state: state , dispatch: dispatch  } = context;
    const addAnnouncement = (0, $i684g$react.useCallback)((props)=>{
        dispatch({
            type: "ADD",
            payload: props
        });
    }, [
        dispatch
    ]);
    const clearAnnouncement = (0, $i684g$react.useCallback)(()=>{
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
const $d05b633602b4cd9c$export$18fb9d28ec4899ae = ({ sessionKey: sessionKey , children: children  })=>{
    const reducer = (state, action)=>{
        switch(action.type){
            case "ADD":
                return action.payload;
            case "CLEAR":
            default:
                return undefined;
        }
    };
    const initialData = (0, $i684g$react.useMemo)(()=>{
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
    const [state, dispatch] = (0, $i684g$react.useReducer)(reducer, initialData);
    const value = (0, $i684g$react.useMemo)(()=>({
            state: state,
            dispatch: dispatch
        }), [
        state,
        dispatch
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($d05b633602b4cd9c$export$3d163c0234443c1e.Provider, {
        value: value,
        children: children
    });
};


var $47d222e2f10b703e$exports = {};

$parcel$export($47d222e2f10b703e$exports, "PageAnnouncement", function () { return $47d222e2f10b703e$export$f886b3ad0951ea15; });





const $47d222e2f10b703e$export$f886b3ad0951ea15 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function PageAnnouncement({ className: className , ...props }, ref) {
    const context = (0, $i684g$react.useContext)((0, $d05b633602b4cd9c$export$3d163c0234443c1e));
    if (!context?.state?.heading && !props.heading) return null;
    const { heading: heading , description: description , variant: variant = "success" , ...rest } = {
        ...context?.state,
        ...props
    };
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("section", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-page-announcement", {
            [`lbh-page-announcement--${variant}`]: variant && variant !== "success"
        }, className),
        ...rest,
        role: "alert",
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("h3", {
                className: "lbh-page-announcement__title",
                children: heading
            }),
            !!description && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                className: "lbh-page-announcement__content",
                children: description
            })
        ]
    });
});


$parcel$exportWildcard($17b2842e98f74990$exports, $d05b633602b4cd9c$exports);
$parcel$exportWildcard($17b2842e98f74990$exports, $47d222e2f10b703e$exports);


var $3152284388f1a123$exports = {};
var $d42cb025a69061a4$exports = {};

$parcel$export($d42cb025a69061a4$exports, "Pagination", function () { return $d42cb025a69061a4$export$68f5e1453c188a82; });
$parcel$export($d42cb025a69061a4$exports, "PaginationControls", function () { return $d42cb025a69061a4$export$ff17519edeb6015d; });
$parcel$export($d42cb025a69061a4$exports, "PaginationSummary", function () { return $d42cb025a69061a4$export$94528e113b92ad1e; });
$parcel$export($d42cb025a69061a4$exports, "PaginationButton", function () { return $d42cb025a69061a4$export$c3639e97caabff2c; });




const $d42cb025a69061a4$export$68f5e1453c188a82 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Pagination({ className: className , variant: variant = "base" , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("nav", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-pagination", {
            "lbh-pagination--center": variant === "center"
        }, className),
        ...props
    });
});
const $d42cb025a69061a4$export$ff17519edeb6015d = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function PaginationControls({ className: className , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("ul", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-pagination__list", className),
        ...props,
        children: (0, $i684g$react.Children).map(children, (child)=>child && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("li", {
                className: "lbh-pagination__item",
                children: child
            }))
    });
});
const $d42cb025a69061a4$export$94528e113b92ad1e = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function PaginationSummary({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-pagination__summary", className),
        ...props
    });
});
const $d42cb025a69061a4$export$c3639e97caabff2c = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function PaginationButton({ as: PaginationComp = "a" , variant: variant = "base" , active: active = false , className: className , children: children , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)(PaginationComp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("lbh-pagination__link", {
            "lbh-pagination__link--next": variant === "next",
            "lbh-pagination__link--current": variant === "base" && active
        }, className),
        rel: variant !== "base" ? variant : undefined,
        ...props,
        children: [
            variant === "previous" ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("span", {
                "aria-hidden": "true",
                role: "presentation",
                children: [
                    "\xab",
                    " "
                ]
            }) : null,
            children,
            variant === "next" ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("span", {
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


$parcel$exportWildcard($3152284388f1a123$exports, $d42cb025a69061a4$exports);


var $468b82790ee95cb1$exports = {};
var $52cde0e9969cdce8$exports = {};

$parcel$export($52cde0e9969cdce8$exports, "PhaseBanner", function () { return $52cde0e9969cdce8$export$e345a1a4b7910594; });




const $52cde0e9969cdce8$export$e345a1a4b7910594 = ({ tag: tag , children: children , variant: variant = "grey"  })=>{
    const lbhTagColor = `lbh-tag--${variant}`;
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        className: "container-max-width lbh-phase-banner",
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("p", {
            className: "govuk-phase-banner__content",
            children: [
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("strong", {
                    className: (0, ($parcel$interopDefault($i684g$classnames)))(`${lbhTagColor}`, "govuk-phase-banner__content__tag govuk-tag lbh-tag"),
                    children: tag
                }),
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                    className: "govuk-phase-banner__text",
                    children: children
                })
            ]
        })
    });
};


$parcel$exportWildcard($468b82790ee95cb1$exports, $52cde0e9969cdce8$exports);


var $33a8008972ce87e5$exports = {};
var $2d1f092ec8725726$exports = {};

$parcel$export($2d1f092ec8725726$exports, "Radio", function () { return $2d1f092ec8725726$export$d7b12c4107be0d61; });
$parcel$export($2d1f092ec8725726$exports, "RadioDivider", function () { return $2d1f092ec8725726$export$df58ef6abee09aae; });
$parcel$export($2d1f092ec8725726$exports, "RadioConditional", function () { return $2d1f092ec8725726$export$baad22d6b72c158a; });
$parcel$export($2d1f092ec8725726$exports, "RadioGroup", function () { return $2d1f092ec8725726$export$a98f0dcb43a68a25; });






const $2d1f092ec8725726$export$d7b12c4107be0d61 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Radio({ id: id , className: className , type: type = "radio" , hint: hint , children: children , conditionalId: conditionalId , error: error , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-radios__item", className),
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("input", {
                ref: ref,
                id: id,
                className: "govuk-radios__input",
                type: type,
                "aria-describedby": hint ? `${id}-hint` : undefined,
                "data-aria-controls": conditionalId,
                ...props
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("label", {
                className: "govuk-label govuk-radios__label",
                htmlFor: id,
                children: children
            }),
            hint ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                id: `${id}-hint`,
                className: "govuk-hint govuk-radios__hint",
                children: hint
            }) : null
        ]
    });
});
const $2d1f092ec8725726$export$df58ef6abee09aae = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function RadioDivider(props, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        ref: ref,
        className: "govuk-radios__divider",
        ...props
    });
});
const $2d1f092ec8725726$export$baad22d6b72c158a = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function RadioConditional(props, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        ref: ref,
        className: "govuk-radios__conditional govuk-radios__conditional--hidden",
        ...props
    });
});
const $2d1f092ec8725726$export$a98f0dcb43a68a25 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function RadioGroup({ variant: variant = "base" , inline: inline = false , name: name , children: children , error: error , required: required , ...props }, ref) {
    const localRef = (0, $i684g$react.useRef)();
    (0, $i684g$react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) new (0, $i684g$lbhfrontend.Radios)(localRef.current).init();
    }, []);
    const hasConditionals = (0, $i684g$react.useMemo)(()=>(0, $i684g$react.Children).toArray(children).some((child)=>/*#__PURE__*/ (0, $i684g$react.isValidElement)(child) && child.type === $2d1f092ec8725726$export$baad22d6b72c158a), [
        children
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        ref: (0, ($parcel$interopDefault($i684g$reactmergerefs)))([
            localRef,
            ref
        ]),
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-radios", {
            "govuk-radios--small": variant === "small",
            "govuk-radios--inline": inline,
            "govuk-radios--conditionals": hasConditionals
        }, "lbh-radios"),
        ...props,
        children: (0, $i684g$react.Children).map(children, (child)=>child && /*#__PURE__*/ (0, $i684g$react.isValidElement)(child) && /*#__PURE__*/ (0, $i684g$react.cloneElement)(child, {
                name: name,
                required: required,
                ...child.props
            }))
    });
});


$parcel$exportWildcard($33a8008972ce87e5$exports, $2d1f092ec8725726$exports);


var $3cd7f2d104444fe6$exports = {};
var $835ac157f4d7f565$exports = {};

$parcel$export($835ac157f4d7f565$exports, "WorkOrders", function () { return $835ac157f4d7f565$export$2ebe11bf466082a5; });
$parcel$export($835ac157f4d7f565$exports, "WorkOrderList", function () { return $835ac157f4d7f565$export$f63a0de43af3043f; });




let $07c4837419514f09$export$a932fb750d9fd996;
(function(WorkOrdersFilters) {
    WorkOrdersFilters["CANCELLED"] = "Cancelled";
    WorkOrdersFilters["COMPLETED"] = "Completed";
    WorkOrdersFilters["IN_PROGRESS"] = "InProgress";
    WorkOrdersFilters["LOCKED"] = "Locked";
    WorkOrdersFilters["ON_HOLD"] = "OnHold";
})($07c4837419514f09$export$a932fb750d9fd996 || ($07c4837419514f09$export$a932fb750d9fd996 = {}));
const $07c4837419514f09$export$a4729db15693d5b0 = [
    {
        code: $07c4837419514f09$export$a932fb750d9fd996.CANCELLED,
        value: "cancelled"
    },
    {
        code: $07c4837419514f09$export$a932fb750d9fd996.COMPLETED,
        value: "completed"
    },
    {
        code: $07c4837419514f09$export$a932fb750d9fd996.IN_PROGRESS,
        value: "in progress"
    },
    {
        code: $07c4837419514f09$export$a932fb750d9fd996.LOCKED,
        value: "locked"
    },
    {
        code: $07c4837419514f09$export$a932fb750d9fd996.ON_HOLD,
        value: "on hold"
    }
];


const $7c5824d5ea617ead$var$repairStatusGroupings = {
    [(0, $07c4837419514f09$export$a932fb750d9fd996).CANCELLED]: [
        "30"
    ],
    [(0, $07c4837419514f09$export$a932fb750d9fd996).COMPLETED]: [
        "40",
        "50"
    ],
    [(0, $07c4837419514f09$export$a932fb750d9fd996).IN_PROGRESS]: [
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
    [(0, $07c4837419514f09$export$a932fb750d9fd996).LOCKED]: [
        "200"
    ],
    [(0, $07c4837419514f09$export$a932fb750d9fd996).ON_HOLD]: [
        "10",
        "70"
    ]
};
const $7c5824d5ea617ead$export$888eda2be6b7998 = (id, auth, filter, pageNumber = "1", pageSize = "12")=>{
    const params = new URLSearchParams();
    params.append("propertyReference", id);
    params.append("PageNumber", pageNumber);
    params.append("PageSize", pageSize);
    if (filter && $7c5824d5ea617ead$var$repairStatusGroupings[filter]) $7c5824d5ea617ead$var$repairStatusGroupings[filter].forEach((status)=>{
        params.append("StatusCode", status);
    });
    return (0, $08fd481a73641560$export$a84fc53129590f47)(`${(0, $c76f4f81e9b49394$export$2e2bcd8739ae039).repairsHubApiUrl}/workOrders?${params}`, auth, {
        headers: {
            "x-hackney-user": auth.user.token
        }
    });
};






















const $4495762f5b4f652e$export$5a9fc13fffea5796 = ()=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("hr", {
        className: "mtfh-card-break"
    });
};






const $466617e66e33c21f$export$60332b2344f7fe41 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Link({ as: CardComp = "div" , className: className , children: children  }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)(CardComp, {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-card", className),
        children: children
    });
});






const $b9f5655d8d723cc5$export$85cca3214a2e079d = ({ rows: rows  })=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $93b37cb8d58eee2c$export$2b959bb44e385245), {
        variant: "inline",
        children: rows.map((row, index)=>/*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $93b37cb8d58eee2c$export$2b379a888faa093d), {
                title: `${row.label}:`,
                children: row.value
            }, index))
    });
};







const $8ba205f9e6c283d6$var$DESCRIPTION_LENGTH = 50;
const $8ba205f9e6c283d6$var$WorkOrderListItem = ({ workOrder: { dateRaised: dateRaised , priority: priority , tradeDescription: tradeDescription , status: status , description: description , reference: reference  }  })=>{
    const { components: components  } = (0, $99138c4371ee1491$export$2e2bcd8739ae039);
    const dateRaisedAt = (0, $i684g$react.useMemo)(()=>(0, $91989fb0a0d86f92$export$3ae94a2503e890a1)(dateRaised), [
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
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $008f064a25cdb713$export$d79f4543fbc1d78a), {
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $466617e66e33c21f$export$60332b2344f7fe41), {
            children: [
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $008f064a25cdb713$export$155d86d4b6139452), {
                    children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $0ee4d96298d0e0c6$export$a6c7ac8248d6e38a), {
                        className: "lbh-link",
                        isExternal: true,
                        href: `${(0, $c76f4f81e9b49394$export$2e2bcd8739ae039).repairsHubAppUrl}/work-orders/${reference}`,
                        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("span", {
                            className: (0, ($parcel$interopDefault($i684g$classnames)))({
                                "work-order-list-item__trim": description.length > $8ba205f9e6c283d6$var$DESCRIPTION_LENGTH
                            }),
                            children: [
                                tradeDescription,
                                ": ",
                                description.substring(0, $8ba205f9e6c283d6$var$DESCRIPTION_LENGTH)
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $b9f5655d8d723cc5$export$85cca3214a2e079d), {
                    rows: rows
                }),
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $4495762f5b4f652e$export$5a9fc13fffea5796), {}),
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
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
var $8ba205f9e6c283d6$export$2e2bcd8739ae039 = $8ba205f9e6c283d6$var$WorkOrderListItem;



const { components: $835ac157f4d7f565$var$components  } = (0, $99138c4371ee1491$export$2e2bcd8739ae039);
const $835ac157f4d7f565$var$ExternalLink = ({ assetId: assetId  })=>/*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $0ee4d96298d0e0c6$export$a6c7ac8248d6e38a), {
        href: `${(0, $c76f4f81e9b49394$export$2e2bcd8739ae039).repairsHubAppUrl}/properties/${assetId}`,
        isExternal: true,
        className: "repair-list__link",
        children: $835ac157f4d7f565$var$components.workOrderList.seeAllWorkOrders
    });
const $835ac157f4d7f565$export$2ebe11bf466082a5 = ({ assetId: assetId , statusCode: statusCode  }, auth)=>{
    const { data: workOrders , error: error  } = (0, $7c5824d5ea617ead$export$888eda2be6b7998)(assetId, auth, statusCode);
    if (error) return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $c409b756a3ce249f$export$d0acb541148b73bf), {
        id: "work-order-list-error",
        title: $835ac157f4d7f565$var$components.workOrderList.errors.unableToFetchWorkOrder,
        description: $835ac157f4d7f565$var$components.workOrderList.errors.unableToFetchWorkOrderDescription
    });
    if (!workOrders) return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $72f26d7d8c275005$export$1f54913ccc4368b1), {
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $9932e6f0a7a23a65$export$7f7cbe89f1eacd2), {})
    });
    const getStatusLabel = (code)=>{
        const label = (0, $07c4837419514f09$export$a4729db15693d5b0).find((item)=>item.code === code)?.value;
        return label || code;
    };
    if (!workOrders.length) return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $i684g$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("p", {
                className: "repair-list__no-work-orders",
                children: `${(0, $99138c4371ee1491$export$2e2bcd8739ae039).components.workOrderList.noRepairs} ${getStatusLabel(statusCode)}`
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($835ac157f4d7f565$var$ExternalLink, {
                assetId: assetId
            })
        ]
    });
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $9de03c3a1a10d852$export$bb29c16f5612603e), {
                children: workOrders.map((workOrder, index)=>/*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $8ba205f9e6c283d6$export$2e2bcd8739ae039), {
                        workOrder: workOrder
                    }, index))
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($835ac157f4d7f565$var$ExternalLink, {
                assetId: assetId
            })
        ]
    });
};
const $835ac157f4d7f565$export$f63a0de43af3043f = ({ assetId: assetId  })=>{
    const [statusCode, setStatusCode] = (0, $i684g$react.useState)((0, $07c4837419514f09$export$a932fb750d9fd996).IN_PROGRESS);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        className: "work-order-list",
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $21fe3bd2b5f1a50d$export$2d00230e1e6f7fbc), {
                id: "filter",
                label: `${$835ac157f4d7f565$var$components.workOrderList.selectLabel}:`,
                children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $6062d3d292877f4a$export$ef9b1a59e592288f), {
                    value: statusCode,
                    onChange: (e)=>setStatusCode(e.target.value),
                    "data-testid": "work-order-list:filter",
                    children: (0, $07c4837419514f09$export$a4729db15693d5b0)?.map((filter, index)=>/*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("option", {
                            value: filter.code,
                            children: [
                                $835ac157f4d7f565$var$components.workOrderList.selectOptionLabel,
                                " ",
                                filter.value
                            ]
                        }, index))
                })
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)($835ac157f4d7f565$export$2ebe11bf466082a5, {
                assetId: assetId,
                statusCode: statusCode
            })
        ]
    });
};


$parcel$exportWildcard($3cd7f2d104444fe6$exports, $835ac157f4d7f565$exports);




var $7e6c34139933f91a$exports = {};
var $f1d24f0e0d8eafb0$exports = {};

$parcel$export($f1d24f0e0d8eafb0$exports, "SideBarSection", function () { return $f1d24f0e0d8eafb0$export$71214b16dbc210d1; });
$parcel$export($f1d24f0e0d8eafb0$exports, "SideBar", function () { return $f1d24f0e0d8eafb0$export$614264b7ca4804e6; });







const $f1d24f0e0d8eafb0$export$71214b16dbc210d1 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function SideBarSection({ children: children , heading: heading , className: className , isCollapsed: isCollapsed = false , ...props }, ref) {
    if (isCollapsed) return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3058c3202bbcec0b$export$d99097c13d4dac9f), {
        ref: ref,
        ...props,
        children: children
    });
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-sidebar-section", className),
        ...props,
        children: [
            heading ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3dc96cd2fd1a59d9$export$a8a3e93435678ff9), {
                as: "h2",
                children: heading
            }) : undefined,
            children
        ]
    });
});
const $f1d24f0e0d8eafb0$export$614264b7ca4804e6 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function SideBar({ as: SideBarComp = "div" , id: id , top: top , children: children , className: className , ...props }, ref) {
    const isDesktop = (0, $acd2d3fb03fcdf14$export$199d6754bdf4e1e3)("md");
    const sidebarClasses = (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-sidebar", className);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)(SideBarComp, {
        ref: ref,
        className: sidebarClasses,
        ...props,
        children: [
            top,
            !isDesktop ? /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3058c3202bbcec0b$export$a766cd26d0d69044), {
                id: id,
                children: (0, $i684g$react.Children).map(children, (child)=>child && /*#__PURE__*/ (0, $i684g$react.isValidElement)(child) ? /*#__PURE__*/ (0, $i684g$react.cloneElement)(child, {
                        isCollapsed: true
                    }) : undefined)
            }) : /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                id: id,
                children: children
            })
        ]
    });
});


$parcel$exportWildcard($7e6c34139933f91a$exports, $f1d24f0e0d8eafb0$exports);




var $4c0b3135717474bd$exports = {};
var $456c7adea2039386$exports = {};

$parcel$export($456c7adea2039386$exports, "StatusBox", function () { return $456c7adea2039386$export$88b4b1f88672e6b1; });






const $3e4ddf9af35699c6$export$63b4fc557d1c57af = ()=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("circle", {
                cx: "22.5",
                cy: "22.5",
                r: "21.75",
                fill: "white",
                stroke: "#00664F",
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M35 15.5127L18.775 33L11 24.6201L14.2591 21.1074L18.775 25.9746L31.7409 12L35 15.5127Z",
                fill: "#00664F"
            })
        ]
    });
};
const $3e4ddf9af35699c6$export$f7dc499a72baa103 = ()=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("circle", {
                cx: "22.5",
                cy: "22.5",
                r: "21.75",
                fill: "white",
                stroke: "#BE3A34",
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                d: "M24.2969 26.6587H20.6035L19.8315 11.8701H25.0688L24.2969 26.6587ZM19.771 31.8354C19.771 30.9878 19.998 30.347 20.4521 29.9131C20.9062 29.4792 21.5672 29.2622 22.4351 29.2622C23.2726 29.2622 23.9185 29.4842 24.3726 29.9282C24.8368 30.3722 25.0688 31.008 25.0688 31.8354C25.0688 32.6326 24.8368 33.2633 24.3726 33.7275C23.9084 34.1816 23.2625 34.4087 22.4351 34.4087C21.5874 34.4087 20.9315 34.1867 20.4673 33.7427C20.0031 33.2886 19.771 32.6528 19.771 31.8354Z",
                fill: "#BE3A34"
            })
        ]
    });
};
const $3e4ddf9af35699c6$export$d206ce4c12e8ddf6 = ()=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("circle", {
                cx: "22.5",
                cy: "22.5",
                r: "21.75",
                fill: "white",
                stroke: "#0B0C0C",
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("path", {
                d: "M20.2251 12.7026C20.2251 11.1991 21.0627 10.4473 22.7378 10.4473C24.4129 10.4473 25.2505 11.1991 25.2505 12.7026C25.2505 13.4191 25.0386 13.9792 24.6147 14.3828C24.201 14.7764 23.5754 14.9731 22.7378 14.9731C21.0627 14.9731 20.2251 14.2163 20.2251 12.7026ZM25.0386 34H20.4219V17.0771H25.0386V34Z",
                fill: "#0B0C0C"
            })
        ]
    });
};





const $456c7adea2039386$export$88b4b1f88672e6b1 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function StatusBox({ children: children , className: className , title: title , variant: variant , ...props }, ref) {
    const icon = (0, $i684g$react.useMemo)(()=>{
        if (variant === "success") return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3e4ddf9af35699c6$export$63b4fc557d1c57af), {});
        if (variant === "warning") return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3e4ddf9af35699c6$export$f7dc499a72baa103), {});
        return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3e4ddf9af35699c6$export$d206ce4c12e8ddf6), {});
    }, [
        variant
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $41cf19104d9704c5$export$e71c4d32a2263218), {
        variant: variant,
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
            ref: ref,
            className: "mtfh-status-box",
            ...props,
            children: [
                icon,
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                            className: "mtfh-status-heading__title",
                            children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3dc96cd2fd1a59d9$export$a8a3e93435678ff9), {
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


$parcel$exportWildcard($4c0b3135717474bd$exports, $456c7adea2039386$exports);


var $d0b5d72cda5888af$exports = {};
var $a646d1378ec633ee$exports = {};

$parcel$export($a646d1378ec633ee$exports, "StatusHeading", function () { return $a646d1378ec633ee$export$dff1cead12425332; });




const $a646d1378ec633ee$export$dff1cead12425332 = ({ title: title , variant: variant = "base"  })=>{
    const icon = (0, $i684g$react.useMemo)(()=>{
        if (variant === "success") return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3e4ddf9af35699c6$export$63b4fc557d1c57af), {});
        if (variant === "warning") return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3e4ddf9af35699c6$export$f7dc499a72baa103), {});
        return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3e4ddf9af35699c6$export$d206ce4c12e8ddf6), {});
    }, [
        variant
    ]);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        className: "mtfh-status-heading",
        children: [
            icon,
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("h4", {
                className: "lbh-heading-h4 mtfh-status-heading__title",
                children: title
            })
        ]
    });
};


$parcel$exportWildcard($d0b5d72cda5888af$exports, $a646d1378ec633ee$exports);



var $ca5e29ee8084a3f8$exports = {};
var $f938ac4df9e8438f$exports = {};

$parcel$export($f938ac4df9e8438f$exports, "Table", function () { return $f938ac4df9e8438f$export$54ec01a60f47d33d; });
$parcel$export($f938ac4df9e8438f$exports, "Thead", function () { return $f938ac4df9e8438f$export$5de8fa06af5ae15a; });
$parcel$export($f938ac4df9e8438f$exports, "Tbody", function () { return $f938ac4df9e8438f$export$e4d84274604d936d; });
$parcel$export($f938ac4df9e8438f$exports, "Tr", function () { return $f938ac4df9e8438f$export$3be148b8762ca608; });
$parcel$export($f938ac4df9e8438f$exports, "Th", function () { return $f938ac4df9e8438f$export$478f015b832c0fb2; });
$parcel$export($f938ac4df9e8438f$exports, "Td", function () { return $f938ac4df9e8438f$export$8f04ceab90eac988; });
$parcel$export($f938ac4df9e8438f$exports, "TableCaption", function () { return $f938ac4df9e8438f$export$35468a455d619eb3; });




const $f938ac4df9e8438f$export$54ec01a60f47d33d = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Thead({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("table", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-table", "lbh-table", className),
        ...props
    });
});
const $f938ac4df9e8438f$export$5de8fa06af5ae15a = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Thead({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("thead", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-table__head", className),
        ...props
    });
});
const $f938ac4df9e8438f$export$e4d84274604d936d = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Tbody({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("tbody", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-table__body", className),
        ...props
    });
});
const $f938ac4df9e8438f$export$3be148b8762ca608 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Tr({ className: className , ...props }, ref) {
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("tr", {
        ref: ref,
        className: (0, ($parcel$interopDefault($i684g$classnames)))("govuk-table__row", className),
        ...props
    });
});
const $f938ac4df9e8438f$export$478f015b832c0fb2 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Th({ className: className , isNumeric: isNumeric , ...props }, ref) {
    const thClasses = (0, ($parcel$interopDefault($i684g$classnames)))("govuk-table__cell", "govuk-table__header", {
        "govuk-table__cell--numeric": isNumeric
    }, className);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("th", {
        ref: ref,
        className: thClasses,
        ...props
    });
});
const $f938ac4df9e8438f$export$8f04ceab90eac988 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function Td({ className: className , isNumeric: isNumeric , ...props }, ref) {
    const tdClasses = (0, ($parcel$interopDefault($i684g$classnames)))("govuk-table__cell", {
        "govuk-table__cell--numeric": isNumeric
    }, className);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("td", {
        ref: ref,
        className: tdClasses,
        ...props
    });
});
const $f938ac4df9e8438f$export$35468a455d619eb3 = /*#__PURE__*/ (0, $i684g$react.forwardRef)(function TableCaption({ children: children , className: className , variant: variant , ...props }, ref) {
    const captionClasses = (0, ($parcel$interopDefault($i684g$classnames)))("govuk-table__caption", "lbh-table__caption", {
        "govuk-table__caption--s": variant === "small",
        "govuk-table__caption--m": variant === "medium",
        "govuk-table__caption--l": variant === "large",
        "govuk-table__caption--xl": variant === "xlarge"
    }, className);
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("caption", {
        ref: ref,
        className: captionClasses,
        ...props,
        children: children
    });
});


$parcel$exportWildcard($ca5e29ee8084a3f8$exports, $f938ac4df9e8438f$exports);




var $d5fa2c2c976e06f4$exports = {};
var $340619ec69a33671$exports = {};

$parcel$export($340619ec69a33671$exports, "Stepper", function () { return $340619ec69a33671$export$ed8ca599049e8881; });





const $340619ec69a33671$export$ed8ca599049e8881 = ({ activeStep: activeStep = 0 , title: title , children: children , startIndex: startIndex , ...props })=>{
    return /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("div", {
        ...props,
        children: [
            title && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)((0, $3dc96cd2fd1a59d9$export$a8a3e93435678ff9), {
                as: "h3",
                variant: "h3",
                className: "mtfh-stepper__main-title",
                children: title
            }),
            /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
                className: "mtfh-stepper mtfh-stepper--large mtfh-stepper--active",
                children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("ol", {
                    className: "mtfh-stepper",
                    children: (0, $i684g$react.Children).map(children, (child, stepIndex)=>child && /*#__PURE__*/ (0, $i684g$react.isValidElement)(child) && /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("li", {
                            className: (0, ($parcel$interopDefault($i684g$classnames)))("mtfh-stepper__step", {
                                "mtfh-stepper__step--active": stepIndex === activeStep
                            }),
                            children: /*#__PURE__*/ (0, $i684g$react.cloneElement)(child, {
                                ...child.props,
                                stepIndex: startIndex && startIndex > 0 ? startIndex + stepIndex + 1 : stepIndex + 1
                            })
                        }))
                })
            })
        ]
    });
};


var $90d9e621c0f38ee4$exports = {};

$parcel$export($90d9e621c0f38ee4$exports, "Step", function () { return $90d9e621c0f38ee4$export$fd55ce593607084a; });




const $90d9e621c0f38ee4$export$fd55ce593607084a = ({ stepIndex: stepIndex , children: children  })=>/*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("div", {
        className: "mtfh-stepper__header",
        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)((0, $3dc96cd2fd1a59d9$export$a8a3e93435678ff9), {
            as: "h4",
            variant: "h4",
            className: "mtfh-stepper__title",
            children: [
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                    className: "mtfh-stepper__circle mtfh-stepper__circle--number",
                    children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                        className: "mtfh-stepper__circle-inner",
                        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsxs)("span", {
                            className: "mtfh-stepper__circle-background",
                            children: [
                                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                                    className: "govuk-visually-hidden",
                                    children: (0, $99138c4371ee1491$export$2e2bcd8739ae039).components.stepper.step
                                }),
                                stepIndex
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                    children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("button", {
                        className: "mtfh-stepper__button mtfh-stepper__button--title",
                        children: /*#__PURE__*/ (0, $i684g$reactjsxruntime.jsx)("span", {
                            children: children
                        })
                    })
                })
            ]
        })
    });


$parcel$exportWildcard($d5fa2c2c976e06f4$exports, $340619ec69a33671$exports);
$parcel$exportWildcard($d5fa2c2c976e06f4$exports, $90d9e621c0f38ee4$exports);


$parcel$exportWildcard($ba3b58505e93ee14$exports, $b8e52145916624cb$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $6e439be24c76daaa$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $51daab27a361364a$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $0a5014c170d753c4$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $1ad562248bbc59b7$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $0cd95a48d1dcaa91$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $4c8519a2f6e45481$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $dccb41a13ecc3fbf$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $81715dd964e83575$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $3cb78742846f278e$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $5e01b0390258679e$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $7c0c76825baed95e$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $1cb230a5acd30dbe$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $b588b0d721a5aa87$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $dcde123d5eff736d$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $570eaa952d8e00b9$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $75b5dd6c05428eea$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $e5d671463ee8fb76$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $12c1e7079cef95d7$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $57b31647f201adaa$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $5d49091b4fbff3c5$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $165ff1fef9a7a447$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $0fb9a6868d1609bf$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $f7d575a110a1174f$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $3854719fd5a00f63$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $2c5cf46c35ce7028$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $44455de626eb7417$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $f7389a6cf3d553f6$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $17b2842e98f74990$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $3152284388f1a123$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $468b82790ee95cb1$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $33a8008972ce87e5$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $3cd7f2d104444fe6$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $6c59dee70ac360b9$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $c6537740902d4927$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $7e6c34139933f91a$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $0eee8031dfefd309$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $e38ba771f6f65b62$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $4c0b3135717474bd$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $d0b5d72cda5888af$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $a0d1efbed41b76e7$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $ca5e29ee8084a3f8$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $30cb9ca3841e837d$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $b8c89689d2113c90$exports);
$parcel$exportWildcard($ba3b58505e93ee14$exports, $d5fa2c2c976e06f4$exports);



$parcel$exportWildcard(module.exports, $569092d0c967ee8e$exports);
$parcel$exportWildcard(module.exports, $770ca302370776db$exports);
$parcel$exportWildcard(module.exports, $3e992cfbf7a8a728$exports);
$parcel$exportWildcard(module.exports, $f1498986601cb3ee$exports);
$parcel$exportWildcard(module.exports, $6e36880b690f20d7$exports);
$parcel$exportWildcard(module.exports, $ba3b58505e93ee14$exports);
$parcel$exportWildcard(module.exports, $2c0f4283876f600a$exports);


//# sourceMappingURL=main.js.map
