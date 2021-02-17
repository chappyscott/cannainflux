/* Defines the products catalog */
export interface Product {
  id: number;  // unique id for each pool not editable by user

  // for Product Details
  productName: string;
  productType: string;
  productNotes: string;
  productPrice: number;

}
