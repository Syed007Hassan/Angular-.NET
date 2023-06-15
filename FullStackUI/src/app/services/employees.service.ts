import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Employee } from '../models/employee.model';
import { Observable, map } from 'rxjs';
import { Bard } from '../models/bard.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  // baseApiUrl: string = environment.baseApiUrl;
  baseApiUrl = 'https://localhost:7271';

  constructor(private http: HttpClient) {}

  //Getting all employees from the API
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }

  //Adding an employee to the API
  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(
      this.baseApiUrl + '/api/employees',
      addEmployeeRequest
    );
  }

  //get an employee by id
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }

  //update an employee
  updateEmployee(
    id: string,
    updateEmployeeRequest: Employee
  ): Observable<Employee> {
    return this.http.put<Employee>(
      this.baseApiUrl + '/api/employees/' + id,
      updateEmployeeRequest
    );
  }

  //delete an employee
  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }

  sendPromptQuery(
    promptQuery: string,
    updatedBardRequest: Bard
  ): Observable<Bard> {
    const url = `${this.baseApiUrl}/api/employees/prompt/${encodeURIComponent(
      promptQuery
    )}`;
    return this.http.post<Bard>(url, updatedBardRequest);
  }
}
