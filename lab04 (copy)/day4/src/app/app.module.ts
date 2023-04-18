import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ErrorsComponent } from './Components/errors/errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule ,Routes} from '@angular/router';
import { EditStudentComponent } from './Components/edit-student/edit-student.component';

let routes:Routes=[
  {path:"",component:RegistrationComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentDetailsComponent},
  {path:"students/:id/edit",component:EditStudentComponent},
  {path:"**",component:ErrorsComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    StudentsComponent,
    StudentDetailsComponent,
    ErrorsComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
