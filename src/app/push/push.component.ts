import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent {
  val = "push_val"

  @Output() onChanged = new EventEmitter<string>();

  constructor() { }

  onInput(event) {
     this.val = event.target.value
     this.onChanged.emit(this.val)
  }
}
