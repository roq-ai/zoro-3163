interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Admin', 'Owner', 'Content Creator', 'Moderator'],
  tenantName: 'Client',
  applicationName: 'Zoro',
  addOns: ['file', 'chat', 'notifications'],
};
