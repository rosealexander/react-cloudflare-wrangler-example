# React + Cloudflare workshop
### []()
- [Cloudflare edge server](https://www.cloudflare.com/learning/cdn/glossary/edge-server/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Wrangler](https://developers.cloudflare.com/workers/tutorials/deploy-a-react-app-with-create-react-app/)

![React + Material UI logos](./react_cloudflare.png)

### Available Scripts

### `wrangler dev`
Establishes a connection between localhost and an edge server that operates your Worker
in development. All requests are forwarded to the edge server, which continuously updates as your Worker
code changes. \
Open [http://127.0.0.1:8787](http://127.0.0.1:8787) to view in your browser.

### `wrangler publish`
Uses bucket and entry-point from `wrangler.toml` to deploy site to Workers.

## Learn More

Checkout the [Cloudflare Workers](https://developers.cloudflare.com/workers/) documentation to learn more about
Cloudflare's serverless execution environment.
