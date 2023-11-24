import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage {

  constructor(private router: Router, private navCtrl: NavController) {}

  navigateToCategory(page: string) {
    this.router.navigate(['category']);
    this.navCtrl.navigateRoot(page);
  }
  navigateToHome(page: string) {
    this.router.navigate(['home']);
    this.navCtrl.navigateRoot(page);
  }
  navigateToProf(page: string) {
    this.router.navigate(['profile']);
    this.navCtrl.navigateRoot(page);
  }
}
