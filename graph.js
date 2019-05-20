// Load the Visualization API and the corechart package.
google.charts.load("current", { packages: ["corechart"] });
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the ___ chart, passes in the data and draws it.
function drawChart() {
  // Create the data table.
  $.get("data_for_graph1.csv", function(csvString) {
    var arrayData = $.csv.toArrays(csvString, {
      onParseValue: $.csv.hooks.castToScalar
    });
    var data = google.visualization.arrayToDataTable(arrayData);

    var view = new google.visualization.DataView(data);
    // Set chart options
    var options = {
      title: "งบประมาณ 11 หมวดหมู่และงบประมาณทั้งหมดประจำปี",
      width: 800,
      height: 400,
      legend: { position: "right", maxLines: 3 },
      vAxis: {
        minValue: 0,
        title: "ล้านบาท"
      },
      hAxis: {
        format: "####",
        title: "ปี (ค.ศ.)"
      }
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(
      document.getElementById("chart1")
    );
    chart.draw(view, options);

    document.getElementById("cb-group1").addEventListener("click", function() {
      var select = [0];
      if ($("#cb-11").is(":checked")) {
        select.push(1);
      }
      if ($("#cb-all").is(":checked")) {
        select.push(2);
      }

      view = new google.visualization.DataView(data);
      view.setColumns(select);
      chart.draw(view, options);
    });
  });

  // ***********************************************************************************
  // Create the data table.
  $.get("data_for_graph2.csv", function(csvString) {
    var arrayData = $.csv.toArrays(csvString, {
      onParseValue: $.csv.hooks.castToScalar
    });
    var data = google.visualization.arrayToDataTable(arrayData);

    var view = new google.visualization.DataView(data);
    // Set chart options
    var options = {
      title: "Time Series",
      width: 800,
      height: 400,
      legend: { position: "right", maxLines: 3 },
      vAxis: {
        minValue: 0,
        title: "Million Baht"
      },
      hAxis: {
        format: "####",
        title: "Year"
      }
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(
      document.getElementById("chart2")
    );
    chart.draw(view, options);

    document.getElementById("bt-group2").addEventListener("click", function() {
      var select = [0];

      $("#cb-total").prop("checked", true);
      $("#cb-2y").prop("checked", true);
      $("#cb-3y").prop("checked", true);
      $("#cb-4y").prop("checked", true);
      $("#cb-5y").prop("checked", true);
      $("#cb-2yct").prop("checked", true);

      select.push(1);
      select.push(2);
      select.push(3);
      select.push(4);
      select.push(5);
      select.push(6);

      view = new google.visualization.DataView(data);
      view.setColumns(select);
      chart.draw(view, options);
    });

    document.getElementById("cb-group2").addEventListener("click", function() {
      var select = [0];
      if ($("#cb-total").is(":checked")) {
        select.push(1);
      }
      if ($("#cb-2y").is(":checked")) {
        select.push(2);
      }
      if ($("#cb-3y").is(":checked")) {
        select.push(3);
      }
      if ($("#cb-4y").is(":checked")) {
        select.push(4);
      }
      if ($("#cb-5y").is(":checked")) {
        select.push(5);
      }
      if ($("#cb-2yct").is(":checked")) {
        select.push(6);
      }
      view = new google.visualization.DataView(data);
      view.setColumns(select);
      chart.draw(view, options);
    });
  });

  // ***********************************************************************************
  $.get("data_for_graph3.csv", function(csvString) {
    var arrayData = $.csv.toArrays(csvString, {
      onParseValue: $.csv.hooks.castToScalar
    });
    var data = google.visualization.arrayToDataTable(arrayData);

    var view = new google.visualization.DataView(data);
    // Set chart options
    var options = {
      title: "Predict vs Total Budget",
      width: 800,
      height: 400,
      legend: { position: "right", maxLines: 3 },
      vAxis: {
        minValue: 0,
        title: "Million Baht"
      },
      hAxis: {
        format: "####",
        title: "Year"
      }
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(
      document.getElementById("chart3")
    );
    chart.draw(view, options);
  });

  // ***********************************************************************************
  $.get("data_for_graph4.csv", function(csvString) {
    var arrayData = $.csv.toArrays(csvString, {
      onParseValue: $.csv.hooks.castToScalar
    });
    var data = google.visualization.arrayToDataTable(arrayData);

    var view = new google.visualization.DataView(data);
    // Set chart options
    var options = {
      title: "Average budget vs Department",
      width: 800,
      height: 500,
      legend: { position: "right" },
      vAxis: {
        title: "Department"
      },
      hAxis: {
        format: "####",
        title: "Baht"
      }
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(
      document.getElementById("chart4")
    );
    chart.draw(view, options);
  });
}
