import { Component, Input } from '@angular/core';
import { Transation } from '../transations';

@Component({
  selector: 'app-transtion-detail',
  templateUrl: './transtion-detail.component.html',
  styleUrls: ['./transtion-detail.component.css']
})
export class TranstionDetailComponent {

  @Input()
  transation?: Transation;
}
