function drawChallengeProps(ctx,width,height,time){
  const y=height*.48;
  ctx.save();
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  ctx.font="bold 16px sans-serif";
  switch(activeWorldIndex){
    case 0:
      if(challengeIndex===0){
        [0,1,2,3,4].forEach(index=>drawCarrot(ctx,width*(.39+index*.105),height*.62,.78,collectedCarrots.has(index)));
      }else if(challengeIndex===1){
        ctx.fillStyle="rgba(255,255,255,.55)";
        ctx.beginPath();ctx.roundRect(width*.31,height*.37,width*.25,height*.25,16);ctx.fill();
        ctx.beginPath();ctx.roundRect(width*.64,height*.37,width*.2,height*.25,16);ctx.fill();
        [0,1,2].forEach(index=>drawApple(ctx,width*(.36+index*.075),y,1));
        [0,1].forEach(index=>drawPear(ctx,width*(.70+index*.075),y,1));
      }else{
        drawSequence(ctx,["1","2","3","4","?"],width,height,"#368c61");
      }
      break;
    case 1:
      if(challengeIndex===0){
        drawSceneLabel(ctx,"CAJA ROJA",width*.53,height*.34,"#c94d4d");
        drawShape(ctx,"circle",width*.32,y,23,"#e95757");
        drawShape(ctx,"circle",width*.45,y,23,"#579be2");
        drawShape(ctx,"square",width*.59,y,42,"#ffd166");
        drawShape(ctx,"triangle",width*.74,y,25,"#62b98d");
      }else if(challengeIndex===1){
        drawSceneLabel(ctx,"¿Cuál no es un cuadrado?",width*.55,height*.34);
        drawShape(ctx,"square",width*.36,y,42,"#549bdc");
        drawShape(ctx,"square",width*.48,y,42,"#549bdc");
        drawShape(ctx,"triangle",width*.61,y,26,"#ef7777");
        drawShape(ctx,"square",width*.74,y,42,"#549bdc");
      }else{
        drawSceneLabel(ctx,"¿Qué color sigue?",width*.55,height*.34);
        ["#ef6868","#579be2","#ef6868","#579be2","#ef6868"].forEach((color,index)=>drawShape(ctx,"circle",width*(.32+index*.115),y,19,color));
      }
      break;
    case 2:
      if(challengeIndex===0){
        drawSceneLabel(ctx,"DE PEQUEÑA A GRANDE",width*.55,height*.32);
        [24,39,55].forEach((size,index)=>{const x=width*(.39+index*.17);ctx.fillStyle=["#8ecf9e","#ffd166","#ff9f43"][index];ctx.fillRect(x-size/2,height*.58-size,size,size);ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.strokeRect(x-size/2,height*.58-size,size,size);});
        drawSceneLabel(ctx,"pequeña",width*.39,height*.64,"#53617a");drawSceneLabel(ctx,"mediana",width*.56,height*.64,"#53617a");drawSceneLabel(ctx,"grande",width*.73,height*.64,"#53617a");
      }else if(challengeIndex===1){
        drawSceneLabel(ctx,"¿QUÉ ES MÁS LARGO?",width*.55,height*.33);
        ctx.strokeStyle="#e39b42";ctx.lineWidth=10;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(width*.34,y);ctx.lineTo(width*.62,y);ctx.stroke();
        ctx.strokeStyle="#52617c";ctx.lineWidth=4;ctx.beginPath();ctx.arc(width*.75,y,15,.3,Math.PI*1.8);ctx.arc(width*.75,y,8,Math.PI*1.2,Math.PI*2.7);ctx.stroke();
        drawSceneLabel(ctx,"LÁPIZ",width*.48,height*.62,"#53617a");drawSceneLabel(ctx,"CLIP",width*.75,height*.62,"#53617a");
      }else{
        drawSceneLabel(ctx,"DE MENOR A MAYOR",width*.55,height*.32);
        ctx.font="42px sans-serif";ctx.fillText("🐜",width*.36,y+8);ctx.font="55px sans-serif";ctx.fillText("🐇",width*.55,y+4);ctx.font="72px sans-serif";ctx.fillText("🐘",width*.76,y);
      }
      break;
    case 3:
      if(challengeIndex===0){drawSceneLabel(ctx,"SUBE",width*.5,height*.34);drawDirection(ctx,"↑",width*.5,y,"#7a70c8",48);}
      else if(challengeIndex===1){drawSceneLabel(ctx,"GIRA A LA DERECHA",width*.55,height*.34);drawDirection(ctx,"→",width*.58,y,"#7a70c8",54);}
      else{drawSceneLabel(ctx,"SIGUE ESTE CAMINO",width*.55,height*.33);["↑","→","↑"].forEach((arrow,index)=>drawDirection(ctx,arrow,width*(.4+index*.15),y,"#7a70c8",40));}
      break;
    case 4:
      if(challengeIndex===0){
        drawSceneLabel(ctx,"TECHO DE LA CASA",width*.48,height*.34);
        ctx.fillStyle="#ffca8a";ctx.fillRect(width*.39,height*.47,90,65);ctx.strokeStyle="#7d6571";ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(width*.37,height*.48);ctx.lineTo(width*.435,height*.38);ctx.lineTo(width*.50,height*.48);ctx.stroke();
        drawShape(ctx,"triangle",width*.66,y,28,"#ef7777");drawShape(ctx,"circle",width*.77,y,22,"#579be2");drawShape(ctx,"square",width*.87,y,40,"#62b98d");
      }else if(challengeIndex===1){
        drawSceneLabel(ctx,"BUSCA LA FORMA DE LA RUEDA",width*.55,height*.34);
        ctx.fillStyle="#69a7dc";ctx.beginPath();ctx.roundRect(width*.33,y-22,140,48,13);ctx.fill();ctx.fillStyle="#fff";ctx.fillRect(width*.38,y-37,48,22);ctx.fillRect(width*.44,y-37,38,22);ctx.fillStyle="#34405d";ctx.beginPath();ctx.arc(width*.39,y+27,15,0,Math.PI*2);ctx.arc(width*.56,y+27,15,0,Math.PI*2);ctx.fill();
        drawShape(ctx,"circle",width*.7,y,22,"#ffd166");drawShape(ctx,"square",width*.82,y,38,"#91a0b7");
      }else{
        drawSceneLabel(ctx,"COMPLETA LA PARED",width*.55,height*.33);
        ctx.fillStyle="#9bc9e8";ctx.fillRect(width*.36,y-52,55,42);ctx.fillRect(width*.42,y-52,55,42);ctx.fillStyle="#f2bd78";ctx.fillRect(width*.36,y-4,55,42);ctx.strokeStyle="#dc7668";ctx.lineWidth=3;ctx.strokeRect(width*.45,y-4,55,42);drawShape(ctx,"rectangle",width*.7,y,54,"#dc7668");
      }
      break;
    default:
      if(challengeIndex===0){
        drawSceneLabel(ctx,"¡DA TRES SALTOS!",width*.55,height*.32);
        ["1","2","3"].forEach((number,index)=>{drawShape(ctx,"circle",width*(.4+index*.15),y,24,["#ef91b7","#72a9ec","#58c8a4"][index]);drawSceneLabel(ctx,number,width*(.4+index*.15),y,"#fff");});
      }else if(challengeIndex===1){
        drawSceneLabel(ctx,"LEVANTA TU MANO DERECHA",width*.55,height*.32);
        ctx.strokeStyle="#52617c";ctx.lineWidth=12;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(width*.53,y+70);ctx.lineTo(width*.53,y-10);ctx.moveTo(width*.53,y+10);ctx.lineTo(width*.43,y-12);ctx.moveTo(width*.53,y+10);ctx.lineTo(width*.63,y-48);ctx.stroke();ctx.fillStyle="#f1bd98";ctx.beginPath();ctx.arc(width*.53,y-35,25,0,Math.PI*2);ctx.fill();drawSceneLabel(ctx,"DERECHA",width*.68,y-45,"#338b68");
      }else{
        drawSceneLabel(ctx,"¿QUÉ ACCIÓN SIGUE?",width*.55,height*.33);ctx.font="40px sans-serif";ctx.fillText("🙌   →   🔄   →   ?",width*.55,y);
      }
  }
  ctx.restore();
}
function drawCarrot(ctx,x,bottom,scale=1,collected=false){ctx.save();ctx.translate(x,bottom);ctx.scale(scale,scale);ctx.fillStyle="#ff9348";ctx.beginPath();ctx.moveTo(-11,-37);ctx.lineTo(11,-37);ctx.lineTo(0,0);ctx.closePath();ctx.fill();ctx.strokeStyle="#ea7938";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-5,-28);ctx.lineTo(3,-26);ctx.moveTo(-3,-18);ctx.lineTo(4,-16);ctx.stroke();ctx.fillStyle="#55a875";ctx.beginPath();ctx.ellipse(-5,-42,4,10,-.5,0,Math.PI*2);ctx.ellipse(4,-44,4,11,.5,0,Math.PI*2);ctx.fill();if(collected){ctx.strokeStyle="#3a956d";ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,-18,20,0,Math.PI*2);ctx.stroke();}ctx.restore();}
function drawApple(ctx,x,y,scale=1){ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ctx.fillStyle="#ed6861";ctx.beginPath();ctx.arc(-7,1,13,0,Math.PI*2);ctx.arc(7,1,13,0,Math.PI*2);ctx.lineTo(0,20);ctx.closePath();ctx.fill();ctx.strokeStyle="#704d40";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,-11);ctx.lineTo(2,-19);ctx.stroke();ctx.fillStyle="#5aa775";ctx.beginPath();ctx.ellipse(7,-16,7,3,-.4,0,Math.PI*2);ctx.fill();ctx.restore();}
function drawPear(ctx,x,y,scale=1){ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ctx.fillStyle="#9bc86b";ctx.beginPath();ctx.moveTo(0,-20);ctx.bezierCurveTo(-3,-15,-5,-9,-11,-3);ctx.bezierCurveTo(-23,12,-13,23,0,23);ctx.bezierCurveTo(13,23,23,12,11,-3);ctx.bezierCurveTo(5,-9,3,-15,0,-20);ctx.fill();ctx.strokeStyle="#785b43";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,-18);ctx.lineTo(2,-26);ctx.stroke();ctx.fillStyle="#58a875";ctx.beginPath();ctx.ellipse(8,-23,7,3,-.4,0,Math.PI*2);ctx.fill();ctx.restore();}
function drawShape(ctx,shape,x,y,size,color){ctx.save();ctx.fillStyle=color;ctx.beginPath();if(shape==="circle")ctx.arc(x,y,size,0,Math.PI*2);else if(shape==="triangle"){ctx.moveTo(x,y-size);ctx.lineTo(x+size,y+size);ctx.lineTo(x-size,y+size);ctx.closePath();}else if(shape==="rectangle")ctx.rect(x-size*1.3,y-size*.65,size*2.6,size*1.3);else ctx.rect(x-size,y-size,size*2,size*2);ctx.fill();ctx.restore();}
function drawDirection(ctx,arrow,x,y,color,size){ctx.save();ctx.fillStyle=color;ctx.font=`900 ${size}px sans-serif`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(arrow,x,y);ctx.restore();}
function drawSceneLabel(){}
function drawSequence(ctx,items,width,height,color){items.forEach((item,index)=>{const x=width*(.31+index*.145);ctx.fillStyle="rgba(255,255,255,.82)";ctx.beginPath();ctx.roundRect(x-25,height*.42,50,48,12);ctx.fill();ctx.fillStyle=color;ctx.font="bold 26px sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(item,x,height*.49);});}
const STORAGE_KEY = "aventura_numeros_formas_v3";

const worlds = [
  {
    id:"bosque", title:"El bosque de los números", icon:"🌳", color:"#eaf8f2", reward:"Estrella del bosque",
    description:"Cuenta, compara y encuentra números escondidos.",
    challenges:[
      {instruction:"El conejo tiene hambre. Toca y cuenta las cinco zanahorias.", visual:"", correct:"5", hint:"Cuenta cada zanahoria una sola vez."},
      {instruction:"¿Qué grupo tiene más frutas?", visual:"", choices:["Manzanas","Peras","Tienen igual cantidad"], correct:"Manzanas", hint:"Compara cuántas manzanas y peras hay."},
      {instruction:"Completa la secuencia numérica.", visual:"1  ·  2  ·  3  ·  4  ·  ___", choices:["5","6","3","7"], correct:"5", hint:"Suma uno al número anterior."}
    ]
  },
  {
    id:"fabrica", title:"La fábrica de colores", icon:"🏭", color:"#edf3ff", reward:"Insignia clasificador",
    description:"Clasifica formas, identifica características y crea patrones.",
    challenges:[
      {instruction:"La caja roja necesita círculos rojos. ¿Cuál pertenece?", visual:"🔴   🔵   🟨   🟩", choices:["🔴","🔵","🟨","🟩"], correct:"🔴", hint:"Observa el color y la forma."},
      {instruction:"¿Qué figura NO pertenece al grupo de cuadrados?", visual:"🟦   🟦   🔺   🟦", choices:["🔺","🟦","Los cuadrados","Ninguna"], correct:"🔺", hint:"Busca la figura con diferente forma."},
      {instruction:"Completa el patrón: rojo, azul, rojo, azul, ...", visual:"🔴  🔵  🔴  🔵  ___", choices:["🔴","🔵","🟢","🟨"], correct:"🔴", hint:"Se repite rojo después de azul."}
    ]
  },
  {
    id:"tamano", title:"El camino de los tamaños", icon:"📏", color:"#fff1db", reward:"Puente de tamaños",
    description:"Compara tamaños, longitudes y ordena de menor a mayor.",
    challenges:[
      {instruction:"Ordena estas cajas comenzando por la más pequeña.", visual:"🟫 pequeño   🟫 mediano   🟫 grande", choices:["Pequeña → mediana → grande","Grande → mediana → pequeña","Mediana → grande → pequeña"], correct:"Pequeña → mediana → grande", hint:"Observa el tamaño de cada caja."},
      {instruction:"¿Qué objeto es más largo?", visual:"✏️   vs   📎", choices:["El lápiz","El clip","Son iguales"], correct:"El lápiz", hint:"El lápiz ocupa más longitud."},
      {instruction:"Ordena a los animales del menor al mayor.", visual:"🐜  🐇  🐘", choices:["Hormiga, conejo, elefante","Elefante, conejo, hormiga","Conejo, hormiga, elefante"], correct:"Hormiga, conejo, elefante", hint:"Piensa primero en el más pequeño."}
    ]
  },
  {
    id:"laberinto", title:"El laberinto mágico", icon:"🧭", color:"#f1edff", reward:"Llave mágica",
    description:"Sigue instrucciones espaciales y encuentra la salida.",
    challenges:[
      {instruction:"Primero debes ir hacia arriba. ¿Qué flecha eliges?", visual:"🧒  ·  ·  ·\n⬇️  ⬆️  ⬅️  ➡️\n      🗝️", choices:["⬆️","⬇️","⬅️","➡️"], correct:"⬆️", hint:"Arriba es hacia el techo."},
      {instruction:"Ahora gira hacia la derecha.", visual:"🚶  ➡️  🧭  ???", choices:["⬅️","➡️","⬆️","⬇️"], correct:"➡️", hint:"La derecha está al lado de tu mano dominante."},
      {instruction:"Ordena el camino: adelante, derecha y arriba.", visual:"🚩 ___ ___ ___ 🏁", choices:["⬆️ ➡️ ⬆️","⬇️ ⬅️ ⬇️","⬅️ ⬆️ ➡️"], correct:"⬆️ ➡️ ⬆️", hint:"Sigue las palabras en el orden indicado."}
    ]
  },
  {
    id:"ciudad", title:"La ciudad de las formas", icon:"🏙️", color:"#eaf7ff", reward:"Corona arquitectónica",
    description:"Reconstruye casas y vehículos usando figuras geométricas.",
    challenges:[
      {instruction:"Usa un triángulo para construir el techo de la casa.", visual:"🏠  ▢  △  ○  ▭", choices:["△","○","▭","▢"], correct:"△", hint:"El triángulo tiene tres lados."},
      {instruction:"¿Qué figura tiene forma de rueda?", visual:"🏎️  ○  ▢  △  ▭", choices:["○","▢","△","▭"], correct:"○", hint:"La rueda es redonda."},
      {instruction:"Selecciona la pieza que completa el edificio.", visual:"🟦 🟦\n🟨 🟨\n___  ___", choices:["▭","△","○","◆"], correct:"▭", hint:"Los rectángulos tienen lados largos y cortos."}
    ]
  },
  {
    id:"parque", title:"El parque de los exploradores", icon:"🎪", color:"#fff7d8", reward:"Diploma de explorador",
    description:"Integra movimiento, conteo, lateralidad y esquema corporal.",
    challenges:[
      {instruction:"El personaje debe dar tres saltos. ¿Cuántas veces salta?", visual:"🤸  ⬆️⬆️⬆️", choices:["2","3","4","5"], correct:"3", hint:"Cuenta cada salto: uno, dos, tres."},
      {instruction:"Toca con tu mano derecha. ¿Qué parte usamos?", visual:"🧍  ↔️  🙋", choices:["Mano derecha","Pie izquierdo","Cabeza","Nariz"], correct:"Mano derecha", hint:"Levanta primero tu mano derecha."},
      {instruction:"Completa la secuencia final: levantar brazos, girar, aplaudir.", visual:"🙌  🔄  ___", choices:["👏","🦶","🛌","🍎"], correct:"👏", hint:"La última acción hace sonido con las manos."}
    ]
  }
];

const initialState={playerName:"Explorador/a",completed:{},voiceEnabled:true};
let state=loadState();
let activeWorldIndex=null;
let challengeIndex=0;
let wrongAttempts=0;
let collectedCarrots=new Set();
let sceneFrame=null;
let sceneMode="idle";
let sceneStartedAt=0;
let voiceLoadTimeout=null;
let voiceLoadListener=null;
const pendingSpeech=[];

const refs={
 missionPreview:document.getElementById("missionPreview"),missionGrid:document.getElementById("missionGrid"),
 missionSummary:document.getElementById("missionSummary"),gamePanel:document.getElementById("gamePanel"),
 gameCategory:document.getElementById("gameCategory"),gameInstruction:document.getElementById("gameInstruction"),
 gameContent:document.getElementById("gameContent"),gameFeedback:document.getElementById("gameFeedback"),
 nextMissionBtn:document.getElementById("nextMissionBtn"),gameStars:document.getElementById("gameStars")
};

function loadState(){const raw=localStorage.getItem(STORAGE_KEY)||localStorage.getItem("aventura_numeros_formas_v2");if(!raw)return structuredClone(initialState);try{const parsed=JSON.parse(raw);const completed=parsed.completed&&typeof parsed.completed==="object"&&!Array.isArray(parsed.completed)?parsed.completed:{};return {...structuredClone(initialState),...parsed,completed,voiceEnabled:parsed.voiceEnabled!==false};}catch{return structuredClone(initialState);}}
function saveAndRender(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));render();}

for(const button of document.querySelectorAll("[data-section]"))button.addEventListener("click",()=>showSection(button.dataset.section));
document.getElementById("continueBtn").addEventListener("click",()=>{speakText("¡Vamos a jugar! Elige un mundo para comenzar la aventura.");showSection("aventura");});
document.getElementById("closeGameBtn").addEventListener("click",()=>{stopScene();refs.gamePanel.classList.add("hidden");refs.missionGrid.classList.remove("hidden");});
document.getElementById("resetDataBtn").addEventListener("click",()=>{if(confirm("¿Quieres reiniciar los seis mundos?")){state=structuredClone(initialState);saveAndRender();}});
document.getElementById("voiceToggle").addEventListener("click",()=>{state.voiceEnabled=!state.voiceEnabled;if(!state.voiceEnabled){clearPendingVoice();pendingSpeech.length=0;if("speechSynthesis" in window)speechSynthesis.cancel();}saveAndRender();if(state.voiceEnabled)speakText("¡Hola, explorador! Estoy lista para jugar contigo.");});

function showSection(sectionId){if(!refs.gamePanel.classList.contains("hidden")){stopScene();refs.gamePanel.classList.add("hidden");refs.missionGrid.classList.remove("hidden");}for(const view of document.querySelectorAll(".view"))view.classList.toggle("active-view",view.id===sectionId);for(const item of document.querySelectorAll(".nav-item"))item.classList.toggle("active",item.dataset.section===sectionId);window.scrollTo({top:0,behavior:"smooth"});}

document.getElementById("playerForm").addEventListener("submit",event=>{event.preventDefault();const input=document.getElementById("playerNameInput");const name=input.value.trim();if(name){state.playerName=name;input.value="";saveAndRender();}});
function isUnlocked(index){return index===0||Boolean(state.completed[worlds[index-1].id]);}
function render(){renderMissions();renderProgress();renderPlayer();renderVoiceToggle();}

function renderMissions(){refs.missionPreview.innerHTML="";refs.missionGrid.innerHTML="";worlds.forEach((world,index)=>{const unlocked=isUnlocked(index),complete=Boolean(state.completed[world.id]);const card=createWorldCard(world,index,unlocked,complete);if(index<4)refs.missionPreview.appendChild(createWorldCard(world,index,unlocked,complete));refs.missionGrid.appendChild(card);});const count=Object.keys(state.completed).length;refs.missionSummary.textContent=`${count} de ${worlds.length} mundos completados. ¡Cada estrella abre un nuevo camino!`;}
function createWorldCard(world,index,unlocked,complete){const card=document.createElement("article");card.className=`mission-card${unlocked?"":" locked"}`;const stars=complete?`<b>${"⭐".repeat(state.completed[world.id].stars)}</b>`:(unlocked?"☆☆☆":"🔒");card.innerHTML=`<div class="mission-stars">${stars}</div><div class="mission-icon" style="background:${world.color}">${world.icon}</div><h3>Mundo ${index+1}</h3><p>${world.title}</p><small>${world.description}</small>`;if(unlocked)card.addEventListener("click",()=>openWorld(index));else card.title="Completa el mundo anterior para desbloquear";return card;}

function openWorld(index){activeWorldIndex=index;challengeIndex=0;wrongAttempts=0;refs.missionGrid.classList.add("hidden");refs.gamePanel.classList.remove("hidden");renderChallenge();window.scrollTo({top:document.getElementById("gamePanel").offsetTop-20,behavior:"smooth"});}
function renderChallenge(){
  const world=worlds[activeWorldIndex],challenge=world.challenges[challengeIndex];
  const countingCarrots=activeWorldIndex===0&&challengeIndex===0;
  collectedCarrots.clear();
  refs.gameCategory.textContent=`Mundo ${activeWorldIndex+1} · ${world.title}`;
  refs.gameInstruction.textContent=challenge.instruction;
  refs.gameFeedback.textContent=countingCarrots?"Toca cada zanahoria para contarla.":"";
  refs.nextMissionBtn.classList.add("hidden");
  refs.gameStars.textContent="☆☆☆";
  refs.gameContent.innerHTML="";
  const stage=document.createElement("div");
  stage.className="scene-stage";
  const canvas=document.createElement("canvas");
  canvas.className="world-canvas";
  canvas.setAttribute("role","img");
  canvas.setAttribute("aria-label",`Escena animada: ${world.title}`);
  if(countingCarrots){
    canvas.classList.add("counting-canvas");
    canvas.setAttribute("role","button");
    canvas.setAttribute("aria-label","Toca cinco zanahorias para alimentar al conejo");
    canvas.addEventListener("pointerdown",event=>collectCarrot(event,canvas));
    canvas.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();collectNextCarrot(canvas);}});
    canvas.tabIndex=0;
  }
  stage.appendChild(canvas);
  refs.gameContent.appendChild(stage);
  if(!countingCarrots){
    const choiceRow=document.createElement("div");
    choiceRow.className="choice-row";
    challenge.choices.forEach(choice=>{
      const button=document.createElement("button");
      button.type="button";
      button.className="answer-button";
      button.textContent=choice;
      button.addEventListener("click",()=>checkAnswer(choice,challenge,button));
      choiceRow.appendChild(button);
    });
    refs.gameContent.appendChild(choiceRow);
  }
  startScene(canvas);
  speakText(challenge.instruction);
}
function checkAnswer(answer,challenge,button){if(answer===challenge.correct){completeChallenge(button,challenge);return;}wrongAttempts++;button.classList.add("wrong");sceneMode="wrong";sceneStartedAt=performance.now();playTone(180,0.12);refs.gameFeedback.textContent=`Pista: ${challenge.hint}`;speakText(`Casi. ${challenge.hint}`);setTimeout(()=>button.classList.remove("wrong"),500);}
function collectCarrot(event,canvas){const bounds=canvas.getBoundingClientRect();const x=event.clientX-bounds.left,y=event.clientY-bounds.top;const index=Array.from({length:5},(_,i)=>i).find(i=>Math.abs(x-bounds.width*(.39+i*.105))<22&&y>bounds.height*.575&&y<bounds.height*.65);if(index!==undefined)markCarrot(index);}
function collectNextCarrot(canvas){const index=Array.from({length:5},(_,i)=>i).find(i=>!collectedCarrots.has(i));if(index!==undefined)markCarrot(index);}
function markCarrot(index){if(collectedCarrots.has(index))return;collectedCarrots.add(index);playTone(420+collectedCarrots.size*55,.09);if(collectedCarrots.size<5){refs.gameFeedback.textContent=`Llevas ${collectedCarrots.size} de 5 zanahorias.`;speakText(`Una más. Llevas ${collectedCarrots.size}.`);return;}completeChallenge(null,worlds[0].challenges[0]);}
function completeChallenge(button,challenge){for(const choice of refs.gameContent.querySelectorAll(".answer-button"))choice.disabled=true;if(button)button.classList.add("correct");sceneMode="success";sceneStartedAt=performance.now();playTone(660,0.12);const carrotChallenge=activeWorldIndex===0&&challengeIndex===0;refs.gameFeedback.textContent=carrotChallenge?"¡Contaste las cinco zanahorias!":"¡Excelente! El explorador va hacia la meta.";refs.gameStars.textContent="★★★";speakText(carrotChallenge?"¡Muy bien! Contaste las cinco zanahorias.":"¡Muy bien! Lo has conseguido.");setTimeout(()=>{if(challengeIndex<worlds[activeWorldIndex].challenges.length-1){challengeIndex++;renderChallenge();}else completeWorld();},1300);}

function startScene(canvas){stopScene();sceneMode="idle";sceneStartedAt=performance.now();const context=canvas.getContext("2d");if(!context)return;const render=(now)=>{if(!canvas.isConnected)return;const bounds=canvas.getBoundingClientRect();const ratio=Math.min(window.devicePixelRatio||1,2);const width=Math.max(1,Math.round(bounds.width*ratio)),height=Math.max(1,Math.round(bounds.height*ratio));if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}context.setTransform(ratio,0,0,ratio,0,0);drawWorldScene(context,bounds.width,bounds.height,now);sceneFrame=requestAnimationFrame(render);};sceneFrame=requestAnimationFrame(render);}
function stopScene(){if(sceneFrame!==null)cancelAnimationFrame(sceneFrame);sceneFrame=null;}
function drawWorldScene(ctx,width,height,now){const time=now/1000,elapsed=(now-sceneStartedAt)/1000,palette=["#b8e4c9","#c8e3ff","#ffe0ae","#d9d4fa","#bfe4ef","#ffe8a8"];const ground=["#75b879","#9ab9d1","#d7ad71","#97a5d5","#70b3a5","#79bf83"];ctx.clearRect(0,0,width,height);ctx.fillStyle=palette[activeWorldIndex];ctx.fillRect(0,0,width,height);drawSun(ctx,width-75,55,time);drawCloud(ctx,(width*.17+time*11)%(width+100)-50,54,1);drawCloud(ctx,(width*.58-time*7+width+100)%(width+100)-50,88,.72);drawBackdrop(ctx,width,height,time,ground[activeWorldIndex]);drawWorldProps(ctx,width,height,time);drawChallengeProps(ctx,width,height,time);drawExplorer(ctx,width,height,time,elapsed);if(sceneMode==="celebration")drawConfetti(ctx,width,height,time);}
function drawSun(ctx,x,y,time){ctx.save();ctx.translate(x,y);ctx.rotate(time*.12);ctx.strokeStyle="#ffc85c";ctx.lineWidth=4;for(let i=0;i<8;i++){ctx.beginPath();ctx.moveTo(0,-29);ctx.lineTo(0,-38);ctx.stroke();ctx.rotate(Math.PI/4);}ctx.fillStyle="#ffd166";ctx.beginPath();ctx.arc(0,0,23,0,Math.PI*2);ctx.fill();ctx.restore();}
function drawCloud(ctx,x,y,scale){ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ctx.fillStyle="rgba(255,255,255,.88)";ctx.beginPath();ctx.arc(0,8,17,0,Math.PI*2);ctx.arc(20,0,22,0,Math.PI*2);ctx.arc(43,9,16,0,Math.PI*2);ctx.fill();ctx.restore();}
function drawBackdrop(ctx,width,height,time,color){ctx.fillStyle="rgba(255,255,255,.2)";ctx.beginPath();ctx.ellipse(width*.23,height*.69,width*.3,40,0,Math.PI,Math.PI*2);ctx.ellipse(width*.78,height*.7,width*.34,48,0,Math.PI,Math.PI*2);ctx.fill();ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(0,height*.68);ctx.quadraticCurveTo(width*.24,height*.61,width*.48,height*.72);ctx.quadraticCurveTo(width*.75,height*.82,width,height*.66);ctx.lineTo(width,height);ctx.lineTo(0,height);ctx.fill();ctx.fillStyle="rgba(255,255,255,.45)";for(let i=0;i<7;i++){const x=((i*137+time*8)%(width+30));ctx.beginPath();ctx.ellipse(x,height*.87+Math.sin(time+i)*4,3,7,0,0,Math.PI*2);ctx.fill();}}
function drawWorldProps(ctx,width,height,time){const base=height*.7;ctx.save();switch(activeWorldIndex){case 0:for(let i=0;i<5;i++){const x=width*(.12+i*.19);ctx.fillStyle="#8b5a3c";ctx.fillRect(x-8,base-68,16,70);ctx.fillStyle=i%2?"#398d62":"#4ca66c";ctx.beginPath();ctx.arc(x,base-75+Math.sin(time*2+i)*3,34,0,Math.PI*2);ctx.fill();ctx.fillStyle="#ef6c67";ctx.beginPath();ctx.arc(x+12,base-75,5,0,Math.PI*2);ctx.fill();}break;case 1:ctx.fillStyle="#7587b8";ctx.fillRect(width*.63,base-100,width*.27,100);ctx.fillStyle="#fff";for(let i=0;i<3;i++){ctx.fillRect(width*(.67+i*.07),base-80,22,20);ctx.fillRect(width*(.67+i*.07),base-45,22,20);}ctx.fillStyle="#43506c";ctx.fillRect(0,base-9,width,20);for(let i=0;i<5;i++){ctx.fillStyle=["#f17979","#ffd166","#72a9ec"][i%3];ctx.beginPath();ctx.arc((i*100+time*42)%(width+30),base-15,12,0,Math.PI*2);ctx.fill();}break;case 2:ctx.fillStyle="#c99354";ctx.fillRect(0,base-20,width,25);for(let i=0;i<5;i++){const size=25+i*9;ctx.fillStyle=["#8ecf9e","#ffd166","#ff9f43"][i%3];ctx.fillRect(width*.28+i*42,base-size,size,size);}break;case 3:ctx.strokeStyle="rgba(83,68,142,.68)";ctx.lineWidth=10;ctx.beginPath();for(let x=18;x<width;x+=42){ctx.moveTo(x,base-70);ctx.lineTo(x,base-28);}for(let y=base-70;y<=base-28;y+=42){ctx.moveTo(20,y);ctx.lineTo(width-20,y);}ctx.stroke();ctx.fillStyle="#ffd166";ctx.font="30px sans-serif";ctx.fillText("🗝️",width*.77,base-42+Math.sin(time*3)*6);break;case 4:for(let i=0;i<5;i++){const x=width*(.13+i*.17),w=55+(i%2)*18,h=65+(i%3)*15;ctx.fillStyle=["#ffb4a2","#8ecae6","#b8c0ff"][i%3];ctx.fillRect(x,base-h,w,h);ctx.fillStyle="#fff1c1";ctx.beginPath();ctx.moveTo(x-7,base-h);ctx.lineTo(x+w/2,base-h-30);ctx.lineTo(x+w+7,base-h);ctx.fill();ctx.fillStyle="#fff";ctx.fillRect(x+12,base-h+15,12,15);ctx.fillRect(x+34,base-h+15,12,15);}break;case 5:ctx.fillStyle="#e77c73";ctx.beginPath();ctx.moveTo(width*.67,base-95);ctx.lineTo(width*.83,base-170);ctx.lineTo(width*.98,base-95);ctx.closePath();ctx.fill();ctx.fillStyle="#fff6df";ctx.fillRect(width*.7,base-95,width*.25,95);ctx.fillStyle="#78b7e5";ctx.fillRect(width*.79,base-58,28,58);for(let i=0;i<4;i++){ctx.fillStyle=["#ef91b7","#ffd166","#72a9ec"][i%3];const x=width*(.12+i*.15);ctx.beginPath();ctx.arc(x,base-105+Math.sin(time*2+i)*6,9,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#888";ctx.beginPath();ctx.moveTo(x,base-96);ctx.lineTo(x,base-30);ctx.stroke();}break;}ctx.restore();}
function drawExplorer(ctx,width,height,time,elapsed){switch(activeWorldIndex){case 0:drawRabbit(ctx,width,height,time,elapsed);break;case 1:drawFactoryRobot(ctx,width,height,time,elapsed);break;case 2:drawMeasuringChild(ctx,width,height,time,elapsed);break;case 3:drawMazeExplorer(ctx,width,height,time,elapsed);break;case 4:drawBuilder(ctx,width,height,time,elapsed);break;default:drawSkippingChild(ctx,width,height,time,elapsed);}}
function actorProgress(elapsed){return sceneMode==="success"?Math.min(1,elapsed/1.1):0;}
function actorShake(time,elapsed){return sceneMode==="wrong"&&elapsed<.5?Math.sin(time*48)*6:0;}
function drawRabbit(ctx,width,height,time,elapsed){
  const progress=actorProgress(elapsed);
  const hop=sceneMode==="success"?Math.abs(Math.sin(time*11))*32:Math.abs(Math.sin(time*4))*8;
  const x=width*(.18+.64*progress)+actorShake(time,elapsed);
  const floor=height*.7;
  ctx.save();
  ctx.translate(x,floor-hop);
  ctx.fillStyle="#f7f2e7";
  ctx.beginPath();
  ctx.ellipse(0,-21,28,21,0,0,Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(-24,-31,17,0,Math.PI*2);
  ctx.fill();
  ctx.save();
  ctx.translate(-30,-45);
  ctx.rotate(-.16+Math.sin(time*3)*.08);
  ctx.beginPath();
  ctx.ellipse(-5,-16,6,20,-.12,0,Math.PI*2);
  ctx.ellipse(8,-16,6,20,.12,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle="#e98ea4";
  ctx.beginPath();
  ctx.ellipse(-5,-16,2.5,13,-.12,0,Math.PI*2);
  ctx.ellipse(8,-16,2.5,13,.12,0,Math.PI*2);
  ctx.fill();
  ctx.restore();
  ctx.fillStyle="#d995a2";
  ctx.beginPath();
  ctx.arc(-35,-33,2.5,0,Math.PI*2);
  ctx.arc(-20,-33,2.5,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle="#e98ea4";
  ctx.beginPath();
  ctx.arc(-28,-26,4,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle="#fff";
  ctx.beginPath();
  ctx.arc(19,-4,9,0,Math.PI*2);
  ctx.fill();
  ctx.strokeStyle="#887968";
  ctx.lineWidth=3;
  ctx.beginPath();
  ctx.moveTo(-13,-5);
  ctx.lineTo(-16,1);
  ctx.moveTo(8,-5);
  ctx.lineTo(11,1);
  ctx.stroke();
  ctx.restore();
}
function drawFactoryRobot(ctx,width,height,time,elapsed){const progress=actorProgress(elapsed),x=width*(.32+.34*progress)+actorShake(time,elapsed),floor=height*.7,arm=Math.sin(time*5)*.55;ctx.save();ctx.translate(x,floor);ctx.strokeStyle="#52617c";ctx.lineWidth=7;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(-12,-7);ctx.lineTo(-15,0);ctx.moveTo(12,-7);ctx.lineTo(15,0);ctx.stroke();ctx.fillStyle="#73b9df";ctx.beginPath();ctx.roundRect(-26,-66,52,55,14);ctx.fill();ctx.fillStyle="#34405d";ctx.beginPath();ctx.roundRect(-19,-56,38,21,8);ctx.fill();ctx.fillStyle="#a8f4dc";ctx.beginPath();ctx.arc(-8,-46,3,0,Math.PI*2);ctx.arc(8,-46,3,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#52617c";ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-24,-52);ctx.lineTo(-39,-42);ctx.lineTo(-45+Math.sin(time*4)*4,-48);ctx.moveTo(24,-52);ctx.lineTo(39,-44);ctx.lineTo(47,-44+Math.sin(time*4)*7);ctx.stroke();ctx.fillStyle="#ffd166";ctx.beginPath();ctx.arc(0,-75,7+Math.sin(time*6)*1.5,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#52617c";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,-66);ctx.lineTo(0,-72);ctx.stroke();ctx.save();ctx.translate(-41,-42);ctx.rotate(arm);ctx.strokeStyle="#ff9f43";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-11,0);ctx.moveTo(-5,-5);ctx.lineTo(-5,5);ctx.stroke();ctx.restore();ctx.restore();for(let i=0;i<3;i++){const x=((time*95+i*85)%(width+50))-20;ctx.fillStyle=["#f17979","#ffd166","#72a9ec"][i];ctx.beginPath();ctx.arc(x,floor-12,9,0,Math.PI*2);ctx.fill();}}
function drawMeasuringChild(ctx,width,height,time,elapsed){const progress=actorProgress(elapsed),x=width*(.23+.46*progress)+actorShake(time,elapsed),floor=height*.7,breathe=Math.sin(time*3)*2,ruler=sceneMode==="success"?42+Math.min(85,elapsed*80):36;ctx.save();ctx.translate(x,floor);ctx.strokeStyle="#44536f";ctx.lineWidth=6;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(-7,-8);ctx.lineTo(-13,0);ctx.moveTo(8,-8);ctx.lineTo(13,0);ctx.stroke();ctx.fillStyle="#ffbd6b";ctx.beginPath();ctx.roundRect(-17,-61+breathe,34,48,10);ctx.fill();ctx.fillStyle="#5d8dcc";ctx.fillRect(-17,-25+breathe,34,12);ctx.strokeStyle="#f1bd98";ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-13,-51+breathe);ctx.lineTo(-25,-36);ctx.moveTo(13,-51+breathe);ctx.lineTo(28,-40);ctx.stroke();ctx.strokeStyle="#f1bd98";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(28,-40);ctx.lineTo(35+ruler,-40);ctx.stroke();ctx.strokeStyle="#fff";ctx.lineWidth=2;for(let i=0;i<6;i++){const tick=35+i*14;if(tick<35+ruler){ctx.beginPath();ctx.moveTo(tick,-40);ctx.lineTo(tick,-35+(i%2)*4);ctx.stroke();}}ctx.fillStyle="#f1bd98";ctx.beginPath();ctx.arc(0,-76,16,0,Math.PI*2);ctx.fill();ctx.fillStyle="#634b3f";ctx.beginPath();ctx.arc(0,-82,17,Math.PI,Math.PI*2);ctx.fill();ctx.fillStyle="#34405d";ctx.beginPath();ctx.arc(-5,-76,2,0,Math.PI*2);ctx.arc(5,-76,2,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#b45b58";ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,-70,4,.2,Math.PI-.2);ctx.stroke();ctx.restore();}
function drawMazeExplorer(ctx,width,height,time,elapsed){const progress=actorProgress(elapsed),step=sceneMode==="success"?Math.floor(time*5)%2:Math.sin(time*4)>0?1:0,x=width*(.12+.72*progress)+actorShake(time,elapsed),floor=height*.7,y=floor-29-Math.sin(time*3)*2;ctx.save();ctx.translate(x,y);ctx.fillStyle="#6b7b62";ctx.beginPath();ctx.roundRect(-23,-24,18,31,7);ctx.fill();ctx.strokeStyle="#354257";ctx.lineWidth=5;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(-5,0);ctx.lineTo(-10+step*6,15);ctx.moveTo(6,0);ctx.lineTo(13-step*6,15);ctx.moveTo(-9,-17);ctx.lineTo(-20,-5);ctx.moveTo(9,-17);ctx.lineTo(17,-28-Math.sin(time*8)*3);ctx.stroke();ctx.fillStyle="#eeb78d";ctx.beginPath();ctx.arc(0,-35,14,0,Math.PI*2);ctx.fill();ctx.fillStyle="#405444";ctx.beginPath();ctx.arc(0,-42,14,Math.PI,Math.PI*2);ctx.fill();ctx.fillRect(-15,-42,30,6);ctx.fillStyle="#f7c75e";ctx.beginPath();ctx.arc(17,-28-Math.sin(time*8)*3,3,0,Math.PI*2);ctx.fill();ctx.restore();}
function drawBuilder(ctx,width,height,time,elapsed){const progress=actorProgress(elapsed),x=width*(.22+.46*progress)+actorShake(time,elapsed),floor=height*.7,hammer=sceneMode==="success"?Math.abs(Math.sin(time*9))*28:Math.abs(Math.sin(time*3))*12;ctx.save();ctx.translate(x,floor);ctx.fillStyle="#34405d";ctx.fillRect(-13,-8,9,9);ctx.fillRect(5,-8,9,9);ctx.fillStyle="#58a9c5";ctx.beginPath();ctx.roundRect(-18,-58,36,49,9);ctx.fill();ctx.fillStyle="#f0bc91";ctx.beginPath();ctx.arc(0,-75,15,0,Math.PI*2);ctx.fill();ctx.fillStyle="#ffd166";ctx.beginPath();ctx.ellipse(0,-85,21,8,0,Math.PI,Math.PI*2);ctx.fill();ctx.fillRect(-16,-87,32,5);ctx.strokeStyle="#f0bc91";ctx.lineWidth=6;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(-15,-49);ctx.lineTo(-25,-33);ctx.moveTo(15,-49);ctx.lineTo(25,-40-hammer);ctx.stroke();ctx.save();ctx.translate(25,-40-hammer);ctx.rotate(-.45+Math.sin(time*7)*.4);ctx.strokeStyle="#805941";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-18);ctx.stroke();ctx.fillStyle="#8c98ab";ctx.fillRect(-8,-23,16,7);ctx.restore();ctx.restore();if(sceneMode==="success"){const rise=Math.min(1,elapsed);ctx.fillStyle="#f4a261";ctx.fillRect(width*.77,floor-15-rise*28,28,28);}}
function drawSkippingChild(ctx,width,height,time,elapsed){const progress=actorProgress(elapsed),x=width*(.3+.38*progress)+actorShake(time,elapsed),floor=height*.7,jump=Math.abs(Math.sin(time*7))*25;ctx.save();ctx.translate(x,floor-jump);ctx.strokeStyle="#ef91b7";ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(0,-29,36,52,Math.sin(time*7)*.12,0,Math.PI*2);ctx.stroke();ctx.strokeStyle="#37435f";ctx.lineWidth=6;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(-7,-5);ctx.lineTo(-16,-jump*.1);ctx.moveTo(7,-5);ctx.lineTo(16,-jump*.1);ctx.moveTo(-14,-49);ctx.lineTo(-32,-37);ctx.lineTo(-28,-26);ctx.moveTo(14,-49);ctx.lineTo(32,-37);ctx.lineTo(28,-26);ctx.stroke();ctx.fillStyle="#f1bd98";ctx.beginPath();ctx.arc(0,-67,16,0,Math.PI*2);ctx.fill();ctx.fillStyle="#614a75";ctx.beginPath();ctx.arc(0,-73,17,Math.PI,Math.PI*2);ctx.fill();ctx.fillStyle="#34405d";ctx.beginPath();ctx.arc(-5,-67,2,0,Math.PI*2);ctx.arc(5,-67,2,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#b45b58";ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,-62,4,.1,Math.PI-.1);ctx.stroke();ctx.fillStyle="#f49b4a";ctx.beginPath();ctx.roundRect(-17,-52,34,39,9);ctx.fill();ctx.restore();}
function drawConfetti(ctx,width,height,time){for(let i=0;i<36;i++){const x=(i*83+Math.sin(time*2+i)*18)%width;const y=(i*47+time*65)%(height+20);ctx.save();ctx.translate(x,y);ctx.rotate(time+i);ctx.fillStyle=["#ff9f43","#70b7e5","#ef91b7","#58c8a4"][i%4];ctx.fillRect(-4,-6,8,12);ctx.restore();}}

function completeWorld(){const world=worlds[activeWorldIndex];const stars=wrongAttempts===0?3:wrongAttempts<=2?2:1;state.completed[world.id]={stars,completedAt:new Date().toISOString()};saveAndRender();refs.gameContent.innerHTML=`<div class="world-celebration"><div class="celebration-stars">${"⭐".repeat(stars)}</div><div class="reward-badge">🏅</div><h2>¡Mundo completado!</h2><p>Recibes: <strong>${world.reward}</strong></p></div>`;refs.gameFeedback.textContent="";refs.nextMissionBtn.textContent=activeWorldIndex===worlds.length-1?"Ver diploma final →":"Siguiente mundo →";refs.nextMissionBtn.classList.remove("hidden");playCelebration();speakText(`¡Felicidades! Completaste ${world.title} y ganaste ${world.reward}.`);}

refs.nextMissionBtn.addEventListener("click",()=>{if(activeWorldIndex<worlds.length-1){openWorld(activeWorldIndex+1);}else{refs.gamePanel.classList.add("hidden");refs.missionGrid.classList.remove("hidden");showSection("progreso");}});

function renderProgress(){const completedCount=Object.keys(state.completed).length;const percent=Math.round(completedCount/worlds.length*100);document.getElementById("progressPercent").textContent=`${percent}%`;document.getElementById("progressBar").style.width=`${percent}%`;document.getElementById("completedCount").textContent=completedCount;const stars=Object.values(state.completed).reduce((sum,item)=>sum+(item.stars||0),0);document.getElementById("starCount").textContent=stars;document.getElementById("sidebarStars").textContent=stars;const nextIndex=worlds.findIndex(world=>!state.completed[world.id]);const level=nextIndex===-1?worlds.length:nextIndex+1;document.getElementById("currentLevel").textContent=level;document.getElementById("topLevel").textContent=`Mundo ${level}`;document.getElementById("sidebarStatus").textContent=percent===100?"¡Aventura completada!":"Sigue explorando";
 const timeline=document.getElementById("completionTimeline");timeline.innerHTML="";worlds.forEach((world,index)=>{const result=state.completed[world.id];const item=document.createElement("div");item.className=`timeline-item${result?" complete":""}`;item.innerHTML=`<span>${world.icon} Mundo ${index+1}: ${world.title}</span><strong>${result?"⭐".repeat(result.stars):"—"}</strong>`;timeline.appendChild(item);});
 if(percent===100){document.getElementById("achievementTitle").textContent="Diploma de explorador lógico";document.getElementById("achievementText").textContent=`${state.playerName} completó los seis mundos de la aventura.`;}else if(percent>=50){document.getElementById("achievementTitle").textContent="Gran explorador";document.getElementById("achievementText").textContent="Ya recorres más de la mitad de la aventura.";}}

function renderPlayer(){document.getElementById("studentName").textContent=state.playerName||"Explorador/a";}
function renderVoiceToggle(){const button=document.getElementById("voiceToggle");const enabled=state.voiceEnabled!==false;button.setAttribute("aria-pressed",String(enabled));button.title=enabled?"Silenciar narración":"Activar narración";button.innerHTML=`<span>${enabled?"🔊":"🔇"}</span><span class="voice-label">${enabled?"Voz activa":"Voz apagada"}</span>`;}

function getSpanishVoice(){if(!("speechSynthesis" in window))return null;const voices=speechSynthesis.getVoices();const spanish=voices.filter(voice=>voice.lang.toLowerCase().startsWith("es"));const feminine=spanish.find(voice=>/sabina|helena|monica|mónica|paulina|elena|laura|lucia|lucía|luciana|female|woman/i.test(voice.name));return feminine||spanish.find(voice=>/google|microsoft/i.test(voice.name))||spanish[0]||null;}
function speakText(text){if(state.voiceEnabled===false||!("speechSynthesis" in window))return;const voice=getSpanishVoice();if(voice){speakWithVoice(text,voice);return;}pendingSpeech.push(text);if(voiceLoadListener)return;voiceLoadListener=()=>{const loadedVoice=getSpanishVoice();if(loadedVoice)flushPendingSpeech(loadedVoice);};speechSynthesis.addEventListener("voiceschanged",voiceLoadListener);voiceLoadTimeout=window.setTimeout(()=>flushPendingSpeech(getSpanishVoice()),2000);}
function speakWithVoice(text,voice){const utterance=new SpeechSynthesisUtterance(text);if(voice){utterance.voice=voice;utterance.lang=voice.lang;}else utterance.lang="es-MX";utterance.rate=.96;utterance.pitch=1.06;utterance.volume=1;speechSynthesis.speak(utterance);}
function flushPendingSpeech(voice){clearPendingVoice();if(state.voiceEnabled===false){pendingSpeech.length=0;return;}for(const text of pendingSpeech.splice(0))speakWithVoice(text,voice);}
function clearPendingVoice(){if(voiceLoadTimeout!==null){clearTimeout(voiceLoadTimeout);voiceLoadTimeout=null;}if(voiceLoadListener){speechSynthesis.removeEventListener("voiceschanged",voiceLoadListener);voiceLoadListener=null;}}

function playTone(frequency,duration){try{const context=new AudioContext(),oscillator=context.createOscillator(),gain=context.createGain();oscillator.frequency.value=frequency;oscillator.connect(gain);gain.connect(context.destination);gain.gain.setValueAtTime(.08,context.currentTime);gain.gain.exponentialRampToValueAtTime(.001,context.currentTime+duration);oscillator.start();oscillator.stop(context.currentTime+duration);}catch{}}
function playCelebration(){[523,659,784,1047].forEach((tone,index)=>setTimeout(()=>playTone(tone,.18),index*160));}

render();
