import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddPapersComponent } from './edit-add-papers.component';

describe('EditAddPapersComponent', () => {
  let component: EditAddPapersComponent;
  let fixture: ComponentFixture<EditAddPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddPapersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
