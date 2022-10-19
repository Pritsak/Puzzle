$(document).ready(function() {
   $('.new').click(function() {
        location.reload();
   })
   $('.number-box').sortable({
    connectWith: '#start, #end',
    containment: '.puzzle-container'
})

let puzzleImg = [];
let check = true;
$('#check').on('click', function() {
    for(let i = 0; i < $('.puzzle-image').length; i++) {
        if($('.puzzle-image').eq(i).attr('name') != puzzleImg[i].name) {
            check = false;
            break
        }
    }
    if(check) {
        $('.alert').text('You win').css({display: 'block'})
        $('.try').on('click', function() {
            $('.alert').text('Close').css({display: 'none'})
        })
    } else $('.alert').css({display: 'block'})
           $('.alert-title').text('You lose')
           $('.try').on('click', function() {
                $('.alert').css({display: 'none'})
            })
            
    check = true;
})

let puzzleContainer = $('#start')
let height = 25
for (let i = 0; i < 4; i++) { 
    let width = 25
    for (let k = 0; k < 4; k++) {
        puzzleImg.push({
            name: `puzzle-${i}-${k}`,
            element: `<div name="puzzle-${i}-${k}" class="puzzle-image" style="background-position: left ${width}% top ${height}%"></div>`
        }) 
        width += 25
        if (k == 3) {
            height += 25;
            width = 25;
        }
    }
}

shuffle([...puzzleImg]).map((e) => {
    puzzleContainer.append(e.element)
}) 


$('.start').click(function() {
    let sec = $('.seconds');
    let secVal = parseInt(sec.text());
    let timer = setTimeout(function tick() {
    if (secVal > 0) {
        sec.text(--secVal);
        timer = setTimeout(tick, 1000);
    }
    }, 1000);
})

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
}
})