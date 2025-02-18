import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKamatneStopeComponent } from './create-kamatne-stope.component';

describe('CreateKamatneStopeComponent', () => {
  let component: CreateKamatneStopeComponent;
  let fixture: ComponentFixture<CreateKamatneStopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateKamatneStopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateKamatneStopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
