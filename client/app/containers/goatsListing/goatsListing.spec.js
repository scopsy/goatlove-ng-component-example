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

  describe('Template', () => {
      it('renders goat-list component', () => {
         expect(GoatsListingTemplate).to.match(/<goats-list/g);
      });

      it('passes goatslist to goat-list component', () => {
          expect(GoatsListingTemplate).to.match(/goats="vm\.goatsList"/g);
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
