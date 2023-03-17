import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayoutComponentComponent } from './login-layout-component.component';

describe('LoginLayoutComponentComponent', () => {
  let component: LoginLayoutComponentComponent;
  let fixture: ComponentFixture<LoginLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLayoutComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
