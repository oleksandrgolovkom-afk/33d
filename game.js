// 3D QUEST — навчальний квест за § 4.1
// Three.js scene + квіз + оцінювання + локальне збереження.

const levels = [
 {name:"Портал вимірів",short:"Основи 3D-графіки",difficulty:"ЛЕГКИЙ",color:"#62e5ff",desc:"З'ясуй, чим 3D-модель відрізняється від плоского зображення.",questions:[
  q("Що таке 3D-графіка?",["Розділ комп'ютерної графіки про створення моделей просторових об'єктів","Спосіб друку тексту","Лише малювання плоских фігур","Програма для перегляду відео"],0,"3D-графіка вивчає методи та засоби створення графічних моделей просторових об'єктів.",5),
  q("Як називається процес створення тривимірної моделі?",["Рендеринг","Тривимірне моделювання","Масштабування","Сканування"],1,"Створення 3D-моделей називають тривимірним моделюванням.",5)
 ]},
 {name:"Місто застосувань",short:"Де використовують 3D",difficulty:"СЕРЕДНІЙ",color:"#9d83ff",desc:"Знайди правильні сфери застосування тривимірного моделювання.",questions:[
  q("Для чого інженери створюють 3D-моделі виробів до виготовлення?",["Лише для прикрашання екрана","Щоб оцінити вигляд, габарити та дослідити конструкцію","Щоб замінити всі креслення текстом","Щоб створити музичний супровід"],1,"Моделі дають змогу оцінити вигляд і габарити, дослідити поєднання об'єктів та міцність конструкцій.",5),
  q("Який приклад належить до використання 3D-графіки в освіті й науці?",["Модель клітини або органа людини","Текстовий список покупок","Аудіозапис диктанту","Таблиця множення без зображень"],0,"3D-моделі допомагають демонструвати й досліджувати об'єкти, доступ до яких обмежений або неможливий.",5),
  q("Що потрібно для отримання матеріального об'єкта з комп'ютерної 3D-моделі?",["Сканер штрихкодів","3D-принтер","Проєктор","Мікрофон"],1,"3D-принтер створює матеріальну копію на основі попередньо розробленої 3D-моделі.",5)
 ]},
 {name:"Арсенал програм",short:"Програми 3D-графіки",difficulty:"СКЛАДНИЙ",color:"#ffbd70",desc:"Розподіли програми за їхнім призначенням та галузями використання.",questions:[
  q("Яка група програм призначена для повороту та масштабування готової 3D-моделі?",["3D-переглядачі","Текстові редактори","Аудіоредактори","Архіватори"],0,"Програми-переглядачі дають змогу повертати й масштабувати моделі, а також переглядати анімацію.",5),
  q("Яка програма є прикладом 3D-редактора?",["Blender","Калькулятор","Блокнот","Медіаплеєр"],0,"Blender — універсальний 3D-редактор для створення та редагування просторових моделей.",5),
  q("Яке призначення програм V-Ray і RenderMan у класифікації параграфа?",["Перегляд вебсторінок","Візуалізація (рендеринг) 3D-об'єктів","Створення електронних таблиць","Запис звуку"],1,"Ці програми забезпечують отримання високоякісного реалістичного зображення на основі описів 3D-об'єктів.",5),
  q("Яка програма наведена в параграфі як приклад для архітектурних моделей?",["SketchUp","PowerPoint","Paint","Audacity"],0,"SketchUp наведено серед програм для створення архітектурних моделей.",5)
 ]},
 {name:"Майстерня мешу",short:"Примітиви та геометрія",difficulty:"ЕКСПЕРТНИЙ",color:"#72f0bd",desc:"Віднови геометричну структуру 3D-моделей.",questions:[
  q("Як називають узагальнену сітку тривимірних примітивів, з яких будують модель?",["Меш (mesh)","Піксель","Шар","Кадр"],0,"Меш — узагальнена назва тривимірних примітивів, з об'єднання та перетину яких утворюється форма об'єкта.",5),
  q("Який набір містить лише тривимірні примітиви, наведені в параграфі?",["Куб, сфера, циліндр, конус, тор","Квадрат, коло, трикутник, лінія","Піксель, пензель, градієнт","Слайд, кадр, сторінка"],0,"У 3D-редакторах використовують куб, сферу, циліндр, конус, тор та інші примітиви.",5),
  q("Чим обмежена грань 3D-моделі?",["Ребрами","Текстурами","Кольорами","Координатними осями"],0,"Грань — плоска ділянка поверхні, обмежена відрізками-ребрами.",5),
  q("Скільки граней має куб?",["4","6","8","12"],1,"Куб має шість граней.",5),
  q("Скільки вершин має кожне ребро?",["Одну","Дві","Три","Чотири"],1,"Кожне ребро має дві вершини.",5)
 ]},
 {name:"Фінальний реактор",short:"Перетворення та властивості",difficulty:"ФІНАЛЬНИЙ РІВЕНЬ",color:"#ff7fba",desc:"Застосуй знання про перетворення, властивості та візуалізацію моделей.",questions:[
  q("Яка операція змінює розміри 3D-об'єкта?",["Масштабування","Рендеринг","Анімація звуку","Кодування тексту"],0,"Масштабування — це змінення розмірів об'єкта.",5),
  q("Які елементи поверхні можна переміщувати окремо під час редагування моделі?",["Вершини, ребра та грані","Лише назву файлу","Лише освітлення","Тільки формат документа"],0,"У 3D-моделі можна переміщувати весь об'єкт або окремі вершини, ребра й грані.",5),
  q("Що таке рендеринг?",["Створення плоского зображення на основі 3D-моделі","Створення резервної копії","Поворот камери","Друк текстового документа"],0,"Рендеринг — процес створення 3D-зображення, тобто плоского зображення на основі тривимірної моделі.",5),
  q("Які властивості є основними для 3D-моделі згідно з параграфом?",["Кількість і розташування вершин, ребер, граней та види матеріалів","Лише ім'я автора","Кількість сторінок у документі","Гучність і тривалість звуку"],0,"Основні властивості: кількість вершин, ребер і граней, їх розташування та види матеріалів поверхні.",5),
  q("У чому різниця між 3D-моделлю та 3D-анімацією?",["3D-анімація моделює рух об'єктів або їх частин на основі моделей","Це однакові поняття","3D-модель завжди є відео","Анімація не використовує 3D-моделі"],0,"У 3D-анімації моделюється рух об'єктів або їхніх частин для наочного відтворення процесів.",5),
  q("У Online 3D Viewer учень хоче розглянути модель з іншого боку та наблизити її. Які дії потрібні?",["Перетягнути модель для повороту та використати коліщатко для масштабу","Змінити шрифт документа","Увімкнути мікрофон","Надрукувати сторінку"],0,"У вправі параграфа модель повертають перетягуванням робочого поля, а масштаб змінюють коліщатком прокручування.",5)
 ]}
];
function q(text,answers,correct,explanation,points){return {text,answers,correct,explanation,points};}

let state={student:"",score:0,level:0,question:0,completed:[],answers:{},levelScores:[]};
const $=id=>document.getElementById(id);
const save=()=>localStorage.setItem("3dQuest41",JSON.stringify(state));
function load(){try{const s=JSON.parse(localStorage.getItem("3dQuest41"));if(s&&s.student)state=s;}catch(e){}}
function grade(points){if(points>=90)return 12;if(points>=82)return 11;if(points>=74)return 10;if(points>=64)return 9;if(points>=54)return 8;if(points>=44)return 7;if(points>=36)return 6;if(points>=28)return 5;if(points>=20)return 4;if(points>=12)return 3;if(points>=6)return 2;return 1;}
function award(points){if(points>=90)return "Легенда 3D-світу";if(points>=74)return "Майстер моделювання";if(points>=54)return "Досвідчений творець";return "Початківець 3D";}
function renderNav(){
 $("levelNav").innerHTML=levels.map((l,i)=>`<button class="level-item ${i===state.level?"active":""} ${state.completed.includes(i)?"done":""} ${i>state.completed.length?"locked":""}" ${i>state.completed.length?"disabled":""} type="button"><span class="num">${state.completed.includes(i)?"✓":String(i+1).padStart(2,"0")}</span><span><strong>${l.name}</strong><small>${l.short}</small></span></button>`).join("");
 $("score").textContent=state.score;$("scoreBar").style.width=state.score+"%";
}
function renderQuestion(){
 const l=levels[state.level],item=l.questions[state.question];
 $("levelEyebrow").textContent=`РІВЕНЬ ${String(state.level+1).padStart(2,"0")} · ${l.difficulty}`;
 $("levelTitle").textContent=l.name;$("levelDesc").textContent=l.desc;
 $("crystal").style.color=l.color;
 $("questionCount").textContent=`ЗАВДАННЯ ${state.question+1} / ${l.questions.length}`;
 $("questionPoints").textContent=`${item.points} БАЛІВ`;
 $("questionText").textContent=item.text;
 $("answers").innerHTML=item.answers.map((a,i)=>`<button class="answer" data-index="${i}" type="button">${String.fromCharCode(65+i)}. ${a}</button>`).join("");
 $("feedback").className="feedback hidden";$("nextBtn").classList.add("hidden");$("hintText").textContent="Обери одну правильну відповідь.";
 $("answers").querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>answer(Number(btn.dataset.index))));
}
function answer(index){
 const item=levels[state.level].questions[state.question],buttons=[...$("answers").querySelectorAll("button")];
 buttons.forEach(b=>b.disabled=true);
 const correct=index===item.correct;
 buttons[item.correct].classList.add("correct");
 if(!correct)buttons[index].classList.add("wrong");
 if(correct)state.score=Math.min(100,state.score+item.points);
 state.answers[`${state.level}-${state.question}`]=correct;save();renderNav();
 const fb=$("feedback");fb.className=`feedback ${correct?"good":"bad"}`;
 fb.innerHTML=`<strong>${correct?"✓ Правильно! +"+item.points+" балів":"✕ Не зовсім правильно."}</strong><br>${item.explanation}`;
 $("hintText").textContent=correct?"Кристал знань заряджено.":"Запам'ятай пояснення та рухайся далі.";
 $("nextBtn").classList.remove("hidden");
 $("nextBtn").textContent=state.question===itemCount()-1?"ЗАВЕРШИТИ РІВЕНЬ →":"НАСТУПНЕ ЗАВДАННЯ →";
}
function itemCount(){return levels[state.level].questions.length;}
function next(){
 if(state.question<itemCount()-1){state.question++;renderQuestion();return;}
 state.completed.push(state.level);state.levelScores[state.level]=levels[state.level].questions.reduce((sum,item,i)=>sum+(state.answers[`${state.level}-${i}`]?item.points:0),0);
 save();renderNav();
 $("questionCard").classList.add("hidden");$("levelComplete").classList.remove("hidden");
 $("completeTitle").textContent=state.level===4?"Усі кристали відновлено!":"Рівень пройдено!";
 $("completeText").textContent=`За рівень «${levels[state.level].name}» набрано ${state.levelScores[state.level]} із ${levels[state.level].questions.reduce((s,x)=>s+x.points,0)} балів. Загальний результат — ${state.score}/100.`;
 $("continueBtn").textContent=state.level===4?"ПОБАЧИТИ РЕЗУЛЬТАТ →":"ВІДКРИТИ НАСТУПНИЙ РІВЕНЬ →";
}
function start(){
 const name=$("studentName").value.trim();
 if(!name){$("studentName").focus();$("studentName").placeholder="Введи ім'я та прізвище, будь ласка";return;}
 state={student:name,score:0,level:0,question:0,completed:[],answers:{},levelScores:[]};save();showGame();
}
function showGame(){
 $("welcome").classList.add("hidden");$("result").classList.add("hidden");$("game").classList.remove("hidden");
 $("playerLabel").textContent=state.student;renderNav();
 if(state.completed.length===5){showResult();return;}
 state.level=Math.min(state.completed.length,4);state.question=0;
 $("levelComplete").classList.add("hidden");$("questionCard").classList.remove("hidden");renderQuestion();
}
function showResult(){
 $("game").classList.add("hidden");$("welcome").classList.add("hidden");$("result").classList.remove("hidden");
 const g=grade(state.score);$("resultName").textContent=`${state.student}, вітаємо з успішним проходженням навчальної місії!`;
 $("finalPoints").textContent=`${state.score}/100`;$("finalGrade").textContent=`${g}/12`;$("award").textContent=award(state.score);
 const comment=state.score>=90?"Чудова робота! Ти впевнено орієнтуєшся в поняттях і принципах 3D-графіки.":state.score>=74?"Відмінний результат! Ти добре засвоїв матеріал параграфа.":state.score>=54?"Гарна робота! Повтори класифікацію програм і будову мешу, щоб закріпити знання.":"Ти зробив перші кроки у світі 3D. Перечитай § 4.1 і спробуй ще раз — практика допоможе!";
 $("resultComment").textContent=comment;
}
function reset(){if(!confirm("Скинути всі результати цього квесту?"))return;localStorage.removeItem("3dQuest41");state={student:"",score:0,level:0,question:0,completed:[],answers:{},levelScores:[]};$("game").classList.add("hidden");$("result").classList.add("hidden");$("welcome").classList.remove("hidden");$("studentName").value="";}
function csv(){
 const rows=[["Учень","Бали","Оцінка (12-бальна)","Нагорода","Пройдено рівнів"],[state.student,state.score,grade(state.score),award(state.score),state.completed.length]];
 const csvText="\uFEFF"+rows.map(r=>r.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(";")).join("\n");
 const a=document.createElement("a"),url=URL.createObjectURL(new Blob([csvText],{type:"text/csv;charset=utf-8"}));a.href=url;a.download="rezultat-3d-quest.csv";a.click();URL.revokeObjectURL(url);
}
$("startBtn").addEventListener("click",start);$("studentName").addEventListener("keydown",e=>{if(e.key==="Enter")start();});
$("nextBtn").addEventListener("click",next);$("continueBtn").addEventListener("click",()=>{if(state.level===4){showResult();return;}state.level++;state.question=0;save();$("levelComplete").classList.add("hidden");$("questionCard").classList.remove("hidden");renderNav();renderQuestion();});
$("resetBtn").addEventListener("click",reset);$("againBtn").addEventListener("click",reset);$("printBtn").addEventListener("click",()=>window.print());$("csvBtn").addEventListener("click",csv);
load();
if(state.student){$("studentName").value=state.student;}

// Декоративна інтерактивна 3D-сцена. Мишкою можна обертати сцену.
(function init3D(){
 const host=document.getElementById("scene");
 if(!window.THREE){host.style.background="radial-gradient(circle at 75% 40%,#172c59,#080d20 65%)";return;}
 const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x080d20,.035);
 const camera=new THREE.PerspectiveCamera(55,innerWidth/innerHeight,.1,100);camera.position.set(0,1.5,10);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;host.appendChild(renderer.domElement);
 scene.add(new THREE.AmbientLight(0x8daaff,1.1));
 const key=new THREE.PointLight(0x4ddfff,45,35);key.position.set(3,4,5);scene.add(key);
 const violet=new THREE.PointLight(0x8b62ff,35,30);violet.position.set(-5,-2,2);scene.add(violet);
 const group=new THREE.Group();scene.add(group);
 const mats=[new THREE.MeshStandardMaterial({color:0x45dff5,metalness:.55,roughness:.23,wireframe:false}),new THREE.MeshStandardMaterial({color:0x9679ff,metalness:.5,roughness:.25}),new THREE.MeshStandardMaterial({color:0xffa6df,metalness:.35,roughness:.3}),new THREE.MeshStandardMaterial({color:0x8af0d0,metalness:.4,roughness:.2})];
 const shapes=[new THREE.IcosahedronGeometry(1,1),new THREE.TorusKnotGeometry(.72,.22,100,12),new THREE.OctahedronGeometry(1.1,0),new THREE.TorusGeometry(.8,.25,16,70),new THREE.DodecahedronGeometry(.85,0)];
 shapes.forEach((geo,i)=>{const mesh=new THREE.Mesh(geo,mats[i%mats.length]);mesh.position.set((i-2)*2.25,Math.sin(i*2)*1.1,-2-(i%2));mesh.rotation.set(i*.5,i*.7,0);group.add(mesh);const edges=new THREE.LineSegments(new THREE.EdgesGeometry(geo),new THREE.LineBasicMaterial({color:0x9cefff,transparent:true,opacity:.22}));mesh.add(edges);});
 const particles=new THREE.BufferGeometry(),count=650,positions=new Float32Array(count*3);for(let i=0;i<count;i++){positions[i*3]=(Math.random()-.5)*32;positions[i*3+1]=(Math.random()-.5)*20;positions[i*3+2]=(Math.random()-.5)*24;}particles.setAttribute("position",new THREE.BufferAttribute(positions,3));scene.add(new THREE.Points(particles,new THREE.PointsMaterial({color:0x8abfff,size:.035,transparent:true,opacity:.7})));
 let down=false,px=0,py=0,rx=0,ry=0;
 renderer.domElement.addEventListener("pointerdown",e=>{down=true;px=e.clientX;py=e.clientY;renderer.domElement.setPointerCapture(e.pointerId);});
 renderer.domElement.addEventListener("pointerup",()=>down=false);
 renderer.domElement.addEventListener("pointermove",e=>{if(!down)return;ry+=(e.clientX-px)*.006;rx+=(e.clientY-py)*.004;px=e.clientX;py=e.clientY;});
 renderer.domElement.addEventListener("wheel",e=>{camera.position.z=THREE.MathUtils.clamp(camera.position.z+e.deltaY*.004,6,15);},{passive:true});
 function animate(){requestAnimationFrame(animate);group.rotation.y+=(ry-group.rotation.y)*.035;group.rotation.x+=(rx-group.rotation.x)*.035;group.children.forEach((m,i)=>{m.rotation.x+=.0015*(i+1);m.rotation.y+=.002*(i+1);});renderer.render(scene,camera);}animate();
 addEventListener("resize",()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
})();
