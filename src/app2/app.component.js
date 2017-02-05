class MyCtrl {
  constructor(appService) {
    this.gales = appService.getData();
    this.newGale = '';
  }
}

const AppComponent = {
  template: `
      <div>
        <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
        <ul>
          <li ng-repeat="gale in $ctrl.gales">{{gale.name}}</li>
        </ul>
      </div>
      <div>
        <input type="text" ng-model="$ctrl.newGale"/>
      </div>
      <div>
        <span>{{ $ctrl.newGale }}</span>
      </div>
  `,
  controller: MyCtrl
}

export { AppComponent };
