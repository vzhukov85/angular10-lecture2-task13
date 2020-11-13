import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-def',
  templateUrl: './def.component.html',
  styleUrls: ['./def.component.css']
})
export class DefComponent {
  val = "default_val"

  @Output() onChanged = new EventEmitter<string>();

  constructor() { }

  onInput(event) {
    this.val = event.target.value
    this.onChanged.emit(this.val)
  }

}
