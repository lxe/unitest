'use strict';

var istanbul = require('istanbul');
var rawJsonReporter = require('istanbul-reporter-raw-json');
istanbul.Report.register(rawJsonReporter);

function report(objects, reports, reportDir) {
  var collector = new istanbul.Collector();
  var reporter = new istanbul.Reporter(null, reportDir);

  objects.forEach(function(obj) {
    collector.add(obj);
  });
  reporter.addAll(reports);
  reporter.write(collector, true, function() {});
}

module.exports = report;
