"use strict";
function createDiv(attributes, content) {
    // console.log('createDiv START', content);
    var dom = document.createElement('div');
    for (var _i = 0, _a = content; _i < _a.length; _i++) {
        var x = _a[_i];
        dom.appendChild(x.domElement);
    }
    return { domElement: dom };
}
exports.createDiv = createDiv;
//# sourceMappingURL=div.js.map