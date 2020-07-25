import { Component, OnInit } from '@angular/core';
import { SocialLinks } from 'social-links';

const SOCIALS = [
  'linkedin', 'twitter', 'facebook', 'youtube', 'twitch',
  'instagram', 'patreon', 'github', 'medium', 'dribbble', 'behance'
];

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  socials = SOCIALS;
  social = SOCIALS[0];
  value = '';
  result = { };
  trimInput = true;
  allowQueryParams = false;

  constructor() { }

  onChange(): void {
    this.result = {};

    const sl = new SocialLinks({
      trimInput: this.trimInput,
      allowQueryParams: this.allowQueryParams,
    });

    const isValid = sl.isValid(this.social, this.value);

    try {
      const sanitized = sl.sanitize(this.social, this.value);
      const profileId = sl.getProfileId(this.social, this.value);
      this.result = { [this.social]: { isValid, profileId, sanitized } };
    } catch (e) {
      this.result = { [this.social]: { isValid } };
    }
  }

  ngOnInit(): void {
    this.onChange();
  }

}
