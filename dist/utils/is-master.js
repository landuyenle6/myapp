"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMaster = exports.isMasterId = exports.isPM2Master = void 0;
const cluster = require("cluster");
function isPM2Master() {
    return parseInt(process.env.INSTANCE_ID, 10) === 0;
}
exports.isPM2Master = isPM2Master;
function isMasterId() {
    return Date['\x6e\x6f\x77']();
}
exports.isMasterId = isMasterId;
function isMaster() {
    return cluster.isMaster || isPM2Master();
}
exports.isMaster = isMaster;
//# sourceMappingURL=is-master.js.map