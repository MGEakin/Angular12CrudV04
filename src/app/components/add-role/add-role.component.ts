import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role: Role = {
    title: ''
  };
  submitted = false;

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
  }

  saveRole(): void {
    const data = {
      title: this.role.title
    };

    this.roleService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRole(): void {
    this.submitted = false;
    this.role = {
      title: ''
    };
  }
}
