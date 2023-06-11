import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternListComponent } from './intern-list.component';

describe('InternListComponent', () => {
  let component: InternListComponent;
  let fixture: ComponentFixture<InternListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternListComponent]
    });
    fixture = TestBed.createComponent(InternListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
