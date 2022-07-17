const boxes=document.querySelector('.container');
const player=document.querySelector('.welcometext');
const btn=document.querySelector('#exit')
let playing=0;
let song=document.createElement("audio");


boxes.addEventListener("click",(e)=>{
  

  
    const selectedbox=document.getElementById(e.target.id);
    if(e.target.id=="onething"){


       
        
        song.pause();
        const onethinglines="This has to be my favorite. You took me and Vivek to an internet cafe and made us watch the video of this song. But we were so dumb that we didn't know PCs in the cafe doesn't have speakers and we did not have earphones either. So we watched this on mute.Oh god I can even hear you singing this song and it sounds so cool.<br>Have sunflower days<br><br> xoxo <br> V ";
        player.innerHTML=onethinglines;
       
        song.src="audios/onething.mp3";
      song.play();
     

     
       

        
    }
    if(e.target.id=="photograph"){
        
        song.pause();
        const photographlines="In one of your early letters, you were angry and very broken by someone. Someone came into your life and planted sunflowers in your heart and soon they chopped them off. And you asked me what ed meant by these lines? Since that day all of my letters ended with these lines. <br> And if you hurt me , thats okay baby <br>only words bleed<br>inside the pages you just hold me<br>I won't ever let you go<br>wait for me to come home <br>Have sunflower days<br> <br> xoxo <br> V <br>        ";
        player.innerHTML=photographlines;
       
        song.src="audios/photograph.mp3";
        song.play();
       
    }
    if(e.target.id=="nightchanges"){
        song.pause();
        const lines="This song was out when Sandesh was around us. He made fun of zayn's lines, saying it's dirty and perverted.I joined him  and we were troubling you.But you know, I was just playing. We had a 100-page notebook and we wrote lyrics of all the songs from the album Four. The song was on the third page. <br>Can you guess what was on the first page? <br>Have sunflower days<br> <br> xoxo <br> V <br> Hint: YOU know for sure        ";
        player.innerHTML=lines;
       
        song.src="audios/nightchanges.mp3";
        song.play();
       
    }
    if(e.target.id=="amnesia"){
        song.pause();
        const lines="I adored the name Amnesia. I literally thought it was a name of a girl. A dictionary broke my heart. I used to play this so much when Vivek had his tiny car and I was always next to the driver's seat. Also, the chords are really simple. I don't remember you singing it much but you wrote in our notebook. Miss Indra was such a devil, she took the notebook away and she never returned it. In her subject chemistry, we had the exact same score in pre-boards, 58.5. Even the distribution of marks in part a and part b were exactly same. Maybe that was the start of our many more similar moments. <br>Have sunflower days<br> <br> xoxo <br> V <br>     ";
        player.innerHTML=lines;
       
        song.src="audios/amnesia.mp3";
        song.play();
    }
    if(e.target.id=="am"){
        song.pause();
        let picbox=document.createElement("div");
        let pic=document.createElement("img");
        pic.src="pic/am.jpeg"
        const lines="Niall's verse in this song was our favorite. Niall's got a pretty voice, the kind of voice that could sink and uplift you at the same time. The sound of 'there could be a world war three going on outside '  had that effect on me. Zayn in multiple interviews has said Niall makes the best music. What do you think?. <br>Have sunflower days<br> <br> xoxo <br> V <br>     ";
        
        player.innerHTML=lines;
        picbox.appendChild(pic);
        player.appendChild(picbox);
       
        song.src="audios/am.mp3";
        song.play();
    }
    if(e.target.id=="perfect"){
        song.pause();
        let picbox=document.createElement("div");
        let pic=document.createElement("img");
        pic.src="pic/perfect.jpeg"
        const lines="When this song was out we were in different schools. We were very happy to talk about the magic in these simple lines when we met at our bus stop. The video was as pretty as the song. We dedicated this to all our friends at our school fete. You wore your yellow sunflower dress and some of our juniors took a picture with you.You joked with me that you are getting the practice of celebrityhood.<br>Have sunflower days<br>  <br> xoxo <br> V <br>     ";
        player.innerHTML=lines;
       
        song.src="audios/perfect.mp3";
        song.play();
        picbox.appendChild(pic);
        player.appendChild(picbox);
    }
    if(e.target.id=="kissyou"){
        song.pause();
        let picbox=document.createElement("div");
        let pic=document.createElement("img");
        pic.src="pic/kissyou.jpeg"
        const lines="I watched the video of this song when I was in Bhutan. The countdown to zayn and harry on the bike, Liam popping out, Niall and Louis on the car  and  all assemble for a surf. So much going around. It makes me smile, a Thursday throwback. <br>Have sunflower days<br>  <br> xoxo <br> V <br>     ";
        player.innerHTML=lines;
       
        song.src="audios/kissyou.mp3";
        song.play();
        picbox.appendChild(pic);
        player.appendChild(picbox);
       
    }
    if(e.target.id=="alliwant"){
        song.pause();
        const lines="You sent me a video of you singing this song with a guy playing guitar, seated by your side in what looked like a classroom. You were there in a singing group.Months before this you had an audition, you were practicing adele songs and you were very anxious. But I knew you would make it because you can do anything mate. <br>Have sunflower days<br> <br> xoxo <br> V <br>     ";
        player.innerHTML=lines;
       
        song.src="audios/alliwant.mp3";
        song.play();
    }
    if(e.target.id=="history"){
        song.pause();
        let picbox=document.createElement("div");
        let pic=document.createElement("img");
        pic.src="pic/history.jpeg"
        const lines="You and me got a whole lot of history<br>We could be the greatest team that the world has ever seen<br>You and me got a whole lot of history<br>So don't let it go, we can make some more, we can live forever<br>You and me got a whole lot of history<br>We could be the greatest team that the world has ever seen<br>You and me got a whole lot of history<br>So don't let it go, we can make some more, we can live forever <br>Have sunflower days<br>  <br> xoxo <br> V <br>    ";
        player.innerHTML=lines;
       
        song.src="audios/history.mp3";
        song.play();
        picbox.appendChild(pic);
        player.appendChild(picbox);
       
    }
    if(e.target.id=="littlethings"){
        song.pause();
        
        const lines="You'll never love yourself half as much as I love you And you'll never treat yourself right darling, but I want you to If I let you know, I'm here for you Maybe you'll love yourself like I love you, oh<br>Have sunflower days<br>  <br> xoxo <br> V <br>    ";
        player.innerHTML=lines;
       
        song.src="audios/littlethings.mp3";
        song.play();
        picbox.appendChild(pic);
        player.appendChild(picbox);
       
    }
    if(e.target.id=="youth"){
        song.pause();
        
        const lines="What if, what if we start to drive? What if, what if we close our eyes? What if speeding through red lights into paradise? 'Cause we've no time for getting old Mortal body, timeless souls  Cross your fingers, here we go, oh oh oh And when the lights start flashing like a photo booth And the stars exploding, we'll be fireproof My youth, my youth is yours Trippin' on skies, sippin' waterfalls My youth, my youth is yours <br>Have sunflower days<br>  <br> xoxo <br> V <br></br>";
        player.innerHTML=lines;
       
        song.src="audios/youth.mp3";
        song.play();
        picbox.appendChild(pic);
        player.appendChild(picbox);
       
    }
    if(e.target.id=="allofthestars"){
        song.pause();
      
      
        
        const lines="So open your eyes and see The way our horizons meet And all of the lights will lead Into the night with me And I know these scars will bleed But both of our hearts believe All of these stars will guide us home<br>Have sunflower days<br>  <br> xoxo <br> V <br>    ";
        
        player.innerHTML=lines;
       
        song.src="audios/allofthestars.mp3";
        song.play();
        picbox.appendChild(pic);
        player.appendChild(picbox);
       
    }
    if(e.target.id=="springday"){
        song.pause();
      
      
        
        const lines="I miss you Saying this makes me miss you all even more I miss you Even though I’m looking at your photo Time's so cruel, I hate us Seeing each other is now more difficult It's all winter here, even in August My heart is running on time, alone on the Snowpiercer I want to go to the other side of Earth, holding your hand, put an end to winter How much should my longings fall like snow Before the days of spring return, friend? You know it all, you’re my best friend The morning will come again No darkness, no season can't last forever <br>Have sunflower days<br>  <br> xoxo <br> V <br>    ";
        player.innerHTML=lines;
       
        song.src="audios/springday.mp3";
        song.play();
        picbox.appendChild(pic);
        player.appendChild(picbox);
       
    }
    if(e.target.id=="bestsongever"){
        song.pause();
      
      
        
        const lines="You know, I know, you know I'll remember you <br>And I know, you know, I know you'll remember me <br>And you know, I know, you know I'll remember you<br> And I know, you know, I hope you'll remember me <br>Have sunflower days<br>  <br> xoxo <br> V <br>    ";
        player.innerHTML=lines;
       
        song.src="audios/bestsongever.mp3";
        song.play();
        picbox.appendChild(pic);
        player.appendChild(picbox);
       
    }

  
    
 

})
