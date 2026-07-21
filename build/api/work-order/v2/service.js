"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWorkOrders = void 0;
const auth_1 = require("@mtfh/common/lib/auth");
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const types_1 = require("./types");
const repairStatusGroupings = {
    [types_1.WorkOrdersFilters.CANCELLED]: ["30"],
    [types_1.WorkOrdersFilters.COMPLETED]: ["40", "50"],
    [types_1.WorkOrdersFilters.IN_PROGRESS]: [
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
        "1090",
    ],
    [types_1.WorkOrdersFilters.LOCKED]: ["200"],
    [types_1.WorkOrdersFilters.ON_HOLD]: ["10", "70"],
};
const useWorkOrders = (id, filter, pageNumber = "1", pageSize = "12") => {
    const params = new URLSearchParams();
    params.append("propertyReference", id);
    params.append("PageNumber", pageNumber);
    params.append("PageSize", pageSize);
    if (filter && repairStatusGroupings[filter]) {
        repairStatusGroupings[filter].forEach((status) => {
            params.append("StatusCode", status);
        });
    }
    return (0, http_1.useAxiosSWR)(`${config_1.config.repairsHubApiUrl}/workOrders?${params}`, {
        headers: {
            "x-hackney-user": auth_1.$auth.getValue().token,
        },
    });
};
exports.useWorkOrders = useWorkOrders;
