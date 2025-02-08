import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { OrderService } from '../../../services/order.service';
import { User } from '../../../shared/models/User';
import { ConfirmDialogComponent } from '../../partials/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditOrderComponent } from '../../partials/edit-order/edit-order.component';
import { SortOrdersPipe } from '../../../pipes/sort-order-pipe';

@Component({
  selector: 'app-orders',
  standalone: false,
  
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent{

  orders!: Order[];
  errorMessage: string = '';
  user!: User;

  constructor(private orderService: OrderService,
              private dialog: MatDialog,
  ) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    this.loadOrders();
  }

  loadOrders(): void{
    this.orderService.getOrderedItems().subscribe(orders => {
      this.orders = orders;
    }, error => {
      this.errorMessage = error;
    })
  }

  cancelOrder(orderId: number) :void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.orderService.cancelOrder(orderId).subscribe({
          next: () => {
            this.loadOrders(); // Refresh the orders list
          },
          error: (error) => {
            this.errorMessage = error.message;
          }
        });
      }
    });
  }

  editOrder(orderId: number) :void{
    const order = this.orders.find(o => o.id === orderId);
    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: '400px',
      data: { ...order }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.orderService.editOrder(orderId, result).subscribe({
          next: (order) => {
            this.loadOrders(); // Refresh the orders list
          },
          error: (error) => {
            this.errorMessage = error.message;
          }
        });
      }
    });
  }
  
}
