import { Ingredient } from '../shared/ingredient';

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems( newItems: Ingredient[] ){
    Array.prototype.push.apply( this.items, newItems );
  }
  addItem( newItem: Ingredient ){
    this.addItems([newItem]);
  }
}
