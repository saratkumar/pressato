import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import { join } from 'path';
import * as compression from 'compression';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();
// Express server
var app = express();
app.use(compression());
var PORT = 4300;
var DIST_FOLDER = join(process.cwd(), 'dist/browser');
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
var _a = require('./dist/server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', DIST_FOLDER);
// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Server static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
    maxAge: '1y'
}));
// All regular routes use the Universal engine
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
// Start up the Node server
app.listen(PORT, function () {
    console.log("Node Express server listening on http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map