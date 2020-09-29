export default interface GoogleGeocodingResponse {
  data: Data;
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: Request;
}
export interface Data {
  results?: ResultsEntity[] | null;
  status: string;
}
export interface ResultsEntity {
  address_components?: AddressComponentsEntity[] | null;
  formatted_address: string;
  geometry: Geometry;
  partial_match: boolean;
  place_id: string;
  types?: string[] | null;
}
export interface AddressComponentsEntity {
  long_name: string;
  short_name: string;
  types?: string[] | null;
}
export interface Geometry {
  bounds: BoundsOrViewport;
  location: NortheastOrSouthwestOrLocation;
  location_type: string;
  viewport: BoundsOrViewport;
}
export interface BoundsOrViewport {
  northeast: NortheastOrSouthwestOrLocation;
  southwest: NortheastOrSouthwestOrLocation;
}
export interface NortheastOrSouthwestOrLocation {
  lat: number;
  lng: number;
}
export interface Headers {
  'cache-control': string;
  'content-length': string;
  'content-type': string;
  expires: string;
  pragma: string;
}
export interface Config {
  url: string;
  method: string;
  headers: Headers1;
  transformRequest?: null[] | null;
  transformResponse?: null[] | null;
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
}
export interface Headers1 {
  Accept: string;
}
export interface Request {}
