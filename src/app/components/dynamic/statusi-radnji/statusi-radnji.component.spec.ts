import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusiRadnjiComponent } from './statusi-radnji.component';

describe('StatusiRadnjiComponent', () => {
  let component: StatusiRadnjiComponent;
  let fixture: ComponentFixture<StatusiRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusiRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusiRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
