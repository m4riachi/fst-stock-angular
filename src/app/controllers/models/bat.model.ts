import { from } from 'rxjs';
import { Client } from './client.model';

export class Bat {
  public id: number;
  public libelle: string;
  public reference: string;
  public client: Client;
}
