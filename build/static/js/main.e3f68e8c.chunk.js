(this["webpackJsonpspacex-details"]=this["webpackJsonpspacex-details"]||[]).push([[0],{19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(16),r=a.n(i),s=(a(24),a(13)),l=a(9),o=a(46),u=a(49),m=a(45),d=a(48),h=["Launch Year","Successful Launch","Successful Landing"],p=["Mission Ids"].concat(h),f=["True","False"],g=Object(o.a)({root:{margin:"5px",width:"210px",height:"auto","@media (min-width: 701px) and (max-width: 1024px) ":{flex:"0 0 33%",margin:"2% 5%"},"@media (min-width: 1025px) and (max-width: 1440px) ":{flex:"0 0 20%",margin:"2%"}},img:{backgroundColor:"#e6e6e6"},missionID:{fontWeight:600,fontSize:"14px"},values:{margin:0,fontSize:"13px",color:"#002b80",padding:"0px 8px"},heading:{marginBottom:"8px",fontSize:"12px",fontWeight:600,color:"#002b80"},listItems:{marginLeft:"25px"}}),x=function(e){var t=e.mission,a=t.flight_number,n=t.mission_name,i=t.launch_year,r=t.launch_success,s=t.mission_id,l=t.links,o=t.rocket.first_stage.cores[0].land_success,h=g();return c.a.createElement(u.a,{className:h.root},c.a.createElement(m.a,null,c.a.createElement(d.a,{className:h.img},c.a.createElement("img",{src:l.mission_patch_small,alt:"mission",width:"100%"})),c.a.createElement(d.a,{className:h.heading},n,"#",a),c.a.createElement(d.a,null,p.map((function(e,t){return c.a.createElement("div",null,c.a.createElement("span",{key:t,className:h.missionID},e,":"),0===t?c.a.createElement("div",null,s.length>0?s.map((function(e){return c.a.createElement("ul",{key:e,className:h.values},c.a.createElement("li",{className:h.listItems,key:e},e))})):c.a.createElement("span",{className:h.values},"No mission id found")):c.a.createElement("span",{className:h.values},function(e){switch(e){case p[1]:return i;case p[2]:return null!==r?r.toString():"NA";case p[3]:return null!==o?o.toString():"NA";default:return}}(e)))})))," "))},b=Object(o.a)({loader:{display:"flex",justifyContent:"center"},root:{width:"fit-content",margin:"10px"},container:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center"},img:{backgroundColor:"#e6e6e6"},missionID:{fontWeight:600,fontSize:"14px"},values:{margin:0,fontSize:"13px",color:"#002b80"},heading:{marginBottom:"12px",fontSize:"12px",fontWeight:600,color:"#002b80"}}),v=function(e){var t=e.endPoint,a=Object(n.useState)([]),i=Object(l.a)(a,2),r=i[0],s=i[1],o=b();return Object(n.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){s(e)})).catch(console.log)}),[t]),r.length>0&&c.a.createElement("div",{className:o.container},r.map((function(e){return c.a.createElement(x,{"data-testid":"Launch",key:e.flight_number,mission:e})})))},y=Object(o.a)((function(){return{mainContainer:{height:"100%",maxWidth:"1440px",backgroundColor:"#e6e6e6",margin:"auto","@media (max-width: 700px) ":{width:"min-content",margin:"25px auto"}},header:{fontSize:"20px",fontWeight:600,padding:"5px 10px"},itemContainer:{display:"flex",justifyContent:"center","@media (max-width: 700px) ":{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}},filters:{position:"relative",width:"200px",background:"white",height:"550px",margin:"5px 10px",borderRadius:"5px",fontWeight:600,padding:"5px",fontSize:"14px"},launchItems:{width:"75%","@media (max-width: 700px) ":{width:"220px",justifyContent:"center",alignItems:"center"}},filterTitle:{textAlign:"center",fontSize:"12px",fontWeight:400,padding:"5px","&:after":{content:'" "',position:"absolute",left:"40px",width:"125px",height:"18px",borderBottom:"1px solid grey"}},filterItems:{display:"flex",flexWrap:"wrap",justifyContent:"center"},buttonStyle:{borderRadius:"5px",background:"#95d095",height:"25px",width:"65px",border:"none",margin:"8px 13px","&:hover":{backgroundColor:"#4CAF50"}},buttonClickedStyle:{backgroundColor:"#4CAF50"},footer:{textAlign:"center",fontSize:"14px",width:"100%",margin:"20px 0"},footerLabel:{fontWeight:600}}})),E=function(){var e=Object(n.useState)("https://api.spaceXdata.com/v3/launches?limit=100"),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)({launch_success:!1,land_success:!1,launch_year:0}),o=Object(l.a)(r,2),u=o[0],m=o[1],d=y(),p=c.a.useCallback((function(){var e="https://api.spaceXdata.com/v3/launches?limit=100";switch(!0){case u.launch_success&&u.land_success&&0!==parseInt(u.launch_year):i(e+"&launch_success=true&land_success=true&launch_year=".concat(u.launch_year));break;case u.launch_success&&u.land_success:i(e+"&launch_success=true&land_success=true");break;case u.launch_success:i(e+"&launch_success=true");break;default:return e}}),[u]),g=function(e){var t=e.target.id,a=e.target.value;"Launch Year"===t&&a>0?m(Object(s.a)({},u,{launch_year:parseInt(a)})):"Successful Launch"===t&&"True"===a?m(Object(s.a)({},u,{launch_success:!0})):"Successful Landing"===t&&"True"===a&&m(Object(s.a)({},u,{land_success:!0}))};c.a.useEffect((function(){p()}),[p]);var x=function(e){var t,a;return(t=2006,a=2020,Array.from({length:a-t+1},(function(e,a){return a+t}))).map((function(t){return c.a.createElement("button",{className:d.buttonStyle,key:t,value:t,id:e,onClick:g},t)}))},b=function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:d.filterTitle},e),c.a.createElement("div",{className:d.filterItems},t))};return c.a.createElement(c.a.Fragment,null," ",c.a.createElement("div",{className:d.mainContainer},c.a.createElement("div",{className:d.header},"SpaceX Launch Programs"),c.a.createElement("div",{className:d.itemContainer},c.a.createElement("div",{className:d.filters},"Filters",h.map((function(e,t){return b(e,0===t?x(e):(a=e,f.map((function(e,t){return c.a.createElement("button",{className:d.buttonStyle,key:t,value:e,id:a,onClick:g},e)}))));var a}))),c.a.createElement("div",{className:d.launchItems},c.a.createElement(v,{endPoint:a}))),c.a.createElement("div",{className:d.footer},c.a.createElement("span",{className:d.footerLabel}," Developed by:"),"Aishwarya Rajeev")))},w=function(){return c.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.hydrate(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e3f68e8c.chunk.js.map