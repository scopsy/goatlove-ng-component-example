class GoatListItemController {
  constructor($state, GoatsService) {
      "ngInject";
      this.GoatsService = GoatsService;
      this.$state = $state;
  }

  updateServiceGoat() {
    console.log('Goat will be updated');
    this.GoatsService.storeUpdatedGoat(this.goat);
    console.log('Going to create page...');
    this.$state.go('app.create');
  }
}

export default GoatListItemController;
