import angular from 'angular';

export class CreateUserController {
   /*@ngInject*/
  constructor($uibModalInstance, User, user) {
    this.User = User;
    this.user = user;
    this.$uibModalInstance = $uibModalInstance;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm() {
    this.User.createUser(this.user);
  }
}

export default angular.module('comp3705App.createUserModal', [])
   .controller('createUserController', CreateUserController)
   .config(['$qProvider', function($qProvider) {
     $qProvider.errorOnUnhandledRejections(false);
   }])
   .name;
