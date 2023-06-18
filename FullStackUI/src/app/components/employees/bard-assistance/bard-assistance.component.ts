import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bard } from 'src/app/models/bard.model';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-bard-assistance',
  templateUrl: './bard-assistance.component.html',
  styleUrls: ['./bard-assistance.component.css'],
})
export class BardAssistanceComponent implements OnInit {
  bardDetails: Bard = {
    promptedQuery: '',
    promptedResponse: '',
  };

  employeeDetails: Employee[] = [];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService
  ) {}

  ngOnInit(): void {}

  getPromptResponse() {
    // get the prompt query from the input field from the form
    this.bardDetails.promptedQuery = (<HTMLInputElement>(
      document.getElementById('prompt')
    )).value;
    console.log(this.bardDetails.promptedQuery + ' is the prompted query');

    //send the prompt query to the API
    this.employeeService
      .sendPromptQuery(this.bardDetails.promptedQuery, this.bardDetails)
      .subscribe({
        next: (response) => {
          this.bardDetails = response.bard;

          this.employeeDetails = response.employee;

          console.log(this.employeeDetails);
        },
      });
  }
}
