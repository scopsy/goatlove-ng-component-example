import NavigationModule from './navigation'
import NavigationController from './navigation.controller';
import NavigationComponent from './navigation.component';
import NavigationTemplate from './navigation.html';

describe('Navigation', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavigationModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavigationController();
    };
  }));

  describe('Template', () => {
       it('has home page pointer', () => {
          expect(NavigationTemplate).to.match(/ui-sref="app.home"/g);
       });

      it('has create page pointer', () => {
          expect(NavigationTemplate).to.match(/ui-sref="app.create"/g);
      });

      it('has nav element in it', () => {
          expect(NavigationTemplate).to.match(/<nav/g);
      });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NavigationComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NavigationTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NavigationController);
      });
  });
});
