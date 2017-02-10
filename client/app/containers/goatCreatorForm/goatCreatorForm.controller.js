class GotCreatorFormController {
  constructor($state, GoatsService) {
    "ngInject";

    this.$state       = $state;
    this.GoatsService = GoatsService;

    this.goat = {};
    this.updatedGoat = this.GoatsService.getUpdate();
  }

  // will handle the form submission,
  // validates the required field and then adds the goat to the service.
  // once added, we will go to the next page.
  addGoat() {
    if(!this.goat.name) return alert('Goat Name is Required');
    if(!this.goat.photo) return alert('Goat Profile photo URL is required');

    this.GoatsService.createGoat(this.goat);

    // reset the form
    this.goat = {};

    // go to home page, to see our entry
    this.$state.go('app.home');
  }

    updateGoat() {
      console.log('Update in create form...');
      this.GoatsService.updateGoat(this.goat);
      this.$state.go('app.home');
    }

  checkIfUpdating() {
    return this.GoatsService.isUpdateMode();
  }
}

export default GotCreatorFormController;
