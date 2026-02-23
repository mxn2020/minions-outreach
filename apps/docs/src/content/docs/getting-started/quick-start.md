---
title: Quick Start
description: Get up and running with Minions Outreach in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-outreach/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_outreach import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
outreach info
```
