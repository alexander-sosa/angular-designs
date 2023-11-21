import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-invoker',
  templateUrl: './invoker.component.html',
  styleUrls: ['./invoker.component.css']
})
export class InvokerComponent {
  
  constructor(private dialog: MatDialog){}

  openDialog(){
    let dialogRef= this.dialog.open(PopupComponent, {
      width: '50%',
      //height: '50%',
      data: {
        username: "Natalia",
        userId: 5
      }
    });
  }
}
