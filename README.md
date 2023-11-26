# alexa-cookie-cli
Binary of https://github.com/Apollon77/alexa-cookie (using pkg - https://github.com/vercel/pkg), get the [latest release here](https://github.com/adn77/alexa-cookie-cli/releases/latest).

Without any further ado this will open a proxy of the Amazon login page on http://127.0.0.1:8080.

**ATTENTION: without any options, the app is pre-programmed for a German Amazon account!**

Once the login completes successfully, the command window will return the refresh_token required to run alexa_remote_control.sh.
The token looks something like `Atnr|...`

Additional options:
````
Usage: cli [options]

Options:
  -q, --quiet                                     Non-interactive, output refresh_token on StdOut and exit
  -d, --debug                                     Turn on debug output to StdOut
<<<<<<< HEAD
  -A, --deviceAppName <AppName>                   optional: Name of the Device registered with the Alexa app (default: alexa_cookie_cli)
=======
>>>>>>> fbbedcf1d9a6e63a0636e95de27e50f3846fbb30
  -p, --amazonPage <page>                         optional: possible to use with different countries, default is "amazon.de"
  -b, --baseAmazonPage <amazon.com|amazon.co.jp>  optional: Change the Proxy Amazon Page - all "western countries" directly use amazon.com! Change to amazon.co.jp for Japan
  -a, --amazonPageProxyLanguage <lang>            optional: language to be used for the Amazon Sign-in page the proxy calls. default is "de_DE"
  -L, --acceptLanguage <lang>                     optional: webpage language, should match to amazon-Page, default is "de-DE"
<<<<<<< HEAD
=======
  -u, --userAgent <Browser>                       optional: own userAgent to use for all request, overwrites default one, should not be needed
>>>>>>> fbbedcf1d9a6e63a0636e95de27e50f3846fbb30
  -H, --proxyOwnIp <IP of localhost>              provide own IP(!) to later access the proxy. needed to setup all rewriting and proxy stuff internally (default: "127.0.0.1")
  -P, --proxyPort <port>                          optional: use this port for the proxy, default is 8080 (default: 8080)
  -B, --proxyListenBind <IP>                      optional: set this to bind the proxy to a special IP, default is "0.0.0.0"
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
(make sure to URL-encode, etc. !)
