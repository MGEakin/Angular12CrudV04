import { Component, OnInit } from '@angular/core';

import { Opening } from 'src/app/models/opening.model';
import { OpeningService } from 'src/app/services/opening.service';

// export interface Opening {
//   title: string;
//   id: number;
//   startDate: string;
//   client: string;
//   rate: number;
// }
const ELEMENT_DATA: Opening[] = [
  {id: 1, title: 'Hydrogen', startDate: '02-01-01', client: 'H', rate: 100},
  {id: 2, title: 'Helium', startDate: '02-01-01', client: 'He', rate: 100},
  {id: 3, title: 'Lithium', startDate: '02-01-01', client: 'Li', rate: 100},
  {id: 4, title: 'Beryllium', startDate: '02-01-01', client: 'Be', rate: 100},
  {id: 5, title: 'Boron', startDate: '02-01-01', client: 'B', rate: 100},
  {id: 6, title: 'Carbon', startDate: '02-01-01', client: 'C', rate: 100},
  {id: 7, title: 'Nitrogen', startDate: '02-01-01', client: 'N', rate: 100},
  {id: 8, title: 'Oxygen', startDate: '02-01-01', client: 'O', rate: 100},
  {id: 9, title: 'Fluorine', startDate: '02-01-01', client: 'F', rate: 100},
  {id: 10, title: 'Neon', startDate: '02-01-01', client: 'Ne', rate: 100},
];

// export interface Openings {
//   id: number;
//   title: string;
//   startDate: any;
//   rate: number;
//   client: any;
//   role: any;
// }
// const ELEMENT_DATA: Openings[] = [
//   {id: 1, client: "MMC", title: "Opening 1", startDate: '02-01-01', rate: 100, role: "Agile Coach"},
//   {id: 2, client: "MMC", title: "Opening 2", startDate: '01-01-01', rate: 200, role: "TDD Coach"},
// ];

@Component({
  selector: 'app-openings-list',
  templateUrl: './openings-list.component.html',
  styleUrls: ['./openings-list.component.css']
})
export class OpeningsListComponent implements OnInit {
  // displayedColumns: string[] = ['id', 'client', 'title', 'startDate', 'rate', 'role'];
  displayedColumns: string[] = ['id', 'client', 'title', 'startDate', 'rate'];
  // dataSource = ELEMENT_DATA;
  // dataSource: Opening[] = [];

  openings: Opening[] = [];
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
  //   this.retrieveOpenings();
  //   this.currentOpening = {};
  //   this.currentIndex = -1;
  }

  setActiveOpening(opening: Opening, index: number): void {
  //   this.currentOpening = opening;
  //   this.currentIndex = index;
  }

  removeAllOpenings(): void {
  //   this.openingService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.refreshList();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  }

  searchTitle(): void {
    // this.currentOpening = {};
    // this.currentIndex = -1;
    //
    // this.openingService.findByTitle(this.title)
    //   .subscribe(
    //     data => {
    //       this.openings = data;
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }
}
