//MIT License

//Copyright (c) 2016 kstudent

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

function gspusi() {
  
  //replace <term> with your search keyword here
  var keyword = "<term>";
  
  //if you want to receive notifications, even if
  //there is no free place, replace false with true 
  var debug   = false;
  
  //---edit below at your own risk ;)---
  var url = "https://usionline.uni-graz.at/usiweb/myusi.kurse?" 
          + "suche_in=go&sem_id_in=2016W&sp_id_in=&kursbez_in=" 
          + keyword + "&kursleiter_in=&kursnr_in=&wt_in=&" 
          + "uhrzeit_von_in=&uhrzeit_bis_in=&suche_kursstaette_id_in=";
  
  var response = UrlFetchApp.fetch(url);
  var text = response.getContentText();
  var lines = text.split("\n");
  var noFreePl = /(AUSG)|(Keine Plätze mehr online buchbar)/g;
  var freePl = /Freie Pl\.:\s*([0-9]+)\s*/g;
  var noPl = /Freie Pl\.:\s*/g;
  
  var courseTaken = 0;
  var courseFree  = 0;
  var cantBookYet = 0; 
  
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.match(noFreePl))    courseTaken++;
    else if (line.match(freePl)) courseFree++;
    else if (line.match(noPl))   cantBookYet++;
  }
  
  if(courseFree > 0 || debug == true) {
    var myEmailAdress = Session.getActiveUser().getEmail();
    var body = url + "\n" + "taken : " + courseTaken 
            + "; free : " + courseFree + "; cantBookYet : " 
            + cantBookYet + ";";
    var subject = "[GSPUSI] " + courseFree + " Plätze frei!";
    GmailApp.sendEmail(myEmailAdress, subject, body); 
  }
}
