import { Component, OnInit } from '@angular/core';
import { BatService } from '../../controllers/services/bat.service';
import { Bat } from '../../controllers/models/bat.model';

@Component({
  selector: 'app-bat-form',
  templateUrl: './bat-form.component.html',
  styleUrls: ['./bat-form.component.css']
})
export class BatFormComponent implements OnInit {

  constructor(private batService: BatService) { }

  ngOnInit(): void {
  }

  get bat(): Bat {
    return this.batService.bat;
  }

  public save() {
    if (this.batService.bat.id != null) {
      this.batService.update();
    }
    else {
      this.batService.save();
    }
  }
}
