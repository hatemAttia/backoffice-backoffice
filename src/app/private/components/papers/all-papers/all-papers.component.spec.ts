import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPapersComponent } from './all-papers.component';

describe('AllPapersComponent', () => {
  let component: AllPapersComponent;
  let fixture: ComponentFixture<AllPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPapersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
