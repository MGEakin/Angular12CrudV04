import { Component, OnInit } from '@angular/core';
import { OpeningService } from 'src/app/services/opening.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Opening } from 'src/app/models/opening.model';

@Component({
  selector: 'app-opening-details',
  templateUrl: './opening-details.component.html',
  styleUrls: ['./opening-details.component.css']
})
export class OpeningDetailsComponent implements OnInit {

  currentOpening: Opening = {
    title: ''
  };
  message = '';

  constructor(
    private openingService: OpeningService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getOpening(this.route.snapshot.params.id);
  }

  getOpening(id: string): void {
    this.openingService.get(id)
      .subscribe(
        data => {
          this.currentOpening = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateOpening(): void {
    this.message = '';

    this.openingService.update(this.currentOpening.id, this.currentOpening)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This opening was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteOpening(): void {
    this.openingService.delete(this.currentOpening.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/openings']);
        },
        error => {
          console.log(error);
        });
  }
}
