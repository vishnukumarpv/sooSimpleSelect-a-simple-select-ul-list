(function ($) {
    $.fn.kadaSelector = function () {
        // var option_labls = [];
        // var option_vals = [];
        var templ = [];
        if ($(this).find('option').length < 1) {
            return false;
        }
        $(this).css('display', 'none');

        $(this).find('option').each(function (k, el) {
            // option_labls.push($(el).text());
            // option_vals.push($(el).value());

            var label = $(el).text(),
                value = $(el).val();
            templ.push([
                `<li data-option="${value}">${label}</li>`
            ]);
        })
        var main_template = `<div class="filter-wrp" id="filter_dropdown"><div class="overlay" id="filter_dropdown_overlay"></div><div id="dropdown_label" class="d-xs-none">Choose option</div><span id="dropdown_label_mob" class="icon icon-icons-21 dropdown_mob d-xs-only"></span><ul>${ templ.join('') }</ul></div>`;
        $(this).parent().append(main_template);

        var _this = $(this).parent().find('#filter_dropdown');
        var parent = $(this);

        var dropdown_ul = _this.find('ul');
        var dropdown_overlay = _this.find('#filter_dropdown_overlay');
        var dropdown_label = _this.find('#dropdown_label');

        var toggler = function () {
            dropdown_ul.toggleClass('unhide');
            dropdown_overlay.toggleClass('collapsed');
        }

        dropdown_label.on('click', function () {
            toggler();
        })

        dropdown_ul.on('click', 'li', function () {
            dropdown_label.text($(this).text());
            toggler();
            parent.val($(this).val()).change();
        })

        dropdown_overlay.on('click', toggler)

        return this;
    }
})(jQuery);