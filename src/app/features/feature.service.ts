import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  constructor() {}

  getFeatures() {
    return [
      {
        icon: 'desktop_windows',
        title: 'Web Design',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'mobile_screen_share',
        title: 'Mobile Design',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'trending_up',
        title: 'Performance',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'access_time',
        title: 'Time Tracker',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'desktop_windows',
        title: 'Desktop app',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'card_giftcard',
        title: 'Gift Voucher',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'report',
        title: 'Weekly Reports',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'add_shopping_cart',
        title: 'E-commerce',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      }
    ];
  }
}
