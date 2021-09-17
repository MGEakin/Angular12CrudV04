import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {

  currentRole: Role = {
    title: ''
  };
  message = '';

  constructor(
    private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getRole(this.route.snapshot.params.id);
  }

  getRole(id: string): void {
    this.roleService.get(id)
      .subscribe(
        data => {
          this.currentRole = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateRole(): void {
    this.message = '';

    this.roleService.update(this.currentRole.id, this.currentRole)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This role was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRole(): void {
    this.roleService.delete(this.currentRole.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/roles']);
        },
        error => {
          console.log(error);
        });
  }
}
