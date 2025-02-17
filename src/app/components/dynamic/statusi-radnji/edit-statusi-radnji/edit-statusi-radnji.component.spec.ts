import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatusiRadnjiComponent } from './edit-statusi-radnji.component';

describe('EditStatusiRadnjiComponent', () => {
  let component: EditStatusiRadnjiComponent;
  let fixture: ComponentFixture<EditStatusiRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStatusiRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditStatusiRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
