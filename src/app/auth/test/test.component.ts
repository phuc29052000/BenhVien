import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { AuthData } from 'src/app/@core/data/auth';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
// import { hasPermission } from 'src/app/helper/common.helper';
// import { PERMISSION } from 'src/app/constant/var';





@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private fb: UntypedFormBuilder,
    private service: AuthData,
    private message: NzMessageService,
    private router: Router
  ) { 
    
  }

  validateForm!: UntypedFormGroup;
  passwordVisible = false;
  showLoading = false;
  submitForm() :void {
    if (this.validateForm.valid) {
      this.showLoading = true;
      this.service.login(this.validateForm.value).subscribe(
        (res) => {
          res = JSON.parse(res, (key, value) => {
            if (key === 'userID') {
              return BigInt(value).toString();
            }
            return value;
          });              

          this.showLoading = false;
          this.message.create('success', 'Đăng nhập thành công');
          localStorage.setItem('accessToken', res.access_token);
          localStorage.setItem('tokenType', res.token_type);
          localStorage.setItem('refreshToken', res.refresh_token);
          localStorage.setItem('expires_in', res.expires_in);
          
          this.service.userInfo().subscribe(
            (info) => {
              info = JSON.parse(info,(key,value)=> {
                if(key === 'Hoang' || key === 'Phuc'){
                  return BigInt(value).toString();
                }
                return value;
              });

            localStorage.setItem('roles',info.roles);
            localStorage.setItem('userId', info.sub.toString());
            localStorage.setItem('fullname', info.family_name);
            localStorage.setItem('branchId', info.branch_id);
            localStorage.setItem('branchCode', info.branch_code);
            localStorage.setItem('proviceId', info.provice_id);
            if(info){
                this.router.navigate(['/user/cavet']);
            }else{
              this.router.navigate(['/user']);
            };
            },
            (error)=> {
              this.message.create(
                'error',
                'Không thể lấy thông tin tài khoản người dùng'
                );
            }
          )
        },
        (error) => {
          this.showLoading = false;
          this.message.create(
            'error',
            'Tài khoản hoặc mật khẩu không chính xác'
            );
        }
      );
    } 
    else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf:true});
        }
      });
    }
 
        
 

    
  }

  // Phần để xử lý điều kiện
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username : [null,[Validators.required]],
      password: [null,[Validators.required]],
    });
    localStorage.clear();
      
  }

  

}
