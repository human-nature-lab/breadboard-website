#!/bin/sh

# groovydoc --destdir temp -nomainforscripts ../breadboard/groovy/form/*.groovy ../breadboard/groovy/util/*.groovy ../breadboard/groovy/timer/*.groovy ../breadboard/groovy/actions/*.groovy ../breadboard/groovy/steps/*.groovy ../breadboard/groovy/chat/*.groovy ../breadboard/groovy/graph/*.groovy

rm -rf temp

# Generate frontend breadboard class documentation
npx typedoc --readme none --hideBreadcrumbs --hideInPageTOC --out temp --tsconfig "../breadboard/frontend/tsconfig.json" ../breadboard/frontend/core/breadboard.ts

# Prepend ./snippets/core.md and then append concatenated typedoc output
npx concat-md --decrease-title-levels temp | (cat ./snippets/core.md && cat) | (cat ./snippets/generated.md && cat) > ./docs/api/frontend/core.md

# Generate documentation for Vue components
node generate.vue.js