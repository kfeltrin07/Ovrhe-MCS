import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvrheComponent } from './ovrhe.component';

describe('OvrheComponent', () => {
  let component: OvrheComponent;
  let fixture: ComponentFixture<OvrheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OvrheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OvrheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
