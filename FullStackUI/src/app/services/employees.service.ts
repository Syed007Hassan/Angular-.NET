import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  //Getting all employees from the API
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }
}
