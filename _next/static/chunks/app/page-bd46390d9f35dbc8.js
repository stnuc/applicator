(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8781:function(e,t,n){Promise.resolve().then(n.bind(n,3308)),Promise.resolve().then(n.bind(n,9526)),Promise.resolve().then(n.bind(n,9771)),Promise.resolve().then(n.t.bind(n,4910,23)),Promise.resolve().then(n.t.bind(n,7490,23)),Promise.resolve().then(n.t.bind(n,8893,23))},3308:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return IntroducePage}});var i=n(7437),s=n(2265);function Card(e){let{title:t,content:n,direct:s=null}=e;t.split("\n");let r=null;return null!==s&&(r=(0,i.jsx)("span",{className:"card-direct",children:(0,i.jsx)("a",{href:s.url,children:(0,i.jsxs)("div",{className:"align-center",children:[(0,i.jsx)("p",{children:s.name}),(0,i.jsx)("svg",{className:"arrow",width:"70",height:"61",viewBox:"0 0 70 61",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M0 30.5H68M68 30.5L39 1M68 30.5L39 60",strokeWidth:"2"})})]})})})),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsxs)("div",{className:"card__container",children:[(0,i.jsx)("p",{className:"card-title",children:t}),(0,i.jsx)("p",{className:"card-content",children:n})]}),r]})}n(7490);var r=n(6691),o=n.n(r);function FixedImageBaseline(e){let{setIndex:t,setMax:n}=e,{height:r}=function(){let[e,t]=(0,s.useState)(getWindowDimensions());return(0,s.useEffect)(()=>{function handleResize(){t(getWindowDimensions())}return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),e}(),o=(0,s.useRef)(null),[a,l]=(0,s.useState)(!1);(0,s.useEffect)(()=>(l(!0),window.addEventListener("scroll",compute),()=>window.removeEventListener("scroll",compute)),[]);let compute=()=>{if(null==o.current)return;let e=o.current.getBoundingClientRect();e.y>r&&t(0),e.y<-2*r&&t(59);let i=Math.ceil((r-e.y)/r*20);t(i),n(i<=28)};return a?(0,i.jsx)("div",{className:"fix-image-baseline",ref:o}):(0,i.jsx)(i.Fragment,{})}function FixedImageAnimation(e){let{index:t}=e,n=(0,s.useMemo)(()=>{let e=[];for(let t=1;t<60;t++)e.push({front:"/fluid-front/".concat(t.toString().padStart(4,"0"),".png"),back:"/fluid-back/".concat(t.toString().padStart(4,"0"),".png")});return e},[]);return(0,i.jsx)(i.Fragment,{children:n.map((e,n)=>{let s=1;n!=t&&(s=0);let r=9999;return t>53&&(r=0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{opacity:s,position:"fixed",bottom:0,left:0,zIndex:r,width:"100vw",height:"100vh"},children:(0,i.jsx)(o(),{fill:!0,src:e.front,alt:"",style:{zIndex:r}})},"b".concat(n)),(0,i.jsx)("div",{style:{opacity:s,position:"fixed",bottom:0,left:0,zIndex:-99999,width:"100vw",height:"100vh"},children:(0,i.jsx)(o(),{fill:!0,src:e.back,alt:"",style:{zIndex:-99999}})},"f".concat(n))]})})})}function getWindowDimensions(){let{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}function IntroducePage(){let[e,t]=(0,s.useState)(0),[n,r]=(0,s.useState)(!0);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"introduce",children:[(0,i.jsx)(FixedImageAnimation,{index:e}),(0,i.jsx)("div",{className:"wave-card",children:n?(0,i.jsx)(Card,{title:"Explore\nWave of knowledge",content:"Applicator는 다양한 지식을 공유하는 것을 목표로 하는 학술 동아리입니다\n각기 다른 분야를 공부하고, 서로 공유하여 지식의 범위를 넓히는데 집중하죠\n이러한 활동을 지원하기위해, 세미나와 프로젝트 발표회를 개최합니다",direct:null}):(0,i.jsx)(Card,{title:"Seminar",content:"Applicator seminar는 자신의 지식을 공유하는 자리입니다\n온/오프라인 세미나를 통해, 지식을 공유/습득하세요\n주로 학부연구생이 참여합니다",direct:{name:"Check our seminar",url:"https://stnuc.github.io/seminar/"}})}),(0,i.jsx)(FixedImageBaseline,{setIndex:t,setMax:r}),(0,i.jsx)("div",{style:{height:"300vh"}})]})})}n(4169)},9526:function(e,t,n){"use strict";n.r(t),n.d(t,{JoinUs:function(){return JoinUs}});var i=n(7437),s=n(8674),r=n(2265);function JoinUs(){let[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(null);(0,r.useEffect)(()=>(window.addEventListener("scroll",scrollC),()=>window.removeEventListener("scroll",scrollC)),[]);let scrollC=()=>{if(null==n.current)return;let i=n.current.getBoundingClientRect();!(i.y>0)&&(e||(t(!0),(0,s.Z)({autoplay:!0,targets:".join .anime",translateY:0,color:"#FFFFFF",duration:400,delay:function(e,t){return[0,100,300][t]},easing:"easeInSine"})))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"join-bar",ref:n}),(0,i.jsx)("section",{className:"join",children:(0,i.jsxs)("div",{className:"join-container",children:[(0,i.jsx)("p",{className:"join-title anime",style:{transform:"translateY(10px)",color:"#FFFFFF00"},children:"Join us"}),(0,i.jsx)("p",{className:"join-subtitle anime",style:{transform:"translateY(10px)",color:"#FFFFFF00"},children:"준비 되셨나요? Applicator와 함께해요"}),(0,i.jsx)("p",{className:"join-apply anime",style:{transform:"translateY(10px)",color:"#FFFFFF00",cursor:"pointer"},onClick:()=>{location.href="https://forms.gle/J2gN8EsjsSERLRYT9"},children:"신청하기"})]})})]})}n(3919)},9771:function(e,t,n){"use strict";n.r(t),n.d(t,{MainTitle:function(){return MainTitle},SubTitle:function(){return SubTitle}});var i=n(7437),s=n(8674),r=n(2265);n(2209);var o=n(1527);function MainTitle(){return(0,r.useEffect)(()=>{(0,s.Z)({targets:".main-line path",strokeDashoffset:[0,e=>-1*s.Z.setDashoffset(e)],easing:"easeInOutSine",duration:400,delay:function(e,t){return t>=3?3600:350*t+2400},direction:"normal"}),(0,s.Z)({targets:".main-line path",strokeDashoffset:[s.Z.setDashoffset,0],easing:"easeInOutSine",duration:400,delay:function(e,t){return t>=3?1800:350*t+100},direction:"normal"}),(0,s.Z)({targets:".main-title path",strokeDashoffset:[s.Z.setDashoffset,0],easing:"easeInOutSine",duration:1e3,delay:function(e,t){return(11-t)*250},direction:"normal"})},[]),(0,i.jsxs)("div",{className:"main-logo",children:[(0,i.jsxs)("svg",{width:"842",height:"411",viewBox:"0 0 842 411",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"main-line",children:[(0,i.jsx)("path",{strokeWidth:"2",stroke:"white",d:"M320 386 C320 286 320 186 320 86 "}),(0,i.jsx)("path",{strokeWidth:"2",stroke:"white",d:"M59 281 C312.33 281 565.66 281 819 281 "}),(0,i.jsx)("path",{strokeWidth:"2",stroke:"white",d:"M124 168 C362 168 600 168 838 168 "}),(0,i.jsx)("path",{strokeWidth:"2",stroke:"white",d:"M805 340 C805 240 805 140 805 40 "})]}),(0,i.jsxs)("svg",{width:"842",height:"411",viewBox:"0 0 842 411",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"main-title",children:[(0,i.jsx)("path",{d:"M737.853 278.556V279.556H738.853H768.534H769.534V278.556V216.587C769.534 203.931 778.884 194.924 791.798 194.924C795.928 194.924 801.45 195.717 804.158 196.49L805.433 196.855V195.529V169.056V168.261L804.658 168.082C801.967 167.461 798.08 167.053 795.007 167.053C783.031 167.053 773.087 173.576 768.532 185.953V169.658V168.658H767.532H738.853H737.853V169.658V278.556Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M660.489 224.408C660.489 241.455 665.666 255.805 675.097 265.902C684.536 276.008 698.15 281.763 714.835 281.763C731.52 281.763 745.183 276.008 754.671 265.904C764.153 255.808 769.382 241.458 769.382 224.408C769.382 207.358 764.153 193.057 754.669 183.01C745.18 172.957 731.517 167.254 714.835 167.254C698.153 167.254 684.538 172.957 675.099 183.012C665.666 193.06 660.489 207.361 660.489 224.408ZM737.099 224.408C737.099 233.817 735.164 241.928 731.444 247.653C727.752 253.335 722.29 256.699 715.036 256.699C707.674 256.699 702.111 253.329 698.346 247.646C694.554 241.922 692.571 233.813 692.571 224.408C692.571 214.901 694.555 206.742 698.347 200.993C702.112 195.286 707.675 191.916 715.036 191.916C722.289 191.916 727.751 195.28 731.443 200.986C735.164 206.735 737.099 214.897 737.099 224.408Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M695.633 169.658V168.658H694.633H675.177V143.586V142.586H674.177H644.496H643.496V143.586V168.658H629.455H628.455V169.658V191.919V192.919H629.455H643.496V249.271C643.394 260.053 647.104 268.037 653.699 273.297C660.257 278.527 669.535 280.96 680.394 280.96C687.837 280.96 693.123 280.559 696.422 279.94L697.238 279.788V278.958V255.493V254.376L696.127 254.499C692.571 254.895 687.408 255.094 684.422 255.095C681.503 254.996 679.248 254.41 677.711 253.001C676.193 251.61 675.177 249.229 675.177 245.065V192.919H694.633H695.633V191.919V169.658Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M602.178 213.583C609.531 213.112 622.888 212.464 628.313 212.22V204.364C628.216 200.096 626.708 196.781 624.007 194.515C621.284 192.23 617.228 190.913 611.865 190.913C606.999 190.913 603.098 192.033 600.244 193.974C597.404 195.906 595.542 198.691 594.793 202.158L594.622 202.946H593.816H565.538H564.438L564.543 201.851C565.472 192.148 570.175 183.471 578.343 177.236C586.501 171.008 598.06 167.254 612.667 167.254C624.628 167.254 636.381 169.937 645.174 176.031C654.014 182.156 659.794 191.686 659.794 205.155V278.556V279.556H658.794H630.717H629.717V278.556V265.847C623.882 275.215 613.601 281.562 598.027 281.562C587.438 281.562 578.111 278.813 571.414 273.206C564.692 267.579 560.728 259.161 560.728 248.073C560.728 235.619 565.796 227.235 573.594 221.855C581.33 216.517 591.668 214.19 602.178 213.583ZM602.178 213.583C602.179 213.583 602.18 213.583 602.181 213.583L602.239 214.581L602.175 213.583C602.176 213.583 602.177 213.583 602.178 213.583ZM628.313 239.65V239.659L628.313 239.667C628.502 250.434 619.44 259.106 606.45 259.106C601.877 259.106 598.05 258.034 595.392 256.046C592.77 254.085 591.206 251.177 591.206 247.271C591.206 243.356 592.728 240.334 595.424 238.145C598.153 235.928 602.153 234.517 607.149 234.027C611.883 233.563 623.141 232.923 628.313 232.675V239.65Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M590.67 210.567H591.719L591.668 209.519C591.054 196.827 585.876 186.236 577.232 178.826C568.596 171.424 556.569 167.254 542.337 167.254C525.55 167.254 511.936 173.06 502.523 183.165C493.118 193.262 487.991 207.561 487.991 224.408C487.991 241.252 493.066 255.6 502.445 265.748C511.833 275.906 525.449 281.763 542.337 281.763C556.974 281.763 568.957 277.44 577.469 269.904C585.987 262.365 590.952 251.677 591.668 239.105L591.728 238.048H590.67H562.793H561.936L561.805 238.895C560.932 244.519 558.62 248.804 555.34 251.683C552.061 254.561 547.742 256.098 542.738 256.098C535.832 256.098 530.218 253.237 526.299 247.86C522.353 242.447 520.073 234.407 520.073 224.007C520.073 213.816 522.4 205.876 526.37 200.511C530.317 195.176 535.934 192.317 542.738 192.317C548.119 192.317 552.429 194.088 555.612 197.107C558.807 200.136 560.932 204.484 561.807 209.732L561.946 210.567H562.793H590.67Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M487.838 278.556V279.556H488.838H518.52H519.52V278.556V169.658V168.658H518.52H488.838H487.838V169.658V278.556ZM486.435 140.378C486.435 149.218 494.17 156.419 503.679 156.419C512.996 156.419 520.723 149.21 520.723 140.378C520.723 131.353 513.005 124.136 503.679 124.136C494.161 124.136 486.435 131.345 486.435 140.378Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M503.955 133.358V132.358H502.955H473.274H472.274V133.358V278.557V279.557H473.274H502.955H503.955V278.557V133.358Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M396.511 319.469V320.469H397.511H427.193H428.193V319.469V263.716C432.924 272.387 442.171 281.361 459.08 281.361C471.798 281.361 483.115 276.275 491.234 266.537C499.342 256.813 504.201 242.528 504.201 224.207C504.201 205.382 499.139 191.141 490.923 181.59C482.699 172.029 471.385 167.254 459.08 167.254C441.326 167.254 432.209 177.267 427.792 186.019V169.658V168.658H426.792H397.511H396.511V169.658V319.469ZM449.654 255.697C442.676 255.697 437.213 252.61 433.456 247.155C429.673 241.66 427.591 233.709 427.591 224.007C427.591 214.3 429.624 206.506 433.376 201.168C437.096 195.873 442.555 192.919 449.654 192.919C456.946 192.919 462.455 196.016 466.18 201.388C469.935 206.804 471.918 214.602 471.918 224.007C471.918 233.514 469.934 241.466 466.174 247.01C462.444 252.51 456.933 255.697 449.654 255.697Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M319.749 319.469V320.469H320.749H350.43H351.43V319.469V263.716C356.162 272.387 365.408 281.361 382.318 281.361C395.036 281.361 406.352 276.275 414.472 266.537C422.58 256.813 427.439 242.528 427.439 224.207C427.439 205.382 422.377 191.141 414.161 181.59C405.937 172.029 394.622 167.254 382.318 167.254C364.564 167.254 355.446 177.267 351.029 186.019V169.658V168.658H350.029H320.749H319.749V169.658V319.469ZM372.892 255.697C365.914 255.697 360.451 252.61 356.694 247.155C352.91 241.66 350.829 233.709 350.829 224.007C350.829 214.3 352.862 206.506 356.613 201.168C360.334 195.873 365.792 192.919 372.892 192.919C380.183 192.919 385.693 196.016 389.418 201.388C393.173 206.804 395.156 214.602 395.156 224.007C395.156 233.514 393.172 241.466 389.412 247.01C385.681 252.51 380.171 255.697 372.892 255.697Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M224.214 204.822C226.717 141.06 234.027 64.4254 240.139 12.2271L265.962 15.2509C260.703 60.1663 254.578 123.1 251.429 179.952C261.232 170.914 270.823 162.004 280.075 153.408C307.614 127.823 332.15 105.028 350.358 89.9625C356.649 84.7579 362.412 80.2822 367.452 76.8449C372.186 73.616 377.369 70.5317 382.276 69.1426C384.704 68.4552 388.642 67.712 392.931 68.9938C398.095 70.5376 401.638 74.3533 403.268 78.7975C404.636 82.5282 404.511 86.2051 404.201 88.8025C403.867 91.6022 403.133 94.5353 402.206 97.4679C389.185 138.627 363.953 191.027 337.313 235.435C323.964 257.687 310.085 278.229 296.982 294.545C284.262 310.382 271.058 323.81 258.856 329.9C254.092 332.278 248.076 333.066 242.219 330.209C237.121 327.722 234.106 323.385 232.324 319.989C228.767 313.215 226.822 303.746 225.592 293.825C223.834 279.639 223.198 261.239 223.341 240.518C195.142 265.54 166.086 290.087 138.389 310.712C117.384 326.354 96.8763 339.957 77.8938 349.835C59.1456 359.59 40.7403 366.328 24.2133 366.962L23.2158 340.982C34.0409 340.566 48.3791 335.883 65.8921 326.77C83.1708 317.779 102.442 305.063 122.86 289.859C155.673 265.424 190.712 235.117 224.214 204.822ZM249.812 216.703C248.874 247.088 249.22 273.081 251.395 290.627C252.025 295.712 252.761 299.635 253.497 302.541C259.71 297.689 267.594 289.615 276.71 278.264C288.855 263.142 302.065 243.65 315.017 222.06C337.434 184.69 358.549 141.926 371.767 106.063C370.23 107.289 368.618 108.6 366.933 109.995C349.344 124.548 325.681 146.531 298.408 171.869C288.098 181.447 277.272 191.505 266.063 201.821C260.72 206.739 255.297 211.709 249.812 216.703ZM378.406 85.4376C378.408 85.4361 378.408 85.4726 378.402 85.5509C378.402 85.4781 378.405 85.4391 378.406 85.4376ZM255.625 308.374C255.624 308.376 255.603 308.349 255.562 308.286C255.605 308.341 255.626 308.372 255.625 308.374Z",stroke:"#CDCDCD",strokeWidth:"2"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.0675 402.992C16.2278 400.423 10.2394 395.349 6 389.398L28.8049 373.152C30.1762 375.076 31.5386 375.975 32.7867 376.384C34.0163 376.787 36.3366 377.109 40.3156 375.81C48.8894 373.009 62.7837 363.398 81.7145 339.288C119.232 291.507 171.4 193.504 237.773 9L264.12 18.4781C197.521 203.61 144.138 305.126 103.737 356.58C83.7087 382.087 65.5521 397.022 49.0093 402.426C40.43 405.228 31.9256 405.567 24.0675 402.992Z",stroke:"#CDCDCD",strokeWidth:"2"})]})]})}function SubTitle(){let e=(0,o.useMediaQuery)({query:"(max-width: 1023px)"});return(0,r.useEffect)(()=>{(0,s.Z)({autoplay:!0,targets:".sub-title",easing:"easeOutSine",translateY:0,duration:400,delay:4400,color:"#FFFFFF"}).play()},[]),(0,i.jsxs)("div",{className:"sub-title",style:{transform:"translateY(10px)",color:"#FFFFFF00"},children:[(0,i.jsx)("p",{children:"Applicator"}),e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Society in Seoul National University of Science and Technology"}),(0,i.jsx)("p",{children:"Dept. of Applied Artifical Intelligence"})]}):(0,i.jsx)("p",{children:"Society in Seoul National University of Science and Technology, Dept. of Applied Artifical Intelligence"})]})}},6036:function(e,t,n){"use strict";function GithubPageLoader(e){let{src:t,width:n,quality:i}=e;return"https://stnuc.github.io/applicator/static/assets/".concat(t)}n.r(t),n.d(t,{default:function(){return GithubPageLoader}})},7490:function(){},8893:function(){},4169:function(){},3919:function(){},4910:function(){},2209:function(){}},function(e){e.O(0,[292,971,472,744],function(){return e(e.s=8781)}),_N_E=e.O()}]);