"use strict";
var src_1 = require("./../../src");
var _0_helpers_1 = require("./0-helpers");
_0_helpers_1.initPlatform();
describe('wrap', function () {
    var wrap = src_1.TsxBuilder.createElement("wrap", null);
    it('should become div', function () {
        _0_helpers_1.expectHtml(wrap, '<div></div>');
    });
});
describe('wrap nested', function () {
    var wrap2 = src_1.TsxBuilder.createElement("wrap", null,
        src_1.TsxBuilder.createElement("wrap", null));
    var wrap3 = src_1.TsxBuilder.createElement("wrap", null,
        src_1.TsxBuilder.createElement("wrap", null,
            src_1.TsxBuilder.createElement("wrap", null)));
    it('should become nested divs (2 deep)', function () {
        _0_helpers_1.expectHtml(wrap2, '<div><div></div></div>');
    });
    it('should become nested divs (3 deep)', function () {
        _0_helpers_1.expectHtml(wrap3, '<div><div><div></div></div></div>');
    });
});
//# sourceMappingURL=001-wrap.js.map