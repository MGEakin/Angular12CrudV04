import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment.model';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {

  currentAssignment: Assignment = {
    title: ''
  };
  message = '';

  constructor(
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAssignment(this.route.snapshot.params.id);
  }

  getAssignment(id: string): void {
    this.assignmentService.get(id)
      .subscribe(
        data => {
          this.currentAssignment = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAssignment(): void {
    this.message = '';

    this.assignmentService.update(this.currentAssignment.id, this.currentAssignment)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This assignment was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAssignment(): void {
    this.assignmentService.delete(this.currentAssignment.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/assignments']);
        },
        error => {
          console.log(error);
        });
  }
}
