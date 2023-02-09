export interface SolidColor {
  name: string;
  tones: SolidColorTone[];
}

export interface SolidColorTone {
  hexadecimal: string;
  weight: number;
}
