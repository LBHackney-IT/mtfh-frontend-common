"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityDiff = void 0;
const deep_diff_1 = require("deep-diff");
const entityDiff = (lhs, rhs) => {
    const deepDiff = (0, deep_diff_1.diff)(lhs, rhs) || [];
    return deepDiff.reduce((acc, change) => {
        const [path] = change.path;
        acc[path] = rhs[path] || null;
        return acc;
    }, {});
};
exports.entityDiff = entityDiff;
