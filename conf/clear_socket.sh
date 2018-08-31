#!/bin/bash

file="/home/interdev/app/backend/daphne.sock.lock"

if [ -f $file ] ; then
    rm $file
fi

