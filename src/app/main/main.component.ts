import { Component, OnInit, ViewChild } from '@angular/core';
import { MarkdownService } from '../services/markdown.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  md: string;

  constructor(private markdown: MarkdownService) { }

  ngOnInit(): void { }

}
