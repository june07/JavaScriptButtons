'use strict';


var constants = require('./constants'),
    template = require('./util/template'),
    button = require('./button');


module.exports = function form(type, data, config) {
    var model, btn, url, locale, target;

    btn = button(type, data, config);
    locale = data.get('lc') || constants.DEFAULT_LOCALE;
    
    url = constants.PAYPAL_URL;
    url = url.replace('{host}', config.host || constants.DEFAULT_HOST);

    target = config.target || constants.DEFAULT_TARGET

    model = {
        data: data.items,
        button: btn,
        url: url,
        content: constants.STRINGS[locale],
        target: target
    };

    return template(constants.TEMPLATES.form, model);
};


