import { Component } from '@angular/core';
import {fadeInAnimation} from './animation/fade_animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeInAnimation]
})
export class AppComponent {
  title = 'selca-app';
}
