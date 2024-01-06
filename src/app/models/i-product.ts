export enum ProductStatus {
    Available = 'متوفر',
    AlmostFinish = 'كمية أقل',
    Unavailable = 'غير متوفر'
  }

export interface Iproduct {
    id: number;
    productName: string;
    price: number;
    quantity: number;    
    productStatus:ProductStatus
    Ranking:string;
    tax: number;
    minNumber: number;
    discount: number;
    SellingRate: boolean;
  }