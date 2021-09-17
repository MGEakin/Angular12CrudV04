import { Component, OnInit } from '@angular/core';
import { Practice } from 'src/app/models/practice.model';
import { PracticeService } from 'src/app/services/practice.service';

@Component({
  selector: 'app-add-practice',
  templateUrl: './add-practice.component.html',
  styleUrls: ['./add-practice.component.css']
})
export class AddPracticeComponent implements OnInit {

  practice: Practice = {
    name: ''
  };
  submitted = false;

  constructor(private practiceService: PracticeService) { }

  ngOnInit(): void {
  }

  savePractice(): void {
    const data = {
      name: this.practice.name
    };

    this.practiceService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPractice(): void {
    this.submitted = false;
    this.practice = {
      name: ''
    };
  }
}

