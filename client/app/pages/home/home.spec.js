import HomeModule       from './home'
import HomeController   from './home.controller';
import HomeComponent    from './home.component';
import HomeTemplate     from './home.html';

describe('Home', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomeModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomeController();
    };
  }));

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('renders goats listing component', () => {
      expect(HomeTemplate).to.match(/<goats-listing>/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HomeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HomeTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HomeController);
      });
  });
});
