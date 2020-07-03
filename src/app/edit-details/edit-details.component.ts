import { Component, OnInit } from '@angular/core';
import {IPurchase} from '../interfaces/purchase.interface';
import {ActivatedRoute, Params} from '@angular/router';
import {ShoppingService} from '../services/shopping.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {
  purchase: IPurchase;
  isEdit = false;

  constructor( private route: ActivatedRoute, private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = Number(params.id);
      this.purchase = this.shoppingService.searchItem(id);
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.isEdit = Number(params.allowEdit) === 1;
    });
  }

}
