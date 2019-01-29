import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'T-Law' },
      { id: 12, name: 'Big Dex' },
      { id: 13, name: 'DW4' },
      { id: 14, name: 'BigGameHunter' },
      { id: 15, name: 'CDubFortyTwo' },
      { id: 16, name: '5-Tee' },
      { id: 17, name: 'JRossTheBoss' },
      { id: 18, name: 'XT3' },
      { id: 19, name: 'LightningMan' },
      { id: 20, name: 'ThunderMan' }
    ];
    return {heroes};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}