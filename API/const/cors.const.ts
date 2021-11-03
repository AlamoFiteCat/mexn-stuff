import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  let origin = req.headers.origin || req.headers.referer;

  if (origin && origin.match(/localhost/gi)) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, DELETE, PATCH"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Accept, APPKEY, withCredentials"
    );
  }

  if (req.method === "OPTIONS") {
    res.status(200).json({});
  } else {
    next();
  }
};

// The Access-Control-Allow-Origin 
// response header indicates whether the response can be shared with requesting code from the given origin.

// The Access-Control-Allow-Credentials 
// response header tells browsers whether to expose the response to the frontend JavaScript code when the request's credentials mode (Request.credentials) is include.
// When a request's credentials mode (Request.credentials) is include, browsers will only expose the response to the frontend 
// JavaScript code if the Access-Control-Allow-Credentials value is true.
// Credentials are cookies, authorization headers, or TLS client certificates.

/*
The Access-Control-Allow-Headers response header is used in response to a preflight 
request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request. 
This header is required if the request has an Access-Control-Request-Headers header.
*/