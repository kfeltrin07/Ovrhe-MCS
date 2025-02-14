import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvjestajiComponent } from './izvjestaji.component';

describe('IzvjestajiComponent', () => {
  let component: IzvjestajiComponent;
  let fixture: ComponentFixture<IzvjestajiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IzvjestajiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IzvjestajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
