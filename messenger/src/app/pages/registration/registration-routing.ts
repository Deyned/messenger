import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { notAuthGuard } from 'src/app/common/guards/notAuth.guard';

export const registrationRoutes: Routes = [
	{
		path: 'registration',
		component: RegistrationComponent,
		canActivate: [notAuthGuard],
	},
];
