var output = "";
var obj;
$.ajax({
  url:"/getjson",
  success: function(data){
      $.each(data, function(index, value) {
      output+='<div class="col-md-4">'+
      '<br/><br/><img id="bgposter"  alt="Bootstrap Image Preview" src="'+
      data[index].Poster +'" class="img-rounded center-block"></div><div class="col-md-8"><br/><br/><h3>'+
      data[index].Title+'</h3><h4>Year :'+
      data[index].Year +'</h4><h4>Actors :'+
      data[index].Actors+'</h4><h4>Director :'+
      data[index].Director+'</h4><h4>Description :'+
      data[index].Plot+'</h4>'+'<h4>Language :'+
      data[index].Language+'</h4><h4>Country :'+
      data[index].Country+'</h4><h4>Released on :'+
      data[index].Released+'</h4><h4>ImdbRating :'+
      data[index].imdbRating+'</h4><h4>Awards :'+
      data[index].Awards+'</h4>'+
      '<br/></br><button class="buttonupdate" type="button" id="'+value.Title+"|"+value.Year+"|"+value.Actors+"|"+value.Director+"|"+value.Plot+"|"+value.Poster+"|"+value.imdbRating+"|"+value.Awards+"|"+value.Released+"|"+value.Language+"|"+value.Country+'" data-toggle="modal" data-target="#myModalHorizontal">Update</button> '+'&nbsp;<button data-toggle="modal" data-target="#myModalDeleteAlert" class="buttonDelete " id="'+value.Title+'" type="button"><em class="glyphicon glyphicon-delete"></em> Delete'+'</button><br/><br/><br/><br/><br/><br/></div>';
      });

  document.getElementById("movies").innerHTML = output;

   $("#addMovie").click(function(){
     $('#add_details').show();
     $('#update_details').hide();
     $('#title').val('');
     $('#year').val('');
     $('#actors').val('');
     $('#director').val('');
     $('#plot').val('');
     $('#poster').val('');
     $('#imdbRating').val('');
     $('#awards').val('');
     $('#released').val('');
     $('#language').val('');
     $('#country').val('');
     $('#myModalLabel').html('Add Movie');
   });



   $(".buttonupdate").click(function(){

     $('#add_details').hide();
     $('#update_details').show();
     var data1=$(this).attr('id');
     var values=data1.split('|');
     $('#title').val(values[0]);
     $('#title').attr("readonly","readonly");
     $('#year').val(values[1]);
     $('#actors').val(values[2]);
     $('#director').val(values[3]);
     $('#plot').val(values[4]);
     $('#poster').val(values[5]);
     $('#imdbRating').val(values[6]);
     $('#awards').val(values[7]);
     $('#released').val(values[8]);
     $('#language').val(values[9]);
     $('#country').val(values[10]);
     $('#myModalLabel').html('Update Movie Details');
   });

   $(".buttonDelete").click(function(){
      var title=$(this).attr('id');
        $('#titleDelete').val(title);
    });
}
});
