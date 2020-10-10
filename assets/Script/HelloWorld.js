cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;

        let showW = 2001;
        let showH = 1125;

        let size = cc.view.getVisibleSize();

        let fixed = cc.ResolutionPolicy.FIXED_HEIGHT;
        if (size.width < showW) {
            let sw = size.width / showW;
            let sh = size.height / showH;

            let cvs = this.node.getComponent(cc.Canvas);

            if (sw < sh) {
                fixed = cc.ResolutionPolicy.FIXED_WIDTH;
                cvs.fitHeight = false;
                cvs.fitWidth = true;
            }


            cc.view.setDesignResolutionSize(showW, showH, fixed);
        }
    },

    // called every frame
    update: function (dt) {

    },
});
