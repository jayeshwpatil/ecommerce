import{r as _,o as r,c as u,a as e,t as k,w as p,v as N,u as M,i as D,b as g,d as O,e as J,f as B,g as I,h as C,j as A,k as G,l as L,m as q,n as E,F as H,p as K,q as U}from"./index-DNL9bA4F.js";import{n as z}from"./noProductFound-Cwr5X8p_.js";const Q="/ecommerce/assets/sale-BfK1JMr-.png",X={class:"col-sm-3 customGrayBg"},Y={class:"p-3 text-dark"},Z=e("h4",null,"Filter",-1),ee=e("hr",null,null,-1),te={class:"form-label text-left"},se={class:"small pt-1",style:{float:"right"}},le=e("div",{class:"text-dark fw-bold"},"Price Range",-1),oe={class:"d-flex"},ae=e("hr",null,null,-1),ne=e("div",{class:"form-label text-left"},[e("span",{class:"text-dark fw-bold"},"Catagory")],-1),ce={class:"form-check"},ie=e("label",{class:"form-check-label",for:"Men"}," Men ",-1),re={class:"form-check"},ue=e("label",{class:"form-check-label",for:"Women"}," Women ",-1),de=e("hr",null,null,-1),he=e("div",{class:"form-label text-left"},[e("span",{class:"text-dark fw-bold"},"Variations")],-1),pe={class:"form-check"},_e=e("label",{class:"form-check-label",for:"T-Shirt"}," T-Shirt ",-1),ve={class:"form-check"},me=e("label",{class:"form-check-label",for:"Shirt"}," Shirt ",-1),fe={class:"form-check"},be=e("label",{class:"form-check-label",for:"Sweatshirt"}," Sweatshirt ",-1),ge={class:"form-check"},ke=e("label",{class:"form-check-label",for:"Jacket"}," Jacket ",-1),xe=e("hr",null,null,-1),Ve={__name:"leftFilter",props:["maxValue"],emits:["catagoryList","variationList","priceSet"],setup(x,{emit:V}){const m=x,d=V;let n=_(m.maxValue),h=_(0);const i=_([]),l=_([]),v=()=>{!n.value||n.value==0?n.value=m.maxValue:n.value;let $={minValue:h.value,maxValue:n.value};d("priceSet",$)},f=()=>{d("catagoryList",i.value)},b=()=>{d("variationList",l.value)};return($,o)=>(r(),u("div",X,[e("div",Y,[Z,ee,e("div",null,[e("div",te,[e("span",se,"Max product price "+k(m.maxValue),1),le]),e("div",oe,[e("div",null,[p(e("input",{class:"form-control custInputField",type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>D(h)?h.value=a:h=a),placeholder:"Min. "},null,512),[[N,M(h)]])]),e("div",null,[p(e("input",{class:"form-control custInputField mx-2",type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>D(n)?n.value=a:n=a),placeholder:"Max. "},null,512),[[N,M(n)]])]),e("button",{type:"button",class:"btn btn-success form-control btn-sm",onClick:v},"Submit")])]),ae,e("div",null,[ne,e("div",null,[e("div",ce,[p(e("input",{class:"form-check-input",type:"checkbox",value:"Men",id:"Men","onUpdate:modelValue":o[2]||(o[2]=a=>i.value=a),onChange:f},null,544),[[g,i.value]]),ie]),e("div",re,[p(e("input",{class:"form-check-input",type:"checkbox",value:"Women",id:"Women","onUpdate:modelValue":o[3]||(o[3]=a=>i.value=a),onChange:f},null,544),[[g,i.value]]),ue])])]),de,e("div",null,[he,e("div",null,[e("div",pe,[p(e("input",{class:"form-check-input",type:"checkbox",value:"T-Shirt",id:"T-Shirt","onUpdate:modelValue":o[4]||(o[4]=a=>l.value=a),onChange:b},null,544),[[g,l.value]]),_e]),e("div",ve,[p(e("input",{class:"form-check-input",type:"checkbox",value:"Shirt",id:"Shirt","onUpdate:modelValue":o[5]||(o[5]=a=>l.value=a),onChange:b},null,544),[[g,l.value]]),me]),e("div",fe,[p(e("input",{class:"form-check-input",type:"checkbox",value:"Sweatshirt",id:"Sweatshirt","onUpdate:modelValue":o[6]||(o[6]=a=>l.value=a),onChange:b},null,544),[[g,l.value]]),be]),e("div",ge,[p(e("input",{class:"form-check-input",type:"checkbox",value:"Jacket",id:"Jacket","onUpdate:modelValue":o[7]||(o[7]=a=>l.value=a),onChange:b},null,544),[[g,l.value]]),ke])])]),xe])]))}},ye={key:0,class:"px-3 mb-3 fw-bold py-1 d-flex justify-content-between align-items-center"},$e={class:"badge bg-success"},we=e("option",{value:"LtoH"},"Price - Low to High",-1),Ce=e("option",{value:"HtoL"},"Price - High to Low",-1),Pe=[we,Ce],Se={__name:"topFilter",props:["productLength"],emits:["SortOptionValue"],setup(x,{emit:V}){const m=V,d=x,n=_("LtoH"),h=()=>{m("SortOptionValue",n.value)};return(i,l)=>d.productLength>0?(r(),u("div",ye,[e("div",null,[e("span",$e,k(d.productLength),1),O(" Result Found ")]),e("div",null,[p(e("select",{class:"form-select fw-bold","onUpdate:modelValue":l[0]||(l[0]=v=>n.value=v),onChange:h},Pe,544),[[J,n.value]])])])):B("",!0)}},Le={class:"breadCrumWithHeading lightGreenBg"},Me={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},Be={class:"breadcrumb"},Fe={class:"breadcrumb-item"},Ne=e("i",{class:"bi bi-house-fill"},null,-1),De=e("li",{class:"breadcrumb-item active text-dark","aria-current":"page"},"Shop",-1),He={class:"p-5"},Ue={class:"row"},Oe={class:"col-sm-9"},Te={class:"row"},We={class:"row"},Re={key:0,src:Q,class:"salePosition"},je={class:"border"},Je={class:"text-center"},Ie=["src","onClick"],Ae={class:"px-3"},Ge=["onClick"],qe={class:"productPrice mt-3 d-flex justify-content-between"},Ee={key:0},Ke={class:"fw-bold text-success"},ze={class:"fw-bold text-dark opacity-25",style:{"margin-left":"10px"}},Qe={key:1},Xe={class:"fw-bold text-success"},Ye=["onClick"],Ze={key:0,class:"bi bi-heart-fill text-danger"},et={key:1,class:"bi bi-heart text-secondary"},tt=["onClick"],st=e("i",{class:"bi bi-cart-plus"},null,-1),lt=[st],nt={__name:"ShopView",props:["allProductData","serachProductName"],emits:["allData","addtoCartList"],setup(x,{emit:V}){const m=I(),d=V,n=x;let h=C(()=>n.allProductData),i=_(h),l=_({}),v=_([]),f=_([]);C(()=>w.value.length);let b=C(()=>{let t=i.value.map(s=>s.salePrice?s.salePrice:s.price);return Math.max(...t)});const $=(t,s)=>t.length<s?t:t.slice(0,s)+"...",o=t=>{if(console.log("sorting option is selected ",t),t=="LtoH")i.value=i.value.sort((s,y)=>{const c=s.salePrice?s.salePrice:s.price,P=y.salePrice?y.salePrice:y.price;return c-P});else return i.value.reverse()},a=t=>{console.log("price is ",t.minValue),l.value=t},T=t=>{v.value=t},W=t=>{f.value=t},w=C(()=>{if(Object.keys(l.value).length>0||v.value.length>0||f.value.length>0||n.serachProductName){let t=i.value;return console.log("selected catagory and variation"),Object.keys(l.value).length>0&&(t=t.filter(s=>s.salePrice?s.salePrice>l.value.minValue&&s.salePrice<=l.value.maxValue:s.price>l.value.minValue&&s.price<=l.value.maxValue)),v.value.length>0&&(t=t.filter(s=>v.value.includes(s.catagory))),f.value.length>0&&(t=t.filter(s=>f.value.includes(s.attribute))),n.serachProductName&&(t=t.filter(s=>s.name.toLowerCase().includes(n.serachProductName.toLowerCase()))),t}else return console.log("NO price, catagory & variation selected"),i.value}),F=t=>{console.log("full product is ",t),m.push(`/productDetails?id=${t.id}`)},R=t=>{d("allData",t)},j=t=>{d("addtoCartList",t)};return A(()=>{o("LtoH")}),(t,s)=>{const y=G("RouterLink");return r(),u(H,null,[e("div",Le,[e("nav",Me,[e("ol",Be,[e("li",Fe,[L(y,{to:"/"},{default:q(()=>[Ne,O(" Home")]),_:1})]),De])])]),e("div",He,[e("div",Ue,[L(Ve,{maxValue:M(b),onCatagoryList:T,onVariationList:W,onPriceSet:a},null,8,["maxValue"]),e("div",Oe,[L(Se,{productLength:w.value.length,onSortOptionValue:o},null,8,["productLength"]),e("div",Te,[w.value<1?(r(),E(z,{key:0})):B("",!0)]),e("div",We,[(r(!0),u(H,null,K(w.value,(c,P)=>(r(),u("div",{class:"col-sm-4 position-relative mb-4",key:P},[c.salePrice?(r(),u("img",Re)):B("",!0),e("div",je,[e("div",Je,[e("img",{src:c.imgSrc,class:"productImage pointer",style:{height:"250px"},onClick:S=>F(c)},null,8,Ie)]),e("div",Ae,[e("h1",{class:"productTitle fw-bold mt-3 pointer",onClick:S=>F(c)},k($(c.name,60)),9,Ge),e("h4",qe,[e("div",null,[c.salePrice?(r(),u("span",Ee,[e("span",Ke,"₹ "+k(c.salePrice),1),e("span",ze,[e("del",null,"₹"+k(c.price),1)])])):(r(),u("span",Qe,[e("span",Xe,"₹"+k(c.price),1)]))]),e("div",null,[e("a",{title:"Add to Wish List ",class:"fw-bold btn btn-sm btn-light roundedButton border mx-1",onClick:U(S=>R(c.id),["prevent"])},[c.wishlist?(r(),u("i",Ze)):(r(),u("i",et))],8,Ye),e("a",{title:"Add to Cart",class:"fw-bold btn btn-sm btn-success roundedButton border",onClick:U(S=>j(c.id),["prevent"])},lt,8,tt)])])])])]))),128))])])])])],64)}}};export{nt as default};
