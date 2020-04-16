# Node Token Auth 2 Guided Project using jsonwebtoken to sign token when /register and verify token when /login. Token are sent in cookie from server to client.

Guided project for **Node Auth 2** Module.

Pro: servers can scale up horizontally as client token hashed password are verified when login by any servers which can compare client hashed password from local storage.

Con: server can not enforce client logout.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.

We can use JSON web tokens (JWTs) to add authentication to a Web API. JSON web tokens are an industry standard for transferring data between two parties.

JWTs are cryptographically signed, typically using a secret with the HMACSHA-256 algorithm.

In this section we’ll look at the anatomy of a JWT.

Overview
JSON Web Tokens (JWT) are a way to transmit information between parties in the form of a JSON object. The JSON information is most commonly used for authentication and information exchange. In the former example, with authentication every JWT contains information. In the latter, JWTs contain the classic JSON data you’ve seen before.

Ultimately, a JWT is a string that has three parts separated by a period (.). Those are:

The header.
The payload.
The signature.
Header
The header contains the algorithm with the token type. Typically the header for a JWT looks like this.

Copy
{
  "alg": "HS256",
  "typ": "JWT"
}
the alg key specifies which algorithm was used to create the token, in this case, the algorithm is HMACSHA-256, and the typ property classifies this token as being of the type JWT.

Payload
The payload includes claims (fancy name for things like permissions for the user) information or any other data we’d like to store in the token, which is most likely a user id. There are specific claims defined in the JWT standard, and you can also add custom properties to this object.

An example:

Copy
{
  "sub": "1234567890", // standard - subject, normally the user id
  "name": "John Doe", // custom property
  "iat": 1516239022 // standard - The Date the token was issued, expressed in seconds since epoch.
}
Signature
To create a signature, we must create a string by base64 encoding the header and payload together, and then signing it with a secret.

Combining all three parts, you will get a JWT that looks like this:

Copy
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
Follow Along
