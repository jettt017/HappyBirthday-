export type WishTone = 'heartfelt' | 'playful' | 'poetical';

export interface Recipient {
  name: string;
  tone: WishTone;
  showSurprise: boolean;
  cakeBlownOut: boolean;
  candlesCount: number;
}

export interface BirthdayAchievement {
  icon: string;
  title: string;
  value: string;
  description: string;
}

export interface SurpriseCoupon {
  code: string;
  title: string;
  description: string;
  emoji: string;
}
