import {Component, OnInit} from '@angular/core';
import {ShoppingService} from '../../services/shopping.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IPurchase} from '../../interfaces/purchase.interface';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {
  purchase: IPurchase;

  constructor(
    public shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        const id = Number(params.id);
        this.purchase = this.shoppingService.searchItem(id);
      });
  }

  editItem() {
    this.shoppingService.editItem(this.purchase.id);
    this.purchase = this.shoppingService.searchItem(this.purchase.id);
  }

  saveChanges() {
    this.shoppingService.saveChanges(this.purchase.id, this.purchase.title);
    this.purchase = this.shoppingService.searchItem(this.purchase.id);
  }

  cloneItem() {
    this.shoppingService.cloneItem(this.purchase.id);
    this.navigateToList();
  }

  removeItem() {
    this.shoppingService.removeItem(this.purchase.id);
    this.navigateToList();
  }

  navigateToList() {
    this.router.navigate(['/shopping-list']);
  }
}
