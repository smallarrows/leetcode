/**
 * 懒汉练习题
 * 目标：
 * LazyMan('Hank') ==> 你好，我是Hank
 * LazyMan('Hank').sleep(10).eat('lunch') ==>  你好，我是Hank
 *                                             (沉默十秒)
 *                                             我醒了，我刚睡了10秒
 *                                             吃午餐
 * LazyMan('Hank').eat('lunch').eat('supper') ==>  你好，我是Hank
 *                                                 吃午餐
 *                                                 吃晚餐
 * LazyMan('Hank').sleepFirst(5).eat('supper') ==>  (沉默五秒)
 *                                                  我醒了，我刚睡了5秒
 *                                                  我是Hank
 *                                                  吃晚餐
 * @param {*} name 
 */
function LazyMan(name){
    const lazyMan = {};
    lazyMan.queue = [['init',arguments]];
    lazyMan.fns = {
        init : async function(name){
            console.log('你好，我是'+name);
        },
        sleep : async function(timeout){
            function timeoutFn(ms) {
                return new Promise((resolve) => {
                  setTimeout(resolve, ms);
                });
            }
            await timeoutFn(timeout * 1000);
            console.log(`(沉默了${timeout}秒)`);
            console.log(`我醒了，我刚睡了${timeout}秒`);
        },
        eat : async function(food){
            switch(food){
                case 'lunch':
                    console.log(`吃午餐`);
                    break;
                case 'supper':
                    console.log(`吃晚餐`);
            }
        }
    };
    lazyMan.run = function(){
        const that = this;
        setTimeout(async function(){
            for (let i = 0; i < that.queue.length; i++) {
                const fn = that.queue[i];
                await that.fns[fn[0]](...fn[1]);
            }
        },0);
        return this;
    };
    lazyMan.sleep = function(timeout){
        this.queue.push(['sleep',arguments]);
        return this;
    };
    lazyMan.sleepFirst = function(timeout){
        this.queue.unshift(['sleep',arguments]);
        return this;
    };
    lazyMan.eat = function(food){
        this.queue.push(['eat',arguments]);
        return this;
    };
    
    return lazyMan.run();
}

LazyMan('Hank').sleepFirst(5).eat('supper').sleep(2).sleepFirst(3);
