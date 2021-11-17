// Data roles ...
var roles = [
  { id: "web-app", name: "Web app", parent: null, permission : [] },
  {
    id: "admin", name: "Admin", parent: "web-app",
    permission: [
      "admin-create-account",
      "admin-update-account",
      "admin-remove-account",
      "admin-view-account",
      "admin-create-role",
      "admin-update-role",
      "admin-remove-role",
      "admin-view-role",
      "admin-create-permission",
      "admin-update-permission",
      "admin-remove-permission",
      "admin-view-permission",
      "admin-view-audit"
    ]
  },
  {
    id: "admin-user", name: "User", parent: "admin",
    permission: [
      "admin-create-account",
      "admin-update-account",
      "admin-remove-account",
      "admin-view-account"
    ]
  },
  {
    id: "admin-role", name: "Role", parent: "admin",
    permission: [
      "admin-create-role",
      "admin-update-role",
      "admin-remove-role",
      "admin-view-role"
    ]
  },
  {
    id: "admin-permission", name: "Permission", parent: "admin",
    permission: [
      "admin-create-permission",
      "admin-update-permission",
      "admin-remove-permission",
      "admin-view-permission"
    ]
  },
  {
    id: "admin-audit", name: "Audit", parent: "admin",
    permission: [
      "admin-view-audit"
    ]
  },

  {
    id: "personnel", name: "Personnel", parent: "web-app",
    permission: [
      "personnel-view-persons",
      "personnel-create-person",
      "personnel-update-person",
      "personnel-remove-person",

      "personnel-view-workgroup",
      "personnel-create-workgroup",
      "personnel-update-workgroup",
      "personnel-remove-workgroup",

      "personnel-view-workshift",
      "personnel-create-workshift",
      "personnel-update-workshift",
      "personnel-remove-workshift",

      "personnel-view-class",
      "personnel-create-class",
      "personnel-update-class",
      "personnel-remove-class",

      "personnel-view-property",
      "personnel-create-property",
      "personnel-update-property",
      "personnel-remove-property",

      "personnel-view-availability",
      "personnel-schedule-person",
      "personnel-create-attendance",
      "personnel-view-workgroup-availability",
      "personnel-approve-availability",
      "personnel-schedule-multi-person",
      "personnel-view-workgroup-absent",

      "personnel-view-absent",
      "personnel-approve-absent",
      "personnel-request-absent",
      "personnel-create-multi-absent",

      "personnel-view-person-skills",
      "personnel-remove-person-skill",
      "personnel-update-person-skill",
      "personnel-create-person-skill",

      "personnel-view-person-qualification",
      "personnel-view-ole",
      "personnel-export-payrol",
      "personnel-export-person"

    ]
  },
  {
    id: "personnel-person", name: "Person", parent: "personnelpersonnel",
    permission: [
      "personnel-view-persons",
      "personnel-create-person",
      "personnel-update-person",
      "personnel-remove-person"
    ]
  },
  {
    id: "personnel-skill", name: "Skill", parent: "personnel",
    permission: [
      "personnel-view-person-skills",
      "personnel-remove-person-skill",
      "personnel-update-person-skill",
      "personnel-create-person-skill"
    ]
  },
  {
    id: "personnel-absent", name: "Absent", parent: "personnel",
    permission: [
      "personnel-view-absent",
      "personnel-approve-absent",
      "personnel-request-absent",
      "personnel-create-multi-absent"
    ]
  },
  {
    id: "personnel-workshift", name: "Workshift", parent: "personnel",
    permission: [
      "personnel-view-workshift",
      "personnel-create-workshift",
      "personnel-update-workshift",
      "personnel-remove-workshift"
    ]
  },
  {
    id: "personnel-workgroup", name: "Workgroup", parent: "personnel",
    permission: [
      "personnel-view-workgroup",
      "personnel-create-workgroup",
      "personnel-update-workgroup",
      "personnel-remove-workgroup"
    ]
  },
  {
    id: "personnel-class", name: "Class", parent: "personnel",
    permission: [
      "personnel-view-class",
      "personnel-create-class",
      "personnel-update-class",
      "personnel-remove-class"
    ]
  },
  {
    id: "personnel-property", name: "Property", parent: "personnel",
    permission: [
      "personnel-view-property",
      "personnel-create-property",
      "personnel-update-property",
      "personnel-remove-property"
    ]
  },
  {
    id: "personnel-availability", name: "Availability", parent: "personnel",
    permission: [
      "personnel-view-availability"
    ]
  },
  {
    id: "personnel-workgroup-availability", name: "Workgroup Availability", parent: "personnel",
    permission: [
      "personnel-view-workgroup-availability"
    ]
  },
  {
    id: "personnel-payroll", name: "Payroll", parent: "personnel",
    permission: [
      "personnel-export-payrol"
    ]
  },
  {
    id: "personnel-ole", name: "OLE", parent: "personnel",
    permission: [
      "personnel-view-ole"
    ]
  },
  {
    id: "personnel-ole-export", name: "OLE Export", parent: "personnel",
    permission: [
    ]
  },
  {
    id: "personnel-qualityfaction", name: "Qualityfaction", parent: "personnel",
    permission: [
      "personnel-view-person-qualification"
    ]
  },

  {
    id: "material", name: "Material", parent: "web-app",
    permission: [
      "material-view-material",
      "material-create-material",
      "material-update-material",
      "material-remove-material",

      "material-view-property",
      "material-create-property",
      "material-update-property",
      "material-remove-property",

      "material-view-class",
      "material-create-class",
      "material-update-class",
      "material-remove-class",

      "material-view-testspec",
      "material-create-testspec",
      "material-update-testspec",
      "material-remove-testspec",
      "material-copy-testspec",

      "material-view-lot",
      "material-create-lot",
      "material-update-lot",
      "material-remove-lot"
    ]
  },
  {
    id: "material-definition", name: "Definition", parent: "material",
    permission: [
      "material-view-material",
      "material-create-material",
      "material-update-material",
      "material-remove-material",
    ]
  },
  {
    id: "material-class", name: "Class", parent: "material",
    permission: [
      "material-view-class",
      "material-create-class",
      "material-update-class",
      "material-remove-class"
    ]
  },
  {
    id: "material-property", name: "Property", parent: "material",
    permission: [
      "material-view-property",
      "material-create-property",
      "material-update-property",
      "material-remove-property"
    ]
  },
  {
    id: "material-test-spec", name: "Test Spec", parent: "material",
    permission: [
      "material-view-testspec",
      "material-create-testspec",
      "material-update-testspec",
      "material-remove-testspec",
      "material-copy-testspec"
    ]
  },
  {
    id: "material-lot", name: "Lot", parent: "material",
    permission: [
      "material-view-lot",
      "material-create-lot",
      "material-update-lot",
      "material-remove-lot"
    ]
  },

  {
    id: "scope", name: "Scope", parent: "web-app",
    permission: [
      "scope-view-class",
      "scope-create-class",
      "scope-update-class",
      "scope-remove-class",

      "scope-view-property",
      "scope-create-property",
      "scope-update-property",
      "scope-remove-property",

      "scope-view-scope",
      "scope-create-scope",
      "scope-update-scope",
      "scope-remove-scope",
      "scope-print-qr-code",

      "scope-line-log-book"

    ]
  },
  {
    id: "scope-scope", name: "Scope Scope", parent: "scope",
    permission: [
      "scope-view-scope",
      "scope-create-scope",
      "scope-update-scope",
      "scope-remove-scope",
      "scope-print-qr-code"
    ]
  },
  {
    id: "scope-class", name: "Class", parent: "scope",
    permission: [
      "scope-view-class",
      "scope-create-class",
      "scope-update-class",
      "scope-remove-class"
    ]
  },
  {
    id: "scope-Property", name: "Property", parent: "scope",
    permission: [
      "scope-view-property",
      "scope-create-property",
      "scope-update-property",
      "scope-remove-property"
    ]
  },
  {
    id: "scope-line-log-book", name: "Line Log Book", parent: "scope",
    permission: [
      "scope-line-log-book"
    ]
  },

  {
    id: "physical-asset", name: "Physical Asset", parent: "web-app",
    permission: [
      "asset-view-asset",
      "asset-create-asset",
      "asset-update-asset",
      "asset-remove-asset",

      "asset-view-class",
      "asset-create-class",
      "asset-update-class",
      "asset-remove-class",

      "asset-view-property",
      "asset-create-property",
      "asset-update-property",
      "asset-remove-property",

      "asset-view-testspec",
      "asset-create-testspec",
      "asset-update-testspec",
      "asset-remove-testspec",
      "asset-copy-testspec",

      "asset-view-analysic"

    ]
  },
  {
    id: "physical-asset-asset", name: "Asset", parent: "physical-asset",
    permission: [
      "asset-view-asset",
      "asset-create-asset",
      "asset-update-asset",
      "asset-remove-asset"
    ]
  },
  {
    id: "physical-asset-class", name: "Class", parent: "physical-asset",
    permission: [
      "asset-view-class",
      "asset-create-class",
      "asset-update-class",
      "asset-remove-class"
    ]
  },
  {
    id: "physical-asset-property", name: "Property", parent: "physical-asset",
    permission: [
      "asset-view-property",
      "asset-create-property",
      "asset-update-property",
      "asset-remove-property"
    ]
  },
  {
    id: "physical-asset-test-spec", name: "Test Spec", parent: "physical-asset",
    permission: [
      "asset-view-testspec",
      "asset-create-testspec",
      "asset-update-testspec",
      "asset-remove-testspec",
      "asset-copy-testspec"
    ]
  },
  {
    id: "physical-asset-analysis", name: "Analysis", parent: "physical-asset",
    permission: [
      "asset-view-analysic"
    ]
  },

  {
    id: "definition", name: "Definition", parent: "",
    permission: [
      "definition-view-work-definition",
      "definition-create-work-definition",
      "definition-update-work-definition",
      "definition-remove-work-definition",

      "definition-view-work-master",
      "definition-create-work-master",
      "definition-update-work-master",
      "definition-remove-work-master",
      "definition-copy-work-master",
      "definition-copy-asset-spec",

      "definition-view-history"

    ]
  },
  {
    id: "definition-work-definition", name: "Work List", parent: "definition",
    permission: [
      "definition-view-work-definition",
      "definition-create-work-definition",
      "definition-update-work-definition",
      "definition-remove-work-definition"
    ]
  },
  {
    id: "definition-work-master", name: "Work MasTer", parent: "definition",
    permission: [

      "definition-view-work-master",
      "definition-create-work-master",
      "definition-update-work-master",
      "definition-remove-work-master",
      "definition-copy-work-master",
      "definition-copy-asset-spec"
    ]
  },

  {
    id: "quality", name: "Quality", parent: "web-app",
    permission: [
      "quality-product",
      "quality-find-product",
      "quality-process",

      "quality-spc",
      "quality-sqc",
      "quality-pareto",
      "quality-pareto-by-job",
      "quality-paynter"
    ]
  },
  {
    id: "quality-pareto-analysis", name: "Pareto Analysis", parent: "quality",
    permission: [

    ]
  },

  {
    id: "quality-paynter-chart", name: "Paynter Chart", parent: "quality",
    permission: [

    ]
  },
  {
    id: "quality-process-analysis", name: "Process Analysis", parent: "quality",
    permission: [

    ]
  },
  {
    id: "quality-product-analysis", name: "Product Analysis", parent: "quality",
    permission: [
      "quality-product",
      "quality-find-product",
      "quality-process",
    ]
  },
  {
    id: "quality-spc", name: "SPC", parent: "quality",
    permission: [
      "quality-spc",
      "quality-sqc"
    ]
  },

  {
    id: "production", name: "Production", parent: "web-app",
    permission: [
      "production-view-workunit-gantt",
      "production-create-view-workunit-gantt",
      "production-update-view-workunit-gantt",
      "production-remove-view-workunit-gantt",
      "production-view-personnel-gantt",

      "production-view-request",
      "production-create-request",
      "production-update-request",
      "production-remove-request",

      "production-view-progress",
      "production-view-counting",
      "production-view-vsm"
    ]
  },
  {
    id: "production-couting", name: "Counting", parent: "production",
    permission: [
      "production-view-counting"
    ]
  },
  {
    id: "production-request", name: "Request", parent: "production",
    permission: [

      "production-view-request",
      "production-create-request",
      "production-update-request",
      "production-remove-request"
    ]
  },
  {
    id: "production-progress", name: "Progress", parent: "production",
    permission: [
      "production-view-progress"
    ]
  },
  {
    id: "production-workunit-gantt", name: "Workunit Gantt", parent: "production",
    permission: [
      "production-view-workunit-gantt",
      "production-create-view-workunit-gantt",
      "production-update-view-workunit-gantt",
      "production-remove-view-workunit-gantt",
    ]
  },
  {
    id: "production-personnel-gantt", name: "Personnel Gantt", parent: "production",
    permission: [
      "production-view-personnel-gantt"
    ]
  },
  {
    id: "production-vsm", name: "VSM", parent: "production",
    permission: [
      "production-view-vsm"
    ]
  },

  {
    id: "traceability", name: "Traceability", parent: "web-app",
    permission: [
      "traceability-asset",
      "traceability-material",
      "traceability-personnel",
    ]
  },
  {
    id: "traceability-personnel", name: "Personnel", parent: "traceability",
    permission: [
      "traceability-personnel"
    ]
  },
  {
    id: "traceability-material", name: "Material", parent: "traceability",
    permission: [
      "traceability-material"
    ]
  },
  {
    id: "traceability-physical-asset", name: "Physical Asset", parent: "traceability",
    permission: [
      "traceability-asset"
    ]
  },

  {
    id: "zenbee-tools", name: "Zenbee Tools", parent: "web-app",
    permission: [

    ]
  },
  {
    id: "zenbee-tools-device", name: "Device", parent: "zenbee-tools",
    permission: [

    ]
  },
  {
    id: "zenbee-tools-debug", name: "Debug", parent: "zenbee-tools",
    permission: [

    ]
  },
  {
    id: "zenbee-tools-file", name: "File", parent: "zenbee-tools",
    permission: [

    ]
  },
  {
    id: "zenbee-tools-asset", name: "Asset", parent: "zenbee-tools",
    permission: [

    ]
  },

  {
    id: "mobile-app", name: "Mobile app", parent: null,
    permission: [

    ]
  },

  {
    id: "traceability", name: "Traceability", parent: "mobile-app",
    permission: [

    ]
  },
  {
    id: "traceability-personnel", name: "Personnel", parent: "traceability",
    permission: [

    ]
  },
  {
    id: "traceability-material", name: "Material", parent: "traceability",
    permission: [

    ]
  },
  {
    id: "traceability-physical-asset", name: "Physical Asset", parent: "traceability",
    permission: [

    ]
  },

  {
    id: "zenbee-tools", name: "Zenbee Tools", parent: "mobile-app",
    permission: [

    ]
  },
  {
    id: "zenbee-tools-device", name: "Device", parent: "zenbee-tools",
    permission: [

    ]
  },
  {
    id: "zenbee-tools-debug", name: "Debug", parent: "zenbee-tools",
    permission: [

    ]
  },
  {
    id: "zenbee-tools-file", name: "File", parent: "zenbee-tools",
    permission: [

    ]
  },
  {
    id: "zenbee-tools-asset", name: "Asset", parent: "zenbee-tools",
    permission: [

    ]
  },
]

// Data permissioins ...
var permissions = [
  { id: 'admin-create-account', name: 'Create acount',  components: [] },
  { id: 'admin-update-account', name: 'Create acount',  components: [] },
  { id: 'admin-remove-account', name: 'Create acount',  components: [] },
  { id: 'admin-view-account', name: 'Create acount',  components: [] },
  { id: 'admin-role', name: 'Admin role',  components: [] },
  { id: 'admin-create-role', name: 'Create role',  components: [] },
  { id: 'admin-update-role', name: 'Update role',  components: [] },
  { id: 'admin-remove-role', name: 'Remove role',  components: [] },
  { id: 'admin-view-role', name: 'View role',  components: [] },
  { id: 'admin-permission', name: 'Admin permission',  components: [] },
  { id: 'admin-create-permission', name: 'Create permission',  components: [] },
  { id: 'admin-update-permission', name: 'Update permission',  components: [] },
  { id: 'admin-remove-permission', name: 'Remove permission',  components: [] },
  { id: 'admin-view-permission', name: 'View permission',  components: [] },
  { id: 'admin-view-audit', name: 'View audit',  components: [] },
  { id: 'admin-audit', name: 'Admin audit',  components: [] },

  { id: 'catering-view-menu', name: 'View menu', components: [] },
  { id: 'catering-create-menu', name: 'Create menu', components: [] },
  { id: 'catering-update-menu', name: 'Update menu', components: [] },
  { id: 'catering-remove-menu', name: 'Remove menu', components: [] },
  { id: 'catering-view-dish', name: 'View dish', components: [] },
  { id: 'catering-create-dish', name: 'Create dish', components: [] },
  { id: 'catering-update-dish', name: 'Update dish', components: [] },
  { id: 'catering-remove-dish', name: 'Remove dish', components: [] },
  { id: 'catering-register-meal', name: 'Register meal', components: [] },
  { id: 'catering-approve-register', name: 'Approve register', components: [] },
  { id: 'catering-report-by-week', name: 'Report by week', components: [] },
  { id: 'catering-report-by-month', name: 'Report by mouth', components: [] },

  { id: 'data-export', name: 'Date', components: [] },
  { id: 'data-import', name: 'Date', components: [] },

  { id: 'definition-view-work-definition', name: 'View work definition', components: [] },
  { id: 'definition-create-work-definition', name: 'Create work definition', components: [] },
  { id: 'definition-update-work-definition', name: 'Update work definition', components: [] },
  { id: 'definition-remove-work-definition', name: 'Remove work definition', components: [] },
  { id: 'definition-view-work-master', name: 'View work master', components: [] },
  { id: 'definition-create-work-master', name: 'Create work master', components: [] },
  { id: 'definition-update-work-master', name: 'Update work master', components: [] },
  { id: 'definition-remove-work-master', name: 'Remove work master', components: [] },
  { id: 'definition-copy-work-master', name: 'Copy work master', components: [] },
  { id: 'definition-copy-asset-spec', name: 'Copy asset spec', components: [] },
  { id: 'definition-view-history', name: 'View history', components: [] },

  { id: 'device-manage-device', name: 'Manage device', components: [] },
  { id: 'device-create-device', name: 'Create device', components: [] },
  { id: 'device-upgrade-firmware', name: 'Upgrade firware', components: [] },
  { id: 'device-update-script', name: 'Update script', components: [] },
  { id: 'device-manage-asset', name: 'Manage asset', components: [] },
  { id: 'device-manage-file', name: 'Manage file', components: [] },
  { id: 'device-debug-device', name: 'Debug device', components: [] },
  { id: 'device-view-group', name: 'View group', components: [] },
  { id: 'device-create-group', name: 'Create group', components: [] },
  { id: 'device-update-group', name: 'Update group', components: [] },
  { id: 'device-remove-group', name: 'Remove group', components: [] },

  { id: 'guide-view-menu', name: 'View menu', components: [] },
  { id: 'guide-view-detail', name: 'View detail', components: [] },

  { id: 'inventory-view-lot', name: 'View lot', components: [] },
  { id: 'inventory-download-report', name: 'Download report', components: [] },
  { id: 'inventory-view-definition', name: 'View definition', components: [] },
  { id: 'inventory-create-picking-order', name: 'Create picking order', components: [] },
  { id: 'inventory-view-picking-order', name: 'view picking order', components: [] },

  { id: 'asset-view-asset', name: '', component: [] },
  { id: 'asset-create-asset', name: '', component: [] },
  { id: 'asset-update-asset', name: '', component: [] },
  { id: 'asset-remove-asset', name: '', component: [] },
  { id: 'asset-view-class', name: '', component: [] },
  { id: 'asset-create-class', name: '', component: [] },
  { id: 'asset-update-class', name: '', component: [] },
  { id: 'asset-remove-class', name: '', component: [] },
  { id: 'asset-view-property', name: '', component: [] },
  { id: 'asset-create-property', name: '', component: [] },
  { id: 'asset-update-property', name: '', component: [] },
  { id: 'asset-remove-property', name: '', component: [] },
  { id: 'asset-view-testspec', name: '', component: [] },
  { id: 'asset-create-testspec', name: '', component: [] },
  { id: 'asset-update-testspec', name: '', component: [] },
  { id: 'asset-remove-testspec', name: '', component: [] },
  { id: 'asset-copy-testspec', name: '', component: [] },
  { id: 'asset-view-analysic', name: '', component: [] },

  { id: 'personnel-person', name: 'Person',  components: [] },
  { id: 'personnel-view-person', name: 'View person',  components: [] },
  { id: 'personnel-create-person', name: 'Create person',  components: [] },
  { id: 'personnel-update-person', name: 'Update person',  components: [] },
  { id: 'personnel-remove-person', name: 'Remove person',  components: [] },
  { id: 'personnel-skill', name: 'Skill',  components: [] },
  { id: 'personnel-view-person-skills', name: 'View skills',  components: [] },
  { id: 'personnel-remove-person-skill', name: 'Remove skills',  components: [] },
  { id: 'personnel-update-person-skill', name: 'Update skills',  components: [] },
  { id: 'personnel-create-person-skill', name: 'Create skills',  components: [] },
  { id: 'personnel-absent', name: 'Absent',  components: [] },
  { id: 'personnel-view-absent', name: 'View absent',  components: [] },
  { id: 'personnel-approve-absent', name: 'Approve absent',  components: [] },
  { id: 'personnel-request-absent', name: 'Request absent',  components: [] },
  { id: 'personnel-create-multi-absent', name: 'Create muiti absent',  components: [] },
  { id: 'personnel-workshift', name: 'Workshift',  components: [] },
  { id: 'personnel-view-workshift', name: 'View workshift',  components: [] },
  { id: 'personnel-create-workshift', name: 'Create workshift',  components: [] },
  { id: 'personnel-update-workshift', name: 'Update workshift',  components: [] },
  { id: 'personnel-remove-workshift', name: 'Remove workshift',  components: [] },
  { id: 'personnel-workgroup', name: 'Workgroup',  components: [] },
  { id: 'personnel-view-workgroup', name: 'view workgroup',  components: [] },
  { id: 'personnel-create-workgroup', name: 'Create workgroup',  components: [] },
  { id: 'personnel-update-workgroup', name: 'Update workgroup',  components: [] },
  { id: 'Personnel-remove-workgroup', name: 'Remove workgroup',  components: [] },
  { id: 'personnel-class', name: 'Class',  components: [] },
  { id: 'personnel-view-class', name: 'View class',  components: [] },
  { id: 'personnel-create-class', name: 'Create class',  components: [] },
  { id: 'personnel-update-class', name: 'Update class',  components: [] },
  { id: 'personnel-remove-class', name: 'Remove class',  components: [] },
  { id: 'personnel-property', name: 'Property',  components: [] },
  { id: 'personnel-view-property', name: 'View property',  components: [] },
  { id: 'personnel-create-property', name: 'Create property',  components: [] },
  { id: 'personnel-update-property', name: 'Update property',  components: [] },
  { id: 'personnel-remove-property', name: 'Remove property',  components: [] },
  { id: 'personnel-availability', name: 'Availability',  components: [] },
  { id: 'personnel-view-availability', name: 'View availability',  components: [] },
  { id: 'personnel-workgroup-availability', name: 'Workgroup Availability',  components: [] },
  { id: 'personnel-view-workgroup-availability', name: 'View workgroup availability',  components: [] },
  { id: 'personnel-payroll', name: 'Payroll',  components: [] },
  { id: 'personnel-ole', name: 'OLE',  components: [] },
  { id: 'personnel-view-ole', name: 'View payrol',  components: [] },
  { id: 'personnel-ole-export', name: 'OLE Export',  components: [] },
  { id: 'personnel-export-payrol', name: 'Export payrol',  components: [] },
  { id: 'personnel-qualityfaction', name: 'Qualityfaction',  components: [] },
  { id: 'personnel-view-person-qualification', name: 'View person qualification',  components: [] },

  { id: 'production-view-workunit-gantt', name: 'View workunit gantt', components: [] },
  { id: 'production-create-view-workunit-gantt', name: 'Create view workunit gantt', components: [] },
  { id: 'production-update-view-workunit-gantt', name: 'Update view workunit gantt', components: [] },
  { id: 'production-remove-view-workunit-gantt', name: 'Remove view workunit gantt', components: [] },
  { id: 'production-view-personnel-gantt', name: 'View personnel gantt', components: [] },
  { id: 'production-view-request', name: 'View request', components: [] },
  { id: 'production-create-request', name: 'Create request', components: [] },
  { id: 'production-update-request', name: 'Update request', components: [] },
  { id: 'production-remove-request', name: 'Remove request', components: [] },
  { id: 'production-view-progress', name: 'View progress', components: [] },
  { id: 'production-view-counting', name: 'View counting', components: [] },
  { id: 'production-view-vsm', name: 'View vsm', components: [] },

  { id: 'quality-product', name: 'Quality product', components: [] },
  { id: 'quality-find-product', name: 'Quality find product', components: [] },
  { id: 'quality-process', name: 'Quality process', components: [] },
  { id: 'quality-spc', name: 'Quality spc', components: [] },
  { id: 'quality-sqc', name: 'Quality sqc', components: [] },
  { id: 'quality-pareto', name: 'Quality pareto', components: [] },
  { id: 'quality-pareto-by-job', name: 'Quality pareto by job', components: [] },
  { id: 'quality-paynter', name: 'Quality paynter', components: [] },

  { id: 'material-definition', name: 'Definition',  components: [] },
  { id: 'material-view-material', name: 'view material',  components: [] },
  { id: 'material-create-material', name: 'Create material',  components: [] },
  { id: 'material-update-material', name: 'Update material',  components: [] },
  { id: 'material-remove-material', name: 'Remove material',  components: [] },
  { id: 'material-class', name: 'Class',  components: [] },
  { id: 'material-view-class', name: 'view class',  components: [] },
  { id: 'material-create-class', name: 'Create class',  components: [] },
  { id: 'material-update-class', name: 'Update class',  components: [] },
  { id: 'material-remove-class', name: 'Remove class',  components: [] },
  { id: 'material-property', name: 'Property',  components: [] },
  { id: 'material-view-property', name: 'View property,  components: []'},
  { id: 'material-create-property', name: 'Create property,  components: []'},
  { id: 'material-update-property', name: 'Update property,  components: []'},
  { id: 'material-remove-property', name: 'Remove property,  components: []'},
  { id: 'material-test-spec', name: 'Test Spec',  components: [] },
  { id: 'material-view-testspec', name: 'View testspec,  components: []'},
  { id: 'material-create-testspec', name: 'Create testspec,  components: []'},
  { id: 'material-update-testspec', name: 'Update testspec,  components: []'},
  { id: 'material-remove-testspec', name: 'Remove testspec,  components: []'},
  { id: 'material-copy-testspec', name: 'Copy testspec,  components: []'},
  { id: 'material-lot', name: 'Lot',  components: [] },
  { id: 'material-view-lot', name: 'View lot',  components: [] },
  { id: 'material-create-lot', name: 'Create lot',  components: [] },
  { id: 'material-update-lot', name: 'Update lot',  components: [] },
  { id: 'material-remove-lot', name: 'remove lot',  components: [] },

  { id: 'scope-tree', name: 'Scope Tree',  components: [] },
  { id: 'scope-view-scope', name: 'View scope',  components: [] },
  { id: 'scope-create-scope', name: 'Create scope',  components: [] },
  { id: 'scope-update-scope', name: 'Update scope',  components: [] },
  { id: 'scope-remove-scope', name: 'Remove scope',  components: [] },
  { id: 'scope-print-qr-code', name: 'Print scope',  components: [] },
  { id: 'scope-class', name: 'Class',  components: [] },
  { id: 'scope-view-class', name: 'View class',  components: [] },
  { id: 'scope-create-class', name: 'Create class',  components: [] },
  { id: 'scope-update-class', name: 'Update class',  components: [] },
  { id: 'scope-remove-class', name: 'Remove class',  components: [] },
  { id: 'scope-Property', name: 'Property',  components: [] },
  { id: 'scope-view-property', name: 'View property',  components: [] },
  { id: 'scope-create-property', name: 'Create property',  components: [] },
  { id: 'scope-update-property', name: 'Update property',  components: [] },
  { id: 'scope-remove-property', name: 'Remove property',  components: [] },
  { id: 'scope-line-log-book', name: 'Line Log Book',  components: [] },
  { id: 'scope-line-log-book', name: 'Log book' },

  { id: 'sale-view-order', name: 'View order', components: [] },
  { id: 'sale-create-order', name: 'Create order', components: [] },
  { id: 'sale-update-order', name: 'Update order', components: [] },
  { id: 'sale-remove-order', name: 'Remove order', components: [] },
  { id: 'sale-view-client', name: 'view client', components: [] },
  { id: 'sale-create-client', name: 'Create client', components: [] },
  { id: 'sale-update-client', name: 'Update client', components: [] },
  { id: 'sale-remove-client', name: 'Remove client', components: [] },
  { id: 'sale-view-burndown-progress', name: 'View burndown progress', components: [] },

  { id: 'traceability-asset', name: 'Traceability asset', components: [] },
  { id: 'traceability-material', name: 'Traceability material', components: [] },
  { id: 'traceability-personnel', name: 'Traceability personnel', components: [] }
]

module.exports = { roles, permissions };