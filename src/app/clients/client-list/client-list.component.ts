import { Component, OnInit } from '@angular/core';
import { Client } from '../../controllers/models/client.model';
import { ClientService } from '../../controllers/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAll();
  }

  get clients(): Array<Client> {
    return this.clientService.clients;
  }

  public update(client: Client) {
    this.clientService.client = this.clone(client);
  }

  public delete(id: number, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.clientService.delete(id, index);
    }
  }

  private clone(client: Client) {
    const p = new Client();
    p.id = client.id;
    p.libelle = client.libelle;
    p.reference = client.reference;
    return p;
  }
}
