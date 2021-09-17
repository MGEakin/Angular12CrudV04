import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    name: ''
  };
  submitted = false;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  saveClient(): void {
    const data = {
      name: this.client.name
    };

    this.clientService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newClient(): void {
    this.submitted = false;
    this.client = {
      name: ''
    };
  }
}
