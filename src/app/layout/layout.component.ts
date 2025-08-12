import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerComponent, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

 

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    NzLayoutModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    NzIconModule,
    NzButtonModule,
    NzDrawerComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [BreakpointObserver, NzDrawerService],
})
export class Layout {
  isMobile$: Observable<boolean>;
  drawerVisible = false;
constructor(private breakpointObserver: BreakpointObserver, private drawerService: NzDrawerService) {
    this.isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  openDrawer(): void {
    this.drawerVisible = true;
  }

  closeDrawer(): void {
    this.drawerVisible = false;
  }
}
