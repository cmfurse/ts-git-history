# ts-git-history
Example project that pulls a commit history from github via GraphQL

## Setup
Create a Github access token using the documentation found [here](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

```
cp .env.example .env
# modify .env as necessary
```

## Run
### Production
```
npm run build
npm run start
```

### Development
```
npm run dev
# in a separate window
npm run dev:web
```
