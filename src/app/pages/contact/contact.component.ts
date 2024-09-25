import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalWithTnCComponent } from '../../components/modal-with-tn-c/modal-with-tn-c.component';
import { UserdataService } from '../../services/userdata.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../../table/table.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,ModalWithTnCComponent , HttpClientModule ,TableComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  url:any ='https://jsonplaceholder.typicode.com/photos'

  detailsForm:any = FormGroup

  constructor(
    private fb:FormBuilder,
    private use:UserdataService,
    private http:HttpClient
  ){

  }

  ngOnInit(): void {
    this.detailsForm = this.fb.group(
      {
        firstName:['vijay',Validators.required],
        lastName:['Nishad',Validators.required],
        emailID:['vn@gmail.com',Validators.required],
        msg:['1234567890',Validators.required]
    }
  )

  this.submit()

  this.apiCall()
  this.apiCall2()
  }

  submit(){
    console.log(this.detailsForm.value)

    this.use.setdata(this.detailsForm.value)
  }

  dataPar:any
  show:boolean= false

  header:any=[
    'id','name','phone','username','website'
  ]
  
  header2:any =[
    "title",
    "url",
  ]


  apiCall(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (e:any)=>{
        this.dataPar = e
        console.log(this.dataPar);
        this.show= true
      }
    )
  }

  dataPar2:any
  show2:boolean= false

  apiCall2(){
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(
      (e:any)=>{
        console.log(e);
        this.dataPar2 = e
        this.show2= true
      }
    )
  }
  

}
