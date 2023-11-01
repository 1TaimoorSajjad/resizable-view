import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableSidebarComponent } from './resizable-sidebar.component';

describe('ResizableSidebarComponent', () => {
  let component: ResizableSidebarComponent;
  let fixture: ComponentFixture<ResizableSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResizableSidebarComponent]
    });
    fixture = TestBed.createComponent(ResizableSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
