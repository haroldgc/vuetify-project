<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col key="tonal" cols="5">
                <v-card class="mx-auto" max-width="344" variant="tonal">
                    <v-card-item>
                        <div>
                            Login
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script setup>
import { crypto } from 'crypto'
const crypto = require('crypto')

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
    const url = req.protocol + '://' + req.get('host') + req.baseUrl;
    const verifier = createVerifier()
    const challenge = createChallenge(verifier)
    req.session.codeVerifier = verifier

    console.log(res)

    res.redirect('https://lichess.org/oauth?' + new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        redirect_uri: `${url}/callback`,
        scope: 'preference:read',
        code_challenge_method: 'S256',
        code_challenge: challenge
    }))
})

</script>