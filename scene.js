riot.tag2('scene', '<div if="{show}"> <yield></yield> </div>', '', '', function(opts) {
    if (opts.start) {
      this.show = false;
      setTimeout(() => {
        this.show = true;
        this.update();
      }, opts.start);
    }
    else this.show=true;
    if (opts.timeout) {
      setTimeout(() => {
        this.unmount();
        this.update();
      }, opts.timeout);
    }
});
