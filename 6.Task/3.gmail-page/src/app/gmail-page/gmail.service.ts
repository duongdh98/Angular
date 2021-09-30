import { flatten } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable({
  providedIn: 'root',
})

export class GmailService {

  checkedAll = false;
  checkedItem = false;
  closeChat = false;

  allChecked(value : FormControl) {
    this.checkedAll = true;

    if (this.checkedAll) {
      value.setValue(this.checkedAll);
    }
  }

  unChecked(value: FormControl) {
    this.checkedAll = false;

    if (this.checkedAll == false) {
      value.setValue(this.checkedAll)
    }
  }

  itemsControll(value: FormControl) {
    value.setValue(this.checkedAll);
  }
}