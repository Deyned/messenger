import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from './pages/registration/registration.module';
import { AuthorizationModule } from './pages/authorization/authorization.module';
import { LayoutComponent } from './common/components/layout/layout.component';

@NgModule({
	declarations: [
		AppComponent,
		// ------------------------
		LayoutComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RegistrationModule,
		AuthorizationModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
