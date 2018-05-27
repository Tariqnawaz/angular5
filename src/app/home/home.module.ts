import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_ROUTE, HomeComponent } from './';

@NgModule({
    imports: [
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ]
})
export class HomeModule {}