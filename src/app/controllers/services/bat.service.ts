import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bat } from '../models/bat.model';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class BatService {
  private baseUrl = 'http://127.0.0.1:8090/impepack-api/bat';
  private _bat: Bat = new Bat();
  private _bats: Array<Bat> = new Array<Bat>();
  private _client: Client;

  constructor(private http: HttpClient) { }

  public save() {
    this.bat.client = this.client;
    this.http.post<number>(this.baseUrl + '/', this.bat).subscribe(data => {
      if (data > 0) {
        this.bats.push(this.bat);
        let client: Client = this.bat['client'];
        this.bat = new Bat();
        this.bat.client = client;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.bat.client = this.client;
    this.http.put<number>(this.baseUrl + '/', this.bat).subscribe(data => {
      if (data > 0) {
        const index = this.bats.findIndex(p => p.id === this.bat.id);
        console.log(index);

        this.bats[index] = this.bat;

        let client: Client = this.bat['client'];
        this.bat = new Bat();
        this.bat.client = client;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public delete(reference, index) {
    this.http.delete<number>(this.baseUrl + '/reference/' + reference).subscribe(data => {
      if (data > 0) {
        this.bats.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public getAll(reference: string) {
    this.http.get<Array<Bat>>(this.baseUrl + '/client/reference/' + reference).subscribe(data => {
      this.bats = data;
    });
  }

  public clientFindByRef(reference: string) {
    this.http.get<Client>('http://127.0.0.1:8090/impepack-api/client/reference/' + reference).subscribe(data => {
      this.client = data;
    });
  }

  get bat(): Bat {
    if (this._bat == null) {
      this._bat = new Bat();
    }
    return this._bat;
  }

  set bat(value: Bat) {
    this._bat = value;
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

  get bats(): Array<Bat> {
    return this._bats;
  }

  set bats(value: Array<Bat>) {
    this._bats = value;
  }
}
