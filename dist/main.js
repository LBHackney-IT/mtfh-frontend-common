require("./main.css");
var $i684g$react = require("react");
var $i684g$classnames = require("classnames");
var $i684g$datefns = require("date-fns");
var $i684g$deepdiff = require("deep-diff");
var $i684g$axios = require("axios");
var $i684g$uuid = require("uuid");
var $i684g$jscookie = require("js-cookie");
var $i684g$jwtdecode = require("jwt-decode");
var $i684g$swr = require("swr");
var $i684g$swrinfinite = require("swr/infinite");
var $i684g$usebreakpoint = require("use-breakpoint");
var $i684g$rxjs = require("rxjs");
var $i684g$reactmergerefs = require("react-merge-refs");
var $i684g$lbhfrontend = require("lbh-frontend");
var $i684g$querystring = require("query-string");
var $i684g$reactrouterdom = require("react-router-dom");
var $i684g$reachdialog = require("@reach/dialog");
require("@reach/dialog/styles.css");
var $i684g$formik = require("formik");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiredb6b"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiredb6b"] = parcelRequire;
}
parcelRequire.register("93WOK", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;
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
var $c76f4f81e9b49394$var$_default = $c76f4f81e9b49394$var$config;
module.exports.default = $c76f4f81e9b49394$var$_default;

});

parcelRequire.register("cGCf8", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;
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
var $99138c4371ee1491$var$_default = $99138c4371ee1491$var$locale;
module.exports.default = $99138c4371ee1491$var$_default;

});

parcelRequire.register("2NZXA", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;
var $0dbe8b95c9171c6a$var$_default = (width)=>{
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
module.exports.default = $0dbe8b95c9171c6a$var$_default;

});

parcelRequire.register("c1SVF", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;

var $8ba205f9e6c283d6$var$_react = $8ba205f9e6c283d6$var$_interopRequireWildcard($i684g$react);

var $8ba205f9e6c283d6$var$_classnames = $8ba205f9e6c283d6$var$_interopRequireDefault($i684g$classnames);

var $7zYHo = parcelRequire("7zYHo");

var $8ba205f9e6c283d6$var$_locale = $8ba205f9e6c283d6$var$_interopRequireDefault((parcelRequire("cGCf8")));

var $jg4db = parcelRequire("jg4db");

var $bpGEa = parcelRequire("bpGEa");

var $3f5PC = parcelRequire("3f5PC");

var $7PPqg = parcelRequire("7PPqg");

function $8ba205f9e6c283d6$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $8ba205f9e6c283d6$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($8ba205f9e6c283d6$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $8ba205f9e6c283d6$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $8ba205f9e6c283d6$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $8ba205f9e6c283d6$var$DESCRIPTION_LENGTH = 50;
const $8ba205f9e6c283d6$var$WorkOrderListItem = (_ref)=>{
    let { workOrder: { dateRaised: dateRaised , priority: priority , tradeDescription: tradeDescription , status: status , description: description , reference: reference  }  } = _ref;
    const { components: components  } = $8ba205f9e6c283d6$var$_locale.default;
    const dateRaisedAt = (0, $8ba205f9e6c283d6$var$_react.useMemo)(()=>(0, $jg4db.formatDate)(dateRaised), [
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
    return /*#__PURE__*/ $8ba205f9e6c283d6$var$_react.default.createElement($7PPqg.LinkBox, null, /*#__PURE__*/ $8ba205f9e6c283d6$var$_react.default.createElement($bpGEa.Card, null, /*#__PURE__*/ $8ba205f9e6c283d6$var$_react.default.createElement($7PPqg.LinkOverlay, null, /*#__PURE__*/ $8ba205f9e6c283d6$var$_react.default.createElement($3f5PC.Link, {
        className: "lbh-link",
        isExternal: true,
        href: `${$7zYHo.config.repairsHubAppUrl}/work-orders/${reference}`
    }, /*#__PURE__*/ $8ba205f9e6c283d6$var$_react.default.createElement("span", {
        className: (0, $8ba205f9e6c283d6$var$_classnames.default)({
            "work-order-list-item__trim": description.length > $8ba205f9e6c283d6$var$DESCRIPTION_LENGTH
        })
    }, tradeDescription, ": ", description.substring(0, $8ba205f9e6c283d6$var$DESCRIPTION_LENGTH)))), /*#__PURE__*/ $8ba205f9e6c283d6$var$_react.default.createElement($bpGEa.CardRows, {
        rows: rows
    }), /*#__PURE__*/ $8ba205f9e6c283d6$var$_react.default.createElement($bpGEa.CardBreak, null), /*#__PURE__*/ $8ba205f9e6c283d6$var$_react.default.createElement("div", {
        className: "work-order-list-item__status"
    }, " ", status)));
};
var $8ba205f9e6c283d6$var$_default = $8ba205f9e6c283d6$var$WorkOrderListItem;
module.exports.default = $8ba205f9e6c283d6$var$_default;

});
parcelRequire.register("7zYHo", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
Object.defineProperty(module.exports, "config", {
    enumerable: true,
    get: function() {
        return $feafc50ee81aeeed$var$_config.default;
    }
});

var $feafc50ee81aeeed$var$_config = $feafc50ee81aeeed$var$_interopRequireDefault((parcelRequire("93WOK")));
function $feafc50ee81aeeed$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

});

parcelRequire.register("jg4db", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $2c0f4283876f600a$var$_exportNames = {
    widthOverrides: true
};
Object.defineProperty(module.exports, "widthOverrides", {
    enumerable: true,
    get: function() {
        return $2c0f4283876f600a$var$_widthOverrides.default;
    }
});

var $2zRtv = parcelRequire("2zRtv");
Object.keys($2zRtv).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call($2c0f4283876f600a$var$_exportNames, key)) return;
    if (key in module.exports && module.exports[key] === $2zRtv[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $2zRtv[key];
        }
    });
});

var $j2ZGT = parcelRequire("j2ZGT");
Object.keys($j2ZGT).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call($2c0f4283876f600a$var$_exportNames, key)) return;
    if (key in module.exports && module.exports[key] === $j2ZGT[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $j2ZGT[key];
        }
    });
});

var $h5yLh = parcelRequire("h5yLh");
Object.keys($h5yLh).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call($2c0f4283876f600a$var$_exportNames, key)) return;
    if (key in module.exports && module.exports[key] === $h5yLh[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $h5yLh[key];
        }
    });
});

var $2c0f4283876f600a$var$_widthOverrides = $2c0f4283876f600a$var$_interopRequireDefault((parcelRequire("2NZXA")));

var $6GFi6 = parcelRequire("6GFi6");
Object.keys($6GFi6).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call($2c0f4283876f600a$var$_exportNames, key)) return;
    if (key in module.exports && module.exports[key] === $6GFi6[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $6GFi6[key];
        }
    });
});
function $2c0f4283876f600a$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

});
parcelRequire.register("2zRtv", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isUnderAge = void 0;


var $h5yLh = parcelRequire("h5yLh");
const $d87b40b2cf165392$var$isUnderAge = (dob, age)=>{
    const isValidDate = (0, $h5yLh.parseDate)(dob);
    if (!isValidDate) return true;
    const ageInYears = (0, $i684g$datefns.differenceInYears)(new Date(), isValidDate);
    return ageInYears < age;
};
module.exports.isUnderAge = $d87b40b2cf165392$var$isUnderAge;

});
parcelRequire.register("h5yLh", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $2FhAq = parcelRequire("2FhAq");
Object.keys($2FhAq).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $2FhAq[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $2FhAq[key];
        }
    });
});

});
parcelRequire.register("2FhAq", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isFutureDate = module.exports.formatTime = module.exports.formatDate = module.exports.dateToString = void 0;
module.exports.parseDate = $91989fb0a0d86f92$var$parseDate;
module.exports.stringToDate = void 0;

const $91989fb0a0d86f92$var$voidDate = new Date("1900-01-01T00:00:00");
function $91989fb0a0d86f92$var$parseDate(date) {
    if (!date) return null;
    const parsedDate = (0, $i684g$datefns.parseISO)(date);
    return !(0, $i684g$datefns.isSameDay)(parsedDate, $91989fb0a0d86f92$var$voidDate) && (0, $i684g$datefns.isValid)(parsedDate) ? parsedDate : null;
}
const $91989fb0a0d86f92$var$formatDate = (date)=>{
    const parsedDate = $91989fb0a0d86f92$var$parseDate(date);
    if (!parsedDate) return "";
    return (0, $i684g$datefns.format)(parsedDate, "dd/MM/yyyy");
};
module.exports.formatDate = $91989fb0a0d86f92$var$formatDate;
const $91989fb0a0d86f92$var$formatTime = (date)=>{
    const parsedDate = $91989fb0a0d86f92$var$parseDate(date);
    if (!parsedDate) return "";
    return (0, $i684g$datefns.format)(parsedDate, "HH:mm:ss");
};
module.exports.formatTime = $91989fb0a0d86f92$var$formatTime;
const $91989fb0a0d86f92$var$isFutureDate = (date)=>{
    const parsedDate = $91989fb0a0d86f92$var$parseDate(date);
    if (!parsedDate) return true;
    return (0, $i684g$datefns.isFuture)(parsedDate);
};
module.exports.isFutureDate = $91989fb0a0d86f92$var$isFutureDate;
const $91989fb0a0d86f92$var$stringToDate = (dateStr, formatStr)=>{
    return (0, $i684g$datefns.parse)(dateStr, formatStr, $91989fb0a0d86f92$var$voidDate);
};
module.exports.stringToDate = $91989fb0a0d86f92$var$stringToDate;
const $91989fb0a0d86f92$var$dateToString = (date, formatStr)=>{
    return (0, $i684g$datefns.format)(date, formatStr);
};
module.exports.dateToString = $91989fb0a0d86f92$var$dateToString;

});



parcelRequire.register("j2ZGT", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.removeWhitespaceAndCapitalise = module.exports.removeWhitespace = module.exports.pluralize = void 0;
const $2513a6ebe66af095$var$removeWhitespace = (value)=>{
    if (value === null || value === undefined) return null;
    return value.replace(/\s/g, "");
};
module.exports.removeWhitespace = $2513a6ebe66af095$var$removeWhitespace;
const $2513a6ebe66af095$var$removeWhitespaceAndCapitalise = (value)=>{
    if (value === null || value === undefined) return null;
    return $2513a6ebe66af095$var$removeWhitespace(value.toUpperCase());
};
module.exports.removeWhitespaceAndCapitalise = $2513a6ebe66af095$var$removeWhitespaceAndCapitalise;
const $2513a6ebe66af095$var$pluralize = (word, value)=>`${word}${Math.abs(value) !== 1 ? "s" : ""}`;
module.exports.pluralize = $2513a6ebe66af095$var$pluralize;

});

parcelRequire.register("6GFi6", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $8B6jN = parcelRequire("8B6jN");
Object.keys($8B6jN).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $8B6jN[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $8B6jN[key];
        }
    });
});

});
parcelRequire.register("8B6jN", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.entityDiff = void 0;

const $91705f1fedfa9a84$var$entityDiff = (lhs, rhs)=>{
    const deepDiff = (0, $i684g$deepdiff.diff)(lhs, rhs) || [];
    return deepDiff.reduce((acc, change)=>{
        const [path] = change.path;
        acc[path] = rhs[path] || null;
        return acc;
    }, {});
};
module.exports.entityDiff = $91705f1fedfa9a84$var$entityDiff;

});



parcelRequire.register("bpGEa", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $gtY72 = parcelRequire("gtY72");
Object.keys($gtY72).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $gtY72[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $gtY72[key];
        }
    });
});

var $7C1xt = parcelRequire("7C1xt");
Object.keys($7C1xt).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $7C1xt[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $7C1xt[key];
        }
    });
});

var $cj4jp = parcelRequire("cj4jp");
Object.keys($cj4jp).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $cj4jp[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $cj4jp[key];
        }
    });
});

});
parcelRequire.register("gtY72", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.CardBreak = void 0;

var $4495762f5b4f652e$var$_react = $4495762f5b4f652e$var$_interopRequireDefault($i684g$react);
function $4495762f5b4f652e$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $4495762f5b4f652e$var$CardBreak = ()=>{
    return /*#__PURE__*/ $4495762f5b4f652e$var$_react.default.createElement("hr", {
        className: "mtfh-card-break"
    });
};
module.exports.CardBreak = $4495762f5b4f652e$var$CardBreak;

});

parcelRequire.register("7C1xt", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Card = void 0;

var $466617e66e33c21f$var$_react = $466617e66e33c21f$var$_interopRequireWildcard($i684g$react);

var $466617e66e33c21f$var$_classnames = $466617e66e33c21f$var$_interopRequireDefault($i684g$classnames);

function $466617e66e33c21f$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $466617e66e33c21f$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($466617e66e33c21f$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $466617e66e33c21f$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $466617e66e33c21f$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $466617e66e33c21f$var$Card = /*#__PURE__*/ (0, $466617e66e33c21f$var$_react.forwardRef)(function Link(_ref, ref) {
    let { as: CardComp = "div" , className: className , children: children  } = _ref;
    return /*#__PURE__*/ $466617e66e33c21f$var$_react.default.createElement(CardComp, {
        ref: ref,
        className: (0, $466617e66e33c21f$var$_classnames.default)("mtfh-card", className)
    }, children);
});
module.exports.Card = $466617e66e33c21f$var$Card;

});

parcelRequire.register("cj4jp", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.CardRows = void 0;

var $b9f5655d8d723cc5$var$_react = $b9f5655d8d723cc5$var$_interopRequireDefault($i684g$react);

var $2izqw = parcelRequire("2izqw");

function $b9f5655d8d723cc5$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $b9f5655d8d723cc5$var$CardRows = (_ref)=>{
    let { rows: rows  } = _ref;
    return /*#__PURE__*/ $b9f5655d8d723cc5$var$_react.default.createElement($2izqw.SummaryList, {
        variant: "inline"
    }, rows.map((row, index)=>/*#__PURE__*/ $b9f5655d8d723cc5$var$_react.default.createElement($2izqw.SummaryListItem, {
            key: index,
            title: `${row.label}:`
        }, row.value)));
};
module.exports.CardRows = $b9f5655d8d723cc5$var$CardRows;

});
parcelRequire.register("2izqw", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $7TEfq = parcelRequire("7TEfq");
Object.keys($7TEfq).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $7TEfq[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $7TEfq[key];
        }
    });
});

});
parcelRequire.register("7TEfq", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.SummaryListItem = module.exports.SummaryList = void 0;

var $93b37cb8d58eee2c$var$_react = $93b37cb8d58eee2c$var$_interopRequireWildcard($i684g$react);

var $93b37cb8d58eee2c$var$_classnames = $93b37cb8d58eee2c$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $93b37cb8d58eee2c$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $93b37cb8d58eee2c$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($93b37cb8d58eee2c$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $93b37cb8d58eee2c$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $93b37cb8d58eee2c$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $93b37cb8d58eee2c$var$_extends() {
    $93b37cb8d58eee2c$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $93b37cb8d58eee2c$var$_extends.apply(this, arguments);
}
const $93b37cb8d58eee2c$var$SummaryListItem = /*#__PURE__*/ (0, $93b37cb8d58eee2c$var$_react.forwardRef)(function SummaryListItem(_ref, ref) {
    let { title: title , actions: actions , children: children , className: className , fallback: fallback , overrides: overrides = [] , ...props } = _ref;
    const value = (0, $93b37cb8d58eee2c$var$_react.useMemo)(()=>typeof children === "string" ? children.trim() : children, [
        children
    ]);
    return /*#__PURE__*/ $93b37cb8d58eee2c$var$_react.default.createElement("div", $93b37cb8d58eee2c$var$_extends({
        ref: ref,
        className: (0, $93b37cb8d58eee2c$var$_classnames.default)("govuk-summary-list__row", className)
    }, props), /*#__PURE__*/ $93b37cb8d58eee2c$var$_react.default.createElement("dt", {
        className: (0, $93b37cb8d58eee2c$var$_classnames.default)("govuk-summary-list__key", (0, $jg4db.widthOverrides)(overrides[0]))
    }, title), /*#__PURE__*/ $93b37cb8d58eee2c$var$_react.default.createElement("dd", {
        className: (0, $93b37cb8d58eee2c$var$_classnames.default)("govuk-summary-list__value", (0, $jg4db.widthOverrides)(overrides[1]))
    }, value || fallback || "N/A"), actions && /*#__PURE__*/ $93b37cb8d58eee2c$var$_react.default.createElement("dd", {
        className: (0, $93b37cb8d58eee2c$var$_classnames.default)("govuk-summary-list__actions", (0, $jg4db.widthOverrides)(overrides[2]))
    }, /*#__PURE__*/ $93b37cb8d58eee2c$var$_react.default.createElement("ul", {
        className: "govuk-summary-list__actions-list"
    }, $93b37cb8d58eee2c$var$_react.Children.map(actions, (action)=>/*#__PURE__*/ $93b37cb8d58eee2c$var$_react.default.createElement("li", {
            key: action.key,
            className: "govuk-summary-list__actions-list-item"
        }, action)))));
});
module.exports.SummaryListItem = $93b37cb8d58eee2c$var$SummaryListItem;
const $93b37cb8d58eee2c$var$SummaryList = /*#__PURE__*/ (0, $93b37cb8d58eee2c$var$_react.forwardRef)(function SummaryList(_ref2, ref) {
    let { variant: variant = "base" , className: className , overrides: overrides , children: children , ...props } = _ref2;
    return /*#__PURE__*/ $93b37cb8d58eee2c$var$_react.default.createElement("dl", $93b37cb8d58eee2c$var$_extends({
        ref: ref,
        className: (0, $93b37cb8d58eee2c$var$_classnames.default)("govuk-summary-list", {
            "govuk-summary-list--no-border": variant !== "border"
        }, {
            "mtfh-summary-list--inline": variant === "inline"
        }, "lbh-summary-list", className)
    }, props), $93b37cb8d58eee2c$var$_react.Children.map(children, (child, index)=>child && /*#__PURE__*/ (0, $93b37cb8d58eee2c$var$_react.isValidElement)(child) && /*#__PURE__*/ (0, $93b37cb8d58eee2c$var$_react.cloneElement)(child, {
            overrides: !child.props.overrides && index === 0 ? overrides : child.props.overrides
        })));
});
module.exports.SummaryList = $93b37cb8d58eee2c$var$SummaryList;

});




parcelRequire.register("3f5PC", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $1Y8FY = parcelRequire("1Y8FY");
Object.keys($1Y8FY).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $1Y8FY[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $1Y8FY[key];
        }
    });
});

});
parcelRequire.register("1Y8FY", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Link = void 0;

var $0ee4d96298d0e0c6$var$_react = $0ee4d96298d0e0c6$var$_interopRequireWildcard($i684g$react);

var $0ee4d96298d0e0c6$var$_classnames = $0ee4d96298d0e0c6$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $0ee4d96298d0e0c6$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $0ee4d96298d0e0c6$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($0ee4d96298d0e0c6$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $0ee4d96298d0e0c6$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $0ee4d96298d0e0c6$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $0ee4d96298d0e0c6$var$_extends() {
    $0ee4d96298d0e0c6$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $0ee4d96298d0e0c6$var$_extends.apply(this, arguments);
}
const $0ee4d96298d0e0c6$var$Link = /*#__PURE__*/ (0, $0ee4d96298d0e0c6$var$_react.forwardRef)(function Link(_ref, ref) {
    let { as: LinkComp = "a" , variant: variant = "link" , isExternal: isExternal = false , className: className , rel: rel , target: target , override: override , ...props } = _ref;
    const linkClasses = (0, $0ee4d96298d0e0c6$var$_classnames.default)(variant !== "native" && {
        "govuk-link lbh-link": variant !== "back-link",
        "govuk-back-link lbh-back-link": variant === "back-link",
        [`lbh-link--${variant}`]: variant !== "link" && variant !== "back-link",
        "lbh-link--no-visited-state": !isExternal
    }, (0, $jg4db.widthOverrides)(override), className);
    return(/*#__PURE__*/ // eslint-disable-next-line react/jsx-no-target-blank
    $0ee4d96298d0e0c6$var$_react.default.createElement(LinkComp, $0ee4d96298d0e0c6$var$_extends({
        ref: ref,
        className: linkClasses,
        rel: isExternal ? "noopener noreferrer" : rel,
        target: isExternal ? "_blank" : target
    }, props)));
});
module.exports.Link = $0ee4d96298d0e0c6$var$Link;

});


parcelRequire.register("7PPqg", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $4YfnZ = parcelRequire("4YfnZ");
Object.keys($4YfnZ).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $4YfnZ[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $4YfnZ[key];
        }
    });
});

});
parcelRequire.register("4YfnZ", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.LinkOverlay = module.exports.LinkBox = void 0;

var $008f064a25cdb713$var$_react = $008f064a25cdb713$var$_interopRequireWildcard($i684g$react);

var $008f064a25cdb713$var$_classnames = $008f064a25cdb713$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $008f064a25cdb713$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $008f064a25cdb713$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($008f064a25cdb713$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $008f064a25cdb713$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $008f064a25cdb713$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $008f064a25cdb713$var$_extends() {
    $008f064a25cdb713$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $008f064a25cdb713$var$_extends.apply(this, arguments);
}
const $008f064a25cdb713$var$LinkOverlay = /*#__PURE__*/ (0, $008f064a25cdb713$var$_react.forwardRef)(function LinkOverlay(_ref, ref) {
    let { as: LinkOverlayComp = "div" , className: className , override: override , ...props } = _ref;
    return /*#__PURE__*/ $008f064a25cdb713$var$_react.default.createElement(LinkOverlayComp, $008f064a25cdb713$var$_extends({
        ref: ref,
        className: (0, $008f064a25cdb713$var$_classnames.default)("mtfh-link-overlay", (0, $jg4db.widthOverrides)(override), className)
    }, props));
});
module.exports.LinkOverlay = $008f064a25cdb713$var$LinkOverlay;
const $008f064a25cdb713$var$LinkBox = /*#__PURE__*/ (0, $008f064a25cdb713$var$_react.forwardRef)(function LinkBox(_ref2, ref) {
    let { as: LinkBoxComp = "div" , className: className , override: override , ...props } = _ref2;
    return /*#__PURE__*/ $008f064a25cdb713$var$_react.default.createElement(LinkBoxComp, $008f064a25cdb713$var$_extends({
        ref: ref,
        className: (0, $008f064a25cdb713$var$_classnames.default)("mtfh-link-box", (0, $jg4db.widthOverrides)(override), className)
    }, props));
});
module.exports.LinkBox = $008f064a25cdb713$var$LinkBox;

});



"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $569092d0c967ee8e$exports = {};
"use strict";
Object.defineProperty($569092d0c967ee8e$exports, "__esModule", {
    value: true
});
var $681e52e5f1c343a3$exports = {};
"use strict";
Object.defineProperty($681e52e5f1c343a3$exports, "__esModule", {
    value: true
});
$681e52e5f1c343a3$exports.isAxiosError = $681e52e5f1c343a3$exports.getAxiosInstance = $681e52e5f1c343a3$exports.createCancelToken = void 0;

var $681e52e5f1c343a3$var$_axios = $681e52e5f1c343a3$var$_interopRequireDefault($i684g$axios);

var $770ca302370776db$exports = {};
"use strict";
Object.defineProperty($770ca302370776db$exports, "__esModule", {
    value: true
});
var $6b4f1832ab8ff3f5$exports = {};
"use strict";
Object.defineProperty($6b4f1832ab8ff3f5$exports, "__esModule", {
    value: true
});
$6b4f1832ab8ff3f5$exports.setAuth = $6b4f1832ab8ff3f5$exports.getAuth = $6b4f1832ab8ff3f5$exports.CommonAuth = void 0;

var $6b4f1832ab8ff3f5$var$_jsCookie = $6b4f1832ab8ff3f5$var$_interopRequireDefault($i684g$jscookie);

var $6b4f1832ab8ff3f5$var$_jwtDecode = $6b4f1832ab8ff3f5$var$_interopRequireDefault($i684g$jwtdecode);
function $6b4f1832ab8ff3f5$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $6b4f1832ab8ff3f5$var$voidUser = {
    token: "",
    sub: "",
    email: "",
    iss: "",
    name: "",
    groups: [],
    iat: Number.NaN
};
let $6b4f1832ab8ff3f5$var$$auth = null;
const $6b4f1832ab8ff3f5$var$getAuth = ()=>{
    if ($6b4f1832ab8ff3f5$var$$auth === null) throw new Error("You must initialise auth. setAuth(auth: CommonAuth)");
    return $6b4f1832ab8ff3f5$var$$auth;
};
$6b4f1832ab8ff3f5$exports.getAuth = $6b4f1832ab8ff3f5$var$getAuth;
const $6b4f1832ab8ff3f5$var$setAuth = (auth)=>{
    $6b4f1832ab8ff3f5$var$$auth = auth;
};
$6b4f1832ab8ff3f5$exports.setAuth = $6b4f1832ab8ff3f5$var$setAuth;
class $6b4f1832ab8ff3f5$var$CommonAuth {
    get user() {
        return this._user;
    }
    parseToken() {
        const token = $6b4f1832ab8ff3f5$var$_jsCookie.default.get(this._authToken) || null;
        if (!token) return $6b4f1832ab8ff3f5$var$voidUser;
        try {
            const decodedToken = (0, $6b4f1832ab8ff3f5$var$_jwtDecode.default)(token);
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
        $6b4f1832ab8ff3f5$var$_jsCookie.default.remove(this._authToken, {
            domain: this._cookieDomain
        });
        window.location.reload();
    }
    login() {
        let redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : `${window.location.origin}/search`;
        this.logout();
        window.location.href = `${this._authDomain}?redirect_uri=${encodeURIComponent(redirectUrl)}`;
    }
    constructor(){
        let authAllowedGroups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [
            "TEST_GROUP"
        ];
        let authDomain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "//auth.hackney.gov.uk/auth";
        let cookieDomain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "hackney.gov.uk";
        let authToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "hackneyToken";
        this._authAllowedGroups = authAllowedGroups;
        this._authDomain = authDomain;
        this._cookieDomain = cookieDomain;
        this._authToken = authToken;
        this._user = this.parseToken();
    }
}
$6b4f1832ab8ff3f5$exports.CommonAuth = $6b4f1832ab8ff3f5$var$CommonAuth;


Object.keys($6b4f1832ab8ff3f5$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $770ca302370776db$exports && $770ca302370776db$exports[key] === $6b4f1832ab8ff3f5$exports[key]) return;
    Object.defineProperty($770ca302370776db$exports, key, {
        enumerable: true,
        get: function() {
            return $6b4f1832ab8ff3f5$exports[key];
        }
    });
});


function $681e52e5f1c343a3$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $681e52e5f1c343a3$var$getAxiosInstance = ()=>{
    const auth = (0, $770ca302370776db$exports.getAuth)();
    const axiosInstance = $681e52e5f1c343a3$var$_axios.default.create({
        responseType: "json"
    });
    axiosInstance.interceptors.request.use((reqConfig)=>{
        const req = {
            ...reqConfig,
            headers: {
                ...reqConfig.headers,
                Authorization: `Bearer ${auth.user?.token}`,
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
$681e52e5f1c343a3$exports.getAxiosInstance = $681e52e5f1c343a3$var$getAxiosInstance;
const $681e52e5f1c343a3$var$createCancelToken = ()=>$681e52e5f1c343a3$var$_axios.default.CancelToken.source();
$681e52e5f1c343a3$exports.createCancelToken = $681e52e5f1c343a3$var$createCancelToken;
const $681e52e5f1c343a3$var$isAxiosError = (e)=>$681e52e5f1c343a3$var$_axios.default.isAxiosError(e);
$681e52e5f1c343a3$exports.isAxiosError = $681e52e5f1c343a3$var$isAxiosError;


Object.keys($681e52e5f1c343a3$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $569092d0c967ee8e$exports && $569092d0c967ee8e$exports[key] === $681e52e5f1c343a3$exports[key]) return;
    Object.defineProperty($569092d0c967ee8e$exports, key, {
        enumerable: true,
        get: function() {
            return $681e52e5f1c343a3$exports[key];
        }
    });
});
var $806744a72941830a$exports = {};
"use strict";
Object.defineProperty($806744a72941830a$exports, "__esModule", {
    value: true
});
var $08fd481a73641560$exports = {};
"use strict";
Object.defineProperty($08fd481a73641560$exports, "__esModule", {
    value: true
});
$08fd481a73641560$exports.axiosFetcher = void 0;
Object.defineProperty($08fd481a73641560$exports, "mutate", {
    enumerable: true,
    get: function() {
        return $08fd481a73641560$var$_swr.mutate;
    }
});
$08fd481a73641560$exports.useAxiosSWRInfinite = $08fd481a73641560$exports.useAxiosSWR = void 0;

var $08fd481a73641560$var$_swr = $08fd481a73641560$var$_interopRequireWildcard($i684g$swr);

var $08fd481a73641560$var$_infinite = $08fd481a73641560$var$_interopRequireDefault($i684g$swrinfinite);

function $08fd481a73641560$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $08fd481a73641560$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($08fd481a73641560$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $08fd481a73641560$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $08fd481a73641560$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $08fd481a73641560$var$axiosFetcher = function() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (url)=>{
        const axiosInstance = (0, $681e52e5f1c343a3$exports.getAxiosInstance)();
        return axiosInstance.get(url, options).then((res)=>res.data);
    };
};
$08fd481a73641560$exports.axiosFetcher = $08fd481a73641560$var$axiosFetcher;
const $08fd481a73641560$var$useAxiosSWR = function(key) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, $08fd481a73641560$var$_swr.default)(key, $08fd481a73641560$var$axiosFetcher(options), {
        shouldRetryOnError: false,
        ...options
    });
};
$08fd481a73641560$exports.useAxiosSWR = $08fd481a73641560$var$useAxiosSWR;
const $08fd481a73641560$var$useAxiosSWRInfinite = function(key) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, $08fd481a73641560$var$_infinite.default)(key, $08fd481a73641560$var$axiosFetcher(options), options);
};
$08fd481a73641560$exports.useAxiosSWRInfinite = $08fd481a73641560$var$useAxiosSWRInfinite;


Object.keys($08fd481a73641560$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $806744a72941830a$exports && $806744a72941830a$exports[key] === $08fd481a73641560$exports[key]) return;
    Object.defineProperty($806744a72941830a$exports, key, {
        enumerable: true,
        get: function() {
            return $08fd481a73641560$exports[key];
        }
    });
});


Object.keys($806744a72941830a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $569092d0c967ee8e$exports && $569092d0c967ee8e$exports[key] === $806744a72941830a$exports[key]) return;
    Object.defineProperty($569092d0c967ee8e$exports, key, {
        enumerable: true,
        get: function() {
            return $806744a72941830a$exports[key];
        }
    });
});


Object.keys($569092d0c967ee8e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $569092d0c967ee8e$exports[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $569092d0c967ee8e$exports[key];
        }
    });
});

Object.keys($770ca302370776db$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $770ca302370776db$exports[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $770ca302370776db$exports[key];
        }
    });
});
var $3e992cfbf7a8a728$exports = {};
"use strict";
Object.defineProperty($3e992cfbf7a8a728$exports, "__esModule", {
    value: true
});
var $acd2d3fb03fcdf14$exports = {};
"use strict";
Object.defineProperty($acd2d3fb03fcdf14$exports, "__esModule", {
    value: true
});
$acd2d3fb03fcdf14$exports.useBreakpointValue = $acd2d3fb03fcdf14$exports.useBreakpoint = $acd2d3fb03fcdf14$exports.queries = $acd2d3fb03fcdf14$exports.BREAKPOINTS = void 0;

var $acd2d3fb03fcdf14$var$_useBreakpoint = $acd2d3fb03fcdf14$var$_interopRequireDefault($i684g$usebreakpoint);
function $acd2d3fb03fcdf14$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $acd2d3fb03fcdf14$var$BREAKPOINTS = {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    "2xl": 1536
};
$acd2d3fb03fcdf14$exports.BREAKPOINTS = $acd2d3fb03fcdf14$var$BREAKPOINTS;
const $acd2d3fb03fcdf14$var$queries = {
    base: "(min-width: 0px) and (max-width: 479px)",
    sm: "(min-width: 480px) and (max-width: 767px)",
    md: "(min-width: 768px) and (max-width: 991px)",
    lg: "(min-width: 992px) and (max-width: 1279px)",
    xl: "(min-width: 1280px) and (max-width: 1535px)",
    "2xl": "(min-width: 1536px)"
};
$acd2d3fb03fcdf14$exports.queries = $acd2d3fb03fcdf14$var$queries;
const $acd2d3fb03fcdf14$var$breakpoints = new Map(Object.entries($acd2d3fb03fcdf14$var$BREAKPOINTS));
const $acd2d3fb03fcdf14$var$useBreakpoint = (breakpoint, defaultBreakpoint)=>{
    const { minWidth: minWidth  } = (0, $acd2d3fb03fcdf14$var$_useBreakpoint.default)($acd2d3fb03fcdf14$var$BREAKPOINTS, defaultBreakpoint);
    const point = $acd2d3fb03fcdf14$var$breakpoints.get(breakpoint);
    if (point !== undefined) return minWidth >= point;
    return undefined;
};
$acd2d3fb03fcdf14$exports.useBreakpoint = $acd2d3fb03fcdf14$var$useBreakpoint;
const $acd2d3fb03fcdf14$var$useBreakpointValue = (breakpointRecord, defaultBreakpoint)=>{
    const { minWidth: minWidth , breakpoint: breakpoint  } = (0, $acd2d3fb03fcdf14$var$_useBreakpoint.default)($acd2d3fb03fcdf14$var$BREAKPOINTS, defaultBreakpoint);
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
$acd2d3fb03fcdf14$exports.useBreakpointValue = $acd2d3fb03fcdf14$var$useBreakpointValue;


Object.keys($acd2d3fb03fcdf14$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3e992cfbf7a8a728$exports && $3e992cfbf7a8a728$exports[key] === $acd2d3fb03fcdf14$exports[key]) return;
    Object.defineProperty($3e992cfbf7a8a728$exports, key, {
        enumerable: true,
        get: function() {
            return $acd2d3fb03fcdf14$exports[key];
        }
    });
});
var $51552beaa5d26bca$exports = {};
"use strict";
Object.defineProperty($51552beaa5d26bca$exports, "__esModule", {
    value: true
});
$51552beaa5d26bca$exports.useCautionaryAlertCodes = void 0;

var $3beb7d3a6fc4ac8c$exports = {};
"use strict";
Object.defineProperty($3beb7d3a6fc4ac8c$exports, "__esModule", {
    value: true
});
var $84a1308d155a914a$exports = {};
"use strict";
Object.defineProperty($84a1308d155a914a$exports, "__esModule", {
    value: true
});
$84a1308d155a914a$exports.useReferenceData = void 0;

var $7zYHo = parcelRequire("7zYHo");

const $84a1308d155a914a$var$useReferenceData = (_ref, options)=>{
    let { category: category , subCategory: subCategory  } = _ref;
    let params = `category=${category}`;
    /* istanbul ignore else */ if (subCategory) params += `&subCategory=${subCategory}`;
    return (0, $569092d0c967ee8e$exports.useAxiosSWR)(`${$7zYHo.config.referenceDataApiUrlV1}/reference-data?${params}`, options);
};
$84a1308d155a914a$exports.useReferenceData = $84a1308d155a914a$var$useReferenceData;


Object.keys($84a1308d155a914a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3beb7d3a6fc4ac8c$exports && $3beb7d3a6fc4ac8c$exports[key] === $84a1308d155a914a$exports[key]) return;
    Object.defineProperty($3beb7d3a6fc4ac8c$exports, key, {
        enumerable: true,
        get: function() {
            return $84a1308d155a914a$exports[key];
        }
    });
});
var $8199d9135329f6a7$exports = {};
"use strict";
Object.defineProperty($8199d9135329f6a7$exports, "__esModule", {
    value: true
});


Object.keys($8199d9135329f6a7$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3beb7d3a6fc4ac8c$exports && $3beb7d3a6fc4ac8c$exports[key] === $8199d9135329f6a7$exports[key]) return;
    Object.defineProperty($3beb7d3a6fc4ac8c$exports, key, {
        enumerable: true,
        get: function() {
            return $8199d9135329f6a7$exports[key];
        }
    });
});



var $51552beaa5d26bca$var$_locale = $51552beaa5d26bca$var$_interopRequireDefault((parcelRequire("cGCf8")));
function $51552beaa5d26bca$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { hooks: $51552beaa5d26bca$var$hooks  } = $51552beaa5d26bca$var$_locale.default;
const { defaultCautionaryAlerts: $51552beaa5d26bca$var$defaultCautionaryAlerts  } = $51552beaa5d26bca$var$hooks;
const $51552beaa5d26bca$var$useCautionaryAlertCodes = ()=>{
    const [cautionaryAlerts, setCautionaryAlerts] = (0, $i684g$react.useState)($51552beaa5d26bca$var$defaultCautionaryAlerts);
    const { data: data , error: error  } = (0, $3beb7d3a6fc4ac8c$exports.useReferenceData)({
        category: "cautionary-alert",
        subCategory: "alert-type"
    });
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
$51552beaa5d26bca$exports.useCautionaryAlertCodes = $51552beaa5d26bca$var$useCautionaryAlertCodes;


Object.keys($51552beaa5d26bca$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3e992cfbf7a8a728$exports && $3e992cfbf7a8a728$exports[key] === $51552beaa5d26bca$exports[key]) return;
    Object.defineProperty($3e992cfbf7a8a728$exports, key, {
        enumerable: true,
        get: function() {
            return $51552beaa5d26bca$exports[key];
        }
    });
});
var $4e8909cc648bafd1$exports = {};
"use strict";
Object.defineProperty($4e8909cc648bafd1$exports, "__esModule", {
    value: true
});
$4e8909cc648bafd1$exports.useConfiguration = void 0;

var $f1498986601cb3ee$exports = {};
"use strict";
Object.defineProperty($f1498986601cb3ee$exports, "__esModule", {
    value: true
});
var $4ed1c8ae8173298c$exports = {};
"use strict";
Object.defineProperty($4ed1c8ae8173298c$exports, "__esModule", {
    value: true
});
$4ed1c8ae8173298c$exports.hydrateConfiguration = $4ed1c8ae8173298c$exports.getFeatureToggle = $4ed1c8ae8173298c$exports.getConfiguration = $4ed1c8ae8173298c$exports.getConfigItem = $4ed1c8ae8173298c$exports.$configuration = void 0;


var $7zYHo = parcelRequire("7zYHo");

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
const $4ed1c8ae8173298c$var$hydrateConfiguration = ()=>{
    try {
        const features = JSON.parse(window.localStorage.getItem("features") || "");
        if (typeof features === "object") return features;
        throw new Error("Invalid feature store in local storage");
    } catch (e) {
        if (localStorage.getItem("features")) window.localStorage.removeItem("features");
    }
    return {};
};
$4ed1c8ae8173298c$exports.hydrateConfiguration = $4ed1c8ae8173298c$var$hydrateConfiguration;
const $4ed1c8ae8173298c$var$$configuration = new $i684g$rxjs.BehaviorSubject($4ed1c8ae8173298c$var$hydrateConfiguration());
$4ed1c8ae8173298c$exports.$configuration = $4ed1c8ae8173298c$var$$configuration;
const $4ed1c8ae8173298c$var$getConfiguration = async ()=>{
    const axiosInstance = (0, $569092d0c967ee8e$exports.getAxiosInstance)();
    try {
        const res = await axiosInstance.get(`${$7zYHo.config.configurationApiUrlV1}/api/v1/configuration?types=MMH`);
        res.data.forEach((_ref)=>{
            let { type: type , featureToggles: featureToggles , configuration: configuration  } = _ref;
            const configs = $4ed1c8ae8173298c$var$$configuration.getValue();
            $4ed1c8ae8173298c$var$$configuration.next({
                ...configs,
                [type]: {
                    featureToggles: featureToggles,
                    configuration: configuration
                }
            });
        });
        window.localStorage.setItem("features", JSON.stringify($4ed1c8ae8173298c$var$$configuration.getValue()));
    } catch (e) {
    // TODO add logging for failed configuration
    }
};
$4ed1c8ae8173298c$exports.getConfiguration = $4ed1c8ae8173298c$var$getConfiguration;
const $4ed1c8ae8173298c$var$getAppConfig = (type)=>{
    const configs = $4ed1c8ae8173298c$var$$configuration.getValue();
    const appConfig = configs[type];
    return appConfig || null;
};
const $4ed1c8ae8173298c$var$getConfigItem = (path)=>{
    const [type, key] = path.split(".");
    const appConfig = $4ed1c8ae8173298c$var$getAppConfig(type);
    return appConfig?.configuration[key] || "";
};
$4ed1c8ae8173298c$exports.getConfigItem = $4ed1c8ae8173298c$var$getConfigItem;
const $4ed1c8ae8173298c$var$getFeatureToggle = (path)=>{
    const [type, key] = path.split(".");
    const appConfig = $4ed1c8ae8173298c$var$getAppConfig(type);
    const value = appConfig?.featureToggles[key];
    return typeof value === "boolean" ? value : false;
};
$4ed1c8ae8173298c$exports.getFeatureToggle = $4ed1c8ae8173298c$var$getFeatureToggle;


Object.keys($4ed1c8ae8173298c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $f1498986601cb3ee$exports && $f1498986601cb3ee$exports[key] === $4ed1c8ae8173298c$exports[key]) return;
    Object.defineProperty($f1498986601cb3ee$exports, key, {
        enumerable: true,
        get: function() {
            return $4ed1c8ae8173298c$exports[key];
        }
    });
});


const $4e8909cc648bafd1$var$useConfiguration = (path)=>{
    const [config, setConfig] = (0, $i684g$react.useState)((0, $f1498986601cb3ee$exports.getConfigItem)(path));
    (0, $i684g$react.useEffect)(()=>{
        const subscription = $f1498986601cb3ee$exports.$configuration.subscribe(()=>{
            setConfig((0, $f1498986601cb3ee$exports.getConfigItem)(path));
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, [
        path
    ]);
    return config;
};
$4e8909cc648bafd1$exports.useConfiguration = $4e8909cc648bafd1$var$useConfiguration;


Object.keys($4e8909cc648bafd1$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3e992cfbf7a8a728$exports && $3e992cfbf7a8a728$exports[key] === $4e8909cc648bafd1$exports[key]) return;
    Object.defineProperty($3e992cfbf7a8a728$exports, key, {
        enumerable: true,
        get: function() {
            return $4e8909cc648bafd1$exports[key];
        }
    });
});
var $b14faf8215ffc715$exports = {};
"use strict";
Object.defineProperty($b14faf8215ffc715$exports, "__esModule", {
    value: true
});
$b14faf8215ffc715$exports.useErrorCodes = void 0;



var $b14faf8215ffc715$var$_locale = $b14faf8215ffc715$var$_interopRequireDefault((parcelRequire("cGCf8")));
function $b14faf8215ffc715$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { hooks: $b14faf8215ffc715$var$hooks  } = $b14faf8215ffc715$var$_locale.default;
const { defaultErrorMessages: $b14faf8215ffc715$var$defaultErrorMessages  } = $b14faf8215ffc715$var$hooks;
const $b14faf8215ffc715$var$useErrorCodes = ()=>{
    const [errorMessages, setErrorMessages] = (0, $i684g$react.useState)($b14faf8215ffc715$var$defaultErrorMessages);
    const { data: data , error: error  } = (0, $3beb7d3a6fc4ac8c$exports.useReferenceData)({
        category: "error-code",
        subCategory: "mmh"
    });
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
$b14faf8215ffc715$exports.useErrorCodes = $b14faf8215ffc715$var$useErrorCodes;


Object.keys($b14faf8215ffc715$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3e992cfbf7a8a728$exports && $3e992cfbf7a8a728$exports[key] === $b14faf8215ffc715$exports[key]) return;
    Object.defineProperty($3e992cfbf7a8a728$exports, key, {
        enumerable: true,
        get: function() {
            return $b14faf8215ffc715$exports[key];
        }
    });
});
var $1be2d82668ff6467$exports = {};
"use strict";
Object.defineProperty($1be2d82668ff6467$exports, "__esModule", {
    value: true
});
$1be2d82668ff6467$exports.useFeatureToggle = void 0;


const $1be2d82668ff6467$var$useFeatureToggle = (path)=>{
    const [toggle, setToggle] = (0, $i684g$react.useState)((0, $f1498986601cb3ee$exports.getFeatureToggle)(path));
    (0, $i684g$react.useEffect)(()=>{
        const subscription = $f1498986601cb3ee$exports.$configuration.subscribe(()=>{
            setToggle((0, $f1498986601cb3ee$exports.getFeatureToggle)(path));
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, [
        path
    ]);
    return toggle;
};
$1be2d82668ff6467$exports.useFeatureToggle = $1be2d82668ff6467$var$useFeatureToggle;


Object.keys($1be2d82668ff6467$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3e992cfbf7a8a728$exports && $3e992cfbf7a8a728$exports[key] === $1be2d82668ff6467$exports[key]) return;
    Object.defineProperty($3e992cfbf7a8a728$exports, key, {
        enumerable: true,
        get: function() {
            return $1be2d82668ff6467$exports[key];
        }
    });
});


Object.keys($3e992cfbf7a8a728$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $3e992cfbf7a8a728$exports[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $3e992cfbf7a8a728$exports[key];
        }
    });
});

Object.keys($f1498986601cb3ee$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $f1498986601cb3ee$exports[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $f1498986601cb3ee$exports[key];
        }
    });
});
var $6e36880b690f20d7$exports = {};
"use strict";
Object.defineProperty($6e36880b690f20d7$exports, "__esModule", {
    value: true
});
var $916f8d12cf0a4a60$exports = {};
"use strict";
Object.defineProperty($916f8d12cf0a4a60$exports, "__esModule", {
    value: true
});
var $1d42ed6d73f0771e$exports = {};
"use strict";
Object.defineProperty($1d42ed6d73f0771e$exports, "__esModule", {
    value: true
});
$1d42ed6d73f0771e$exports.BooleanContextProvider = $1d42ed6d73f0771e$exports.BooleanContext = void 0;

var $1d42ed6d73f0771e$var$_react = $1d42ed6d73f0771e$var$_interopRequireWildcard($i684g$react);
function $1d42ed6d73f0771e$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($1d42ed6d73f0771e$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $1d42ed6d73f0771e$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $1d42ed6d73f0771e$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $1d42ed6d73f0771e$var$BooleanContext = /*#__PURE__*/ (0, $1d42ed6d73f0771e$var$_react.createContext)({
    booleans: {},
    setBooleans: ()=>{}
});
$1d42ed6d73f0771e$exports.BooleanContext = $1d42ed6d73f0771e$var$BooleanContext;
const $1d42ed6d73f0771e$var$BooleanContextProvider = (_ref)=>{
    let { children: children , initialValue: initialValue = {}  } = _ref;
    const [booleans, setBooleansState] = (0, $1d42ed6d73f0771e$var$_react.useState)(initialValue);
    const setBooleans = (0, $1d42ed6d73f0771e$var$_react.useCallback)((newBooleans)=>setBooleansState((current)=>({
                ...current,
                ...newBooleans
            })), [
        setBooleansState
    ]);
    const value = (0, $1d42ed6d73f0771e$var$_react.useMemo)(()=>({
            booleans: booleans,
            setBooleans: setBooleans
        }), [
        booleans,
        setBooleans
    ]);
    return /*#__PURE__*/ $1d42ed6d73f0771e$var$_react.default.createElement($1d42ed6d73f0771e$var$BooleanContext.Provider, {
        value: value
    }, children);
};
$1d42ed6d73f0771e$exports.BooleanContextProvider = $1d42ed6d73f0771e$var$BooleanContextProvider;


Object.keys($1d42ed6d73f0771e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $916f8d12cf0a4a60$exports && $916f8d12cf0a4a60$exports[key] === $1d42ed6d73f0771e$exports[key]) return;
    Object.defineProperty($916f8d12cf0a4a60$exports, key, {
        enumerable: true,
        get: function() {
            return $1d42ed6d73f0771e$exports[key];
        }
    });
});


Object.keys($916f8d12cf0a4a60$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $6e36880b690f20d7$exports && $6e36880b690f20d7$exports[key] === $916f8d12cf0a4a60$exports[key]) return;
    Object.defineProperty($6e36880b690f20d7$exports, key, {
        enumerable: true,
        get: function() {
            return $916f8d12cf0a4a60$exports[key];
        }
    });
});


Object.keys($6e36880b690f20d7$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $6e36880b690f20d7$exports[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $6e36880b690f20d7$exports[key];
        }
    });
});
var $ba3b58505e93ee14$exports = {};
"use strict";
Object.defineProperty($ba3b58505e93ee14$exports, "__esModule", {
    value: true
});
var $b8e52145916624cb$exports = {};
"use strict";
Object.defineProperty($b8e52145916624cb$exports, "__esModule", {
    value: true
});
var $3058c3202bbcec0b$exports = {};
"use strict";
Object.defineProperty($3058c3202bbcec0b$exports, "__esModule", {
    value: true
});
$3058c3202bbcec0b$exports.AccordionItem = $3058c3202bbcec0b$exports.Accordion = void 0;

var $3058c3202bbcec0b$var$_react = $3058c3202bbcec0b$var$_interopRequireWildcard($i684g$react);

var $3058c3202bbcec0b$var$_reactMergeRefs = $3058c3202bbcec0b$var$_interopRequireDefault($i684g$reactmergerefs);

var $3058c3202bbcec0b$var$_classnames = $3058c3202bbcec0b$var$_interopRequireDefault($i684g$classnames);


var $jg4db = parcelRequire("jg4db");
var $57b31647f201adaa$exports = {};
"use strict";
Object.defineProperty($57b31647f201adaa$exports, "__esModule", {
    value: true
});
var $3dc96cd2fd1a59d9$exports = {};
"use strict";
Object.defineProperty($3dc96cd2fd1a59d9$exports, "__esModule", {
    value: true
});
$3dc96cd2fd1a59d9$exports.Heading = void 0;

var $3dc96cd2fd1a59d9$var$_react = $3dc96cd2fd1a59d9$var$_interopRequireWildcard($i684g$react);

var $3dc96cd2fd1a59d9$var$_classnames = $3dc96cd2fd1a59d9$var$_interopRequireDefault($i684g$classnames);

function $3dc96cd2fd1a59d9$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $3dc96cd2fd1a59d9$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($3dc96cd2fd1a59d9$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $3dc96cd2fd1a59d9$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $3dc96cd2fd1a59d9$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $3dc96cd2fd1a59d9$var$_extends() {
    $3dc96cd2fd1a59d9$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $3dc96cd2fd1a59d9$var$_extends.apply(this, arguments);
}
const $3dc96cd2fd1a59d9$var$Heading = /*#__PURE__*/ (0, $3dc96cd2fd1a59d9$var$_react.forwardRef)(function Heading(_ref, ref) {
    let { as: HeadingComp , variant: variant = "h1" , className: className , ...props } = _ref;
    const Comp = HeadingComp || variant;
    return /*#__PURE__*/ $3dc96cd2fd1a59d9$var$_react.default.createElement(Comp, $3dc96cd2fd1a59d9$var$_extends({
        ref: ref,
        className: (0, $3dc96cd2fd1a59d9$var$_classnames.default)(`lbh-heading-${variant}`, className)
    }, props));
});
$3dc96cd2fd1a59d9$exports.Heading = $3dc96cd2fd1a59d9$var$Heading;


Object.keys($3dc96cd2fd1a59d9$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $57b31647f201adaa$exports && $57b31647f201adaa$exports[key] === $3dc96cd2fd1a59d9$exports[key]) return;
    Object.defineProperty($57b31647f201adaa$exports, key, {
        enumerable: true,
        get: function() {
            return $3dc96cd2fd1a59d9$exports[key];
        }
    });
});



function $3058c3202bbcec0b$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $3058c3202bbcec0b$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($3058c3202bbcec0b$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $3058c3202bbcec0b$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $3058c3202bbcec0b$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $3058c3202bbcec0b$var$_extends() {
    $3058c3202bbcec0b$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $3058c3202bbcec0b$var$_extends.apply(this, arguments);
}
const $3058c3202bbcec0b$var$AccordionItem = /*#__PURE__*/ (0, $3058c3202bbcec0b$var$_react.forwardRef)(function AccordionItem(_ref, ref) {
    let { as: AccordionItemComp = "div" , children: children , className: className , id: id , title: title  } = _ref;
    return /*#__PURE__*/ $3058c3202bbcec0b$var$_react.default.createElement(AccordionItemComp, {
        ref: ref,
        className: (0, $3058c3202bbcec0b$var$_classnames.default)("govuk-accordion__section", className)
    }, /*#__PURE__*/ $3058c3202bbcec0b$var$_react.default.createElement("div", {
        className: "govuk-accordion__section-header"
    }, /*#__PURE__*/ $3058c3202bbcec0b$var$_react.default.createElement($57b31647f201adaa$exports.Heading, {
        as: "h3",
        variant: "h5",
        className: "govuk-accordion__section-heading"
    }, /*#__PURE__*/ $3058c3202bbcec0b$var$_react.default.createElement("span", {
        className: "govuk-accordion__section-button",
        id: `accordion-heading-${id}`
    }, title))), /*#__PURE__*/ $3058c3202bbcec0b$var$_react.default.createElement("div", {
        id: `accordion-content-${id}`,
        className: "govuk-accordion__section-content",
        "aria-labelledby": `accordion-heading-${id}`
    }, children));
});
$3058c3202bbcec0b$exports.AccordionItem = $3058c3202bbcec0b$var$AccordionItem;
const $3058c3202bbcec0b$var$Accordion = /*#__PURE__*/ (0, $3058c3202bbcec0b$var$_react.forwardRef)(function Accordion(_ref2, ref) {
    let { as: AccordionComp = "div" , className: className , defaultIndex: defaultIndex , override: override , visuallyHideControls: visuallyHideControls = false , ...props } = _ref2;
    const localRef = (0, $3058c3202bbcec0b$var$_react.useRef)(null);
    const defaultIndexRef = (0, $3058c3202bbcec0b$var$_react.useRef)(defaultIndex);
    (0, $3058c3202bbcec0b$var$_react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) {
            const acc = new $i684g$lbhfrontend.Accordion(localRef.current);
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
    return /*#__PURE__*/ $3058c3202bbcec0b$var$_react.default.createElement(AccordionComp, $3058c3202bbcec0b$var$_extends({
        className: (0, $3058c3202bbcec0b$var$_classnames.default)("govuk-accordion", "lbh-accordion", {
            "lbh-accordion--hide-controls": visuallyHideControls
        }, (0, $jg4db.widthOverrides)(override), className),
        "data-attribute": "value",
        ref: (0, $3058c3202bbcec0b$var$_reactMergeRefs.default)([
            localRef,
            ref
        ])
    }, props));
});
$3058c3202bbcec0b$exports.Accordion = $3058c3202bbcec0b$var$Accordion;


Object.keys($3058c3202bbcec0b$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $b8e52145916624cb$exports && $b8e52145916624cb$exports[key] === $3058c3202bbcec0b$exports[key]) return;
    Object.defineProperty($b8e52145916624cb$exports, key, {
        enumerable: true,
        get: function() {
            return $3058c3202bbcec0b$exports[key];
        }
    });
});


Object.keys($b8e52145916624cb$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $b8e52145916624cb$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $b8e52145916624cb$exports[key];
        }
    });
});
var $6e439be24c76daaa$exports = {};
"use strict";
Object.defineProperty($6e439be24c76daaa$exports, "__esModule", {
    value: true
});
var $fb86b2c76d6dd5be$exports = {};
"use strict";
Object.defineProperty($fb86b2c76d6dd5be$exports, "__esModule", {
    value: true
});
$fb86b2c76d6dd5be$exports.Alert = void 0;

var $fb86b2c76d6dd5be$var$_react = $fb86b2c76d6dd5be$var$_interopRequireWildcard($i684g$react);
var $5d49091b4fbff3c5$exports = {};
"use strict";
Object.defineProperty($5d49091b4fbff3c5$exports, "__esModule", {
    value: true
});
var $5163f4162816ba31$exports = {};
"use strict";
Object.defineProperty($5163f4162816ba31$exports, "__esModule", {
    value: true
});
$5163f4162816ba31$exports.Icon = void 0;

var $5163f4162816ba31$var$_react = $5163f4162816ba31$var$_interopRequireWildcard($i684g$react);

var $5163f4162816ba31$var$_classnames = $5163f4162816ba31$var$_interopRequireDefault($i684g$classnames);

function $5163f4162816ba31$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $5163f4162816ba31$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($5163f4162816ba31$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $5163f4162816ba31$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $5163f4162816ba31$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $5163f4162816ba31$var$_extends() {
    $5163f4162816ba31$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $5163f4162816ba31$var$_extends.apply(this, arguments);
}
const $5163f4162816ba31$var$Icon = /*#__PURE__*/ (0, $5163f4162816ba31$var$_react.forwardRef)(function Icon(_ref, ref) {
    let { width: width , height: height , color: color , className: className , size: size = "1em" , focusable: focusable = false , ...props } = _ref;
    const iconClasses = (0, $5163f4162816ba31$var$_classnames.default)("mtfh-icon", className);
    const style = {};
    if (color && color !== "currentColor") style.color = color;
    return /*#__PURE__*/ $5163f4162816ba31$var$_react.default.createElement("svg", $5163f4162816ba31$var$_extends({
        ref: ref,
        className: iconClasses,
        width: width || size,
        height: height || size,
        focusable: focusable,
        style: style
    }, props));
});
$5163f4162816ba31$exports.Icon = $5163f4162816ba31$var$Icon;


Object.keys($5163f4162816ba31$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $5d49091b4fbff3c5$exports && $5d49091b4fbff3c5$exports[key] === $5163f4162816ba31$exports[key]) return;
    Object.defineProperty($5d49091b4fbff3c5$exports, key, {
        enumerable: true,
        get: function() {
            return $5163f4162816ba31$exports[key];
        }
    });
});


function $fb86b2c76d6dd5be$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($fb86b2c76d6dd5be$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $fb86b2c76d6dd5be$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $fb86b2c76d6dd5be$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $fb86b2c76d6dd5be$var$_extends() {
    $fb86b2c76d6dd5be$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $fb86b2c76d6dd5be$var$_extends.apply(this, arguments);
}
const $fb86b2c76d6dd5be$var$Alert = /*#__PURE__*/ (0, $fb86b2c76d6dd5be$var$_react.forwardRef)(function Spinner(_ref, ref) {
    let { size: size = "24" , ...props } = _ref;
    return /*#__PURE__*/ $fb86b2c76d6dd5be$var$_react.default.createElement($5d49091b4fbff3c5$exports.Icon, $fb86b2c76d6dd5be$var$_extends({
        ref: ref,
        size: size
    }, props), /*#__PURE__*/ $fb86b2c76d6dd5be$var$_react.default.createElement("path", {
        d: "M16.5 42.6212C18.7688 42.6212 20.625 40.7605 20.625 38.4863H12.375C12.375 40.7605 14.2312 42.6212 16.5 42.6212Z",
        fill: "#BE3A34"
    }), /*#__PURE__*/ $fb86b2c76d6dd5be$var$_react.default.createElement("path", {
        d: "M28.875 30.2225V19.8849C28.875 13.5376 25.5131 8.22412 19.5938 6.81821V5.4123C19.5938 3.69627 18.2119 2.31104 16.5 2.31104C14.7881 2.31104 13.4062 3.69627 13.4062 5.4123V6.81821C7.5075 8.22412 4.125 13.517 4.125 19.8849V30.2225L0 34.3575V36.425H33V34.3575L31.1268 32.4797L28.875 30.2225Z",
        fill: "#BE3A34"
    }), /*#__PURE__*/ $fb86b2c76d6dd5be$var$_react.default.createElement("path", {
        d: "M17.5808 25.7373H15.4363L14.988 17.1504H18.0291L17.5808 25.7373ZM14.9529 28.7432C14.9529 28.1924 15.1023 27.8057 15.4011 27.583C15.7058 27.3604 16.072 27.249 16.4998 27.249C16.9158 27.249 17.2732 27.3604 17.572 27.583C17.8767 27.8057 18.0291 28.1924 18.0291 28.7432C18.0291 29.2705 17.8767 29.6514 17.572 29.8857C17.2732 30.1201 16.9158 30.2373 16.4998 30.2373C16.072 30.2373 15.7058 30.1201 15.4011 29.8857C15.1023 29.6514 14.9529 29.2705 14.9529 28.7432Z",
        fill: "white"
    }));
});
$fb86b2c76d6dd5be$exports.Alert = $fb86b2c76d6dd5be$var$Alert;


Object.keys($fb86b2c76d6dd5be$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $6e439be24c76daaa$exports && $6e439be24c76daaa$exports[key] === $fb86b2c76d6dd5be$exports[key]) return;
    Object.defineProperty($6e439be24c76daaa$exports, key, {
        enumerable: true,
        get: function() {
            return $fb86b2c76d6dd5be$exports[key];
        }
    });
});


Object.keys($6e439be24c76daaa$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $6e439be24c76daaa$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $6e439be24c76daaa$exports[key];
        }
    });
});
var $51daab27a361364a$exports = {};
"use strict";
Object.defineProperty($51daab27a361364a$exports, "__esModule", {
    value: true
});
var $c76f7478b8884a6c$exports = {};
"use strict";
Object.defineProperty($c76f7478b8884a6c$exports, "__esModule", {
    value: true
});
$c76f7478b8884a6c$exports.Button = void 0;

var $c76f7478b8884a6c$var$_react = $c76f7478b8884a6c$var$_interopRequireWildcard($i684g$react);

var $c76f7478b8884a6c$var$_classnames = $c76f7478b8884a6c$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $c76f7478b8884a6c$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $c76f7478b8884a6c$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($c76f7478b8884a6c$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $c76f7478b8884a6c$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $c76f7478b8884a6c$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $c76f7478b8884a6c$var$_extends() {
    $c76f7478b8884a6c$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $c76f7478b8884a6c$var$_extends.apply(this, arguments);
}
const $c76f7478b8884a6c$var$AddIcon = ()=>{
    return /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12"
    }, /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement("path", {
        d: "M6.94 0L5 0V12H6.94V0Z"
    }), /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement("path", {
        d: "M12 5H0V7H12V5Z"
    }));
};
const $c76f7478b8884a6c$var$ChevronIcon = ()=>{
    return /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement("svg", {
        width: "20",
        height: "22",
        viewBox: "0 0 20 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 0H8.54573L20 10H11.4543L0 0Z",
        fill: "white"
    }), /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 22L8.54573 22L20 10H11.4543L0 22Z",
        fill: "#96CCAE"
    }));
};
const $c76f7478b8884a6c$var$Button = /*#__PURE__*/ (0, $c76f7478b8884a6c$var$_react.forwardRef)(function Button(_ref, ref) {
    let { as: ButtonComp = "button" , variant: variant = "primary" , isLoading: isLoading = false , loadingText: loadingText , isDisabled: isDisabled , children: children , className: className , override: override , ...props } = _ref;
    const buttonClasses = (0, $c76f7478b8884a6c$var$_classnames.default)("govuk-button", "lbh-button", {
        "govuk-button--primary lbh-button--add": variant === "add",
        "lbh-button--chevron": variant === "chevron",
        "govuk-button--secondary lbh-button--secondary": variant === "secondary",
        "lbh-button--disabled govuk-button--disabled": isDisabled
    }, (0, $jg4db.widthOverrides)(override), className);
    const disabled = isDisabled || isLoading || undefined;
    return /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement(ButtonComp, $c76f7478b8884a6c$var$_extends({
        ref: ref,
        className: buttonClasses,
        type: ButtonComp === "button" ? "button" : undefined,
        disabled: ButtonComp === "button" ? disabled : undefined,
        "aria-disabled": disabled
    }, props), variant === "add" && !isLoading && /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement($c76f7478b8884a6c$var$AddIcon, null), isLoading && /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement("span", {
        className: "button-loading-indicator"
    }, /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement("span", null, "Loading...")), isLoading && loadingText ? loadingText : children, variant === "chevron" && /*#__PURE__*/ $c76f7478b8884a6c$var$_react.default.createElement($c76f7478b8884a6c$var$ChevronIcon, null));
});
$c76f7478b8884a6c$exports.Button = $c76f7478b8884a6c$var$Button;


Object.keys($c76f7478b8884a6c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $51daab27a361364a$exports && $51daab27a361364a$exports[key] === $c76f7478b8884a6c$exports[key]) return;
    Object.defineProperty($51daab27a361364a$exports, key, {
        enumerable: true,
        get: function() {
            return $c76f7478b8884a6c$exports[key];
        }
    });
});


Object.keys($51daab27a361364a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $51daab27a361364a$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $51daab27a361364a$exports[key];
        }
    });
});
var $0a5014c170d753c4$exports = {};
"use strict";
Object.defineProperty($0a5014c170d753c4$exports, "__esModule", {
    value: true
});
var $41cf19104d9704c5$exports = {};
"use strict";
Object.defineProperty($41cf19104d9704c5$exports, "__esModule", {
    value: true
});
$41cf19104d9704c5$exports.Box = void 0;

var $41cf19104d9704c5$var$_react = $41cf19104d9704c5$var$_interopRequireWildcard($i684g$react);

var $41cf19104d9704c5$var$_classnames = $41cf19104d9704c5$var$_interopRequireDefault($i684g$classnames);

function $41cf19104d9704c5$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $41cf19104d9704c5$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($41cf19104d9704c5$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $41cf19104d9704c5$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $41cf19104d9704c5$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $41cf19104d9704c5$var$Box = /*#__PURE__*/ (0, $41cf19104d9704c5$var$_react.forwardRef)(function Box(_ref, ref) {
    let { as: BoxComponent = "div" , variant: variant = "default" , children: children  } = _ref;
    const classes = {
        "mtfh-box": true,
        "mtfh-box--success": variant === "success",
        "mtfh-box--warning": variant === "warning"
    };
    return /*#__PURE__*/ $41cf19104d9704c5$var$_react.default.createElement(BoxComponent, {
        ref: ref,
        className: (0, $41cf19104d9704c5$var$_classnames.default)(classes)
    }, children);
});
$41cf19104d9704c5$exports.Box = $41cf19104d9704c5$var$Box;


Object.keys($41cf19104d9704c5$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0a5014c170d753c4$exports && $0a5014c170d753c4$exports[key] === $41cf19104d9704c5$exports[key]) return;
    Object.defineProperty($0a5014c170d753c4$exports, key, {
        enumerable: true,
        get: function() {
            return $41cf19104d9704c5$exports[key];
        }
    });
});


Object.keys($0a5014c170d753c4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $0a5014c170d753c4$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $0a5014c170d753c4$exports[key];
        }
    });
});
var $1ad562248bbc59b7$exports = {};
"use strict";
Object.defineProperty($1ad562248bbc59b7$exports, "__esModule", {
    value: true
});
var $9de03c3a1a10d852$exports = {};
"use strict";
Object.defineProperty($9de03c3a1a10d852$exports, "__esModule", {
    value: true
});
$9de03c3a1a10d852$exports.CardList = void 0;

var $9de03c3a1a10d852$var$_react = $9de03c3a1a10d852$var$_interopRequireDefault($i684g$react);

function $9de03c3a1a10d852$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $9de03c3a1a10d852$var$CardList = (_ref)=>{
    let { children: children  } = _ref;
    return /*#__PURE__*/ $9de03c3a1a10d852$var$_react.default.createElement("div", {
        className: "mtfh-card-list"
    }, children);
};
$9de03c3a1a10d852$exports.CardList = $9de03c3a1a10d852$var$CardList;


Object.keys($9de03c3a1a10d852$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $1ad562248bbc59b7$exports && $1ad562248bbc59b7$exports[key] === $9de03c3a1a10d852$exports[key]) return;
    Object.defineProperty($1ad562248bbc59b7$exports, key, {
        enumerable: true,
        get: function() {
            return $9de03c3a1a10d852$exports[key];
        }
    });
});


Object.keys($1ad562248bbc59b7$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $1ad562248bbc59b7$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $1ad562248bbc59b7$exports[key];
        }
    });
});
var $0cd95a48d1dcaa91$exports = {};
"use strict";
Object.defineProperty($0cd95a48d1dcaa91$exports, "__esModule", {
    value: true
});
var $72f26d7d8c275005$exports = {};
"use strict";
Object.defineProperty($72f26d7d8c275005$exports, "__esModule", {
    value: true
});
$72f26d7d8c275005$exports.Center = void 0;

var $72f26d7d8c275005$var$_react = $72f26d7d8c275005$var$_interopRequireWildcard($i684g$react);

var $72f26d7d8c275005$var$_classnames = $72f26d7d8c275005$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $72f26d7d8c275005$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $72f26d7d8c275005$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($72f26d7d8c275005$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $72f26d7d8c275005$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $72f26d7d8c275005$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $72f26d7d8c275005$var$_extends() {
    $72f26d7d8c275005$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $72f26d7d8c275005$var$_extends.apply(this, arguments);
}
const $72f26d7d8c275005$var$Center = /*#__PURE__*/ (0, $72f26d7d8c275005$var$_react.forwardRef)(function Center(_ref, ref) {
    let { as: CenterComp = "div" , horizontally: horizontally = true , vertically: vertically = true , className: className , override: override , ...props } = _ref;
    return /*#__PURE__*/ $72f26d7d8c275005$var$_react.default.createElement(CenterComp, $72f26d7d8c275005$var$_extends({
        ref: ref,
        className: (0, $72f26d7d8c275005$var$_classnames.default)("mtfh-center", {
            "mtfh-center--horizontal": horizontally,
            "mtfh-center--vertical": vertically
        }, (0, $jg4db.widthOverrides)(override), className)
    }, props));
});
$72f26d7d8c275005$exports.Center = $72f26d7d8c275005$var$Center;


Object.keys($72f26d7d8c275005$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0cd95a48d1dcaa91$exports && $0cd95a48d1dcaa91$exports[key] === $72f26d7d8c275005$exports[key]) return;
    Object.defineProperty($0cd95a48d1dcaa91$exports, key, {
        enumerable: true,
        get: function() {
            return $72f26d7d8c275005$exports[key];
        }
    });
});


Object.keys($0cd95a48d1dcaa91$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $0cd95a48d1dcaa91$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $0cd95a48d1dcaa91$exports[key];
        }
    });
});
var $4c8519a2f6e45481$exports = {};
"use strict";
Object.defineProperty($4c8519a2f6e45481$exports, "__esModule", {
    value: true
});
var $3033f0a79c2d3df0$exports = {};
"use strict";
Object.defineProperty($3033f0a79c2d3df0$exports, "__esModule", {
    value: true
});
$3033f0a79c2d3df0$exports.CheckboxGroup = $3033f0a79c2d3df0$exports.CheckboxConditional = $3033f0a79c2d3df0$exports.Checkbox = void 0;

var $3033f0a79c2d3df0$var$_react = $3033f0a79c2d3df0$var$_interopRequireWildcard($i684g$react);

var $3033f0a79c2d3df0$var$_reactMergeRefs = $3033f0a79c2d3df0$var$_interopRequireDefault($i684g$reactmergerefs);

var $3033f0a79c2d3df0$var$_classnames = $3033f0a79c2d3df0$var$_interopRequireDefault($i684g$classnames);


function $3033f0a79c2d3df0$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $3033f0a79c2d3df0$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($3033f0a79c2d3df0$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $3033f0a79c2d3df0$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $3033f0a79c2d3df0$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $3033f0a79c2d3df0$var$_extends() {
    $3033f0a79c2d3df0$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $3033f0a79c2d3df0$var$_extends.apply(this, arguments);
}
const $3033f0a79c2d3df0$var$Checkbox = /*#__PURE__*/ (0, $3033f0a79c2d3df0$var$_react.forwardRef)(function Checkbox(_ref, ref) {
    let { id: id , className: className , type: type = "checkbox" , hint: hint , children: children , conditionalId: conditionalId , error: error , ...props } = _ref;
    return /*#__PURE__*/ $3033f0a79c2d3df0$var$_react.default.createElement("div", {
        className: (0, $3033f0a79c2d3df0$var$_classnames.default)("govuk-checkboxes__item", className)
    }, /*#__PURE__*/ $3033f0a79c2d3df0$var$_react.default.createElement("input", $3033f0a79c2d3df0$var$_extends({
        ref: ref,
        id: id,
        className: "govuk-checkboxes__input",
        type: type,
        "aria-describedby": hint ? `${id}-hint` : undefined,
        "data-aria-controls": conditionalId
    }, props)), /*#__PURE__*/ $3033f0a79c2d3df0$var$_react.default.createElement("label", {
        className: "govuk-label govuk-checkboxes__label",
        htmlFor: id
    }, children), hint ? /*#__PURE__*/ $3033f0a79c2d3df0$var$_react.default.createElement("span", {
        id: `${id}-hint`,
        className: "govuk-hint govuk-checkboxes__hint lbh-hint"
    }, hint) : null);
});
$3033f0a79c2d3df0$exports.Checkbox = $3033f0a79c2d3df0$var$Checkbox;
const $3033f0a79c2d3df0$var$CheckboxConditional = /*#__PURE__*/ (0, $3033f0a79c2d3df0$var$_react.forwardRef)(function CheckboxConditional(props, ref) {
    return /*#__PURE__*/ $3033f0a79c2d3df0$var$_react.default.createElement("div", $3033f0a79c2d3df0$var$_extends({
        ref: ref,
        className: "govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
    }, props));
});
$3033f0a79c2d3df0$exports.CheckboxConditional = $3033f0a79c2d3df0$var$CheckboxConditional;
const $3033f0a79c2d3df0$var$CheckboxGroup = /*#__PURE__*/ (0, $3033f0a79c2d3df0$var$_react.forwardRef)(function CheckboxGroup(_ref2, ref) {
    let { variant: variant = "base" , children: children , error: error , ...props } = _ref2;
    const localRef = (0, $3033f0a79c2d3df0$var$_react.useRef)();
    (0, $3033f0a79c2d3df0$var$_react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) new $i684g$lbhfrontend.Checkboxes(localRef.current).init();
    }, []);
    const hasConditionals = (0, $3033f0a79c2d3df0$var$_react.useMemo)(()=>$3033f0a79c2d3df0$var$_react.Children.toArray(children).some((child)=>/*#__PURE__*/ (0, $3033f0a79c2d3df0$var$_react.isValidElement)(child) && child.type === $3033f0a79c2d3df0$var$CheckboxConditional), [
        children
    ]);
    return /*#__PURE__*/ $3033f0a79c2d3df0$var$_react.default.createElement("div", $3033f0a79c2d3df0$var$_extends({
        ref: (0, $3033f0a79c2d3df0$var$_reactMergeRefs.default)([
            localRef,
            ref
        ]),
        className: (0, $3033f0a79c2d3df0$var$_classnames.default)("govuk-checkboxes", {
            "govuk-checkboxes--small": variant === "small",
            "govuk-checkboxes--conditionals": hasConditionals
        }, "lbh-checkboxes")
    }, props), children);
});
$3033f0a79c2d3df0$exports.CheckboxGroup = $3033f0a79c2d3df0$var$CheckboxGroup;


Object.keys($3033f0a79c2d3df0$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $4c8519a2f6e45481$exports && $4c8519a2f6e45481$exports[key] === $3033f0a79c2d3df0$exports[key]) return;
    Object.defineProperty($4c8519a2f6e45481$exports, key, {
        enumerable: true,
        get: function() {
            return $3033f0a79c2d3df0$exports[key];
        }
    });
});


Object.keys($4c8519a2f6e45481$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $4c8519a2f6e45481$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $4c8519a2f6e45481$exports[key];
        }
    });
});
var $dccb41a13ecc3fbf$exports = {};
"use strict";
Object.defineProperty($dccb41a13ecc3fbf$exports, "__esModule", {
    value: true
});
var $3d61aa79924b8d53$exports = {};
"use strict";
Object.defineProperty($3d61aa79924b8d53$exports, "__esModule", {
    value: true
});
$3d61aa79924b8d53$exports.Checklist = void 0;

var $3d61aa79924b8d53$var$_react = $3d61aa79924b8d53$var$_interopRequireDefault($i684g$react);

function $3d61aa79924b8d53$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $3d61aa79924b8d53$var$CrossIcon = ()=>{
    return /*#__PURE__*/ $3d61aa79924b8d53$var$_react.default.createElement("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ $3d61aa79924b8d53$var$_react.default.createElement("path", {
        d: "M5 5L23 23M23 5L5 23",
        stroke: "inherit",
        strokeWidth: "6",
        strokeLinecap: "square"
    }));
};
const $3d61aa79924b8d53$var$TickIcon = ()=>{
    return /*#__PURE__*/ $3d61aa79924b8d53$var$_react.default.createElement("svg", {
        width: "31",
        height: "24",
        viewBox: "0 0 31 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ $3d61aa79924b8d53$var$_react.default.createElement("path", {
        d: "M26 5L12 19L5 12",
        stroke: "inherit",
        strokeWidth: "6",
        strokeLinecap: "square"
    }));
};
const $3d61aa79924b8d53$var$Checklist = (_ref)=>{
    let { items: items  } = _ref;
    return /*#__PURE__*/ $3d61aa79924b8d53$var$_react.default.createElement("ul", {
        className: "mtfh-checklist"
    }, items.map((item, index)=>/*#__PURE__*/ $3d61aa79924b8d53$var$_react.default.createElement("li", {
            key: index
        }, /*#__PURE__*/ $3d61aa79924b8d53$var$_react.default.createElement("span", {
            className: `mtfh-checklist__${item.success ? "tick" : "cross"}-icon`
        }, item.success ? /*#__PURE__*/ $3d61aa79924b8d53$var$_react.default.createElement($3d61aa79924b8d53$var$TickIcon, null) : /*#__PURE__*/ $3d61aa79924b8d53$var$_react.default.createElement($3d61aa79924b8d53$var$CrossIcon, null)), item.label)));
};
$3d61aa79924b8d53$exports.Checklist = $3d61aa79924b8d53$var$Checklist;


Object.keys($3d61aa79924b8d53$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $dccb41a13ecc3fbf$exports && $dccb41a13ecc3fbf$exports[key] === $3d61aa79924b8d53$exports[key]) return;
    Object.defineProperty($dccb41a13ecc3fbf$exports, key, {
        enumerable: true,
        get: function() {
            return $3d61aa79924b8d53$exports[key];
        }
    });
});


Object.keys($dccb41a13ecc3fbf$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $dccb41a13ecc3fbf$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $dccb41a13ecc3fbf$exports[key];
        }
    });
});
var $81715dd964e83575$exports = {};
"use strict";
Object.defineProperty($81715dd964e83575$exports, "__esModule", {
    value: true
});
var $0749ea49dee81dcd$exports = {};
"use strict";
Object.defineProperty($0749ea49dee81dcd$exports, "__esModule", {
    value: true
});
$0749ea49dee81dcd$exports.CommentList = void 0;

var $0749ea49dee81dcd$var$_react = $0749ea49dee81dcd$var$_interopRequireWildcard($i684g$react);
var $696e7059d47372ac$exports = {};
"use strict";
Object.defineProperty($696e7059d47372ac$exports, "__esModule", {
    value: true
});
var $abc8a1166444b126$exports = {};
"use strict";
Object.defineProperty($abc8a1166444b126$exports, "__esModule", {
    value: true
});
$abc8a1166444b126$exports.useComments = $abc8a1166444b126$exports.addComment = void 0;



var $7zYHo = parcelRequire("7zYHo");

const $abc8a1166444b126$var$useComments = function(id) {
    let { pageSize: pageSize = 5 , ...options } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, $569092d0c967ee8e$exports.useAxiosSWRInfinite)((page, previous)=>{
        if (!id || previous && !previous?.paginationDetails?.nextToken) return null;
        const params = {
            targetId: id,
            pageSize: pageSize
        };
        if (page !== 0 && previous?.paginationDetails.nextToken) params.paginationToken = previous.paginationDetails.nextToken;
        return `${$7zYHo.config.notesApiUrlV2}/notes?${(0, $i684g$querystring.stringify)(params)}`;
    }, options);
};
$abc8a1166444b126$exports.useComments = $abc8a1166444b126$var$useComments;
const $abc8a1166444b126$var$addComment = async (data)=>{
    const { sub: id , email: email , name: fullName  } = (0, $770ca302370776db$exports.getAuth)().user;
    const axiosInstance = (0, $569092d0c967ee8e$exports.getAxiosInstance)();
    const { data: comment  } = await axiosInstance.post(`${$7zYHo.config.notesApiUrlV2}/notes`, {
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
$abc8a1166444b126$exports.addComment = $abc8a1166444b126$var$addComment;


Object.keys($abc8a1166444b126$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $696e7059d47372ac$exports && $696e7059d47372ac$exports[key] === $abc8a1166444b126$exports[key]) return;
    Object.defineProperty($696e7059d47372ac$exports, key, {
        enumerable: true,
        get: function() {
            return $abc8a1166444b126$exports[key];
        }
    });
});
var $a195bf3569f705b5$exports = {};
"use strict";
Object.defineProperty($a195bf3569f705b5$exports, "__esModule", {
    value: true
});


Object.keys($a195bf3569f705b5$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $696e7059d47372ac$exports && $696e7059d47372ac$exports[key] === $a195bf3569f705b5$exports[key]) return;
    Object.defineProperty($696e7059d47372ac$exports, key, {
        enumerable: true,
        get: function() {
            return $a195bf3569f705b5$exports[key];
        }
    });
});




var $0749ea49dee81dcd$var$_locale = $0749ea49dee81dcd$var$_interopRequireDefault((parcelRequire("cGCf8")));

var $570eaa952d8e00b9$exports = {};
"use strict";
Object.defineProperty($570eaa952d8e00b9$exports, "__esModule", {
    value: true
});
var $c409b756a3ce249f$exports = {};
"use strict";
Object.defineProperty($c409b756a3ce249f$exports, "__esModule", {
    value: true
});
$c409b756a3ce249f$exports.ErrorSummary = void 0;

var $c409b756a3ce249f$var$_react = $c409b756a3ce249f$var$_interopRequireWildcard($i684g$react);

var $c409b756a3ce249f$var$_reactMergeRefs = $c409b756a3ce249f$var$_interopRequireDefault($i684g$reactmergerefs);

var $c409b756a3ce249f$var$_classnames = $c409b756a3ce249f$var$_interopRequireDefault($i684g$classnames);


var $jg4db = parcelRequire("jg4db");

function $c409b756a3ce249f$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $c409b756a3ce249f$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($c409b756a3ce249f$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $c409b756a3ce249f$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $c409b756a3ce249f$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $c409b756a3ce249f$var$_extends() {
    $c409b756a3ce249f$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $c409b756a3ce249f$var$_extends.apply(this, arguments);
}
const $c409b756a3ce249f$var$ErrorSummary = /*#__PURE__*/ (0, $c409b756a3ce249f$var$_react.forwardRef)(function ErrorSummary(_ref, ref) {
    let { as: ErrorSummaryComp = "div" , id: id , title: title , description: description , className: className , children: children , reFocus: reFocus , override: override , ...props } = _ref;
    const localRef = (0, $c409b756a3ce249f$var$_react.useRef)(null);
    (0, $c409b756a3ce249f$var$_react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) {
            // eslint-disable-next-line no-new
            new $i684g$lbhfrontend.ErrorSummary(localRef.current);
            localRef.current.scrollIntoView(true);
        }
    }, []);
    (0, $c409b756a3ce249f$var$_react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) localRef.current.scrollIntoView(true);
    }, [
        reFocus
    ]);
    return /*#__PURE__*/ $c409b756a3ce249f$var$_react.default.createElement(ErrorSummaryComp, $c409b756a3ce249f$var$_extends({
        ref: (0, $c409b756a3ce249f$var$_reactMergeRefs.default)([
            localRef,
            ref
        ]),
        className: (0, $c409b756a3ce249f$var$_classnames.default)("govuk-error-summary", "lbh-error-summary", (0, $jg4db.widthOverrides)(override), className),
        "aria-labelledby": id,
        role: "alert"
    }, props), /*#__PURE__*/ $c409b756a3ce249f$var$_react.default.createElement("h2", {
        className: "govuk-error-summary__title",
        id: id
    }, title), description || children ? /*#__PURE__*/ $c409b756a3ce249f$var$_react.default.createElement("div", {
        className: "govuk-error-summary__body"
    }, description ? /*#__PURE__*/ $c409b756a3ce249f$var$_react.default.createElement("p", null, description) : null, children) : null);
});
$c409b756a3ce249f$exports.ErrorSummary = $c409b756a3ce249f$var$ErrorSummary;


Object.keys($c409b756a3ce249f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $570eaa952d8e00b9$exports && $570eaa952d8e00b9$exports[key] === $c409b756a3ce249f$exports[key]) return;
    Object.defineProperty($570eaa952d8e00b9$exports, key, {
        enumerable: true,
        get: function() {
            return $c409b756a3ce249f$exports[key];
        }
    });
});
var $07e7c452d24206cf$exports = {};
"use strict";
Object.defineProperty($07e7c452d24206cf$exports, "__esModule", {
    value: true
});
$07e7c452d24206cf$exports.ConflictErrorSummary = void 0;

var $07e7c452d24206cf$var$_react = $07e7c452d24206cf$var$_interopRequireDefault($i684g$react);

var $07e7c452d24206cf$var$_locale = $07e7c452d24206cf$var$_interopRequireDefault((parcelRequire("cGCf8")));

var $2izqw = parcelRequire("2izqw");

function $07e7c452d24206cf$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $07e7c452d24206cf$var$_extends() {
    $07e7c452d24206cf$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $07e7c452d24206cf$var$_extends.apply(this, arguments);
}
const { changesNotSaved: $07e7c452d24206cf$var$changesNotSaved , anotherUserMadeEdit: $07e7c452d24206cf$var$anotherUserMadeEdit , youEntered: $07e7c452d24206cf$var$youEntered , toSaveMakeEdit: $07e7c452d24206cf$var$toSaveMakeEdit  } = $07e7c452d24206cf$var$_locale.default.components.conflictErrorSummary;
const $07e7c452d24206cf$var$ConflictErrorSummary = (_ref)=>{
    let { updatedFields: updatedFields , fieldLocale: fieldLocale , fieldTransforms: fieldTransforms , title: title = $07e7c452d24206cf$var$changesNotSaved , description: description = $07e7c452d24206cf$var$anotherUserMadeEdit , footNote: footNote = $07e7c452d24206cf$var$toSaveMakeEdit , ...props } = _ref;
    const keys = Object.keys(updatedFields || {});
    return /*#__PURE__*/ $07e7c452d24206cf$var$_react.default.createElement($c409b756a3ce249f$exports.ErrorSummary, $07e7c452d24206cf$var$_extends({
        className: "mtfh-change-conflict",
        title: title,
        description: description
    }, props), keys.length > 0 && updatedFields && /*#__PURE__*/ $07e7c452d24206cf$var$_react.default.createElement($07e7c452d24206cf$var$_react.default.Fragment, null, /*#__PURE__*/ $07e7c452d24206cf$var$_react.default.createElement("p", null, $07e7c452d24206cf$var$youEntered), /*#__PURE__*/ $07e7c452d24206cf$var$_react.default.createElement($2izqw.SummaryList, {
        variant: "inline"
    }, Object.keys(updatedFields).map((key)=>/*#__PURE__*/ $07e7c452d24206cf$var$_react.default.createElement($2izqw.SummaryListItem, {
            key: key,
            title: `${fieldLocale[key] || key}:`
        }, fieldTransforms && fieldTransforms[key] ? fieldTransforms[key](updatedFields[key]) : `${updatedFields[key]}`))), footNote && /*#__PURE__*/ $07e7c452d24206cf$var$_react.default.createElement("p", null, footNote)));
};
$07e7c452d24206cf$exports.ConflictErrorSummary = $07e7c452d24206cf$var$ConflictErrorSummary;


Object.keys($07e7c452d24206cf$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $570eaa952d8e00b9$exports && $570eaa952d8e00b9$exports[key] === $07e7c452d24206cf$exports[key]) return;
    Object.defineProperty($570eaa952d8e00b9$exports, key, {
        enumerable: true,
        get: function() {
            return $07e7c452d24206cf$exports[key];
        }
    });
});
var $de02523b6015c6d4$exports = {};
"use strict";
Object.defineProperty($de02523b6015c6d4$exports, "__esModule", {
    value: true
});
$de02523b6015c6d4$exports.FormErrorSummary = void 0;

var $de02523b6015c6d4$var$_react = $de02523b6015c6d4$var$_interopRequireDefault($i684g$react);

var $de02523b6015c6d4$var$_locale = $de02523b6015c6d4$var$_interopRequireDefault((parcelRequire("cGCf8")));

function $de02523b6015c6d4$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $de02523b6015c6d4$var$_extends() {
    $de02523b6015c6d4$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $de02523b6015c6d4$var$_extends.apply(this, arguments);
}
const { error: $de02523b6015c6d4$var$error  } = $de02523b6015c6d4$var$_locale.default.components.formErrorSummary;
const $de02523b6015c6d4$var$FormErrorSummary = (_ref)=>{
    let { id: id , prefix: prefix , errors: errors , title: title = $de02523b6015c6d4$var$error , ...props } = _ref;
    return /*#__PURE__*/ $de02523b6015c6d4$var$_react.default.createElement($c409b756a3ce249f$exports.ErrorSummary, $de02523b6015c6d4$var$_extends({
        id: id,
        title: title
    }, props), /*#__PURE__*/ $de02523b6015c6d4$var$_react.default.createElement("ul", {
        className: "govuk-list govuk-error-summary__list"
    }, Object.keys(errors).filter((key)=>errors[key]).map((key)=>{
        return /*#__PURE__*/ $de02523b6015c6d4$var$_react.default.createElement("li", {
            key: key
        }, /*#__PURE__*/ $de02523b6015c6d4$var$_react.default.createElement("a", {
            href: `#${prefix}-${key}`
        }, errors[key]));
    })));
};
$de02523b6015c6d4$exports.FormErrorSummary = $de02523b6015c6d4$var$FormErrorSummary;


Object.keys($de02523b6015c6d4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $570eaa952d8e00b9$exports && $570eaa952d8e00b9$exports[key] === $de02523b6015c6d4$exports[key]) return;
    Object.defineProperty($570eaa952d8e00b9$exports, key, {
        enumerable: true,
        get: function() {
            return $de02523b6015c6d4$exports[key];
        }
    });
});
var $838d65fc8518eeb8$exports = {};
"use strict";
Object.defineProperty($838d65fc8518eeb8$exports, "__esModule", {
    value: true
});
$838d65fc8518eeb8$exports.StatusErrorSummary = void 0;

var $838d65fc8518eeb8$var$_react = $838d65fc8518eeb8$var$_interopRequireDefault($i684g$react);

var $838d65fc8518eeb8$var$_locale = $838d65fc8518eeb8$var$_interopRequireDefault((parcelRequire("cGCf8")));

function $838d65fc8518eeb8$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $838d65fc8518eeb8$var$_extends() {
    $838d65fc8518eeb8$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $838d65fc8518eeb8$var$_extends.apply(this, arguments);
}
const { statusTitle: $838d65fc8518eeb8$var$statusTitle , statusDescription: $838d65fc8518eeb8$var$statusDescription  } = $838d65fc8518eeb8$var$_locale.default.components.statusErrorSummary;
const $838d65fc8518eeb8$var$StatusErrorSummary = (_ref)=>{
    let { id: id , code: code , title: title = $838d65fc8518eeb8$var$statusTitle(code) , description: description = $838d65fc8518eeb8$var$statusDescription(code) , ...props } = _ref;
    return /*#__PURE__*/ $838d65fc8518eeb8$var$_react.default.createElement($c409b756a3ce249f$exports.ErrorSummary, $838d65fc8518eeb8$var$_extends({
        id: id,
        title: title,
        description: description
    }, props));
};
$838d65fc8518eeb8$exports.StatusErrorSummary = $838d65fc8518eeb8$var$StatusErrorSummary;


Object.keys($838d65fc8518eeb8$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $570eaa952d8e00b9$exports && $570eaa952d8e00b9$exports[key] === $838d65fc8518eeb8$exports[key]) return;
    Object.defineProperty($570eaa952d8e00b9$exports, key, {
        enumerable: true,
        get: function() {
            return $838d65fc8518eeb8$exports[key];
        }
    });
});


var $0eee8031dfefd309$exports = {};
"use strict";
Object.defineProperty($0eee8031dfefd309$exports, "__esModule", {
    value: true
});
var $83bb233762e4ca5c$exports = {};
"use strict";
Object.defineProperty($83bb233762e4ca5c$exports, "__esModule", {
    value: true
});
$83bb233762e4ca5c$exports.SimplePaginationButton = $83bb233762e4ca5c$exports.SimplePagination = void 0;

var $83bb233762e4ca5c$var$_react = $83bb233762e4ca5c$var$_interopRequireWildcard($i684g$react);

var $83bb233762e4ca5c$var$_classnames = $83bb233762e4ca5c$var$_interopRequireDefault($i684g$classnames);

function $83bb233762e4ca5c$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $83bb233762e4ca5c$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($83bb233762e4ca5c$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $83bb233762e4ca5c$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $83bb233762e4ca5c$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $83bb233762e4ca5c$var$_extends() {
    $83bb233762e4ca5c$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $83bb233762e4ca5c$var$_extends.apply(this, arguments);
}
const $83bb233762e4ca5c$var$SimplePagination = /*#__PURE__*/ (0, $83bb233762e4ca5c$var$_react.forwardRef)(function SimplePagination(_ref, ref) {
    let { className: className , ...props } = _ref;
    return /*#__PURE__*/ $83bb233762e4ca5c$var$_react.default.createElement("nav", $83bb233762e4ca5c$var$_extends({
        ref: ref,
        className: (0, $83bb233762e4ca5c$var$_classnames.default)("lbh-simple-pagination", className)
    }, props));
});
$83bb233762e4ca5c$exports.SimplePagination = $83bb233762e4ca5c$var$SimplePagination;
const $83bb233762e4ca5c$var$SimplePaginationButton = /*#__PURE__*/ (0, $83bb233762e4ca5c$var$_react.forwardRef)(function SimplePaginationButton(_ref2, ref) {
    let { as: SimplePaginationComp = "a" , variant: variant , className: className , title: title , children: children , ...props } = _ref2;
    return /*#__PURE__*/ $83bb233762e4ca5c$var$_react.default.createElement(SimplePaginationComp, $83bb233762e4ca5c$var$_extends({
        ref: ref,
        className: (0, $83bb233762e4ca5c$var$_classnames.default)("lbh-simple-pagination__link", {
            "lbh-simple-pagination__link--next": variant === "next"
        }, className),
        rel: variant
    }, props), variant === "previous" ? /*#__PURE__*/ $83bb233762e4ca5c$var$_react.default.createElement("svg", {
        width: "11",
        height: "19",
        viewBox: "0 0 11 19",
        fill: "none"
    }, /*#__PURE__*/ $83bb233762e4ca5c$var$_react.default.createElement("path", {
        d: "M10 1L2 9.5L10 18",
        strokeWidth: "2"
    })) : null, children, title ? /*#__PURE__*/ $83bb233762e4ca5c$var$_react.default.createElement("span", {
        className: "lbh-simple-pagination__title"
    }, title) : null, variant === "next" ? /*#__PURE__*/ $83bb233762e4ca5c$var$_react.default.createElement("svg", {
        width: "11",
        height: "19",
        viewBox: "0 0 11 19",
        fill: "none"
    }, /*#__PURE__*/ $83bb233762e4ca5c$var$_react.default.createElement("path", {
        d: "M1 18L9 9.5L1 1",
        strokeWidth: "2"
    })) : null);
});
$83bb233762e4ca5c$exports.SimplePaginationButton = $83bb233762e4ca5c$var$SimplePaginationButton;


Object.keys($83bb233762e4ca5c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0eee8031dfefd309$exports && $0eee8031dfefd309$exports[key] === $83bb233762e4ca5c$exports[key]) return;
    Object.defineProperty($0eee8031dfefd309$exports, key, {
        enumerable: true,
        get: function() {
            return $83bb233762e4ca5c$exports[key];
        }
    });
});


var $e38ba771f6f65b62$exports = {};
"use strict";
Object.defineProperty($e38ba771f6f65b62$exports, "__esModule", {
    value: true
});
var $9932e6f0a7a23a65$exports = {};
"use strict";
Object.defineProperty($9932e6f0a7a23a65$exports, "__esModule", {
    value: true
});
$9932e6f0a7a23a65$exports.Spinner = void 0;

var $9932e6f0a7a23a65$var$_react = $9932e6f0a7a23a65$var$_interopRequireWildcard($i684g$react);

function $9932e6f0a7a23a65$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($9932e6f0a7a23a65$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $9932e6f0a7a23a65$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $9932e6f0a7a23a65$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $9932e6f0a7a23a65$var$_extends() {
    $9932e6f0a7a23a65$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $9932e6f0a7a23a65$var$_extends.apply(this, arguments);
}
const $9932e6f0a7a23a65$var$Spinner = /*#__PURE__*/ (0, $9932e6f0a7a23a65$var$_react.forwardRef)(function Spinner(_ref, ref) {
    let { size: size = "50" , label: label = "Loading..." , ...props } = _ref;
    return /*#__PURE__*/ $9932e6f0a7a23a65$var$_react.default.createElement($5d49091b4fbff3c5$exports.Icon, $9932e6f0a7a23a65$var$_extends({
        ref: ref,
        viewBox: "0 0 42 42",
        stroke: "#00703c",
        size: size
    }, props), /*#__PURE__*/ $9932e6f0a7a23a65$var$_react.default.createElement("title", null, label), /*#__PURE__*/ $9932e6f0a7a23a65$var$_react.default.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ $9932e6f0a7a23a65$var$_react.default.createElement("g", {
        transform: "translate(3 3)",
        strokeWidth: "5"
    }, /*#__PURE__*/ $9932e6f0a7a23a65$var$_react.default.createElement("circle", {
        strokeOpacity: ".5",
        cx: "18",
        cy: "18",
        r: "18"
    }), /*#__PURE__*/ $9932e6f0a7a23a65$var$_react.default.createElement("path", {
        d: "M36 18c0-9.94-8.06-18-18-18",
        transform: "rotate(112.708 18 18)"
    }, /*#__PURE__*/ $9932e6f0a7a23a65$var$_react.default.createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "1s",
        repeatCount: "indefinite"
    })))));
});
$9932e6f0a7a23a65$exports.Spinner = $9932e6f0a7a23a65$var$Spinner;


Object.keys($9932e6f0a7a23a65$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $e38ba771f6f65b62$exports && $e38ba771f6f65b62$exports[key] === $9932e6f0a7a23a65$exports[key]) return;
    Object.defineProperty($e38ba771f6f65b62$exports, key, {
        enumerable: true,
        get: function() {
            return $9932e6f0a7a23a65$exports[key];
        }
    });
});


var $b8c89689d2113c90$exports = {};
"use strict";
Object.defineProperty($b8c89689d2113c90$exports, "__esModule", {
    value: true
});
var $79b622806976a0c8$exports = {};
"use strict";
Object.defineProperty($79b622806976a0c8$exports, "__esModule", {
    value: true
});
$79b622806976a0c8$exports.Text = void 0;

var $79b622806976a0c8$var$_react = $79b622806976a0c8$var$_interopRequireWildcard($i684g$react);

var $79b622806976a0c8$var$_classnames = $79b622806976a0c8$var$_interopRequireDefault($i684g$classnames);

function $79b622806976a0c8$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $79b622806976a0c8$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($79b622806976a0c8$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $79b622806976a0c8$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $79b622806976a0c8$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $79b622806976a0c8$var$_extends() {
    $79b622806976a0c8$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $79b622806976a0c8$var$_extends.apply(this, arguments);
}
const $79b622806976a0c8$var$Text = /*#__PURE__*/ (0, $79b622806976a0c8$var$_react.forwardRef)(function Text(_ref, ref) {
    let { as: TextComp = "p" , variant: variant = "base" , size: size = "md" , className: className , ...props } = _ref;
    return /*#__PURE__*/ $79b622806976a0c8$var$_react.default.createElement(TextComp, $79b622806976a0c8$var$_extends({
        ref: ref,
        className: (0, $79b622806976a0c8$var$_classnames.default)({
            "lbh-body-xs": size === "xs",
            "lbh-body-s": size === "sm",
            "lbh-body-m": size === "md",
            "lbh-body-l": size === "lg",
            "lbh-!-font-weight-regular": variant === "regular",
            "lbh-!-font-weight-bold": variant === "bold"
        }, className)
    }, props));
});
$79b622806976a0c8$exports.Text = $79b622806976a0c8$var$Text;


Object.keys($79b622806976a0c8$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $b8c89689d2113c90$exports && $b8c89689d2113c90$exports[key] === $79b622806976a0c8$exports[key]) return;
    Object.defineProperty($b8c89689d2113c90$exports, key, {
        enumerable: true,
        get: function() {
            return $79b622806976a0c8$exports[key];
        }
    });
});


var $1bf1b14b45737b3d$exports = {};
"use strict";
Object.defineProperty($1bf1b14b45737b3d$exports, "__esModule", {
    value: true
});
$1bf1b14b45737b3d$exports.CommentListItem = void 0;

var $1bf1b14b45737b3d$var$_react = $1bf1b14b45737b3d$var$_interopRequireWildcard($i684g$react);

var $1bf1b14b45737b3d$var$_classnames = $1bf1b14b45737b3d$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $1bf1b14b45737b3d$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $1bf1b14b45737b3d$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($1bf1b14b45737b3d$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $1bf1b14b45737b3d$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $1bf1b14b45737b3d$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $1bf1b14b45737b3d$var$getCategoryLabel = (categoryCode, categories)=>{
    const category = categories.find((cat)=>cat.code === categoryCode);
    return category?.value;
};
const $1bf1b14b45737b3d$var$CommentListItem = (_ref)=>{
    let { comment: { categorisation: categorisation , createdAt: createdAt , title: title , description: description , author: author , highlight: highlight  } , categories: categories  } = _ref;
    const createdAtDate = (0, $1bf1b14b45737b3d$var$_react.useMemo)(()=>(0, $jg4db.formatDate)(createdAt), [
        createdAt
    ]);
    const createdAtTime = (0, $1bf1b14b45737b3d$var$_react.useMemo)(()=>(0, $jg4db.formatTime)(createdAt), [
        createdAt
    ]);
    return /*#__PURE__*/ $1bf1b14b45737b3d$var$_react.default.createElement("div", {
        className: "comment"
    }, /*#__PURE__*/ $1bf1b14b45737b3d$var$_react.default.createElement("div", {
        className: "comment__item"
    }, /*#__PURE__*/ $1bf1b14b45737b3d$var$_react.default.createElement("div", {
        className: "comment__date-time"
    }, createdAtDate), /*#__PURE__*/ $1bf1b14b45737b3d$var$_react.default.createElement("div", {
        className: "comment__date-time"
    }, createdAtTime)), /*#__PURE__*/ $1bf1b14b45737b3d$var$_react.default.createElement("div", {
        className: "comment__item --center"
    }, title && /*#__PURE__*/ $1bf1b14b45737b3d$var$_react.default.createElement("div", {
        className: (0, $1bf1b14b45737b3d$var$_classnames.default)("comment__title", {
            "--highlight": highlight
        })
    }, title), categorisation?.category && /*#__PURE__*/ $1bf1b14b45737b3d$var$_react.default.createElement("div", {
        className: "comment__category"
    }, $1bf1b14b45737b3d$var$getCategoryLabel(categorisation.category, categories)), description), /*#__PURE__*/ $1bf1b14b45737b3d$var$_react.default.createElement("div", {
        className: "comment__item"
    }, author.fullName));
};
$1bf1b14b45737b3d$exports.CommentListItem = $1bf1b14b45737b3d$var$CommentListItem;


function $0749ea49dee81dcd$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $0749ea49dee81dcd$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($0749ea49dee81dcd$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $0749ea49dee81dcd$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $0749ea49dee81dcd$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $0749ea49dee81dcd$var$NoComments = ()=>{
    return /*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement($b8c89689d2113c90$exports.Text, {
        size: "sm"
    }, $0749ea49dee81dcd$var$_locale.default.components.commentList.noCommentsAdded);
};
const $0749ea49dee81dcd$var$CommentList = (_ref)=>{
    let { targetId: targetId  } = _ref;
    const { data: data , size: size , setSize: setSize , error: error  } = (0, $696e7059d47372ac$exports.useComments)(targetId);
    const { components: components  } = $0749ea49dee81dcd$var$_locale.default;
    const { data: referenceData , error: referenceError  } = (0, $3beb7d3a6fc4ac8c$exports.useReferenceData)({
        category: "comment",
        subCategory: "category"
    });
    const response = (0, $0749ea49dee81dcd$var$_react.useMemo)(()=>{
        if (!data) return null;
        return data[size - 1];
    }, [
        data,
        size
    ]);
    if (error?.response?.status === 404) return /*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement($0749ea49dee81dcd$var$NoComments, null);
    if (referenceError) return /*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement($570eaa952d8e00b9$exports.ErrorSummary, {
        id: "comment-list-error",
        title: components.commentList.errors.unableToFetchReferenceData,
        description: components.commentList.errors.unableToFetchReferenceDataDescription
    });
    if (!response || !referenceData) return /*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement($0cd95a48d1dcaa91$exports.Center, null, /*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement($e38ba771f6f65b62$exports.Spinner, null));
    const { results: comments , paginationDetails: { nextToken: nextToken  }  } = response;
    return /*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement("div", null, comments.map((comment)=>/*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement($1bf1b14b45737b3d$exports.CommentListItem, {
            categories: referenceData.category,
            key: comment.id,
            comment: comment
        })), (size > 1 || nextToken) && /*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement($0eee8031dfefd309$exports.SimplePagination, null, size !== 1 && /*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement($0eee8031dfefd309$exports.SimplePaginationButton, {
        variant: "previous",
        onClick: ()=>setSize(size - 1)
    }, "Previous"), nextToken && /*#__PURE__*/ $0749ea49dee81dcd$var$_react.default.createElement($0eee8031dfefd309$exports.SimplePaginationButton, {
        variant: "next",
        onClick: ()=>setSize(size + 1)
    }, "Next")));
};
$0749ea49dee81dcd$exports.CommentList = $0749ea49dee81dcd$var$CommentList;


Object.keys($0749ea49dee81dcd$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $81715dd964e83575$exports && $81715dd964e83575$exports[key] === $0749ea49dee81dcd$exports[key]) return;
    Object.defineProperty($81715dd964e83575$exports, key, {
        enumerable: true,
        get: function() {
            return $0749ea49dee81dcd$exports[key];
        }
    });
});


Object.keys($81715dd964e83575$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $81715dd964e83575$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $81715dd964e83575$exports[key];
        }
    });
});
var $3cb78742846f278e$exports = {};
"use strict";
Object.defineProperty($3cb78742846f278e$exports, "__esModule", {
    value: true
});
var $89401ee2a53a5d08$exports = {};
"use strict";
Object.defineProperty($89401ee2a53a5d08$exports, "__esModule", {
    value: true
});
$89401ee2a53a5d08$exports.ConfirmationRouter = void 0;

var $89401ee2a53a5d08$var$_react = $89401ee2a53a5d08$var$_interopRequireWildcard($i684g$react);


var $1cb230a5acd30dbe$exports = {};
"use strict";
Object.defineProperty($1cb230a5acd30dbe$exports, "__esModule", {
    value: true
});
var $ab12b53074fbb201$exports = {};
"use strict";
Object.defineProperty($ab12b53074fbb201$exports, "__esModule", {
    value: true
});
$ab12b53074fbb201$exports.DialogActions = $ab12b53074fbb201$exports.Dialog = void 0;

var $ab12b53074fbb201$var$_react = $ab12b53074fbb201$var$_interopRequireWildcard($i684g$react);


var $ab12b53074fbb201$var$_classnames = $ab12b53074fbb201$var$_interopRequireDefault($i684g$classnames);



function $ab12b53074fbb201$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $ab12b53074fbb201$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($ab12b53074fbb201$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $ab12b53074fbb201$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $ab12b53074fbb201$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $ab12b53074fbb201$var$_extends() {
    $ab12b53074fbb201$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $ab12b53074fbb201$var$_extends.apply(this, arguments);
}
const $ab12b53074fbb201$var$Dialog = /*#__PURE__*/ (0, $ab12b53074fbb201$var$_react.forwardRef)(function Dialog(_ref, ref) {
    let { isOpen: isOpen , onDismiss: onDismiss , children: children , className: className , title: title , ...props } = _ref;
    return /*#__PURE__*/ $ab12b53074fbb201$var$_react.default.createElement($i684g$reachdialog.Dialog, $ab12b53074fbb201$var$_extends({
        ref: ref,
        isOpen: isOpen,
        onDismiss: onDismiss,
        className: (0, $ab12b53074fbb201$var$_classnames.default)("lbh-dialog", className),
        "aria-label": title
    }, props), /*#__PURE__*/ $ab12b53074fbb201$var$_react.default.createElement($57b31647f201adaa$exports.Heading, {
        as: "h2",
        variant: "h2",
        className: "lbh-dialog__title"
    }, title), /*#__PURE__*/ $ab12b53074fbb201$var$_react.default.createElement("button", {
        type: "button",
        onClick: onDismiss,
        className: "lbh-dialog__close"
    }, /*#__PURE__*/ $ab12b53074fbb201$var$_react.default.createElement("span", {
        className: "govuk-visually-hidden"
    }, "Close"), /*#__PURE__*/ $ab12b53074fbb201$var$_react.default.createElement("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 13 13",
        fill: "none"
    }, /*#__PURE__*/ $ab12b53074fbb201$var$_react.default.createElement("path", {
        d: "M-0.0501709 1.36379L1.36404 -0.050415L12.6778 11.2633L11.2635 12.6775L-0.0501709 1.36379Z",
        fill: "#0B0C0C"
    }), /*#__PURE__*/ $ab12b53074fbb201$var$_react.default.createElement("path", {
        d: "M11.2635 -0.050293L12.6778 1.36392L1.36404 12.6776L-0.0501709 11.2634L11.2635 -0.050293Z",
        fill: "#0B0C0C"
    }))), children);
});
$ab12b53074fbb201$exports.Dialog = $ab12b53074fbb201$var$Dialog;
const $ab12b53074fbb201$var$DialogActions = /*#__PURE__*/ (0, $ab12b53074fbb201$var$_react.forwardRef)(function DialogActions(_ref2, ref) {
    let { className: className , ...props } = _ref2;
    return /*#__PURE__*/ $ab12b53074fbb201$var$_react.default.createElement("div", $ab12b53074fbb201$var$_extends({
        ref: ref,
        className: (0, $ab12b53074fbb201$var$_classnames.default)("lbh-dialog__actions", className)
    }, props));
});
$ab12b53074fbb201$exports.DialogActions = $ab12b53074fbb201$var$DialogActions;


Object.keys($ab12b53074fbb201$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $1cb230a5acd30dbe$exports && $1cb230a5acd30dbe$exports[key] === $ab12b53074fbb201$exports[key]) return;
    Object.defineProperty($1cb230a5acd30dbe$exports, key, {
        enumerable: true,
        get: function() {
            return $ab12b53074fbb201$exports[key];
        }
    });
});



var $3f5PC = parcelRequire("3f5PC");
var $6c59dee70ac360b9$exports = {};
"use strict";
Object.defineProperty($6c59dee70ac360b9$exports, "__esModule", {
    value: true
});
var $d7925e79f5f96cb6$exports = {};
"use strict";
Object.defineProperty($d7925e79f5f96cb6$exports, "__esModule", {
    value: true
});
$d7925e79f5f96cb6$exports.ScrollToTop = void 0;


const $d7925e79f5f96cb6$var$ScrollToTop = ()=>{
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
$d7925e79f5f96cb6$exports.ScrollToTop = $d7925e79f5f96cb6$var$ScrollToTop;


Object.keys($d7925e79f5f96cb6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $6c59dee70ac360b9$exports && $6c59dee70ac360b9$exports[key] === $d7925e79f5f96cb6$exports[key]) return;
    Object.defineProperty($6c59dee70ac360b9$exports, key, {
        enumerable: true,
        get: function() {
            return $d7925e79f5f96cb6$exports[key];
        }
    });
});


function $89401ee2a53a5d08$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($89401ee2a53a5d08$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $89401ee2a53a5d08$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $89401ee2a53a5d08$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $89401ee2a53a5d08$var$_extends() {
    $89401ee2a53a5d08$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $89401ee2a53a5d08$var$_extends.apply(this, arguments);
}
const $89401ee2a53a5d08$var$ConfirmationRouter = (_ref)=>{
    let { children: children , ...props } = _ref;
    const [message, setMessage] = (0, $89401ee2a53a5d08$var$_react.useState)();
    const [isConfirm, setIsConfim] = (0, $89401ee2a53a5d08$var$_react.useState)(false);
    const [confirmation, setConfirmation] = (0, $89401ee2a53a5d08$var$_react.useState)();
    const onConfirmation = (0, $89401ee2a53a5d08$var$_react.useCallback)((ok)=>{
        /* istanbul ignore else: this should be set by the time we call it */ if (confirmation) confirmation(ok);
        if (!ok && message?.action === "POP") window.history.forward();
        setIsConfim(false);
    }, [
        confirmation,
        setIsConfim,
        message
    ]);
    return /*#__PURE__*/ $89401ee2a53a5d08$var$_react.default.createElement($i684g$reactrouterdom.BrowserRouter, $89401ee2a53a5d08$var$_extends({
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
        }
    }, props), /*#__PURE__*/ $89401ee2a53a5d08$var$_react.default.createElement($6c59dee70ac360b9$exports.ScrollToTop, null), children, message && /*#__PURE__*/ $89401ee2a53a5d08$var$_react.default.createElement($1cb230a5acd30dbe$exports.Dialog, {
        isOpen: isConfirm,
        title: message.title,
        onDismiss: ()=>onConfirmation(false)
    }, message?.body && /*#__PURE__*/ $89401ee2a53a5d08$var$_react.default.createElement("p", null, message.body), /*#__PURE__*/ $89401ee2a53a5d08$var$_react.default.createElement($1cb230a5acd30dbe$exports.DialogActions, null, /*#__PURE__*/ $89401ee2a53a5d08$var$_react.default.createElement($51daab27a361364a$exports.Button, {
        onClick: ()=>onConfirmation(true)
    }, "Yes"), /*#__PURE__*/ $89401ee2a53a5d08$var$_react.default.createElement($3f5PC.Link, {
        as: "button",
        onClick: ()=>onConfirmation(false)
    }, "Cancel"))));
};
$89401ee2a53a5d08$exports.ConfirmationRouter = $89401ee2a53a5d08$var$ConfirmationRouter;


Object.keys($89401ee2a53a5d08$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3cb78742846f278e$exports && $3cb78742846f278e$exports[key] === $89401ee2a53a5d08$exports[key]) return;
    Object.defineProperty($3cb78742846f278e$exports, key, {
        enumerable: true,
        get: function() {
            return $89401ee2a53a5d08$exports[key];
        }
    });
});


Object.keys($3cb78742846f278e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $3cb78742846f278e$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $3cb78742846f278e$exports[key];
        }
    });
});
var $5e01b0390258679e$exports = {};
"use strict";
Object.defineProperty($5e01b0390258679e$exports, "__esModule", {
    value: true
});
var $d4f9bb7f87bb916e$exports = {};
"use strict";
Object.defineProperty($d4f9bb7f87bb916e$exports, "__esModule", {
    value: true
});
$d4f9bb7f87bb916e$exports.DateInput = void 0;

var $d4f9bb7f87bb916e$var$_react = $d4f9bb7f87bb916e$var$_interopRequireWildcard($i684g$react);

var $d4f9bb7f87bb916e$var$_classnames = $d4f9bb7f87bb916e$var$_interopRequireDefault($i684g$classnames);
var $f7389a6cf3d553f6$exports = {};
"use strict";
Object.defineProperty($f7389a6cf3d553f6$exports, "__esModule", {
    value: true
});
var $2e17fefe9fc75ea2$exports = {};
"use strict";
Object.defineProperty($2e17fefe9fc75ea2$exports, "__esModule", {
    value: true
});
$2e17fefe9fc75ea2$exports.NumberInput = void 0;

var $2e17fefe9fc75ea2$var$_react = $2e17fefe9fc75ea2$var$_interopRequireWildcard($i684g$react);
var $165ff1fef9a7a447$exports = {};
"use strict";
Object.defineProperty($165ff1fef9a7a447$exports, "__esModule", {
    value: true
});
var $c24864f872aaace1$exports = {};
"use strict";
Object.defineProperty($c24864f872aaace1$exports, "__esModule", {
    value: true
});
$c24864f872aaace1$exports.Input = void 0;

var $c24864f872aaace1$var$_react = $c24864f872aaace1$var$_interopRequireWildcard($i684g$react);

var $c24864f872aaace1$var$_classnames = $c24864f872aaace1$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $c24864f872aaace1$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $c24864f872aaace1$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($c24864f872aaace1$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $c24864f872aaace1$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $c24864f872aaace1$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $c24864f872aaace1$var$_extends() {
    $c24864f872aaace1$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $c24864f872aaace1$var$_extends.apply(this, arguments);
}
const $c24864f872aaace1$var$Input = /*#__PURE__*/ (0, $c24864f872aaace1$var$_react.forwardRef)(function Input(_ref, ref) {
    let { error: error , className: className , override: override , ...props } = _ref;
    const inputClasses = (0, $c24864f872aaace1$var$_classnames.default)("govuk-input", "lbh-input", {
        "govuk-input--error": error
    }, (0, $jg4db.widthOverrides)(override), className);
    return /*#__PURE__*/ $c24864f872aaace1$var$_react.default.createElement("input", $c24864f872aaace1$var$_extends({
        ref: ref,
        className: inputClasses
    }, props));
});
$c24864f872aaace1$exports.Input = $c24864f872aaace1$var$Input;


Object.keys($c24864f872aaace1$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $165ff1fef9a7a447$exports && $165ff1fef9a7a447$exports[key] === $c24864f872aaace1$exports[key]) return;
    Object.defineProperty($165ff1fef9a7a447$exports, key, {
        enumerable: true,
        get: function() {
            return $c24864f872aaace1$exports[key];
        }
    });
});


function $2e17fefe9fc75ea2$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($2e17fefe9fc75ea2$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $2e17fefe9fc75ea2$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $2e17fefe9fc75ea2$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $2e17fefe9fc75ea2$var$_extends() {
    $2e17fefe9fc75ea2$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $2e17fefe9fc75ea2$var$_extends.apply(this, arguments);
}
const $2e17fefe9fc75ea2$var$NumberInput = /*#__PURE__*/ (0, $2e17fefe9fc75ea2$var$_react.forwardRef)(function NumberInput(_ref, ref) {
    let { onChange: onChange , onBlur: onBlur , min: min , max: max , value: value , defaultValue: defaultValue , maxLength: maxLength , padStart: padStart = 0 , ...props } = _ref;
    const parser = (0, $2e17fefe9fc75ea2$var$_react.useCallback)((num)=>{
        let numString = String(num).replace(/[^\d]+/g, "");
        if (maxLength !== undefined && maxLength < numString.length) numString = numString.slice(0, maxLength);
        return numString;
    }, [
        maxLength
    ]);
    const formatter = (0, $2e17fefe9fc75ea2$var$_react.useCallback)((num)=>{
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
    const [output, setOutput] = (0, $2e17fefe9fc75ea2$var$_react.useState)(parser(defaultValue ?? value ?? ""));
    const outputInt = (0, $2e17fefe9fc75ea2$var$_react.useMemo)(()=>{
        const target = parseInt(output, 10);
        return !Number.isNaN(target) ? target : undefined;
    }, [
        output
    ]);
    return /*#__PURE__*/ $2e17fefe9fc75ea2$var$_react.default.createElement($165ff1fef9a7a447$exports.Input, $2e17fefe9fc75ea2$var$_extends({
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
        }
    }, props));
});
$2e17fefe9fc75ea2$exports.NumberInput = $2e17fefe9fc75ea2$var$NumberInput;


Object.keys($2e17fefe9fc75ea2$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $f7389a6cf3d553f6$exports && $f7389a6cf3d553f6$exports[key] === $2e17fefe9fc75ea2$exports[key]) return;
    Object.defineProperty($f7389a6cf3d553f6$exports, key, {
        enumerable: true,
        get: function() {
            return $2e17fefe9fc75ea2$exports[key];
        }
    });
});



function $d4f9bb7f87bb916e$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $d4f9bb7f87bb916e$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($d4f9bb7f87bb916e$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $d4f9bb7f87bb916e$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $d4f9bb7f87bb916e$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $d4f9bb7f87bb916e$var$_extends() {
    $d4f9bb7f87bb916e$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $d4f9bb7f87bb916e$var$_extends.apply(this, arguments);
}
const $d4f9bb7f87bb916e$var$DateInput = /*#__PURE__*/ (0, $d4f9bb7f87bb916e$var$_react.forwardRef)(function DateInput(_ref, ref) {
    let { id: id = "date-input" , dayProps: dayProps , monthProps: monthProps , yearProps: yearProps , dayLabel: dayLabel = "Day" , monthLabel: monthLabel = "Month" , yearLabel: yearLabel = "Year" , error: error , required: required , className: className , ...props } = _ref;
    return /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement("div", $d4f9bb7f87bb916e$var$_extends({
        ref: ref,
        className: (0, $d4f9bb7f87bb916e$var$_classnames.default)("govuk-date-input", "lbh-date-input", className)
    }, props), /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement("div", {
        className: "govuk-date-input__item"
    }, /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement("label", {
        className: "govuk-label lbh-label",
        htmlFor: `${id}-day`
    }, dayLabel), /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement($f7389a6cf3d553f6$exports.NumberInput, $d4f9bb7f87bb916e$var$_extends({
        className: "govuk-date-input__input govuk-input--width-2",
        name: "day",
        required: required,
        maxLength: 2,
        min: 1,
        max: 31,
        padStart: 2,
        "aria-label": "Day"
    }, dayProps))), /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement("div", {
        className: "govuk-date-input__item"
    }, /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement("label", {
        className: "govuk-label lbh-label",
        htmlFor: `${id}-month`
    }, monthLabel), /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement($f7389a6cf3d553f6$exports.NumberInput, $d4f9bb7f87bb916e$var$_extends({
        className: "govuk-date-input__input govuk-input--width-2",
        name: "month",
        required: required,
        maxLength: 2,
        min: 1,
        max: 12,
        padStart: 2,
        "aria-label": "Month"
    }, monthProps))), /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement("div", {
        className: "govuk-date-input__item"
    }, /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement("label", {
        className: "govuk-label lbh-label",
        htmlFor: `${id}-year`
    }, yearLabel), /*#__PURE__*/ $d4f9bb7f87bb916e$var$_react.default.createElement($f7389a6cf3d553f6$exports.NumberInput, $d4f9bb7f87bb916e$var$_extends({
        className: "govuk-input govuk-date-input__input govuk-input--width-4",
        name: "year",
        required: required,
        maxLength: 4,
        padStart: 4,
        "aria-label": "Year"
    }, yearProps))));
});
$d4f9bb7f87bb916e$exports.DateInput = $d4f9bb7f87bb916e$var$DateInput;


Object.keys($d4f9bb7f87bb916e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $5e01b0390258679e$exports && $5e01b0390258679e$exports[key] === $d4f9bb7f87bb916e$exports[key]) return;
    Object.defineProperty($5e01b0390258679e$exports, key, {
        enumerable: true,
        get: function() {
            return $d4f9bb7f87bb916e$exports[key];
        }
    });
});


Object.keys($5e01b0390258679e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $5e01b0390258679e$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $5e01b0390258679e$exports[key];
        }
    });
});
var $7c0c76825baed95e$exports = {};
"use strict";
Object.defineProperty($7c0c76825baed95e$exports, "__esModule", {
    value: true
});
var $a31dcead500d15da$exports = {};
"use strict";
Object.defineProperty($a31dcead500d15da$exports, "__esModule", {
    value: true
});
$a31dcead500d15da$exports.TimeInput = void 0;

var $a31dcead500d15da$var$_react = $a31dcead500d15da$var$_interopRequireWildcard($i684g$react);

var $a31dcead500d15da$var$_classnames = $a31dcead500d15da$var$_interopRequireDefault($i684g$classnames);

var $c6537740902d4927$exports = {};
"use strict";
Object.defineProperty($c6537740902d4927$exports, "__esModule", {
    value: true
});
var $6062d3d292877f4a$exports = {};
"use strict";
Object.defineProperty($6062d3d292877f4a$exports, "__esModule", {
    value: true
});
$6062d3d292877f4a$exports.Select = void 0;

var $6062d3d292877f4a$var$_react = $6062d3d292877f4a$var$_interopRequireWildcard($i684g$react);

var $6062d3d292877f4a$var$_classnames = $6062d3d292877f4a$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $6062d3d292877f4a$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $6062d3d292877f4a$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($6062d3d292877f4a$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $6062d3d292877f4a$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $6062d3d292877f4a$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $6062d3d292877f4a$var$_extends() {
    $6062d3d292877f4a$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $6062d3d292877f4a$var$_extends.apply(this, arguments);
}
const $6062d3d292877f4a$var$Select = /*#__PURE__*/ (0, $6062d3d292877f4a$var$_react.forwardRef)(function Select(_ref, ref) {
    let { error: error , className: className , override: override , ...props } = _ref;
    const selectClasses = (0, $6062d3d292877f4a$var$_classnames.default)("govuk-select", "lbh-select", {
        "govuk-select--error": error
    }, (0, $jg4db.widthOverrides)(override), className);
    return /*#__PURE__*/ $6062d3d292877f4a$var$_react.default.createElement("select", $6062d3d292877f4a$var$_extends({
        ref: ref,
        className: selectClasses
    }, props));
});
$6062d3d292877f4a$exports.Select = $6062d3d292877f4a$var$Select;


Object.keys($6062d3d292877f4a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $c6537740902d4927$exports && $c6537740902d4927$exports[key] === $6062d3d292877f4a$exports[key]) return;
    Object.defineProperty($c6537740902d4927$exports, key, {
        enumerable: true,
        get: function() {
            return $6062d3d292877f4a$exports[key];
        }
    });
});



function $a31dcead500d15da$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $a31dcead500d15da$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($a31dcead500d15da$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $a31dcead500d15da$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $a31dcead500d15da$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $a31dcead500d15da$var$_extends() {
    $a31dcead500d15da$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $a31dcead500d15da$var$_extends.apply(this, arguments);
}
const $a31dcead500d15da$var$TimeInput = /*#__PURE__*/ (0, $a31dcead500d15da$var$_react.forwardRef)(function TimeInput(_ref, ref) {
    let { id: id = "time-input" , hourProps: hourProps , minuteProps: minuteProps , amPmProps: amPmProps , hourLabel: hourLabel = "Hour" , minuteLabel: minuteLabel = "Minute" , amPmLabel: amPmLabel = "AM/PM" , error: error , required: required , className: className , ...props } = _ref;
    return /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("div", $a31dcead500d15da$var$_extends({
        ref: ref,
        className: (0, $a31dcead500d15da$var$_classnames.default)("govuk-date-input", "lbh-date-input", className)
    }, props), /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("div", {
        className: "govuk-date-input__item"
    }, /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("label", {
        className: "govuk-label lbh-label",
        htmlFor: `${id}-hour`
    }, hourLabel), /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement($f7389a6cf3d553f6$exports.NumberInput, $a31dcead500d15da$var$_extends({
        className: "govuk-date-input__input govuk-input--width-2",
        name: "hour",
        required: required,
        maxLength: 2,
        min: 0,
        max: 12,
        padStart: 2,
        "aria-label": "Hour"
    }, hourProps))), /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("div", {
        className: "govuk-date-input__item"
    }, /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("label", {
        className: "govuk-label lbh-label",
        htmlFor: `${id}-minute`
    }, minuteLabel), /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement($f7389a6cf3d553f6$exports.NumberInput, $a31dcead500d15da$var$_extends({
        className: "govuk-date-input__input govuk-input--width-2",
        name: "minute",
        required: required,
        maxLength: 2,
        min: 0,
        max: 59,
        padStart: 2,
        "aria-label": "Minute"
    }, minuteProps))), /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("div", {
        className: "govuk-date-input__item"
    }, /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("label", {
        className: "govuk-label lbh-label",
        htmlFor: `${id}-amPm`
    }, amPmLabel), /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement($c6537740902d4927$exports.Select, $a31dcead500d15da$var$_extends({
        id: "amPm",
        name: "amPm",
        "aria-label": "AM/PM"
    }, amPmProps), /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("option", {
        value: ""
    }, amPmProps?.placeholder || "AM/PM"), /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("option", {
        value: "am"
    }, "AM"), /*#__PURE__*/ $a31dcead500d15da$var$_react.default.createElement("option", {
        value: "pm"
    }, "PM"))));
});
$a31dcead500d15da$exports.TimeInput = $a31dcead500d15da$var$TimeInput;


Object.keys($a31dcead500d15da$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $7c0c76825baed95e$exports && $7c0c76825baed95e$exports[key] === $a31dcead500d15da$exports[key]) return;
    Object.defineProperty($7c0c76825baed95e$exports, key, {
        enumerable: true,
        get: function() {
            return $a31dcead500d15da$exports[key];
        }
    });
});


Object.keys($7c0c76825baed95e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $7c0c76825baed95e$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $7c0c76825baed95e$exports[key];
        }
    });
});

Object.keys($1cb230a5acd30dbe$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $1cb230a5acd30dbe$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $1cb230a5acd30dbe$exports[key];
        }
    });
});
var $b588b0d721a5aa87$exports = {};
"use strict";
Object.defineProperty($b588b0d721a5aa87$exports, "__esModule", {
    value: true
});
var $8e40873516d34abc$exports = {};
"use strict";
Object.defineProperty($8e40873516d34abc$exports, "__esModule", {
    value: true
});
$8e40873516d34abc$exports.DialogPrompt = void 0;

var $8e40873516d34abc$var$_react = $8e40873516d34abc$var$_interopRequireWildcard($i684g$react);

function $8e40873516d34abc$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($8e40873516d34abc$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $8e40873516d34abc$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $8e40873516d34abc$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $8e40873516d34abc$var$_extends() {
    $8e40873516d34abc$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $8e40873516d34abc$var$_extends.apply(this, arguments);
}
const $8e40873516d34abc$var$DialogPrompt = (_ref)=>{
    let { title: title , body: body , skipConfirmation: skipConfirmation , ...props } = _ref;
    const { path: path  } = (0, $i684g$reactrouterdom.useRouteMatch)();
    (0, $8e40873516d34abc$var$_react.useEffect)(()=>{
        const handler = (e)=>{
            e.returnValue = "";
            return e.returnValue;
        };
        window.addEventListener("beforeunload", handler);
        return ()=>{
            window.removeEventListener("beforeunload", handler);
        };
    }, []);
    return /*#__PURE__*/ $8e40873516d34abc$var$_react.default.createElement($i684g$reactrouterdom.Prompt, $8e40873516d34abc$var$_extends({}, props, {
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
    }));
};
$8e40873516d34abc$exports.DialogPrompt = $8e40873516d34abc$var$DialogPrompt;


Object.keys($8e40873516d34abc$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $b588b0d721a5aa87$exports && $b588b0d721a5aa87$exports[key] === $8e40873516d34abc$exports[key]) return;
    Object.defineProperty($b588b0d721a5aa87$exports, key, {
        enumerable: true,
        get: function() {
            return $8e40873516d34abc$exports[key];
        }
    });
});


Object.keys($b588b0d721a5aa87$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $b588b0d721a5aa87$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $b588b0d721a5aa87$exports[key];
        }
    });
});
var $dcde123d5eff736d$exports = {};
"use strict";
Object.defineProperty($dcde123d5eff736d$exports, "__esModule", {
    value: true
});
var $24719bf0a11056ec$exports = {};
"use strict";
Object.defineProperty($24719bf0a11056ec$exports, "__esModule", {
    value: true
});
$24719bf0a11056ec$exports.Details = void 0;

var $24719bf0a11056ec$var$_react = $24719bf0a11056ec$var$_interopRequireWildcard($i684g$react);

var $24719bf0a11056ec$var$_reactMergeRefs = $24719bf0a11056ec$var$_interopRequireDefault($i684g$reactmergerefs);

var $24719bf0a11056ec$var$_classnames = $24719bf0a11056ec$var$_interopRequireDefault($i684g$classnames);


function $24719bf0a11056ec$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $24719bf0a11056ec$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($24719bf0a11056ec$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $24719bf0a11056ec$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $24719bf0a11056ec$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $24719bf0a11056ec$var$Details = /*#__PURE__*/ (0, $24719bf0a11056ec$var$_react.forwardRef)(function Details(_ref, ref) {
    let { title: title , children: children , className: className  } = _ref;
    const localRef = (0, $24719bf0a11056ec$var$_react.useRef)(null);
    (0, $24719bf0a11056ec$var$_react.useEffect)(()=>{
        if (localRef.current) new $i684g$lbhfrontend.Details(localRef.current).init();
    }, []);
    const classes = {
        "govuk-details lbh-details": true
    };
    return /*#__PURE__*/ $24719bf0a11056ec$var$_react.default.createElement("details", {
        id: "mtfh-details",
        "data-testid": "mtfh-details",
        className: (0, $24719bf0a11056ec$var$_classnames.default)(classes, className),
        "data-module": "govuk-details",
        ref: (0, $24719bf0a11056ec$var$_reactMergeRefs.default)([
            localRef,
            ref
        ])
    }, /*#__PURE__*/ $24719bf0a11056ec$var$_react.default.createElement("summary", {
        className: "govuk-details__summary"
    }, /*#__PURE__*/ $24719bf0a11056ec$var$_react.default.createElement("span", {
        className: "govuk-details__summary-text"
    }, title)), /*#__PURE__*/ $24719bf0a11056ec$var$_react.default.createElement("div", {
        className: "govuk-details__text"
    }, children));
});
$24719bf0a11056ec$exports.Details = $24719bf0a11056ec$var$Details;


Object.keys($24719bf0a11056ec$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $dcde123d5eff736d$exports && $dcde123d5eff736d$exports[key] === $24719bf0a11056ec$exports[key]) return;
    Object.defineProperty($dcde123d5eff736d$exports, key, {
        enumerable: true,
        get: function() {
            return $24719bf0a11056ec$exports[key];
        }
    });
});


Object.keys($dcde123d5eff736d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $dcde123d5eff736d$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $dcde123d5eff736d$exports[key];
        }
    });
});

Object.keys($570eaa952d8e00b9$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $570eaa952d8e00b9$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $570eaa952d8e00b9$exports[key];
        }
    });
});
var $75b5dd6c05428eea$exports = {};
"use strict";
Object.defineProperty($75b5dd6c05428eea$exports, "__esModule", {
    value: true
});
var $136b7732e8aceff6$exports = {};
"use strict";
Object.defineProperty($136b7732e8aceff6$exports, "__esModule", {
    value: true
});
$136b7732e8aceff6$exports.TimeField = $136b7732e8aceff6$exports.InlineField = $136b7732e8aceff6$exports.Field = $136b7732e8aceff6$exports.DateField = void 0;

var $136b7732e8aceff6$var$_react = $136b7732e8aceff6$var$_interopRequireWildcard($i684g$react);


var $12c1e7079cef95d7$exports = {};
"use strict";
Object.defineProperty($12c1e7079cef95d7$exports, "__esModule", {
    value: true
});
var $21fe3bd2b5f1a50d$exports = {};
"use strict";
Object.defineProperty($21fe3bd2b5f1a50d$exports, "__esModule", {
    value: true
});
$21fe3bd2b5f1a50d$exports.FormGroup = void 0;

var $21fe3bd2b5f1a50d$var$_react = $21fe3bd2b5f1a50d$var$_interopRequireWildcard($i684g$react);

var $21fe3bd2b5f1a50d$var$_classnames = $21fe3bd2b5f1a50d$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");
var $30cb9ca3841e837d$exports = {};
"use strict";
Object.defineProperty($30cb9ca3841e837d$exports, "__esModule", {
    value: true
});
var $fce28c0a9ce8552c$exports = {};
"use strict";
Object.defineProperty($fce28c0a9ce8552c$exports, "__esModule", {
    value: true
});
$fce28c0a9ce8552c$exports.TextArea = void 0;

var $fce28c0a9ce8552c$var$_react = $fce28c0a9ce8552c$var$_interopRequireWildcard($i684g$react);

var $fce28c0a9ce8552c$var$_classnames = $fce28c0a9ce8552c$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $fce28c0a9ce8552c$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $fce28c0a9ce8552c$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($fce28c0a9ce8552c$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $fce28c0a9ce8552c$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $fce28c0a9ce8552c$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $fce28c0a9ce8552c$var$_extends() {
    $fce28c0a9ce8552c$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $fce28c0a9ce8552c$var$_extends.apply(this, arguments);
}
const $fce28c0a9ce8552c$var$getLengthOfValue = (initialValue)=>{
    if (typeof initialValue === "string") return initialValue.length;
    if (Array.isArray(initialValue)) return initialValue.join(",").length;
    return String(initialValue || "").length;
};
const $fce28c0a9ce8552c$var$TextArea = /*#__PURE__*/ (0, $fce28c0a9ce8552c$var$_react.forwardRef)(function TextArea(_ref, ref) {
    let { maxLength: maxLength , error: error , className: className , onChange: onChange , override: override , ...props } = _ref;
    const { value: value , defaultValue: defaultValue  } = props;
    const isControlled = value !== undefined;
    const initialValue = value || defaultValue;
    const [characterCount, setCharacterCount] = (0, $fce28c0a9ce8552c$var$_react.useState)($fce28c0a9ce8552c$var$getLengthOfValue(initialValue));
    const onChangeHandler = (0, $fce28c0a9ce8552c$var$_react.useCallback)((event)=>{
        if (event?.currentTarget?.value !== undefined && !isControlled && maxLength !== undefined) setCharacterCount(String(event.currentTarget.value).length);
        if (typeof onChange === "function") onChange(event);
    }, [
        onChange,
        maxLength,
        isControlled
    ]);
    const exceedingValue = (0, $fce28c0a9ce8552c$var$_react.useMemo)(()=>maxLength !== undefined && maxLength - (isControlled ? $fce28c0a9ce8552c$var$getLengthOfValue(value) : characterCount), [
        maxLength,
        characterCount,
        value,
        isControlled
    ]);
    const textareaClasses = (0, $fce28c0a9ce8552c$var$_classnames.default)("govuk-textarea", "lbh-textarea", {
        "govuk-textarea--error": error
    }, "lbh-character-count", (0, $jg4db.widthOverrides)(override), className);
    const messageClasses = (0, $fce28c0a9ce8552c$var$_classnames.default)({
        "govuk-hint": exceedingValue >= 0
    }, "govuk-character-count__message", {
        "govuk-error-message": exceedingValue < 0
    }, (0, $jg4db.widthOverrides)(override));
    return /*#__PURE__*/ $fce28c0a9ce8552c$var$_react.default.createElement($fce28c0a9ce8552c$var$_react.default.Fragment, null, /*#__PURE__*/ $fce28c0a9ce8552c$var$_react.default.createElement("textarea", $fce28c0a9ce8552c$var$_extends({
        ref: ref,
        className: textareaClasses,
        onChange: onChangeHandler
    }, props)), maxLength !== undefined && /*#__PURE__*/ $fce28c0a9ce8552c$var$_react.default.createElement("span", {
        className: messageClasses,
        "aria-live": "polite"
    }, exceedingValue >= 0 ? `You have ${exceedingValue} ${(0, $jg4db.pluralize)("character", exceedingValue)} remaining` : `You have ${Math.abs(exceedingValue)} ${(0, $jg4db.pluralize)("character", exceedingValue)} too many`));
});
$fce28c0a9ce8552c$exports.TextArea = $fce28c0a9ce8552c$var$TextArea;


Object.keys($fce28c0a9ce8552c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $30cb9ca3841e837d$exports && $30cb9ca3841e837d$exports[key] === $fce28c0a9ce8552c$exports[key]) return;
    Object.defineProperty($30cb9ca3841e837d$exports, key, {
        enumerable: true,
        get: function() {
            return $fce28c0a9ce8552c$exports[key];
        }
    });
});



function $21fe3bd2b5f1a50d$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $21fe3bd2b5f1a50d$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($21fe3bd2b5f1a50d$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $21fe3bd2b5f1a50d$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $21fe3bd2b5f1a50d$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $21fe3bd2b5f1a50d$var$_extends() {
    $21fe3bd2b5f1a50d$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $21fe3bd2b5f1a50d$var$_extends.apply(this, arguments);
}
const $21fe3bd2b5f1a50d$var$FormGroup = /*#__PURE__*/ (0, $21fe3bd2b5f1a50d$var$_react.forwardRef)(function FormGroup(_ref, ref) {
    let { as: FormGroupComp = "div" , id: id , name: name , label: label , hint: hint , error: error , required: required , children: children , className: className , override: override , ...props } = _ref;
    const formGroupClasses = (0, $21fe3bd2b5f1a50d$var$_classnames.default)("govuk-form-group", {
        "govuk-form-group--error": !!error
    }, "lbh-form-group", (0, $jg4db.widthOverrides)(override), className);
    const describedBy = (0, $21fe3bd2b5f1a50d$var$_react.useMemo)(()=>{
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
    const formGroup = /*#__PURE__*/ $21fe3bd2b5f1a50d$var$_react.default.createElement(FormGroupComp, $21fe3bd2b5f1a50d$var$_extends({
        ref: ref,
        id: id,
        className: formGroupClasses
    }, props), /*#__PURE__*/ $21fe3bd2b5f1a50d$var$_react.default.createElement(LabelComp, {
        className: "govuk-label lbh-label",
        htmlFor: `${id}-field`
    }, label, required ? /*#__PURE__*/ $21fe3bd2b5f1a50d$var$_react.default.createElement("sup", {
        "aria-hidden": "true"
    }, "*") : ""), !!hint && /*#__PURE__*/ $21fe3bd2b5f1a50d$var$_react.default.createElement("span", {
        id: `${id}-hint`,
        className: "govuk-hint lbh-hint"
    }, hint), !!error && /*#__PURE__*/ $21fe3bd2b5f1a50d$var$_react.default.createElement("span", {
        id: `${id}-error`,
        className: "govuk-error-message lbh-error-message"
    }, /*#__PURE__*/ $21fe3bd2b5f1a50d$var$_react.default.createElement("span", {
        className: "govuk-visually-hidden"
    }, "Error:"), " ", error), !!children && $21fe3bd2b5f1a50d$var$_react.Children.only(/*#__PURE__*/ (0, $21fe3bd2b5f1a50d$var$_react.cloneElement)(children, {
        id: `${id}-field`,
        name: name,
        required: required,
        error: !!error,
        "aria-describedby": describedBy || undefined,
        ...children.props
    })));
    return /*#__PURE__*/ (0, $21fe3bd2b5f1a50d$var$_react.isValidElement)(children) && children.type === $30cb9ca3841e837d$exports.TextArea ? /*#__PURE__*/ $21fe3bd2b5f1a50d$var$_react.default.createElement("div", {
        className: "govuk-character-count"
    }, formGroup) : formGroup;
});
$21fe3bd2b5f1a50d$exports.FormGroup = $21fe3bd2b5f1a50d$var$FormGroup;


Object.keys($21fe3bd2b5f1a50d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $12c1e7079cef95d7$exports && $12c1e7079cef95d7$exports[key] === $21fe3bd2b5f1a50d$exports[key]) return;
    Object.defineProperty($12c1e7079cef95d7$exports, key, {
        enumerable: true,
        get: function() {
            return $21fe3bd2b5f1a50d$exports[key];
        }
    });
});



function $136b7732e8aceff6$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($136b7732e8aceff6$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $136b7732e8aceff6$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $136b7732e8aceff6$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $136b7732e8aceff6$var$_extends() {
    $136b7732e8aceff6$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $136b7732e8aceff6$var$_extends.apply(this, arguments);
}
const $136b7732e8aceff6$var$Field = (_ref)=>{
    let { id: id , label: label , children: children , name: name , type: type , ...props } = _ref;
    const [field, meta] = (0, $i684g$formik.useField)({
        name: name,
        type: type,
        value: children.props.value
    });
    const comp = type === "checkbox" || type === "radio" ? "fieldset" : "div";
    return /*#__PURE__*/ $136b7732e8aceff6$var$_react.default.createElement($12c1e7079cef95d7$exports.FormGroup, $136b7732e8aceff6$var$_extends({
        as: comp,
        id: id,
        label: label,
        error: meta.error
    }, props), /*#__PURE__*/ (0, $136b7732e8aceff6$var$_react.cloneElement)(children, {
        ...field
    }));
};
$136b7732e8aceff6$exports.Field = $136b7732e8aceff6$var$Field;
const $136b7732e8aceff6$var$InlineField = (_ref2)=>{
    let { children: children , name: name , type: type , ...props } = _ref2;
    const [field, meta] = (0, $i684g$formik.useField)({
        name: name,
        type: type,
        value: children.props.value
    });
    return /*#__PURE__*/ (0, $136b7732e8aceff6$var$_react.cloneElement)(children, {
        ...field,
        ...props,
        error: meta.error
    });
};
$136b7732e8aceff6$exports.InlineField = $136b7732e8aceff6$var$InlineField;
const $136b7732e8aceff6$var$DateField = (_ref3)=>{
    let { dayProps: { name: dayName , ...dayProps } , monthProps: { name: monthName , ...monthProps } , yearProps: { name: yearName , ...yearProps } , dayLabel: dayLabel = "Day" , monthLabel: monthLabel = "Month" , yearLabel: yearLabel = "Year" , fieldError: fieldError , ...props } = _ref3;
    const [dayField, dayMeta] = (0, $i684g$formik.useField)(dayName);
    const [monthField, monthMeta] = (0, $i684g$formik.useField)(monthName);
    const [yearField, yearMeta] = (0, $i684g$formik.useField)(yearName);
    const error = fieldError || dayMeta.error || monthMeta.error || yearMeta.error;
    return /*#__PURE__*/ $136b7732e8aceff6$var$_react.default.createElement($12c1e7079cef95d7$exports.FormGroup, $136b7732e8aceff6$var$_extends({
        as: "fieldset",
        error: error
    }, props), /*#__PURE__*/ $136b7732e8aceff6$var$_react.default.createElement($5e01b0390258679e$exports.DateInput, {
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
    }));
};
$136b7732e8aceff6$exports.DateField = $136b7732e8aceff6$var$DateField;
const $136b7732e8aceff6$var$TimeField = (_ref4)=>{
    let { hourProps: { name: hourName , ...hourProps } , minuteProps: { name: minuteName , ...minuteProps } , amPmProps: { name: amPmName , ...amPmProps } , hourLabel: hourLabel = "Hour" , minuteLabel: minuteLabel = "Minute" , amPmLabel: amPmLabel = "am/pm" , ...props } = _ref4;
    const [hourField, hourMeta] = (0, $i684g$formik.useField)(hourName);
    const [minuteField, minuteMeta] = (0, $i684g$formik.useField)(minuteName);
    const [amPmField, amPmMeta] = (0, $i684g$formik.useField)(amPmName);
    const error = hourMeta.error || minuteMeta.error || amPmMeta.error;
    return /*#__PURE__*/ $136b7732e8aceff6$var$_react.default.createElement($12c1e7079cef95d7$exports.FormGroup, $136b7732e8aceff6$var$_extends({
        as: "fieldset",
        error: error
    }, props), /*#__PURE__*/ $136b7732e8aceff6$var$_react.default.createElement($7c0c76825baed95e$exports.TimeInput, {
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
    }));
};
$136b7732e8aceff6$exports.TimeField = $136b7732e8aceff6$var$TimeField;


Object.keys($136b7732e8aceff6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $75b5dd6c05428eea$exports && $75b5dd6c05428eea$exports[key] === $136b7732e8aceff6$exports[key]) return;
    Object.defineProperty($75b5dd6c05428eea$exports, key, {
        enumerable: true,
        get: function() {
            return $136b7732e8aceff6$exports[key];
        }
    });
});


Object.keys($75b5dd6c05428eea$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $75b5dd6c05428eea$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $75b5dd6c05428eea$exports[key];
        }
    });
});
var $e5d671463ee8fb76$exports = {};
"use strict";
Object.defineProperty($e5d671463ee8fb76$exports, "__esModule", {
    value: true
});
var $4e36fd3d28bb783a$exports = {};
"use strict";
Object.defineProperty($4e36fd3d28bb783a$exports, "__esModule", {
    value: true
});
$4e36fd3d28bb783a$exports.Fieldset = void 0;

var $4e36fd3d28bb783a$var$_react = $4e36fd3d28bb783a$var$_interopRequireWildcard($i684g$react);

var $4e36fd3d28bb783a$var$_classnames = $4e36fd3d28bb783a$var$_interopRequireDefault($i684g$classnames);

var $jg4db = parcelRequire("jg4db");

function $4e36fd3d28bb783a$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $4e36fd3d28bb783a$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($4e36fd3d28bb783a$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $4e36fd3d28bb783a$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $4e36fd3d28bb783a$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $4e36fd3d28bb783a$var$_extends() {
    $4e36fd3d28bb783a$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $4e36fd3d28bb783a$var$_extends.apply(this, arguments);
}
const $4e36fd3d28bb783a$var$Fieldset = /*#__PURE__*/ (0, $4e36fd3d28bb783a$var$_react.forwardRef)(function Fieldset(_ref, ref) {
    let { variant: variant = "base" , indent: indent = false , error: error , heading: heading , children: children , className: className , override: override , ...props } = _ref;
    return /*#__PURE__*/ $4e36fd3d28bb783a$var$_react.default.createElement("fieldset", $4e36fd3d28bb783a$var$_extends({
        ref: ref,
        className: (0, $4e36fd3d28bb783a$var$_classnames.default)("govuk-fieldset", "lbh-fieldset", {
            "mtfh-fieldset--indent": indent,
            "mtfh-fieldset--error": !!error
        }, (0, $jg4db.widthOverrides)(override), className)
    }, props), /*#__PURE__*/ $4e36fd3d28bb783a$var$_react.default.createElement("legend", {
        className: (0, $4e36fd3d28bb783a$var$_classnames.default)("govuk-fieldset__legend", {
            "govuk-fieldset__legend--s": variant === "small",
            "govuk-fieldset__legend--m": variant === "medium",
            "govuk-fieldset__legend--l": variant === "large",
            "govuk-fieldset__legend--xl": variant === "xlarge",
            "govuk-visually-hidden": variant === "hidden"
        })
    }, typeof heading !== "string" ? /*#__PURE__*/ (0, $4e36fd3d28bb783a$var$_react.isValidElement)(heading) && /*#__PURE__*/ (0, $4e36fd3d28bb783a$var$_react.cloneElement)(heading, {
        className: (0, $4e36fd3d28bb783a$var$_classnames.default)("govuk-fieldset__heading", heading.props.className)
    }) : heading, error && /*#__PURE__*/ $4e36fd3d28bb783a$var$_react.default.createElement("div", {
        className: "govuk-visually-hidden"
    }, " ", error)), /*#__PURE__*/ $4e36fd3d28bb783a$var$_react.default.createElement("div", {
        className: (0, $4e36fd3d28bb783a$var$_classnames.default)("mtfh-fieldset__content")
    }, error && /*#__PURE__*/ $4e36fd3d28bb783a$var$_react.default.createElement("span", {
        className: "govuk-error-message lbh-error-message",
        "aria-hidden": "true"
    }, error), children));
});
$4e36fd3d28bb783a$exports.Fieldset = $4e36fd3d28bb783a$var$Fieldset;


Object.keys($4e36fd3d28bb783a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $e5d671463ee8fb76$exports && $e5d671463ee8fb76$exports[key] === $4e36fd3d28bb783a$exports[key]) return;
    Object.defineProperty($e5d671463ee8fb76$exports, key, {
        enumerable: true,
        get: function() {
            return $4e36fd3d28bb783a$exports[key];
        }
    });
});


Object.keys($e5d671463ee8fb76$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $e5d671463ee8fb76$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $e5d671463ee8fb76$exports[key];
        }
    });
});

Object.keys($12c1e7079cef95d7$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $12c1e7079cef95d7$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $12c1e7079cef95d7$exports[key];
        }
    });
});

Object.keys($57b31647f201adaa$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $57b31647f201adaa$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $57b31647f201adaa$exports[key];
        }
    });
});

Object.keys($5d49091b4fbff3c5$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $5d49091b4fbff3c5$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $5d49091b4fbff3c5$exports[key];
        }
    });
});

Object.keys($165ff1fef9a7a447$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $165ff1fef9a7a447$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $165ff1fef9a7a447$exports[key];
        }
    });
});
var $0fb9a6868d1609bf$exports = {};
"use strict";
Object.defineProperty($0fb9a6868d1609bf$exports, "__esModule", {
    value: true
});
var $820848fad28fd1d6$exports = {};
"use strict";
Object.defineProperty($820848fad28fd1d6$exports, "__esModule", {
    value: true
});
$820848fad28fd1d6$exports.Layout = void 0;

var $820848fad28fd1d6$var$_react = $820848fad28fd1d6$var$_interopRequireWildcard($i684g$react);

var $820848fad28fd1d6$var$_classnames = $820848fad28fd1d6$var$_interopRequireDefault($i684g$classnames);

function $820848fad28fd1d6$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $820848fad28fd1d6$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($820848fad28fd1d6$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $820848fad28fd1d6$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $820848fad28fd1d6$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $820848fad28fd1d6$var$_extends() {
    $820848fad28fd1d6$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $820848fad28fd1d6$var$_extends.apply(this, arguments);
}
const $820848fad28fd1d6$var$Layout = /*#__PURE__*/ (0, $820848fad28fd1d6$var$_react.forwardRef)(function Layout(_ref, ref) {
    let { children: children , top: top , backLink: backLink , side: side , className: className , sidePosition: sidePosition = "left" , ...props } = _ref;
    return /*#__PURE__*/ $820848fad28fd1d6$var$_react.default.createElement("div", $820848fad28fd1d6$var$_extends({
        ref: ref,
        className: (0, $820848fad28fd1d6$var$_classnames.default)("mtfh-layout", {
            "mtfh-layout--narrow": !side,
            "mtfh-layout--right": sidePosition === "right"
        }, className)
    }, props), backLink, /*#__PURE__*/ $820848fad28fd1d6$var$_react.default.createElement("div", {
        id: "content"
    }), top, /*#__PURE__*/ $820848fad28fd1d6$var$_react.default.createElement("div", {
        className: "mtfh-layout__container"
    }, side ? /*#__PURE__*/ $820848fad28fd1d6$var$_react.default.createElement("div", {
        className: "mtfh-layout__aside"
    }, side) : null, /*#__PURE__*/ $820848fad28fd1d6$var$_react.default.createElement("div", {
        className: "mtfh-layout__main"
    }, children)));
});
$820848fad28fd1d6$exports.Layout = $820848fad28fd1d6$var$Layout;


Object.keys($820848fad28fd1d6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0fb9a6868d1609bf$exports && $0fb9a6868d1609bf$exports[key] === $820848fad28fd1d6$exports[key]) return;
    Object.defineProperty($0fb9a6868d1609bf$exports, key, {
        enumerable: true,
        get: function() {
            return $820848fad28fd1d6$exports[key];
        }
    });
});


Object.keys($0fb9a6868d1609bf$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $0fb9a6868d1609bf$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $0fb9a6868d1609bf$exports[key];
        }
    });
});

var $3f5PC = parcelRequire("3f5PC");
Object.keys($3f5PC).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $3f5PC[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $3f5PC[key];
        }
    });
});

var $7PPqg = parcelRequire("7PPqg");
Object.keys($7PPqg).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $7PPqg[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $7PPqg[key];
        }
    });
});
var $2c5cf46c35ce7028$exports = {};
"use strict";
Object.defineProperty($2c5cf46c35ce7028$exports, "__esModule", {
    value: true
});
var $e958fc6bf6d3f984$exports = {};
"use strict";
Object.defineProperty($e958fc6bf6d3f984$exports, "__esModule", {
    value: true
});
$e958fc6bf6d3f984$exports.LinkButton = void 0;

var $e958fc6bf6d3f984$var$_react = $e958fc6bf6d3f984$var$_interopRequireWildcard($i684g$react);

var $e958fc6bf6d3f984$var$_classnames = $e958fc6bf6d3f984$var$_interopRequireDefault($i684g$classnames);

function $e958fc6bf6d3f984$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $e958fc6bf6d3f984$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($e958fc6bf6d3f984$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $e958fc6bf6d3f984$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $e958fc6bf6d3f984$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $e958fc6bf6d3f984$var$_extends() {
    $e958fc6bf6d3f984$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $e958fc6bf6d3f984$var$_extends.apply(this, arguments);
}
const $e958fc6bf6d3f984$var$LinkButton = /*#__PURE__*/ (0, $e958fc6bf6d3f984$var$_react.forwardRef)(function LinkButton(_ref, ref) {
    let { variant: variant = "link" , className: className , children: children , ...props } = _ref;
    const linkClasses = (0, $e958fc6bf6d3f984$var$_classnames.default)(variant !== "native" && {
        "govuk-link lbh-link": variant !== "back-link",
        "govuk-back-link lbh-back-link": variant === "back-link",
        [`lbh-link--${variant}`]: variant !== "link" && variant !== "back-link"
    }, className);
    return /*#__PURE__*/ $e958fc6bf6d3f984$var$_react.default.createElement("button", $e958fc6bf6d3f984$var$_extends({
        ref: ref,
        className: linkClasses,
        type: "button"
    }, props), children);
});
$e958fc6bf6d3f984$exports.LinkButton = $e958fc6bf6d3f984$var$LinkButton;


Object.keys($e958fc6bf6d3f984$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $2c5cf46c35ce7028$exports && $2c5cf46c35ce7028$exports[key] === $e958fc6bf6d3f984$exports[key]) return;
    Object.defineProperty($2c5cf46c35ce7028$exports, key, {
        enumerable: true,
        get: function() {
            return $e958fc6bf6d3f984$exports[key];
        }
    });
});


Object.keys($2c5cf46c35ce7028$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $2c5cf46c35ce7028$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $2c5cf46c35ce7028$exports[key];
        }
    });
});
var $44455de626eb7417$exports = {};
"use strict";
Object.defineProperty($44455de626eb7417$exports, "__esModule", {
    value: true
});
var $6d86023b75c6886f$exports = {};
"use strict";
Object.defineProperty($6d86023b75c6886f$exports, "__esModule", {
    value: true
});
$6d86023b75c6886f$exports.List = void 0;

var $6d86023b75c6886f$var$_react = $6d86023b75c6886f$var$_interopRequireWildcard($i684g$react);

var $6d86023b75c6886f$var$_classnames = $6d86023b75c6886f$var$_interopRequireDefault($i684g$classnames);

function $6d86023b75c6886f$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $6d86023b75c6886f$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($6d86023b75c6886f$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $6d86023b75c6886f$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $6d86023b75c6886f$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $6d86023b75c6886f$var$_extends() {
    $6d86023b75c6886f$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $6d86023b75c6886f$var$_extends.apply(this, arguments);
}
const $6d86023b75c6886f$var$List = /*#__PURE__*/ (0, $6d86023b75c6886f$var$_react.forwardRef)(function List(_ref, ref) {
    let { as: ListComp = "ul" , variant: variant = "base" , className: className , children: children , ...props } = _ref;
    return /*#__PURE__*/ $6d86023b75c6886f$var$_react.default.createElement(ListComp, $6d86023b75c6886f$var$_extends({
        ref: ref,
        className: (0, $6d86023b75c6886f$var$_classnames.default)("lbh-list", {
            "lbh-list--bullet": variant === "bullets",
            "lbh-list--number": variant === "numbers"
        }, className)
    }, props), $6d86023b75c6886f$var$_react.default.Children.map(children, (child, index)=>child && /*#__PURE__*/ (0, $6d86023b75c6886f$var$_react.isValidElement)(child) && /*#__PURE__*/ $6d86023b75c6886f$var$_react.default.createElement("li", {
            key: index
        }, child)));
});
$6d86023b75c6886f$exports.List = $6d86023b75c6886f$var$List;


Object.keys($6d86023b75c6886f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $44455de626eb7417$exports && $44455de626eb7417$exports[key] === $6d86023b75c6886f$exports[key]) return;
    Object.defineProperty($44455de626eb7417$exports, key, {
        enumerable: true,
        get: function() {
            return $6d86023b75c6886f$exports[key];
        }
    });
});


Object.keys($44455de626eb7417$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $44455de626eb7417$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $44455de626eb7417$exports[key];
        }
    });
});

Object.keys($f7389a6cf3d553f6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $f7389a6cf3d553f6$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $f7389a6cf3d553f6$exports[key];
        }
    });
});
var $17b2842e98f74990$exports = {};
"use strict";
Object.defineProperty($17b2842e98f74990$exports, "__esModule", {
    value: true
});
var $d05b633602b4cd9c$exports = {};
"use strict";
Object.defineProperty($d05b633602b4cd9c$exports, "__esModule", {
    value: true
});
$d05b633602b4cd9c$exports.usePageAnnouncement = $d05b633602b4cd9c$exports.PageAnnouncementProvider = $d05b633602b4cd9c$exports.PageAnnouncementContext = void 0;

var $d05b633602b4cd9c$var$_react = $d05b633602b4cd9c$var$_interopRequireWildcard($i684g$react);
function $d05b633602b4cd9c$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($d05b633602b4cd9c$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $d05b633602b4cd9c$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $d05b633602b4cd9c$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $d05b633602b4cd9c$var$PageAnnouncementContext = /*#__PURE__*/ (0, $d05b633602b4cd9c$var$_react.createContext)(undefined);
$d05b633602b4cd9c$exports.PageAnnouncementContext = $d05b633602b4cd9c$var$PageAnnouncementContext;
$d05b633602b4cd9c$var$PageAnnouncementContext.displayName = "PageAnnouncementContext";
const $d05b633602b4cd9c$var$usePageAnnouncement = ()=>{
    const context = (0, $d05b633602b4cd9c$var$_react.useContext)($d05b633602b4cd9c$var$PageAnnouncementContext);
    if (!context) {
        const error = new Error("usePageAnnouncementContext: `context` is undefined. Seems you forgot to wrap component within the Provider");
        Error.captureStackTrace?.(error, $d05b633602b4cd9c$var$usePageAnnouncement);
        throw error;
    }
    const { state: state , dispatch: dispatch  } = context;
    const addAnnouncement = (0, $d05b633602b4cd9c$var$_react.useCallback)((props)=>{
        dispatch({
            type: "ADD",
            payload: props
        });
    }, [
        dispatch
    ]);
    const clearAnnouncement = (0, $d05b633602b4cd9c$var$_react.useCallback)(()=>{
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
$d05b633602b4cd9c$exports.usePageAnnouncement = $d05b633602b4cd9c$var$usePageAnnouncement;
const $d05b633602b4cd9c$var$PageAnnouncementProvider = (_ref)=>{
    let { sessionKey: sessionKey , children: children  } = _ref;
    const reducer = (state, action)=>{
        switch(action.type){
            case "ADD":
                return action.payload;
            case "CLEAR":
            default:
                return undefined;
        }
    };
    const initialData = (0, $d05b633602b4cd9c$var$_react.useMemo)(()=>{
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
    const [state, dispatch] = (0, $d05b633602b4cd9c$var$_react.useReducer)(reducer, initialData);
    const value = (0, $d05b633602b4cd9c$var$_react.useMemo)(()=>({
            state: state,
            dispatch: dispatch
        }), [
        state,
        dispatch
    ]);
    return /*#__PURE__*/ $d05b633602b4cd9c$var$_react.default.createElement($d05b633602b4cd9c$var$PageAnnouncementContext.Provider, {
        value: value
    }, children);
};
$d05b633602b4cd9c$exports.PageAnnouncementProvider = $d05b633602b4cd9c$var$PageAnnouncementProvider;


Object.keys($d05b633602b4cd9c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $17b2842e98f74990$exports && $17b2842e98f74990$exports[key] === $d05b633602b4cd9c$exports[key]) return;
    Object.defineProperty($17b2842e98f74990$exports, key, {
        enumerable: true,
        get: function() {
            return $d05b633602b4cd9c$exports[key];
        }
    });
});
var $47d222e2f10b703e$exports = {};
"use strict";
Object.defineProperty($47d222e2f10b703e$exports, "__esModule", {
    value: true
});
$47d222e2f10b703e$exports.PageAnnouncement = void 0;

var $47d222e2f10b703e$var$_react = $47d222e2f10b703e$var$_interopRequireWildcard($i684g$react);

var $47d222e2f10b703e$var$_classnames = $47d222e2f10b703e$var$_interopRequireDefault($i684g$classnames);


function $47d222e2f10b703e$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $47d222e2f10b703e$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($47d222e2f10b703e$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $47d222e2f10b703e$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $47d222e2f10b703e$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $47d222e2f10b703e$var$_extends() {
    $47d222e2f10b703e$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $47d222e2f10b703e$var$_extends.apply(this, arguments);
}
const $47d222e2f10b703e$var$PageAnnouncement = /*#__PURE__*/ (0, $47d222e2f10b703e$var$_react.forwardRef)(function PageAnnouncement(_ref, ref) {
    let { className: className , ...props } = _ref;
    const context = (0, $47d222e2f10b703e$var$_react.useContext)($d05b633602b4cd9c$exports.PageAnnouncementContext);
    if (!context?.state?.heading && !props.heading) return null;
    const { heading: heading , description: description , variant: variant = "success" , ...rest } = {
        ...context?.state,
        ...props
    };
    return /*#__PURE__*/ $47d222e2f10b703e$var$_react.default.createElement("section", $47d222e2f10b703e$var$_extends({
        ref: ref,
        className: (0, $47d222e2f10b703e$var$_classnames.default)("lbh-page-announcement", {
            [`lbh-page-announcement--${variant}`]: variant && variant !== "success"
        }, className)
    }, rest, {
        role: "alert"
    }), /*#__PURE__*/ $47d222e2f10b703e$var$_react.default.createElement("h3", {
        className: "lbh-page-announcement__title"
    }, heading), !!description && /*#__PURE__*/ $47d222e2f10b703e$var$_react.default.createElement("div", {
        className: "lbh-page-announcement__content"
    }, description));
});
$47d222e2f10b703e$exports.PageAnnouncement = $47d222e2f10b703e$var$PageAnnouncement;


Object.keys($47d222e2f10b703e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $17b2842e98f74990$exports && $17b2842e98f74990$exports[key] === $47d222e2f10b703e$exports[key]) return;
    Object.defineProperty($17b2842e98f74990$exports, key, {
        enumerable: true,
        get: function() {
            return $47d222e2f10b703e$exports[key];
        }
    });
});


Object.keys($17b2842e98f74990$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $17b2842e98f74990$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $17b2842e98f74990$exports[key];
        }
    });
});
var $3152284388f1a123$exports = {};
"use strict";
Object.defineProperty($3152284388f1a123$exports, "__esModule", {
    value: true
});
var $d42cb025a69061a4$exports = {};
"use strict";
Object.defineProperty($d42cb025a69061a4$exports, "__esModule", {
    value: true
});
$d42cb025a69061a4$exports.PaginationSummary = $d42cb025a69061a4$exports.PaginationControls = $d42cb025a69061a4$exports.PaginationButton = $d42cb025a69061a4$exports.Pagination = void 0;

var $d42cb025a69061a4$var$_react = $d42cb025a69061a4$var$_interopRequireWildcard($i684g$react);

var $d42cb025a69061a4$var$_classnames = $d42cb025a69061a4$var$_interopRequireDefault($i684g$classnames);

function $d42cb025a69061a4$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $d42cb025a69061a4$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($d42cb025a69061a4$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $d42cb025a69061a4$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $d42cb025a69061a4$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $d42cb025a69061a4$var$_extends() {
    $d42cb025a69061a4$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $d42cb025a69061a4$var$_extends.apply(this, arguments);
}
const $d42cb025a69061a4$var$Pagination = /*#__PURE__*/ (0, $d42cb025a69061a4$var$_react.forwardRef)(function Pagination(_ref, ref) {
    let { className: className , variant: variant = "base" , ...props } = _ref;
    return /*#__PURE__*/ $d42cb025a69061a4$var$_react.default.createElement("nav", $d42cb025a69061a4$var$_extends({
        ref: ref,
        className: (0, $d42cb025a69061a4$var$_classnames.default)("lbh-pagination", {
            "lbh-pagination--center": variant === "center"
        }, className)
    }, props));
});
$d42cb025a69061a4$exports.Pagination = $d42cb025a69061a4$var$Pagination;
const $d42cb025a69061a4$var$PaginationControls = /*#__PURE__*/ (0, $d42cb025a69061a4$var$_react.forwardRef)(function PaginationControls(_ref2, ref) {
    let { className: className , children: children , ...props } = _ref2;
    return /*#__PURE__*/ $d42cb025a69061a4$var$_react.default.createElement("ul", $d42cb025a69061a4$var$_extends({
        ref: ref,
        className: (0, $d42cb025a69061a4$var$_classnames.default)("lbh-pagination__list", className)
    }, props), $d42cb025a69061a4$var$_react.Children.map(children, (child)=>child && /*#__PURE__*/ $d42cb025a69061a4$var$_react.default.createElement("li", {
            className: "lbh-pagination__item"
        }, child)));
});
$d42cb025a69061a4$exports.PaginationControls = $d42cb025a69061a4$var$PaginationControls;
const $d42cb025a69061a4$var$PaginationSummary = /*#__PURE__*/ (0, $d42cb025a69061a4$var$_react.forwardRef)(function PaginationSummary(_ref3, ref) {
    let { className: className , ...props } = _ref3;
    return /*#__PURE__*/ $d42cb025a69061a4$var$_react.default.createElement("div", $d42cb025a69061a4$var$_extends({
        ref: ref,
        className: (0, $d42cb025a69061a4$var$_classnames.default)("lbh-pagination__summary", className)
    }, props));
});
$d42cb025a69061a4$exports.PaginationSummary = $d42cb025a69061a4$var$PaginationSummary;
const $d42cb025a69061a4$var$PaginationButton = /*#__PURE__*/ (0, $d42cb025a69061a4$var$_react.forwardRef)(function PaginationButton(_ref4, ref) {
    let { as: PaginationComp = "a" , variant: variant = "base" , active: active = false , className: className , children: children , ...props } = _ref4;
    return /*#__PURE__*/ $d42cb025a69061a4$var$_react.default.createElement(PaginationComp, $d42cb025a69061a4$var$_extends({
        ref: ref,
        className: (0, $d42cb025a69061a4$var$_classnames.default)("lbh-pagination__link", {
            "lbh-pagination__link--next": variant === "next",
            "lbh-pagination__link--current": variant === "base" && active
        }, className),
        rel: variant !== "base" ? variant : undefined
    }, props), variant === "previous" ? /*#__PURE__*/ $d42cb025a69061a4$var$_react.default.createElement("span", {
        "aria-hidden": "true",
        role: "presentation"
    }, "\xab", " ") : null, children, variant === "next" ? /*#__PURE__*/ $d42cb025a69061a4$var$_react.default.createElement("span", {
        "aria-hidden": "true",
        role: "presentation"
    }, " ", "\xbb") : null);
});
$d42cb025a69061a4$exports.PaginationButton = $d42cb025a69061a4$var$PaginationButton;


Object.keys($d42cb025a69061a4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3152284388f1a123$exports && $3152284388f1a123$exports[key] === $d42cb025a69061a4$exports[key]) return;
    Object.defineProperty($3152284388f1a123$exports, key, {
        enumerable: true,
        get: function() {
            return $d42cb025a69061a4$exports[key];
        }
    });
});


Object.keys($3152284388f1a123$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $3152284388f1a123$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $3152284388f1a123$exports[key];
        }
    });
});
var $468b82790ee95cb1$exports = {};
"use strict";
Object.defineProperty($468b82790ee95cb1$exports, "__esModule", {
    value: true
});
var $52cde0e9969cdce8$exports = {};
"use strict";
Object.defineProperty($52cde0e9969cdce8$exports, "__esModule", {
    value: true
});
$52cde0e9969cdce8$exports.PhaseBanner = void 0;

var $52cde0e9969cdce8$var$_react = $52cde0e9969cdce8$var$_interopRequireDefault($i684g$react);

var $52cde0e9969cdce8$var$_classnames = $52cde0e9969cdce8$var$_interopRequireDefault($i684g$classnames);

function $52cde0e9969cdce8$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $52cde0e9969cdce8$var$PhaseBanner = (_ref)=>{
    let { tag: tag , children: children , variant: variant = "grey"  } = _ref;
    const lbhTagColor = `lbh-tag--${variant}`;
    return /*#__PURE__*/ $52cde0e9969cdce8$var$_react.default.createElement("div", {
        className: "container-max-width lbh-phase-banner"
    }, /*#__PURE__*/ $52cde0e9969cdce8$var$_react.default.createElement("p", {
        className: "govuk-phase-banner__content"
    }, /*#__PURE__*/ $52cde0e9969cdce8$var$_react.default.createElement("strong", {
        className: (0, $52cde0e9969cdce8$var$_classnames.default)(`${lbhTagColor}`, "govuk-phase-banner__content__tag govuk-tag lbh-tag")
    }, tag), /*#__PURE__*/ $52cde0e9969cdce8$var$_react.default.createElement("span", {
        className: "govuk-phase-banner__text"
    }, children)));
};
$52cde0e9969cdce8$exports.PhaseBanner = $52cde0e9969cdce8$var$PhaseBanner;


Object.keys($52cde0e9969cdce8$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $468b82790ee95cb1$exports && $468b82790ee95cb1$exports[key] === $52cde0e9969cdce8$exports[key]) return;
    Object.defineProperty($468b82790ee95cb1$exports, key, {
        enumerable: true,
        get: function() {
            return $52cde0e9969cdce8$exports[key];
        }
    });
});


Object.keys($468b82790ee95cb1$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $468b82790ee95cb1$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $468b82790ee95cb1$exports[key];
        }
    });
});
var $33a8008972ce87e5$exports = {};
"use strict";
Object.defineProperty($33a8008972ce87e5$exports, "__esModule", {
    value: true
});
var $2d1f092ec8725726$exports = {};
"use strict";
Object.defineProperty($2d1f092ec8725726$exports, "__esModule", {
    value: true
});
$2d1f092ec8725726$exports.RadioGroup = $2d1f092ec8725726$exports.RadioDivider = $2d1f092ec8725726$exports.RadioConditional = $2d1f092ec8725726$exports.Radio = void 0;

var $2d1f092ec8725726$var$_react = $2d1f092ec8725726$var$_interopRequireWildcard($i684g$react);

var $2d1f092ec8725726$var$_reactMergeRefs = $2d1f092ec8725726$var$_interopRequireDefault($i684g$reactmergerefs);

var $2d1f092ec8725726$var$_classnames = $2d1f092ec8725726$var$_interopRequireDefault($i684g$classnames);


function $2d1f092ec8725726$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $2d1f092ec8725726$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($2d1f092ec8725726$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $2d1f092ec8725726$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $2d1f092ec8725726$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $2d1f092ec8725726$var$_extends() {
    $2d1f092ec8725726$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $2d1f092ec8725726$var$_extends.apply(this, arguments);
}
const $2d1f092ec8725726$var$Radio = /*#__PURE__*/ (0, $2d1f092ec8725726$var$_react.forwardRef)(function Radio(_ref, ref) {
    let { id: id , className: className , type: type = "radio" , hint: hint , children: children , conditionalId: conditionalId , error: error , ...props } = _ref;
    return /*#__PURE__*/ $2d1f092ec8725726$var$_react.default.createElement("div", {
        className: (0, $2d1f092ec8725726$var$_classnames.default)("govuk-radios__item", className)
    }, /*#__PURE__*/ $2d1f092ec8725726$var$_react.default.createElement("input", $2d1f092ec8725726$var$_extends({
        ref: ref,
        id: id,
        className: "govuk-radios__input",
        type: type,
        "aria-describedby": hint ? `${id}-hint` : undefined,
        "data-aria-controls": conditionalId
    }, props)), /*#__PURE__*/ $2d1f092ec8725726$var$_react.default.createElement("label", {
        className: "govuk-label govuk-radios__label",
        htmlFor: id
    }, children), hint ? /*#__PURE__*/ $2d1f092ec8725726$var$_react.default.createElement("span", {
        id: `${id}-hint`,
        className: "govuk-hint govuk-radios__hint"
    }, hint) : null);
});
$2d1f092ec8725726$exports.Radio = $2d1f092ec8725726$var$Radio;
const $2d1f092ec8725726$var$RadioDivider = /*#__PURE__*/ (0, $2d1f092ec8725726$var$_react.forwardRef)(function RadioDivider(props, ref) {
    return /*#__PURE__*/ $2d1f092ec8725726$var$_react.default.createElement("div", $2d1f092ec8725726$var$_extends({
        ref: ref,
        className: "govuk-radios__divider"
    }, props));
});
$2d1f092ec8725726$exports.RadioDivider = $2d1f092ec8725726$var$RadioDivider;
const $2d1f092ec8725726$var$RadioConditional = /*#__PURE__*/ (0, $2d1f092ec8725726$var$_react.forwardRef)(function RadioConditional(props, ref) {
    return /*#__PURE__*/ $2d1f092ec8725726$var$_react.default.createElement("div", $2d1f092ec8725726$var$_extends({
        ref: ref,
        className: "govuk-radios__conditional govuk-radios__conditional--hidden"
    }, props));
});
$2d1f092ec8725726$exports.RadioConditional = $2d1f092ec8725726$var$RadioConditional;
const $2d1f092ec8725726$var$RadioGroup = /*#__PURE__*/ (0, $2d1f092ec8725726$var$_react.forwardRef)(function RadioGroup(_ref2, ref) {
    let { variant: variant = "base" , inline: inline = false , name: name , children: children , error: error , required: required , ...props } = _ref2;
    const localRef = (0, $2d1f092ec8725726$var$_react.useRef)();
    (0, $2d1f092ec8725726$var$_react.useEffect)(()=>{
        /* istanbul ignore else */ if (localRef.current) new $i684g$lbhfrontend.Radios(localRef.current).init();
    }, []);
    const hasConditionals = (0, $2d1f092ec8725726$var$_react.useMemo)(()=>$2d1f092ec8725726$var$_react.Children.toArray(children).some((child)=>/*#__PURE__*/ (0, $2d1f092ec8725726$var$_react.isValidElement)(child) && child.type === $2d1f092ec8725726$var$RadioConditional), [
        children
    ]);
    return /*#__PURE__*/ $2d1f092ec8725726$var$_react.default.createElement("div", $2d1f092ec8725726$var$_extends({
        ref: (0, $2d1f092ec8725726$var$_reactMergeRefs.default)([
            localRef,
            ref
        ]),
        className: (0, $2d1f092ec8725726$var$_classnames.default)("govuk-radios", {
            "govuk-radios--small": variant === "small",
            "govuk-radios--inline": inline,
            "govuk-radios--conditionals": hasConditionals
        }, "lbh-radios")
    }, props), $2d1f092ec8725726$var$_react.Children.map(children, (child)=>child && /*#__PURE__*/ (0, $2d1f092ec8725726$var$_react.isValidElement)(child) && /*#__PURE__*/ (0, $2d1f092ec8725726$var$_react.cloneElement)(child, {
            name: name,
            required: required,
            ...child.props
        })));
});
$2d1f092ec8725726$exports.RadioGroup = $2d1f092ec8725726$var$RadioGroup;


Object.keys($2d1f092ec8725726$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $33a8008972ce87e5$exports && $33a8008972ce87e5$exports[key] === $2d1f092ec8725726$exports[key]) return;
    Object.defineProperty($33a8008972ce87e5$exports, key, {
        enumerable: true,
        get: function() {
            return $2d1f092ec8725726$exports[key];
        }
    });
});


Object.keys($33a8008972ce87e5$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $33a8008972ce87e5$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $33a8008972ce87e5$exports[key];
        }
    });
});
var $3cd7f2d104444fe6$exports = {};
"use strict";
Object.defineProperty($3cd7f2d104444fe6$exports, "__esModule", {
    value: true
});
var $835ac157f4d7f565$exports = {};
"use strict";
Object.defineProperty($835ac157f4d7f565$exports, "__esModule", {
    value: true
});
$835ac157f4d7f565$exports.WorkOrders = $835ac157f4d7f565$exports.WorkOrderList = void 0;

var $835ac157f4d7f565$var$_react = $835ac157f4d7f565$var$_interopRequireWildcard($i684g$react);
var $38e70ab5f18ae17c$exports = {};
"use strict";
Object.defineProperty($38e70ab5f18ae17c$exports, "__esModule", {
    value: true
});
var $7c5824d5ea617ead$exports = {};
"use strict";
Object.defineProperty($7c5824d5ea617ead$exports, "__esModule", {
    value: true
});
$7c5824d5ea617ead$exports.useWorkOrders = void 0;


var $7zYHo = parcelRequire("7zYHo");

var $07c4837419514f09$exports = {};
"use strict";
Object.defineProperty($07c4837419514f09$exports, "__esModule", {
    value: true
});
$07c4837419514f09$exports.WorkOrdersFilters = $07c4837419514f09$exports.REPAIR_FILTER_LIST = void 0;
let $07c4837419514f09$var$WorkOrdersFilters = /*#__PURE__*/ function(WorkOrdersFilters) {
    WorkOrdersFilters["CANCELLED"] = "Cancelled";
    WorkOrdersFilters["COMPLETED"] = "Completed";
    WorkOrdersFilters["IN_PROGRESS"] = "InProgress";
    WorkOrdersFilters["LOCKED"] = "Locked";
    WorkOrdersFilters["ON_HOLD"] = "OnHold";
    return WorkOrdersFilters;
}({});
$07c4837419514f09$exports.WorkOrdersFilters = $07c4837419514f09$var$WorkOrdersFilters;
const $07c4837419514f09$var$REPAIR_FILTER_LIST = [
    {
        code: $07c4837419514f09$var$WorkOrdersFilters.CANCELLED,
        value: "cancelled"
    },
    {
        code: $07c4837419514f09$var$WorkOrdersFilters.COMPLETED,
        value: "completed"
    },
    {
        code: $07c4837419514f09$var$WorkOrdersFilters.IN_PROGRESS,
        value: "in progress"
    },
    {
        code: $07c4837419514f09$var$WorkOrdersFilters.LOCKED,
        value: "locked"
    },
    {
        code: $07c4837419514f09$var$WorkOrdersFilters.ON_HOLD,
        value: "on hold"
    }
];
$07c4837419514f09$exports.REPAIR_FILTER_LIST = $07c4837419514f09$var$REPAIR_FILTER_LIST;


const $7c5824d5ea617ead$var$repairStatusGroupings = {
    [$07c4837419514f09$exports.WorkOrdersFilters.CANCELLED]: [
        "30"
    ],
    [$07c4837419514f09$exports.WorkOrdersFilters.COMPLETED]: [
        "40",
        "50"
    ],
    [$07c4837419514f09$exports.WorkOrdersFilters.IN_PROGRESS]: [
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
    [$07c4837419514f09$exports.WorkOrdersFilters.LOCKED]: [
        "200"
    ],
    [$07c4837419514f09$exports.WorkOrdersFilters.ON_HOLD]: [
        "10",
        "70"
    ]
};
const $7c5824d5ea617ead$var$useWorkOrders = function(id, filter) {
    let pageNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "1";
    let pageSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "12";
    const user = (0, $770ca302370776db$exports.getAuth)().user;
    const params = new URLSearchParams();
    params.append("propertyReference", id);
    params.append("PageNumber", pageNumber);
    params.append("PageSize", pageSize);
    if (filter && $7c5824d5ea617ead$var$repairStatusGroupings[filter]) $7c5824d5ea617ead$var$repairStatusGroupings[filter].forEach((status)=>{
        params.append("StatusCode", status);
    });
    return (0, $569092d0c967ee8e$exports.useAxiosSWR)(`${$7zYHo.config.repairsHubApiUrl}/workOrders?${params}`, {
        headers: {
            "x-hackney-user": user?.token
        }
    });
};
$7c5824d5ea617ead$exports.useWorkOrders = $7c5824d5ea617ead$var$useWorkOrders;


Object.keys($7c5824d5ea617ead$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $38e70ab5f18ae17c$exports && $38e70ab5f18ae17c$exports[key] === $7c5824d5ea617ead$exports[key]) return;
    Object.defineProperty($38e70ab5f18ae17c$exports, key, {
        enumerable: true,
        get: function() {
            return $7c5824d5ea617ead$exports[key];
        }
    });
});

Object.keys($07c4837419514f09$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $38e70ab5f18ae17c$exports && $38e70ab5f18ae17c$exports[key] === $07c4837419514f09$exports[key]) return;
    Object.defineProperty($38e70ab5f18ae17c$exports, key, {
        enumerable: true,
        get: function() {
            return $07c4837419514f09$exports[key];
        }
    });
});



var $7zYHo = parcelRequire("7zYHo");

var $835ac157f4d7f565$var$_locale = $835ac157f4d7f565$var$_interopRequireDefault((parcelRequire("cGCf8")));





var $3f5PC = parcelRequire("3f5PC");



var $835ac157f4d7f565$var$_workOrderListItem = $835ac157f4d7f565$var$_interopRequireDefault((parcelRequire("c1SVF")));

function $835ac157f4d7f565$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $835ac157f4d7f565$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($835ac157f4d7f565$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $835ac157f4d7f565$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $835ac157f4d7f565$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const { components: $835ac157f4d7f565$var$components  } = $835ac157f4d7f565$var$_locale.default;
const $835ac157f4d7f565$var$ExternalLink = (_ref)=>{
    let { assetId: assetId  } = _ref;
    return /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($3f5PC.Link, {
        href: `${$7zYHo.config.repairsHubAppUrl}/properties/${assetId}`,
        isExternal: true,
        className: "repair-list__link"
    }, $835ac157f4d7f565$var$components.workOrderList.seeAllWorkOrders);
};
const $835ac157f4d7f565$var$WorkOrders = (_ref2)=>{
    let { assetId: assetId , statusCode: statusCode  } = _ref2;
    const { data: workOrders , error: error  } = (0, $38e70ab5f18ae17c$exports.useWorkOrders)(assetId, statusCode);
    if (error) return /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($570eaa952d8e00b9$exports.ErrorSummary, {
        id: "work-order-list-error",
        title: $835ac157f4d7f565$var$components.workOrderList.errors.unableToFetchWorkOrder,
        description: $835ac157f4d7f565$var$components.workOrderList.errors.unableToFetchWorkOrderDescription
    });
    if (!workOrders) return /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($0cd95a48d1dcaa91$exports.Center, null, /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($e38ba771f6f65b62$exports.Spinner, null));
    const getStatusLabel = (code)=>{
        const label = $38e70ab5f18ae17c$exports.REPAIR_FILTER_LIST.find((item)=>item.code === code)?.value;
        return label || code;
    };
    if (!workOrders.length) return /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($835ac157f4d7f565$var$_react.default.Fragment, null, /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement("p", {
        className: "repair-list__no-work-orders"
    }, `${$835ac157f4d7f565$var$_locale.default.components.workOrderList.noRepairs} ${getStatusLabel(statusCode)}`), /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($835ac157f4d7f565$var$ExternalLink, {
        assetId: assetId
    }));
    return /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement("div", null, /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($1ad562248bbc59b7$exports.CardList, null, workOrders.map((workOrder, index)=>/*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($835ac157f4d7f565$var$_workOrderListItem.default, {
            key: index,
            workOrder: workOrder
        }))), /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($835ac157f4d7f565$var$ExternalLink, {
        assetId: assetId
    }));
};
$835ac157f4d7f565$exports.WorkOrders = $835ac157f4d7f565$var$WorkOrders;
const $835ac157f4d7f565$var$WorkOrderList = (_ref3)=>{
    let { assetId: assetId  } = _ref3;
    const [statusCode, setStatusCode] = (0, $835ac157f4d7f565$var$_react.useState)($38e70ab5f18ae17c$exports.WorkOrdersFilters.IN_PROGRESS);
    return /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement("div", {
        className: "work-order-list"
    }, /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($12c1e7079cef95d7$exports.FormGroup, {
        id: "filter",
        label: `${$835ac157f4d7f565$var$components.workOrderList.selectLabel}:`
    }, /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($c6537740902d4927$exports.Select, {
        value: statusCode,
        onChange: (e)=>setStatusCode(e.target.value),
        "data-testid": "work-order-list:filter"
    }, $38e70ab5f18ae17c$exports.REPAIR_FILTER_LIST?.map((filter, index)=>/*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement("option", {
            key: index,
            value: filter.code
        }, $835ac157f4d7f565$var$components.workOrderList.selectOptionLabel, " ", filter.value)))), /*#__PURE__*/ $835ac157f4d7f565$var$_react.default.createElement($835ac157f4d7f565$var$WorkOrders, {
        assetId: assetId,
        statusCode: statusCode
    }));
};
$835ac157f4d7f565$exports.WorkOrderList = $835ac157f4d7f565$var$WorkOrderList;


Object.keys($835ac157f4d7f565$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $3cd7f2d104444fe6$exports && $3cd7f2d104444fe6$exports[key] === $835ac157f4d7f565$exports[key]) return;
    Object.defineProperty($3cd7f2d104444fe6$exports, key, {
        enumerable: true,
        get: function() {
            return $835ac157f4d7f565$exports[key];
        }
    });
});


Object.keys($3cd7f2d104444fe6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $3cd7f2d104444fe6$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $3cd7f2d104444fe6$exports[key];
        }
    });
});

Object.keys($6c59dee70ac360b9$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $6c59dee70ac360b9$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $6c59dee70ac360b9$exports[key];
        }
    });
});

Object.keys($c6537740902d4927$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $c6537740902d4927$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $c6537740902d4927$exports[key];
        }
    });
});
var $7e6c34139933f91a$exports = {};
"use strict";
Object.defineProperty($7e6c34139933f91a$exports, "__esModule", {
    value: true
});
var $f1d24f0e0d8eafb0$exports = {};
"use strict";
Object.defineProperty($f1d24f0e0d8eafb0$exports, "__esModule", {
    value: true
});
$f1d24f0e0d8eafb0$exports.SideBarSection = $f1d24f0e0d8eafb0$exports.SideBar = void 0;

var $f1d24f0e0d8eafb0$var$_react = $f1d24f0e0d8eafb0$var$_interopRequireWildcard($i684g$react);

var $f1d24f0e0d8eafb0$var$_classnames = $f1d24f0e0d8eafb0$var$_interopRequireDefault($i684g$classnames);




function $f1d24f0e0d8eafb0$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $f1d24f0e0d8eafb0$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($f1d24f0e0d8eafb0$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $f1d24f0e0d8eafb0$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $f1d24f0e0d8eafb0$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $f1d24f0e0d8eafb0$var$_extends() {
    $f1d24f0e0d8eafb0$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $f1d24f0e0d8eafb0$var$_extends.apply(this, arguments);
}
const $f1d24f0e0d8eafb0$var$SideBarSection = /*#__PURE__*/ (0, $f1d24f0e0d8eafb0$var$_react.forwardRef)(function SideBarSection(_ref, ref) {
    let { children: children , heading: heading , className: className , isCollapsed: isCollapsed = false , ...props } = _ref;
    if (isCollapsed) return /*#__PURE__*/ $f1d24f0e0d8eafb0$var$_react.default.createElement($b8e52145916624cb$exports.AccordionItem, $f1d24f0e0d8eafb0$var$_extends({
        ref: ref
    }, props), children);
    return /*#__PURE__*/ $f1d24f0e0d8eafb0$var$_react.default.createElement("div", $f1d24f0e0d8eafb0$var$_extends({
        ref: ref,
        className: (0, $f1d24f0e0d8eafb0$var$_classnames.default)("mtfh-sidebar-section", className)
    }, props), heading ? /*#__PURE__*/ $f1d24f0e0d8eafb0$var$_react.default.createElement($57b31647f201adaa$exports.Heading, {
        as: "h2"
    }, heading) : undefined, children);
});
$f1d24f0e0d8eafb0$exports.SideBarSection = $f1d24f0e0d8eafb0$var$SideBarSection;
const $f1d24f0e0d8eafb0$var$SideBar = /*#__PURE__*/ (0, $f1d24f0e0d8eafb0$var$_react.forwardRef)(function SideBar(_ref2, ref) {
    let { as: SideBarComp = "div" , id: id , top: top , children: children , className: className , ...props } = _ref2;
    const isDesktop = (0, $3e992cfbf7a8a728$exports.useBreakpoint)("md");
    const sidebarClasses = (0, $f1d24f0e0d8eafb0$var$_classnames.default)("mtfh-sidebar", className);
    return /*#__PURE__*/ $f1d24f0e0d8eafb0$var$_react.default.createElement(SideBarComp, $f1d24f0e0d8eafb0$var$_extends({
        ref: ref,
        className: sidebarClasses
    }, props), top, !isDesktop ? /*#__PURE__*/ $f1d24f0e0d8eafb0$var$_react.default.createElement($b8e52145916624cb$exports.Accordion, {
        id: id
    }, $f1d24f0e0d8eafb0$var$_react.Children.map(children, (child)=>child && /*#__PURE__*/ (0, $f1d24f0e0d8eafb0$var$_react.isValidElement)(child) ? /*#__PURE__*/ (0, $f1d24f0e0d8eafb0$var$_react.cloneElement)(child, {
            isCollapsed: true
        }) : undefined)) : /*#__PURE__*/ $f1d24f0e0d8eafb0$var$_react.default.createElement("div", {
        id: id
    }, children));
});
$f1d24f0e0d8eafb0$exports.SideBar = $f1d24f0e0d8eafb0$var$SideBar;


Object.keys($f1d24f0e0d8eafb0$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $7e6c34139933f91a$exports && $7e6c34139933f91a$exports[key] === $f1d24f0e0d8eafb0$exports[key]) return;
    Object.defineProperty($7e6c34139933f91a$exports, key, {
        enumerable: true,
        get: function() {
            return $f1d24f0e0d8eafb0$exports[key];
        }
    });
});


Object.keys($7e6c34139933f91a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $7e6c34139933f91a$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $7e6c34139933f91a$exports[key];
        }
    });
});

Object.keys($0eee8031dfefd309$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $0eee8031dfefd309$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $0eee8031dfefd309$exports[key];
        }
    });
});

Object.keys($e38ba771f6f65b62$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $e38ba771f6f65b62$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $e38ba771f6f65b62$exports[key];
        }
    });
});
var $4c0b3135717474bd$exports = {};
"use strict";
Object.defineProperty($4c0b3135717474bd$exports, "__esModule", {
    value: true
});
var $456c7adea2039386$exports = {};
"use strict";
Object.defineProperty($456c7adea2039386$exports, "__esModule", {
    value: true
});
$456c7adea2039386$exports.StatusBox = void 0;

var $456c7adea2039386$var$_react = $456c7adea2039386$var$_interopRequireWildcard($i684g$react);


var $a87135ff987bd900$exports = {};
"use strict";
Object.defineProperty($a87135ff987bd900$exports, "__esModule", {
    value: true
});
var $3e4ddf9af35699c6$exports = {};
"use strict";
Object.defineProperty($3e4ddf9af35699c6$exports, "__esModule", {
    value: true
});
$3e4ddf9af35699c6$exports.WarningIcon = $3e4ddf9af35699c6$exports.SuccessIcon = $3e4ddf9af35699c6$exports.DefaultIcon = void 0;

var $3e4ddf9af35699c6$var$_react = $3e4ddf9af35699c6$var$_interopRequireDefault($i684g$react);
function $3e4ddf9af35699c6$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $3e4ddf9af35699c6$var$SuccessIcon = ()=>{
    return /*#__PURE__*/ $3e4ddf9af35699c6$var$_react.default.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ $3e4ddf9af35699c6$var$_react.default.createElement("circle", {
        cx: "22.5",
        cy: "22.5",
        r: "21.75",
        fill: "white",
        stroke: "#00664F",
        strokeWidth: "1.5"
    }), /*#__PURE__*/ $3e4ddf9af35699c6$var$_react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M35 15.5127L18.775 33L11 24.6201L14.2591 21.1074L18.775 25.9746L31.7409 12L35 15.5127Z",
        fill: "#00664F"
    }));
};
$3e4ddf9af35699c6$exports.SuccessIcon = $3e4ddf9af35699c6$var$SuccessIcon;
const $3e4ddf9af35699c6$var$WarningIcon = ()=>{
    return /*#__PURE__*/ $3e4ddf9af35699c6$var$_react.default.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ $3e4ddf9af35699c6$var$_react.default.createElement("circle", {
        cx: "22.5",
        cy: "22.5",
        r: "21.75",
        fill: "white",
        stroke: "#BE3A34",
        strokeWidth: "1.5"
    }), /*#__PURE__*/ $3e4ddf9af35699c6$var$_react.default.createElement("path", {
        d: "M24.2969 26.6587H20.6035L19.8315 11.8701H25.0688L24.2969 26.6587ZM19.771 31.8354C19.771 30.9878 19.998 30.347 20.4521 29.9131C20.9062 29.4792 21.5672 29.2622 22.4351 29.2622C23.2726 29.2622 23.9185 29.4842 24.3726 29.9282C24.8368 30.3722 25.0688 31.008 25.0688 31.8354C25.0688 32.6326 24.8368 33.2633 24.3726 33.7275C23.9084 34.1816 23.2625 34.4087 22.4351 34.4087C21.5874 34.4087 20.9315 34.1867 20.4673 33.7427C20.0031 33.2886 19.771 32.6528 19.771 31.8354Z",
        fill: "#BE3A34"
    }));
};
$3e4ddf9af35699c6$exports.WarningIcon = $3e4ddf9af35699c6$var$WarningIcon;
const $3e4ddf9af35699c6$var$DefaultIcon = ()=>{
    return /*#__PURE__*/ $3e4ddf9af35699c6$var$_react.default.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ $3e4ddf9af35699c6$var$_react.default.createElement("circle", {
        cx: "22.5",
        cy: "22.5",
        r: "21.75",
        fill: "white",
        stroke: "#0B0C0C",
        strokeWidth: "1.5"
    }), /*#__PURE__*/ $3e4ddf9af35699c6$var$_react.default.createElement("path", {
        d: "M20.2251 12.7026C20.2251 11.1991 21.0627 10.4473 22.7378 10.4473C24.4129 10.4473 25.2505 11.1991 25.2505 12.7026C25.2505 13.4191 25.0386 13.9792 24.6147 14.3828C24.201 14.7764 23.5754 14.9731 22.7378 14.9731C21.0627 14.9731 20.2251 14.2163 20.2251 12.7026ZM25.0386 34H20.4219V17.0771H25.0386V34Z",
        fill: "#0B0C0C"
    }));
};
$3e4ddf9af35699c6$exports.DefaultIcon = $3e4ddf9af35699c6$var$DefaultIcon;


Object.keys($3e4ddf9af35699c6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $a87135ff987bd900$exports && $a87135ff987bd900$exports[key] === $3e4ddf9af35699c6$exports[key]) return;
    Object.defineProperty($a87135ff987bd900$exports, key, {
        enumerable: true,
        get: function() {
            return $3e4ddf9af35699c6$exports[key];
        }
    });
});



function $456c7adea2039386$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($456c7adea2039386$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $456c7adea2039386$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $456c7adea2039386$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $456c7adea2039386$var$_extends() {
    $456c7adea2039386$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $456c7adea2039386$var$_extends.apply(this, arguments);
}
const $456c7adea2039386$var$StatusBox = /*#__PURE__*/ (0, $456c7adea2039386$var$_react.forwardRef)(function StatusBox(_ref, ref) {
    let { children: children , className: className , title: title , variant: variant , ...props } = _ref;
    const icon = (0, $456c7adea2039386$var$_react.useMemo)(()=>{
        if (variant === "success") return /*#__PURE__*/ $456c7adea2039386$var$_react.default.createElement($a87135ff987bd900$exports.SuccessIcon, null);
        if (variant === "warning") return /*#__PURE__*/ $456c7adea2039386$var$_react.default.createElement($a87135ff987bd900$exports.WarningIcon, null);
        return /*#__PURE__*/ $456c7adea2039386$var$_react.default.createElement($a87135ff987bd900$exports.DefaultIcon, null);
    }, [
        variant
    ]);
    return /*#__PURE__*/ $456c7adea2039386$var$_react.default.createElement($0a5014c170d753c4$exports.Box, {
        variant: variant
    }, /*#__PURE__*/ $456c7adea2039386$var$_react.default.createElement("div", $456c7adea2039386$var$_extends({
        ref: ref,
        className: "mtfh-status-box"
    }, props), icon, /*#__PURE__*/ $456c7adea2039386$var$_react.default.createElement("div", null, /*#__PURE__*/ $456c7adea2039386$var$_react.default.createElement("div", {
        className: "mtfh-status-heading__title"
    }, /*#__PURE__*/ $456c7adea2039386$var$_react.default.createElement($57b31647f201adaa$exports.Heading, {
        variant: "h4"
    }, title)), children)));
});
$456c7adea2039386$exports.StatusBox = $456c7adea2039386$var$StatusBox;


Object.keys($456c7adea2039386$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $4c0b3135717474bd$exports && $4c0b3135717474bd$exports[key] === $456c7adea2039386$exports[key]) return;
    Object.defineProperty($4c0b3135717474bd$exports, key, {
        enumerable: true,
        get: function() {
            return $456c7adea2039386$exports[key];
        }
    });
});


Object.keys($4c0b3135717474bd$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $4c0b3135717474bd$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $4c0b3135717474bd$exports[key];
        }
    });
});
var $d0b5d72cda5888af$exports = {};
"use strict";
Object.defineProperty($d0b5d72cda5888af$exports, "__esModule", {
    value: true
});
var $a646d1378ec633ee$exports = {};
"use strict";
Object.defineProperty($a646d1378ec633ee$exports, "__esModule", {
    value: true
});
$a646d1378ec633ee$exports.StatusHeading = void 0;

var $a646d1378ec633ee$var$_react = $a646d1378ec633ee$var$_interopRequireWildcard($i684g$react);


function $a646d1378ec633ee$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($a646d1378ec633ee$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $a646d1378ec633ee$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $a646d1378ec633ee$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $a646d1378ec633ee$var$StatusHeading = (_ref)=>{
    let { title: title , variant: variant = "base"  } = _ref;
    const icon = (0, $a646d1378ec633ee$var$_react.useMemo)(()=>{
        if (variant === "success") return /*#__PURE__*/ $a646d1378ec633ee$var$_react.default.createElement($a87135ff987bd900$exports.SuccessIcon, null);
        if (variant === "warning") return /*#__PURE__*/ $a646d1378ec633ee$var$_react.default.createElement($a87135ff987bd900$exports.WarningIcon, null);
        return /*#__PURE__*/ $a646d1378ec633ee$var$_react.default.createElement($a87135ff987bd900$exports.DefaultIcon, null);
    }, [
        variant
    ]);
    return /*#__PURE__*/ $a646d1378ec633ee$var$_react.default.createElement("div", {
        className: "mtfh-status-heading"
    }, icon, /*#__PURE__*/ $a646d1378ec633ee$var$_react.default.createElement("h4", {
        className: "lbh-heading-h4 mtfh-status-heading__title"
    }, title));
};
$a646d1378ec633ee$exports.StatusHeading = $a646d1378ec633ee$var$StatusHeading;


Object.keys($a646d1378ec633ee$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $d0b5d72cda5888af$exports && $d0b5d72cda5888af$exports[key] === $a646d1378ec633ee$exports[key]) return;
    Object.defineProperty($d0b5d72cda5888af$exports, key, {
        enumerable: true,
        get: function() {
            return $a646d1378ec633ee$exports[key];
        }
    });
});


Object.keys($d0b5d72cda5888af$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $d0b5d72cda5888af$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $d0b5d72cda5888af$exports[key];
        }
    });
});

var $2izqw = parcelRequire("2izqw");
Object.keys($2izqw).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $2izqw[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $2izqw[key];
        }
    });
});
var $ca5e29ee8084a3f8$exports = {};
"use strict";
Object.defineProperty($ca5e29ee8084a3f8$exports, "__esModule", {
    value: true
});
var $f938ac4df9e8438f$exports = {};
"use strict";
Object.defineProperty($f938ac4df9e8438f$exports, "__esModule", {
    value: true
});
$f938ac4df9e8438f$exports.Tr = $f938ac4df9e8438f$exports.Thead = $f938ac4df9e8438f$exports.Th = $f938ac4df9e8438f$exports.Td = $f938ac4df9e8438f$exports.Tbody = $f938ac4df9e8438f$exports.TableCaption = $f938ac4df9e8438f$exports.Table = void 0;

var $f938ac4df9e8438f$var$_react = $f938ac4df9e8438f$var$_interopRequireWildcard($i684g$react);

var $f938ac4df9e8438f$var$_classnames = $f938ac4df9e8438f$var$_interopRequireDefault($i684g$classnames);

function $f938ac4df9e8438f$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $f938ac4df9e8438f$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($f938ac4df9e8438f$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $f938ac4df9e8438f$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $f938ac4df9e8438f$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $f938ac4df9e8438f$var$_extends() {
    $f938ac4df9e8438f$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $f938ac4df9e8438f$var$_extends.apply(this, arguments);
}
const $f938ac4df9e8438f$var$Table = /*#__PURE__*/ (0, $f938ac4df9e8438f$var$_react.forwardRef)(function Thead(_ref, ref) {
    let { className: className , ...props } = _ref;
    return /*#__PURE__*/ $f938ac4df9e8438f$var$_react.default.createElement("table", $f938ac4df9e8438f$var$_extends({
        ref: ref,
        className: (0, $f938ac4df9e8438f$var$_classnames.default)("govuk-table", "lbh-table", className)
    }, props));
});
$f938ac4df9e8438f$exports.Table = $f938ac4df9e8438f$var$Table;
const $f938ac4df9e8438f$var$Thead = /*#__PURE__*/ (0, $f938ac4df9e8438f$var$_react.forwardRef)(function Thead(_ref2, ref) {
    let { className: className , ...props } = _ref2;
    return /*#__PURE__*/ $f938ac4df9e8438f$var$_react.default.createElement("thead", $f938ac4df9e8438f$var$_extends({
        ref: ref,
        className: (0, $f938ac4df9e8438f$var$_classnames.default)("govuk-table__head", className)
    }, props));
});
$f938ac4df9e8438f$exports.Thead = $f938ac4df9e8438f$var$Thead;
const $f938ac4df9e8438f$var$Tbody = /*#__PURE__*/ (0, $f938ac4df9e8438f$var$_react.forwardRef)(function Tbody(_ref3, ref) {
    let { className: className , ...props } = _ref3;
    return /*#__PURE__*/ $f938ac4df9e8438f$var$_react.default.createElement("tbody", $f938ac4df9e8438f$var$_extends({
        ref: ref,
        className: (0, $f938ac4df9e8438f$var$_classnames.default)("govuk-table__body", className)
    }, props));
});
$f938ac4df9e8438f$exports.Tbody = $f938ac4df9e8438f$var$Tbody;
const $f938ac4df9e8438f$var$Tr = /*#__PURE__*/ (0, $f938ac4df9e8438f$var$_react.forwardRef)(function Tr(_ref4, ref) {
    let { className: className , ...props } = _ref4;
    return /*#__PURE__*/ $f938ac4df9e8438f$var$_react.default.createElement("tr", $f938ac4df9e8438f$var$_extends({
        ref: ref,
        className: (0, $f938ac4df9e8438f$var$_classnames.default)("govuk-table__row", className)
    }, props));
});
$f938ac4df9e8438f$exports.Tr = $f938ac4df9e8438f$var$Tr;
const $f938ac4df9e8438f$var$Th = /*#__PURE__*/ (0, $f938ac4df9e8438f$var$_react.forwardRef)(function Th(_ref5, ref) {
    let { className: className , isNumeric: isNumeric , ...props } = _ref5;
    const thClasses = (0, $f938ac4df9e8438f$var$_classnames.default)("govuk-table__cell", "govuk-table__header", {
        "govuk-table__cell--numeric": isNumeric
    }, className);
    return /*#__PURE__*/ $f938ac4df9e8438f$var$_react.default.createElement("th", $f938ac4df9e8438f$var$_extends({
        ref: ref,
        className: thClasses
    }, props));
});
$f938ac4df9e8438f$exports.Th = $f938ac4df9e8438f$var$Th;
const $f938ac4df9e8438f$var$Td = /*#__PURE__*/ (0, $f938ac4df9e8438f$var$_react.forwardRef)(function Td(_ref6, ref) {
    let { className: className , isNumeric: isNumeric , ...props } = _ref6;
    const tdClasses = (0, $f938ac4df9e8438f$var$_classnames.default)("govuk-table__cell", {
        "govuk-table__cell--numeric": isNumeric
    }, className);
    return /*#__PURE__*/ $f938ac4df9e8438f$var$_react.default.createElement("td", $f938ac4df9e8438f$var$_extends({
        ref: ref,
        className: tdClasses
    }, props));
});
$f938ac4df9e8438f$exports.Td = $f938ac4df9e8438f$var$Td;
const $f938ac4df9e8438f$var$TableCaption = /*#__PURE__*/ (0, $f938ac4df9e8438f$var$_react.forwardRef)(function TableCaption(_ref7, ref) {
    let { children: children , className: className , variant: variant , ...props } = _ref7;
    const captionClasses = (0, $f938ac4df9e8438f$var$_classnames.default)("govuk-table__caption", "lbh-table__caption", {
        "govuk-table__caption--s": variant === "small",
        "govuk-table__caption--m": variant === "medium",
        "govuk-table__caption--l": variant === "large",
        "govuk-table__caption--xl": variant === "xlarge"
    }, className);
    return /*#__PURE__*/ $f938ac4df9e8438f$var$_react.default.createElement("caption", $f938ac4df9e8438f$var$_extends({
        ref: ref,
        className: captionClasses
    }, props), children);
});
$f938ac4df9e8438f$exports.TableCaption = $f938ac4df9e8438f$var$TableCaption;


Object.keys($f938ac4df9e8438f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ca5e29ee8084a3f8$exports && $ca5e29ee8084a3f8$exports[key] === $f938ac4df9e8438f$exports[key]) return;
    Object.defineProperty($ca5e29ee8084a3f8$exports, key, {
        enumerable: true,
        get: function() {
            return $f938ac4df9e8438f$exports[key];
        }
    });
});


Object.keys($ca5e29ee8084a3f8$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $ca5e29ee8084a3f8$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $ca5e29ee8084a3f8$exports[key];
        }
    });
});

Object.keys($30cb9ca3841e837d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $30cb9ca3841e837d$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $30cb9ca3841e837d$exports[key];
        }
    });
});

Object.keys($b8c89689d2113c90$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $b8c89689d2113c90$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $b8c89689d2113c90$exports[key];
        }
    });
});
var $d5fa2c2c976e06f4$exports = {};
"use strict";
Object.defineProperty($d5fa2c2c976e06f4$exports, "__esModule", {
    value: true
});
var $340619ec69a33671$exports = {};
"use strict";
Object.defineProperty($340619ec69a33671$exports, "__esModule", {
    value: true
});
$340619ec69a33671$exports.Stepper = void 0;

var $340619ec69a33671$var$_react = $340619ec69a33671$var$_interopRequireWildcard($i684g$react);


var $340619ec69a33671$var$_classnames = $340619ec69a33671$var$_interopRequireDefault($i684g$classnames);

function $340619ec69a33671$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $340619ec69a33671$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($340619ec69a33671$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $340619ec69a33671$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $340619ec69a33671$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const $340619ec69a33671$var$Stepper = (_ref)=>{
    let { activeStep: activeStep = 0 , title: title , children: children , startIndex: startIndex , ...props } = _ref;
    return /*#__PURE__*/ $340619ec69a33671$var$_react.default.createElement("div", props, title && /*#__PURE__*/ $340619ec69a33671$var$_react.default.createElement($57b31647f201adaa$exports.Heading, {
        as: "h3",
        variant: "h3",
        className: "mtfh-stepper__main-title"
    }, title), /*#__PURE__*/ $340619ec69a33671$var$_react.default.createElement("div", {
        className: "mtfh-stepper mtfh-stepper--large mtfh-stepper--active"
    }, /*#__PURE__*/ $340619ec69a33671$var$_react.default.createElement("ol", {
        className: "mtfh-stepper"
    }, $340619ec69a33671$var$_react.Children.map(children, (child, stepIndex)=>child && /*#__PURE__*/ (0, $340619ec69a33671$var$_react.isValidElement)(child) && /*#__PURE__*/ $340619ec69a33671$var$_react.default.createElement("li", {
            className: (0, $340619ec69a33671$var$_classnames.default)("mtfh-stepper__step", {
                "mtfh-stepper__step--active": stepIndex === activeStep
            })
        }, /*#__PURE__*/ (0, $340619ec69a33671$var$_react.cloneElement)(child, {
            ...child.props,
            stepIndex: startIndex && startIndex > 0 ? startIndex + stepIndex + 1 : stepIndex + 1
        }))))));
};
$340619ec69a33671$exports.Stepper = $340619ec69a33671$var$Stepper;


Object.keys($340619ec69a33671$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $d5fa2c2c976e06f4$exports && $d5fa2c2c976e06f4$exports[key] === $340619ec69a33671$exports[key]) return;
    Object.defineProperty($d5fa2c2c976e06f4$exports, key, {
        enumerable: true,
        get: function() {
            return $340619ec69a33671$exports[key];
        }
    });
});
var $90d9e621c0f38ee4$exports = {};
"use strict";
Object.defineProperty($90d9e621c0f38ee4$exports, "__esModule", {
    value: true
});
$90d9e621c0f38ee4$exports.Step = void 0;

var $90d9e621c0f38ee4$var$_react = $90d9e621c0f38ee4$var$_interopRequireDefault($i684g$react);

var $90d9e621c0f38ee4$var$_locale = $90d9e621c0f38ee4$var$_interopRequireDefault((parcelRequire("cGCf8")));

function $90d9e621c0f38ee4$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $90d9e621c0f38ee4$var$Step = (_ref)=>{
    let { stepIndex: stepIndex , children: children  } = _ref;
    return /*#__PURE__*/ $90d9e621c0f38ee4$var$_react.default.createElement("div", {
        className: "mtfh-stepper__header"
    }, /*#__PURE__*/ $90d9e621c0f38ee4$var$_react.default.createElement($57b31647f201adaa$exports.Heading, {
        as: "h4",
        variant: "h4",
        className: "mtfh-stepper__title"
    }, /*#__PURE__*/ $90d9e621c0f38ee4$var$_react.default.createElement("span", {
        className: "mtfh-stepper__circle mtfh-stepper__circle--number"
    }, /*#__PURE__*/ $90d9e621c0f38ee4$var$_react.default.createElement("span", {
        className: "mtfh-stepper__circle-inner"
    }, /*#__PURE__*/ $90d9e621c0f38ee4$var$_react.default.createElement("span", {
        className: "mtfh-stepper__circle-background"
    }, /*#__PURE__*/ $90d9e621c0f38ee4$var$_react.default.createElement("span", {
        className: "govuk-visually-hidden"
    }, $90d9e621c0f38ee4$var$_locale.default.components.stepper.step), stepIndex))), /*#__PURE__*/ $90d9e621c0f38ee4$var$_react.default.createElement("span", null, /*#__PURE__*/ $90d9e621c0f38ee4$var$_react.default.createElement("button", {
        className: "mtfh-stepper__button mtfh-stepper__button--title"
    }, /*#__PURE__*/ $90d9e621c0f38ee4$var$_react.default.createElement("span", null, children)))));
};
$90d9e621c0f38ee4$exports.Step = $90d9e621c0f38ee4$var$Step;


Object.keys($90d9e621c0f38ee4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $d5fa2c2c976e06f4$exports && $d5fa2c2c976e06f4$exports[key] === $90d9e621c0f38ee4$exports[key]) return;
    Object.defineProperty($d5fa2c2c976e06f4$exports, key, {
        enumerable: true,
        get: function() {
            return $90d9e621c0f38ee4$exports[key];
        }
    });
});


Object.keys($d5fa2c2c976e06f4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $ba3b58505e93ee14$exports && $ba3b58505e93ee14$exports[key] === $d5fa2c2c976e06f4$exports[key]) return;
    Object.defineProperty($ba3b58505e93ee14$exports, key, {
        enumerable: true,
        get: function() {
            return $d5fa2c2c976e06f4$exports[key];
        }
    });
});


Object.keys($ba3b58505e93ee14$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $ba3b58505e93ee14$exports[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $ba3b58505e93ee14$exports[key];
        }
    });
});

var $jg4db = parcelRequire("jg4db");
Object.keys($jg4db).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $jg4db[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function() {
            return $jg4db[key];
        }
    });
});


//# sourceMappingURL=main.js.map
