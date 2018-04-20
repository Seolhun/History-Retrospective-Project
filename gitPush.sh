# [submodule "study/vue/kr-study-incheon"]
#   path = study/vue/kr-study-incheon
#   url = https://github.com/Seolhun/kr-study-incheon.git
# [submodule "study/vue/vue-example"]
#   path = study/vue/vue-example
#   url = https://github.com/Seolhun/vue-example.git
# [submodule "company"]
#   path = company
#   url = https://github.com/Seolhun/company.git
# [submodule "devops/aws"]
#   path = devops/aws
#   url = https://github.com/Seolhun/aws.git
# [submodule "devops/docker-example"]
#   path = devops/docker
#   url = https://github.com/Seolhun/docker-example.git
# [submodule "study/java/java-example"]
#   path = study/java/java-example
#   url = https://github.com/Seolhun/java-example.git
# [submodule "study/python/python-example"]
#   path = study/python/python-example
#   url = https://github.com/Seolhun/python-example.git

# Push & Deploy of artifact
msg="[Study] Updated Today I lean contents"
if [ $# -eq 1 ]
  then msg="$1"
fi

if git diff-index --quiet HEAD --; then
  echo -e "========================="
  echo -e "No changed Java Example"
  echo -e "========================="
else
  cd study/java/java-example
  git add .
  git commit -m "$msg"
  git push
  echo -e "========================="
  echo -e "Updated Java Example"
  echo -e "========================="
  cd ~/git/retrospective-diary
fi


cd study/python/python-example
git add .
git commit -m "$msg"
git push
echo -e "========================="
echo -e "Updated Python Example"
echo -e "========================="
cd ~/git/retrospective-diary

cd study/vue/vue-example
git add .
git commit -m "$msg"
git push
echo -e "========================="
echo -e "Updated Vue Example"
echo -e "========================="
cd ~/git/retrospective-diary

cd company
git add .
git commit -m "$msg"
git push
echo -e "========================="
echo -e "Updated Company Contents"
echo -e "========================="
cd ~/git/retrospective-diary

cd devops/aws
git add .
git commit -m "$msg"
git push
echo -e "========================="
echo -e "Updated Devops/aws"
echo -e "========================="
cd ~/git/retrospective-diary

cd devops/aws
git add .
git commit -m "$msg"
git push
echo -e "========================="
echo -e "Updated Devops/docker-example"
echo -e "========================="
cd ~/git/retrospective-diary

git add .
git commit -m "$msg"
git push
echo -e "========================="
echo -e "Updated Retrospective Project"
echo -e "========================="