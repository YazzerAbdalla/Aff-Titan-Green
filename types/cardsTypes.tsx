export interface CardsProps {
  id?: number;
  offer_type?: string;
  model?: string;
  name: string;
  instructions?: string;
  description?: string;
  short_description?: string;
  disclaimer?: string;
  payout?: string;
  image?: string;
  countries?: string[];
  instructions_array?: string[];
  goals?: null;
  os?: string;
  incent?: string;
  url?: string;
  reward: number;
  favorite?: number;
}
