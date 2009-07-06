JS.Test.Unit.extend({
  /** section: test
   * class JS.Test.Unit.AutoRunner
   **/
  AutoRunner: new JS.Class({
    extend: {
      /**
       * JS.Test.Unit.AutoRunner.run() -> JS.Test.Unit.TestResult
       **/
      run: function(outputLevel) {
        var runner = this.RUNNERS.console,
            names  = [],
            suites = [];
        
        JS.Test.Unit.TestCase.forEach(function(testcase) {
          names.push(testcase.displayName);
          suites.push(testcase.suite());
        });
        
        var suite = new JS.Test.Unit.TestSuite(names.join(', '));
        for (var i = 0, n = suites.length; i < n; i++)
          suite.push(suites[i]);
        
        return runner.run(suite, this.OUTPUT_LEVELS[outputLevel || 'normal']);
      },
      
      RUNNERS: {
        console:  JS.Test.Unit.UI.Console.TestRunner
      },
      
      OUTPUT_LEVELS: {
        silent:   JS.Test.Unit.UI.SILENT,
        progress: JS.Test.Unit.UI.PROGRESS_ONLY,
        normal:   JS.Test.Unit.UI.NORMAL,
        verbose:  JS.Test.Unit.UI.VERBOSE
      }
    }
  })
});

