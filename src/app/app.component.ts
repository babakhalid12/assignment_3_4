import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous';
  lengthofstring = 0;
  capital ="";

  public fun()
  {
      this.lengthofstring  = this.title.length;
      this.capital = this.title.toLocaleUpperCase();
  }
}
