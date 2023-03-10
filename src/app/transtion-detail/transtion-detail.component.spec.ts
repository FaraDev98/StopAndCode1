import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstionDetailComponent } from './transtion-detail.component';

describe('TranstionDetailComponent', () => {
  let component: TranstionDetailComponent;
  let fixture: ComponentFixture<TranstionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranstionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranstionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
