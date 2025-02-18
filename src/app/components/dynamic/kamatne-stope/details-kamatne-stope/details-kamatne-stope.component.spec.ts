import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsKamatneStopeComponent } from './details-kamatne-stope.component';

describe('DetailsKamatneStopeComponent', () => {
  let component: DetailsKamatneStopeComponent;
  let fixture: ComponentFixture<DetailsKamatneStopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsKamatneStopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsKamatneStopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
