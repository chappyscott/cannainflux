import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './products/products';
import { Dispensary } from './dispensaries/dispensaries';

export class CanninfluxService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: 'RSO 1g - Blue Dream',
        productNotes: 'Serial Number Lot #',
        productType: 'Concentrate',
        productPrice: 25,
      },
      {
        id: 2,
        productName: 'Temple Hash 1g - Blue Dream',
        productNotes: 'Serial Number Lot #',
        productType: 'Concentrate',
        productPrice: 20,
      },
      {
        id: 3,
        productName: 'Trainwreck 1lb.',
        productNotes: 'Serial Number Lot #',
        productType: 'Flower',
        productPrice: 1600,
      },
    ];

    const dispensaries: Dispensary[] = [
      {
        id: 1,
        dispensaryName: 'xxxRSO 1g - Blue Dream',
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
      },
    ];

    return { products, dispensaries };
  }
}
