import {Component, ElementRef, ViewChild} from '@angular/core';

import {ShoppingService} from '../services/shopping.service';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.scss']
})
export class ShoppingFormComponent {
  @ViewChild('inputTitle') inputTitleRef: ElementRef;
  @ViewChild('inputCount') inputCountRef: ElementRef;


  constructor(private shoppingService: ShoppingService) { }

  addPurchase() {
    const titleValue = this.inputTitleRef.nativeElement.value;
    const countValue = Number(this.inputCountRef.nativeElement.value);

    this.shoppingService.addPurchase(titleValue, countValue);

    this.inputTitleRef.nativeElement.value = this.inputCountRef.nativeElement.value = '';
  }

}
