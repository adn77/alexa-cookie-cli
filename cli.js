const alexaCookie = require('alexa-cookie2');
const commander = require('commander');
const program = new commander.Command();

program
  .option('-q, --quiet', 'Non-interactive, output refresh_token on StdOut and exit')
  .option('-d, --debug')
  .option('-A, --deviceAppName <AppName>', 'optional: Name of the Device registered with the Alexa app', 'alexa_cookie_cli')
  .option('-p, --amazonPage <page>', 'optional: possible to use with different countries, default is "amazon.de"', 'amazon.de')
  .option('-b, --baseAmazonPage <amazon.com|amazon.co.jp>', 'optional: Change the Proxy Amazon Page - all "western countries" directly use amazon.com! Change to amazon.co.jp for Japan', 'amazon.com')
  .option('-a, --amazonPageProxyLanguage <lang>', 'optional: language to be used for the Amazon Sign-in page the proxy calls. default is "de_DE"', 'de_DE')
  .option('-L, --acceptLanguage <lang>', 'optional: webpage language, should match to amazon-Page, default is "de-DE"', 'de-DE')
  .option('-H, --proxyOwnIp <IP of localhost>', 'provide own IP(!) to later access the proxy. needed to setup all rewriting and proxy stuff internally', '127.0.0.1')
  .option('-P, --proxyPort <port>', 'optional: use this port for the proxy, default is 8080', 8080)
  .option('-B, --proxyListenBind <IP>', 'optional: set this to bind the proxy to a special IP, default is "0.0.0.0"', '0.0.0.0')
program.parse();

const config = program.opts();
config.setupProxy = true;
config.proxyOnly = true;

if ( config.debug ) {
    config.proxyLogLevel = 'warn';
    config.logger = console.log;
}

alexaCookie.generateAlexaCookie( config, (err, result) => {
    if (result && result.refreshToken) {
        console.log("=======================================================================");
        console.log("Some of this data might be useful to you for additional token retrieval");
        console.log(" Please store in a safe place ...");
        console.log("=======================================================================");
        console.log(" macDms: " + JSON.stringify(result.macDms));
        console.log(" ----------------------------------------------------------------------");
        console.log(" deviceSerial: " + result.deviceSerial);
        console.log("=======================================================================");
        console.log(" refreshToken: " + result.refreshToken);
        console.log("=======================================================================");
        if (! program.opts().quiet) {
            while(true);
        }
        alexaCookie.stopProxyServer();
    }else{
        console.error( err + ' / ' + JSON.stringify(result));
    }
});