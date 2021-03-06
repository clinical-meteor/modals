Package.describe({
  name: 'clinical:modals',
  version: '1.0.8',
  summary: 'Modal dialogs for the Clinical Meteor track.',
  git: 'https://github.com/clinical-meteor/clinical-modals',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('awatson1978:fonts-helveticas@1.0.4');

  api.addFiles('client/modals.less', 'client');
  api.addFiles('client/modals.js', 'client');

  api.addFiles('client/confirmModal/confirmModal.html', 'client');
  api.addFiles('client/confirmModal/confirmModal.js', 'client');
  api.addFiles('client/confirmModal/confirmModal.less', 'client');

  api.addFiles('client/promptModal/promptModal.html', 'client');
  api.addFiles('client/promptModal/promptModal.js', 'client');
  api.addFiles('client/promptModal/promptModal.less', 'client');

  api.export('keybindingsModal');
});

// Package.onTest(function (api) {
//   api.use('tinytest');
//   api.use('clinical:keybindings');
//   api.use('clinical:verification');
//   api.addFiles('tests/modals.js');
// });
