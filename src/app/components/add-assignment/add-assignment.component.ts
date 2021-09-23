import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assignment.service';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  clients: Client[] = [];
  roles: Role[] = [];
  users: User[] = [];
  assignment: Assignment = {
    title: ''
  };
  submitted = false;

  constructor(private assignmentService: AssignmentService,
              private clientService: ClientService,
              private roleService: RoleService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getClients(),
      this.getRoles(),
      this.getUsers()
  }

  getClients(): void {
    this.clientService.getAll()
      .subscribe(clients => this.clients = clients);
  }

  getRoles(): void {
    this.roleService.getAll()
      .subscribe(roles => this.roles = roles);
  }

  getUsers(): void {
    this.userService.getAll()
      .subscribe(users => this.users = users);
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
