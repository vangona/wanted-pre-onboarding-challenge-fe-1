#!/bin/zsh
i=1
for file in ./*
do
  mv $file bg${i}.jpg
  echo $i
  ((i++))
done
