import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: '1',
      name: 'John',
      email: 'john@gmail.com',
      phone: 1234567890,
      salary: 10000,
      department: 'IT',
    },
    {
      id: '2',
      name: 'Jane',
      email: 'jane@gmail.com',
      phone: 9876543210,
      salary: 12000,
      department: 'HR',
    },
    {
      id: '3',
      name: 'Mike',
      email: 'mike@gmail.com',
      phone: 5555555555,
      salary: 15000,
      department: 'Finance',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Additional initialization logic can be added here
  }
}
