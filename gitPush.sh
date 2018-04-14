

# Push & Deploy of artifact
msg="[Study] Updated Today I lean contents"
if [ $# -eq 1 ]
  then msg="$1"
fi

cd study/java/java-example
git add .
git commit -m "$msg"
git push
echo -e "========================="
echo -e "Updated Java Example"
echo -e "========================="

cd ~/git/retrospective-diary
git add .
git commit -m "$msg"
git push
echo -e "========================="
echo -e "Updated Retrospective Project"
echo -e "========================="