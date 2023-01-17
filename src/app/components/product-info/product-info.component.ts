import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  cardClass: string;
  filteredProducts: { name: string; image: string; id: string; description: string; model: string; status: string; price: string; available: string; targetprice: string; sellingprice: string; quan:string }[];

  constructor() { }

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  searchText: string;

  search() {
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.id.toString().includes(this.searchText) ||
      product.model.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  products = [
    {
    name: 'resister',
    image: '/assets/images/resistor-svgrepo-com.svg',
    id: '55546789',
    description:'0 ohm (ORO) 5% 5MD resistor 0805 (reel of 5000)',
    model:'BMC- 101',
    status:'Required TS Assistance',
    price:'Rs. 568.60',
    available:'670',
    targetprice: '8529',
    sellingprice: '8529',
    quan:'20'
  },
  {
    name: 'resister',
    image: '/assets/images/resistor-svgrepo-com.svg',
    id: '45546789',
    description:'0 ohm (ORO) 5% 5MD resistor 0805 (reel of 5000)',
    model:'BMC- 121',
    status:'Pricing Done',
    price:'Rs. 568.60',
    available:'670',
    targetprice: '8529',
    sellingprice: '8529',
    quan:'20'
  },{
    name: 'resister',
    image: '/assets/images/resistor-svgrepo-com.svg',
    id: '35546789',
    description:'0 ohm (ORO) 5% 5MD resistor 0805 (reel of 5000)',
    model:'BMC- 111',
    status:'Required TS Assistance',
    price:'Rs. 568.60',
    available:'670',
    targetprice: '8529',
    sellingprice: '8529',
    quan:'20'
  },
]

  onCheckboxChange(checked: boolean) {
    if(checked) {
      this.cardClass = 'glow-effect'
    } else {
      this.cardClass = ''
    }
  }

}
