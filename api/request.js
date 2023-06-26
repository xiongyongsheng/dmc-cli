const axios = require("axios");

class HttpRequest {
  constructor(baseURL, options = {}) {
    this.baseURL = baseURL;
    this.commonOptions = options;
  }
  getInsideConfig() {
    const configs = {
      baseURL: this.baseURL,
      ...this.commonOptions,
    };
    return configs;
  }
  interceptors(instance, options) {
    // todo...
  }
  request(options) {
    const instance = axios.create({});
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options);
    return instance.request(options);
  }
}

module.exports = HttpRequest;
