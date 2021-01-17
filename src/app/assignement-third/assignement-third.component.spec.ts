import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignementThirdComponent } from './assignement-third.component';

describe('AssignementThirdComponent', () => {
  let component: AssignementThirdComponent;
  let fixture: ComponentFixture<AssignementThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignementThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignementThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
