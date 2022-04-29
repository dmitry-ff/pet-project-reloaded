export const userData = {

  labels: ['Red', 'Blue', 'Yellow',],
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 45, 6, 7],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.4
    },
    {
      label: 'Dataset 2',
      data: _.reverse([1, 2, 3, 45, 6, 7]),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.1
    },

  ]
}