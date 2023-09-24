import { Component } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {
  isActive: boolean = false;

  // Phương thức để chuyển đổi trạng thái menu
  toggleMenu() {
    this.isActive = !this.isActive;
  }

  isImportDataActive: boolean = false;

  // Phương thức để chuyển đổi trạng thái menu "IMPORT DATA"
  toggleImportDataMenu() {
    this.isImportDataActive = !this.isImportDataActive;
  }

  dashboardUrl: string = ''; // Biến để lưu URL của dashboard Power BI

  // Phương thức để cập nhật URL của dashboard
  updateDashboardUrl(url: string) {
    this.dashboardUrl = url;
  }
}
