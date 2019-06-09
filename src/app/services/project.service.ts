import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {}

  getWorks() {
    return [
      {
        name: 'Project 1',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          'https://images.unsplash.com/photo-1522199670076-2852f80289c3?w=650'
      },
      {
        name: 'Project 2',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=650'
      },
      {
        name: 'Project 3',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=650'
      },
      {
        name: 'Project 4',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          'https://images.unsplash.com/photo-1493932484895-752d1471eab5?w=650'
      },
      {
        name: 'Project 5',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          'https://images.unsplash.com/photo-1422480041422-130238c67fe2?w=650'
      },
      {
        name: 'Project 6',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
        src:
          'https://images.unsplash.com/photo-1501856777435-29877ed80a3d?w=650'
      }
    ];
  }
}
