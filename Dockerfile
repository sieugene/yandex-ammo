FROM direvius/yandex-tank:latest AS tank

COPY ["loadtest", "/var/loadtest"]

VOLUME ["/var/loadtest"]
WORKDIR /var/loadtest

