/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
import * as user from './api/user';
import * as recipe from './api/recipe';

export default function(app) {
  app.use('/api/users', user.router);
  app.use('/api/recipe', recipe.router);
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
}
