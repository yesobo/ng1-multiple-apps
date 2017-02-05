import angular from 'angular';
import { AppComponent } from './app.component';
import { AppService } from './app.service';


export const AppModule = angular
  .module('app2', [])
  .component('ng1App', AppComponent)
  .service('appService', AppService)
  .name;