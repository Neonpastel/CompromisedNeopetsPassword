# Compromised Neopets Password

This README is meant to get the website up and running locally, in case you would want, or future me forgets.
For all other info, [check out the website](https://compromisedneopetspassword.neonpastel.net/)!

## How-to
### Install locally
Pre-requirements: node.js & git installed
```bash
git clone https://github.com/Denperidge/CompromisedNeopetsPassword.git
cd CompromisedNeopetsPassword
npm install
npm start  # This will start a webserver. If you want a one-off static build, use npm build 
```

## Reference
- [.github/workflows](.github/workflows/): GitHub Actions config
- [assets/](assets/): Static assets for the website
- [lyrics/](lyrics/): Past transcriptions & tools I've made for it
- [src/](src/): Files used for building the website
- [.parcelrc](.parcelrc) & [pug.config.js](pug.config.js): Configuration file & script for parcel & pug respectively
