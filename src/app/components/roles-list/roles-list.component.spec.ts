import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roles?: Role[];
  currentRole: Role = {};
  currentIndex = -1;
  title = '';

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.retrieveRoles();
  }

  retrieveRoles(): void {
    this.roleService.getAll()
      .subscribe(
        data => {
          this.roles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveRoles();
    this.currentRole = {};
    this.currentIndex = -1;
  }

  setActiveRole(role: Role, index: number): void {
    this.currentRole = role;
    this.currentIndex = index;
  }

  removeAllRoles(): void {
    this.roleService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentRole = {};
    this.currentIndex = -1;

    this.roleService.findByTitle(this.title)
      .subscribe(
        data => {
          this.roles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
