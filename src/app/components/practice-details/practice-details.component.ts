import { Component, OnInit } from '@angular/core';
import { PracticeService } from 'src/app/services/practice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Practice } from 'src/app/models/practice.model';

@Component({
  selector: 'app-practice-details',
  templateUrl: './practice-details.component.html',
  styleUrls: ['./practice-details.component.css']
})
export class PracticeDetailsComponent implements OnInit {

  currentPractice: Practice = {
    name: ''
  };
  message = '';

  constructor(
    private practiceService: PracticeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPractice(this.route.snapshot.params.id);
  }

  getPractice(id: string): void {
    this.practiceService.get(id)
      .subscribe(
        data => {
          this.currentPractice = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePractice(): void {
    this.message = '';

    this.practiceService.update(this.currentPractice.id, this.currentPractice)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This practice was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletePractice(): void {
    this.practiceService.delete(this.currentPractice.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/practices']);
        },
        error => {
          console.log(error);
        });
  }
}
