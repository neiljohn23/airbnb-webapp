function makeChart(data, type, axis, id) {
    var ctx = document.getElementById(id).getContext('2d');
    ctx.canvas.width = 300;
    ctx.canvas.height = 150;
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
           labels: axis,
           datasets: [{
                label: "House Type vs Average Price",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                borderColor: 'rgb(255, 255, 255)',
                data: data,
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        layout: {
            padding: {
                left: 150,
                right: 150,
                top: 0,
                bottom: 20
            }
        }
    }
});
}

function makeChart2() {
    var data = [293, 203, 247, 628];
    var type = 'pie';
    var axis = ["Flexible", "Moderate", "Strict", "Super Strict"];
    var id = "myChart2";

    var ctx = document.getElementById(id).getContext('2d');
    ctx.canvas.width = 300;
    ctx.canvas.height = 150;
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
           labels: axis,
           datasets: [{
                label: "Average Price Per Cancellation Policy",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
                borderColor: 'rgb(255, 255, 255)',
                data: data,
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        layout: {
            padding: {
                left: 150,
                right: 150,
                top: 0,
                bottom: 20
            }
        },
       }
    }
});
}
function makeChart3() {
    var data = [218, 341];
    var type = 'bar';
    var axis = ["Non-Superhost", "Superhost"];
    var id = "myChart3";

    var ctx = document.getElementById(id).getContext('2d');
    ctx.canvas.width = 300;
    ctx.canvas.height = 150;
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
           labels: axis,
           datasets: [{
                label: "Superhost Status vs Price",
                backgroundColor: ["#3e95cd", "#8e5ea2"],
                borderColor: 'rgb(255, 99, 132)',
                data: data,
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        layout: {
            padding: {
                left: 150,
                right: 150,
                top: 0,
                bottom: 20
            }
        }
    }
});
}