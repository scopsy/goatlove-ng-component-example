class GoatsListController {
  constructor(GoatsService) {
      "ngInject";
      this.GoatsService = GoatsService;
      this.GoatsService.setUpdate(false);
  }
}

export default GoatsListController;
