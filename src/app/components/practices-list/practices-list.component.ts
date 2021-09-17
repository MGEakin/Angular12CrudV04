import { Component, OnInit } from '@angular/core';
import { Practice } from 'src/app/models/practice.model';
import { PracticeService } from 'src/app/services/practice.service';

@Component({
  selector: 'app-practices-list',
  templateUrl: './practices-list.component.html',
  styleUrls: ['./practices-list.component.css']
})
export class PracticesListComponent implements OnInit {

  practices?: Practice[];
  currentPractice: Practice = {};
  currentIndex = -1;
  name = '';

  constructor(private practiceService: PracticeService) { }

  ngOnInit(): void {
    this.retrievePractices();
  }

  retrievePractices(): void {
    this.practiceService.getAll()
      .subscribe(
        data => {
          this.practices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePractices();
    this.currentPractice = {};
    this.currentIndex = -1;
  }

  setActivePractice(practice: Practice, index: number): void {
    this.currentPractice = practice;
    this.currentIndex = index;
  }

  removeAllPractices(): void {
    this.practiceService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.currentPractice = {};
    this.currentIndex = -1;

    this.practiceService.findByName(this.name)
      .subscribe(
        data => {
          this.practices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
