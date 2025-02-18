import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKamatneStopeComponent } from './delete-kamatne-stope.component';

describe('DeleteKamatneStopeComponent', () => {
  let component: DeleteKamatneStopeComponent;
  let fixture: ComponentFixture<DeleteKamatneStopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteKamatneStopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteKamatneStopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
