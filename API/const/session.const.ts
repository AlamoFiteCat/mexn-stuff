import session from "express-session";
import { v4 as uuidv4 } from "uuid";

export default session({
  secret: "sBrSpntpGjL7NqM",
  resave: true,
  saveUninitialized: true,
  name: "cheesedForSure",
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 5,
  },
  genid: () => {
    return uuidv4();
  },
});


/*
Session

Create a session middleware with the given options.
Note: Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.

> Secret
This is the secret used to sign the session ID cookie. This can be either a string for a single secret, 
or an array of multiple secrets. If an array of secrets is provided, 
only the first element will be used to sign the session ID cookie, while all the elements 
will be considered when verifying the signature in requests. 
The secret itself should be not easily parsed by a human and would best be a random set of characters.

> Resave
Forces the session to be saved back to the session store, 
even if the session was never modified during the request.

> saveUninitialized
Forces a session that is "uninitialized" to be saved to the store. 
S session is uninitialized when it is new but not modified.

cookie
Settings object for the session ID cookie. 

> cookie.httpOnly
Specifies the boolean value for the HttpOnly Set-Cookie attribute. 
When truthy, the HttpOnly attribute is set, otherwise it is not. By default, the HttpOnly attribute is set.
Note be careful when setting this to true, as compliant clients will not 
allow client-side JavaScript to see the cookie in document.cookie.

> cookie.maxAge
Specifies the number (in milliseconds) to use when calculating the Expires Set-Cookie attribute. 
This is done by taking the current server time and adding maxAge milliseconds to the value to calculate an Expires datetime. 
By default, no maximum age is set.

> cookie.secure
Specifies the boolean value for the Secure Set-Cookie attribute. 
When truthy, the Secure attribute is set, otherwise it is not. By default, the Secure attribute is not set.

Note be careful when setting this to true, as compliant clients will not send the cookie back to the server in the future 
if the browser does not have an HTTPS connection.

Please note that secure: true is a recommended option. 
However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies.

*/

