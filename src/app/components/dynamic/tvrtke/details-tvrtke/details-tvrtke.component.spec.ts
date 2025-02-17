import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTvrtkeComponent } from './details-tvrtke.component';

describe('DetailsTvrtkeComponent', () => {
  let component: DetailsTvrtkeComponent;
  let fixture: ComponentFixture<DetailsTvrtkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTvrtkeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsTvrtkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
