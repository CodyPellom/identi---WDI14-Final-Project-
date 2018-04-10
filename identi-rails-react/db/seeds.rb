
User.destroy_all

User.create!([{
  name: "Suzie Peyton",
  email: "suziepeyton@gmail.com",

},
              {
  name: "Roger Sterling",
  email: "rogersterling@plimpton.com",

},
              {
  name: "Deborah Smith",
  email: "debsmith@plimpton.com",

}])

p "Created #{User.count} users"

Correspondence.destroy_all

Correspondence.create!([{
  title: "04/09/2018 Plimpton and Plimpton Printer Errors",
  input: "Cindy, I'm not super happy with the services we 
  have recieved so far from the printing agency. I feel 
  like their turn around time could have been much better;
  When I tried to get in touch with their supervisor I 
  was put on hold for twenty minutes, and then suddenly the 
  line was disconnected. Can we consider getting a new printing
  outsourcing service, or at least run this by Greg? Thanks.",
  result: "Email Sent to Cindy",
},
                        {
  title: "04/10/2018 Plimpton and Plimpton Printer Resolution",
  input: "Deborah, I did get a chance to speak with Greg. He 
  told me we should just go ahead and do whatever we think is
  best for the company. Today, when you get a chance, can you
  please look up some well rated printing agencys that could 
  possibly do our outsourcing? No offence, but you picked the last
  printing contractors, and here we are three months later dealing
  with the same issues. Please get back with me when you find a good
  printing agency. -Cindy",
  result: "Email Sent, Printer Agency Changed",
},
                        {
  title: "04/10/2018 Plimpton and Plimption Printer Agency Change",
  input: "Cindy, Alright I found a few well-respected agencies
  I think have some potential. I was suprised to find out your 
  husband is the manager of Buckhead Print Supply! That's so 
  great, Cindy. When did he get out of prison? So, if you could
  please let Greg know, Buckhead Print Supply it is! With your 
  husband as the manager there, maybe we can get a discount!
  Hopefully our business with them won't lead to any further 
  money laundering or extortion on your husband's behalf! I'm 
  just kidding around with you. But seroiously, keep your convict
  husband away from my children! Alright, have a good one! -Deborah",
  result: "Email Response Sent to Deborah",
}])

p "Created #{Correspondence.count} correspondences"

Response.destroy_all

Response.create!([{
  personality: "Confidence: Score 0.576, Anger: Score 0.758",
  tone: "Sarcasm, Passive-Agressiveness, Anger, Frustration",
  language: "Cindy, Greg, Printer, Agency",

},
                  {
  personality: "Nepsum, Lunum, Etsonero",
  tone: "Netose, Coroopnaten, Poolsey",
  language: "Printer, Debroah, Cidy, Greg, Husband",
},
                  {
  personality: "Nepsim, Seemus, Errotas, Nektodee",
  tone: "Serios, Kantu, Decantous, Erriouas, Septuar",
  language: "Greg, Cindy, Husband, Deborah, Printer, Agency",

}])

p "Created #{Response.count} responses"
