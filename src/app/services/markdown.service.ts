import { Injectable } from '@angular/core';
import { markdown } from 'markdown';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor() { }

  compile(md): string {
    return markdown.toHTML(md);
  }
}
