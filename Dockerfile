FROM nginx:1.27-alpine

# Replace the default site with the static files
RUN rm -rf /usr/share/nginx/html/*
COPY index.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY html /usr/share/nginx/html/html
COPY js /usr/share/nginx/html/js
COPY audio /usr/share/nginx/html/audio

EXPOSE 80
