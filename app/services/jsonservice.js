import Service from '@ember/service';
import faker from 'faker';

export default Service.extend({
    store: Ember.inject.service(),
    JSONArray:[
        {
            id:"101",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:faker.company.companyName(),
                gender:"male"
            },
            friends:{
            college:[102,103],
            work:[104,105]
            }
  
        },
        {
            id:"102",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
				college:[106,107],
				work:[108,109]
				}
        },
        {
            id:"103",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
            college:[110,111],
            work:[112,113]
            }
  
        },
        {
            id:"104",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
            college:[114,115],
            work:[116,117]
            }
  
        },
        {
            id:"105",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[118,119],
	work:[120]
	}
  
        },
        {
            id:"106",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[121,122],
	work:[123,124]
	}
  
        },
        {
            id:"107",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[125,126],
	work:[127,128]
	}
  
        },
        {
            id:"108",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"109",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"110",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"111",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"112",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"113",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"114",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"115",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"116",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"117",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"118",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"119",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"120",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"121",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"122",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"123",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"124",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"125",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"126",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"127",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"128",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"129",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"130",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"131",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"132",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"133",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"134",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"135",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"136",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"137",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"138",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"139",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"140",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"141",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"142",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"143",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"144",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"145",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"146",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"147",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"148",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"149",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"150",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        },
        {
            id:"151",
            details:{
                name:faker.name.firstName(),
                college:"Jerusalem",
                work:"Zoho",
                gender:"male"
            },
            friends:{
	college:[],
	work:[]
	}
  
        }
    ],
    
    getjsonservice(){
        for(var i=0;i<this.JSONArray.length;i++){
            var detail=this.store.createRecord('detail', {
                name: this.JSONArray[i].details.name,
                college: this.JSONArray[i].details.college,
                work: this.JSONArray[i].details.work,
                gender: this.JSONArray[i].details.gender,
              });
              var friend=this.store.createRecord('friend', {
                college: this.JSONArray[i].friends.college,
                work: this.JSONArray[i].friends.work,
              });
              this.store.createRecord('profile',{
                  id:parseInt(this.JSONArray[i].id),
                  detail:detail,
                  friend:friend
              })
        }
        
        // var val=this.store.peekRecord('profile', 102)
        // console.log(val.detail.get('name'))
        // console.log("This is in service")

        this.getstore()
    },
    getstore(){
        var valarr=this.store.peekAll('profile')
        for(var i=0;i<valarr._length;i++){
            // var prof=valarr.objectAt(i).detail.get('name')
        }
        

    }
});
