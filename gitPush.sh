# Push & Deploy of artifact
msg="[Hugo]Rebuilding site - `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

# Push & Deploy of original
git add .
git commit -m "$msg"
git push
echo -e "========================="
echo -e "Updated Original Blog"
echo -e "========================="

# Build
hugo
cd docs

git add .
git commit -m "$msg"
git push -f
echo -e "========================="
echo -e "Updated Github.io"
echo -e "========================="
