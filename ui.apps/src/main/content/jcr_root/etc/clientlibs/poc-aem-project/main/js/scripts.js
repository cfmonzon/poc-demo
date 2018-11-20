$(function() {
   $(".select").click( function(e) {
	    e.preventDefault();
		$("#collapse").hide();
		$(".navigation").css("width","10%");
		$(".page-container").css("margin-left","8%");
		$("#collapse-open").show();
		
		$(".contact").addClass("us");
		
		$(".big-box").css("width","80%");
		
		
   });
    $("#collapse-open").click( function(e) {
		e.preventDefault();
		$("#collapse").show();
		$(".navigation").css("width","20%");
		$(".page-container").css("margin-left","20%");
		$("#collapse-open").hide();

		$(".contact").removeClass("us");

		$(".big-box").css("width","80%");
   });
   
   try {
    //WidgetChart 5
    var ctx = document.getElementById("widgetChart1");
    if (ctx) {
      ctx.height = 160;
	        ctx.width = 400;
	  var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', ],
          datasets: [
            {
              label: "Profit",
              data: [10, 20, 30, 40, 50, 60],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "#ccc",
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 1,
			  barThickness : 20
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }
   
     try {
    //WidgetChart 1
    var ctx = document.getElementById("widgetChart2");
    if (ctx) {
      ctx.height = 160;
	        ctx.width = 400;
	  var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', ],
          datasets: [
            {
              label: "Profit",
              data: [30, 20, 10, 40, 70, 60],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "#ccc",
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 1,
			  barThickness : 20
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }
  
       try {
    //WidgetChart 1
    var ctx = document.getElementById("widgetChart3");
    if (ctx) {
      ctx.height = 160;
	        ctx.width = 400;
	  var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', ],
          datasets: [
            {
              label: "Profit",
              data: [40, 10, 30, 20, 70, 60],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "#ccc",
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 1,
			  barThickness : 20
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }
  
  
       try {
    //WidgetChart 1
    var ctx = document.getElementById("widgetChart4");
    if (ctx) {
      ctx.height = 160;
	        ctx.width = 400;
	  var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', ],
          datasets: [
            {
              label: "Profit",
              data: [10, 80, 20, 70, 70, 60],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "#ccc",
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 1,
			  barThickness : 20
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }
  
  new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["18-24", "25-34", "35-44", "45-54"],
      datasets: [
        {
          label: "Men",
          backgroundColor: "#666666",
          data: [1233,1221,1783,4478]
        }, {
          label: "Women",
          backgroundColor: "#45c8f6",
          data: [1408,1547,1675,4734]
        }
      ]
    },
    options: {
		responsive: true,
		maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Age Group'
      },
	  legend: { display: false },
          scales: {
            xAxes: [{
              display: true,
            }],
            yAxes: [{
              display: false
            }]
          }
    }
});
	
	
	
	var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 12;

var oilData = {
    labels: [
        "Saudi Arabia",
        "Russia",
    ],
	labels: { display: false },
		     
    datasets: [
        {
            data: [133.3, 86.2],
            backgroundColor: [
                "#666666",
                "#45c8f6",

            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData,
		responsive: true,
		maintainAspectRatio: false,
		
});


	var oilCanvas = document.getElementById("oilChart2");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 12;

var oilData = {
    labels: [
        "Saudi Arabia",
        "Russia",
    ],
	labels: { display: false },
		     
    datasets: [
        {
            data: [150, 250],
            backgroundColor: [
                "#666666",
                "#45c8f6",

            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData,
		responsive: true,
		maintainAspectRatio: false,
		
});

  
});