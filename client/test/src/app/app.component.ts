import { Component } from '@angular/core';

import {
  SyncSocketService,
  ThemeService
} from 'core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    public sync: SyncSocketService,
    public themer: ThemeService
  ) { }
}
