# alexa-cookie-cli
Binary of https://github.com/Apollon77/alexa-cookie (using pkg - https://github.com/vercel/pkg)

Without any further ado this will open a proxy of the Amazon login page on http://localhost:8080

Once the login completes successfully, the command window will return the refresh_token required to run alexa_remote_control.sh.
The token looks something like `Atnr|...`

**ATTENTION:** make sure to start from the command line as the output needs to be preserved!!!

Additional options:
````
Usage: cli [options]

Options:
  -l, --logger <log target>                       Where to log to
  -p, --amazonPage <page>                         optional: possible to use with different countries, default is "amazon.de"
  -b, --baseAmazonPage <amazon.com|amazon.co.jp>  optional: Change the Proxy Amazon Page - all "western countries" directly use amazon.com! Change to amazon.co.jp for Japan
  -a, --amazonPageProxyLanguage <lang>            optional: language to be used for the Amazon Sign-in page the proxy calls. default is "de_DE"
  -L, --acceptLanguage <lang>                     optional: webpage language, should match to amazon-Page, default is "de-DE"
  -u, --userAgent <Browser>                       optional: own userAgent to use for all request, overwrites default one, should not be needed
  -H, --proxyOwnIp <hostname>                     provide own IP or hostname to later access the proxy. needed to setup all rewriting and proxy stuff internally (default: "localhost")
  -P, --proxyPort <port>                          optional: use this port for the proxy, default is 8080 (default: 8080)
  -B, --proxyListenBind <IP>                      optional: set this to bind the proxy to a special IP, default is "0.0.0.0"
  -V, --proxyLogLevel <error|warn|info|debug>     optional: Loglevel of Proxy, default "warn"
  -h, --help                                      display help for command
 ````

For implementation in other projects, the session cookies can be obtained using the refresh_token like this:
````
POST /ap/exchangetoken/cookies HTTP/1.1
x-amzn-identity-auth-domain: api.amazon.de

requested_token_type=auth_cookies
app_name=Amazon Alexa
domain=www.amazon.de
source_token_type=refresh_token
source_token=Atnr|...
````
