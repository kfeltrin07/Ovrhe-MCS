import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipOvrheComponent } from './edit-tip-ovrhe.component';

describe('EditTipOvrheComponent', () => {
  let component: EditTipOvrheComponent;
  let fixture: ComponentFixture<EditTipOvrheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTipOvrheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTipOvrheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
