import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrsteRadnjiComponent } from './vrste-radnji.component';

describe('VrsteRadnjiComponent', () => {
  let component: VrsteRadnjiComponent;
  let fixture: ComponentFixture<VrsteRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrsteRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VrsteRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
