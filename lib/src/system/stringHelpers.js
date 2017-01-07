"use strict";
function toTitle(text) {
    return text
        .replace(/^[a-z]/, function (v) { return v.toUpperCase(); })
        .replace(/[A-Z]/g, function (v) { return ' ' + v; })
        .trim();
}
exports.toTitle = toTitle;
//# sourceMappingURL=stringHelpers.js.map