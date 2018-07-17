(function () {
    "use strict";

    // const wait = n => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //                 resolve();
    //         }, n);
    //         console.log(n + 'ms');
    //     });
    // };
    //
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


    // const arr = ["this", "is", "a", "test"];
    //
    // console.log(arr.map(w => w+"**"));


    const getLastEvent = username => {
        const token = 'ce230d49afd03d3261b8f283d610a9c0145cd9e9';
        const url = `https://api.github.com/users/${username}/events/public`;
        return fetch(url, {headers: {'Authorization': `token ${token}`}}).then(data => data.json());
    };
    getLastEvent('agtrevino')
        // .then(events => events.filter(event => event.type === "createEvent"))
        .then(data => {
            console.log(data[0].created_at)
        });



})();

// 2018-07-16T16:04:10Z

// Create a function that accepts a github username, and returns a promise
// that resolves with the date of the last commit that user made.
// Reference the github api documentation to achieve this.