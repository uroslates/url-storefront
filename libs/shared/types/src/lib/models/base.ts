export interface Record {
  id: string;
}

export interface NamedRecord extends Record {
  name: string;
  description: string;
}