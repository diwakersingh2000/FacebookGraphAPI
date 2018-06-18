// main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    //Paste your facebook token below in this variable
    var myFacebookToken = 'Key Here';

    //Function to get ABOUT ME data of user
    function getAboutMeData(){
      $.ajax('https://graph.facebook.com/me/?fields=id,name,email,birthday,picture,education,location,gender&access_token='+myFacebookToken,{
        success : function(response){
          console.log(response);
          console.log(typeof(response));
          $(".myName").text(response.name); // Gets name
          $(".myEmail").text(response.email); // Gets email
          $(".myBirthday").text(response.birthday); //Gets Birthday
          $(".myEducation").text(response.education[1].school.name); //Gets Education entry no.2
          $(".myLocation").text(response.location.name); //Gets Location
          $(".myGender").text(response.gender); // Gets Gender
          $(".myImage").attr("src",(response.picture.data.url)); //Gets Profile Image
          $(".myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>'); //Gets profile ID
        }
      }
    );
  }//end getAboutMeData function

    //Call getAboutMeData on clicking of button facebookProfileButton
    $("#facebookProfileBtn").on('click',getAboutMeData)


    //Function to get FEED data of user
    function getNewsFeedData(){
      $.ajax('https://graph.facebook.com/me/?fields=name,picture,id,feed&access_token='+myFacebookToken,{
        success : function(response){
          $(".myName").text(response.name); //Gets name
          $(".myImage").attr("src",(response.picture.data.url)); //Gets profile image

          //Running it for first 10 posts only.
          for (i=0;i<10;i++){

            //checking if the feed has a story or message in it. If yes then doing the following
            if(response.feed.data[i].story!=undefined || response.feed.data[i].message!=undefined){
              switch(i){
                case 0:
                $(".myNF1Time").text(response.feed.data[i].created_time);
                $(".myNF1Message").text(response.feed.data[i].message);
                $(".myNF1Story").text(response.feed.data[i].story);
                break;
                case 1:
                $(".myNF2Time").text(response.feed.data[i].created_time);
                $(".myNF2Message").text(response.feed.data[i].message);
                $(".myNF2Story").text(response.feed.data[i].story);
                break;
                case 2:
                $(".myNF3Time").text(response.feed.data[i].created_time);
                $(".myNF3Message").text(response.feed.data[i].message);
                $(".myNF3Story").text(response.feed.data[i].story);
                break;
                case 3:
                $(".myNF4Time").text(response.feed.data[i].created_time);
                $(".myNF4Message").text(response.feed.data[i].message);
                $(".myNF4Story").text(response.feed.data[i].story);
                break;
                case 4:
                $(".myNF5Time").text(response.feed.data[i].created_time);
                $(".myNF5Message").text(response.feed.data[i].message);
                $(".myNF5Story").text(response.feed.data[i].story);
                break;
                case 5:
                $(".myNF6Time").text(response.feed.data[i].created_time);
                $(".myNF6Message").text(response.feed.data[i].message);
                $(".myNF6Story").text(response.feed.data[i].story);
                break;
                case 6:
                $(".myNF7Time").text(response.feed.data[i].created_time);
                $(".myNF7Message").text(response.feed.data[i].message);
                $(".myNF7Story").text(response.feed.data[i].story);
                break;
                case 7:
                $(".myNF8Time").text(response.feed.data[i].created_time);
                $(".myNF8Message").text(response.feed.data[i].message);
                $(".myNF8Story").text(response.feed.data[i].story);
                break;
                case 8:
                $(".myNF9Time").text(response.feed.data[i].created_time);
                $(".myNF9Message").text(response.feed.data[i].message);
                $(".myNF9Story").text(response.feed.data[i].story);
                break;
                case 9:
                $(".myNF10Time").text(response.feed.data[i].created_time);
                $(".myNF10Message").text(response.feed.data[i].message);
                $(".myNF10Story").text(response.feed.data[i].story);
                break;
                default:
                console.log("some error! please check the code.");
                break;
              }//switch end
            }//if end
          }//for end
        }//success end
      }//end argument list
    );// end ajax call
  }// end get news feed data

  //Call getNewsFeedData on clicking of button facebookNewsFeedBtn
  $("#facebookNewsFeedBtn").on('click',getNewsFeedData)

  //Function to get POSTS made by user
  function getPostsData(){
    $.ajax('https://graph.facebook.com/me/?fields=name,picture,id,posts&access_token='+myFacebookToken,{
      success : function(response){
        $(".myName").text(response.name); //Gets name
        $(".myImage").attr("src",(response.picture.data.url)); //Gets profile image

        //Running it for first 5 posts only.
        for (i=0;i<5;i++){

          //checking if the post has a story or message in it. If yes then doing the following
          if(response.posts.data[i].story!=undefined || response.posts.data[i].message!=undefined){
            switch(i){
              case 0:
              $(".myPost1Time").text(response.posts.data[i].created_time);
              $(".myPost1Message").text(response.posts.data[i].message);
              $(".myPost1Story").text(response.posts.data[i].story);
              break;
              case 1:
              $(".myPost2Time").text(response.posts.data[i].created_time);
              $(".myPost2Message").text(response.posts.data[i].message);
              $(".myPost2Story").text(response.posts.data[i].story);
              break;
              case 2:
              $(".myPost3Time").text(response.posts.data[i].created_time);
              $(".myPost3Message").text(response.posts.data[i].message);
              $(".myPost3Story").text(response.posts.data[i].story);
              break;
              case 3:
              $(".myPost4Time").text(response.posts.data[i].created_time);
              $(".myPost4Message").text(response.posts.data[i].message);
              $(".myPost4Story").text(response.posts.data[i].story);
              break;
              case 4:
              $(".myPost5Time").text(response.posts.data[i].created_time);
              $(".myPost5Message").text(response.posts.data[i].message);
              $(".myPost5Story").text(response.posts.data[i].story);
              break;
              default:
              console.log("some error! please check the code.");
              break;
            }//switch end
          }//if end
        }//for end
      }//success end
    }//end argument list
  );// end ajax call
}// end get posts data


//Call getPostsData on clicking of button facebookPostBtn
$("#facebookPostBtn").on('click',getPostsData)


});// END
