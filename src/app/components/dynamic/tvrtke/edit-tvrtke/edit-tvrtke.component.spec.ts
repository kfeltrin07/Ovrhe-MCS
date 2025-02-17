import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTvrtkeComponent } from './edit-tvrtke.component';

describe('EditTvrtkeComponent', () => {
  let component: EditTvrtkeComponent;
  let fixture: ComponentFixture<EditTvrtkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTvrtkeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTvrtkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
