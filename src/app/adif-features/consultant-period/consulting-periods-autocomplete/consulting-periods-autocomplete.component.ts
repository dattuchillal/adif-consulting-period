import { Component, OnInit, Input, forwardRef, AfterViewInit } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { startWith } from 'rxjs/internal/operators/startWith';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { tap } from 'rxjs/internal/operators/tap';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { of } from 'rxjs/internal/observable/of';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

function verifyControlValueSelection(value: any) {
  return value && typeof value !== 'string';
}

@Component({
  selector: 'adif-consulting-periods-autocomplete',
  templateUrl: './consulting-periods-autocomplete.component.html',
  styleUrls: ['./consulting-periods-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ConsultingPeriodsAutocompleteComponent),
      multi: true,
    }
  ]
})
export class ConsultingPeriodsAutocompleteComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  matcher = new MyErrorStateMatcher();
  private readonly debounceTimeInMillis = 300;
  private onChange;
  private onTouched;
  private _hostFormControl: FormControl;
  private unsubscribeSubject = new Subject();
  matchingPeriods$: Observable<any[]>;
  contultingPeriodsControl: any = new FormControl();
  @Input('formControl')
  set hostFormControl(value) {
    this._hostFormControl = value;
    this.keepHostValidationInSyncWithControl();
  }
  @Input() whileLoading = false;
  @Input() formGroup: FormGroup;
  @Input()
  label: string;
  @Input()
  searchFn: (string) => Observable<any[]>;
  @Input()
  displayFn: (any) => string;
  constructor() {
    this.matchingPeriods$ = this.contultingPeriodsControl.valueChanges.pipe(
      startWith(''),
      debounceTime(this.debounceTimeInMillis),
      distinctUntilChanged(),
      tap((value: any) => {
        const controlValue = verifyControlValueSelection(value) ? value : null;
        if (this.onChange) {
          this.onChange(controlValue);
        }
      }),
      switchMap((value: any) => verifyControlValueSelection(value) ? of([value]) : this.searchFn(value as string))
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.contultingPeriodsControl.updateValueAndValidity();
  }

  public hasError = (control: FormControl) => {
    return control.errors && control.errors.externalError;
  }

  markAsTouched() {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.contultingPeriodsControl.setValue(obj);
  }

  private keepHostValidationInSyncWithControl() {
    if (this._hostFormControl) {
      this._hostFormControl.statusChanges.pipe(
        takeUntil(this.unsubscribeSubject),
        startWith(this._hostFormControl.status)
      ).subscribe((status) => {
        this.contultingPeriodsControl.setErrors(status === 'INVALID' ? { externalError: true } : null);
      });
    }
  }

}
