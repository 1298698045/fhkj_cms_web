var mixin = {
    data: function(){
        return {
            isArticle: false,
            hasRoute: this.hasOwnProperty('$route'),
            selectMenu: '',
            isGotop:false,
            qrCodeIdx: 0,
            dialogVisible:false,
            modalForm:{
                unitName: '',
                name: '',
                phone: ''
            },
            rules:{
                unitName:[
                    { required: true, message: '请输入单位名称', trigger: 'blur' }
                ],
                name:[
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                phone:[
                    { required: true, message: '请输入电话', trigger: 'blur' }
                ]
            }
        }
    },
    computed: {
        activeMenu: function() {
            return (this.selectMenu || this.typePath)
        }
    },
    mounted() {
        window.addEventListener('scroll',this.handleIsScroll,true)
    },
    methods: {
        push: function(path) {
            router.push({path: path})
        },
        gotoHref: function(url) {
            location.href = url
        },
        goto: function(url) {
            window.open(url)
        },
        onMenuMouseOver: function(menu) {
            this.selectMenu = menu
        },
        onMenuMouseLeave: function() {
            this.selectMenu = ''
        },
        handleTabQrCode(idx){
            this.qrCodeIdx = idx;
        },
        handleIsScroll() {
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            scrolltop > 500 ? (this.isGotop = true) : (this.isGotop = false);
        },
        toTop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果 
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                    clearInterval(timeTop);
                }
            }, 10);
        },
        // 弹框
        handleClose(){
            this.dialogVisible = false;
        },
        handleOpen(){
            this.dialogVisible = true;
        }
    }
}
