import Service from '@ember/service';
import faker from 'faker';
import Ember from 'ember';
import PersonalINFO from '../models/personalinfo';
import Profile from '../models/profile';
import Detail from '../models/detail';
import jQuery from 'jquery'

export default Service.extend({
    store: Ember.inject.service(),
    JSONArray:[
        {
            id:"101",
            details:{
                college:"Jerusalem",
            work:"Zoho", 
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[102,103,104]
            
        },
        {
            id:"102",
            details:{
                college:"Jerusalem",
                work:"Zoho",
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            
            friends:[105,106,107]
        },
        {
            id:"103",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[106,108,105]
  
        },
        {
            id:"104",
            details:{
                college:"Sai Ram",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[109,110,111,112]
  
        },
        {
            id:"105",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[113,114,115,116]
  
        },
        {
            id:"106",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[117,118,119,120,121]
  
        },
        {
            id:"107",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[122]
  
        },
        {
            id:"108",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[123,125,126,127,128]
  
        },
        {
            id:"109",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"110",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"111",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"112",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"113",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"114",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"115",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"116",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"117",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"118",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"119",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"120",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"121",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"122",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"123",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"124",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"125",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"126",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"127",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"128",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"129",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"130",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"131",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"132",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"133",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"134",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"135",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"136",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"137",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"138",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"139",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"140",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"141",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"142",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"143",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"144",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"145",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"146",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"147",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"148",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"149",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"150",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        },
        {
            id:"151",
            details:{
                college:"Jerusalem",
               work:faker.company.companyName(),
            },
            personalinfo:{
                gender:"male",
                name:faker.name.firstName(),
            },
            friends:[]
  
        }
    ],
    JSONArray2:[],
    init(){
        this._super(...arguments)
        // Enable the below to load from File
        // this.setjson()
    },
    setjson(jsondata){
        var jsondata
        var myUrl='/jsondata.json'
        $.ajax({
            url: myUrl,
            dataType: 'json',
            async: false,
            success: function(data) {
             jsondata=data
            }
          });
        this.JSONArray=jsondata
        console.log(this.JSONArray)
    },
    getjsonservice(){
        console.log(this.JSONArray2)
        for(var i=0;i<this.JSONArray.length;i++){
            var detail=this.store.createRecord('detail', this.JSONArray[i].details);
              var friend=this.JSONArray[i].friends
              var personalinfo=this.store.createRecord('personalinfo', this.JSONArray[i].personalinfo);
              this.store.createRecord('profile',{
                  id:parseInt(this.JSONArray[i].id),
                  detail:detail,
                  friend:friend,
                  personalinfo:personalinfo,
              })
        }
        this.getstore()
    },
    getstore(){
        var valarr=this.store.peekAll('profile')
        for(var i=0;i<valarr._length;i++){
            // var prof=valarr.objectAt(i).detail.get('name')
        }
        

    }
});
