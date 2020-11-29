_Originally posted to reddit in 2011. The pet feeder met it's demise and no longer used._

Here's a cat feeder I built over the last couple of months with no useful electronics experience (touched a breadboard in high school, 5 years ago and my day job as a web developer).

It uses an Arduino Uno and a DS1307 Real Time Clock to keep track of when the cats should be fed. The Arduino Uno is connected to a servo which rotates a canister to dispense the food.

For the wireless communication I used a Xbee Series 1 to communicate to a Linux home server running Java/PHP/mySQL backend. The server bridges the connection to an Android app where my girlfriend and I can view the status of the feeder and control feeder remotely from our phones.

I wouldn't say its very visually appealing (yet), and there's room for improvement. But here's some photos/videos of the feeder in operation:

-   [Video: Inside The Feeder](http://www.youtube.com/watch?v=n5w5ZimkuSk)
-   [Video: Cats being fed](http://www.youtube.com/watch?v=gBttrHxH0kI)
-   [Pictures of feeder](http://www.flickr.com/photos/vondruska/sets/72157626362700021/)
-   [Screenshots of Android app](http://imgur.com/a/BvRVi)