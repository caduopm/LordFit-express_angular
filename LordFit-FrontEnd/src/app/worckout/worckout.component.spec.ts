import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorckoutComponent } from './worckout.component';

describe('WorckoutComponent', () => {
  let component: WorckoutComponent;
  let fixture: ComponentFixture<WorckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
