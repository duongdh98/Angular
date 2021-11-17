var express = require('express');
var router = express.Router();

const fs = require('fs');

/* Role mPath */
let rolesPath = './data/roles.mock.json';
let permissionsPath = './data/permissions.mock.json';

/* Get data from json use fs */
let rolesJson = fs.readFileSync('./data/roles.mock.json');
let permissionsJson = fs.readFileSync('./data/permissions.mock.json');

// Function handle json
const saveRoleData = (data) => { // save Roles

  const jsonDataRoles = JSON.stringify(data);
  fs.writeFileSync(rolesPath, jsonDataRoles);
};

const savePermissionData = (data) => { // save Permisodn

  const jsonDataPermissions = JSON.stringify(data);
  fs.writeFileSync(permissionsPath, jsonDataPermissions);
};

const getRoles = () => {
  return JSON.parse(rolesJson);
}

const getPermissions = () => {
  return JSON.parse(permissionsJson);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Create roter for json file  */
router.post('/roles/json/read', function(req, res) {

  const dataRoles = getRoles();
  res.json(dataRoles);
});

router.post('/roles/json/create', function(req, res) {

  const existRoles = getRoles();
  const roleData = req.body;

  //check if the roleData fields are missing
  if (roleData.id == null || roleData.name == null) {
    return res.status(401).send({error: true, msg: 'roles data missing'});
  }

  // Check if the roleID exist already
  const findExistId = existRoles.roles.find(role => role.id == roleData.id);
  if (findExistId) {
    return res.status(409).send({error: true, msg: 'ID roles is readly'});
  }

  // Chekc iff the name exist readly
  const findExistName = existRoles.roles.find(role => role.name == roleData.name);
  if (findExistName) {
    return res.status(409).send({error: true, msg: 'Name roles is readly'});
  }

  // Append the role
  existRoles.roles.push(roleData);
  saveRoleData(existRoles);

  res.send({success: true, msg: 'Roles data added successfully'});

});

router.patch('/roles/json/update', function(req, res) {

  // Get Param
  const reqQuery = req.query // returns object with all parameters
  const roleData = req.body;
  const existRoles = getRoles();

  const findExistId = existRoles.roles.find(d => d.id === reqQuery.id);
  if (!findExistId) {
    return res.status(409).send({error: true, msg: 'ID not exist'});
  }

  const updateRoleData = existRoles.roles.filter(d => d.id !== reqQuery.id);
  existRoles.roles = updateRoleData;

  // Add update to roles
  existRoles.roles.push(roleData);
  saveRoleData(existRoles);

  res.send({success: true, msg: 'Role update complete ! '});

})

router.delete('/roles/json/delete', function(req, res) {

  const reqQuery = req.query;
  const existRoles = getRoles();

  const findExistId = existRoles.roles.find(d => d.id === reqQuery.id);
  console.log(findExistId);
  if (!findExistId) {
    return res.status(409).send({error: true, msg: 'ID not exist'});
  }

  const updateRoleData = existRoles.roles.filter(d => d.id !== reqQuery.id);
  existRoles.roles = updateRoleData;

  saveRoleData(existRoles);
  res.send({success: true, msg: 'Update role delete complete ! '});

})

/* Handle Permisionns */
router.post('/permissions/json/read', function(req, res) {

  const dataPermissions = getPermissions();
  res.json(dataPermissions);
});

router.post('/permissions/json/create', function(req, res) {

  const existPermissions = getPermissions();
  const permissionData = req.body;

  //check if the roleData fields are missing
  if (permissionData.id == null || permissionData.name == null) {
    return res.status(401).send({error: true, msg: 'permission data missing'})
  }
  // Check if the roleID exist already
  const findExistId = existPermissions.permissions.find(permission => permission.id == permissionData.id);
  if (findExistId) {
    return res.status(409).send({error: true, msg: 'ID permission is readly'})
  }

  // Chekc iff the name exist readly
  const findExistName = existPermissions.permissions.find(permission => permission.name == permissionData.name);
  if (findExistName) {
    return res.status(409).send({error: true, msg: 'Name permission is readly'});
  }

  existPermissions.permissions.push(permissionData);
  console.log(existPermissions);

  savePermissionData(existPermissions);

  res.send({success: true, msg: 'Permiision data added successfully'})

});

router.patch('/permissions/json/update', function(req, res) {

  const reqQuery = req.query // returns object with all parameters
  const permissionData = req.body;
  const existPermisionsData = getPermissions();

  const findExistId = existPermisionsData.permissions.find(d => d.id === reqQuery.id);

  if (!findExistId) {
    return res.status(409).send({error: true, msg: 'ID not exist'});
  }

  console.log(existPermisionsData);

  const updatePermisionsData = existPermisionsData.permissions.filter(d => d.id !== reqQuery.id);
  existPermisionsData.permissions = updatePermisionsData;

  console.log(existPermisionsData);

  existPermisionsData.permissions.push(permissionData);
  savePermissionData(existPermisionsData);

  res.send({success: true, msg: 'Permission update complete ! '});

});

router.delete('/permissions/json/delete', function(req, res) {

  const reqQuery = req.query;
  const existPermisionsDataDel = getPermissions();

  const findExistId = existPermisionsDataDel.permissions.find(d => d.id === reqQuery.id);
  console.log(findExistId);
  if (!findExistId) {
    return res.status(409).send({error: true, msg: 'ID not exist'});
  }

  const updatePermisionData = existPermisionsDataDel.permissions.filter(d => d.id !== reqQuery.id);
  existPermisionsDataDel.permissions = updatePermisionData;

  savePermissionData(existPermisionsDataDel);
  res.send({success: true, msg: 'Permission delete complete ! '});

});

module.exports = router;
