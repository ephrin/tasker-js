var VERSION = '0.0.2a';

if (global('sdk') > 0) {
    main();
} else {
    flash('Error. No SKD detected. ('+VERSION+')');
}

function main() {
    flash('VERSION ' + VERSION + ' Installed.');
}
