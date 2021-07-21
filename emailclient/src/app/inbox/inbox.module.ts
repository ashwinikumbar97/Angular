import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';


@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailShowComponent,
    EmailInboxComponent,
    PlaceholderComponent,
    NotFoundComponent,
    EmailFormComponent,
    EmailReplyComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class InboxModule { }
