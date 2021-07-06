import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLivrosComponent } from './form-livros.component';

describe('FormLivrosComponent', () => {
  let component: FormLivrosComponent;
  let fixture: ComponentFixture<FormLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
