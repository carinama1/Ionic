import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-discover-detail',
  templateUrl: './discover-detail.page.html',
  styleUrls: ['./discover-detail.page.scss'],
})
export class DiscoverDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) {}

  onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/discover');
  }


  ngOnInit() {
  }

}
