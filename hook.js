 const ONLY_TEXT_IN_NAVIGATION = [
    {
        // 关闭导航栏文字
        matcher: 'main-navigation-menu-item',
        mixin: (Ember, args) => ({
            shouldDisplayTextBelowIcons: false,
        })
    }
]   

export default [
    ...ONLY_TEXT_IN_NAVIGATION,
]
