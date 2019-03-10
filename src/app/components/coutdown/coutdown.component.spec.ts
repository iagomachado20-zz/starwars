import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutdownComponent } from './coutdown.component';

describe('CoutdownComponent', () => {
  let component: CoutdownComponent;
  let fixture: ComponentFixture<CoutdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoutdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
