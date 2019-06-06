$(function () {
    // select2 init
    $("select[data-xselect2='yes']").each(function () {
        var select2 = $(this);

        if (select2.prop('style').width === '') {
            select2.css('width', '100%');
        }

        // #31500 - helps to make the portal more accessible for users who use a screen reader.
        if (typeof feature_accessibility_enabled === undefined) {
            select2.select2();
        } else {
            if (typeof feature_accessibility_enabled !== "undefined") {
                select2.select2({
                    minimumResultsForSearch: -1
                });
            } else {
                select2.select2();
            }
        }
    });
});