import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-resizable-sidebar',
  templateUrl: './resizable-sidebar.component.html',
  styleUrls: ['./resizable-sidebar.component.css']
})
export class ResizableSidebarComponent {
  isResizing = false;

  startResizing(event: MouseEvent) {
    this.isResizing = true;
    const sidebar = document.getElementById('resizable-sidebar');

    if (sidebar) {
      const initialHeight = sidebar.offsetHeight;
      const startY = event.clientY;

      const mouseMoveHandler = (e: MouseEvent) => {
        if (this.isResizing) {
          const newHeight = initialHeight - (e.clientY - startY); // Subtract instead of add
          sidebar.style.height = newHeight + 'px';
        }
      };

      const mouseUpHandler = () => {
        this.isResizing = false;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    }
  }
}  