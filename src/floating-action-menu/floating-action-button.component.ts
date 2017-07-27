import {Component, Input, OnInit} from '@angular/core';
import {FloatingActionButton} from './floating-action-button';

@Component({
  selector: 'ng2-floating-action-button',
  templateUrl: './floating-action-button.component.html',
  styleUrls: ['./floating-action-button.component.sass']
})
export class FloatingActionButtonComponent implements OnInit {

  @Input() button: FloatingActionButton;

  buttonClick() {
    this.button.onClick();
    return false;
  }

  ngOnInit() {
  }

}
