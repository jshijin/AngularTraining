import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .fifth{
    color : white;
  }
  `]
})
export class AppComponent {
buttonClicks = [];
buttonClicked = false;
getColor(i : any)
{
  return i >= 5 ? 'blue' : 'White'
}
createLog()
{
  //(this.buttonClicks.length + 1).toString
  //this.buttonClicks.push("click# " + (this.buttonClicks.length + 1));
  this.buttonClicks.push(new Date());
  this.buttonClicked = !this.buttonClicked;
}
}
