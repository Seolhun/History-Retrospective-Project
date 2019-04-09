# Push & Deploy of artifact
msg="Rebuilding site - `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

# Build
cd website/
yarn build
cd build/seolhun.github.io
git init
git remote add origin https://github.com/Seolhun/seolhun.github.io.git
git add .
git commit -m "$msg"
git push origin master -f
echo -e "========================="
echo -e "Updated Github.io"
echo -e "========================="


# Push & Deploy of original
cd ../../../
git add .
git commit -m "$msg"
git push origin master
echo -e "========================="
echo -e "Updated Original Blog"
echo -e "========================="
