riot.tag2('scene', '<div show="{show}"> <yield></yield> </div>', '', '', function(opts) {
    if (opts.start) this.show=false;
    else this.show=true;
    if (opts.timeout) {
      setTimeout(() => {
        this.unmount();
      }, opts.timeout);
    }
});
