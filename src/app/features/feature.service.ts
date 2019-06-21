import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  constructor() {}

  getFeatures() {
    return [
      {
        icon: 'fas fa-desktop fa-3x',
        title: 'Desktop App',
        desc:
          'Our websites feature a powerful, clean, and an easy-to-use interface'
      },
      {
        icon: 'fas fa-mobile-alt fa-3x',
        title: 'Mobile App',
        desc:
          'We have the right combination of team members to take your next big mobile venture to success'
      },
      {
        icon: 'fas fa-pencil-ruler fa-3x',
        title: 'UX Design',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'fas fa-pen-nib fa-3x',
        title: 'Logo Design',
        desc:
          'Your logo is the best first impression… so make it powerful.'
      },
      {
        icon: 'fab fa-google fa-3x',
        title: 'Google Services',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'fab fa-instagram fa-3x',
        title: 'Social Media Post',
        desc:
          'Take your social media ads to the next level with custom graphics.'
      }
      // {
      //   icon: 'report',
      //   title: 'Weekly Reports',
      //   desc:
      //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      // },
      // {
      //   icon: 'add_shopping_cart',
      //   title: 'E-commerce',
      //   desc:
      //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      // }
    ];
  }
}
