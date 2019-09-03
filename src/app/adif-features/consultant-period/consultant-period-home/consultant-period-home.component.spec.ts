import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultantPeriodHomeComponent } from './consultant-period-home.component';


describe('WebsocketHomeComponent', () => {
  let component: ConsultantPeriodHomeComponent;
  let fixture: ComponentFixture<ConsultantPeriodHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantPeriodHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantPeriodHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
