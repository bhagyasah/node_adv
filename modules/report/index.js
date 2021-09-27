// process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
// try {
  process.chdir('/non-existent-path-not-found-1');
// } catch (err) {
//   // process.report.writeReport('report.json',err);

// }