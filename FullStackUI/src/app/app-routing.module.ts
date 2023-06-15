import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { BardAssistanceComponent } from './components/employees/bard-assistance/bard-assistance.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesListComponent,
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent,
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent,
  },
  {
    path: 'employees/bard-assistance',
    component: BardAssistanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
