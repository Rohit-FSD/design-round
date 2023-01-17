import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  filteredCustomers: { name: string; place: string; contact: string; img: string; }[];

  constructor() { }

  ngOnInit(): void {
    this.filteredCustomers = this.customers;
  }

  searchText: string;

  search() {
    this.filteredCustomers = this.customers.filter(customer => 
      customer.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      customer.contact.toString().includes(this.searchText) ||
      customer.place.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  customers=[
    {
      name:'Virat Malhotra',
      place:'Kolkata',
      contact:'99999999',
      img:'/assets/images/abstract-user-flat-4.svg'
    },
    {
      name:'Sham Malhotra',
      place:'Kolkata',
      contact:'89999999',
      img:'/assets/images/abstract-user-flat-4.svg'
    },
    {
      name:'Brett Malhotra',
      place:'Kolkata',
      contact:'79999999',
      img:'/assets/images/abstract-user-flat-4.svg'
    },
    {
      name:'Raj Malhotra',
      place:'Kolkata',
      contact:'69999999',
      img:'/assets/images/abstract-user-flat-4.svg'
    },
  ]

}
