import { Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { notAuthGuard } from 'src/app/common/guards/notAuth.guard';

export const authorizationRoutes: Routes = [
	{
		path: 'authorization',
		component: AuthorizationComponent,
		canActivate: [notAuthGuard],
	},
];
