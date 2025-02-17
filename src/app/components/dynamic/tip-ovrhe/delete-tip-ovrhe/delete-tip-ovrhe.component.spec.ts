import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTipOvrheComponent } from './delete-tip-ovrhe.component';

describe('DeleteTipOvrheComponent', () => {
  let component: DeleteTipOvrheComponent;
  let fixture: ComponentFixture<DeleteTipOvrheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTipOvrheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTipOvrheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
