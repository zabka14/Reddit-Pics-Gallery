$(document).ready(function ()
{

  prepPage();

    $('#sizeSelector').on('change', function() {
        prepPage();
    });

    $('#triSelector').on('change', function() {
        prepPage();
    });

    function sizeHandler(selectedSize){
      switch (selectedSize) {
        case "Small":
          return ('img_contenerS');
          break;
        case "Medium":
          return ('img_contenerM');
          break;
        case "Large":
          return ('img_contenerL');
          break;
        case "Very Large":
          return ('img_contenerVL');
          break;
        default:
          return ('img_contenerM');
        }
    };

    function sortHandler(selectedSort){
      switch (selectedSort) {
        case "Hot":
          return('https://www.reddit.com/r/pics/'+selectedSort.toLowerCase()+'.json?limit=30');
          break;
        case "New":
          return('https://www.reddit.com/r/pics/'+selectedSort.toLowerCase()+'.json?limit=30');
          break;
        case "Rising":
          return('https://www.reddit.com/r/pics/'+selectedSort.toLowerCase()+'.json?limit=30');
          break;
        case "Controversial":
          return('https://www.reddit.com/r/pics/'+selectedSort.toLowerCase()+'.json?limit=30');
          break;
        case "Top":
          return('https://www.reddit.com/r/pics/'+selectedSort.toLowerCase()+'.json?limit=30');
          break;
        case "Gilded":
          return('https://www.reddit.com/r/pics/'+selectedSort.toLowerCase()+'.json?limit=30');
          break;
        default:
          return('https://www.reddit.com/r/pics/'+selectedSort.toLowerCase()+'.json?limit=30');
        }
    };

    function prepPage(){
      $('#content').empty();
      resolution = sizeHandler($('#sizeSelector').val());
      url = sortHandler($('#triSelector').val());
      displayer(resolution, url);
    }

    function displayer(resolution, url) {

      // Préparation de la requête, URL fixe
      var requete = url;
      var photos;
      //Execution requete
      var varTab=$.getJSON(requete,
        function(data)
        {
          // Je recup data
          photos=data;
          //Une fois que que j'ai recup data je lance fonction
          dataReady(resolution);
        });
        //Fonction lancée une fois photos pretes
        function dataReady(resolution)
        {
          $.each(photos.data.children, function(k, v) {
              if(typeof (v.data) != 'undefined'){
                if(typeof(v.data.preview) != 'undefined'){
                    var datImage =  '<div class='+resolution+'>'+
                                    '<div class="img_title">'+v.data.title+'</div>'+
                                    '<img   src='+v.data.preview.images[0].source.url+' alt='+v.data.title+'>'+
                                    '</div>';

                  $('#content').append(datImage);
                };
              };
            });
        }
    }


});
