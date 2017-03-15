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
  editItem( oldItem: Ingredient, newItem: Ingredient ){
    this.items[this.items.indexOf(oldItem)] = newItem;
  }
  deleteItem( item: Ingredient ){
    this.items.splice(this.items.indexOf(item), 1);
  }
}
