import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'accuracyAssignment';


  public data: any = [
    {
      floor: '1',
      room_type: 'Single Bed Room',
      room_no: '11',
      product_price: '2000',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '1',
      room_type: 'Single Bed Room',
      room_no: '12',
      product_price: '2000',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '1',
      room_type: 'Double Bed Room',
      room_no: '13',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '1',
      room_type: 'Double Bed Room',
      room_no: '14',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '1',
      room_type: 'Double Bed Room',
      room_no: '15',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '1',
      room_type: 'Double Bed Room',
      room_no: '16',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '2',
      room_type: 'Single Bed Room',
      room_no: '21',
      product_price: '2000',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '2',
      room_type: 'Single Bed Room',
      room_no: '22',
      product_price: '2000',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '2',
      room_type: 'Double Bed Room',
      room_no: '23',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '2',
      room_type: 'Double Bed Room',
      room_no: '24',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '3',
      room_type: 'Single Bed Room',
      room_no: '31',
      product_price: '2000',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '3',
      room_type: 'Single Bed Room',
      room_no: '32',
      product_price: '2000',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '3',
      room_type: 'Double Bed Room',
      room_no: '33',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '3',
      room_type: 'Double Bed Room',
      room_no: '34',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '4',
      room_type: 'Single Bed Room',
      room_no: '41',
      product_price: '2000',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '4',
      room_type: 'Single Bed Room',
      room_no: '42',
      product_price: '2000',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '4',
      room_type: 'Double Bed Room',
      room_no: '43',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '4',
      room_type: 'Double Bed Room',
      room_no: '44',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '4',
      room_type: 'Double Bed Room',
      room_no: '45',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '4',
      room_type: 'Double Bed Room',
      room_no: '46',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '4',
      room_type: 'Double Bed Room',
      room_no: '47',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '4',
      room_type: 'Double Bed Room',
      room_no: '48',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '4',
      room_type: 'Double Bed Room',
      room_no: '49',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    },
    {
      floor: '5',
      room_type: 'Double Bed Room',
      room_no: '51',
      product_price: '2500',
      status: 'Available',
      product_image: '../assets/images/image.jpg',
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

  getRoomsOfSameFloor(floorNumber) {
    return this.data.filter(i => i.floor === floorNumber);
  }

  getTotalRooms(floorNumber) {
    const count = this.data.reduce((acc, cur) => cur.floor === floorNumber ? ++acc : acc, 0);
    return count;

  }

  isValid(index, eachEntry) {
    return (index % this.getTotalRooms(eachEntry.floor)) === 0 ? true : false;
  }

}
