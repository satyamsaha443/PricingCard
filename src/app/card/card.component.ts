import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
@Input() obj:any="";
    // @Input() plan: string = "";
    // @Input() price: string ="";
    // @Input() users: string ="";
    // @Input() storage: string ="";
    // @Input() privateProjects: string[] =[];
    // @Input() phoneSupport: string []=[];
    // @Input() freeSubdomain: string[] =[];
    // @Input() statusReport: string []=[];


}
