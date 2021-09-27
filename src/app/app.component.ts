import { Component } from '@angular/core';
import 'conga-component-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wc-angular';

  handleClick(event: MouseEvent): void {
    console.log(event);
  }
}
