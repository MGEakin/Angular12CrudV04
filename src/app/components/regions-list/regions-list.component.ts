import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/models/region.model';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {

  regions?: Region[];
  currentRegion: Region = {};
  currentIndex = -1;
  name = '';

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.retrieveRegions();
  }

  retrieveRegions(): void {
    this.regionService.getAll()
      .subscribe(
        data => {
          this.regions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveRegions();
    this.currentRegion = {};
    this.currentIndex = -1;
  }

  setActiveRegion(region: Region, index: number): void {
    this.currentRegion = region;
    this.currentIndex = index;
  }

  removeAllRegions(): void {
    this.regionService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.currentRegion = {};
    this.currentIndex = -1;

    this.regionService.findByName(this.name)
      .subscribe(
        data => {
          this.regions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
