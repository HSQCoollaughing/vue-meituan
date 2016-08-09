export default function(router) {
    router.map({
        '*': {
            component(resolve) {
                require(['../views/welcome'], resolve);
            }
        },
        '/': {
            component(resolve) {
                require(['../views/welcome'], resolve);
            }
        },
        '/index': {
            'name': 'index',
            'component': function(resolve) {
                require(['../views/index'], resolve);
            }
        },
        '/list': {
            'name': 'list',
            'component': function(resolve) {
                require(['../views/list'], resolve);
            }
        }
    });
    router.redirect({});
    router.beforeEach(transition => {
        console.log('开始切换之前: ', transition);
        if (transition.to.path.indexOf('/user') > -1) {
            router.go('signup');
        } else {
            transition.next();
        }
    });
    router.afterEach(transition => {
        // document.body.scrollTop = 0;
        console.log('成功浏览到: ', transition);
    });
}
