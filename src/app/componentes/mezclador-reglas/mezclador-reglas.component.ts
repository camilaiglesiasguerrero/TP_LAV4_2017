import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-mezclador-reglas',
  templateUrl: './mezclador-reglas.component.html',
  styleUrls: ['./mezclador-reglas.component.css']
})
export class MezcladorReglasComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MezcladorReglasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
