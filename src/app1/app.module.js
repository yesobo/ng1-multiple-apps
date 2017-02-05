import angular from 'angular';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

export const AppModule = angular
  .module('app1', [])
  .service('appService', AppService)
  .component('ng1App', AppComponent)
  .name;