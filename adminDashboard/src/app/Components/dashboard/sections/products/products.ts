import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductService } from '../../../../Core/Services/product-service';
import { IProduct } from '../../../../Core/Models/iproduct';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ShortTitlePipe } from '../../../../Core/Pipes/short-title-pipe';

@Component({
  selector: 'app-products',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ShortTitlePipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products: IProduct[] = [];
  displayedColumns: string[] = ['id', 'image', 'title', 'price', 'category'];

  constructor(private productsService: ProductService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllProducts();
  }

  // Get All Products
  getAllProducts() {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        // only take 5 products for display
        this.products = data.slice(0, 5);
        console.log('Products:', this.products);
      },
      error: (err) => {
        console.error('Error loading products:', err);
      }
    });
  }
}
