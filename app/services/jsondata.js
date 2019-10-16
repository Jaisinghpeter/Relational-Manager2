import Service from '@ember/service';
import jquery from 'jquery'
export default Service.extend({
    JSONArray:[{
        "id": "P01",
        "name": "Sundara Pillai",
        "type":"Principle",
        "College":"Jerusalem",
        "Relation":[],
        "datas":[
            {
                "id": "T01",
                "name": "Revathi",
                "type":"Teacher",
                "Experience":"5",
                "Qualification":"M.Tech",
                "Relation":[],
                "datas": [
                    {
                        "id": "S01",
                        "type":"Student",
                        "Percentage":"100",
                        "name": "Siva",
                        "Relation":[],
                        "datas":[]
                    },
                    {
                        "id": "S02",
                        "type":"Student",
                        "Percentage":"50",
                        "name": "Jaisingh",
                        "Relation":[],
                        "datas":[]
                    },
                    {
                        "id": "S04",
                        "type":"Student",
                        "Percentage":"80",
                        "name": "Naveen",
                        "Relation":[],
                        "datas":[]
                    },
                    {
                        "id": "SJ01",
                        "type":"Computer",
                        "Syllabus":"Machine Learning",
                        "name": "Subject1",
                        "Relation":[],
                        "datas":[]
                    },
                    {
                        "id": "SJ04",
                        "type":"Statistics",
                        "Syllabus":"Deep Learning",
                        "name": "Subject2",
                        "datas":[]
                    }
                ]
            },
            {
                "id": "T02",
                "name": "Kamala",
                "type":"Teacher",
                "Experience":"3",
                "Qualification":"Ph.D",
                "Relation":[],
                "datas": [
                    {
                        "id": "S02",
                        "type":"Student",
                        "Percentage":"50",
                        "name": "Jaisingh",
                        "datas":[]
                    },
                    {
                        "id": "S03",
                        "type":"Student",
                        "Percentage":"60",
                        "name": "Mani",
                        "Relation":[],
                        "datas":[]
                    }
                ]
            }
            
        ]
       }],
       leftGetNodes(){
        var returnList=[];
        var nodeList=[];
        var edgeList=[];
        var i,j,k;
        var  idcounter=0;
        var rootid,parentid,childid;
        for(i=0;i<this.JSONArray.length;i++){
            nodeList.pushObject({
                id:parseInt(idcounter=idcounter+1),
                jsonid:this.JSONArray[i].id,
                group:'Principle',
                college:this.JSONArray[i].College,
                label:this.JSONArray[i].name[0],
                labelname:this.JSONArray[i].name
            })
            rootid=idcounter
            for(j=0;j<this.JSONArray[i].datas.length;j++){
                nodeList.pushObject({
                    id:parseInt(idcounter=idcounter+1),
                    jsonid:this.JSONArray[i].datas[j].id,
                    group:'Teacher',
                    experience:this.JSONArray[i].datas[j].Experience,
                    qualification:this.JSONArray[i].datas[j].Qualification,
                    label:this.JSONArray[i].datas[j].name[0],
                    labelname:this.JSONArray[i].datas[j].name
                })
                parentid=idcounter
                // edgeList.pushObject({
                //     from:parseInt(rootid),
                //     to:parseInt(parentid)
                // })
                for(k=0;k<this.JSONArray[i].datas[j].datas.length;k++){
                    if(this.JSONArray[i].datas[j].datas[k].type=='Student'){
                        nodeList.pushObject({
                            id:parseInt(idcounter=idcounter+1),
                            jsonid:this.JSONArray[i].datas[j].datas[k].id,
                            group:'Student',
                            percentage:this.JSONArray[i].datas[j].datas[k].Percentage,
                            label:this.JSONArray[i].datas[j].datas[k].name[0],
                            labelname:this.JSONArray[i].datas[j].datas[k].name
                        })    
                    }
                    else{
                        nodeList.pushObject({
                            id:parseInt(idcounter=idcounter+1),
                            jsonid:this.JSONArray[i].datas[j].datas[k].id,
                            group:'Subject',
                            syllabus:this.JSONArray[i].datas[j].datas[k].Syllabus,
                            label:this.JSONArray[i].datas[j].datas[k].name[0],
                            labelname:this.JSONArray[i].datas[j].datas[k].name
                        })
                    }
                    
                    childid=idcounter
                    edgeList.pushObject({
                        from:parseInt(parentid),
                        to:parseInt(childid)
                    })
                }
            }
        }
        returnList.pushObject({
            nodeList:nodeList,
            edgeList:edgeList
        })
        //  console.log(returnList)
        return returnList
       },
       getoption(){
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
                solver: 'repulsion',
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
                shape:'circularImage',
                scaling:{
                    min:20,
                    max:50
                },
                image:'',
                widthConstraint:{
                    minimum:10,
                    maximum:45
                },
                color: {
                    border:'#2B7CE9',
                },
                size:5,
                chosen:{
                    node:true
                },
                font:{
                    size:20
                }
            }
          }
       },
       network:null,
       data:null,
       getnetwork1(container, data, options){
            var network = new vis.Network(container, data, options);
            return network;
       },
       gethover(val){

       },
     
});
