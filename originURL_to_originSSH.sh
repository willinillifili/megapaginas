#!/bin/bash

read -p "repo name: " repoName

#test remote access 
ssh -T git@github.com

#
git remote set-url origin git@github.com:willinillifili/"$repoName"
