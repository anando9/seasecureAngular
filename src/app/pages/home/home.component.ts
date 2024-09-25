import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalWithTnCComponent } from "../../components/modal-with-tn-c/modal-with-tn-c.component";
import { TableComponent } from "../../table/table.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule ,ModalWithTnCComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{

  engForm:any = FormGroup

  arr:any=[
    {
      img:'sea1.jpg',
      vijay:'SEA'
    },
    {
      img:'shipping_agency.jpeg',
      vijay:'SHIPPING AGENCY'
    },
    {
      img:'air1.jpg',
      vijay:'AIR'
    },
    {
      img:'container_trading.jpg',
      vijay:'CONTAINER TRADING'
    },
    {
      img:'cistom_clerance.jpg',
      vijay:'CUSTOM CLEARANCE'
    },
    {
      img:'transport.png',
      vijay:'TRANSPORT'
    },
  ]


  arr2:any=[
    {
      img:'freight1_service.jpg',
      val:'FRIEGHT FORWADING'
    },
    {
      img:'sea_service.jpg',
      val:'SEA'
    },
    {
      img:'freight2_service.jpg',
      val:'AIR'
    },
    {
      img:'shipping_service.jpg',
      val:'SHIPPING AGENCY'
    },
    {
      img:'shipping_service.jpg',
      val:'SHIPPING AGENCY'
    },
  ]

  input:any=[
    "Your Name","Your Phone Number","Your Email Address","Details"
  ]

  header:any=[
    'id','name','phone','username','website'
  ]

  constructor(
    private fb:FormBuilder,
    private http:HttpClient
  ){}


  dataPar:any

  ngOnInit(): void {
    this.engForm = this.fb.group({
      name:["Anand",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      pNo:["1234567890",Validators.required],
      eid:["anand@gmail.com",Validators.email],
      details:["dfrfcftgvghbvhjnbnjnjkmnkmkm",Validators.required]
    })

    this.apiCall()
  }

  // steps
  // 1.variable Dec fromGroup
  // 2.dep Inj
  // 3.formGroup ko use in ngonitnt
    //3.1 input ka naam FG ke Object key
    //3.2 default Value (Optional || "")
    //3.3 Validators
    
//4.reactiveFrom Module import

//5. <form [formGroup]="fromGroup">
    // <input formCrtlName="firstName"> 
    //<button disable="fromGroup.invalid">

    show:any = false

    submit(){
      this.show = true
    }

    apiCall(){
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
        (e)=>{
          this.dataPar = e
          console.log(this.dataPar);
          this.show= true
        }
      )
    }

}

