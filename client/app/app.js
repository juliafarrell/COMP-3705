'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';

import {
  routeConfig
} from './app.config';

import main from './main/main.component';
import about from './about/about.component';
import user from './user/user.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import userService from '../components/userService/user.module';
import updateUserModal from '../components/updateUserModal/updateUserModal.controller';
import createUserModal from '../components/createUserModal/createUserModal.controller';
import './app.css';

angular.module('comp3705App', [ngCookies, ngResource, ngSanitize, ngRoute, uiBootstrap,
   main, about, user, constants, util, userService, updateUserModal, createUserModal
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['comp3705App'], {
      strictDi: true
    });
  });
