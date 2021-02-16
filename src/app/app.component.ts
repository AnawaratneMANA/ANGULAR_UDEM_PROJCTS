import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeatrue = 'recipes';
  onNavigate(feature: string) {
    this.loadedFeatrue = feature;
  }
}
