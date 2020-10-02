import { Component, OnInit } from '@angular/core';
import { Bat } from '../../controllers/models/bat.model';
import { BatService } from '../../controllers/services/bat.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-bat-list',
  templateUrl: './bat-list.component.html',
  styleUrls: ['./bat-list.component.css']
})
export class BatListComponent implements OnInit {
  constructor(private batService: BatService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.batService.getAll(this.route.snapshot.paramMap.get('reference'));
    this.batService.clientFindByRef(this.route.snapshot.paramMap.get('reference'));
  }

  get bats(): Array<Bat> {
    return this.batService.bats;
  }

  public update(bat: Bat) {
    this.batService.bat = this.clone(bat);
  }

  public delete(id: number, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.batService.delete(id, index);
    }
  }

  private clone(bat: Bat) {
    const p = new Bat();
    p.id = bat.id;
    p.libelle = bat.libelle;
    p.reference = bat.reference;
    p.client = bat.client;
    return p;
  }
}
