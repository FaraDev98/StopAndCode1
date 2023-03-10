import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstionsListComponent } from './transtions-list.component';

describe('TranstionsListComponent', () => {
  let component: TranstionsListComponent;
  let fixture: ComponentFixture<TranstionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranstionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranstionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
