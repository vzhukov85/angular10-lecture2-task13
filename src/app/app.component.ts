import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'root-val';
  defVal = '';
  pushVal = '';

  onChangedDef(val: string): void {
    this.defVal = val;
  }

  onChangedPush(val: string): void {
    this.pushVal = val;
  }

  onClick(): void {
    this.title = 'changed-root-val';
  }

  onChange(event: any): void {
    this.title = event.target.value;
  }
}
