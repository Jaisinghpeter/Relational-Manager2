import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    nodes:2,
    checkval:1,
    activeid:0,
    cart: service('jsondata'),
    init(){
        this._super(arguments);
        
    },
    activeid:null,
    didReceiveAttrs(){
        this._super(...arguments)
    },
    
    setgraph1(){
        // console.log(document.getElementById("p1").innerHTML);
        var leftvalues=this.get('cart').leftGetNodes()
          var nodes = new vis.DataSet(leftvalues[0].nodeList)
          var edges = new vis.DataSet(leftvalues[0].edgeList)
          var container = document.getElementById('mynetwork');
          var container2 = document.getElementById('mynetwork2');
          var data = {
            nodes: nodes,
            edges: edges
          };
          var options2 = this.get('cart').getoption2();
          var options = this.get('cart').getoption();
        //   var network = this.get('cart').getnetwork1(container, data, options);
          var network = new vis.Network(container, data, options);
          var ids=document.getElementById("p1").innerHTML;
          var nodesIdInDrawing=[];
          if(ids){
            var i;
            var clickedNodes = nodes.get(ids);
            for(i=1;i<=nodes.length;i++){
                if(clickedNodes.jsonid.trim()===nodes._data[i].jsonid.trim()){
                    nodesIdInDrawing.push(nodes._data[i].id)
                }
                if(clickedNodes.jsonid[0]!='P'){
                if(nodes._data[i].jsonid==clickedNodes.jsonid){
                    nodesIdInDrawing.push(network.getConnectedNodes(nodes._data[i].id, 'from'))
                    var top=network.getConnectedNodes(nodes._data[i].id, 'from');
                    if(clickedNodes.jsonid[0]!='T'){
                        nodesIdInDrawing.push(network.getConnectedNodes(top, 'from'))
                    }  
                    
                }}
            }}
            // console.log("Y"+this.checkval)
            var activeid=this.activeid
            
          network.selectNodes(nodesIdInDrawing);
          
          network.redraw()
          network.on('hoverNode',function(params){
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
              var col=content
            //   console.log(nodes)
            $('#mynetwork').qtip({
                // content=this.content
                content: col,
                
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
        })
        
          network.on('click', function(properties) 
          {
            this.activeid=properties.nodes;
            var ids = properties.nodes;
            activeid=ids
            document.getElementById("p1").innerHTML =ids;
            $( "#p1" ).trigger( "click" );
        },
        );  
        
    },
    setgraph2(){
        var leftvalues=this.get('cart').leftGetNodes()
          var nodes = new vis.DataSet(leftvalues[0].nodeList)
          var edges = new vis.DataSet(leftvalues[0].edgeList)
          var container2 = document.getElementById('mynetwork2');
          var data = {
            nodes: nodes,
            edges: edges
          };
          var options2 = this.get('cart').getoption2();
          var network = new vis.Network(container2, data, options2);
          var leftval=document.getElementById("p1").innerHTML
            // console.log(leftval)
            var ids = leftval;
            var nodeList2=[];
            var edgeList2=[];
            var clickedNodes = nodes.get(leftval);
            if(clickedNodes){
            // console.log("Network 2"+clickedNodes.jsonid)
            var flag=1
            nodeList2.pushObject({
                id:parseInt(clickedNodes.id),
                group:clickedNodes.group,
                jsonid:clickedNodes.jsonid,
                label:clickedNodes.label
            })
            for(var i=1;i<=nodes.length;i++){
                if(nodes._data[i].jsonid==clickedNodes.jsonid){
                    for(var j=0;j<network.getConnectedNodes(nodes._data[i].id).length;j++){
                        var val=nodes.get(network.getConnectedNodes(nodes._data[i].id)[j])
                        // console.log("T"+val.id)
        
                        nodeList2.pushObject({
                            id:parseInt(val.id),
                            group:val.group,
                            college:val.college,
                            experience:val.experience,
                            qualification:val.qualification,
                            percentage:val.percentage,
                            syllabus:val.syllabus,
                            jsonid:val.jsonid,
                            label:val.label
                        })
                        edgeList2.pushObject({
                            from:parseInt(clickedNodes.id),
                            to:parseInt(val.id)
                        })
                    }
                }
            }
        }
        // console.log(nodeList2)
            var data2 = {
                nodes: nodeList2,
                edges: edgeList2
                };
            var network = new vis.Network(container2, data2, options2);
          network.redraw()
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
                    console.log(nodes._data[i].labelname)
                  }
              }
              var col=content
            //   console.log(nodes)
            $('#mynetwork2').qtip({
                // content=this.content
                content: col,
                
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
        })
          network.on('click', function(properties) {
            //   console.log("@nd")
            this.activeid=properties.nodes;
            var ids = properties.nodes;
            document.getElementById("p1").innerHTML =ids;
            $( "#p1" ).trigger( "click" );
        },
        
        ); 
    },
    actions:{
        getactiveid(){
            // console.log(this.activeid)
        },
        getgraph(){
        this.activeid=5;
        this.set('activeid','1')
        var leftvalues=this.get('cart').leftGetNodes()
          var nodes = new vis.DataSet(leftvalues[0].nodeList)
          var edges = new vis.DataSet(leftvalues[0].edgeList)
          var container = document.getElementById('mynetwork');
          var container2 = document.getElementById('mynetwork2');
          var data = {
            nodes: nodes,
            edges: edges
          };
          var options2 = this.get('cart').getoption2();
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
              var col=content
            //   console.log(nodes)
            $('#mynetwork').qtip({
                // content=this.content
                content: col,
                
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
        })
          network.on('click', function(properties) {
            //   console.log("X"+k);
            this.activeid=properties.nodes;
            var ids = properties.nodes;

            document.getElementById("p1").innerHTML =ids;
            $( "#p1" ).trigger( "click" );
        },
        );  
        
        
    },
    consoleevent(){
        this.setgraph1()
        this.setgraph2()
    },
 
    
}
});
