import angular from 'angular';

export class UpdateUserController {
   /*@ngInject*/
  constructor($uibModalInstance, User, user) {
    this.User = User;
    this.$uibModalInstance = $uibModalInstance;
    this.user = user;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm() {
    this.User.updateUser(this.user);
  }
}

export default angular.module('comp3705App.updateUserModal', [])
   .controller('updateUserController', UpdateUserController)
   .config(['$qProvider', function($qProvider) {
     $qProvider.errorOnUnhandledRejections(false);
   }])
   .name;
