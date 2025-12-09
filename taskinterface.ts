export interface task {
  id: number;
  description: string;
  status: 'to-do' | 'in-progress' | 'done';
  createdAt: Date;
  updatedAt: Date;
}