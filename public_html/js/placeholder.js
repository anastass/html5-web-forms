function makePlaceholders() {
    // alert('makePlaceholders');
    $inputs = $("input[type=text],input[type=email]");
    $inputs.each(function() {
            var $this = jQuery(this);
            this.placeholderVal = $this.attr('placeholder');
            $this.val(this.placeholderVal);
        })
        .bind("focus", function() {
            var $this = jQuery(this);
            var val = $.trim($this.val());
            if (val == this.placeholderVal || val == "")
                $this.val("");
        })
        .bind("blur", function() {
            var $this = jQuery(this);
            var val = $.trim($this.val());
            if (val == this.placeholderVal || val == "")
                $this.val(this.placeholderVal);
        });

}

