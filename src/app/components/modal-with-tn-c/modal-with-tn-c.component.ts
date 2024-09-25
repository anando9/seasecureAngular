import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";

@Component({
  selector: 'app-modal-with-tn-c',
  standalone: true,
  imports: [CommonModule, ButtonsComponent, CheckboxComponent],
  templateUrl: './modal-with-tn-c.component.html',
  styleUrl: './modal-with-tn-c.component.scss'
})
export class ModalWithTnCComponent {


  @Input() vijay:any
  @Input() header:any

  karan:boolean = false

  setData(e:any){
    this.karan = e
  }

}
