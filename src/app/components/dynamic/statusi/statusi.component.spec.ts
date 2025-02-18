import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusiComponent } from './statusi.component';

describe('StatusiComponent', () => {
  let component: StatusiComponent;
  let fixture: ComponentFixture<StatusiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
