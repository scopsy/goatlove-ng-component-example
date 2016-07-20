class GoatsListingController {
  constructor(GoatsService) {
    "ngInject";

    // This will keep the service instance across our class
    this.GoatsService = GoatsService;

    // this will gold our goatsList, it will be passed to the other components.
    this.goatsList = [];
  }

  // This method will be called each time the component will be initialised,
  // In our case, it will be called for every page route change.
  $onInit(){
    this.goatsList = this.GoatsService.getGoats();
  }
}

export default GoatsListingController;
