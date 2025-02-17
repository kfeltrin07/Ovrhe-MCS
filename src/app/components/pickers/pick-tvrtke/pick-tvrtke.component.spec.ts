import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickTvrtkeComponent } from './pick-tvrtke.component';

describe('PickTvrtkeComponent', () => {
  let component: PickTvrtkeComponent;
  let fixture: ComponentFixture<PickTvrtkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickTvrtkeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickTvrtkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
