
console.log('In React script...run sub...');
window.FindReact = function (el) {

    for (const key in el) {

        if (key.startsWith('__reactFiber')) {
            const fiberNode = el[key];
            var user = fiberNode.memoizedProps.children[1]._owner;
            console.log(user.key);
            console.log(user.memoizedState.contactData.lastActiveTS);
            console.log(user.memoizedState.contactData.isUserActive);
            var last = user.memoizedState.contactData.lastActiveTS;
            var active = user.memoizedState.contactData.isUserActive;
            var ts = Math.round((new Date()).getTime() / 1000)
            var jsonium = {
                "t": ts,
                "lastActive": last,
                "Active": active
            }
           
        }
        return JSON.stringify(jsonium);
    }
    return null;
};




var targetEl = document.getElementsByClassName('_1t2u  ')[0];
var data = FindReact(targetEl);


