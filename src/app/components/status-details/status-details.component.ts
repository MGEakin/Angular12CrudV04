import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/models/status.model';

@Component({
  selector: 'app-status-details',
  templateUrl: './status-details.component.html',
  styleUrls: ['./status-details.component.css']
})
export class StatusDetailsComponent implements OnInit {

  currentStatus: Status = {
    title: ''
  };
  message = '';

  constructor(
    private statusService: StatusService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getStatus(this.route.snapshot.params.id);
  }

  getStatus(id: string): void {
    this.statusService.get(id)
      .subscribe(
        data => {
          this.currentStatus = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateStatus(): void {
    this.message = '';

    this.statusService.update(this.currentStatus.id, this.currentStatus)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteStatus(): void {
    this.statusService.delete(this.currentStatus.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/statuses']);
        },
        error => {
          console.log(error);
        });
  }
}
