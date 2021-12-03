import { Routes } from "@angular/router";
import { AccountMangerComponent } from "../dashboard-content/account-manger/account-manger.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

export const dashboardRoutes: Routes = [
    {
        path:"dashboard",
        component:DashboardComponent,
    },
    {
        path:"dashboard/accounts",
        component:AccountMangerComponent,
    }
];