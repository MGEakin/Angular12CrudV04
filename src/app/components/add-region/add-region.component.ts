import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/models/region.model';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {

  region: Region = {
    name: ''
  };
  submitted = false;

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
  }

  saveRegion(): void {
    const data = {
      name: this.region.name
    };

    this.regionService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRegion(): void {
    this.submitted = false;
    this.region = {
      name: ''
    };
  }
}
