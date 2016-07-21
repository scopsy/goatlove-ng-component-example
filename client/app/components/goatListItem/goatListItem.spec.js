import GoatListItemModule       from './goatListItem'
import GoatListItemController   from './goatListItem.controller';
import GoatListItemComponent    from './goatListItem.component';
import GoatListItemTemplate     from './goatListItem.html';

describe('GoatListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GoatListItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GoatListItemController();
    };
  }));

  describe('Template', () => {

      it('has img for the goat', () => {
          expect(GoatListItemTemplate).to.match(/{{\s?vm\.goat\.photo\s?}}/g);
      });

      it('has goat name in the template', () => {
          expect(GoatListItemTemplate).to.match(/{{\s?vm\.goat\.name\s?}}/g);
      });

      it('has goats about info in the template', () => {
          expect(GoatListItemTemplate).to.match(/{{\s?vm\.goat\.about\s?}}/g);
      });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GoatListItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GoatListItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GoatListItemController);
      });

      it('have the correct goat interace', () => {
         expect(component.bindings.goat).to.equal('<');
      });
  });
});
