export interface GoalsProps {
  payout: string;
  name: string;
  amount: number;
}
export interface CardsProps {
  id?: number;
  offer_type?: string;
  model?: string;
  name: string;
  instructions?: string;
  instructions_array?: string[];
  description?: string;
  short_description?: string;
  disclaimer?: string;
  payout?: string;
  image?: string;
  countries?: any[];
  goals?: GoalsProps[] | null;
  os?: string;
  incent?: string;
  url: string;
  reward: number;
  favorite?: number;
  date: string;
  points?: number;
}
