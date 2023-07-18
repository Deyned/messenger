import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';

export const notAuthGuard = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot,
): boolean | UrlTree => {
	return true;
};

@Injectable()
export class NotAuthGuard implements CanActivate, CanActivateChild {
	constructor(private readonly _router: Router) {}

	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): boolean | UrlTree {
		return true;
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): boolean | UrlTree {
		return true;
	}
}
