import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  @Output() dataSent = new EventEmitter<boolean>();   
  a:any = false

  understood(){
    this.a = !this.a
    this.dataSent.emit(this.a)
  }

  close(e:any){
    console.log("e=======================>",e)
  }

}
