import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'app-edit-order',
  standalone: false,
  
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})
export class EditOrderComponent {

  constructor(
    public dialogRef: MatDialogRef<EditOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) { }

  onSave(): void {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  removeItem(index: number): void {
    this.data.items.splice(index, 1);
    this.data.totalPrice = this.data.items.reduce((total, item) =>
       total + item.price * item.quantity, 0);
  }
}
