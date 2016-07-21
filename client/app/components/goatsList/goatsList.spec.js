import GoatsListModule from './goatsList'
import GoatsListController from './goatsList.controller';
import GoatsListComponent from './goatsList.component';
import GoatsListTemplate from './goatsList.html';

describe('GoatsList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GoatsListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GoatsListController();
    };
  }));

  describe('Template', () => {
    it('It renders the goat-list-item directive', () => {
      expect(GoatsListTemplate).to.match(/goat-list-item/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GoatsListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GoatsListTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GoatsListController);
      });

      it('expose goats as one way input binding', () => {
         expect(component.bindings.goats).to.equal('<');
      });
  });
});
