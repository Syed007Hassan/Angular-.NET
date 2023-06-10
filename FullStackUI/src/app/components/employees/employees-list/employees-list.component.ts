import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [

  ];

  constructor(private employeesService: EmployeesService   ) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        console.log(employees);
      },
      error(err) {
        console.log(err);
      },
    });
}
}
