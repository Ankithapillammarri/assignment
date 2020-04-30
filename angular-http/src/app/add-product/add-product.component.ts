import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit ,OnDestroy{

  message: string;
mySubscription: Subscription;

  constructor(private productService: ProductService) {
    /* this.mySubscription = interval(1000).subscribe(data =>{
      console.log(data);
    }); */ 
   }

   postProduct(form: NgForm){
    this.productService.postData(form.value).subscribe(response =>{
      console.log(response);
      form.reset();
      if(!response.error){
        this.message = 'Product added successfully';
      }
    },error =>{
      console.log(error);
    });
   }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    //this.mySubscription.unsubscribe();
  }

}
