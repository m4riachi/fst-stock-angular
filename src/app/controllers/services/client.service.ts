import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://127.0.0.1:8090/impepack-api/client';
  private _client: Client = new Client();
  private _clients: Array<Client> = new Array<Client>();

  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<number>(this.baseUrl + '/', this.client).subscribe(data => {
      if (data > 0) {
        this.clients.push(this.client);
        this.client = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/', this.client).subscribe(data => {
      if (data > 0) {
        const index = this.clients.findIndex(p => p.id === this.client.id);
        this.clients[index] = this.client;
        this.client = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public delete(reference, index) {
    this.http.delete<number>(this.baseUrl + '/reference/' + reference).subscribe(data => {
      if (data > 0) {
        this.clients.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public getAll() {
    this.http.get<Array<Client>>(this.baseUrl + '/').subscribe(data => {
      this.clients = data;
    });
  }

  get client(): Client {
    if (this._client == null) {
      this._client = new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get clients(): Array<Client> {
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }
}
