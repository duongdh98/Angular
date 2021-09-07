import { Component, OnInit } from '@angular/core';

import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'buildDirective';
  canSave =  true;
  isSpecial = true;
  isUnchanged = true;
  isActive = true;

  nullCustomer: string | null = null;
  currentCustomer = {
    name: 'Laura'
  };

  // defined to demonstrate template context precedence
  item!: Item; 
  items: Item[] = [];
  currentItem!: Item;

  // trackBy change counting
  itemsNoTrackByCount   = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;

  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};

  ngOnInit() {
    this.resetItems();
    // class
    this.setCurrentClasses();
    //style
    this.setCurrentStyles();
  }

  resetItems() {
    this.items = Item.items.map(item => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
    this.itemsNoTrackByCount = 0;
  }

  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }
  // Get values
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  // Current class
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }
  // style
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }
  // 
  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue() {
    this.nullCustomer = 'Kelly';
  }
}
