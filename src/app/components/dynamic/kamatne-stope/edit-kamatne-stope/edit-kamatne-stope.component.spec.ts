import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKamatneStopeComponent } from './edit-kamatne-stope.component';

describe('EditKamatneStopeComponent', () => {
  let component: EditKamatneStopeComponent;
  let fixture: ComponentFixture<EditKamatneStopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditKamatneStopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditKamatneStopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
