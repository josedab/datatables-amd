define([
  'jquery',
  'lodash',
  'backbone',
  'libs/datatable/DT_bootstrap'
], function($, _, Backbone, dtb){
  var DatatableHander = {
      renderDataTable : function (configuration) {
      
          var id = '#' + configuration.id;
      
          // begin datatable mapping
          $(id).dataTable({
              "aoColumns": [
                { "bSortable": false },
                null,
                { "bSortable": false },
                null,
                { "bSortable": false },
                { "bSortable": false }
              ],
              "aLengthMenu": [
                  [5, 10, 20, 50, -1],
                  [5, 10, 20, 50, "All"] // change per page values here
              ],
              // set the initial value
              "iDisplayLength": 5,
              "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
              "sPaginationType": "bootstrap",
              "oLanguage": {
                  "sLengthMenu": "_MENU_ records per page",
                  "oPaginate": {
                      "sPrevious": "Prev",
                      "sNext": "Next"
                  }
              },
              "aoColumnDefs": [{
                      'bSortable': false,
                      'aTargets': [0]
                  }
              ]
          });
    
          $(id + ' .group-checkable').change(function () {
              var set = $(this).attr("data-set");
              var checked = $(this).is(":checked");
              $(set).each(function () {
                  if (checked) {
                      $(this).attr("checked", true);
                  } else {
                      $(this).attr("checked", false);
                  }
              });
              $.uniform.update(set);
          });
    
          $(id + '_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
          $(id + '_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown

      
    }
  };
  
  return DatatableHander;
});
