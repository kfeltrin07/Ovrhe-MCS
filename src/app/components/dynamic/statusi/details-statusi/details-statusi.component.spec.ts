import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStatusiComponent } from './details-statusi.component';

describe('DetailsStatusiComponent', () => {
  let component: DetailsStatusiComponent;
  let fixture: ComponentFixture<DetailsStatusiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsStatusiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsStatusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
