export default interface CardProps {
  data: CardDataProps;
}

export interface CardDataProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}
