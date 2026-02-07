import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDivider, MatNavList } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatNavList,
    MatIcon,
    MatDivider,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  avatar: string = 'assets/images/rectangle-26.png';

}
