import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CustomDatePipePipe } from '../../pipe/custom-date-pipe.pipe';
import { UserdataService } from '../../services/userdata.service';
import { ClickDirective } from '../../directive/click.directive';
import { AnandComponent } from "../../components/anand/anand.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CustomDatePipePipe, AnandComponent],
  // hostDirectives: [ClickDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy,AfterContentInit,AfterContentChecked {

  data = 0

  constructor(
    public abcs: UserdataService
  ) {
    console.log("i am a Constructor")
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges djgjgj', changes);
  // }

  ngOnDestroy(): void {
    console.log("Hello from ng OnDestroy")
  }

  ngOnInit(): void {
    console.log("Hello from ng ONinit")
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  

  datasdgj(){
    this.abcs.changeKar(true)
    // this.data = ++ this.data    
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  parent: any = [
    {
      name: "Our Mission",
      data: `Everyone within our business understands our mission and the role each and everyone of us plays in
                achieving it.
                It means we don't just come to work to do a job, we come to work to make a difference.
                To make the process of buying and managing shipping and logistics services simple, efficient, stress
                free and cost effective.`,
    }, {
      name: "Our Values",
      data: `At Seasecure we believe that the key to our success in the Forwarding industry is the fact that we
                hold the right values and ensure that we implement them in all of our services`,
      list: [
        "Align with our customer's needs"
        , "Be worthy of our customer’s trust"
        , "Deliver competitive services"
        , "Provide complete solutions"
        , "Invest in our people"
        , "Strive to be better"
        , "Value our customer and our colleagues"
        , "The SUCCOUR Personal Touch"
        ,]
    }
  ]


  number: any = new Date()
}
