Package.describe({
  name: 'sevki:events',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:sevki/events.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Npm.depends({
    'events': '1.0.2',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('events-client.js', 'client');
  api.addFiles('events-server.js', 'server');
  api.export('EventEmitter');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sevki:events');
  api.addFiles('events-tests.js');
});
