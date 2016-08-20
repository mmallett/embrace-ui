angular.module('embrace', [])

.controller('TabController', function(){

  this.show = 'rom';

  var that = this;

  this.showTab = function(tab){
    return that.show === tab;
  }

  this.tabClick = function(tab){
    that.show = tab;
  }

  this.tabClass = function(tab){
    return (tab === that.show) ? ['active'] : [];
  }
})

.controller('RangeOfMotionController', function(){


  c3.generate({
      bindto: '#range-of-motion-chart',
      data: {
          columns: [
              ['Flexion', 20, 45, 60, 32, 30, 45, 70, 60, 65, 75, 80]
          ],
          types: {
              Flexion: 'area'
          },
          colors: {
            Flexion: '#7AF0CC'
          }
      }
  });

  // c3.generate({
  //     bindto: '#scatter',
  //     data: {
  //         xs: {
  //             setosa: 'setosa_x',
  //             versicolor: 'versicolor_x',
  //         },
  //         // iris data from R
  //         columns: [
  //             ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
  //             ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
  //             ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
  //             ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
  //         ],
  //         type: 'scatter'
  //     },
  //     axis: {
  //         x: {
  //             label: 'Sepal.Width',
  //             tick: {
  //                 fit: false
  //             }
  //         },
  //         y: {
  //             label: 'Petal.Width'
  //         }
  //     }
  // });

})

.controller('ActivityController', function(){

  c3.generate({
      bindto: '#activity-chart',
      data: {
          columns: [
              ['Standing', -30, 200, 200, 400, -150, 250],
              ['Sitting', 130, 100, -100, 200, -150, 50]
          ],
          type: 'bar',
          groups: [
              ['Standing', 'Sitting']
          ],
          colors: {
            Sitting: '#7AF0CC',
            Standing: '#5AB096'
          }
      },
      grid: {
          y: {
              lines: [{value:0}]
          }
      }

  });

})
