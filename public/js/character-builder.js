const classOptions = $('#class_option');
const raceOptions = $('#race_option');

const choices = $('#choice_options');


function show(value) {
    document.querySelector(".text-box").value = value;
  }
  
  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
      console.log()
  }

function classDropDown(){
    choices.empty()
    const classArray = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    for (var i = 0; i<classArray.length; i++){
        const imageUrl = `./images/${classArray[i]}Icon.png`;
        var optionDiv = $('<div>').addClass('option-Div')
        var optionImg = $('<img>').addClass('option-Img').attr("src", imageUrl)
        var option = $('<button>').val(classArray[i]).text(classArray[i]).addClass('option-Btn');
        optionImg.appendTo(optionDiv);
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }
}

function raceDropDown(){
    choices.empty();
    const raceArray = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
    for (var i = 0; i<raceArray.length; i++){
        const imageUrl = `public/images/${raceArray[i]}Icon.png`;
        var optionDiv = $('<div>').addClass('option-Div')
        var optionImg = $('<img>').addClass('option-Img').attr("href", imageUrl)
        var option = $('<button>').val(raceArray[i]).text(raceArray[i]).addClass('option-Btn');
        optionImg.appendTo(optionDiv);
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }
}

const statArray = [15, 14, 13, 12, 10, 8];

classDropDown();

classOptions.on('click', classDropDown);
raceOptions.on('click', raceDropDown);




