import Component from '@ember/component';
import faker from 'faker';
import { inject as service } from '@ember/service';
export default Component.extend({
    store: Ember.inject.service(),
    cart: service('jsonservice'),
    nodeList:[],
    edgeList:[],
    init(){
        this._super(...arguments)
        this.nodeList=[],
        this.edgeList=[]
    },
    actions:{
        getgraph(){
            this.get('cart').getjsonservice()
            var st=this.store
            var valarr=this.store.peekAll('profile')
            var prof=valarr.objectAt(0)
            this.nodeList.pushObject({
                id:prof.id,
                college:prof.detail.get('college'),
                label:prof.personalinfo.get('name'),
                work:prof.detail.get('name'),
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
            function getgroupname(val1,val2){
              // console.log("X"+val1)
              // console.log("Y"+val2)
              if(val1==val2)
                return true
              else  
                return false
            }
              network.on('click', function(properties) {
                if(properties.nodes[0]){
                  if(lastclicked){
                    nodes.update({id: lastclicked, value:22})
                  }
                  var id=properties.nodes[0]
                  var val=getnodeProfile(id)
                  var templist=[]
                  // console.log(val.detail.get('college')) 
                  for(var i=0;i<val.friend.length;i++){
                    try{
                    var prof=st.peekRecord('profile', val.friend[i])
                    if(!templist.includes(val.friend[i])){
                      var group,color
                      if((getgroupname(val.detail.get('college'),prof.detail.get('college'))
                      && (getgroupname(val.detail.get('work'),prof.detail.get('work'))))
                      ){
                        group="Friends"
                        color="#000000"
                      }
                      else if((getgroupname(val.detail.get('college'),prof.detail.get('college')))
                      ){
                        group="College"
                        color="#FF0000"
                      }
                      else if((getgroupname(val.detail.get('work'),prof.detail.get('work')))
                      ){
                        group="Work"
                        color="#0000FF"
                      }
                      else{
                        group="Acquitance"
                        color="#00FF00"
                      }
                      // console.log(getgroupname(val.detail.get('work'),prof.detail.get('work')))
                      
                      var college=getgroupname(val.detail.get('college'),prof.detail.get('college'))
                      var work=getgroupname(val.detail.get('work'),prof.detail.get('work'))
                      var work=getgroupname(val.detail.get('work'),prof.detail.get('work'))
                       if(checkifNodePresent(val.friend[i])){
                        templist.pushObject(val.friend[i])
                        nodes.update({
                        id:prof.id,
                        college:prof.detail.get('college'),
                        label:prof.personalinfo.get('name'),
                        work:prof.detail.get('work'),
                        image:faker.image.avatar(),
                        gender:prof.personalinfo.get('gender'),
                      })
                      edges.update({
                          from:id,
                          to:prof.id,
                          color:{color:color},
                          label:group,
                          group:group
                      })
                       }
                       else{
                           if(checkedgePrensent(val.friend[i],id)){
                            edges.update({
                                from:id,
                                to:prof.id,
                                label:group,
                                color:{color:color},
                                group:group
                            })
                           }
                       }
                    } 
                  }
                  catch{
                    console.log("SOme thing Wrong Happended")
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
            network.on('hoverNode',function(params){
                var plam=getnodeProfile(params.node)
                var content=''
                content=content+"<center>Details<center><br>"
                content=content+"Name :"+plam.personalinfo.get('name')+"<br>"
                content=content+"College :"+plam.detail.get('college')+"<br>"
                content=content+"Work :"+plam.detail.get('work')+"<br>"
                
                  // console.log(params.node)
                  
                  // console.log(plam.detail.get('college'))
                $('#mynetwork').qtip({
                    // content=this.content
                    content: content,
                      show: {
                        event: event.type // original event
                      },
                      position: {
                        my: 'bottom left',
                        target: 'mouse',
                        adjust: {
                          x: 10, y: 10
                        }
                      }
                    });
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
                chosen:true,
                selectionWidth: function (width) {return width*3;}
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
                // widthConstraint:{
                //     minimum:15,
                //     maximum:25
                // },
                color: {
                    border:'#2B7CE9',
                },
                size:5,
                chosen:{
                    node:true
                },
                font:{
                    size:13
                }
            }
          }
       },
    
});
