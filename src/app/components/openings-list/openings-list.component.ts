import { Component, OnInit } from '@angular/core';
import { Opening } from 'src/app/models/opening.model';
import { OpeningService } from 'src/app/services/opening.service';

@Component({
  selector: 'app-openings-list',
  templateUrl: './openings-list.component.html',
  styleUrls: ['./openings-list.component.css']
})
export class OpeningsListComponent implements OnInit {

  openings?: Opening[];
  currentOpening: Opening = {};
  currentIndex = -1;
  title = '';

  constructor(private openingService: OpeningService) { }

  ngOnInit(): void {
    this.retrieveOpenings();
  }

  retrieveOpenings(): void {
    this.openingService.getAll()
      .subscribe(
        data => {
          this.openings = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveOpenings();
    this.currentOpening = {};
    this.currentIndex = -1;
  }

  setActiveOpening(opening: Opening, index: number): void {
    this.currentOpening = opening;
    this.currentIndex = index;
  }

  removeAllOpenings(): void {
    this.openingService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentOpening = {};
    this.currentIndex = -1;

    this.openingService.findByTitle(this.title)
      .subscribe(
        data => {
          this.openings = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
