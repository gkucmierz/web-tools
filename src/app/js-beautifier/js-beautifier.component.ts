import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as beautify from 'js-beautify';

@Component({
  selector: 'app-js-beautifier',
  templateUrl: './js-beautifier.component.html',
  styleUrls: ['./js-beautifier.component.scss']
})
export class JsBeautifierComponent implements OnInit {
  code: string;
  public codeGroup;

  constructor() {
    this.codeGroup = new FormGroup({
      code: new FormControl()
    });
  }

  beautify() {
    this.code = beautify(this.code, {
      indent_size: 2,
      indent_with_tabs: false,
    });
  }

  ngOnInit() {
  }

}
