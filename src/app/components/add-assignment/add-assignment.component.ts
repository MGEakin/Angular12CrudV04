import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  assignment: Assignment = {
    title: ''
  };
  submitted = false;

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
  }

  saveAssignment(): void {
    const data = {
      title: this.assignment.title
    };

    this.assignmentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAssignment(): void {
    this.submitted = false;
    this.assignment = {
      title: ''
    };
  }
}
