'use strict';


var template = require('./util/template'),
    constants = require('./constants');


module.exports = function button(label, data, config) {
    var model, locale, style, target;

    config = config || {};
    locale = data.get('lc') || constants.DEFAULT_LOCALE;
    style = config.style || constants.DEFAULT_STYLE;

    label = constants.STRINGS[locale][label];
    label = label.replace('{wordmark}', '<img src="' + constants.WORDMARK[style] + '" alt="PayPal" />');
    
    target = config.target || constants.DEFAULT_TARGET

    model = {
        style: style,
        size: config.size || constants.DEFAULT_SIZE,
        logo: constants.LOGO,
        label: label,
        target: target
    };
    
    return template(constants.TEMPLATES.button, model);
};
