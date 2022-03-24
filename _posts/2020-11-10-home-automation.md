---
tags: home-automation iot
---

There is a decent amount of home automation running at the Vondruska house. I've gotten quite a few inquries on everything that is running. I try to keep this updated as much as possible.
<!--more-->

## Goal
No 100% reliance on cloud services unless absolutely necessary. That allows me to tolerate my home internet connection going down, [a cloud provider](https://status.cloud.google.com/incident/cloud-networking/19009) [having a bad day](https://aws.amazon.com/message/11201/), some sort of service outage or the manufacturer deciding to end support for the product.

That being said, I don't think the cloud is a bad thing. It typically provides convenience and many times, improves accessibility. During an outage, it could be more challenging to complete a task (i.e. asking a Google Home to do something) but still able to execute it via a web interface (i.e. Home Assistant)

## Devices used

##### Note: this is likely not an exhaustive list

1. [Philips Hue](https://www.meethue.com)
1. [Ecobee 3](https://www.ecobee.com) with multiple [room sensors](https://www.ecobee.com/room-sensors/)
1. [Google Home and Google Home Mini](https://www.google.com/home)
1. [Aeotec Z-Stick Gen5](https://aeotec.com/z-wave-usb-stick)
1. Aeotec Z-Wave dry contact sensor
1. Various Z-Wave door sensor(s)
1. [Raspberry Pi 3 B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/)
1. [~~RTL-SDR Blog V3 R820T2 RTL2832U~~](https://www.amazon.com/gp/product/B011HVUEME) *currently unused*
1. [Tempy](#tempy)
1. [OpenGarage](https://opengarage.io/)
1. GE Z-Wave Dimmer Switch
1. GE Z-Wave Switch
1. [Sonoff S20](https://www.itead.cc/smart-socket.html) flashed with [Sonoff-Tasmota](https://github.com/arendst/Sonoff-Tasmota)
1. [WiZ Light Bulbs](https://www.wizconnected.com/en-US/consumer/)
1. Unifi Protect G4 Doorbell

## Services used

Here are the services (and some hardware) actively running to make it all work:

### Docker

Everything in this setup runs in a container. Hosted on a Raspberry Pi 3B+.

### [Home Assistant](https://home-assistant.io)

Home Assistant is the central point where all IoT endpoints integrate with. Essentially the IoT hub.

The configuration used to be under source control and deployed via GitHub Actions. Home Assistant has been [migrating towards UI Configuration](https://www.home-assistant.io/blog/2020/04/14/the-future-of-yaml/) making it harder to merry the two ecosystems together. I rarely modify yaml files now.

### [Mostquito](https://mosquitto.org/)

[MQTT](http://mqtt.org) broker. This allows many devices like the 2GIG sensors, Sonoff outlets and freezer temperature to push messages to subscribers, like Home Assistant, in a decoupled way.

### [Tempy](https://github.com/vondruska/tempy)

Tempy is a temperature monitor that I built using an ESP8266 and a DS18B20 temperature gauge. Reports data via MQTT over WiFi.

Read about that project at [https://github.com/vondruska/tempy](https://github.com/vondruska/tempy).

_Last updated: {% last_modified_at %}_
