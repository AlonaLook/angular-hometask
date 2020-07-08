import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IPurchase} from '../interfaces/purchase.interface';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ShoppingService} from './shopping.service';

@Injectable({
  providedIn: 'root'
})

export class PurchaseResolverService implements Resolve <IPurchase> {
  constructor(private shoppingService: ShoppingService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPurchase> | Promise<IPurchase> | IPurchase {
    const id = Number(route.params.id);
    return this.shoppingService.searchItem(id);
  }
}
