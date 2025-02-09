import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../../services/user-management.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userManagementService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  updateUserRole(userId: number, role: string): void {
    this.userManagementService.updateUserRole(userId, role).subscribe(
      () => {
        this.loadUsers();
      },
      (error) => {
        console.error('Error updating user role', error);
      }
    );
  }

  deleteUser(userId: number): void {
    this.userManagementService.deleteUser(userId).subscribe(
      () => {
        this.loadUsers();
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
  }
}
