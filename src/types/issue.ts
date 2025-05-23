export interface Issue {
  id: number;
  resourceId: number;
  description: string;
  reportedDate: string;
  status: 'open' | 'in progress' | 'closed';
}