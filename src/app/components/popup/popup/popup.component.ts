import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  username = "";
  id = -1;
  
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.username = data.username;
    this.id = data.userId;
  }

  onCreate(){
    console.log("Creando instancia...")
  }
  
  onCancel(){
    console.log("Cerrando panel");
    this.dialogRef.close();
  }

}
