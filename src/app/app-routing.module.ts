import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'recipes',
    children: [
      { path: '', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule) },
      { path: ':recipeId', loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule) }
    ]
  },
  {
    path: 'places',
    children: [
      {path: '', loadChildren: () => import('./places/places.module').then(m => m.PlacesPageModule)}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
