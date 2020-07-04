import { Component, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from '../../services/markdown.service';

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

  constructor(private markdown: MarkdownService) {
    this.change();
  }

  change(): void {
    this.output = this.markdown.compile(this.source);
  }
}
