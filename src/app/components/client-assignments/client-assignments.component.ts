import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assignment.service';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

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
              private clientService: ClientService,
              private roleService: RoleService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getClient(),
      this.getAssignmentsByClient()
      // this.getRoleByAssignment(),
      // this.getUserByAssignment()
  }

  getClient(): void {
    const client_id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.get(client_id)
      .subscribe(clients => this.currentClient = clients);
  }

  getAssignmentsByClient(): void {
    // this.assignmentService.getByClient(this.currentClient.id)
    this.assignmentService.getByClient(this.route.snapshot.paramMap.get('id'))
      .subscribe(assignments => this.assignments = assignments);
  }

  buildAssignments(): void {
    this.assignments.forEach(this.createAssignments)
  }

  createAssignments(value: any, index: any, array: any) {

    let currentAssignment = {
      assignId: 0,
      assignTitle: "",
      assignStartDate: "",
      assignEndDate: "",
      assignRate: 0,
      assignUserFName: "",
      assignUserLName: "",
      assignRole: ""
    };
    this.getRoleByAssignment(value.roleId);
    this.getUserByAssignment(value.userId);
    currentAssignment.assignTitle= value.title;
    currentAssignment.assignTitle= value.title;
    currentAssignment.assignStartDate= value.startDate;
    currentAssignment.assignEndDate= value.endDate;
    currentAssignment.assignRate= value.rate;
    currentAssignment.assignUserFName= this.currentUser.firstName;
    currentAssignment.assignUserFName= this.currentUser.lastName;
    currentAssignment.assignRole= this.currentRole.title;
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

}
