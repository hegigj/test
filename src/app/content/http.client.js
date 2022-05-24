class HttpClient extends XMLHttpRequest {
  constructor() {
    super();

    this.body = null;
    this.successHandlers = [];
    this.errorHandlers = [];

    this.onreadystatechange = () => {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          this.successHandlers.forEach(fn => fn(this.response));
        }

        if (this.status >= 400) {
          this.errorHandlers.forEach(fn => fn(this.statusText))
        }
      }
    };
  }

  get(url) {
    this.open('GET', url);
  }

  post(url, body) {
    this.open('POST', url);
    this.body = body;
  }

  subscribe(successHandler, errorHandler) {
    this.successHandlers.push(successHandler);
    this.errorHandlers.push(errorHandler);

    if (this.body) {
      this.send(this.body)
    } else {
      this.send()
    }
  }
}
