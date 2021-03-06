"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var _1 = require("./");
var _2 = require("./../");
describe('MemoryStateStorage', function () {
    it('should store and retrieve state', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    storage = new _1.MemoryStateStorage();
                    return [4 /*yield*/, storage.appendStateChange('A')];
                case 1:
                    _c.sent();
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 2:
                    _a.apply(void 0, [_c.sent()]).toEqual(['A']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
    it('should store and retrieve state array', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    storage = new _1.MemoryStateStorage();
                    return [4 /*yield*/, storage.appendStateChange('A', 'B')];
                case 1:
                    _c.sent();
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 2:
                    _a.apply(void 0, [_c.sent()]).toEqual(['A', 'B']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
});
describe('SyncStateStorage', function () {
    it('should store and retrieve state', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    storage = new _1.SyncStateStorage(new _1.MemoryStateStorage(), 0);
                    return [4 /*yield*/, storage.appendStateChange('A')];
                case 1:
                    _c.sent();
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 2:
                    _a.apply(void 0, [_c.sent()]).toEqual(['A']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
    it('should store and retrieve state array', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    storage = new _1.SyncStateStorage(new _1.MemoryStateStorage(), 0);
                    return [4 /*yield*/, storage.appendStateChange('A', 'B')];
                case 1:
                    _c.sent();
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 2:
                    _a.apply(void 0, [_c.sent()]).toEqual(['A', 'B']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
    it('should store and retrieve state array with delay', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b, result, _c, _d, _e, _f, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    storage = new _1.SyncStateStorage(new _1.MemoryStateStorage(), 250);
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 1:
                    _a.apply(void 0, [_j.sent()]).toEqual([]);
                    result = storage.appendStateChange('A', 'B');
                    _c = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 2:
                    _c.apply(void 0, [_j.sent()]).toEqual([]);
                    result.then();
                    return [4 /*yield*/, _2.delay(200)];
                case 3:
                    _j.sent();
                    _e = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 4:
                    _e.apply(void 0, [_j.sent()]).toEqual([]);
                    return [4 /*yield*/, _2.delay(200)];
                case 5:
                    _j.sent();
                    _g = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 6:
                    _g.apply(void 0, [_j.sent()]).toEqual(['A', 'B']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
    it('should store and retrieve multiple state changes', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    storage = new _1.SyncStateStorage(new _1.MemoryStateStorage(), 250);
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 1:
                    _a.apply(void 0, [_o.sent()]).toEqual([]);
                    storage.appendStateChange('A');
                    return [4 /*yield*/, _2.delay(50)];
                case 2:
                    _o.sent();
                    _c = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 3:
                    _c.apply(void 0, [_o.sent()]).toEqual([]);
                    storage.appendStateChange('B');
                    return [4 /*yield*/, _2.delay(50)];
                case 4:
                    _o.sent();
                    _e = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 5:
                    _e.apply(void 0, [_o.sent()]).toEqual([]);
                    storage.appendStateChange('C');
                    return [4 /*yield*/, _2.delay(50)];
                case 6:
                    _o.sent();
                    _g = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 7:
                    _g.apply(void 0, [_o.sent()]).toEqual([]);
                    storage.appendStateChange('D');
                    return [4 /*yield*/, _2.delay(50)];
                case 8:
                    _o.sent();
                    _j = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 9:
                    _j.apply(void 0, [_o.sent()]).toEqual([]);
                    storage.appendStateChange('E');
                    return [4 /*yield*/, _2.delay(100)];
                case 10:
                    _o.sent();
                    _l = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 11:
                    _l.apply(void 0, [_o.sent()]).toEqual(['A', 'B', 'C', 'D', 'E']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
});
describe('CachedSyncStateStorage', function () {
    it('should store and retrieve state', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    storage = new _1.CachedSyncStateStorage(new _1.MemoryStateStorage(), 0);
                    return [4 /*yield*/, storage.appendStateChange('A')];
                case 1:
                    _c.sent();
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 2:
                    _a.apply(void 0, [_c.sent()]).toEqual(['A']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
    it('should store and retrieve state array', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    storage = new _1.CachedSyncStateStorage(new _1.MemoryStateStorage(), 0);
                    return [4 /*yield*/, storage.appendStateChange('A', 'B')];
                case 1:
                    _c.sent();
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 2:
                    _a.apply(void 0, [_c.sent()]).toEqual(['A', 'B']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
    it('should store and retrieve state array with delay', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    storage = new _1.CachedSyncStateStorage(new _1.MemoryStateStorage(), 50);
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 1:
                    _a.apply(void 0, [_g.sent()]).toEqual([]);
                    storage.appendStateChange('A', 'B');
                    _c = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 2:
                    _c.apply(void 0, [_g.sent()]).toEqual(['A', 'B']);
                    return [4 /*yield*/, _2.delay(100)];
                case 3:
                    _g.sent();
                    _e = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 4:
                    _e.apply(void 0, [_g.sent()]).toEqual(['A', 'B']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
    it('should store and retrieve multiple state changes', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var storage, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    storage = new _1.CachedSyncStateStorage(new _1.MemoryStateStorage(), 250);
                    _a = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 1:
                    _a.apply(void 0, [_o.sent()]).toEqual([]);
                    storage.appendStateChange('A');
                    return [4 /*yield*/, _2.delay(50)];
                case 2:
                    _o.sent();
                    _c = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 3:
                    _c.apply(void 0, [_o.sent()]).toEqual(['A']);
                    storage.appendStateChange('B');
                    return [4 /*yield*/, _2.delay(50)];
                case 4:
                    _o.sent();
                    _e = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 5:
                    _e.apply(void 0, [_o.sent()]).toEqual(['A', 'B']);
                    storage.appendStateChange('C');
                    return [4 /*yield*/, _2.delay(50)];
                case 6:
                    _o.sent();
                    _g = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 7:
                    _g.apply(void 0, [_o.sent()]).toEqual(['A', 'B', 'C']);
                    storage.appendStateChange('D');
                    return [4 /*yield*/, _2.delay(50)];
                case 8:
                    _o.sent();
                    _j = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 9:
                    _j.apply(void 0, [_o.sent()]).toEqual(['A', 'B', 'C', 'D']);
                    storage.appendStateChange('E');
                    return [4 /*yield*/, _2.delay(100)];
                case 10:
                    _o.sent();
                    _l = expect;
                    return [4 /*yield*/, storage.getStateChanges()];
                case 11:
                    _l.apply(void 0, [_o.sent()]).toEqual(['A', 'B', 'C', 'D', 'E']);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }, 1000);
});
//# sourceMappingURL=stateStorage.spec.js.map