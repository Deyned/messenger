import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { authGuard } from 'src/app/common/guards/auth.guard';

export const mainRoutes: Routes = [
	{ path: '', component: PageComponent, canActivate: [authGuard] },
];
