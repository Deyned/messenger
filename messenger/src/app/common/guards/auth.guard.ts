import { inject } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';

export const authGuard = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot,
): UrlTree | boolean => {
	return inject(Router).parseUrl('/authorization');
};
