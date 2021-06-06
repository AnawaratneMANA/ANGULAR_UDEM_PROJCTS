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
  submitted = false;
  user = {
    username: "p",
    email: "p",
    secretQuestion: "",
    answer: "",
    gender: ""
  };

  //Add a default name to the field. (Method)
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: "male"
    // })

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })


  }

  // Previous method
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.gender = this.signupForm.value.gender
    this.user.answer = this.signupForm.value.questionAnswer;

    this.signupForm.reset();
  }
}
