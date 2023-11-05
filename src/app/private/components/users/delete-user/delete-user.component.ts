import { Component, OnInit,Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(private _fb:FormBuilder, private _userService: UsersService, private _router:Router,private _toastrService: ToastrService) { }
  deleteUserForm!: FormGroup;
  @Input() userId: any ;

  ngOnInit(): void {
    this.deleteUserForm = this._fb.group({
      check: [false]
    });
  }

  deleteUser(id:number){  
    if (this.deleteUserForm.value.check) {    
    this._userService.deleteConference(id).subscribe({
      next:(response)=>{
        this._toastrService.success("User Deleted!","Success")
        this._router.navigate(['/users/accounts'])
    },error: console.log,
    })

  }else{
    this._toastrService.error("Please check first!")
  }
}
}


