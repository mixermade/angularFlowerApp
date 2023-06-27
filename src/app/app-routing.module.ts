import { NgModule } from '@angular/core';
import { FlowerListMainComponent } from './flower-list-main/flower-list-main.component';
import { FlowerPageComponent } from './flower-page/flower-page.component';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';

const routes: Routes = [{ path: '', component: FlowerListMainComponent },
{ path: 'flower-page/:name', component: FlowerPageComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding()),]
})
export class AppRoutingModule {
}
