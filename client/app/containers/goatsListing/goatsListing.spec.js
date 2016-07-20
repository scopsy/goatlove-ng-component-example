import GoatsListingModule from './goatsListing'
import GoatsListingController from './goatsListing.controller';
import GoatsListingComponent from './goatsListing.component';
import GoatsListingTemplate from './goatsListing.html';

describe('GoatsListing', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GoatsListingModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GoatsListingController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(GoatsListingTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GoatsListingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GoatsListingTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GoatsListingController);
      });
  });
});
