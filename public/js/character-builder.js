const classOptions = $('#class_option');
const raceOptions = $('#race_option');

const choices = $('#choice_options');

const raceDisplay = $('#race_title');
const classDisplay = $('#class_title');

var newCharacter = {
    name: '',
    race: '',
    class: '',
    ab_score: '',
    lvl: 1,
    languages: '',
    proficiences: '',
    feats: '',
    inventory: '',
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
        var optionImg = $('<img>').addClass('option-Img').attr("href", imageUrl)
        var option = $('<button>').val(raceArray[i]).text(raceArray[i]).addClass('option-Btn');
        optionImg.appendTo(optionDiv);
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }
}

function inputChoice() {
    console.log('click');
    switch (view) {
        case "class":
            console.log($(this).val())
            newCharacter.class = $(this).val();
            raceDisplay.text(newCharacter.class);
            break;
        case "view":
            console.log($(this).val())
            newCharacter.race = $(this).val();
            classDisplay.text(newCharacter.race);
            break;
    }
}

const statArray = [15, 14, 13, 12, 10, 8];

raceDropDown();


classOptions.on('click', classDropDown);
raceOptions.on('click', raceDropDown);

choices.find(".option-Btn").on('click', inputChoice);




