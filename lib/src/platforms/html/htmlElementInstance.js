"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HtmlElementInstanceBase = (function () {
    function HtmlElementInstanceBase() {
    }
    HtmlElementInstanceBase.prototype.setOnClick = function (callback) {
        var c = callback;
        // Debounce
        var call = function () {
            c && c();
            c = null;
            setTimeout(function () { return c = callback; }, 250);
        };
        this.domElement.onclick = call;
        this.domElement.ontouchstart = call;
    };
    return HtmlElementInstanceBase;
}());
exports.HtmlElementInstanceBase = HtmlElementInstanceBase;
var HtmlElementInstance = (function (_super) {
    __extends(HtmlElementInstance, _super);
    function HtmlElementInstance() {
        return _super.apply(this, arguments) || this;
    }
    return HtmlElementInstance;
}(HtmlElementInstanceBase));
exports.HtmlElementInstance = HtmlElementInstance;
var HtmlContainerElementInstance = (function (_super) {
    __extends(HtmlContainerElementInstance, _super);
    function HtmlContainerElementInstance() {
        return _super.apply(this, arguments) || this;
    }
    return HtmlContainerElementInstance;
}(HtmlElementInstance));
exports.HtmlContainerElementInstance = HtmlContainerElementInstance;
var HtmlTextElementInstance = (function (_super) {
    __extends(HtmlTextElementInstance, _super);
    function HtmlTextElementInstance() {
        return _super.apply(this, arguments) || this;
    }
    HtmlTextElementInstance.prototype.setOnTextChange = function (callback) {
        console.log("setOnTextChange");
        var asInput = this.domElement;
        // let asTextarea = (this.domElement as any as HTMLTextAreaElement);
        var c = callback;
        // Debounce
        var call = function () {
            console.log("setOnTextChange CALL", asInput.value);
            c && c(asInput.value);
            c = null;
            setTimeout(function () { return c = callback; }, 250);
        };
        asInput.onchange = call;
    };
    return HtmlTextElementInstance;
}(HtmlElementInstance));
exports.HtmlTextElementInstance = HtmlTextElementInstance;
//# sourceMappingURL=htmlElementInstance.js.map