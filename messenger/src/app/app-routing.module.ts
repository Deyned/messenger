import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registrationRoutes } from './pages/registration/registration-routing';
import { authorizationRoutes } from './pages/authorization/authorization-routing';
import { LayoutComponent } from './common/components/layout/layout.component';
import { mainRoutes } from './pages/main/main-routing';

const routes: Routes = [
	...registrationRoutes,
	...authorizationRoutes,
	{ path: '', component: LayoutComponent, children: [...mainRoutes] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
