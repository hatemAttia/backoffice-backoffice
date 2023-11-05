import { Component, Inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../context/DTO';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent implements OnInit {
  userData!: User;
  userId :any ;
  userForm: FormGroup;
  passwordForm: FormGroup;
  isValid : boolean = false;
  subsDate = new Date();
  
  constructor(private _fb: FormBuilder, 
    private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _userService: UsersService,
    private toastr: ToastrService) {
    this.userForm = this._fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      role: ['select',[Validators.required, this.roleValidator]], 
      country: ['', Validators.required],
      phone_nber: ['', Validators.required],
      password : ['', [Validators.minLength(3),Validators.maxLength(20)]]
    });

    this.passwordForm = this._fb.group({
      password : ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param) => {
      this.userId = param.get('id');
      if (this.userId) {
        this.getUser(this.userId);
      }

    });
   
   if (this.userData) {
    this.userForm.patchValue(this.userData);
  } 
  }

  getUser(id: any) {
    this._userService.getUser(id).subscribe(
      (data: User) => {
        console.log('User data:', data);
        this.userData = data;
        this.userForm.patchValue(data);
      },
      (error: any) => {
        console.error('Error fetching user details:', error);
      }
    );
  
  }

  submitUser(){
    if (this.userForm.valid && this.userId){
      this._userService.updateUser(this.userForm.value,this.userId).subscribe({
        next: (val :User)=>{
          this.toastr.success("Profile created succesfully","Success");
          },error:(err :any) => {
          console.error(err)
          this.toastr.error(err)
        }
        })}else if (this.userForm.valid && !this.userId){
            this._userService.creatUser(this.userForm.value).subscribe({
              next: (val :User)=>{
                this.toastr.success("Profile created succesfully","Success");
                this._router.navigate(['/users/accounts'])
              },error:(err :any) => {
                console.error(err)
                this.toastr.error(err)
              }
              })
      }else{
         console.log(this.userForm.hasError);
         this.isValid= true;

      }
  }

  updatePassword(){
    if (this.passwordForm.valid && this.userId){
      this._userService.updateUser(this.passwordForm.value, this.userId).subscribe({
        next: (val :User)=>{
          this.toastr.success("Password Updated succesfully","Success");
        },error:(err :any) => {
          console.error(err)
          this.toastr.error(err)
        }
        })
      }else{
        console.log(this.passwordForm.hasError);

     }

  }

  roleValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'select') {
      return { invalidRole: true };
    }
    return null;
  } 
}
