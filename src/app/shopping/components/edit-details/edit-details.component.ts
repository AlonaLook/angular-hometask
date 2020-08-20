import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

// Interfaces
import {IPurchase} from '../../../shared/interfaces/purchase.interface';

// Services
import {ShoppingService} from '../../../shared/services/shopping.service';
import {CanComponentDeactivate} from '../../../shared/services/guards/can-component-deactivate.interface';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit, CanComponentDeactivate {
  purchase: IPurchase;
  form: FormGroup;

  constructor( private route: ActivatedRoute, private shoppingService: ShoppingService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.shoppingService.getItemById(params.id).subscribe(purchase => {
        this.purchase = purchase;
        this.form = new FormGroup({
          title: new FormControl(purchase.title, Validators.required),
          count: new FormControl(purchase.count, [Validators.required, Validators.pattern('[0-9]+')])
        });
      });
    });
  }
  get title() {
    return this.form.get('title');
  }
  get count() {
    return this.form.get('count');
  }

  get titleInvalidAdnTouched() {
    return this.title.invalid && this.title.touched;
  }
  get countInvalidAdnTouched() {
    return this.count.invalid && this.count.touched;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.purchase) {
      const { title: newTitle, count: newCount } = this.purchase;
      if (newTitle !== this.title.value || newCount !== +this.count.value) {
        return confirm('Do you want leave the page?');
      }
    }
    return true;
  }

  submit() {
    if (this.form.invalid)  {
      return;
    }

    this.shoppingService.update({
      id: this.purchase.id,
      title: this.title.value,
      count: this.count.value
    }).subscribe((purchase) => {
      this.purchase = purchase;
      this.router.navigate(['/'], {relativeTo: this.route, preserveQueryParams: true});
    });
  }
}
