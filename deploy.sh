#!/bin/bash
rm -rf .nuxt
pnpm run build
pnpx wrangler pages deploy --branch main
