///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import { enableProdMode } from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(AppComponent, [ROUTER_PROVIDERS]);  //root component

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    enableProdMode();
  }
