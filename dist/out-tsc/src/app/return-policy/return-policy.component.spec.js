import { async, TestBed } from '@angular/core/testing';
import { ReturnPolicyComponent } from './return-policy.component';
describe('ReturnPolicyComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReturnPolicyComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReturnPolicyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=return-policy.component.spec.js.map