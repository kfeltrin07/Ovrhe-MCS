import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatusiComponent } from './create-statusi.component';

describe('CreateStatusiComponent', () => {
  let component: CreateStatusiComponent;
  let fixture: ComponentFixture<CreateStatusiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStatusiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStatusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
