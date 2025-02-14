import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusiOvrheComponent } from './statusi-ovrhe.component';

describe('StatusiOvrheComponent', () => {
  let component: StatusiOvrheComponent;
  let fixture: ComponentFixture<StatusiOvrheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusiOvrheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusiOvrheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
