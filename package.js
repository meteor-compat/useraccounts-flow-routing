// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'useraccounts:flow-routing',
  summary: 'UserAccounts package providing routes configuration capability via kadira:flow-router.',
  version: '1.15.0',
  git: 'https://github.com/meteor-compat/useraccounts-flow-routing',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@2.4');

  api.use([
    'check',
    'kadira:flow-router',
    'underscore',
    'useraccounts:core',
    'modules'
  ], ['client', 'server']);

  api.imply([
    'kadira:flow-router@2.12.1',
    'useraccounts:core@1.15.0',
  ], ['client', 'server']);

  api.use([
     'react@0.14.1_1',
     'kadira:blaze-layout@2.3.0',
     'kadira:react-layout@1.5.3',
     'gwendall:blaze-to-react@0.1.2'
  ], ['client', 'server'], { weak: true });

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
    'lib/client/templates_helpers/at_input.js',
  ], ['client']);
});
