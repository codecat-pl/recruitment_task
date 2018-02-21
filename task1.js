/***
 * Function for task 1
 * Solution: depth-first tree search as recursive function
 * Optimization 1: Ignore all branches which don't have chance to be better then current best
 * Optimization 2: Ignore everything else if found solution have length of input length
 * @param tab
 * @returns []
 */

function magick(tab){
    const limit = tab.length;
    if(!limit) return [];
    let max_level = 0;
    let best = null;
    work(tab);
    return best;

    function work(tab, ret=[], level=0){
        if(max_level === limit) return;
        if(tab.length === 0){
            if(level > max_level){
                max_level = level;
                best = ret;
                return;
            }
        }
        if(tab.length+ ret.length < max_level) return;
        const last = ret[ret.length-1];
        for (const [index, value] of tab.entries()) {
            if(value<=last) continue;
            const next = ret.slice();
            next.push(value);
            work(tab.slice().splice(index+1), next, level+1)
        }
    }
}

module.exports = magick;