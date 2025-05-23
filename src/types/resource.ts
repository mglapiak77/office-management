export interface Resource {
  id: number;
  type: 'computer' | 'monitor' | 'printer' | 'phone' | 'desk' | 'chair' | 'other';
  name: string;
  location: string;
  status: 'available' | 'out of order' | 'in use' | 'broken';
}