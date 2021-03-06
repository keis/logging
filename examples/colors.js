// This example requires `rapidus-sparkle`
var logging = require('../lib'),
    sinks = require('../lib/sinks'),
    sparkle = require('rapidus-sparkle'),
    levelColors,
    frmt,
    logger;

// Configure a mapping between log levels and colours
levelColors = {
    'DEBUG': 'cyan',
    'WARNING': 'yellow',
    'ERROR': 'red'
};

// Create a sparkle formatter
frmt = sparkle.createFormatter({
    format: '%{green:date :time} %{:levelName %{bold [:levelName]} :message}',
    colors: levelColors
});

// Create a logger
logger = logging.getLogger('app');
logger.setLevel('DEBUG');
logger.addSink(sinks.console({format: frmt}));

// Log some stuff
logger.debug('some details');
logger.warn('this feels bad');
logger.error('abandon ship');
