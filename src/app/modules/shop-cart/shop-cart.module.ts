import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopCartRoutingModule } from './shop-cart-routing.module';
import { ShoppingListContainerComponent } from './shopping-list-container/shopping-list-container.component';
import { ShoppingListPresentationComponent } from './shopping-list-container/shopping-list-presentation/shopping-list-presentation.component';
import { ShopCartService } from './service/shop-cart.service';
import { CreateFormPresentationComponent } from './shopping-list-container/shopping-list-presentation/create-form-presentation/create-form-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListContainerComponent,
    ShoppingListPresentationComponent,
    CreateFormPresentationComponent,
  ],
  imports: [
    CommonModule,
    ShopCartRoutingModule,
    SharedModule
  ],
  providers: [ShopCartService]
})
export class ShopCartModule { }
