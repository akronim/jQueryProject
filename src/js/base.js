/* Application Controller
--------------------------------------- */

let App = function () {
    "use strict"

    let settings;

    return {
        init: function (options) {
            if (options) {
                settings = options;
            }

            this.initComponents(settings);
            this.initPages(settings);
        },
        initComponents: function (settings) {

        },
        initPages: function (settings) {
            handleLogin(settings);
            handleTime(settings);
            handleAjax(settings);
        }
    }
}();
