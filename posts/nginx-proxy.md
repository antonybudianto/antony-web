---
title: Nginx Proxy Pass
date: "2020-03-22"
---

So you already have frontend application running, then you need to access your backend server for data.
You want to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on the browser so you need to create an endpoint for the backend.

For example, you have `www.hello.com` and want to expose endpoint for backend via `www.hello.com/api`.

With nginx, you can do it like this:

```nginx
location ~ ^/api/ {
    proxy_pass http://hellobackend/;
}
```

For example, there is request `www.hello.com/api/ping`, it will get proxied to `hellobackend/ping`

Notice the missing `api` on proxied request? Yes, anything in the location block will get cut, the rest will be sent to proxy pass.

## Request URI

If you want the `api` part, you can manually add `/api` on the proxy pass, or use `$request_uri`

```nginx
location ~ ^/api/ {
    proxy_pass http://hellobackend$request_uri;
}
```

This will proxy to `hellobackend/api/ping`

## Capturing group

You can also use capturing group and use it to pass to proxy:

```nginx
location ~ ^/api/(.*) {
    proxy_pass http://hellobackend/$1;
}
```

---

## Summary

*~* -> for case-sensitive string match

`hellobackend` is your backend host/IP

`$1` -> the matched string from RegExp, this one -> `(.*)`.
It can be multiple, such as `$2`, `$3`, and so on.
