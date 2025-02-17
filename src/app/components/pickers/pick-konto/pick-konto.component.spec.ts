import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickKontoComponent } from './pick-konto.component';

describe('PickKontoComponent', () => {
  let component: PickKontoComponent;
  let fixture: ComponentFixture<PickKontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickKontoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickKontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
