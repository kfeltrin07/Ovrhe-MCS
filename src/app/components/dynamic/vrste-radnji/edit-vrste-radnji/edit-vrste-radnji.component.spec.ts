import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVrsteRadnjiComponent } from './edit-vrste-radnji.component';

describe('EditVrsteRadnjiComponent', () => {
  let component: EditVrsteRadnjiComponent;
  let fixture: ComponentFixture<EditVrsteRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVrsteRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVrsteRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
