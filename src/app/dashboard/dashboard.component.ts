import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboardUrl: string = ''; // Biến để lưu URL của dashboard Power BI
  // Phương thức để cập nhật URL của dashboard
  updateDashboardUrl(url: string) {
    this.dashboardUrl = url;
  }
}
