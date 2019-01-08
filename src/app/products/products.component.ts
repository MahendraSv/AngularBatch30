import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private pService: ProductsService) {
    this.getProducts();
  }

  n = 10;
  searchText: String = '';
  sortColumn: String = null;
  products: any[] = [];

  newProduct = {
    'productName': '',
    'description': '',
    'price': 0,
    'productId': 0,
    'productCode': '',
    'cost': 0,
    'category': '',
    'tags': [],
    'imageUrl': '',
    'releaseDate': ''
  };

  showImage: Boolean = false;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let that = this;
    this.pService.getProducts().subscribe(function(result: any[]) {
      that.products = result;
    });

    // this.pService.getProducts().subscribe((result: any[]) => { console.log(result); this.products = result; });
    // const _that = this;
    // this.pService.getProducts().subscribe(function(result: any[]) { _that.products = result; });
  }

  addProduct() {
    const that = this;
    // delete this.newProduct.id;
    this.pService.saveProduct(this.newProduct).subscribe(function(result) { that.getProducts(); });
  }

  deleteProduct(id) {
    const ans = confirm('Are you sure to delete this product? ' + id);
    if (ans) {
      const that = this;
      this.pService.deleteProduct(id).subscribe(function(result) { that.getProducts(); });
    }
  }

  doubleN() {
    this.n = this.n * 2;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  sort(columnName: String) {
    this.sortColumn = columnName;
  }

  clearSearchText() {
    this.searchText = '';
  }
}
