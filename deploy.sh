#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e

# 取得目前專案的遠端分支
githubUrl=$(git config --get remote.origin.url)

# 打包
npm run build
# 移動至到打包後的dist目錄 
cd dist

git init # 因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git add -A
git commit -m "update `date +'%Y-%m-%d %H:%M:%S'`";
# 部署到 git@github.com:HaroldZhen/hakuna-island.git 分支為 gh-pages
# git push -f git@github.com:HaroldZhen/hakuna-island.git master:gh-pages
git push -f $githubUrl master:gh-pages

cd -