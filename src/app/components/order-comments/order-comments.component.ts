import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-comments',
  templateUrl: './order-comments.component.html',
  styleUrls: ['./order-comments.component.css']
})
export class OrderCommentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  messages = [{
    sendermsg:  'Hello! How can I help you?',
    recievermsg:'We Would not be able to help you in this case.'
  }, {
    sendermsg:  'I am here to assist you with any questions or concerns.',
    recievermsg:'Please let me know what you need help with.'
  }
  ];

}
