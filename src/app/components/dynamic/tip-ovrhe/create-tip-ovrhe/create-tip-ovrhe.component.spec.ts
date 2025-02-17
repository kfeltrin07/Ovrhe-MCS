import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipOvrheComponent } from './create-tip-ovrhe.component';

describe('CreateTipOvrheComponent', () => {
  let component: CreateTipOvrheComponent;
  let fixture: ComponentFixture<CreateTipOvrheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTipOvrheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTipOvrheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
