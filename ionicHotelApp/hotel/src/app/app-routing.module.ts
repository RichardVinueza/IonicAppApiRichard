import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then( m => m.RoomsPageModule)},
  { path: 'rooms', loadChildren: './rooms/rooms.module#RoomsPageModule' },
  { path: 'oneroom', loadChildren: './oneroom/oneroom.module#OneroomPageModule' },
  { path: 'postroom', loadChildren: './postroom/postroom.module#PostroomPageModule' },
  { path: 'updateroom', loadChildren: './updateroom/updateroom.module#UpdateroomPageModule' },
  // { path: 'rooms', loadChildren: '../rooms.page' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
