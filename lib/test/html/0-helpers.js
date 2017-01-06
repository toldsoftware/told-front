"use strict";
var tsxBuilder_1 = require("./../../src/tsxBuilder");
var htmlTsxBuilder_1 = require("./../../src/platforms/html/htmlTsxBuilder");
var provider;
function initPlatform() {
    tsxBuilder_1.TsxBuilder.provider = provider = provider || new htmlTsxBuilder_1.HtmlTsxBuilder();
}
exports.initPlatform = initPlatform;
//# sourceMappingURL=0-helpers.js.map