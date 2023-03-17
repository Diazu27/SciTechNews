import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/Components/navbar/navbar.component';
import { FooterComponent } from './shared/Components/footer/footer.component';
import { HomeComponent } from './Features/home/home.component';
import { MainCardComponent } from './Features/Home/Components/main-card/main-card.component';
import { CheckpostComponent } from './Features/checkpost/checkpost.component';
import { MypostsComponent } from './Features/myposts/myposts.component';
import { LoginComponent } from './Features/login/login.component';
import { PostComponent } from './Features/post/post.component';
import { CardNewComponent } from './Features/Home/Components/card-new/card-new.component';
import { HomeLayoutComponentComponent } from './Features/home-layout-component/home-layout-component.component';
import { LoginLayoutComponentComponent } from './Features/login-layout-component/login-layout-component.component';
import { CommentComponent } from './Features/post/components/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PublishComponent } from './Features/publish/publish.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MainCardComponent,
    CardNewComponent,
    PublishComponent,
    CheckpostComponent,
    MypostsComponent,
    LoginComponent,
    PostComponent,
    HomeLayoutComponentComponent,
    LoginLayoutComponentComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
