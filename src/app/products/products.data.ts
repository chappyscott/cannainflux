import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './products';

export class ProductsData implements InMemoryDbService {
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
      }
    ];
    return { products };
  }
}
