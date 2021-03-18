var logOfConsole = [];

var _log = console.log,
    _warn = console.warn,
    _error = console.error;

console.log = function() {
    logOfConsole.push({method: 'log', arguments: arguments});
    return _log.apply(console, arguments);
};

console.warn = function() {
    logOfConsole.push({method: 'warn', arguments: arguments});
    return _warn.apply(console, arguments);
};

console.error = function() {
    logOfConsole.push({method: 'error', arguments: arguments});
    return _error.apply(console, arguments);
};

console.log(logOfConsole);

