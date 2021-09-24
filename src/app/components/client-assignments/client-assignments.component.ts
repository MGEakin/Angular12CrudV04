import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from 'src/app/services/message.service';

import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assignment.service';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-client-assignments',
  templateUrl: './client-assignments.component.html',
  styleUrls: ['./client-assignments.component.css']
})
export class ClientAssignmentsComponent implements OnInit {
  // clients: Client[] = [];
  currentClient: Client = {};
  currentRole: Role = {};
  currentUser: User = {};
  assignments: Assignment[] = [];
  assignmentsDisplays = Array();
  submitted = false;
  currentIndex = -1;
  assignmentsLength = this.assignments.length;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private assignmentService: AssignmentService,
              private messageService: MessageService,
              private clientService: ClientService,
              private roleService: RoleService,
              private userService: UserService) { }

  ngOnInit(): void {
      this.getClient(),
      this.getAssignmentsByClient(),
      this.buildAssignments()
      // this.getUserByAssignment()
  }

  getClient(): void {
    const client_id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.get(client_id)
      .subscribe(clients => this.currentClient = clients);
    // this.log(`getClient() fetched currentClient:${JSON.stringify(this.currentClient)}`)
  }

  getAssignmentsByClient(): void {
    // this.log(`getAssignmentsByClient() with currentClient=${JSON.stringify(this.currentClient)}`)
    this.assignmentService.getByClient(this.route.snapshot.paramMap.get('id'))
    // this.assignmentService.getByClient(this.currentClient.id)
      .subscribe(assignments => this.assignments = assignments);
  }

  buildAssignments(): void {
    this.log(`buildAssignments() with this.assignments length=${this.assignments.length}`)
    this.assignments.forEach(this.createAssignments)
  }

  createAssignments(value: any, index: any, array: any) {
    this.log(`createAssignments()`)

    let currentAssignment = {
      id: 0,
      title: "",
      startDate: "",
      endDate: "",
      rate: 0,
      firstName: "",
      lastName: "",
      role: ""
    };
    this.getRoleByAssignment(value.roleId);
    this.getUserByAssignment(value.userId);
    currentAssignment.id= value.id;
    currentAssignment.title= value.title;
    currentAssignment.startDate= value.startDate;
    currentAssignment.endDate= value.endDate;
    currentAssignment.rate= value.rate;
    currentAssignment.firstName= this.currentUser.firstName;
    currentAssignment.lastName= this.currentUser.lastName;
    currentAssignment.role= this.currentRole.title;
    this.assignmentsDisplays.push(currentAssignment);
  }

  getRoleByAssignment(roleId: number): void {
    this.roleService.get(roleId)
      .subscribe(roles => this.currentRole = roles);
  }

  getUserByAssignment(userId: number): void {
    this.userService.get(userId)
      .subscribe(users => this.currentUser = users);
  }

  setActiveAssignment(assignment: Assignment, index: number): void {
    // this.currentAssignment = assignment;
    this.currentIndex = index;
  }

  /** Log a TutorialService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TutorialService: ${message}`);
  }
}
