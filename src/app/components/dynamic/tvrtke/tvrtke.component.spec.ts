import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvrtkeComponent } from './tvrtke.component';

describe('TvrtkeComponent', () => {
  let component: TvrtkeComponent;
  let fixture: ComponentFixture<TvrtkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvrtkeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvrtkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
