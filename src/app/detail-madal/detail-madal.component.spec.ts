import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMadalComponent } from './detail-madal.component';

describe('DetailMadalComponent', () => {
  let component: DetailMadalComponent;
  let fixture: ComponentFixture<DetailMadalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMadalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMadalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
