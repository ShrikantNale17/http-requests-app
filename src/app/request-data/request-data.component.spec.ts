import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDataComponent } from './request-data.component';

describe('RequestDataComponent', () => {
  let component: RequestDataComponent;
  let fixture: ComponentFixture<RequestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
