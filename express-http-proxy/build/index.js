'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _expressHistoryApiFallback = require('express-history-api-fallback');

var _expressHistoryApiFallback2 = _interopRequireDefault(_expressHistoryApiFallback);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _httpProxy = require('http-proxy');

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _ProductProxy = require('./ProductProxy');

var _ProductProxy2 = _interopRequireDefault(_ProductProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();
var productUrl = process.env.PRODUCT_URL || "http://localhost:3000";

app.use((0, _helmet2.default)());
app.use(_helmet2.default.noCache());

var productProxy = new _ProductProxy2.default(productUrl);

router.get("/api/home", productProxy.router);

app.use('/', router);

app.listen(process.env.PORT || 9500);