import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../context/DTO';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'country',
    'phone_nber',
    'role',
  ];
  dataSource!: MatTableDataSource<any>;

  originalData: User[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _userService: UsersService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._userService.getAllAdminUsers().subscribe({
      next: (res) => {
        console.log('this the data source ' + res);
        this.originalData = this.mappingUsers(res);
        this.dataSource = new MatTableDataSource(this.originalData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  getUsersByRole(event: any) {
    const selectedRole = event.target.value;

    if (selectedRole === 'all') {
      // Show all columns when "All Users" is selected
      this.dataSource = new MatTableDataSource(this.originalData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    } else {
      // Filter the data based on the selected role
      const filteredData = this.originalData.filter((user) => user.role === selectedRole);
      this.dataSource = new MatTableDataSource(filteredData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    
    this.cd.detectChanges(); // Trigger change detection
  }

  mappingUsers(data: any[]) {
    let usersList = data.map((item) => {
      return {
        ...item,
      };
    });
    return usersList;
  }

  userDetails(user: any) {
    console.log('the details of user is ' + JSON.stringify(user));
    this.router.navigate(['/users/details']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
