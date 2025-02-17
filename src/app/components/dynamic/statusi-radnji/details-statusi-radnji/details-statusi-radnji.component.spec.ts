import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStatusiRadnjiComponent } from './details-statusi-radnji.component';

describe('DetailsStatusiRadnjiComponent', () => {
  let component: DetailsStatusiRadnjiComponent;
  let fixture: ComponentFixture<DetailsStatusiRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsStatusiRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsStatusiRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
