import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

import('/imports/api/modules-whitelist');

Meteor.startup(() => {
  let name = '/imports/api/bridge'
  import(name);
  render(<App/>, document.getElementById('react-target'));
});
