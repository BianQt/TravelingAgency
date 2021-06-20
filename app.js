alert ("Fasten your seatbelts; it's going to be asmooth ride !!");

function enterPlace() {
 var places= prompt("what are you looking for sightseeing, beachs or hiking ?");
 while( (places != "beachs") && (places != "sightseeing") && (places  != "hiking")){
  places= prompt("what are you looking for sightseeing, beachs or hiking ?");
  }
  return places;}
function numOfSites(){
 var num = prompt("How many sites you want to check?")
 return num ;
 } 
function rating(){
  var star = prompt("On a scale of 1 to 5, how satisfied are you with our services?");
  while (star <= 0 && star > 5  ){
   var star = prompt("On a scale of 1 to 5, how satisfied are you with our services?");
  }
  document.write("<div class='rating'>"+
  "<nav class='rating-nav' >"+"<ul >");
  for (var i=0 ;i < star; i++){
   document.write("<li class='nav-img'>"+"<img class='rating-img' src='https://meatloaf-oifc.com/img/other/30/collection-yellow-star-2.jpg '>"+"</li>")
  }
   document.write(
  "</nav >"+"</ul>");
  if (star <= 2){
    document.write(  "<h2>"+"Oops!!"+"</h2>"+
          "<p>"+"Its seems we didn't get what you want, please contact us so we can improve next time!"+"</p>")
  }
  else {document.write(  "<h2>"+"Thank You !"+"</h2>") }
 } 
var place = enterPlace();
var sitesNum = numOfSites();
if (place == "sightseeing") {
 document.write("<h2>"+"Sites"+"</h2>")
  for ( var i=1; i<=sitesNum ; i++) {
    if (i == 1){document.write("<div class='sites'>"+"<h2>"+i+". Ajloun Castle, Ajloun"+"</h2>"+
         " <img class='site-img' src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/t1rfbe.jpg'  width='500' height='350' />"+
         "<p>"+"This vibrant city in the north of Jordan is surrounded by pine forests and built on the site of an ancient market town once visited by Emperor Hadrian. The city is overlooked by the imposing Ajloun Castle, which has stood on a nearby hillside for nearly 1,000 years. Though damaged by earthquakes and attacked by the Mongol, the city remains surprisingly well preserved, with a small museum and impressive views."+"</p>"+
        "</div>")}
 else if (i== 2){document.write("<div class='sites'>"+ "<h2>"+i+". Roman Theatre, Amman"+"</h2>"+
          "<img class='site-img' src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/h7jfne.jpg'  width='500' height='350' />"+
        "<p>"+"Jordan’s very own Colosseum, the mighty Roman Theatre is Amman’s most famous archaeological treasure, located in the heart of the busy downtown district. The theatre was built in the 2nd century CE in the reign of Emperor Antoninus Pius and seated 6,000 people over three tiers. Restoration started on the ruins of the theatre in 1957 and the site is now open to visitors, even hosting sporadic musical performances."+"</p>"+
        "</div>")}
 else if (i== 3){document.write("<div class='sites'>"+ "<h2>"+i+". Mount Nebo, Madaba"+"</h2>"+
          "<img class='site-img' src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/2e4kr74.jpg'  width='500' height='350' />"+
        "<p>"+"One of the holiest sites in Jordan, Mount Nebo is the mountain where it is believed Moses first saw the Promised Land. Around 10km (6mi) from Madaba and around 1,000m (3,281ft) tall, the mountain is also believed to be Moses’ burial site, although this has never been proven. Pilgrims of all religions have travelled here since the 4th century CE and visitors can now visit a small church with an astonishing display of preserved Byzantine mosaics."+"</p>"+
        "</div>")}
 else if (i== 4){document.write("<div class='sites'>"+ "<h2>"+i+". Temple of Hercules, Amman"+"</h2>"+
          "<img class='site-img' src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/ge730j.jpg'  width='500' height='350' />"+
        "<p>"+"The Temple of Hercules sits within the historic Citadel on the top of the highest hill in Jordan’s capital Amman, and dates back to the time of the city’s Roman Theatre. Two tall pillars and parts of the podium are all that remain of the temple now, although the site also displays a hand carved from stone. This is thought to be the hand of Hercules from a statue that would have stood over 12m (39ft) tall before it was destroyed, possibly in an earthquake."+"</p>"+
        "</div>")}
  else {document.write("<div class='sites'>"+"<h2>"+"That's It For Sightseeing !!"+"</h2>"+"</div>");
    break}
  }
 }
else if (place == "beachs"){
 document.write( "<h2>"+"Sites"+"</h2>")
 for ( var i=1; i<=sitesNum ; i++) {
    if (i == 1){document.write("<div class='sites'>"+"<h2>"+i+". Aqaba"+"</h2>"+
          "<img class='site-img' src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/hnxb08.jpg'  width='500' height='350' />"+
         "<p>"+"Jordan may have just 26km (16mi) of coastline but its clear waters, balmy temperatures and historical sights make the Red Sea port of Aqaba ideal for a beach holiday. Close enough for day trips to the ancient wonders at Petra and the desert landscapes of Wadi Rum, Aqaba also offers action-packed watersports, lively markets and local restaurants serving Jordanian cuisine and fresh seafood. If you get restless after too many days on a sun lounger, this is the perfect compromise."+"</p>"+
        "</div>")}
    else if (i== 2){document.write(" <div class='sites'>"+" <h2>"+i+". Dead Sea"+"</h2>"+
         "<img class='site-img' src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/fxykt0.jpg'  width='500' height='350' />"+
         "<p>"+"The Dead Sea is the lowest point of dry land on earth at 431m (1,414ft) below sea level, making for a fascinating natural wonder that no visitor to Jordan should miss. Known for its exceptionally salty but soothing waters, the mineral-rich mud has attracted visitors including the famous Egyptian queen, Cleopatra. Tourists can still float on their back on the therapeutic waters and luxuriate in the black mud – just avoid getting it in your eyes."+"</p>"+
        "</div>")}
  
    else {document.write("<h2>"+"That's It For Beachs !!"+"</h2>");
    break}
  }
  }
else if (place == "hiking"){
  document.write(  "<h2>"+"Sites"+"</h2>")
  for ( var i=1; i<=sitesNum ; i++) {
    if (i == 1){document.write("<div class='sites'>"+"<h2>"+i+". Wadi Rum"+"</h2>"
         +" <img class='site-img' src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/mc7x8c.jpg' width='500 'height='350'/>"+
          "<p>"+"With its endless golden sands, rugged canyons and sweeping star-studded skies, Wadi Rum is an adventurer’s paradise. Ideal for hiking, camel tours and even overnight stays in desert camps, this mystical land of shifting dunes and reddened sandstone has been inhabited since prehistoric times and is home to nomadic Bedouin tribes. It has stood in for Mars in several Hollywood films and was the location of the Lawrence of Arabia film in the 1960s."+"</p>"
        +"</div>")}
    else if (i== 2){document.write("<div class='sites'>"+"<h2>"+i+". The Jordan Valley, Al-Ghor"+"</h2>"+
          "<img class='site-img' src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/eem4by.jpg'  width='500' height='350' />"+
        "<p>"+"See a different side to Jordan in this low-lying valley, where the River Jordan runs south from the Sea of Galilee to the Dead Sea. The valley is lush with date, banana and tropical fruit farms which export their wares year-round thanks to the region’s rich soil and subtropical climate. Surrounded by mountains on both sides, the valley has been settled for around 10,000 years and now runs alongside the border with Israel and the Palestinian Territories."+"</p>"+
        "</div>" )}
    else if (i== 3){document.write("<div class='sites'>"+ "<h2>"+i+". The Treasury, Petra"+"</h2>"+
          "<img class='site-img' src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/h61xkf.jpg'  width='500' height='350' />"+
        "<p>"+"One of the most impressive monuments in a city packed with them, the Treasury is the first incredible site visitors see once they have walked the 1.2km (0.75mi) Siq to enter Petra. Carved into the rock, it is almost 40m (131ft) high and decorated with figures, friezes and animals. It is thought to have been built in the 1st century BCE and most archaeologists believe it was a temple, though some think it may have been used to store documents."+"</p>"+
        "</div>")}
   
    else {document.write("<div class='sites'>"+"<h2>"+"That's It For Hiking !!"+"</h2>"+"</div>");
    break}
  }

 }
// else {
 //   document.write(  "<h2>"+"Oops!!"+"</h2>"+
 //           "<p>"+"Its seems we didn't get what you want, please   contact us so we can help you!"+"</p>"
  
 // )
 // }
rating();