import { Component } from '@angular/core';
import { MarkdownService } from '../services/markdown.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  md = `
# Web Tools

All kinds of web tools included in one compact web-app
`;
  html: string;

  constructor(private markdown: MarkdownService) {
    this.html = this.markdown.compile(this.md);
  }
}
