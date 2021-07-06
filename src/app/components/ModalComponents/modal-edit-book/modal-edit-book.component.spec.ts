import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditBookComponent } from './modal-edit-book.component';

describe('ModalEditBookComponent', () => {
  let component: ModalEditBookComponent;
  let fixture: ComponentFixture<ModalEditBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
