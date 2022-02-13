import _ from 'lodash';
import pattern from 'patternomaly';


export const userData = {

  labels: ['Red', 'Blue', 'Yellow',],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        pattern.draw('triangle', '#adbe41'),
        pattern.draw('ring', '#9e73bb'),
        pattern.draw('weave', '#17becf'),
        pattern.draw('diamond', '#2ca02c'),
        pattern.draw('zigzag-vertical', '#de215e'),
        pattern.draw('box', 'rgb(255, 99, 132, 0.4)')
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      hoverOffset: 3,
    },
  ],
}

export const lineUserData = {

  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets:
    [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 45, 6, 7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: _.reverse([1, 2, 3, 45, 6, 7]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },

    ]
}