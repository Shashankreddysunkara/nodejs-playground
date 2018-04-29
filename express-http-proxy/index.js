import express from 'express';
import http from 'http';
import fallback from 'express-history-api-fallback';
import helmet from 'helmet';
import httpProxy from 'http-proxy';
import ProductProxy from './ProductProxy';

let app = express();
let router = express.Router();
const productUrl= process.env.PRODUCT_URL || "http://localhost:3000";

app.use(helmet());
app.use(helmet.noCache());

var productProxy=new ProductProxy(productUrl);

router.get("/api/home",productProxy.router);

app.use ('/', router);

app.listen(process.env.PORT || 9500);


