
import { CanActivateFn } from '@angular/router';
import { keycloakService } from '../services/keycloak.service';

export const roleGuard = (role: string): CanActivateFn => {
  return () => {
    return keycloakService.isInRole(role);
  };
};