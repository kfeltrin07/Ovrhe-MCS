import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredlosciZaKretaljkuComponent } from './predlosci-za-kretaljku.component';

describe('PredlosciZaKretaljkuComponent', () => {
  let component: PredlosciZaKretaljkuComponent;
  let fixture: ComponentFixture<PredlosciZaKretaljkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredlosciZaKretaljkuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredlosciZaKretaljkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
