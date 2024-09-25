import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anand',
  standalone: true,
  imports: [],
  templateUrl: './anand.component.html',
  styleUrl: './anand.component.scss'
})
export class AnandComponent {

  @Input() anandVar:any

}
