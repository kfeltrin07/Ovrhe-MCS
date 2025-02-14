import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamatneStopeComponent } from './kamatne-stope.component';

describe('KamatneStopeComponent', () => {
  let component: KamatneStopeComponent;
  let fixture: ComponentFixture<KamatneStopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamatneStopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KamatneStopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
