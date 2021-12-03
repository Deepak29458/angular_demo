import { Routes } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { HomepageComponent } from "../homepage/homepage.component";
import { DetailsComponent } from "../template-pages/details/details.component";
import { ProductCategoryComponent } from "../template-pages/product-category/product-category.component";


export const routes: Routes = [
    {
        path:"",
        loadChildren: ()=>import('src/app/dashboard-module/dashboard.module').then(m=>m.DashboardModule)
    },
    {
        path:"HomePage",
        component:HomepageComponent,
    },
    {
        path: "product-category",
        component:ProductCategoryComponent,
    },
    {
        path: "product-details",
        component:DetailsComponent,
    },
    {
        path:"header",
        component:HeaderComponent,
    },
    {
        path:"footer",
        component:FooterComponent,
    }
];