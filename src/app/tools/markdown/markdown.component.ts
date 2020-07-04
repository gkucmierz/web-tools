import { Component, ViewEncapsulation } from '@angular/core';
import { markdown } from 'markdown';

const NEW_LINE = '\n';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownComponent {
  source = `# Markdown Viewer${NEW_LINE}${NEW_LINE}Simple **tool**, that helps to visualise **markdown**`;
  output = 'output';

  constructor() {
    this.change();
  }

  change(): void {
    this.output = markdown.toHTML(this.source);
  }

}
