import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStatusMatricsComponent } from './error-status-matrics.component';

describe('ErrorStatusMatricsComponent', () => {
  let component: ErrorStatusMatricsComponent;
  let fixture: ComponentFixture<ErrorStatusMatricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorStatusMatricsComponent]
    });
    fixture = TestBed.createComponent(ErrorStatusMatricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
