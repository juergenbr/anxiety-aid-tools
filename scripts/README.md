# Locale Sync Script

This script compares your English locale files with other locales and generates clear AI instructions for translation and synchronization.

## Usage

```bash
# Compare all locales with English
node scripts/sync-locales.js

# Compare specific locale with English
node scripts/sync-locales.js pt
node scripts/sync-locales.js fr
```

## Features

- **Deep comparison**: Recursively compares nested JSON objects
- **Clear output**: Shows missing, extra, and mismatched keys
- **AI instructions**: Generates specific instructions for AI translation
- **Multiple formats**: Handles both simple values and complex nested objects
- **Status indicators**: Visual feedback with emojis for different states

## Output Types

- 🔴 **Missing Keys**: Keys that exist in English but not in target locale (must add)
- 🟡 **Extra Keys**: Keys that exist in target locale but not in English (should remove)
- 🟠 **Type Mismatches**: Keys with different data types (must fix)
- ✅ **Synced**: Files that are perfectly aligned

## AI Translation Workflow

1. Run the script to identify differences
2. Copy the generated AI instructions
3. Provide to an AI assistant with translation capabilities
4. Ask AI to translate missing keys while preserving JSON structure
5. Remove any extra keys that are no longer needed

The script generates detailed instructions showing exactly what needs to be translated, making it easy for AI to maintain consistency and structure.