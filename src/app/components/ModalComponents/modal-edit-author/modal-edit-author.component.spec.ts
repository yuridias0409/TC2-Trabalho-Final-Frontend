import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAuthorComponent } from './modal-edit-author.component';

describe('ModalEditAuthorComponent', () => {
  let component: ModalEditAuthorComponent;
  let fixture: ComponentFixture<ModalEditAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
