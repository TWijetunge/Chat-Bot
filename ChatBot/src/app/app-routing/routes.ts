import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { ProcessDesignerComponent } from "../process-designer/process-designer.component";

export const routes : Routes=[
    {path:'',redirectTo:'/home', pathMatch:'full'}, //default path is 'Home'.....
    {path : 'home', component:HomeComponent},
    {path: 'processDesigner', component: ProcessDesignerComponent}
]
//redirectTo:'/home',