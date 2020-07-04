import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownComponent implements OnInit {
  source = 'markdown';
  output = 'output';

  constructor() { }

  ngOnInit(): void {
  }

}
