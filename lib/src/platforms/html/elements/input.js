"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var htmlElementInstance_1 = require("./../htmlElementInstance");
var InputType;
(function (InputType) {
    InputType[InputType["text"] = 0] = "text";
})(InputType = exports.InputType || (exports.InputType = {}));
var InputHtmlElementInstance = (function (_super) {
    __extends(InputHtmlElementInstance, _super);
    function InputHtmlElementInstance(attributes, text, inputType) {
        var _this = _super.call(this) || this;
        _this.attributes = attributes;
        _this.text = text;
        _this.inputType = inputType;
        var dom = document.createElement('input');
        dom.type = InputType[inputType];
        _this.domElement = dom;
        _this.update();
        return _this;
        // console.log('SpanHtmlElementInstance CREATED', this.domElement.innerText, this.attributes, this.text);
    }
    InputHtmlElementInstance.prototype.setAttributes = function (attributes) { this.attributes = attributes; this.update(); };
    InputHtmlElementInstance.prototype.setText = function (text) { this.text = text; this.update(); };
    InputHtmlElementInstance.prototype.update = function () {
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
        this.domElement.value = text;
        console.log('InputHtmlElementInstance UPDATED', this.domElement.outerHTML, this.attributes, this.text);
    };
    return InputHtmlElementInstance;
}(htmlElementInstance_1.HtmlTextElementInstance));
exports.InputHtmlElementInstance = InputHtmlElementInstance;
//# sourceMappingURL=input.js.map