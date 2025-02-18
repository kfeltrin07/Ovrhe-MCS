import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatusiComponent } from './edit-statusi.component';

describe('EditStatusiComponent', () => {
  let component: EditStatusiComponent;
  let fixture: ComponentFixture<EditStatusiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStatusiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditStatusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
