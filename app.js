const terms = { chuseok: '추석 · Чхусок', songpyeon: '송편 · Сонпхён', moon: '보름달 · Полная луна', hanbok: '한복 · Ханбок' };

const rounds = [
  { title: 'Случайный раунд 1', cheer: 'Не волнуйтесь: здесь нет выбывания. Любой ответ — это новая находка!' },
  { title: 'Случайный раунд 2', cheer: 'Отличная команда! Смотрите на картинки и помогайте друг другу.' },
  { title: 'Случайный раунд 3', cheer: 'Последний раунд! Вспомним всё, что уже увидели вместе.' }
];

const questions = [
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🌕', subject:terms.moon, q:'Какой круглый гость часто светит в Чхусок?', options:['Полная луна 🌕','Снежинка ❄️'], answer:0, exp:'В Чхусок люди любят смотреть на большую круглую полную луну.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🍁', subject:'가을 · Осень', q:'В какое время года бывает Чхусок?', options:['Осенью 🍂','Весной 🌷'], answer:0, exp:'Чхусок — корейский праздник осени, когда созревают фрукты.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'👨‍👩‍👧‍👦', subject:'가족 · Семья', q:'С кем приятно проводить Чхусок?', options:['С семьёй','С роботом'], answer:0, exp:'В праздник семьи собираются вместе, разговаривают и едят.'},
  {type:'ДА / НЕТ', emoji:'🌙', subject:terms.chuseok, q:'Чхусок — это осенний праздник в Корее?', options:['Да','Нет'], answer:0, exp:'Да! Чхусок празднуют осенью.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🍐', subject:'Осенние плоды', q:'Что часто собирают осенью?', options:['Фрукты 🍎','Ледяные кубики 🧊'], answer:0, exp:'Осенью поспевают сладкие фрукты. Их приятно делить с близкими.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🏡', subject:'집 · Дом', q:'Куда могут приехать родные на праздник?', options:['Домой 🏡','На Луну 🚀'], answer:0, exp:'Многие семьи приезжают домой или встречаются у родных.'},
  {type:'СМОТРИ НА ФОТО', emoji:'🌕', subject:'Фото полной луны', q:'Что ты видишь на этой картинке?', options:['Круглую луну','Круглый мяч'], answer:0, exp:'Это полная луна. По-корейски: 보름달, «бормдаль».', photo:true},
  {type:'ДА / НЕТ', emoji:'😊', subject:'Вместе', q:'В Чхусок нужно грустить и играть одному?', options:['Нет','Да'], answer:0, exp:'Нет. Это тёплый праздник, когда можно быть вместе.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🌾', subject:'Осеннее поле', q:'Какого цвета могут быть осенние листья?', options:['Жёлтые и красные','Только синие'], answer:0, exp:'Осенью листья становятся жёлтыми, красными и оранжевыми.'},
  {type:'ДВИЖЕНИЕ', emoji:'🙌', subject:'Игра руками', q:'Покажи руками форму полной луны. Что получится?', options:['Большой круг ○','Длинная линия ─'], answer:0, exp:'Полная луна круглая. Отлично, если ладони сделали большой круг!', activity:true},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🥟', subject:terms.songpyeon, q:'Как называется праздничная рисовая лепёшка?', options:['Сонпхён 🥟','Снеговик ⛄'], answer:0, exp:'Сонпхён — маленькая рисовая лепёшка для Чхусока.'},
  {type:'СМОТРИ НА ФОТО', emoji:'🥟', subject:'Рисовые лепёшки', q:'Что лежит на тарелке?', options:['Сонпхён','Карандаши'], answer:0, exp:'На тарелке сонпхён. Их часто делают вместе с семьёй.', photo:true},
  {type:'ДА / НЕТ', emoji:'🥟', subject:terms.songpyeon, q:'Сонпхён — это еда, а не игрушка?', options:['Да','Нет'], answer:0, exp:'Да. Сонпхён — мягкая рисовая еда с начинкой.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🍇', subject:'Фрукты', q:'Какой фрукт можно увидеть на осеннем столе?', options:['Виноград 🍇','Арбузный лёд 🧊'], answer:0, exp:'Осенью на столе бывают виноград, груши, яблоки и хурма.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'👘', subject:terms.hanbok, q:'Как называется красивая корейская одежда?', options:['Ханбок 👘','Скафандр 🧑‍🚀'], answer:0, exp:'Ханбок — традиционная корейская одежда. У неё яркие цвета.'},
  {type:'СОЕДИНИ', emoji:'👘', subject:'Слово и картинка', q:'Выбери пару, которая подходит друг другу.', options:['한복 — красивая одежда','한복 — летающая птица'], answer:0, exp:'한복 читается «ханбок». Это традиционная одежда Кореи.', activity:true},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🎲', subject:'전통 놀이 · Игра', q:'Что можно делать с друзьями в праздник?', options:['Играть вместе 🎲','Прятать улыбки'], answer:0, exp:'Игры помогают друзьям смеяться и узнавать друг друга лучше.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🤝', subject:'Команда', q:'Если вопрос сложный, что можно сделать?', options:['Спросить команду','Сразу сдаться'], answer:0, exp:'Можно обсудить ответ с командой. Вместе думать интересно!'},
  {type:'ДА / НЕТ', emoji:'👘', subject:terms.hanbok, q:'Ханбок может быть ярким и цветным?', options:['Да','Нет'], answer:0, exp:'Да. Ханбок часто украшен красивыми яркими цветами.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🥢', subject:'Праздничный стол', q:'Что хорошо делать с едой на празднике?', options:['Делиться','Бросаться ею'], answer:0, exp:'Еду приятно пробовать и делить с семьёй и друзьями.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🌕', subject:terms.moon, q:'Как по-корейски называется полная луна?', options:['보름달','한복'], answer:0, exp:'보름달 — «бормдаль», полная луна. 한복 — это одежда.'},
  {type:'СМОТРИ НА ФОТО', emoji:'👘', subject:'Фото ханбока', q:'Что надето на ребёнке на картинке?', options:['Ханбок','Плавательный круг'], answer:0, exp:'Это ханбок — праздничная традиционная одежда.', photo:true},
  {type:'ДА / НЕТ', emoji:'🍂', subject:terms.chuseok, q:'Чхусок бывает летом, когда идёт снег?', options:['Нет','Да'], answer:0, exp:'Нет. Чхусок — осенний праздник.'},
  {type:'КАРТИНКА · 1 ИЗ 3', emoji:'🥟', subject:'Вспоминаем слова', q:'Какое слово подходит к этой рисовой еде?', options:['송편','한복','보름달'], answer:0, exp:'송편 — «сонпхён», рисовая лепёшка.'},
  {type:'ДА / НЕТ', emoji:'👨‍👩‍👧', subject:'Семья', q:'В каждой семье Чхусок может проходить немного по-разному?', options:['Да','Нет'], answer:0, exp:'Да. У семей бывают свои любимые блюда и маленькие традиции.'},
  {type:'ДВИЖЕНИЕ', emoji:'🍐', subject:'Угадай фрукт', q:'Покажи жестами свой любимый осенний фрукт. Это весело?', options:['Да, покажу!','Нет, замру'], answer:0, exp:'Отлично! У каждого может быть свой любимый фрукт.', activity:true},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🌕', subject:'Ночное небо', q:'Когда лучше искать полную луну?', options:['Вечером 🌙','Под водой 🐠'], answer:0, exp:'Луну удобно искать вечером на тёмном небе.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'🥟', subject:terms.songpyeon, q:'Из чего делают сонпхён?', options:['Из рисового теста','Из металла'], answer:0, exp:'Сонпхён делают из мягкого рисового теста с начинкой.'},
  {type:'КАРТИНКА · 1 ИЗ 2', emoji:'👘', subject:terms.hanbok, q:'Что относится к ханбоку?', options:['Красивая праздничная одежда','Тарелка с едой'], answer:0, exp:'Ханбок — это одежда, а сонпхён — еда.'},
  {type:'КАРТИНКА · 1 ИЗ 3', emoji:'🎉', subject:'Большой финал', q:'Что самое важное в нашей игре про Чхусок?', options:['Узнавать и радоваться вместе','Быть самым быстрым','Не помогать друзьям'], answer:0, exp:'Верно! Мы узнаём культуру с любопытством, добротой и друзьями.'}
];

const korean = [
  ['추석에 자주 보이는 둥근 손님은 무엇일까요?', ['보름달 🌕','눈송이 ❄️'], '추석에는 크고 둥근 보름달을 보는 것을 좋아해요.'],
  ['추석은 어느 계절에 있을까요?', ['가을 🍂','봄 🌷'], '추석은 과일이 익는 한국의 가을 명절이에요.'],
  ['추석은 누구와 함께 보내면 좋을까요?', ['가족과 함께','로봇과 함께'], '명절에는 가족이 모여 이야기하고 음식을 나누어 먹어요.'],
  ['추석은 한국의 가을 명절인가요?', ['네','아니요'], '네! 추석은 가을에 지내는 명절이에요.'],
  ['가을에는 무엇을 많이 수확할까요?', ['과일 🍎','얼음 조각 🧊'], '가을에는 달콤한 과일이 익어요. 가족과 나누어 먹기 좋아요.'],
  ['명절에 가족들은 어디로 올 수 있을까요?', ['집으로 🏡','달로 🚀'], '많은 가족이 집이나 친척 집에서 함께 만나요.'],
  ['이 그림에서 무엇이 보이나요?', ['둥근 달','둥근 공'], '이것은 보름달이에요. 한국어로 보름달이라고 해요.'],
  ['추석에는 슬프게 혼자 놀아야 하나요?', ['아니요','네'], '아니요. 추석은 함께 즐겁게 보내는 따뜻한 명절이에요.'],
  ['가을 나뭇잎은 어떤 색이 될 수 있을까요?', ['노랑과 빨강','파랑만'], '가을에는 나뭇잎이 노랑, 빨강, 주황색으로 변해요.'],
  ['손으로 보름달 모양을 만들어 보세요. 어떤 모양일까요?', ['큰 동그라미 ○','긴 선 ─'], '보름달은 둥글어요. 손으로 큰 원을 만들었다면 아주 잘했어요!'],
  ['명절에 먹는 쌀떡 이름은 무엇일까요?', ['송편 🥟','눈사람 ⛄'], '송편은 추석에 먹는 작은 쌀떡이에요.'],
  ['접시 위에 무엇이 있나요?', ['송편','연필'], '접시 위에는 송편이 있어요. 가족과 함께 만들기도 해요.'],
  ['송편은 장난감이 아니라 음식인가요?', ['네','아니요'], '네. 송편은 속을 넣은 부드러운 쌀 음식이에요.'],
  ['가을 상에서 볼 수 있는 과일은 무엇일까요?', ['포도 🍇','수박 얼음 🧊'], '가을 상에는 포도, 배, 사과, 감이 올라오기도 해요.'],
  ['예쁜 한국 전통 옷은 무엇이라고 할까요?', ['한복 👘','우주복 🧑‍🚀'], '한복은 한국의 전통 옷이에요. 알록달록 아름다운 색이 많아요.'],
  ['그림과 잘 어울리는 짝을 골라 보세요.', ['한복 — 예쁜 전통 옷','한복 — 날아다니는 새'], '한복은 한국의 전통 옷이에요.'],
  ['명절에 친구들과 무엇을 할 수 있을까요?', ['함께 놀이하기 🎲','웃음 숨기기'], '놀이는 친구들과 웃으며 서로를 알아가는 좋은 방법이에요.'],
  ['문제가 어렵다면 어떻게 하면 좋을까요?', ['팀에게 물어보기','바로 포기하기'], '팀과 함께 답을 이야기해 보세요. 같이 생각하면 더 재미있어요!'],
  ['한복은 밝고 알록달록한 색일 수 있나요?', ['네','아니요'], '네. 한복에는 아름답고 밝은 색이 많이 쓰여요.'],
  ['명절 음식은 어떻게 하면 좋을까요?', ['함께 나누기','서로 던지기'], '음식은 가족과 친구와 맛보고 나누면 더 즐거워요.'],
  ['보름달은 한국어로 무엇이라고 할까요?', ['보름달','한복'], '보름달은 둥근 달이고, 한복은 옷이에요.'],
  ['그림 속 아이가 입은 것은 무엇일까요?', ['한복','수영 튜브'], '이것은 한복, 한국의 전통 옷이에요.'],
  ['추석은 눈이 오는 여름에 있나요?', ['아니요','네'], '아니요. 추석은 가을 명절이에요.'],
  ['이 쌀 음식과 어울리는 말은 무엇일까요?', ['송편','한복','보름달'], '송편은 추석에 먹는 쌀떡이에요.'],
  ['모든 가족의 추석 모습은 조금씩 다를 수 있나요?', ['네','아니요'], '네. 가족마다 좋아하는 음식과 작은 전통이 있을 수 있어요.'],
  ['좋아하는 가을 과일을 몸으로 표현해 보세요. 재미있나요?', ['네, 해 볼래요!','아니요, 가만히 있을래요'], '아주 좋아요! 좋아하는 과일은 사람마다 다를 수 있어요.'],
  ['보름달은 언제 찾기 좋을까요?', ['저녁 🌙','물속 🐠'], '보름달은 어두운 저녁 하늘에서 보기 좋아요.'],
  ['송편은 무엇으로 만들까요?', ['쌀 반죽','금속'], '송편은 속을 넣은 부드러운 쌀 반죽으로 만들어요.'],
  ['한복에 해당하는 것은 무엇일까요?', ['아름다운 전통 옷','음식이 담긴 접시'], '한복은 옷이고, 송편은 음식이에요.'],
  ['추석 놀이에서 가장 중요한 것은 무엇일까요?', ['함께 배우고 즐기기','가장 빠르기','친구를 돕지 않기'], '맞아요! 우리는 호기심과 친절한 마음으로 문화를 함께 배워요.']
];

const roundKorean = ['랜덤 퀴즈 1라운드', '랜덤 퀴즈 2라운드', '랜덤 퀴즈 3라운드'];
const extraRussian = [
  ['Солнце ☀️','Звезда ⭐'],['Зимой ❄️','Летом ☀️'],['С медведем','С космонавтом'],['Только в кино','Не знаю'],['Цветы 🌷','Песок 🏖️'],['В школу','В океан'],['Звезду','Облако'],['Только молчать','Не знаю'],['Зелёные и фиолетовые','Только белые'],['Треугольник △','Квадрат □'],
  ['Суп 🍲','Карандаш ✏️'],['Чашка','Мяч'],['Это одежда','Не знаю'],['Камень','Карандаш'],['Зонтик ☂️','Книга 📘'],['한복 — вкусный фрукт','한복 — большая луна'],['Спать весь день','Есть снег'],['Спрятать карточки','Перестать играть'],['Только чёрным','Нельзя носить'],['Прятать её','Бросаться ею'],
  ['송편','추석'],['Шапка','Дождевик'],['Весной','Зимой'],['추석'],['Никогда','Не знаю'],['Нет, буду молчать','Только зимой'],['Утром в школе','В холодильнике'],['Из пластика','Из муки'],['Тарелка с едой','Игрушечная машина'],['Запомнить только очки']
];
const extraKorean = [
  ['해 ☀️','별 ⭐'],['겨울 ❄️','여름 ☀️'],['곰과 함께','우주비행사와 함께'],['영화에서만','잘 모르겠어요'],['꽃 🌷','모래 🏖️'],['학교로','바다로'],['별','구름'],['조용히만 있기','잘 모르겠어요'],['초록과 보라','하얀색만'],['세모 △','네모 □'],
  ['수프 🍲','연필 ✏️'],['컵','공'],['옷이에요','잘 모르겠어요'],['돌','연필'],['우산 ☂️','책 📘'],['한복 — 맛있는 과일','한복 — 큰 달'],['하루 종일 자기','눈 먹기'],['카드 숨기기','놀이 그만두기'],['검은색만','입으면 안 돼요'],['음식을 숨기기','음식을 던지기'],
  ['송편','추석'],['모자','비옷'],['봄','겨울'],['추석'],['절대 아니에요','잘 모르겠어요'],['아니요, 조용히 있을래요','겨울에만 할래요'],['학교의 아침','냉장고 안'],['플라스틱','밀가루'],['음식이 담긴 접시','장난감 자동차'],['점수만 기억하기']
];
const typeFour = {'КАРТИНКА · 1 ИЗ 2':'КАРТИНКА · 1 ИЗ 4','КАРТИНКА · 1 ИЗ 3':'КАРТИНКА · 1 ИЗ 4','ДА / НЕТ':'ВЫБЕРИ ОТВЕТ · 1 ИЗ 4','СМОТРИ НА ФОТО':'СМОТРИ НА ФОТО · 1 ИЗ 4','ДВИЖЕНИЕ':'ДВИЖЕНИЕ · 1 ИЗ 4','СОЕДИНИ':'СОЕДИНИ · 1 ИЗ 4'};
const typeKorean = {'КАРТИНКА · 1 ИЗ 4':'그림 · 4지선다','ВЫБЕРИ ОТВЕТ · 1 ИЗ 4':'정답 고르기 · 4지선다','СМОТРИ НА ФОТО · 1 ИЗ 4':'사진을 보고 · 4지선다','ДВИЖЕНИЕ · 1 ИЗ 4':'활동 · 4지선다','СОЕДИНИ · 1 ИЗ 4':'연결하기 · 4지선다'};
questions.forEach((item, index) => {
  item.options.push(...extraRussian[index]);
  korean[index][1].push(...extraKorean[index]);
  item.type = typeFour[item.type];
});
const bilingual = (ru, ko) => `<span class="ru-line">${ru}</span><span class="ko-line">${ko}</span>`;
const quizItems = questions.map((item, index) => ({ ...item, ko: korean[index] }));

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function shuffledRounds() { return shuffle(quizItems); }

let current = 0;
let score = 0;
let answered = false;
let gameQuestions = [];
const $ = (id) => document.getElementById(id);
const welcome = $('welcome-screen'), quiz = $('quiz-screen'), result = $('result-screen');

function roundFor(index) { return Math.floor(index / 10); }
function renderQuestion() {
  const item = gameQuestions[current];
  const r = roundFor(current);
  $('round-label').innerHTML = bilingual(`РАУНД ${r + 1}`, `${r + 1}라운드`);
  $('round-title').innerHTML = bilingual(rounds[r].title, roundKorean[r]);
  $('question-number').textContent = String(current + 1).padStart(2, '0');
  $('progress-bar').style.width = `${((current + 1) / questions.length) * 100}%`;
  $('score-value').textContent = score;
  $('type-tag').innerHTML = bilingual(item.type, typeKorean[item.type]);
  $('question-text').innerHTML = bilingual(item.q, item.ko[0]);
  const hintRu = current % 10 === 0 ? rounds[r].cheer : item.activity ? 'Попробуй выполнить задание, а потом выбери ответ!' : 'Выбери один ответ. Ошибаться можно — мы учимся играя!';
  const hintKo = current % 10 === 0 ? '걱정하지 마세요. 탈락은 없어요! 모든 답은 새로운 발견이에요.' : item.activity ? '활동을 해 본 다음, 답을 골라 보세요!' : '답 하나를 골라 보세요. 틀려도 괜찮아요. 놀이하며 배워요!';
  $('question-hint').innerHTML = bilingual(hintRu, hintKo);
  $('visual-emoji').textContent = item.emoji;
  // The image must be a clue only; showing its caption would reveal the answer.
  $('visual-subject').textContent = '';
  const visual = $('visual-card');
  visual.classList.toggle('photo-look', !!item.photo);
  const options = $('answer-options');
  options.innerHTML = '';
  options.className = item.activity ? 'answer-options activity-options' : 'answer-options';
  item.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${bilingual(option, item.ko[1][index])}</span>`;
    button.addEventListener('click', () => chooseAnswer(index));
    options.appendChild(button);
  });
  $('feedback').classList.add('hidden');
  $('next-btn').classList.add('hidden');
  answered = false;
}

function chooseAnswer(choice) {
  if (answered) return;
  answered = true;
  const item = gameQuestions[current];
  const buttons = [...document.querySelectorAll('.answer-btn')];
  buttons.forEach(button => button.disabled = true);
  const correct = choice === item.answer;
  if (correct) { score++; buttons[choice].classList.add('selected-correct'); }
  else { buttons[choice].classList.add('selected-wrong'); buttons[item.answer].classList.add('reveal-correct'); }
  $('score-value').textContent = score;
  $('feedback-icon').textContent = correct ? '✦' : '♥';
  $('feedback-title').innerHTML = bilingual(correct ? 'Отлично!' : 'Хорошая попытка!', correct ? '아주 잘했어요!' : '좋은 시도예요!');
  $('feedback-text').innerHTML = bilingual(item.exp, item.ko[2]);
  $('feedback').classList.remove('hidden');
  $('next-btn').innerHTML = current === questions.length - 1 ? bilingual('Увидеть результат ✦', '결과 보기 ✦') : current % 10 === 9 ? bilingual('Следующий раунд →', '다음 라운드 →') : bilingual('Дальше →', '다음 →');
  $('next-btn').classList.remove('hidden');
}

function startGame() { current = 0; score = 0; gameQuestions = shuffledRounds(); welcome.classList.add('hidden'); result.classList.add('hidden'); quiz.classList.remove('hidden'); renderQuestion(); window.scrollTo({top:0, behavior:'smooth'}); }
function nextQuestion() { if (current === questions.length - 1) { quiz.classList.add('hidden'); result.classList.remove('hidden'); $('final-score').textContent = score; window.scrollTo({top:0, behavior:'smooth'}); return; } current++; renderQuestion(); }
$('start-btn').addEventListener('click', startGame);
$('restart-btn').addEventListener('click', startGame);
$('next-btn').addEventListener('click', nextQuestion);
$('home-btn').addEventListener('click', () => { quiz.classList.add('hidden'); result.classList.add('hidden'); welcome.classList.remove('hidden'); window.scrollTo({top:0, behavior:'smooth'}); });
