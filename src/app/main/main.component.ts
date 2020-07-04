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

### Development
- [fork](https://github.com/gkucmierz/web-tools)
- Clone
- \`\`npm install\`\`
- \`\`npm run start\`\`
- Commit
- PR (Pull Request)

### Issues

Issues, enhancements, bugs etc.

- [Issues](https://github.com/gkucmierz/web-tools/issues)
- [New Issue](https://github.com/gkucmierz/web-tools/issues/new)

### Thanks to

- [Angular](https://github.com/angular) - Great framework for building web-apps
- [Angular Material](https://material.angular.io/) - Material Design for angular, great UI
- [TypeScript](https://www.typescriptlang.org) - better JavaScript
- And many others…

### Author
[Grzegorz Kućmierz](https://github.com/gkucmierz) - Experienced Front-end Developer
`;
  html: string;

  constructor(private markdown: MarkdownService) {
    this.html = this.markdown.compile(this.md);
  }
}
