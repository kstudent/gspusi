# gspusi

## What is *gspusi*?

*gspusi* (**G**spusi **S**ubscribes **P**eople to **USI**) is a script that helps you get placed in a [USI course](https://sportinstitut.uni-graz.at/de/usi-kurssuche) by notifying you once there is such a free place. It works like a subscription: *gspusi* will check the Online Course Registration periodically to see if theres a free place in the courses you are interested in. If so, *gspusi* will send you a notification email to your Gmail account. With this notification you'll be the first one to know when there is an open place. The *gspusi* script runs on a Google App Script server, so you dont need to let your PC run day and night.

## What is *gspusi* not? 

*gspusi* wont order courses on your behalf. It will tell you if there are open places left in a course. *gspusi* does not hack any server.

## What do I need?

- a google account
- a myusi account
- 10 minutes for the setup
- (almost) no programming skills ;)
- a little bit of luck

## How do I set it up?

1. Open [Google App Scripts](https://www.google.com/script/start) and press `start scripting`.
2. Replace the code there with the content of [gspusi.js](https://raw.githubusercontent.com/kstudent/gspusi/master/gspusi.js).
3. In line 26, replace `<term>` with the search keyword you would use to [find your course](https://usionline.uni-graz.at/usiweb/myusi.kurse?suche_in=go&sem_id_in=2016W&sp_id_in=&kursbez_in=volleyball+fortg.&kursleiter_in=&kursnr_in=&wt_in=&uhrzeit_von_in=&uhrzeit_bis_in=&suche_kursstaette_id_in=)  (e.g. `volleyball fortg.`).
4. Store the project (Ctrl-s). Call it 'what you want'.
5. Add a trigger by clicking on `Resources` / `All your triggers`. 
6. Click on `No triggers set up. Click here to add one now.`.
7. Select how frequent you want *gspusi* to check for places.
8. Confirm dialogs. You will need to give *gspusi* the permission to send you an email and to make requests to the USI Online Server.

**Once you are done, please disable the script by deleting the trigger.**

Optional: Test if your script is working and you are receiving emails by setting `false` to `true` in line 30.  

## I'm a hacker if I use *gspusi*?

No. Use at your own risk.

## Does this really work?

I tried it twice and succeded twice. Keep in mind that it really depends on someone else to unregister off that course. Your best bet to get a placement is near the unregister deadline mid october.

## Why did you do this?

USI course placement can be very frustrating. I would prefer a mechanism like a subscription queue, where people would register and move up on free places. Since there is no such thing yet, I wrote this script as a "replacement". 

Feel free to share! Final remark: If you already got a placement somehow but are not sure about attending, please consider unregistering so that others get the place! 

Cheers, kstudent
