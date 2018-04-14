// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'bootstrap';
import '../_libs/jqm.table-reflow/jqm.table-reflow';

$(() => {
  console.log('Welcome to Yeogurt!');
  $('table').table();
});
