export const ROLES = [
  { id: 'web-app', name: 'Web app', parent: null, permission: [] },

  {
    id: 'admin', name: 'Admin', parent: 'web-app',
    permission: [
      'admin-create-account',
      'admin-update-account',
      'admin-remove-account',
      'admin-view-account',
      'admin-create-role',
      'admin-update-role',
      'admin-remove-role',
      'admin-view-role',
      'admin-create-permission',
      'admin-update-permission',
      'admin-remove-permission',
      'admin-view-permission',
      'admin-view-audit'
    ]
  },
  {
    id: 'admin-user', name: 'User', parent: 'admin',
    permission: [
      'admin-create-account',
      'admin-update-account',
      'admin-remove-account',
      'admin-view-account'
    ]
  },
  {
    id: 'admin-role', name: 'Role', parent: 'admin',
    permission: [
      'admin-create-role',
      'admin-update-role',
      'admin-remove-role',
      'admin-view-role'
    ]
  },
  {
    id: 'admin-permission', name: 'Permission', parent: 'admin',
    permission: [
      'admin-create-permission',
      'admin-update-permission',
      'admin-remove-permission',
      'admin-view-permission'
    ]
  },
  {
    id: 'admin-audit', name: 'Audit', parent: 'admin',
    permission: [
      'admin-view-audit'
    ]
  },

  {
    id: 'personnel', name: 'Personnel', parent: 'web-app',
    permission: [
      'personnel-view-persons',
      'personnel-create-person',
      'personnel-update-person',
      'personnel-remove-person',

      'personnel-view-workgroup',
      'personnel-create-workgroup',
      'personnel-update-workgroup',
      'personnel-remove-workgroup',

      'personnel-view-workshift',
      'personnel-create-workshift',
      'personnel-update-workshift',
      'personnel-remove-workshift',

      'personnel-view-class',
      'personnel-create-class',
      'personnel-update-class',
      'personnel-remove-class',

      'personnel-view-property',
      'personnel-create-property',
      'personnel-update-property',
      'personnel-remove-property',

      'personnel-view-availability',
      'personnel-schedule-person',
      'personnel-create-attendance',
      'personnel-view-workgroup-availability',
      'personnel-approve-availability',
      'personnel-schedule-multi-person',
      'personnel-view-workgroup-absent',

      'personnel-view-absent',
      'personnel-approve-absent',
      'personnel-request-absent',
      'personnel-create-multi-absent',

      'personnel-view-person-skills',
      'personnel-remove-person-skill',
      'personnel-update-person-skill',
      'personnel-create-person-skill',

      'personnel-view-person-qualification',
      'personnel-view-ole',
      'personnel-export-payrol',
      'personnel-export-person'

    ]
  },
  {
    id: 'personnel-person', name: 'Person', parent: 'personnelpersonnel',
    permission: [
      'personnel-view-persons',
      'personnel-create-person',
      'personnel-update-person',
      'personnel-remove-person'
    ]
  },
  {
    id: 'personnel-skill', name: 'Skill', parent: 'personnel',
    permission: [
      'personnel-view-person-skills',
      'personnel-remove-person-skill',
      'personnel-update-person-skill',
      'personnel-create-person-skill'
    ]
  },
  {
    id: 'personnel-absent', name: 'Absent', parent: 'personnel',
    permission: [
      'personnel-view-absent',
      'personnel-approve-absent',
      'personnel-request-absent',
      'personnel-create-multi-absent'
    ]
  },
  {
    id: 'personnel-workshift', name: 'Workshift', parent: 'personnel',
    permission: [
      'personnel-view-workshift',
      'personnel-create-workshift',
      'personnel-update-workshift',
      'personnel-remove-workshift'
    ]
  },
  {
    id: 'personnel-workgroup', name: 'Workgroup', parent: 'personnel',
    permission: [
      'personnel-view-workgroup',
      'personnel-create-workgroup',
      'personnel-update-workgroup',
      'personnel-remove-workgroup'
    ]
  },
  {
    id: 'personnel-class', name: 'Class', parent: 'personnel',
    permission: [
      'personnel-view-class',
      'personnel-create-class',
      'personnel-update-class',
      'personnel-remove-class'
    ]
  },
  {
    id: 'personnel-property', name: 'Property', parent: 'personnel',
    permission: [
      'personnel-view-property',
      'personnel-create-property',
      'personnel-update-property',
      'personnel-remove-property'
    ]
  },
  {
    id: 'personnel-availability', name: 'Availability', parent: 'personnel',
    permission: [
      'personnel-view-availability'
    ]
  },
  {
    id: 'personnel-workgroup-availability', name: 'Workgroup Availability', parent: 'personnel',
    permission: [
      'personnel-view-workgroup-availability'
    ]
  },
  {
    id: 'personnel-payroll', name: 'Payroll', parent: 'personnel',
    permission: [
      'personnel-export-payrol'
    ]
  },
  {
    id: 'personnel-ole', name: 'OLE', parent: 'personnel',
    permission: [
      'personnel-view-ole'
    ]
  },
  {
    id: 'personnel-ole-export', name: 'OLE Export', parent: 'personnel',
    permission: [
    ]
  },
  {
    id: 'personnel-qualityfaction', name: 'Qualityfaction', parent: 'personnel',
    permission: [
      'personnel-view-person-qualification'
    ]
  },

  {
    id: 'material', name: 'Material', parent: 'web-app',
    permission: [
      'material-view-material',
      'material-create-material',
      'material-update-material',
      'material-remove-material',

      'material-view-property',
      'material-create-property',
      'material-update-property',
      'material-remove-property',

      'material-view-class',
      'material-create-class',
      'material-update-class',
      'material-remove-class',

      'material-view-testspec',
      'material-create-testspec',
      'material-update-testspec',
      'material-remove-testspec',
      'material-copy-testspec',

      'material-view-lot',
      'material-create-lot',
      'material-update-lot',
      'material-remove-lot'
    ]
  },
  {
    id: 'material-definition', name: 'Definition', parent: 'material',
    permission: [
      'material-view-material',
      'material-create-material',
      'material-update-material',
      'material-remove-material',
    ]
  },
  {
    id: 'material-class', name: 'Class', parent: 'material',
    permission: [
      'material-view-class',
      'material-create-class',
      'material-update-class',
      'material-remove-class'
    ]
  },
  {
    id: 'material-property', name: 'Property', parent: 'material',
    permission: [
      'material-view-property',
      'material-create-property',
      'material-update-property',
      'material-remove-property'
    ]
  },
  {
    id: 'material-test-spec', name: 'Test Spec', parent: 'material',
    permission: [
      'material-view-testspec',
      'material-create-testspec',
      'material-update-testspec',
      'material-remove-testspec',
      'material-copy-testspec'
    ]
  },
  {
    id: 'material-lot', name: 'Lot', parent: 'material',
    permission: [
      'material-view-lot',
      'material-create-lot',
      'material-update-lot',
      'material-remove-lot'
    ]
  },

  {
    id: 'scope', name: 'Scope', parent: 'web-app',
    permission: [
      'scope-view-class',
      'scope-create-class',
      'scope-update-class',
      'scope-remove-class',

      'scope-view-property',
      'scope-create-property',
      'scope-update-property',
      'scope-remove-property',

      'scope-view-scope',
      'scope-create-scope',
      'scope-update-scope',
      'scope-remove-scope',
      'scope-print-qr-code',

      'scope-line-log-book'

    ]
  },
  {
    id: 'scope-scope', name: 'Scope Scope', parent: 'scope',
    permission: [
      'scope-view-scope',
      'scope-create-scope',
      'scope-update-scope',
      'scope-remove-scope',
      'scope-print-qr-code'
    ]
  },
  {
    id: 'scope-class', name: 'Class', parent: 'scope',
    permission: [
      'scope-view-class',
      'scope-create-class',
      'scope-update-class',
      'scope-remove-class'
    ]
  },
  {
    id: 'scope-Property', name: 'Property', parent: 'scope',
    permission: [
      'scope-view-property',
      'scope-create-property',
      'scope-update-property',
      'scope-remove-property'
    ]
  },
  {
    id: 'scope-line-log-book', name: 'Line Log Book', parent: 'scope',
    permission: [
      'scope-line-log-book'
    ]
  },

  {
    id: 'physical-asset', name: 'Physical Asset', parent: 'web-app',
    permission: [
      'asset-view-asset',
      'asset-create-asset',
      'asset-update-asset',
      'asset-remove-asset',

      'asset-view-class',
      'asset-create-class',
      'asset-update-class',
      'asset-remove-class',

      'asset-view-property',
      'asset-create-property',
      'asset-update-property',
      'asset-remove-property',

      'asset-view-testspec',
      'asset-create-testspec',
      'asset-update-testspec',
      'asset-remove-testspec',
      'asset-copy-testspec',

      'asset-view-analysic'

    ]
  },
  {
    id: 'physical-asset-asset', name: 'Asset', parent: 'physical-asset',
    permission: [
      'asset-view-asset',
      'asset-create-asset',
      'asset-update-asset',
      'asset-remove-asset'
    ]
  },
  {
    id: 'physical-asset-class', name: 'Class', parent: 'physical-asset',
    permission: [
      'asset-view-class',
      'asset-create-class',
      'asset-update-class',
      'asset-remove-class'
    ]
  },
  {
    id: 'physical-asset-property', name: 'Property', parent: 'physical-asset',
    permission: [
      'asset-view-property',
      'asset-create-property',
      'asset-update-property',
      'asset-remove-property'
    ]
  },
  {
    id: 'physical-asset-test-spec', name: 'Test Spec', parent: 'physical-asset',
    permission: [
      'asset-view-testspec',
      'asset-create-testspec',
      'asset-update-testspec',
      'asset-remove-testspec',
      'asset-copy-testspec'
    ]
  },
  {
    id: 'physical-asset-analysis', name: 'Analysis', parent: 'physical-asset',
    permission: [
      'asset-view-analysic'
    ]
  },

  {
    id: 'definition', name: 'Definition', parent: '',
    permission: [
      'definition-view-work-definition',
      'definition-create-work-definition',
      'definition-update-work-definition',
      'definition-remove-work-definition',

      'definition-view-work-master',
      'definition-create-work-master',
      'definition-update-work-master',
      'definition-remove-work-master',
      'definition-copy-work-master',
      'definition-copy-asset-spec',

      'definition-view-history'

    ]
  },
  {
    id: 'definition-work-definition', name: 'Work List', parent: 'definition',
    permission: [
      'definition-view-work-definition',
      'definition-create-work-definition',
      'definition-update-work-definition',
      'definition-remove-work-definition'
    ]
  },
  {
    id: 'definition-work-master', name: 'Work MasTer', parent: 'definition',
    permission: [

      'definition-view-work-master',
      'definition-create-work-master',
      'definition-update-work-master',
      'definition-remove-work-master',
      'definition-copy-work-master',
      'definition-copy-asset-spec'
    ]
  },

  {
    id: 'quality', name: 'Quality', parent: 'web-app',
    permission: [
      'quality-product',
      'quality-find-product',
      'quality-process',

      'quality-spc',
      'quality-sqc',
      'quality-pareto',
      'quality-pareto-by-job',
      'quality-paynter'
    ]
  },
  {
    id: 'quality-pareto-analysis', name: 'Pareto Analysis', parent: 'quality',
    permission: [

    ]
  },

  {
    id: 'quality-paynter-chart', name: 'Paynter Chart', parent: 'quality',
    permission: [

    ]
  },
  {
    id: 'quality-process-analysis', name: 'Process Analysis', parent: 'quality',
    permission: [

    ]
  },
  {
    id: 'quality-product-analysis', name: 'Product Analysis', parent: 'quality',
    permission: [
      'quality-product',
      'quality-find-product',
      'quality-process',
    ]
  },
  {
    id: 'quality-spc', name: 'SPC', parent: 'quality',
    permission: [
      'quality-spc',
      'quality-sqc'
    ]
  },

  {
    id: 'production', name: 'Production', parent: 'web-app',
    permission: [
      'production-view-workunit-gantt',
      'production-create-view-workunit-gantt',
      'production-update-view-workunit-gantt',
      'production-remove-view-workunit-gantt',
      'production-view-personnel-gantt',

      'production-view-request',
      'production-create-request',
      'production-update-request',
      'production-remove-request',

      'production-view-progress',
      'production-view-counting',
      'production-view-vsm'
    ]
  },
  {
    id: 'production-couting', name: 'Counting', parent: 'production',
    permission: [
      'production-view-counting'
    ]
  },
  {
    id: 'production-request', name: 'Request', parent: 'production',
    permission: [

      'production-view-request',
      'production-create-request',
      'production-update-request',
      'production-remove-request'
    ]
  },
  {
    id: 'production-progress', name: 'Progress', parent: 'production',
    permission: [
      'production-view-progress'
    ]
  },
  {
    id: 'production-workunit-gantt', name: 'Workunit Gantt', parent: 'production',
    permission: [
      'production-view-workunit-gantt',
      'production-create-view-workunit-gantt',
      'production-update-view-workunit-gantt',
      'production-remove-view-workunit-gantt',
    ]
  },
  {
    id: 'production-personnel-gantt', name: 'Personnel Gantt', parent: 'production',
    permission: [
      'production-view-personnel-gantt'
    ]
  },
  {
    id: 'production-vsm', name: 'VSM', parent: 'production',
    permission: [
      'production-view-vsm'
    ]
  },

  {
    id: 'traceability', name: 'Traceability', parent: 'web-app',
    permission: [
      'traceability-asset',
      'traceability-material',
      'traceability-personnel',
    ]
  },
  {
    id: 'traceability-personnel', name: 'Personnel', parent: 'traceability',
    permission: [
      'traceability-personnel'
    ]
  },
  {
    id: 'traceability-material', name: 'Material', parent: 'traceability',
    permission: [
      'traceability-material'
    ]
  },
  {
    id: 'traceability-physical-asset', name: 'Physical Asset', parent: 'traceability',
    permission: [
      'traceability-asset'
    ]
  },

  {
    id: 'zenbee-tools', name: 'Zenbee Tools', parent: 'web-app',
    permission: [

    ]
  },
  {
    id: 'zenbee-tools-device', name: 'Device', parent: 'zenbee-tools',
    permission: [

    ]
  },
  {
    id: 'zenbee-tools-debug', name: 'Debug', parent: 'zenbee-tools',
    permission: [

    ]
  },
  {
    id: 'zenbee-tools-file', name: 'File', parent: 'zenbee-tools',
    permission: [

    ]
  },
  {
    id: 'zenbee-tools-asset', name: 'Asset', parent: 'zenbee-tools',
    permission: [

    ]
  },

  {
    id: 'mobile-app', name: 'Mobile app', parent: null,
    permission: [

    ]
  },

  {
    id: 'traceability', name: 'Traceability', parent: 'mobile-app',
    permission: [

    ]
  },
  {
    id: 'traceability-personnel', name: 'Personnel', parent: 'traceability',
    permission: [

    ]
  },
  {
    id: 'traceability-material', name: 'Material', parent: 'traceability',
    permission: [

    ]
  },
  {
    id: 'traceability-physical-asset', name: 'Physical Asset', parent: 'traceability',
    permission: [

    ]
  },

  {
    id: 'zenbee-tools', name: 'Zenbee Tools', parent: 'mobile-app',
    permission: [

    ]
  },
  {
    id: 'zenbee-tools-device', name: 'Device', parent: 'zenbee-tools',
    permission: [

    ]
  },
  {
    id: 'zenbee-tools-debug', name: 'Debug', parent: 'zenbee-tools',
    permission: [

    ]
  },
  {
    id: 'zenbee-tools-file', name: 'File', parent: 'zenbee-tools',
    permission: [

    ]
  },
  {
    id: 'zenbee-tools-asset', name: 'Asset', parent: 'zenbee-tools',
    permission: [

    ]
  },
];
