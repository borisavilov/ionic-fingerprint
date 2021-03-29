# Ionic Fingerprint AIO Authentication
Ionic 5|4 Fingerprint AIO Authentication for Android & iOS Example Application

## Description
In this Ionic 5/4 tutorial, we are going to implement Fingerprint Authentication Biometric Scanner in Ionic Angular application for Android and iOS platforms with an example application.

Most of the modern Android and iOS devices come with Fingerprint sensors to secure the device and its application using biometric credentials. These biometric details can be used by other applications in Android and iOS to provide an extra layer of security.

## Setup a new Ionic 5 Application

    $ ionic start ionic-fingerprint blank --type=angular

    $ cd ionic-fingerprint
    
    $ ionic cordova plugin add cordova-plugin-fingerprint-aio
    
    $ npm install @ionic-native/fingerprint-aio
    
    $ npm install @ionic-native/core

## Build android

    $ cordova platform add android

    $ cordova build android

    $ ionic cordova run android -l

## Reference

https://www.freakyjolly.com/ionic-fingerprint-aio-biometric-authentication-scanner-example-application/#Configuration_Options_Available





