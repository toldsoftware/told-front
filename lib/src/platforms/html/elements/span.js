"use strict";
function createSpan(attributes, content) {
    // console.log('createSpan START', content);
    if (content.length > 1) {
        throw 'label can only have one content item';
    }
    var dom = document.createElement('span');
    var text = '';
    if (content.length) {
        text = content[0];
    }
    if (attributes) {
        if (text && attributes['prefix']) {
            text = attributes['prefix'] + text;
        }
        if (text && attributes['suffix']) {
            text = text + attributes['suffix'];
        }
    }
    dom.innerText = text;
    return { domElement: dom };
}
exports.createSpan = createSpan;
//# sourceMappingURL=span.js.map