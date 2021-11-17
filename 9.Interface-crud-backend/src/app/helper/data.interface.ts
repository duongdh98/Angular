export interface Permission {
  id: string;
  name: string;
  component: string;
}

export interface RoleMap {
  [id: string] : {
    name: string;
    parent: string;
  }
}

export interface Roles {
  id: string;
  name: string;
  parent?: string;
  permission: [];
}

export interface RoleNode {
  id: string;
  name: string;
  parent?: string;
  childrent?: RoleNode[];
}