import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailedComponent } from './search-detailed.component';

describe('SearchDetailedComponent', () => {
  let component: SearchDetailedComponent;
  let fixture: ComponentFixture<SearchDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
