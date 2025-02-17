import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTvrtkeComponent } from './delete-tvrtke.component';

describe('DeleteTvrtkeComponent', () => {
  let component: DeleteTvrtkeComponent;
  let fixture: ComponentFixture<DeleteTvrtkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTvrtkeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTvrtkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
