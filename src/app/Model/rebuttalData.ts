import { DataImage } from "./DataImage";

export interface RebuttalData{
  asin: string;
  workStream: string;
  quarCode: string;
  quarComment: string;

  operCode: string;
  operComment: string;
  smeCode: string;
  smeComment: string;
  finalCode: string;
  finalCodeRefComment: string;
  closedAs: string;
  images: DataImage[];
}