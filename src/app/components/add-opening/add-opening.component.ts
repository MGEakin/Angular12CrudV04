import { Component, OnInit } from '@angular/core';
import { Opening } from 'src/app/models/opening.model';
import { OpeningService } from 'src/app/services/opening.service';

@Component({
  selector: 'app-add-opening',
  templateUrl: './add-opening.component.html',
  styleUrls: ['./add-opening.component.css']
})
export class AddOpeningComponent implements OnInit {

  opening: Opening = {
    title: ''
  };
  submitted = false;

  constructor(private openingService: OpeningService) { }

  ngOnInit(): void {
  }

  saveOpening(): void {
    const data = {
      title: this.opening.title
    };

    this.openingService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newOpening(): void {
    this.submitted = false;
    this.opening = {
      title: ''
    };
  }
}
