#! /bin/bash
yarn build
rm -rf countdown
rm countdown.zip
mv build countdown
zip -r countdown.zip countdown