import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  private vijay:any
  headerChnage:any= false
  loginKeBaadKaKachra=false

  setdata(e:any){
    localStorage.setItem('usercred', JSON.stringify(e) )
  }

  getdata(){
    return JSON.parse(localStorage.getItem('usercred') || '')
  }

  changeKar(e:any){
    this.headerChnage = e
  }

  kachraShow(){
    this.loginKeBaadKaKachra = true
  }



  // set userdetails(data:any){
  //   this.vijay = data
  // }

  // get userdetailswewewe(){
  //   return this.vijay
  // }

  

}
