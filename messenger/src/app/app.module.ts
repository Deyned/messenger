import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegistrationModule } from './pages/registration/registration.module';
import { AuthorizationModule } from './pages/authorization/authorization.module';

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
