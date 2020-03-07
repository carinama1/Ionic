import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model'
import { RecipesServices } from './recipeService'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    // {
    //   id: 'r1',
    //   title: 'Schnitzels',
    //   imageUrl:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
    //   ingredients: ['French Fries', 'Meat', 'Salad']
    // },
    // {
    //   id: 'r2',
    //   title: 'Spaghetti',
    //   imageUrl:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    //   ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    // }
  ];


  constructor(private recipeService: RecipesServices) { }

  ionViewWillEnter() {
    this.recipes = this.recipeService.recipes
    console.log('Will Enter')
  }

  ionViewDidEnter() {
    console.log('Did Enter')
  }

  ionViewWillLeave() {
    console.log('Will Leave')
  }

  ionViewDidLeave() {
    console.log('Did Leave')
  }

  ngOnDestroy(): void {

    console.log("ngOnDestroy")
  }
  ngOnInit() {
    // console.log(recipeServices.recipes)
    // console.log(this.recipeService.recipes)
  }

}
