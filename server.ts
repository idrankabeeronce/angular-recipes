import 'zone.js/node';

import {APP_BASE_HREF} from '@angular/common';
import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import isbot from 'isbot';
import {existsSync} from 'fs';
import {join} from 'path';
import * as path from 'path';
import { HOST_URL } from './src/app/tokens/host-url';

import {AppServerModule} from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/recipe-app/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  isbot.extend(['Mozilla/5.0 (compatible; vkShare; +http://vk.com/dev/Share)', 'PostmanRuntime/7.25.0']);
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));


  const MockBrowser = require('mock-browser').mocks.MockBrowser;
  const mock = new MockBrowser();
  global['window'] = mock.getWindow();
  global['document'] = mock.getDocument();

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {

    // url where the app is hosted (e.g. https://app-domain.com/);
    // will be useful for generating meta tags;
    const hostUrl = req.protocol + '://' + req.get('Host');

    // check whether User-Agent is bot
    if (isbot(req.header('User-Agent'))) {
      console.log('SSR');
      // render app page on the server
      //res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
      res.render(indexHtml, { req, providers: [
          { provide: APP_BASE_HREF, useValue: req.baseUrl },
        
          // HOST_URL will become available
          // in Angular DI system on the server
          { provide: HOST_URL, useValue: hostUrl },
      ] });
    } else {
      console.log('No SSR');
      // return index.html without pre-rendering
      // app will get rendered on the client
      res.sendFile(path.join(__dirname, '../browser/index.html'));
    }


    
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
