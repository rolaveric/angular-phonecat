'use strict';
import 'angular';

/* Filters */

export default angular.module('phonecatFilters', []).filter('checkmark', () => {
  return (input) => input ? '\u2713' : '\u2718';
});
