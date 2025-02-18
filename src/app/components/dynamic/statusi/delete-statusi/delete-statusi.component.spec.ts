import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStatusiComponent } from './delete-statusi.component';

describe('DeleteStatusiComponent', () => {
  let component: DeleteStatusiComponent;
  let fixture: ComponentFixture<DeleteStatusiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteStatusiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteStatusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
