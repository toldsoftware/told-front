"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var htmlElementInstance_1 = require("./../htmlElementInstance");
var ButtonHtmlElementInstance = (function (_super) {
    __extends(ButtonHtmlElementInstance, _super);
    function ButtonHtmlElementInstance(attributes, text) {
        var _this = _super.call(this) || this;
        _this.attributes = attributes;
        _this.text = text;
        var dom = document.createElement('button');
        _this.domElement = dom;
        _this.update();
        return _this;
        // console.log('SpanHtmlElementInstance CREATED', this.domElement.innerText, this.attributes, this.text);
    }
    ButtonHtmlElementInstance.prototype.setAttributes = function (attributes) { this.attributes = attributes; this.update(); };
    ButtonHtmlElementInstance.prototype.setText = function (text) { this.text = text; this.update(); };
    ButtonHtmlElementInstance.prototype.update = function () {
        var text = this.text;
        var attributes = this.attributes;
        if (attributes) {
            if (attributes['prefix']) {
                text = attributes['prefix'] + text;
            }
            if (attributes['suffix']) {
                text = text + attributes['suffix'];
            }
        }
        this.domElement.innerText = text;
        // console.log('SpanHtmlElementInstance UPDATED', this.domElement.innerText, this.attributes, this.text);
    };
    return ButtonHtmlElementInstance;
}(htmlElementInstance_1.HtmlTextElementInstance));
exports.ButtonHtmlElementInstance = ButtonHtmlElementInstance;
//# sourceMappingURL=button.js.map