import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStatusiRadnjiComponent } from './delete-statusi-radnji.component';

describe('DeleteStatusiRadnjiComponent', () => {
  let component: DeleteStatusiRadnjiComponent;
  let fixture: ComponentFixture<DeleteStatusiRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteStatusiRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteStatusiRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
