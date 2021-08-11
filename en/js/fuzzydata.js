$(document).ready(function () {indexDict['en'] = [{ "title" : "Scheduling builds ", 
"url" : "scheduling-builds.html", 
"breadcrumbs" : "Remote access - Bitrise Docs \/ Scheduling builds ", 
"snippet" : "Scheduling a build How to schedule a build on Bitrise: Go to your Dashboard and click on the project whose build you want to schedule. Click on Start\/Schedule a Build . In the Build configuration pop-up window, toggle the switch to the right to enable Schedule this build feature. Set the hour and mi...", 
"body" : "Scheduling a build How to schedule a build on Bitrise: Go to your Dashboard and click on the project whose build you want to schedule. Click on Start\/Schedule a Build . In the Build configuration pop-up window, toggle the switch to the right to enable Schedule this build feature. Set the hour and minute in the HH\/MM field. On the timeline, select the day(s) when you want your build to run. Check and fill out the rest of the input fields if necessary. You can schedule your build in the advanced version of the Build configuration window too. Click Schedule Build at the bottom of the pop-up window. Conflicting input Using the Advanced option, you have access to additional options for your build: you can enter a git tag or a commit hash. If, for example, you specify a commit hash, you will notice that the Git Tag option disappears. This ensures that you cannot enter conflicting input values. If you specify a commit hash and a branch where that commit does not exist (for example, master ), Bitrise will find the branch that does have the given commit (for example, testing ) and run a build with that branch. That’s it! Now you can enjoy the comfort of your automated build! " }, 
{ "title" : "Remote access ", 
"url" : "remote-access.html", 
"breadcrumbs" : "Remote access - Bitrise Docs \/ Remote access ", 
"snippet" : "Remote access allows users to connect to their build’s virtual machines via SSH or a screenshare app. A failed build can be rebuilt with remote access enabled to make troubleshooting a lot easier - for example, if the build logs don’t provide enough information about the error. Users who have the Te...", 
"body" : "Remote access allows users to connect to their build’s virtual machines via SSH or a screenshare app. A failed build can be rebuilt with remote access enabled to make troubleshooting a lot easier - for example, if the build logs don’t provide enough information about the error. Users who have the Testers\/QA roles on the app CANNOT use remote access. There are two ways to use remote access on our build machines: SSH : this is available for both Linux\/Docker based and MacOS machines. Screenshare : this is only available for MacOS machines. It uses the VNC system. With either method, you can access the build machine remotely during the build and for 10 minutes after the build is finished. " }, 
{ "title" : "Remote access with SSH ", 
"url" : "remote-access/remote-access-with-ssh.html", 
"breadcrumbs" : "Remote access - Bitrise Docs \/ Remote access \/ Remote access with SSH ", 
"snippet" : "...", 
"body" : "" }, 
{ "title" : "Remote access with screenshare ", 
"url" : "remote-access/remote-access-with-screenshare.html", 
"breadcrumbs" : "Remote access - Bitrise Docs \/ Remote access \/ Remote access with screenshare ", 
"snippet" : "...", 
"body" : "" }
]
$(document).trigger('search.ready');
});