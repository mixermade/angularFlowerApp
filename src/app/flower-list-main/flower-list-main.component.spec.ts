import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerListMainComponent } from './flower-list-main.component';

describe('FlowerListMainComponent', () => {
  let component: FlowerListMainComponent;
  let fixture: ComponentFixture<FlowerListMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerListMainComponent]
    });
    fixture = TestBed.createComponent(FlowerListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
