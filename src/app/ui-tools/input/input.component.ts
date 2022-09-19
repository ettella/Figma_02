import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type!: any;
  @Input() id!: any;
  @Input() name!: any;
  @Input() placeholder!: any;

  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    // this.buttonActive = this.myForm.invalid
  }

  get username(): FormControl{
    return this.myForm.get('username') as FormControl
  }

  get password(): FormControl{
    return this.myForm.get('password') as FormControl
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm.value)
  }

}


