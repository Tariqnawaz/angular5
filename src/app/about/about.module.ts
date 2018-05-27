import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ABOUT_ROUTE, AboutComponent } from './';

@NgModule({
    imports: [
        RouterModule.forChild([ ABOUT_ROUTE ])
    ],
    declarations: [
        AboutComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ]
})
export class AboutModule {}