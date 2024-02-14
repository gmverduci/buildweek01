const ctx = document.getElementById('myChart');
let data = [];
new Chart(ctx, {
    type: 'doughnut',//tipo di grafico
    data: {
        labels: [],// legenda del grafico
        datasets: [{
            label: 'risutato', //scrittura all'interno bordo blu
            data: [10, 9], //creare una variabile con i risultati (ovviamente fuori dalla finzione) 
            backgroundColor: [ //impostare colore grafico
                '#d20094',
                '#00ffff' ],
            borderWidth: 0,
            
            
        }]
    },
     options: {
        cutoutPercentage: 0, // Imposta la percentuale del foro (puoi regolare questo valore)
        // Altre opzioni del grafico se necessario
      }


});