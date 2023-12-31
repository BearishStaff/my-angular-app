import { Component, Input } from '@angular/core';
import { Product } from './shopping/model/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stringList : string[] = ['Freddy','Bonnie','Chica','Foxy'];

  products: Product[] = [
    {name:'odds', description:'101', price: 500},
    {name:'dods', description:'102', price: 100},
    {name:'ddos', description:'103', price: 100},
    {name:'odsd', description:'104', price: 100},
    {name:'sodd', description:'105', price: 100},
  ];

  filteredProduct: Product[] = this.products;

  value = 0 ;
  inputBuffer = 0;

  divWidth = 100;
  divHeight = 100;

  appCounter = 20;

  num = ~~(10/3);

  active: boolean = false; 

  searchProduct(search: string){
    this.filteredProduct = this.products.filter(product=>{
      const productName = product.name.toLocaleLowerCase();
      const searchName = search.toLocaleLowerCase();
      return productName.indexOf(searchName) !== -1
    }
    )
  }

  activateToggle(){
    this.active = !this.active;
  }

  testNumberChange(value: number){
    console.log("from emitter: ",value)
  }

  logText(num : any){
    console.log(num);
  }

  changeWidth(width: number){
    this.divWidth = width;
  }
  changeHeight(height: number){
    this.divHeight = height;
  }

  pushFreddy(){
    this.stringList.push("GoldenFreddy"+(this.stringList.length + 1));
  }
  unshiftFreddy(){
    this.stringList.unshift("GoldenFreddy"+(this.stringList.length + 1));
  }

  removeFreddy(index :number){
    this.stringList.splice(index,1);
  }

  // title = 'homes';
  // animaIndex = ['Freddy', 'Bonnie', 'Chica', 'Foxy'];
  // index = 0;

  // changeName() {
  //   this.index += 1;
  //   if (this.index == this.animaIndex.length) this.index = 0;
  //   console.log(this.index);
  // }


}
