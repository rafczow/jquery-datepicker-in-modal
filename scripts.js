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
                beforeShowDay: function(date){
                    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
                    return [ array.indexOf(string) == -1 ];
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
        position: { my: 'center top', at: 'center bottom', of: jQuery('body')},
    });

    jQuery('#datepicker-dummy').on('click', function() {
        jQuery('#datepicker-wrapper').dialog('open');
    });
});