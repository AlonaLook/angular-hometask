import {Component, OnInit} from '@angular/core';

import {ShoppingService} from '../../../shared/services/shopping.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IPurchase} from '../../../shared/interfaces/purchase.interface';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.scss']
})
export class ShoppingFormComponent implements OnInit {
  form: FormGroup;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      count: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]+')
      ])
    });
  }

  get title() {
    return this.form.get('title');
  }

  get titleInvalidAndTouched() {
    return this.title.invalid && this.title.touched;
  }
  get count() {
    return this.form.get('count');
  }

  get countInvalidAndTouched() {
    return this.count.invalid && this.count.touched;
  }

  addPurchase() {
    const { title, count } = this.form.controls;
    const purchase: IPurchase = {
      title: title.value,
      count: count.value
    };
    this.shoppingService.createPurchase(purchase).subscribe(() => {
      this.form.reset();
    });

  }
}
