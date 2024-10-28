import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';

import express from 'express';
import { join } from 'path';

export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/angular_proyect/browser');
  const indexHtml = join(distFolder, 'index.html');
  const engine = new CommonEngine();

  server.engine('html', (_, options, callback) => {
    engine.render(options).then(html => callback(null, html)).catch(callback);
  });

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Configuración de rutas estáticas y dinámicas
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  server.get('*', (req, res) => {
    res.render(indexHtml, { req });
  });

  return server;
}
