import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { Sidebar } from '../../Shared/sidebar/sidebar';
import { Navbar } from "../../Shared/navbar/navbar";

@Component({
  selector: 'app-admin-layout',
  imports: [
    RouterOutlet,
    Sidebar,
    MatSidenavModule,
    MatIconModule,
    Navbar
],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {

}
