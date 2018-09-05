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

echo -e "========================="
echo -e "Updated Java Example"
echo -e "========================="
cd study/java/java-example
git pull
git add .
git commit -m "$msg"
git push
cd ~/git/retrospective-diary

echo -e "========================="
echo -e "Updated Study/Algorithm"
echo -e "========================="
cd study/algorithm
git pull
git add .
git commit -m "$msg"
git push
cd ~/git/retrospective-diary

echo -e "========================="
echo -e "Updated Python Example"
echo -e "========================="
cd study/python/python-example
git pull
git add .
git commit -m "$msg"
git push
cd ~/git/retrospective-diary

echo -e "========================="
echo -e "Updated Vue Example"
echo -e "========================="
cd study/vue/vue-example
git pull
git add .
git commit -m "$msg"
git push
cd ~/git/retrospective-diary

echo -e "========================="
echo -e "Updated Company Contents"
echo -e "========================="
cd company
git pull
git add .
git commit -m "$msg"
git push
cd ~/git/retrospective-diary

echo -e "========================="
echo -e "Updated Devops/aws"
echo -e "========================="
cd devops/aws
git pull
git add .
git commit -m "$msg"
git push
cd ~/git/retrospective-diary

echo -e "========================="
echo -e "Updated Devops/docker-example"
echo -e "========================="
cd devops/aws
git pull
git add .
git commit -m "$msg"
git push
cd ~/git/retrospective-diary

echo -e "========================="
echo -e "Updated basic-frontend-knowledge"
echo -e "========================="
cd study/basic-frontend-knowledge
git pull
git add .
git commit -m "$msg"
git push
cd ~/git/retrospective-diary

echo -e "========================="
echo -e "Updated Retrospective Project"
echo -e "========================="
git pull
git add .
git commit -m "$msg"
git push
