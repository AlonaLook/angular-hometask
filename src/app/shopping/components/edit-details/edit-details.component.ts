import { Component, OnInit } from '@angular/core';
import {IPurchase} from '../../../shared/interfaces/purchase.interface';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ShoppingService} from '../../../shared/services/shopping.service';
import {CanComponentDeactivate} from '../../../shared/services/guards/can-component-deactivate.interface';
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


  constructor( private route: ActivatedRoute, private shoppingService: ShoppingService, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((params: Params) => {
      this.purchase = params.purchase;
      this.title = this.purchase.title;
      this.count = String(this.purchase.count);
    });
  }

  updateChanges() {
    this.shoppingService.updateItem(this.purchase.id, this.title, +this.count);
    this.router.navigate(['../'], {relativeTo: this.route, preserveQueryParams: true});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const { title, count } = this.purchase;
    if (title !== this.title || count !== +this.count) {
      return confirm('Do you want leave the page?');
    }
    return true;
  }
}
