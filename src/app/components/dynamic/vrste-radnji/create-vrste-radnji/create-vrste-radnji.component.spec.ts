import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVrsteRadnjiComponent } from './create-vrste-radnji.component';

describe('CreateVrsteRadnjiComponent', () => {
  let component: CreateVrsteRadnjiComponent;
  let fixture: ComponentFixture<CreateVrsteRadnjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVrsteRadnjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateVrsteRadnjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
