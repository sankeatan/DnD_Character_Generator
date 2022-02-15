const classOptions = $('#class_option');
const raceOptions = $('#race_option');
const backgroundOptions = $('#background_option');
const abilityScoreOptions = $('#abs_option');
const languageOptions = $('#lang_option');
const proficiencyOptions = $('#prof_option');
const featureOptions = $('#feat_option');
const inventoryOptions = $('#inventory_option');

const choices = $('#choice_options');

const raceDisplay = $('#race_title');
const classDisplay = $('#class_title');
const profileImg = $('profile_img');

var newCharacter = {
    name: '',
    race: '',
    class: '',
    background: '',
    ab_score: '',
    lvl: 1,
    languages: '',
    proficiences: '',
    feats: '',
    inventory: '',
    gender: 'female',
};

var view = '';


function show(value) {
    document.querySelector(".text-box").value = value;
}

let dropdown = document.querySelector(".dropdown")
dropdown.onclick = function () {
    dropdown.classList.toggle("active")
    console.log()
}

function classDropDown() {
    choices.empty()
    view = "class";
    console.log(view);
    const classArray = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    for (var i = 0; i < classArray.length; i++) {
        const imageUrl = `./images/${classArray[i]}Icon.png`;
        var optionDiv = $('<div>').addClass('option-Div')
        var optionImg = $('<img>').addClass('option-Img').attr("src", imageUrl)
        var option = $('<button>').val(classArray[i]).text(classArray[i]).addClass('option-Btn');
        optionImg.appendTo(option);
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }
}

function raceDropDown() {
    choices.empty();
    view = "race";
    console.log(view);
    const raceArray = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
    for (var i = 0; i < raceArray.length; i++) {
        const imageUrl = `./images/${raceArray[i]}Icon.png`;
        var optionDiv = $('<div>').addClass('option-Div')
        var optionImg = $('<img>').addClass('option-Img').attr("src", imageUrl)
        var option = $('<button>').val(raceArray[i].toLowerCase()).text(raceArray[i]).addClass('option-Btn');
        optionImg.appendTo(optionDiv);
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }
}

<<<<<<< HEAD
function inputChoice() {
    console.log('click');
=======
function backgroundDropDown(){
    choices.empty();
    view = "background";
    console.log(view);
    const backgroundArray = ['Acolyte', 'Urchin'];
    for (var i = 0; i < backgroundArray.length; i++){
        var optionDiv = $('<div>').addClass('option-Div')
        var option = $('<button>').val(backgroundArray[i].toLowerCase()).text(backgroundArray[i]).addClass('option-Btn');
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }
    selection = choices.find(".option-Btn").on('click', inputChoice);
}

function abilityScoreDropDown(){
    choices.empty();
    
}

async function languageDropDown(){
    choices.empty();
    if (newCharacter.background == ''){
        var optionDiv = $('<div>').addClass('option-Div').text('Choose a background to select languages!')
        optionDiv.appendTo(choices);
    } else {
    view = "language";
    const response = await fetch(`/api/background/`, {
        method: 'GET',
      });
    const backgroundArray = ['Acolyte', 'Urchin'];
    for (var i = 0; i < backgroundArray.length; i++){
        var optionDiv = $('<div>').addClass('option-Div')
        var option = $('<button>').val(backgroundArray[i]).text(backgroundArray[i]).addClass('option-Btn');
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }}
    selection = choices.find(".option-Btn").on('click', inputChoice);
}

function proficiencyDropDown(){

}

function featureDropDown(){

}

function inventoryDropDown(){

}

function inputChoice(){
>>>>>>> e8a7f22ad9818e2645cbf88aebb56d4905b1dca0
    switch (view) {
        case "class":
            console.log($(this).val())
            newCharacter.class = $(this).val();
            raceDisplay.text(newCharacter.class);
            break;
<<<<<<< HEAD
        case "view":
            console.log($(this).val())
            newCharacter.race = $(this).val();
            classDisplay.text(newCharacter.race);
=======
        case "race": 
        console.log($(this).val())
        newCharacter.race = $(this).val();
        profileUrl = `./images/${newCharacter.race}${newCharacter.gender}Icon`
        profileImg.attr('src', profileUrl)
        classDisplay.text(newCharacter.race);
>>>>>>> e8a7f22ad9818e2645cbf88aebb56d4905b1dca0
            break;
    }
}

const statArray = [15, 14, 13, 12, 10, 8];

raceDropDown();


classOptions.on('click', classDropDown);
raceOptions.on('click', raceDropDown);

choices.find(".option-Btn").on('click', inputChoice);




