System.register("main", [], function (exports_1, context_1) {
    "use strict";
    var defaultPasswordConstructorOptions, Password;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            defaultPasswordConstructorOptions = {
                length: undefined,
                maxLength: 16,
                minLength: 16,
                number: true,
                lowercase: true,
                uppercase: true,
                symbol: true,
                excludeSimilar: true,
                seed: undefined
            };
            Password = (function () {
                function Password(opts) {
                    if (opts === void 0) { opts = defaultPasswordConstructorOptions; }
                    var d = defaultPasswordConstructorOptions;
                    var len = +opts.length;
                    if (!isNaN(len)) {
                        throw new RangeError('');
                        this.maxLength = len;
                        this.minLength = len;
                    }
                    this.maxLength;
                    this.minLength;
                    this.number;
                    this.lowercase;
                    this.uppercase;
                    this.symbol;
                    this.excludeSimilar;
                    this.seed;
                }
                return Password;
            }());
            exports_1("Password", Password);
        }
    };
});
//# sourceMappingURL=main.js.map