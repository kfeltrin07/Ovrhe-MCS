import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupeTroskovaComponent } from './grupe-troskova.component';

describe('GrupeTroskovaComponent', () => {
  let component: GrupeTroskovaComponent;
  let fixture: ComponentFixture<GrupeTroskovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupeTroskovaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupeTroskovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
