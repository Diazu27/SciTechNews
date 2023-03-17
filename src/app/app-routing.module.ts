import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckpostComponent } from './Features/checkpost/checkpost.component';
import { HomeLayoutComponentComponent } from './Features/home-layout-component/home-layout-component.component';
import { HomeComponent } from './Features/home/home.component';
import { LoginLayoutComponentComponent } from './Features/login-layout-component/login-layout-component.component';
import { LoginComponent } from './Features/login/login.component';
import { MypostsComponent } from './Features/myposts/myposts.component';
import { PostComponent } from './Features/post/post.component';
import { PublishComponent } from './Features/publish/publish.component';

const routes: Routes = [
  {
    path: 'login', component: LoginLayoutComponentComponent, data: {title: 'First Component'},
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  { path: '', component: HomeLayoutComponentComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'post/:id', component: PostComponent },
      { path: 'publish', component: PublishComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
