#!/usr/bin/env sh

# abort on errors
set -e

# build
rm -rf dist

git add -A
git commit -m 'deploy github pages'
git branch -D gh-pages
git branch gh-pages
git push origin master
npm run build

# navigate into the build output directory
cd dist
git remote add origin https://github.com/axrorbekdf/ozbektili-project-run.git

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy background'
 
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:axrorbekdf/axrorbekdf.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:axrorbekdf/ozbektili-project.git master:gh-pages
git push -f git@github.com/axrorbekdf/ozbektili-project-run.git master

cd -