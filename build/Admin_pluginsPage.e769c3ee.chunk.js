"use strict";(self.webpackChunkart_gharana_api=self.webpackChunkart_gharana_api||[]).push([[3677],{14928:(M,o,t)=>{t.r(o),t.d(o,{default:()=>D});var e=t(67294),n=t(52358),r=t(64593),i=t(86896),c=t(86706),m=t(99369),s=t(14087),d=t(17034),v=t(185),y=t(53979),T=t(49066),C=t(38939),x=t(8060),P=t(79031),g=t(37909),u=t(75515),L=t(15234),A=t(88767);const I=async()=>{const{get:l}=(0,n.tg)(),{data:a}=await l("/admin/plugins");return a},O=l=>{const a=(0,n.lm)();return(0,A.useQuery)("list-enabled-plugins",()=>I(),{onSuccess(){l&&l()},onError(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Z=()=>{const{formatMessage:l}=(0,i.Z)(),{notifyStatus:a}=(0,s.G)();(0,n.go)();const f=l({id:"global.plugins",defaultMessage:"Plugins"}),B=()=>{a(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:f}))},{status:h,data:p}=O(B);return h!=="success"&&h!=="error"?e.createElement(d.A,null,e.createElement(v.o,{"aria-busy":!0},e.createElement(n.dO,null))):e.createElement(d.A,null,e.createElement(v.o,null,e.createElement(y.T,{title:f,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(T.D,null,e.createElement(C.i,{colCount:2,rowCount:p?.plugins?.length??0+1},e.createElement(x.h,null,e.createElement(P.Tr,null,e.createElement(g.Th,null,e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(g.Th,null,e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),e.createElement(L.p,null,p.plugins.map(({name:E,displayName:N,description:j})=>e.createElement(P.Tr,{key:E},e.createElement(g.Td,null,e.createElement(u.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${E}`,defaultMessage:N}))),e.createElement(g.Td,null,e.createElement(u.Z,{textColor:"neutral800"},l({id:`global.plugins.${E}.description`,defaultMessage:j}))))))))))},D=()=>{const{formatMessage:l}=(0,i.Z)(),a=(0,c.v9)(m._);return e.createElement(n.O4,{permissions:a.marketplace.main},e.createElement(r.q,{title:l({id:"global.plugins",defaultMessage:"Plugins"})}),e.createElement(Z,null))}},17034:(M,o,t)=>{t.d(o,{A:()=>m});var e=t(85893),n=t(88972),r=t(41580);const i=(0,n.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,c=(0,n.ZP)(r.x)`
  overflow-x: hidden;
`,m=({sideNav:s,children:d})=>(0,e.jsxs)(i,{hasSideNav:!!s,children:[s,(0,e.jsx)(c,{paddingBottom:10,children:d})]})}}]);
