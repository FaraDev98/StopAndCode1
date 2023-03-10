import { Component } from '@angular/core';
import { Transation } from '../transations';
import { TRANSATIONS } from '../transations-data';

@Component({
  selector: 'app-transtions-list',
  templateUrl: './transtions-list.component.html',
  styleUrls: ['./transtions-list.component.css']
})
export class TranstionsListComponent {
  transations?: Transation[] = TRANSATIONS;
}
