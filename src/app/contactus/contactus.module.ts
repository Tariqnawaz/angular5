import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONTACT_ROUTE, ContactusComponent } from './';

@NgModule({
    imports: [
        RouterModule.forChild([ CONTACT_ROUTE ])
    ],
    declarations: [
        ContactusComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ]
})
export class ContactusModule {}