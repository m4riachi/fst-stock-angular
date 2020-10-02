import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../controllers/services/client.service';
import { Client } from '../../controllers/models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  get client(): Client {
    return this.clientService.client;
  }

  public save() {
    if (this.clientService.client.id != null) {
      this.clientService.update();
    }
    else {
      this.clientService.save();
    }
  }
}
