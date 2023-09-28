import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradcrumbsComponent } from './bradcrumbs.component';

describe('BradcrumbsComponent', () => {
  let component: BradcrumbsComponent;
  let fixture: ComponentFixture<BradcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BradcrumbsComponent]
    });
    fixture = TestBed.createComponent(BradcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
