#!/usr/local/bin/fish

set remote "rg@weekendwarrior.golf"
set path "/var/www/weekendwarrior.golf"

set branch (git rev-parse --abbrev-ref HEAD)
set revision (git rev-parse --short HEAD)

echo ----------
echo Deploying:
echo Branch: $branch
echo Revision: $revision
echo Remote: $remote
echo ----------

switch $branch
case master
  echo git push
  git push
  and echo ----------
  and echo git checkout production -f
  and git checkout production -f
  and echo ----------
  and echo git pull origin master
  and git pull origin master
  and echo ----------
  and echo git push
  and git push
  and echo ----------
  and echo scp remote/install.sh $remote:$path
  and scp remote/install.sh $remote:$path
  and echo ----------
  and echo ssh $remote "$path/install.sh production"
  and ssh $remote "$path/install.sh production"
  and echo ----------
  and echo git checkout master
  and git checkout master
  and echo ----------
  and echo Local: deploy complete!
  and echo ----------
  or echo Aborting - Something went wrong...
case '*'
    echo Aborting - Only the branch master is deployable.
    echo ----------
end
