#!/bin/bash
rm -rf .nuxt
pnpm run build
wrangler pages deploy --branch main
