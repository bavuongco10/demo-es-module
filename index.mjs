import sleep from 'sleep-promise';

import {add} from './lib.mjs';

(async function() {
    for(let i= 0; i< 10; i++) {
        await sleep(1000);
        console.log(i);
    }
})();
