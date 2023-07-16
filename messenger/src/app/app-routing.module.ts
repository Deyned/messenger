import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { registrationRoutes } from './pages/registration/registration-routing';
import { authorizationRoutes } from './pages/authorization/authorization-routing';

const routes: Routes = [
	...registrationRoutes,
	...authorizationRoutes,
	{ path: '', component: LayoutComponent, children: [] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
