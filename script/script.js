getWeatherByCity(dataReceived, showError, cityName);
     });
     $('#inputCityName').keypress(function(e) {
         var ENTER_KEY_CODE = 13;
         if ( e.which === ENTER_KEY_CODE ) 
         {
             $('#btnGetWeather').trigger('click');
             return false;
         }
     });    
     
         getWeatherData('ua', dataReceived, showError);
     
 
     function dataReceived(data) {
         var offset = (new Date()).getTimezoneOffset()*60*1000; // Відхилення від UTC в секундах
         var city = data.city.name;
         var country = data.city.country;
          $('#city').html(city);  
          $('#content_header:not(:first)').remove();
          
          $.each(data.list, function(){
           var localTime = new Date(this.dt*1000 - offset);
           
           addWeather (
            var now = moment(localTime);
            moment.lang ('uk');
           moment(now.format('LLL')),
            
            this.weather[0].icon,
            Math.round(this.temp.min) + '&deg;C',
            Math.round(this.temp.max) + '&deg;C'
                  
                  );
          });   
          
          $('#location').html(city + ', <b>' + country + '</b>'); // Додаємо локацію на сторінку
          
     }
     
     function addWeather(icon, day,temp) {
      
      var weather =
     '<p>'+''<ul>'+'<span id="date">+day+</span>'+</ul>+
      '<ul>'+'<span id="icon"> + '<img src="images/'+icon+'.png" />' + </span>'+'</ul>'+
      '<ul>'+'<span id="tempMin">+temp.min+</span>'+'</ul>'+
      '<ul>'+'<span id="tempMax">+temp.max+</span>'+'</ul>'+'</p>';
      
     }
      
     
	         $('#dateToday').html(moment(new Date(data.list[0].dt*1000-offset).calendar());
          $('#dateTomorrow').html(data.list[1].dt);
          $('#dateAfterTomorrow').html(data.list[2].dt);
      
          $('#iconToday').html('<img src="../images/'+ data.list[0].weather[0].icon + '.png" alt="Зображення">');
          $('#iconTomorrow').html('<img src="../images/'+ data.list[1].weather[0].icon + '.png" alt="Зображення">');
          $('#iconAfterTomorrow').html('<img src="../images/'+ data.list[2].weather[0].icon + '.png" alt="Зображення">');

           
           $('#tempTodayMin').html(Math.round(data.list[0].temp.min));
           $('#tempTomorrowMin').html(Math.round(data.list[1].temp.min));
           $('#tempWeekendMin').html(Math.round(data.list[2].temp.min));
          
           $('#tempTodayMax').html(Math.round(data.list[0].temp.max));
           $('#tempTomorrowMax').html(Math.round(data.list[1].temp.max));
           $('#tempAfterTomorrowMax').html(Math.round(data.list[2].temp.max));
            
 	}          
 	}    
 	
 	
                    
      function showError(msg){
          $('#error').html('Сталася помилка: ' + msg);
     }
 });