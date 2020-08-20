import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ShoppingService} from '../../../shared/services/shopping.service';
import {IPurchase} from '../../../shared/interfaces/purchase.interface';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.scss']
})
export class PurchaseDetailsComponent implements OnInit {
  purchase: IPurchase;

  constructor(private route: ActivatedRoute, private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.shoppingService.getItemById(params.id).subscribe((purchase) => {
       this.purchase = purchase;
     });
    });
  }

}
