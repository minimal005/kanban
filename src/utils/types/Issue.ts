export interface Issue {
  id: number;
  title: string;
  date: string;
  status: 'open' | 'inProgress' | 'closed';
  author: string;
  comments: number;
}
