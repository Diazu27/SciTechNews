import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpostComponent } from './checkpost.component';

describe('CheckpostComponent', () => {
  let component: CheckpostComponent;
  let fixture: ComponentFixture<CheckpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
