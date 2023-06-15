import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bard } from 'src/app/models/bard.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-bard-assistance',
  templateUrl: './bard-assistance.component.html',
  styleUrls: ['./bard-assistance.component.css'],
})
export class BardAssistanceComponent implements OnInit {
  bardDetails: Bard = {
    promptedQuery: '',
    promptResponse: '',
  };

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
          console.log(response + ' is the response');
          this.bardDetails = response;
        },
      });
  }
}
