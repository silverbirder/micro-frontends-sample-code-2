import hypernova from 'hypernova/server';
import { renderReact } from 'nova-react';
import express from 'express';
import path from 'path';

import Search from './components/Search';

hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  getComponent(name) {
    if (name === 'Search') {
      return renderReact(name, Search);
    }

    return null;
  },
  port: process.env.PORT || 3000,

  createApplication() {
    const app = express();

    app.use('/public', express.static(path.join(process.cwd(), 'dist')));

    return app;
  },
});
