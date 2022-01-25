import { Entity } from 'typeorm';

@Entity()
export class User {
  id: number;

  name: string;

  email: string;

  created_at: Date;
}
