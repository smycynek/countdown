#! /bin/bash
yarn build
rm -rf countdown1
rm countdown1.zip
mv build countdown1
zip -r countdown1.zip countdown1