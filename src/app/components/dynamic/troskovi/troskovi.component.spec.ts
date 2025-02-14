import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroskoviComponent } from './troskovi.component';

describe('TroskoviComponent', () => {
  let component: TroskoviComponent;
  let fixture: ComponentFixture<TroskoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TroskoviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TroskoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
