// Common Angular 2 component sample
import {Component} from '@angular/core';
import {HelloWorld} from 'ng2-components/components';

@Component({
  moduleId: module.id,
  selector: 'ng-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HelloWorld]
})
export class AppComponent {
}
