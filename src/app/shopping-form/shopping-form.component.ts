import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {IPurchase} from '../interfaces/purchase.interface';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.scss']
})
export class ShoppingFormComponent {
  @ViewChild('inputTitle') inputTitleRef: ElementRef;
  @ViewChild('inputCount') inputCountRef: ElementRef;
  @Output() onAddItem: EventEmitter<IPurchase> = new EventEmitter<IPurchase>();

  purchase: IPurchase = {
    title: '',
    id: 0,
    count: 0
  };

  addPurchase() {
    const titleValue = this.inputTitleRef.nativeElement.value;
    const countValue = Number(this.inputCountRef.nativeElement.value);

    if (titleValue.trim() && countValue) {
      this.purchase = {
        title: titleValue,
        count: countValue,
        id: Date.now()
      };
      this.inputTitleRef.nativeElement.value = this.inputCountRef.nativeElement.value = '';
      this.onAddItem.emit(this.purchase);
    }
  }

}
