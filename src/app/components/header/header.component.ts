import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  option:any=[
    "Project Handling","Sea","Air","Shipping Agency"
  ]

  // option2:any=[]

  // ngOnInit(): void {
  //   this.option.forEach((ele:any) => {
  //     this.option2.push(ele.toString().toUpperCase())
  //   });
  // }  

  constructor(
    private vijay:Router,
    public kuchBhi:UserdataService
  ){ }

  route(p:any){
    this.vijay.navigateByUrl(p)
  }
}


// directive
// Component, Structure aur Attribute

// Pipes
// Pure pipe, Impure Pipe
