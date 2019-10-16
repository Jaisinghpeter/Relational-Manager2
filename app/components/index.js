import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    nodes:2,
    checkval:1,
    activeid:0,
    cart: service('jsondata'), 
    lastclicked:5,
    actions:{
        getgraph(){
        this.activeid=5;
        this.set('activeid','1')
        var leftvalues=this.get('cart').leftGetNodes()
          var nodes = new vis.DataSet(leftvalues[0].nodeList)
          var edges = new vis.DataSet(leftvalues[0].edgeList)
          var container = document.getElementById('mynetwork');
          var data = {
            nodes: nodes,
            edges: edges
          };
          var options = this.get('cart').getoption();
          var network = this.get('cart').getnetwork1(container, data, options);
          var network = new vis.Network(container, data, options);
          var temp_this = this;
          network.on('hoverNode',function(params){
            // console.log(network.getConnectedEdges(params.node))
            //   console.log(nodes)
            var content=''
              for(var i=1;i<=nodes.length;i++){
                  if(nodes._data[i].id==params.node){
                    content='<center>'+nodes._data[i].group+'<center>' 
                    content=content+'Name : '+nodes._data[i].labelname+'<br>';
                    if(nodes._data[i].group=='Principle'){
                        content=content+'College Name : ' +nodes._data[i].college
                    }
                    if(nodes._data[i].group=='Teacher'){
                        content=content+'Experience : ' +nodes._data[i].experience+'<br>'
                        content=content+'Qualification : ' +nodes._data[i].qualification
                    }
                    if(nodes._data[i].group=='Student'){
                        content=content+'Percentage : ' +nodes._data[i].percentage+'%'
                    }
                    if(nodes._data[i].group=='Subject'){
                        content=content+'Syllabus : ' +nodes._data[i].syllabus
                    }
                    // console.log(nodes._data[i].labelname)
                  }
              }
              lastclicked:null,
              console.log(nodes)
            // $('#mynetwork').qtip({
            //     // content=this.content
            //     content: col,
                
            //       show: {
            //         event: event.type // original event
            //       },
            //       position: {
            //         my: 'bottom left',
            //         target: 'mouse',
            //         adjust: {
            //           x: 10, y: 10
            //         }
            //       }
            //     });
        }),
          network.on('click', function(properties) {
            //   console.log("X"+k);
            if(properties.nodes[0]){
              if(this.lastclicked){
                nodes.update({id: this.lastclicked, value:20})
              }
              this.activeid=properties.nodes;
              var ids = properties.nodes;
              var id=ids[0]
              console.log(nodes.get(id))
              nodes.update({id: id, value:30})
              console.log(nodes)
              // console.log(edges)
              var opt={
                scale: 2,
                animation: { 
                  duration: 1000
                }
              }
              network.focus(id,opt)
              this.lastclicked=id
              document.getElementById("p1").innerHTML =ids;
            }
            
        },
        );  
        
        
    },
 
    
}
});
