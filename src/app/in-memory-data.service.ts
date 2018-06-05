import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]
    const users = [
      {
        id: 'FIKVIZS30007',
        username: 'admin',
        password: 'hT25i9D4+Qc1Ssz93DrW33lJoZ2szfzvVejTwFfkNAlssMMCTdzbRJmcGjEfik3u',
        locked: false,
        enabled: true,
      }
    ]
    return {heroes,users}
  }

  constructor() { }
}
