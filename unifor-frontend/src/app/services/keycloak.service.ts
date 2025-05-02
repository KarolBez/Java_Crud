
import Keycloak, { KeycloakInstance } from 'keycloak-js';

interface KeycloakTokenParsed {
  preferred_username?: string;
  realm_access?: { roles: string[] };
}

export class KeycloakService {
  keycloak: any;

  init(): Promise<boolean> {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'unifor',
      clientId: 'unifor-frontend',
    });

    return this.keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
    });
  }

  getToken(): string | undefined {
    return this.keycloak?.token;
  }

  logout(): void {
    this.keycloak?.logout();
  }

  getUserRoles(): string[] {
    const tokenParsed = this.keycloak.tokenParsed as KeycloakTokenParsed;
    return tokenParsed?.realm_access?.roles || [];
  }

  isInRole(role: string): boolean {
    return this.getUserRoles().includes(role);
  }

  getUsername(): string {
    const tokenParsed = this.keycloak.tokenParsed as KeycloakTokenParsed;
    return tokenParsed?.preferred_username || '';
  }
}

export const keycloakService = new KeycloakService();
