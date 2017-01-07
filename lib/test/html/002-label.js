"use strict";
var src_1 = require("./../../src");
var _0_helpers_1 = require("./0-helpers");
_0_helpers_1.initPlatform();
describe('empty label', function () {
    var label;
    beforeEach(function () {
        label = src_1.TsxBuilder.createElement("label", null);
    });
    it('should become empty span', function () {
        _0_helpers_1.expectHtml(label, '<span></span>');
    });
});
describe('label with text', function () {
    var label;
    beforeEach(function () {
        label = src_1.TsxBuilder.createElement("label", null, "SOME TEXT");
    });
    it('should become span with text', function () {
        _0_helpers_1.expectHtml(label, '<span>SOME TEXT</span>');
    });
});
describe('label with text attributes', function () {
    var label;
    beforeEach(function () {
        label = src_1.TsxBuilder.createElement("label", { prefix: 'BEFORE ', suffix: ' AFTER' }, "SOME TEXT");
    });
    it('should become span with prefix and suffix injected', function () {
        _0_helpers_1.expectHtml(label, '<span>BEFORE SOME TEXT AFTER</span>');
    });
});
//# sourceMappingURL=002-label.js.map