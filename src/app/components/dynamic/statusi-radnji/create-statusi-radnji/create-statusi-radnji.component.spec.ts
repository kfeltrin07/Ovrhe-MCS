import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatusiRadnjiComponent } from './create-statusi-radnji.component';

describe('CreateStatusiRadnjiComponent', () => {
  let component: CreateStatusiRadnjiComponent;
  let fixture: ComponentFixture<CreateStatusiRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStatusiRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStatusiRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
