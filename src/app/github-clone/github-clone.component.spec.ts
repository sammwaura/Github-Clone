import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCloneComponent } from './github-clone.component';

describe('GithubCloneComponent', () => {
  let component: GithubCloneComponent;
  let fixture: ComponentFixture<GithubCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
