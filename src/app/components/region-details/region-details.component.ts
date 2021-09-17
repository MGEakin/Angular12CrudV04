import { Component, OnInit } from '@angular/core';
import { RegionService } from 'src/app/services/region.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/models/region.model';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnInit {

  currentRegion: Region = {
    name: ''
  };
  message = '';

  constructor(
    private regionService: RegionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getRegion(this.route.snapshot.params.id);
  }

  getRegion(id: string): void {
    this.regionService.get(id)
      .subscribe(
        data => {
          this.currentRegion = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateRegion(): void {
    this.message = '';

    this.regionService.update(this.currentRegion.id, this.currentRegion)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This region was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRegion(): void {
    this.regionService.delete(this.currentRegion.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/regions']);
        },
        error => {
          console.log(error);
        });
  }
}
