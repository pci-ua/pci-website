#!/bin/sh

function ran() {
	touch /tmp/auto-build-date
	npm run-script build
}
alreadyran=$(find /tmp/auto-build-date -mmin -1 2> /dev/null | wc -l)
if [[ "$alreadyran" == "0" ]]
then

	event="$1"

	case "$event" in
	 w) ran;;
	 d) ran;;
	 n) ran;;
	 c) ran;;
	 e) ran;;
	esac
fi