import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { PatientData } from 'src/app/@core/data/patient';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { el } from 'date-fns/locale';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(
    private fb : UntypedFormBuilder,
    private messeage : NzMessageService,
    private router : Router,
   
    ) {}

  validateForm!: UntypedFormGroup;
  formInformation!: UntypedFormGroup;
  formMedical!: UntypedFormGroup;
  formCard!:UntypedFormGroup;
  formRelatives !: UntypedFormGroup;




  submitForm():void {
      if(this.validateForm.valid){

      }else {
        Object.values(this.validateForm.controls).forEach((control)=>{
            if (control.invalid){
              control.markAsDirty();
              control.updateValueAndValidity({ onlySelf: true });
            }
        });
      }

      if(this.formInformation.valid){

      }else {
        Object.values(this.formInformation.controls).forEach((control)=>{
          if (control.invalid){
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
      });
      }

      if(this.formMedical.valid){

      }else {
        Object.values(this.formMedical.controls).forEach((control)=>{
          if (control.invalid){
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
      });
      }

      if(this.formCard.valid){

      }else {
        Object.values(this.formCard.controls).forEach((control)=>{
          if (control.invalid){
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
      });
      }


      if(this.formRelatives.valid){

      }else {
        Object.values(this.formRelatives.controls).forEach((control)=>{
          if (control.invalid){
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
      });
      }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username : [null,[Validators.required]],
      birthday : [null,[Validators.required]],
      gender : [null,[Validators.required]],
      phone : [null, [Validators.required]],
      city : [null,[Validators.required]],
      district : [null, [Validators.required]],
      address : [null,[Validators.required]]
    });

    this.formInformation = this.fb.group({
      hospitalizedday : [null,[Validators.required]],
      subclass : [null,[Validators.required]],
      type : [null,[Validators.required]],
      source : [null,[Validators.required]],
      institute : [null,[Validators.required]],
      accident : [null,[Validators.required]],
      object : [null,[Validators.required]],
      group : [null,[Validators.required]],
      rank : [null,[Validators.required]],
      position : [null,[Validators.required]],
      unit : [null,[Validators.required]]
    });

    this.formMedical = this.fb.group({
       reason : [null,[Validators.required]],
       guarantee : [null,[Validators.required]],
       freenumber : [null,[Validators.required]],
       exempt : [null,[Validators.required]],
       service : [null,[Validators.required]],
       room : [null,[Validators.required]]
    });

    this.formCard = this.fb.group({
      idCard : [null,[Validators.required]],
      nameCard : [null,[Validators.required]],
      dateCard : [null,[Validators.required]]
    });

    this.formRelatives = this.fb.group({
        relatives : [null,[Validators.required]],
        nameRelatives : [null,[Validators.required]],
        phoneRelatives : [null,[Validators.required]],
        addressRelatives : [null,[Validators.required]]
    })

    localStorage.clear();
  }

}
