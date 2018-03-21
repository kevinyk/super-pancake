import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsEditComponent } from './authors-edit.component';

describe('AuthorsEditComponent', () => {
  let component: AuthorsEditComponent;
  let fixture: ComponentFixture<AuthorsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
