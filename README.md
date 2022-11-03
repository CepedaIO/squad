# Squad

An web application dedicated to helping friends manage events and plans to get together. You enter your availability and the application will figure out the best time for everyone to do the thing

## How to setup?

1. Clone this repository
2. Install `npm install -g @cepedaio/cli`
3. `cd` into repo
4. Unpack project `cpa ws unpack`
5. Start project `cpa ws start`

## Recommendations

### Alias workstation command

You should alias the `ws` command in`.profile` or `.bashrc`
```bash
#In ~/.profile
alias ws='cpa ws'
```

### Work on services locally when slow

Because source files need to be mounted into docker over network and then compiled before being loaded, it can make somethings slow like start up times

If you need to work on something that requires restarting the service a lot, it may be better to work outside of the docker container

```bash
cpa ws stop api
cd ./squad/services/api
yarn dev
```
