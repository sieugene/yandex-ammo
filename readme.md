
## Usage

Create token.txt and fill API key
```bash
[loadtest/example_token.txt]

d*.......d
```

Write your ammo

```bash
  [src/ammos/example.ts]

     const rawAmmo = {
        name: 'example',
        host: 'host',
        data: [
            {
                method: 'POST',
                path: '/api/',
                tag: 'ammo-test-execute',
                body: { ... },
            },
        ],
    }
```
    
Call for generate json ammo
```bash
[src/index.ts]

import { generateExampleAmmo } from './ammos/example'

generateExampleAmmo()


```
Create "sample GET requests"
```bash
  yarn ammo
```

Run

```bash
docker compose -f "docker-compose.yml" up -d --build
```