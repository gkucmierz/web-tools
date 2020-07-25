import { Component, OnInit } from '@angular/core';
import { SocialLinks } from 'social-links';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  socials = [
    'linkedin', 'twitter', 'facebook', 'youtube', 'twitch',
    'instagram', 'patreon', 'github', 'medium', 'dribbble', 'behance'
  ];
  result = { };
  social = '';

  constructor() { }

  onSearchChange(value, social): void {
    this.result = {};
    const sl = new SocialLinks();
    const isValid = sl.isValid(social, value);
    try {
      const sanitized = sl.sanitize(social, value);
      const profileId = sl.getProfileId(social, value);
      this.result = { [social]: { isValid, profileId, sanitized } };
    } catch (e) {
      this.result = { [social]: { isValid } };
    }

  }

  ngOnInit(): void { }

}
