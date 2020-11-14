import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-def',
  templateUrl: './def.component.html',
  styleUrls: ['./def.component.css']
})
export class DefComponent {
  val = "default val";
  @Input() rootVal = '';

  @Output() onChanged = new EventEmitter<string>();

  constructor() { }

  onInput(event): void {
    this.val = event.target.value;
    this.onChanged.emit(this.val)
  }

  get runChangeDetection(): boolean {
    console.log('Checking the view onPush');
    return true;
  }

}
