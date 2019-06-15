import { async, TestBed } from '@angular/core/testing';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';
describe('TermsAndConditionsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TermsAndConditionsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TermsAndConditionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=terms-and-conditions.component.spec.js.map