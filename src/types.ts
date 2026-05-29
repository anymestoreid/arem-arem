export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  caption: string;
  image: string;
  category: 'makanan' | 'proses' | 'packaging' | 'pembeli';
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
