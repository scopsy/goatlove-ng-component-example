import GotCreatorFormModule from './goatCreatorForm'
import GotCreatorFormController from './goatCreatorForm.controller';
import GotCreatorFormComponent from './goatCreatorForm.component';
import GotCreatorFormTemplate from './goatCreatorForm.html';

describe('GotCreatorForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GotCreatorFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GotCreatorFormController();
    };
  }));

  describe('Controller', () => {
      it('has goat property', () => {
         let controller = makeController();

         expect(controller).to.have.property('goat');
      });

      it('has add goat method', () => {
          let controller = makeController();

          expect(controller).to.have.property('goat');
      });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('expect to have ng-submit method call', () => {
      expect(GotCreatorFormTemplate).to.match(/ng-submit="vm\.addGoat/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GotCreatorFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GotCreatorFormTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GotCreatorFormController);
      });
  });
});
