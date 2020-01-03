server {
  server_name www.antonybudianto.com antonybudianto.com;
  root /home/antonybudianto/web/public;
  index index.html;
  
  location / {
    try_files $uri $uri/ /index.html =404;
  }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/antonybudianto.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/antonybudianto.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = antonybudianto.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name www.antonybudianto.com antonybudianto.com;

  listen 80;
  listen [::]:80;
    return 404; # managed by Certbot


}
