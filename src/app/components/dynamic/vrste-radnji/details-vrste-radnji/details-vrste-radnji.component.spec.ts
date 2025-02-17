import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVrsteRadnjiComponent } from './details-vrste-radnji.component';

describe('DetailsVrsteRadnjiComponent', () => {
  let component: DetailsVrsteRadnjiComponent;
  let fixture: ComponentFixture<DetailsVrsteRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsVrsteRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsVrsteRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
