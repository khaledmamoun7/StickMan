//Word
//En
const fruitsEn = ['apple','carrot','water melon','pumpkin','banana','lemon','orange'];
const namesEn = ['Ahmed','Ali','Mohammed','Ibrahim','Mamoun','Salah','Khaled','Rana','Rodina','Eleen','Roaa','Waad','Mahmoun','Yassen','Ismeal'];
const countriesEn = ['Egypt','Cairo', 'Saudi Arabia', 'Riyad','Germany','Netherlands','France','Morocco','Tunsia','Paris','Greece','Turkey','Mecca','Spain','Madrid','Barcelona','Italy','Milan','Rome','Alexandria']
const moreEn = ['plane','car','laptop','computer','televsion','phone','stairs','school','university'];
//Ar
const fruitsAr =["تفاح","جزر","بطيخ","قرع","موز","ليمون","برتقال"]
const namesAr =["احمد","علي","محمد","ابراهيم","مامون","صلاح","خالد","رنا","رودينا","ايلين","وعد","محمود","ياسين","اسماعيل"]
const countriesAr =["مصر","القاهره","السعوديه","الرياض","المانيا","هولندا","فرنسا","المغرب","تونس","باريس","اليونان","تركيا","مكه","اسبانيا","مدريد","برشلونا","ايطاليا","ميلان","روما","الاسكندريه"]
const moreAr =["سياره","لابتوب","كمبيوتر","تلفزيون","جوال","سلم","مدرسه","جامعه"]
//words end

//darkMode
let DarkLight = document.getElementById('checkbox_toggle');
let darkMode = 'off';
if(localStorage.darkMode != null){
   darkMode = localStorage.getItem('darkMode');
   if(darkMode=='on'){
    DarkLight.checked = true;
    DarkMode()
   }
}
function DarkMode(){
    if(DarkLight.checked){
        document.body.style.backgroundColor = '#212121'
        document.body.style.color = 'white'
        document.getElementById('stick1').classList.remove('border-right-light')
        document.getElementById('stick1').classList.add('border-right-dark')
        document.getElementById('base').classList.remove('background-light')
        document.getElementById('base').classList.add('background-dark')
        document.getElementById('stick2').classList.remove('border-top-light')
        document.getElementById('stick2').classList.add('border-top-dark')
        document.getElementById('small-stick').classList.remove('border-right-light')
        document.getElementById('small-stick').classList.add('border-right-dark')
        document.getElementById('head').classList.remove('border-solid-light')
        document.getElementById('head').classList.add('border-solid-dark')
        document.getElementById('head-border').classList.remove('border-dotted-light')
        document.getElementById('head-border').classList.add('border-dotted-dark')
        document.getElementById('body').classList.remove('background-light')
        document.getElementById('body').classList.add('background-dark')
        document.getElementById('hand1').classList.remove('background-light')
        document.getElementById('hand1').classList.add('background-dark')
        document.getElementById('hand2').classList.remove('background-light')
        document.getElementById('hand2').classList.add('background-dark')
        document.getElementById('leg1').classList.remove('background-light')
        document.getElementById('leg1').classList.add('background-dark')
        document.getElementById('leg2').classList.remove('background-light')
        document.getElementById('leg2').classList.add('background-dark')
        darkMode = 'on';
        localStorage.setItem('darkMode',darkMode);
    }else{
        document.body.style.backgroundColor = '#e8e8e8'
        document.body.style.color = 'black'
        document.getElementById('stick1').classList.remove('border-right-dark')
        document.getElementById('stick1').classList.add('border-right-light')
        document.getElementById('base').classList.remove('background-dark')
        document.getElementById('base').classList.add('background-light')
        document.getElementById('stick2').classList.remove('border-top-dark')
        document.getElementById('stick2').classList.add('border-top-light')
        document.getElementById('small-stick').classList.remove('border-right-dark')
        document.getElementById('small-stick').classList.add('border-right-light')
        document.getElementById('head').classList.remove('border-solid-dark')
        document.getElementById('head').classList.add('border-solid-light')
        document.getElementById('head-border').classList.remove('border-dotted-dark')
        document.getElementById('head-border').classList.add('border-dotted-light')
        document.getElementById('body').classList.remove('background-dark')
        document.getElementById('body').classList.add('background-light')
        document.getElementById('hand1').classList.remove('background-dark')
        document.getElementById('hand1').classList.add('background-light')
        document.getElementById('hand2').classList.remove('background-dark')
        document.getElementById('hand2').classList.add('background-light')
        document.getElementById('leg1').classList.remove('background-dark')
        document.getElementById('leg1').classList.add('background-light')
        document.getElementById('leg2').classList.remove('background-dark')
        document.getElementById('leg2').classList.add('background-light')
        darkMode = 'off';
        localStorage.setItem('darkMode',darkMode);
    }
}
//dark mode end

//langauge
let Lang = document.getElementById('color_mode');
let langAr = document.getElementById('letters-ar')
let langEn = document.getElementById('letters-en')
let langConfirm = false;
let winnigHTML = document.getElementById('winnig'); 

if(localStorage.langConfirm != null){
    langConfirm = localStorage.langConfirm;
}
langauge()
function langauge(){
    if( langConfirm == 'true'){
        langAr.classList.remove('display-none');
        langEn.classList.add('display-none');
        document.getElementById('category-div').innerHTML = `
         في كلمة تم إنشائها <br>
         ! حاول تخمنها
        <br>
        <select name="category" id="category" onchange="categoryRel()">
        <option class="options" value="fruits">فواكه وخضروات</option>
        <option class="options" value="names"> أسماء عربية</option>
        <option class="options" value="countries"> بلاد ومدن</option>
        <option class="options" value="more">...المزيد</option>
        </select> 
        <label for="category"> : الفئة</label>
        `;
        winnigHTML.innerHTML = `! ركز`
        document.getElementById('theword').style.direction ='rtl';
        Lang.checked =true ;
    }
}
function langaugeRel(){
    let langReload = confirm('Are you sure to change Language?(this will reset the game)');
    if(langReload == true){
    langConfirm = Lang.checked
    localStorage.setItem('langConfirm',langConfirm);
    location.reload();
    }else{
        if(langConfirm == 'true'){
            Lang.checked = true;
        }else{
            Lang.checked = false;
        }
    }
}
// language end

//category
let catSelectedIndex = 0;

if(localStorage.catSelectedIndex !=null){ 
    catSelectedIndex = localStorage.catSelectedIndex;
    document.getElementById('category').selectedIndex = catSelectedIndex;
}
function categoryRel(){
    let categoryCon = confirm('Are you sure to change category?(this well reset the game)')
    if(categoryCon == true){
        catSelectedIndex = document.getElementById('category').selectedIndex;
        localStorage.setItem('catSelectedIndex',catSelectedIndex);
        location.reload()
    }else{
        document.getElementById('category').selectedIndex = -1;
    }
}
//category end

//generate
let wordHTML = document.getElementById('theword');
let theWord = '';
function generateWord(){
    if(langConfirm != 'true'){
        if(catSelectedIndex == 0){
            function getRandomElement(arr) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                return arr[randomIndex];
              }
         theWord = getRandomElement(fruitsEn);
        }
        else if(catSelectedIndex == 1){
            function getRandomElement(arr) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                return arr[randomIndex];
              }
         theWord = getRandomElement(namesEn);
        }
        else if(catSelectedIndex == 2){
            function getRandomElement(arr) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                return arr[randomIndex];
              }
         theWord = getRandomElement(countriesEn);
        }
        else{
            function getRandomElement(arr) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                return arr[randomIndex];
              }
         theWord = getRandomElement(moreEn);
        }
    }else{
        if(catSelectedIndex == 0){
            function getRandomElement(arr) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                return arr[randomIndex];
              }
         theWord = getRandomElement(fruitsAr);
        }
        else if(catSelectedIndex == 1){
            function getRandomElement(arr) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                return arr[randomIndex];
              }
         theWord = getRandomElement(namesAr);
        }
        else if(catSelectedIndex == 2){
            function getRandomElement(arr) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                return arr[randomIndex];
              }
         theWord = getRandomElement(countriesAr);
        }
        else{
            function getRandomElement(arr) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                return arr[randomIndex];
              }
         theWord = getRandomElement(moreAr);
        }
    }
}
generateWord();
function replaceCharacter( index, replacement) {
    return (
    wordHTML.innerHTML.slice(0, index) +
    replacement +
    wordHTML.innerHTML.slice(index + replacement.length)
    );
  }
function showWord(){

    for(let i = 0; i < theWord.length ; i++){
        if(theWord[i] == ' '){
            wordHTML.innerHTML += ` `
        }else{
        wordHTML.innerHTML += `_`
        }
    }
    
}
showWord();
let stopPlaying = false;
let manIndex = 1;
function include(letter ,id){
    if(stopPlaying != true && document.getElementById(`${id}`).style.backgroundColor != 'rgb(58, 40, 40)' ){

        let theLength = theWord.length;
        for(let i = 0; i < theLength ; i++){
            if(theWord.toUpperCase()[i] == letter){
                wordHTML.innerHTML = replaceCharacter(i , letter);
            }
        }
        if(theWord.toUpperCase().includes(letter)){
            if(theWord.toUpperCase() == wordHTML.innerHTML && langConfirm != 'true' ){
                winnigHTML.innerHTML = `
                <b>Congratulations</b>
                <br>You have been Won! <i class="fa-regular fa-face-smile-beam"></i>
                <br>the word was <b>${theWord}</b>
                <br>play again in 
                
                `
                stopPlaying = true;
                let intervalId = setInterval(function(){winnigHTML.innerHTML += '.'},1000)
                setTimeout(() => {
                    clearInterval(intervalId);
                    location.reload();
                  }, 4000);
            }else if(theWord.toUpperCase() == wordHTML.innerHTML && langConfirm == 'true'){
                winnigHTML.innerHTML =`
                <b>مبروك</b>
                <br>
                <i class="fa-regular fa-face-smile-beam"></i> ! <b>كسبت</b>
                <br>الكلمة كانت ${theWord}
                <br> العب تاني في 
                `
                stopPlaying = true;
                let intervalId = setInterval(function(){winnigHTML.innerHTML += '.'},1000)
                setTimeout(() => {
                    clearInterval(intervalId);
                    location.reload();
                  }, 4000);
            }else{
                if(langConfirm != 'true'){
                winnigHTML.innerHTML = `
                Keep going!
                `}else{
                    winnigHTML.innerHTML = `!استمر`
                }
            }
        }else{
            if(manIndex == 1){
                document.getElementById('stick2').classList.remove('display-none');
                manIndex++;
                if(langConfirm != 'true'){
                    winnigHTML.innerHTML = `
                    Be Aware!
                    `}else{
                        winnigHTML.innerHTML = `!ركز`
                    }
            }else if(manIndex == 2){
                document.getElementById('small-stick').classList.remove('display-none');
                manIndex++;
                if(langConfirm != 'true'){
                    winnigHTML.innerHTML = `
                    Be Aware!
                    `}else{
                        winnigHTML.innerHTML = `!ركز`
                    }
            }else if(manIndex == 3){
                document.getElementById('head-border').classList.remove('display-none');
                manIndex++;
                if(langConfirm != 'true'){
                    winnigHTML.innerHTML = `
                    Be Aware!
                    `}else{
                        winnigHTML.innerHTML = `!ركز`
                    }
            }else if(manIndex == 4){
                document.getElementById('head').classList.remove('display-none');
                manIndex++;
                if(langConfirm != 'true'){
                    winnigHTML.innerHTML = `
                    Be Aware!
                    `}else{
                        winnigHTML.innerHTML = `!ركز`
                    }
            }else if(manIndex == 5){
                document.getElementById('body').classList.remove('display-none');
                manIndex++;
                if(langConfirm != 'true'){
                    winnigHTML.innerHTML = `
                    Be Aware!
                    `}else{
                        winnigHTML.innerHTML = `!ركز`
                    }
            }else if(manIndex == 6){
                document.getElementById('hand1').classList.remove('display-none');
                document.getElementById('hand2').classList.remove('display-none');
                manIndex++;
                if(langConfirm != 'true'){
                    winnigHTML.innerHTML = `
                    Be Aware!
                    `}else{
                        winnigHTML.innerHTML = `!ركز`
                    }
            }else if(manIndex == 7){
                document.getElementById('leg1').classList.remove('display-none');
                document.getElementById('leg2').classList.remove('display-none');
                manIndex++;
                if(langConfirm !='true'){
                    winnigHTML.innerHTML = `You have been <b>LOST</b>! <i class="fa-regular fa-face-frown icon-color"></i>
                    <br> the word was <b>${theWord}</b>
                    <br> try again in `
                    stopPlaying = true;
                    let intervalId = setInterval(function(){winnigHTML.innerHTML += '.'},1000)
                setTimeout(() => {
                    clearInterval(intervalId);
                    location.reload();
                  }, 4000);
                }else{
                    winnigHTML.innerHTML = `<i class="fa-regular fa-face-frown icon-color"></i>!خسرت 
                    <br>  الكلمة كانت <b>${theWord}</b>
                    <br> حاول تاني في`
                    stopPlaying = true;
                    let intervalId = setInterval(function(){winnigHTML.innerHTML += '.'},1000)
                    setTimeout(() => {
                        clearInterval(intervalId);
                        location.reload();
                    }, 4000);
                }
            }
        }
    }
}
function colorDisable(id){
    document.getElementById(`${id}`).style.backgroundColor = 'rgb(58, 40, 40)'
    document.getElementById(`${id}`).style.cursor = 'default'
}    
    
    
    
