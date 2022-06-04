let getOptions = (dates) => {
  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return '$' + value;
        },
      },
    },
    stroke: {
      width: [2],
      curve: 'stepline',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ['#3e8f32'],
    labels: [...dates],
  };
};

export default getOptions;
