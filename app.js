alert ("Fasten your seatbelts; it's going to be asmooth ride !!");
var places= prompt("what are you looking for sightseeing, beachs or hiking ?");

if (places == "sightseeing") {
document.write(
        "<h2>"+"Sites"+"</h2>"+"<div>"+
          "<h3>"+"Ajloun Castle, Ajloun"+"</h3>"+
         " <img src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/t1rfbe.jpg'  width='500' height='350' />"+
         "<p>"+"This vibrant city in the north of Jordan is surrounded by pine forests and built on the site of an ancient market town once visited by Emperor Hadrian. The city is overlooked by the imposing Ajloun Castle, which has stood on a nearby hillside for nearly 1,000 years. Though damaged by earthquakes and attacked by the Mongol, the city remains surprisingly well preserved, with a small museum and impressive views."+"</p>"+
        "</div>"+
        "<div>"+
           "<h3>"+"Roman Theatre, Amman"+"</h3>"+
          "<img src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/h7jfne.jpg'  width='500' height='350' />"+
        "<p>"+"Jordan’s very own Colosseum, the mighty Roman Theatre is Amman’s most famous archaeological treasure, located in the heart of the busy downtown district. The theatre was built in the 2nd century CE in the reign of Emperor Antoninus Pius and seated 6,000 people over three tiers. Restoration started on the ruins of the theatre in 1957 and the site is now open to visitors, even hosting sporadic musical performances."+"</p>"+
        "</div>"

)

}
else if (places == "beachs"){
document.write(  "<h2>"+"Sites"+"</h2>"+"<div>"+
         "<h3>"+"Aqaba"+"</h3>"+
          "<img src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/hnxb08.jpg'  width='500' height='350' />"+
         "<p>"+"Jordan may have just 26km (16mi) of coastline but its clear waters, balmy temperatures and historical sights make the Red Sea port of Aqaba ideal for a beach holiday. Close enough for day trips to the ancient wonders at Petra and the desert landscapes of Wadi Rum, Aqaba also offers action-packed watersports, lively markets and local restaurants serving Jordanian cuisine and fresh seafood. If you get restless after too many days on a sun lounger, this is the perfect compromise."+"</p>"+
        "</div>"+
       " <div>"
          +" <h3>"+"Dead Sea"+"</h3>"+
          "<img src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/fxykt0.jpg'  width='500' height='350' />"+
         "<p>"+"The Dead Sea is the lowest point of dry land on earth at 431m (1,414ft) below sea level, making for a fascinating natural wonder that no visitor to Jordan should miss. Known for its exceptionally salty but soothing waters, the mineral-rich mud has attracted visitors including the famous Egyptian queen, Cleopatra. Tourists can still float on their back on the therapeutic waters and luxuriate in the black mud – just avoid getting it in your eyes."+"</p>"+
        "</div>"

  
)
}
else if (places == "hiking"){
document.write(  "<h2>"+"Sites"+"</h2>"+"<div>"+
          "<h3>"+"Wadi Rum"+"</h3>"
         +" <img src='https://img.theculturetrip.com/768x/smart/wp-content/uploads/2021/03/mc7x8c.jpg' width='500 'height='350'/>"+
          "<p>"+"With its endless golden sands, rugged canyons and sweeping star-studded skies, Wadi Rum is an adventurer’s paradise. Ideal for hiking, camel tours and even overnight stays in desert camps, this mystical land of shifting dunes and reddened sandstone has been inhabited since prehistoric times and is home to nomadic Bedouin tribes. It has stood in for Mars in several Hollywood films and was the location of the Lawrence of Arabia film in the 1960s."+"</p>"
        +"</div>"
  
)
}
else {
  document.write(  "<h2>"+"Oops!!"+"</h2>"+
          "<p>"+"Its seems we didn't get what you want, please contact us so we can help you!"+"</p>"
  
)
}