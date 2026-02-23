# minions-outreach

**Email templates, drip sequences, personalization rules, and send schedules**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-outreach/sdk minions-sdk

# Python
pip install minions-outreach

# CLI (global)
npm install -g @minions-outreach/cli
```

---

## CLI

```bash
# Show help
outreach --help
```

---

## Python SDK

```python
from minions_outreach import create_client

client = create_client()
```

---

## Project Structure

```
minions-outreach/
  packages/
    core/           # TypeScript core library (@minions-outreach/sdk on npm)
    python/         # Python SDK (minions-outreach on PyPI)
    cli/            # CLI tool (@minions-outreach/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [outreach.minions.help](https://outreach.minions.help)
- Blog: [outreach.minions.blog](https://outreach.minions.blog)
- App: [outreach.minions.wtf](https://outreach.minions.wtf)

---

## License

[MIT](LICENSE)
