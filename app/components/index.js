import Component from '@ember/component';
import faker from 'faker';
import { inject as service } from '@ember/service';
import Ember from 'ember';
import PersonalINFO from '../models/personalinfo';
import Profile from '../models/profile';
import Detail from '../models/detail';
export default Component.extend({
    store: Ember.inject.service(),
    cart: service('jsonservice'),
    nodeList:[],
    edgeList:[],
    init(){
        this._super(...arguments)
        this.get('cart')
        this.nodeList=[],
        this.edgeList=[]
    },
    actions:{
        getgraph(){
          function gettitle(prof){
            var content=''
                content=content+"<center>Personal Informations<center><br>"
                var plam=prof
                let attributes1 = Ember.get(PersonalINFO, 'attributes')
                      attributes1.forEach(function(meta, name) {
                        content=content+name+" : "+plam.personalinfo.get(name)+"<br>"
                      })
                attributes1 = Ember.get(Detail, 'attributes')
                attributes1.forEach(function(meta, name) {
                  content=content+name+" : "+plam.detail.get(name)+"<br>"
                  // console.log(name)
                })
                return content
          }
            this.get('cart').getjsonservice()
            var st=this.store
            var valarr=this.store.peekAll('profile')
            var prof=valarr.objectAt(0)
            console.log(prof)
            var content=gettitle(prof)
            this.nodeList.pushObject({
                id:prof.id,
                college:prof.detail.get('college'),
                label:prof.personalinfo.get('name'),
                work:prof.detail.get('work'),
                title:content,
                image:faker.image.avatar(),
                gender:prof.personalinfo.get('gender'),
            })            
              var nodes = new vis.DataSet(this.nodeList)
              var edges = new vis.DataSet(this.edgeList)
              var container = document.getElementById('mynetwork');
              var data = {
                nodes: nodes,
                edges: edges
              };
              var options = this.getOption();
              var network = new vis.Network(container, data, options);
              var lastclicked=null
              
              function getnodeProfile(id)
              {
                  var val=st.peekRecord('profile', id)
                  return val
              }
              function checkifNodePresent(val){
                var availarr=Object.keys(nodes._data)
                if(availarr.includes(val.toString())){
                    return false
                }
                else
                    return true
              }
              function getEdgeBetweenNodes(node12,node2) {
                  try{
                    var node1=node12.toString()
                return edges.get().filter(function (edge) {
                    return (edge.from === node1 && edge.to === node2 )|| (edge.from === node2 && edge.to === node1);
                });
                  }
                  catch{
                      return []
                  }
                
            };
            function checkedgePrensent(node1,node2){
                var val=getEdgeBetweenNodes(node1,node2)
                if(val[0])
                  return false
                else
                  return true
            }
            var colorrecord=[];
                  let attributes = Ember.get(Detail, 'attributes')
                      attributes.forEach(function(meta, name) {
                        var color
                        if(name=='college'){
                          color='#0000CD'
                        }
                        else{
                          color="#00FF00"
                        }
                        colorrecord.pushObject({
                          group:name,
                          // color:faker.internet.color(),
                          color:color,
                          
                        })
                      });
                  // console.log(colorrecord)
            function getgroupname(val1,val2){
              var returnlist= {
                group:"friends",
                color:"#FF8C00"
              }
              let attributes = Ember.get(Detail, 'attributes')
                      attributes.forEach(function(meta, name) {
                        if(val2.get(name)==val1.get(name)){
                          // console.log(colorrecord.length)
                          for(var i=0;i<colorrecord.length;i++){
                            if(colorrecord[i].group==name){
                              returnlist.group=colorrecord[i].group
                              returnlist.color=colorrecord[i].color
                            }
                          }
                        }
                      });
              return returnlist
            }
            function getEdgesOfNode(nodeId) {
              return edges.get().filter(function (edge) {
                return edge.from === nodeId || edge.to === nodeId;
              });
            }
            network.on("oncontext", function (params) {
              var clickednode=network.getNodeAt(params.pointer.DOM)
              var deledge=getEdgesOfNode(clickednode)
              for(var i=0;i<deledge.length;i++){
                edges.remove(deledge[i])
              }
              console.log(deledge.length)
              nodes.remove(clickednode)
              console.log(clickednode)
          });
              network.on('click', function(properties) {
                if(properties.nodes[0]){
                  if(lastclicked){
                    nodes.update({id: lastclicked, value:22,shape:'circularImage'})
                  }
                  var id=properties.nodes[0]
                  nodes.update({id: id,shape:'image'})
                  var val=getnodeProfile(id)
                  var templist=[]
                  // console.log(val.detail.get('college')) 
                  for(var i=0;i<val.friend.length;i++){
                    try{
                    var prof=st.peekRecord('profile', val.friend[i])
                    if(!templist.includes(val.friend[i])){
                      var colordict=getgroupname(val.detail,prof.detail)
                      // console.log(colordict)
                       if(checkifNodePresent(val.friend[i])){
                         var content=gettitle(prof)
                        templist.pushObject(val.friend[i])
                        nodes.update({
                        id:prof.id,
                        size:40,
                        title:content,
                        college:prof.detail.get('college'),
                        label:prof.personalinfo.get('name'),
                        work:prof.detail.get('work'),
                        image:faker.image.avatar(),
                        gender:prof.personalinfo.get('gender'),
                      })
                      edges.update({
                          from:id,
                          to:prof.id,
                          color:{highlight:colordict.color},
                          color:{color:colordict.color},
                          // label:colordict.group,
                          group:colordict.group
                      })
                       }
                       else{
                           if(checkedgePrensent(val.friend[i],id)){
                            edges.update({
                                from:id,
                                to:prof.id,
                                // label:colordict.group,
                                color:{color:colordict.color},
                                group:colordict.group
                            })
                           }
                       }
                    } 
                  }
                  catch(e){
                    console.log("SOme thing Wrong Happended"+e)
                  }
                }
                  this.activeid=properties.nodes;
                  var ids = properties.nodes;
                  var id=ids[0]
                  nodes.update({id: id, value:30})
                  var opt={
                    scale: 1.4,
                    animation: { 
                      duration: 1000
                    }
                  }
                  network.focus(id,opt)
                  lastclicked=id
                }
                
            },
            network.on('hoverEdge',function(params){
              var from=st.peekRecord('profile', edges.get(params.edge).from)
              var to=st.peekRecord('profile', edges.get(params.edge).to)
              var result=getgroupname(from.detail,to.detail)
              edges.update({id: params.edge, label:result.group})
            }),
            network.on('blurEdge',function(params){
              // console.log(params.edge)
              edges.update({id: params.edge, label:' '})
            }),
            network.on("showPopup", function (id) {
              
          }),
            network.on('hoverNode',function(params){
              network.interactionHandler._checkShowPopup(params.pointer.DOM);
                var content=''
                content=content+"<center>Personal Informations<center><br>"
                var plam=getnodeProfile(params.node)
                let attributes = Ember.get(PersonalINFO, 'attributes')
                      attributes.forEach(function(meta, name) {
                        content=content+name+" : "+plam.personalinfo.get(name)+"<br>"
                      })
                attributes = Ember.get(Detail, 'attributes')
                attributes.forEach(function(meta, name) {
                  content=content+name+" : "+plam.detail.get(name)+"<br>"
                  // console.log(name)
                })
            }),
            network.on('doubleClick',function(params){
              console.log(params)
          }),
            );  
            
            
        },
        getstore(){
            this.get('cart').getstore()
        }
    },
    getOption(){
        return {
            interaction: {
                hover: true
            },
            groups: {
                Principle: {color:{background:'#d6cbd3'}, borderWidth:3},
                Student: {color:{background:'#eca1a6'}, borderWidth:3},
                Teacher: {color:{background:'#92a8d1'}, borderWidth:3},
                Subject: {color:{background:'#b5e7a0'}, borderWidth:3}
              },
            edges:{
                labelHighlightBold: false,
                length:125,
                font:{
                  size:8
                },
                width:2,
                chosen:true,
                selectionWidth: function (width) {return width*3;}
            },
              nodes:{ 
                borderWidthSelected:1,
                value:15,
                brokenImage:"http://localhost:4200/avatar.png",
                shape:'circularImage',
                scaling:{
                    min:20,
                    max:50
                },
                image:'',
                color: {
                    border:'#2B7CE9',
                },
                size:5,
                chosen:{
                    node:true,
                },
                font:{
                    size:13,
                    color:"#fff",
                    background:"#50b8e7",
                    face:"Comic Sans MS",
                    multi:"padding-left: 50px;",
                },
            },
            physics:{
                enabled: true,
                barnesHut: {
                  gravitationalConstant: -2000,
                  centralGravity: .2,
                  springLength: 95,
                  springConstant: 0.04,
                  damping: 0.09,
                  avoidOverlap: 0
                },
                forceAtlas2Based: {
                  gravitationalConstant: -50,
                  centralGravity: 0.01,
                  springConstant: 0.08,
                  springLength: 100,
                  damping: 0.4,
                  avoidOverlap: 0
                },
                repulsion: {
                  centralGravity: 0.2,
                  springLength: 200,
                  springConstant: 0.05,
                  nodeDistance: 100,
                  damping: 0.09
                },
                hierarchicalRepulsion: {
                  centralGravity: 0.0,
                  springLength: 100,
                  springConstant: 0.01,
                  nodeDistance: 100,
                  damping: 0.09
                },
                maxVelocity: 50,
                minVelocity: 0.01,
                solver: 'barnesHut',
                stabilization: {
                  enabled: true,
                  iterations: 1000,
                  updateInterval: 100,
                  onlyDynamicEdges: false,
                  fit: true
                },
                timestep: 0.5,
                adaptiveTimestep: false
              },
            
          }
       },
    
});
