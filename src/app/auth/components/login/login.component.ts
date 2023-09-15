import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
import { Login } from '../../context/DTOs';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  loginForm !: FormGroup;
  users: any[]=[]
  constructor(private fb: FormBuilder, private service: AuthService,private router: Router, private toastr: ToastrService) { }
// constructor(){}

  ngOnInit(): void {
   this.getUsers();
   this.createForm();
  }


createForm(){
 this.loginForm = this.fb.group({
  email:['',[Validators.required, Validators.email]],
  password : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]]
 })
}
 

getUsers(){
  this.service.getUsers().subscribe((data: any)=>{
    this.users = data
  })
}

login(){
  const model: Login ={
    email: this.loginForm.value.email,
    password: this.loginForm.value.password,
    role: "admin"
  }

let index =this.users.findIndex(item=> item.email == this.loginForm.value.email && item.password == this.loginForm.value.password )
if(index ==-1)
{
   this.toastr.error("this email or password is not correct","",{
   disableTimeOut: false,
   titleClass:"toastr_title",
   messageClass:"toastr_message",
   timeOut: 5000,
   closeButton: true,
   })
}else{
  this.service.login(this.loginForm.value).subscribe(res =>{
  this.toastr.success("Login succes","",{
    disableTimeOut: false,
    titleClass:"toastr_title",
    messageClass:"toastr_message",
    timeOut: 5000,
    closeButton: true,
    })
    this.router.navigate(['/conferences'])
  })
}


  // this.service.login(this.loginForm.value).subscribe(res =>{
  //   console.log("Login succes")
  //   this.router.navigate(['/conferences'])
  // }
  //   ,error =>{
  //     console.log("Login error, "+error.error);
  //   } )
  // console.log(this.loginForm.value);
}
}
