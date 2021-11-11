import { Record } from "./base";

export interface ImageStyle {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface Image extends Record {
  alt: string;
  originalUrl: string;
  position: number;
  styles: ImageStyle[];
} 