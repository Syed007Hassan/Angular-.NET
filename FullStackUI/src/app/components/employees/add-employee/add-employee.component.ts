import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    salary: 0,
    department: '',
    phone: 0,
  };

  // Injecting the service into the component through the
  constructor(private employeeService: EmployeesService, private router: Router) {}

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        console.log(employee);
        this.router.navigate(['/employees']);
      },
    });
  }

  ngOnInit(): void {
    console.log('Component initialized'); // You can replace this with a string value or remove it
  }
}
