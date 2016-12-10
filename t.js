var VERSION = '0.0.2a';

if (global('sdk') > 0) {
    main();
} else {
    flash('nope2');
}

function main() {
    flash('VERSION ' + VERSION + ' Installed.');
}
