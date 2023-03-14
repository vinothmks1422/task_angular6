import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sixthapp';

  text = "";

  name:string= "";
  array: any = [];

  add() {    
    if (this.name !== "") {
      this.array.push(this.name);
    }
  }

  delete(index: number) {
    this.array.splice(index, 1)
  }

}
