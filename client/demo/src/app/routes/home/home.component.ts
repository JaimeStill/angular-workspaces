import { Component } from '@angular/core';

import {
  SyncSocketService,
  ThemeService
} from 'core';

@Component({
  selector: 'home-route',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  constructor(
    public sync: SyncSocketService,
    public themer: ThemeService
  ) { }
}
