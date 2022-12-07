var x = setInterval(function() {
    lst = document.querySelectorAll('.dtime');
    for (var i=0; i < lst.length; i++) {
        fin = newDate(lst[i])
        if (fin[4] == "will") {
            lst[i].innerHTML = `Начало через ${fin[0]}д ${fin[1]}ч ${fin[2]}м ${fin[3]}с`
            lst[i].parentNode.parentNode.parentNode.parentNode.classList.add('future')
        }
        else if (fin[4] == "started") {
            lst[i].innerHTML = `Конец через ${fin[0]}д ${fin[1]}ч ${fin[2]}м ${fin[3]}с`
            lst[i].parentNode.parentNode.parentNode.parentNode.classList.add('now')
        } else {
            lst[i].innerHTML = `Закончилось ${fin[0]}д ${fin[1]}ч ${fin[2]}м ${fin[3]}с назад`
            lst[i].parentNode.parentNode.parentNode.parentNode.classList.add('past')
        }
    }
}, 1000);

var newDate = function (element) {
    var start = new Date(element.dataset.dtime_start).getTime();
    var end = new Date(element.dataset.dtime_end).getTime();
    var now = new Date().getTime();
    if (start - now > 0) {
        var distance = start - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return [days, hours, minutes, seconds, "will"]
    } else if (end - now > 0) {
        var distance = end - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return [days, hours, minutes, seconds, "started"]
    } else {
        var distance = now - end;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return [days, hours, minutes, seconds, "ended"]
    }
};

newDate(document.querySelector('.dtime'));