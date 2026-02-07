import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { Sidebar } from "../../Components/sidebar/sidebar";
import { Navbar } from "../../Components/navbar/navbar";

@Component({
  selector: 'app-admin-layout',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatIconModule,
    Sidebar,
    Navbar
],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {

}
