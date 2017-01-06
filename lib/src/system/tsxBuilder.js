"use strict";
var TsxBuilder = (function () {
    function TsxBuilder() {
    }
    TsxBuilder.createElement = function (name, attributes) {
        var content = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            content[_i - 2] = arguments[_i];
        }
        return TsxBuilder.provider.createElement(name, attributes, content);
    };
    return TsxBuilder;
}());
exports.TsxBuilder = TsxBuilder;
//# sourceMappingURL=tsxBuilder.js.map