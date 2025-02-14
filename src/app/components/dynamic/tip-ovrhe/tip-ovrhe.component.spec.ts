import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipOvrheComponent } from './tip-ovrhe.component';

describe('TipOvrheComponent', () => {
  let component: TipOvrheComponent;
  let fixture: ComponentFixture<TipOvrheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipOvrheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipOvrheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
