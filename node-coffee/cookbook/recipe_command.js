// Generated by CoffeeScript 1.10.0
var child_process, cook, logger, logging, path, readline, title;

child_process = require('child_process');

readline = require('readline');

path = require('path');

logging = require('./util/logging');

logger = logging.LoggerFactory.getLogger(path.basename(__filename));

title = function() {
  logger.debug('# Command');
};

cook = function() {
  var command, commands, i, len, pid, pipe, proc;
  commands = ['ls'];
  for (i = 0, len = commands.length; i < len; i++) {
    command = commands[i];
    proc = child_process.spawn(command);
    pid = proc.pid;
    logger.debug(command + "[#" + pid + "] started");
    pipe = readline.createInterface({
      input: proc.stdout,
      terminal: false
    });
    pipe.on('line', function(line) {
      logger.debug(line);
    });
    proc.on('close', function(code, signal) {
      logger.debug(command + "[#" + pid + "] ended");
    });
  }
};

module.exports = {
  title: title,
  cook: cook
};
