riot.tag2('lazy-content', '<yield></yield>', '', '', function(opts) {
this.on('mount', () => {
    const $ = jQuery;
    const showRoot = () => {
        console.log($(this.root).offset().top, $(window).scrollTop() + $(window).height());
        if ($(this.root).offset().top <= $(window).scrollTop() + $(window).height()) {
            $(this.root).removeClass('hidden');
            $(window).off('scroll', showRoot);
        }
    };
    const throttle = (f, t) => {
        let before = new Date();
        return () => {
            if (new Date() - before >= t) {
                before = new Date();
                f();
            }
        }
    };
    $(this.root).addClass('hidden');
    setTimeout(showRoot, 0);
    $(window).on('scroll', throttle(showRoot, 1000/32));
});
});