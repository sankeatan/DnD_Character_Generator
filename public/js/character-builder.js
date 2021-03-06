const classOptions = $('#class_option');
const raceOptions = $('#race_option');
const backgroundOptions = $('#background_option');
const abilityScoreOptions = $('#abs_option');
//const languageOptions = $('#lang_option');
//const proficiencyOptions = $('#prof_option');
//const featureOptions = $('#feat_option');
//const inventoryOptions = $('#inventory_option');
const maleButton = $('#male');
const femaleButton = $('#female');
const saveCharacter = $('#save_build');
const characterSheet = $('#character_sheet');
const characterNameInput = $('#name-input');


const choices = $('#choice_options');

const raceDisplay = $('#race_title');
const classDisplay = $('.class_title');
const profileImg = $('#profile_img');
const sideImg = $('#side_image');
const sideText = $('#sidebar_text');

const
    newCharacter = {
        name: '',
        race: 'Dragonborn',
        class: '',
        background: '',
        ab_score: '',
        lvl: 1,
        languages: '',
        proficiences: '',
        feats: '',
        inventory: '',
        gender: 'Female',
        picture: '',
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
    selection = choices.find(".option-Btn").on('click', inputChoice);
}

function raceDropDown() {
    choices.empty();
    view = "race";
    console.log(view);
    const raceArray = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-elf', 'Halfling', 'Half-orc', 'Human', 'Tiefling'];
    for (var i = 0; i < raceArray.length; i++) {
        var raceName = raceArray[i].replace('-', '');
        var optionDiv = $('<div>').addClass('option-Div')
        var option = $('<button>').val(raceName).text(raceArray[i]).addClass('option-Btn');
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }
    selection = choices.find(".option-Btn").on('click', inputChoice);
}

function backgroundDropDown() {
    choices.empty();
    view = "background";
    console.log(view);
    const backgroundArray = ['Acolyte', 'Urchin'];
    for (var i = 0; i < backgroundArray.length; i++) {
        var optionDiv = $('<div>').addClass('option-Div')
        var option = $('<button>').val(backgroundArray[i]).text(backgroundArray[i]).addClass('option-Btn');
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }
    selection = choices.find(".option-Btn").on('click', inputChoice);
}

function abilityScoreDropDown() {
    view = "abilities";
    choices.empty();
    var strDiv = $('<div>').addClass('option-Div str-div').attr('name', 'str').text('Strength: ');
    var strInput = $('<input>').attr('for', 'str').addClass('abs_input str');
    strInput.appendTo(strDiv);
    strDiv.appendTo(choices);
    var dexDiv = $('<div>').addClass('option-Div dex-div').attr('name', 'dex').text('Dexterity: ');
    var dexInput = $('<input>').attr('for', 'dex').addClass('abs_input dex');
    dexInput.appendTo(dexDiv);
    dexDiv.appendTo(choices);
    var conDiv = $('<div>').addClass('option-Div con-div').attr('name', 'con').text('Constitution: ');
    var conInput = $('<input>').attr('for', 'con').addClass('abs_input con');
    conInput.appendTo(conDiv);
    conDiv.appendTo(choices);
    var wisDiv = $('<div>').addClass('option-Div wis-div').attr('name', 'wis').text('Wisdom: ');
    var wisInput = $('<input>').attr('for', 'wis').addClass('abs_input wis');
    wisInput.appendTo(wisDiv);
    wisDiv.appendTo(choices);
    var intDiv = $('<div>').addClass('option-Div int-div').attr('name', 'int').text('Intelligence: ');
    var intInput = $('<input>').attr('for', 'int').addClass('abs_input int');
    intInput.appendTo(intDiv);
    intDiv.appendTo(choices);
    var chaDiv = $('<div>').addClass('option-Div cha-div').attr('name', 'cha').text('Charisma: ');
    var chaInput = $('<input>').attr('for', 'cha').addClass('abs_input cha');
    chaInput.appendTo(chaDiv);
    chaDiv.appendTo(choices);
    var btnDiv = $('<div>').addClass('submitAbility')
    var subBtn = $('<button>Update Stats</button>').addClass('stupidBtn');
    subBtn.appendTo(btnDiv);
    btnDiv.appendTo(choices);

    const stupid = $('.stupidBtn');
    stupid.on("click", inputAbility);
}


function inputAbility() {
    newCharacter.ab_score = `${str},${dex},${con},${int},${wis},${cha}`;
    var str = $('.str').val();
    var dex = $('.dex').val();
    var con = $('.con').val();
    var int = $('.int').val();
    var wis = $('.wis').val();
    var cha = $('.cha').val();

    $(".strength").text(`STR: ${str}`)
    $(".dexterity").text(`DEX: ${dex}`)
    $(".constitution").text(`CON: ${con}`)
    $(".intelligence").text(`INT: ${int}`)
    $(".wisdom").text(`WIS: ${wis}`)
    $(".charisma").text(`CHA: ${cha}`)
}

/*async function languageDropDown() {
    choices.empty();
    if (newCharacter.background == '') {
        var optionDiv = $('<div>').addClass('option-Div').text('Choose a background to select languages!')
        optionDiv.appendTo(choices);
    } else {
        view = "language";
        const response = await fetch(`/api/background/${(newCharacter.background).toLowerCase()}`, {
            method: 'GET',
        });
        console.log(response);
        selection = choices.find(".option-Btn").on('click', inputChoice);
    }
}*/

async function inputChoice() {
    switch (view) {
        case "class":
            console.log($(this).val())
            newCharacter.class = $(this).val();
            classDisplay.text(newCharacter.class);
            var classImgURL = `/images/${newCharacter.class}ClassIcon.png`
            newCharacter.picture = classImgURL;
            sideImg.attr('src', classImgURL)
            const response = await fetch(`/api/classes/${newCharacter.class}`, {
                method: 'GET',
            }).catch(function (error) {
                // handle error
                console.log(error);
              }) .then(function (response){
                  console.log("data", response.data);
                return response.json()
                
              }).then(function(data) {
                console.log(data);
                sideText.text(data.description);
              })
              

            break;
        case "race":
            console.log($(this).val())
            newCharacter.race = $(this).val();
            profileUrl = `/images/${newCharacter.race}${newCharacter.gender}Icon.png`
            profileImg.attr('src', profileUrl)
            raceDisplay.text($(this).text());
            break;
        case "background":
            console.log($(this).val())
            newCharacter.background = $(this).val();
            break;
        case "language":
            console.log($(this).val())
            newCharacter.languages += ` ${$(this).val()}`;
            break;
    }
}

function changeGender() {
    newCharacter.gender = $(this).val();
    var profileUrl = `/images/${newCharacter.race}${newCharacter.gender}Icon.png`;
    profileImg.attr('src', profileUrl)
}

function saveName() {
    newCharacter.name = $(this).val();
    console.log(newCharacter.name);
}


async function characterSave(){
        newCharacter.name = characterNameInput.val();

        const response = await fetch('/api/character/', {
          method: 'POST',
          body: JSON.stringify(newCharacter),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          console.log(response.statusText);
        } else {
          alert(response.statusText);
        }
      }

function displayUserCharacters(){

}

raceDropDown();


classOptions.on('click', classDropDown);
raceOptions.on('click', raceDropDown);
backgroundOptions.on('click', backgroundDropDown);
abilityScoreOptions.on('click', abilityScoreDropDown);
maleButton.on('click', changeGender);
femaleButton.on('click', changeGender);
characterNameInput.on('focusout', saveName);
saveCharacter.on('click', characterSave);
characterSheet.on('click', displayUserCharacters);




