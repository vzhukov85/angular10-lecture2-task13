import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10-lecture2-task13';
  def_val: string = '';
  push_val: string = '';

  onChangedDef(val) {
    this.def_val = val;
  }

  onChangedPush(val) {
    this.push_val = val;
  }
}
