import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = "teacher";
  answer = "";
  genders = ["male", "female"];

  //Add a default name to the field. (Method)
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: "",
      },
      secret: 'pet',
      questionAnswer: '',
      gender: "male"
    })
  }

  // Previous method
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }
}
