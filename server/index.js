const express = require('express')
const session = require('express-session')
const crypto = require('crypto')
const cors = require("cors");

const app = express()
const port = 3001
const clientId = 'example-backend'
const redirect_url = 'http://localhost:8080'

app.use(session({ resave: true, secret: 'SECRET', saveUninitialized: true }));
app.use(cors({ origin: true, credentials: true }));


app.get('/', (req, res) => {
  res.send('<a href="/login">Login</a>')
})

// LOGIN
const base64URLEncode = (str) => {
  return str.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

const sha256 = (buffer) => crypto.createHash('sha256').update(buffer).digest();

const createVerifier = () => base64URLEncode(crypto.randomBytes(32));

const createChallenge = (verifier) => base64URLEncode(sha256(verifier));

app.get('/login', async (req, res) => {
  const verifier = createVerifier()
  const challenge = createChallenge(verifier)
  req.session.codeVerifier = verifier

  res.redirect('https://lichess.org/oauth?' + new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    redirect_uri: `${redirect_url}/callback`,
    scope: 'preference:read',
    code_challenge_method: 'S256',
    code_challenge: challenge
  }))
})

// CALLBACK
const getLichessToken = async (authCode, verifier, url) => await fetch('https://lichess.org/api/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    grant_type: 'authorization_code',
    redirect_uri: `${url}/callback`,
    client_id: clientId,
    code: authCode,
    code_verifier: verifier,
  })
}).then(res => res.json());

const getLichessUser = async (accessToken) => await fetch('https://lichess.org/api/account', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
}).then(res => res.json());

app.get('/callback', async (req, res) => {
  const verifier = req.session.codeVerifier;
  const lichessToken = await getLichessToken(req.query.code, verifier, redirect_url)

  if (!lichessToken.access_token) {
    res.send('Failed getting token');
    return
  }

  const lichessUser = await getLichessUser(lichessToken.access_token)
  // res.header('content-type', 'application/json')
  // res.send(`{"user": "${lichessUser.username}", "token": "${lichessToken.access_token}"`)
  res.redirect(`http://localhost:8080/AccountOverview?user=${lichessUser.username}&token=${lichessToken.access_token}`)
})

app.listen(port)
