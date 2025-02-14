import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredlosciObavijestiComponent } from './predlosci-obavijesti.component';

describe('PredlosciObavijestiComponent', () => {
  let component: PredlosciObavijestiComponent;
  let fixture: ComponentFixture<PredlosciObavijestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredlosciObavijestiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredlosciObavijestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
