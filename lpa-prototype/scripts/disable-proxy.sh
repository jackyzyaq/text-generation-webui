#!/bin/sh
unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY npm_config_http_proxy npm_config_https_proxy YARN_HTTP_PROXY YARN_HTTPS_PROXY ELECTRON_GET_USE_PROXY
export NO_PROXY=localhost,127.0.0.1,::1
export no_proxy=localhost,127.0.0.1,::1
