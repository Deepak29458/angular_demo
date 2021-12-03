import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './main-routes/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductCategoryComponent } from './template-pages/product-category/product-category.component';
import { DetailsComponent } from './template-pages/details/details.component';
import { DashboardModule } from './dashboard-module/dashboard.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductCategoryComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
