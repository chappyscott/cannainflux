import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Dispensary } from './dispensaries';

export class DispensariesData implements InMemoryDbService {
 createDb() {
    const dispensaries: Dispensary[] = [
      {
        id: 1,
        dispensaryName: 'RSO 1g - Blue Dream',
        dispensaryNotes: 'Serial Number Lot #',
        dispensaryType: 'Concentrate',
        dispensaryPrice: 25,
      },
      {
        id: 2,
        dispensaryName: 'Temple Hash 1g - Blue Dream',
        dispensaryNotes: 'Serial Number Lot #',
        dispensaryType: 'Concentrate',
        dispensaryPrice: 20,
      },
      {
        id: 3,
        dispensaryName: 'Trainwreck 1lb.',
        dispensaryNotes: 'Serial Number Lot #',
        dispensaryType: 'Flower',
        dispensaryPrice: 1600,
      }
    ];
    return { dispensaries };
  }
}
