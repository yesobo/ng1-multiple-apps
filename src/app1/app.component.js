class MyCtrl {
  constructor(appService) {
    this.gales = appService.getData();
  }  
}

const AppComponent = {
  template: `
      <div>
        <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
        <ul>
          <li ng-repeat="gale in $ctrl.gales">{{ gale.name }}</li>
        </ul>
      </div>
  `,
  controller: MyCtrl
}

export { AppComponent };