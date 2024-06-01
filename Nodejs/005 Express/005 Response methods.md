## Response methods

> `An HTTP response. A server returns an HTTP response message to the client. The response contains completion status information about the request and might also contain requested content in its message body.`

> `The methods on the response object `**`res`** `in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.`



| Method                                                       | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [res.download()](https://expressjs.com/en/4x/api.html#res.download) | Prompt a file to be downloaded.                              |
| [res.end()](https://expressjs.com/en/4x/api.html#res.end)    | End the response process.                                    |
| [res.json()](https://expressjs.com/en/4x/api.html#res.json)  | Send a JSON response.                                        |
| [res.jsonp()](https://expressjs.com/en/4x/api.html#res.jsonp) | Send a JSON response with JSONP support.                     |
| [res.redirect()](https://expressjs.com/en/4x/api.html#res.redirect) | Redirect a request.                                          |
| [res.render()](https://expressjs.com/en/4x/api.html#res.render) | Render a view template.                                      |
| [res.send()](https://expressjs.com/en/4x/api.html#res.send)  | Send a response of various types.                            |
| [res.sendFile()](https://expressjs.com/en/4x/api.html#res.sendFile) | Send a file as an octet stream.                              |
| [res.sendStatus()](https://expressjs.com/en/4x/api.html#res.sendStatus) | Set the response status code and send its string representation as the response body. |

