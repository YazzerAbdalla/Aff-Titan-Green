export interface FavProps {
  id: number;
  name: string;
  description: string;
  short_description: string;
  image: string;
  os: string;
  url: string;
  reward: number;
  offer_type?: string;
  model?: string;
  instructions?: string;
  disclaimer?: string;
  payout?: string;
  countries?: string[];
  goals?: null;
  incent?: string;
  favorite?: number;
}
