import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogContentExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-content-example',
  templateUrl: './dialog-content-example.html',
})

export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}