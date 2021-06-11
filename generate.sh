#!/bin/bash

if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

if [ -z ${DOC_ROOT} ]; then 
  echo "DOC_ROOT should be set in .env. Point it to the documentation version root."
  exit
fi

if [ -z ${BREADBOARD_SOURCE} ]; then 
  echo "BREADBOARD_SOURCE should be set in .env. Point it to the breadboard source code directory."
  exit
fi

echo "Reading source from $BREADBOARD_SOURCE"
echo "Writing output to $DOC_ROOT"
# groovydoc --destdir temp -nomainforscripts ../breadboard/groovy/form/*.groovy ../breadboard/groovy/util/*.groovy ../breadboard/groovy/timer/*.groovy ../breadboard/groovy/actions/*.groovy ../breadboard/groovy/steps/*.groovy ../breadboard/groovy/chat/*.groovy ../breadboard/groovy/graph/*.groovy

rm -rf temp

# Generate frontend breadboard class documentation
npx typedoc --readme none --hideBreadcrumbs --hideInPageTOC --excludePrivate --excludeExternals --out temp --tsconfig "$BREADBOARD_SOURCE/frontend/tsconfig.json" "$BREADBOARD_SOURCE/frontend/core/breadboard.ts"

# Prepend ./snippets/core.md and then append concatenated typedoc output
npx concat-md --decrease-title-levels temp | (cat ./snippets/core.md && cat) | (cat ./snippets/generated.md && cat) > "$DOC_ROOT/api/frontend/core.md"

# Generate documentation for Vue components
node generate.vue.js