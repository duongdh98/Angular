export interface Detail {
  type: string;
  idName: String;
  icon: string;
  name: string;
  number: any;
}

export const details: Detail[] = [

  {type: 'menu',        idName: 'inbox',      icon: 'inbox',              name: 'Inbox',             number: ''},
  {type: 'menu',        idName: 'starred',    icon: 'star',               name: 'Starred',           number: ''},
  {type: 'menu',        idName: 'snoozed',    icon: 'timelapse',          name: 'Snoozed',           number: ''},
  {type: 'menu',        idName: 'sent',       icon: 'send',               name: 'Sent',              number: ''},
  {type: 'menu',        idName: 'draft',      icon: 'drafts',             name: 'Drafts',            number: ''},

  {type: 'more-click',  idName: 'more',       icon: 'expand_more',        name: 'More',              number: ''},

  {type: 'less-click',  idName: 'less',       icon: 'keyboard_arrow_up',  name: 'Less',              number: ''},

  {type: 'more',        idName: 'important',  icon: 'label_important',    name: 'Important',         number: ''},
  {type: 'more',        idName: 'chats',      icon: 'chat',               name: 'Chats',             number: ''},
  {type: 'more',        idName: 'schedule',   icon: 'schedule',           name: 'Scheduled',         number: ''},
  {type: 'more',        idName: 'mail',       icon: 'mail',               name: 'All Mail',          number: ''},
  {type: 'more',        idName: 'spam',       icon: 'error',              name: 'Spam',              number: ''},
  {type: 'more',        idName: 'trash',      icon: 'restore_from_trash', name: 'Trash',             number: ''},
  {type: 'more',        idName: 'categorie',  icon: 'label',              name: 'Categories',        number: ''},
  {type: 'more',        idName: 'manage',     icon: 'settings',           name: 'Manage labels',     number: ''},
  {type: 'more',        idName: 'add',        icon: 'add',                name: 'Create new lables', number: ''},

  {type: 'categories',  idName: 'social',     icon: 'people',             name: 'Social',            number: ''},
  {type: 'categories',  idName: 'updates',    icon: 'error',              name: 'Updates',           number: ''},
  {type: 'categories',  idName: 'forum',      icon: 'forum',              name: 'Forums',            number: ''},
  {type: 'categories',  idName: 'promations', icon: 'loyalty',            name: 'Promations',        number: ''},

  {type: 'meet',        idName: 'new-meet',   icon: 'videocam',           name: 'New meeting',       number: ''},
  {type: 'meet',        idName: 'join-meet',  icon: 'keyboard',           name: 'Join a meeting',    number: ''},

]