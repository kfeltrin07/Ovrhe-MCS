import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTipOvrheComponent } from './details-tip-ovrhe.component';

describe('DetailsTipOvrheComponent', () => {
  let component: DetailsTipOvrheComponent;
  let fixture: ComponentFixture<DetailsTipOvrheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTipOvrheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsTipOvrheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
