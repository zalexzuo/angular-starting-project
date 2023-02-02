import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products'; 

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

    // The @Input() decorator indicates that the property value 
    // passes in from the component's parent
  @Input() product!: Product | undefined;

    // @Output() allows the component to emit an event
    // when the value of the notify property changes.
  @Output() notify = new EventEmitter();

}

