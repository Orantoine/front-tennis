import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleDemComponent } from './nouvelle-dem.component';

describe('NouvelleDemComponent', () => {
  let component: NouvelleDemComponent;
  let fixture: ComponentFixture<NouvelleDemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleDemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleDemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
