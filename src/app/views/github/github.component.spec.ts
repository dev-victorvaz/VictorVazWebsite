import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubComponent } from './github.component';

describe('GitHubComponent', () => {
  let component: GitHubComponent;
  let fixture: ComponentFixture<GitHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitHubComponent]
    });
    fixture = TestBed.createComponent(GitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
