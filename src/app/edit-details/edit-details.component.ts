import { Component, OnInit } from '@angular/core';
import {IPurchase} from '../interfaces/purchase.interface';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ShoppingService} from '../services/shopping.service';
import {CanComponentDeactivate} from '../interfaces/can-component-deactivate.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit, CanComponentDeactivate {
  purchase: IPurchase;
  title: string;
  count: string;
  isAvailableForEdit = false;


  constructor( private route: ActivatedRoute, private shoppingService: ShoppingService, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((params: Params) => {
      this.purchase = params.purchase;
      this.title = this.purchase.title;
      this.count = String(this.purchase.count);
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.isAvailableForEdit = Number(params.allowEdit) === 1;
    });
  }

  updateChanges() {
    this.shoppingService.updateItem(this.purchase.id, this.title, +this.count);
    this.router.navigate(['../'], {relativeTo: this.route, preserveQueryParams: true});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isAvailableForEdit) {
      return true;
    }
    if (this.purchase.title !== this.title || this.purchase.count !== +this.count) {
      return confirm('Do you want leave the page?');
    }
    return true;
  }
}
