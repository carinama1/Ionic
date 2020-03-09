import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  title ='Discover'

  onChangePages = (name) =>{
    this.title=name
  }

  constructor() { }

  ngOnInit() {
  }

}
