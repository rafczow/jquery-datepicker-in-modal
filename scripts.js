jQuery(document).ready(function() {
    jQuery('#datepicker').datepicker(
        jQuery.extend(
            {
                minDate: 0,
                maxDate: '+365',
                onSelect: function(dateText, date) {
                    jQuery('#datepicker-dummy').val(dateText);
                    jQuery('#datepicker-wrapper').dialog('close');
                },
                dateFormat: 'dd.mm.yy',
                altField: '#datepicker-date'
            }
        )
    );

    jQuery('#datepicker-wrapper').dialog({
        minWidth: 220,
        minHeight: 240,
        width: 'auto',
        height: 'auto',
        autoOpen: false,
        modal: true,
        draggable: false,
        resizable: false,
    });

    jQuery('#datepicker-dummy').on('click', function() {
        jQuery('#datepicker-wrapper').dialog('open');
    });
});