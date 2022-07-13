import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DrawnComponent } from '../drawn/drawn.component';
@Component({
  selector: 'app-draw-number',
  templateUrl: './draw-number.component.html',
  styleUrls: ['./draw-number.component.scss']
})
export class DrawNumberComponent implements OnInit {
  public valor: number=1;
   constructor(public dialog: MatDialog) {}

 
   openDialog() {
   
    const dialogRef = this.dialog.open(DrawnComponent);
    localStorage.setItem('valor',JSON.stringify(this.valor));
    dialogRef.afterClosed().subscribe(result => {
      localStorage.clear();
    });
  }


  ngOnInit(): void {
  }

}

 
