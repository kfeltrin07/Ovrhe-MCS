import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickStatusiComponent } from './pick-statusi.component';

describe('PickStatusiComponent', () => {
  let component: PickStatusiComponent;
  let fixture: ComponentFixture<PickStatusiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickStatusiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickStatusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
