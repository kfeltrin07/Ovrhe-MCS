import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVrsteRadnjiComponent } from './delete-vrste-radnji.component';

describe('DeleteVrsteRadnjiComponent', () => {
  let component: DeleteVrsteRadnjiComponent;
  let fixture: ComponentFixture<DeleteVrsteRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteVrsteRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteVrsteRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
