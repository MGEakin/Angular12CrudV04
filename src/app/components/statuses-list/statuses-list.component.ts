import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status.model';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-statuses-list',
  templateUrl: './statuses-list.component.html',
  styleUrls: ['./statuses-list.component.css']
})
export class StatusesListComponent implements OnInit {

  statuses?: Status[];
  currentStatus: Status = {};
  currentIndex = -1;
  title = '';

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
    this.retrieveStatuses();
  }

  retrieveStatuses(): void {
    this.statusService.getAll()
      .subscribe(
        data => {
          this.statuses = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveStatuses();
    this.currentStatus = {};
    this.currentIndex = -1;
  }

  setActiveStatus(status: Status, index: number): void {
    this.currentStatus = status;
    this.currentIndex = index;
  }

  removeAllStatuses(): void {
    this.statusService.deleteAll()
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
    this.currentStatus = {};
    this.currentIndex = -1;

    this.statusService.findByTitle(this.title)
      .subscribe(
        data => {
          this.statuses = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
