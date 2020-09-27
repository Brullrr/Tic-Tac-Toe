(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,function(e,a,t){e.exports={Module:"playerInfoModule_Module__3Vrql",Player:"playerInfoModule_Player__FER9N",Button:"playerInfoModule_Button__12GEf",Select:"playerInfoModule_Select__3tC7O",Red:"playerInfoModule_Red__kT1LF",Orange:"playerInfoModule_Orange__36drA",Yellow:"playerInfoModule_Yellow__BKESh",Green:"playerInfoModule_Green__3u2nj",Blue:"playerInfoModule_Blue__1rooo",Purple:"playerInfoModule_Purple__2JBCf"}},function(e,a,t){e.exports={Scoreboard:"Scoreboard_Scoreboard__2eDu4",SignOne:"Scoreboard_SignOne__1muie",SignDivider:"Scoreboard_SignDivider__2WooO",SignTwo:"Scoreboard_SignTwo__2bFKh",WhoseTurn:"Scoreboard_WhoseTurn__3f4Dl"}},,function(e,a,t){e.exports={GameboardOuter:"Gameboard_GameboardOuter__2538M",ImageOne:"Gameboard_ImageOne___TaOV",ImageTwo:"Gameboard_ImageTwo__2MulT",Gameboard:"Gameboard_Gameboard___FNvw"}},,,function(e,a,t){e.exports={Module:"WinnerModule_Module__mrzMT",Title:"WinnerModule_Title__3Dun3",Button:"WinnerModule_Button__WTPhX"}},,,,,,function(e,a,t){e.exports={Backdrop:"backdrop_Backdrop__3ZjEc"}},function(e,a,t){e.exports={Tile:"Tile_Tile__1q6ms"}},,,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/capital_x.c53f5950.png"},function(e,a,t){e.exports=t.p+"static/media/capital_o.78e6d8c3.png"},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(10),l=t.n(o),c=(t(22),t(23),t(8)),i=t(11),s=t(12),T=t(16),u=t(15),m=t(5),d=t(1),p=t.n(d),y=t(13),w=t.n(y),h=function(){return n.a.createElement("div",{className:w.a.Backdrop})},O=function(e){var a=Object(r.useState)(""),t=Object(m.a)(a,2),o=t[0],l=t[1],c=Object(r.useState)(""),i=Object(m.a)(c,2),s=i[0],T=i[1],u=Object(r.useState)("red"),d=Object(m.a)(u,2),y=d[0],w=d[1],O=Object(r.useState)("blue"),S=Object(m.a)(O,2),g=S[0],B=S[1];return n.a.createElement(r.Fragment,null,n.a.createElement(h,null),n.a.createElement("div",{className:p.a.Module},n.a.createElement("div",{className:p.a.Player},n.a.createElement("label",null,"X is Player One"),n.a.createElement("input",{id:"playerOne",type:"text",placeholder:"Player One",maxLength:"15",onInput:function(e){return l(e.target.value)},value:o})),n.a.createElement("label",null,"Choose a color:"),n.a.createElement("select",{className:p.a.Select,onChange:function(e){return w(e.target.value)},value:y},n.a.createElement("option",{className:p.a.Red,value:"red"},"Red"),n.a.createElement("option",{className:p.a.Orange,value:"orange"},"Orange"),n.a.createElement("option",{className:p.a.Yellow,value:"yellow"},"Yellow"),n.a.createElement("option",{className:p.a.Green,value:"green"},"Green"),n.a.createElement("option",{className:p.a.Blue,value:"blue"},"Blue"),n.a.createElement("option",{className:p.a.Purple,value:"purple"},"Purple")),n.a.createElement("div",{className:p.a.Player},n.a.createElement("label",null,"O is Player Two"),n.a.createElement("input",{id:"playerTwo",type:"text",placeholder:"Player Two",maxLength:"15",onInput:function(e){return T(e.target.value)},value:s})),n.a.createElement("label",null,"Choose a color:"),n.a.createElement("select",{className:p.a.Select,onChange:function(e){B(e.target.value)},value:g},n.a.createElement("option",{className:p.a.Red,value:"red"},"Red"),n.a.createElement("option",{className:p.a.Orange,value:"orange"},"Orange"),n.a.createElement("option",{className:p.a.Yellow,value:"yellow"},"Yellow"),n.a.createElement("option",{className:p.a.Green,value:"green"},"Green"),n.a.createElement("option",{className:p.a.Blue,value:"blue"},"Blue"),n.a.createElement("option",{className:p.a.Purple,value:"purple"},"Purple")),n.a.createElement("button",{className:p.a.Button,onClick:function(){e.playButton(o,s,y,g)}},"Play")))},S=t(2),g=t.n(S),B=function(e){var a="";return a=e.turn?e.playerOneColor:e.playerTwoColor,n.a.createElement("div",{className:g.a.Scoreboard},n.a.createElement("p",{className:g.a.SignOne,style:{color:e.playerOneColor}},e.playerOneScore," "),n.a.createElement("p",{className:g.a.SignDivider},e.playerOneName," - ",e.playerTwoName),n.a.createElement("p",{className:g.a.SignTwo,style:{color:e.playerTwoColor}},e.playerTwoScore),n.a.createElement("p",{className:g.a.WhoseTurn,style:{color:a}},e.whoseTurn,"'s turn"))},f=t(4),_=t.n(f),E=t(14),N=t.n(E),b=function(e){return n.a.createElement("div",{className:N.a.Tile,onClick:e.clicked,style:{backgroundColor:e.color}},e.claim)},v=function(e){return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:_.a.GameboardOuter},n.a.createElement("img",{className:_.a.ImageOne,src:t(24),alt:"imageOne"}),n.a.createElement("div",{className:_.a.Gameboard},n.a.createElement(b,{clicked:function(){e.clicked(0)},claim:e.claimTile[0],color:e.tileOne}),n.a.createElement(b,{clicked:function(){e.clicked(1)},claim:e.claimTile[1],color:e.tileTwo}),n.a.createElement(b,{clicked:function(){e.clicked(2)},claim:e.claimTile[2],color:e.tileThree}),n.a.createElement(b,{clicked:function(){e.clicked(3)},claim:e.claimTile[3],color:e.tileFour}),n.a.createElement(b,{clicked:function(){e.clicked(4)},claim:e.claimTile[4],color:e.tileFive}),n.a.createElement(b,{clicked:function(){e.clicked(5)},claim:e.claimTile[5],color:e.tileSix}),n.a.createElement(b,{clicked:function(){e.clicked(6)},claim:e.claimTile[6],color:e.tileSeven}),n.a.createElement(b,{clicked:function(){e.clicked(7)},claim:e.claimTile[7],color:e.tileEight}),n.a.createElement(b,{clicked:function(){e.clicked(8)},claim:e.claimTile[8],color:e.tileNine})),n.a.createElement("img",{className:_.a.ImageTwo,src:t(25),alt:"imageTwo"})))},C=t(7),k=t.n(C),X=function(e){return n.a.createElement(r.Fragment,null,n.a.createElement(h,null),n.a.createElement("div",{className:k.a.Module,style:{backgroundColor:e.winningColor,border:"1px solid "+e.winningColor}},n.a.createElement("p",{className:k.a.Title},e.winner,e.wins),n.a.createElement("button",{className:k.a.Button,onClick:e.playAgainClicked},"New Game?")))},F=function(e){Object(T.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={playerOneScore:0,playerTwoScore:0,playerOneName:"Player One",playerTwoName:"Player Two",playerOneColor:"red",playerTwoColor:"blue",ticTacToeBoard:["","","","","","","","",""],editing:!0,turn:!0,winner:"hey",winnerScreen:!1,gameFinish:0},e.changePlayerOneHandler=function(a){a.length<1&&(a="Player One"),e.setState((function(){return{playerOneName:a}}))},e.changePlayerTwoHandler=function(a){a.length<1&&(a="Player Two"),e.setState((function(){return{playerTwoName:a}}))},e.updateWinnerHandler=function(){console.log(e.state.playerTwoColor),e.setState((function(e){return{gameFinish:e.gameFinish+1}})),"X"===e.state.ticTacToeBoard[0]&&"X"===e.state.ticTacToeBoard[1]&&"X"===e.state.ticTacToeBoard[2]&&e.setState((function(e){return{winner:e.playerOneName,winnerScreen:!0,playerOneScore:e.playerOneScore+1,gameFinish:0}})),"X"===e.state.ticTacToeBoard[3]&&"X"===e.state.ticTacToeBoard[4]&&"X"===e.state.ticTacToeBoard[5]&&e.setState((function(e){return{winner:e.playerOneName,winnerScreen:!0,playerOneScore:e.playerOneScore+1,gameFinish:0}})),"X"===e.state.ticTacToeBoard[6]&&"X"===e.state.ticTacToeBoard[7]&&"X"===e.state.ticTacToeBoard[8]&&e.setState((function(e){return{winner:e.playerOneName,winnerScreen:!0,playerOneScore:e.playerOneScore+1,gameFinish:0}})),"X"===e.state.ticTacToeBoard[0]&&"X"===e.state.ticTacToeBoard[3]&&"X"===e.state.ticTacToeBoard[6]&&e.setState((function(e){return{winner:e.playerOneName,winnerScreen:!0,playerOneScore:e.playerOneScore+1,gameFinish:0}})),"X"===e.state.ticTacToeBoard[1]&&"X"===e.state.ticTacToeBoard[4]&&"X"===e.state.ticTacToeBoard[7]&&e.setState((function(e){return{winner:e.playerOneName,winnerScreen:!0,playerOneScore:e.playerOneScore+1,gameFinish:0}})),"X"===e.state.ticTacToeBoard[2]&&"X"===e.state.ticTacToeBoard[5]&&"X"===e.state.ticTacToeBoard[8]&&e.setState((function(e){return{winner:e.playerOneName,winnerScreen:!0,playerOneScore:e.playerOneScore+1,gameFinish:0}})),"X"===e.state.ticTacToeBoard[0]&&"X"===e.state.ticTacToeBoard[4]&&"X"===e.state.ticTacToeBoard[8]&&e.setState((function(e){return{winner:e.playerOneName,winnerScreen:!0,playerOneScore:e.playerOneScore+1,gameFinish:0}})),"X"===e.state.ticTacToeBoard[2]&&"X"===e.state.ticTacToeBoard[4]&&"X"===e.state.ticTacToeBoard[6]&&e.setState((function(e){return{winner:e.playerOneName,winnerScreen:!0,playerOneScore:e.playerOneScore+1,gameFinish:0}})),"O"===e.state.ticTacToeBoard[0]&&"O"===e.state.ticTacToeBoard[1]&&"O"===e.state.ticTacToeBoard[2]&&e.setState((function(e){return{winner:e.playerTwoName,winnerScreen:!0,playerTwoScore:e.playerTwoScore+1,gameFinish:0}})),"O"===e.state.ticTacToeBoard[3]&&"O"===e.state.ticTacToeBoard[4]&&"O"===e.state.ticTacToeBoard[5]&&e.setState((function(e){return{winner:e.playerTwoName,winnerScreen:!0,playerTwoScore:e.playerTwoScore+1,gameFinish:0}})),"O"===e.state.ticTacToeBoard[6]&&"O"===e.state.ticTacToeBoard[7]&&"O"===e.state.ticTacToeBoard[8]&&e.setState((function(e){return{winner:e.playerTwoName,winnerScreen:!0,playerTwoScore:e.playerTwoScore+1,gameFinish:0}})),"O"===e.state.ticTacToeBoard[0]&&"O"===e.state.ticTacToeBoard[3]&&"O"===e.state.ticTacToeBoard[6]&&e.setState((function(e){return{winner:e.playerTwoName,winnerScreen:!0,playerTwoScore:e.playerTwoScore+1,gameFinish:0}})),"O"===e.state.ticTacToeBoard[1]&&"O"===e.state.ticTacToeBoard[4]&&"O"===e.state.ticTacToeBoard[7]&&e.setState((function(e){return{winner:e.playerTwoName,winnerScreen:!0,playerTwoScore:e.playerTwoScore+1,gameFinish:0}})),"O"===e.state.ticTacToeBoard[2]&&"O"===e.state.ticTacToeBoard[5]&&"O"===e.state.ticTacToeBoard[8]&&e.setState((function(e){return{winner:e.playerTwoName,winnerScreen:!0,playerTwoScore:e.playerTwoScore+1,gameFinish:0}})),"O"===e.state.ticTacToeBoard[0]&&"O"===e.state.ticTacToeBoard[4]&&"O"===e.state.ticTacToeBoard[8]&&e.setState((function(e){return{winner:e.playerTwoName,winnerScreen:!0,playerTwoScore:e.playerTwoScore+1,gameFinish:0}})),"O"===e.state.ticTacToeBoard[2]&&"O"===e.state.ticTacToeBoard[4]&&"O"===e.state.ticTacToeBoard[6]&&e.setState((function(e){return{winner:e.playerTwoName,winnerScreen:!0,playerTwoScore:e.playerTwoScore+1,gameFinish:0}})),9===e.state.gameFinish&&e.setState((function(){return{winner:"DRAW",winnerScreen:!0,gameFinish:0}}))},e.playButtonHandler=function(a,t,r,n){if(r===n)switch(r){case"red":n="orange";break;case"orange":n="yellow";break;case"yellow":n="green";break;case"green":n="blue";break;case"blue":n="purple";break;case"purple":n="red";break;default:n="black"}e.changePlayerOneHandler(a),e.changePlayerTwoHandler(t),e.setState((function(){return{playerOneColor:r,playerTwoColor:n,editing:!1}}))},e.claimTileHandler=function(a){if(e.state.ticTacToeBoard[a].length>0)return null;e.state.turn?e.setState((function(){var t=Object(c.a)(e.state.ticTacToeBoard);return t[a]="X",{ticTacToeBoard:t,turn:!1}})):e.setState((function(){var t=Object(c.a)(e.state.ticTacToeBoard);return t[a]="O",{ticTacToeBoard:t,turn:!0}})),setTimeout(e.updateWinnerHandler,1)},e.playAgainHandler=function(){e.setState((function(){return{winnerScreen:!1,ticTacToeBoard:["","","","","","","","",""]}}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=n.a.createElement(O,{playButton:this.playButtonHandler,changePlayerOne:this.changePlayerOneHandler});this.state.editing||(e=null);var a="";a=this.state.winner===this.state.playerOneName?this.state.playerOneColor:this.state.winner===this.state.playerTwoName?this.state.playerTwoColor:"grey";var t,o,l,c,i,s,T,u,m,d=n.a.createElement(X,{winner:this.state.winner,wins:"DRAW"===this.state.winner?null:" wins!",playAgainClicked:this.playAgainHandler,winningColor:a});return this.state.winnerScreen||(d=null),t="X"===this.state.ticTacToeBoard[0]?this.state.playerOneColor:"O"===this.state.ticTacToeBoard[0]?this.state.playerTwoColor:"white",o="X"===this.state.ticTacToeBoard[1]?this.state.playerOneColor:"O"===this.state.ticTacToeBoard[1]?this.state.playerTwoColor:"white",l="X"===this.state.ticTacToeBoard[2]?this.state.playerOneColor:"O"===this.state.ticTacToeBoard[2]?this.state.playerTwoColor:"white",c="X"===this.state.ticTacToeBoard[3]?this.state.playerOneColor:"O"===this.state.ticTacToeBoard[3]?this.state.playerTwoColor:"white",i="X"===this.state.ticTacToeBoard[4]?this.state.playerOneColor:"O"===this.state.ticTacToeBoard[4]?this.state.playerTwoColor:"white",s="X"===this.state.ticTacToeBoard[5]?this.state.playerOneColor:"O"===this.state.ticTacToeBoard[5]?this.state.playerTwoColor:"white",T="X"===this.state.ticTacToeBoard[6]?this.state.playerOneColor:"O"===this.state.ticTacToeBoard[6]?this.state.playerTwoColor:"white",u="X"===this.state.ticTacToeBoard[7]?this.state.playerOneColor:"O"===this.state.ticTacToeBoard[7]?this.state.playerTwoColor:"white",m="X"===this.state.ticTacToeBoard[8]?this.state.playerOneColor:"O"===this.state.ticTacToeBoard[8]?this.state.playerTwoColor:"white",n.a.createElement(r.Fragment,null,e,d,n.a.createElement(B,{playerOneColor:this.state.playerOneColor,playerTwoColor:this.state.playerTwoColor,playerOneScore:this.state.playerOneScore,playerTwoScore:this.state.playerTwoScore,playerOneName:this.state.playerOneName,playerTwoName:this.state.playerTwoName,turn:this.state.turn,whoseTurn:this.state.turn?this.state.playerOneName:this.state.playerTwoName}),n.a.createElement(v,{clicked:this.claimTileHandler,claimTile:this.state.ticTacToeBoard,tileOne:t,tileTwo:o,tileThree:l,tileFour:c,tileFive:i,tileSix:s,tileSeven:T,tileEight:u,tileNine:m}))}}]),t}(r.Component);var P=function(){return n.a.createElement(F,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.d46299b3.chunk.js.map