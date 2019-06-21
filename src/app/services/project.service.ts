import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {}

  getWorks() {
    return [
      {
        name: 'Hair-N-Paris',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          '../../assets/img/hnp1.jpg',
        link: 'https://www.hairnparis.com'
      },
      {
        name: 'Brooklyn Banking',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          '../../assets/img/Group_1.jpg',
        link: 'https://www.envizn.io/ux'
      },
      {
        name: 'Legacy Looks',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          '../../assets/img/rsz_legacy7.jpg',
        link: 'https://www.legacylooks.com'
      },
      {
        name: 'Bantr App',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          '../../assets/img/pjimage.jpg',
        link: 'https://www.envizn.io/ux'
      },
      {
        name: 'UX Portfolio',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          '../../assets/img/uxbyparis.png',
        link: 'https://www.uxbyparis.com'
      },
      // {
      //   name: 'Project 6',
      //   desc:
      //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      //   src:
      //     'https://images.unsplash.com/photo-1501856777435-29877ed80a3d?w=650'
      // }
    ];
  }

  getServices() {
    return [
      {
        icon: 'computer',
        title: 'Web Development',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'palette',
        title: 'Web Design',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'photo_camera',
        title: 'Photography',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'queue_music',
        title: 'Music Writing',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'volume_up',
        title: 'Advertising',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      },
      {
        icon: 'contact_support',
        title: '24/7 Support',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      }
    ];
  }

  getClients() {
    return [
      'assets/img/clients/dream.png',
      'assets/img/clients/congrats.png',
      'assets/img/clients/best.png',
      'assets/img/clients/original.png',
      'assets/img/clients/king.png',
      'assets/img/clients/love.png',
      'assets/img/clients/the.png',
      'assets/img/clients/easter.png',
      'assets/img/clients/with.png',
      'assets/img/clients/special.png',
      'assets/img/clients/bravo.png'
    ];
  }

  getTestimonials() {
    return [
      {
        text:
          // tslint:disable-next-line:max-line-length
          'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.',
        author: 'Mr. Adam Sandler',
        company: 'General Electric',
        image: 'assets/img/profile/adam.jpg'
      },
      {
        text:
          // tslint:disable-next-line:max-line-length
          'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.',
        author: 'Mrs. Ashley Ahlberg',
        company: 'Dell EMC',
        image: 'assets/img/profile/ashley.jpg'
      },
      {
        text:
          // tslint:disable-next-line:max-line-length
          'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.',
        author: 'Mr. Bruno Vespa',
        company: 'Southwest Airlines',
        image: 'assets/img/profile/bruno.jpg'
      },
      {
        text:
          // tslint:disable-next-line:max-line-length
          'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.',
        author: 'Mrs. Julia Aniston',
        company: 'Apple Co',
        image: 'assets/img/profile/julia.jpg'
      }
    ];
  }
}
