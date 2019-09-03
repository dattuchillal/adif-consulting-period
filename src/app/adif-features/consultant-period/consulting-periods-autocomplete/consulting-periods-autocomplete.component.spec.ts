import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingPeriodsAutocompleteComponent } from './consulting-periods-autocomplete.component';

describe('ConsultingPeriodsAutocompleteComponent', () => {
  let component: ConsultingPeriodsAutocompleteComponent;
  let fixture: ComponentFixture<ConsultingPeriodsAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultingPeriodsAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingPeriodsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
