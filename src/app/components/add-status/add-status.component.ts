import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status.model';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {

  status: Status = {
    title: ''
  };
  submitted = false;

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
  }

  saveStatus(): void {
    const data = {
      title: this.status.title
    };

    this.statusService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newStatus(): void {
    this.submitted = false;
    this.status = {
      title: ''
    };
  }
}
