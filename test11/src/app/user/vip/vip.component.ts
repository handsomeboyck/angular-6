import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit {
  tabs = [
    {
      active: true,
      name  : 'Tab 1',
      icon  : 'anticon anticon-apple'
    },
    {
      active: false,
      name  : 'Tab 2',
      icon  : 'anticon anticon-android'
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}
