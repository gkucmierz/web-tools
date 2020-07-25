import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-tools';

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      console.log(data);
    });
  }

}
