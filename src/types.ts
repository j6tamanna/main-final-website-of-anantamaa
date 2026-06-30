export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Modern Maharani' | 'Heritage Romantic' | 'Effortless Edit' | 'Drama Architect' | 'Rule Breaker' | 'Refined Edge';
  headline: string;
  description: string;
  fabric: string;
  construction: string;
  silhouette: string;
  sleeves: string;
  occasion: string;
  images: string[];
  careInstructions: string;
  shipping: string;
  returnPolicy: string;
  availability: boolean;
  rating: number;
  reviews: Review[];
  isConvertible?: boolean;
  convertibleOptions?: {
    label: string;
    description: string;
    states: { id: string; name: string; imageIndex: number; desc: string }[];
  };
  details: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  selectedStateId?: string; // For convertible garments
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  trackingNumber: string;
  address: {
    fullName: string;
    street: string;
    city: string;
    zipCode: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
  image: string;
}

export interface PRDSection {
  id: string;
  chapter: number;
  title: string;
  content: string;
}
