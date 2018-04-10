
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

Personality.destroy_all

Personality.create!([{
  trait_id: "facet_adventurousness",
  name: "Adventurousness",
  category: "personality",
  percentile: "0.8475547997319255",

},
                     {
  trait_id: "facet_artistic_interests",
  name: "Artistic interests",
  category: "personality",
  percentile: "0.5450272499124973",
},
                     {
  trait_id: "facet_intellect",
  name: "Intellect",
  category: "personality",
  percentile: "0.9946027078235723",

}])

p "Created #{Personality.count} personalities"

Tone.destroy_all

Tone.create!([{
  score: "0.565706",
  tone_name: "Fear",
  tone_id: "fear",

},
              {
  score: "0.647322",
  tone_name: "Anger",
  tone_id: "anger",

},
              {
  score: "0.724923",
  tone_name: "Confident",
  tone_id: "confident",

}])

p "Created #{Tone.count} tones"

Language.destroy_all

Language.create!([{
  text: "desert ship",
  relevance: "0.986974",

},
                  {
  text: "rugged Colorado Desert",
  relevance: "0.929987",

},
                  {
  text: "librarian Myrtle Botts",
  relevance: "0.906193",

}])

p "Created #{Language.count} languages"
