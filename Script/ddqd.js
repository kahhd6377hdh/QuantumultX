/*
滴答 7.0.21
[rewrite_local]
^https://dida365.com/api/v2/user/status url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/ddqd.js

[mitm] 
hostname = dida365.com
*/

    let obj = JSON.parse($response.body);
    obj.proEndDate = 4100999042;
    obj.needSubscribe = false;
    obj.pro = true;
    obj.teamPro = true;
    obj.freeTrial = true;
    obj.activeTeamUser = true;
    obj.teamUser = true;
    obj.ds = true;
    $done({
        body: JSON.stringify(obj)
    });
