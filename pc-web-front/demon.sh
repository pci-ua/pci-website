#!/bin/bash
containerName=$( docker container ls --format "{{ .Names }}" | grep "pci-website" | head -n 1 )
while true
do
        if (( $(find . -mmin -1 | wc -l) != "0" ))
        then
                echo "Build!"
                docker container exec $containerName npm run-script build
        fi
        sleep 10
done
