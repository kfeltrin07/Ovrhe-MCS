import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTvrtkeComponent } from './create-tvrtke.component';

describe('CreateTvrtkeComponent', () => {
  let component: CreateTvrtkeComponent;
  let fixture: ComponentFixture<CreateTvrtkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTvrtkeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTvrtkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
