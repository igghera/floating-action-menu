import {Component, Input, OnInit} from '@angular/core';
import {FloatingActionButton} from './floating-action-button';

@Component({
  selector: 'ng2-floating-action-menu',
  templateUrl: './floating-action-menu.component.html',
  styleUrls: ['./floating-action-menu.component.scss']
})
export class FloatingActionMenuComponent implements OnInit {

  isOpen = false;
  state = 'closed';

  @Input() placement: string;
  @Input() effect: string;
  @Input() label: string;
  @Input() iconClass: string;
  @Input() activeIconClass: string;
  @Input() toggle = 'click';
  @Input() buttons: Array<FloatingActionButton>;

  constructor() { }

  clicked() {
    if (this.toggle !== 'click') {
      return false;
    }
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.state = 'open';
    }else {
      this.state = 'closed';
    }
  }

  entered() {
    if (this.toggle !== 'hover') {
      return false;
    }
    this.state = 'open';
  }

  leaved() {
    if (this.toggle !== 'hover') {
      return false;
    }
    this.state = 'closed';
  }

  ngOnInit() {
  }

}
