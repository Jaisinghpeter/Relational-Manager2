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
                edgeList.pushObject({
                    from:parseInt(rootid),
                    to:parseInt(parentid)
                })
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
       getoption2(){
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
            physics: {barnesHut: {springLength:100, springConstant: 0.01}},
              
            layout:{
                hierarchical: {
                    enabled:false,
                    sortMethod: 'directed'
                }
            },
            physics:{
                barnesHut:{
                    springLength:50
                }
            },
            nodes:{
                chosen:true,
                font:{
                    size:20
                }
            },
            
            // physics: false,
            autoResize: false,
            height: '100%',
            width: '100%',
            edges:{
                labelHighlightBold: false,
                chosen:true,
                selectionWidth: function (width) {return width*3;}
            },
            nodes:{
                widthConstraint:
                { minimum: 150, maximum: 176,},
   
                borderWidthSelected:1,
                color: {
                    border:'#2B7CE9',
                    // background: '#97C2FC'
                },
                size:5,
                widthConstraint: false,
                chosen:{
                    node:true
                }
            }
          }
       },
       getoption(){
           return {
            interaction: {
                hover: true,
                dragNodes:false
            },
            groups: {
                Principle: {color:{background:'#d6cbd3'}, borderWidth:3},
                Student: {color:{background:'#eca1a6'}, borderWidth:3},
                Teacher: {color:{background:'#92a8d1'}, borderWidth:3},
                Subject: {color:{background:'#b5e7a0'}, borderWidth:3}
              },
            physics: {barnesHut: {springLength:100, springConstant: 0.01}},
            layout:{
                hierarchical: {
                    enabled:true,
                    sortMethod: 'directed'
                }
            },
            // physics:{enabled:false},
            physics: false,
            autoResize: false,
            height: '100%',
            width: '100%',
            edges:{
                labelHighlightBold: false,
                chosen:false,
                selectionWidth: function (width) {return width*3;}
            },
            nodes:{
                widthConstraint:
                { minimum: 150, maximum: 176,},
   
                borderWidthSelected:1,
                color: {
                    border:'#2B7CE9',
                    // background: '#97C2FC',
                    highlight:{
                        // background:'#D2E5FF'
                    }
                },
                size:5,
                widthConstraint: false,
                chosen:true,
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
