import { Component } from '@angular/core';
import { keycloakService } from './services/keycloak.service';

@Component({
  selector: 'app-logout',
  template: `<button (click)="logout()">Logout</button>`,
  standalone: true
})
export class LogoutComponent {
  logout() {
    keycloakService.logout();
  }
}
