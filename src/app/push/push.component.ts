import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushComponent {
  val = 'push_val';
  @Input() rootVal = '';
  @Output() onChanged = new EventEmitter<string>();

  constructor() {}

  onInput(event): void {
    this.val = event.target.value;
    this.onChanged.emit(this.val);
  }

  get runChangeDetection(): boolean {
    console.log('checking the view onPush');
    return true;
  }
}
