function Calendar(dom, data) {
    this.weeks = ['日', '一', '二', '三', '四', '五', '六'];
    this.currentMonth = new Date().getMonth();
    this.currentDay = new Date().getDate();
    this.currentDate = new Date(data[0].year, data[0].month - 1)
    this.dom = dom
    this.currentSelectYearAndMonth = this.currentDate.getFullYear() + '-' + this.currentDate.getMonth() + '-01'
    this.year = this.currentDate.getFullYear()
    this.month = this.currentDate.getMonth()
    this.signDays = data[0].signDays
    this.data = data
    this.initDate()

}
Calendar.prototype.daysInMonth = function(month, year) {
    return new Date(year, parseInt(month) + 1, 0).getDate();
}


Calendar.prototype.initDate = function() {
    let year = this.year,
        month = this.month,
        signDays = this.signDays
    // 每个月的第一天
    let firstDay = new Date(year, month, 1);
    let dayInMonth = this.daysInMonth(month, year);
    // 每个月的最后一天
    let lastDay = new Date(year, month, dayInMonth);

    let weekday = firstDay.getDay(); // 星期几 0-6
    let lastDayWeekDay = lastDay.getDay(); // 当月的最后一天星期几 0-6
    let date = 1; // 第一天，计数用
    var dayStr = ''
    var weekHTML = '<ul class="dateWeek">'
    for (let w = 0; w < this.weeks.length; w++) {
        weekHTML += '<li class=' + ((w == 0 || w == 6) ? "red" : "") + '>' + this.weeks[w] + '</li>';
    }
    weekHTML += '</ul>'
    console.log(dayInMonth)

    // 补齐前面的空格
    for (let i = 0; i < weekday; i++) {
        dayStr += '<li></li>';
    }

    for (; date <= dayInMonth; date++) {
        var className = ''
        for (var i = 0; i < signDays.length; i++) {
            var day = signDays[i].split('-')
            if (day[0] == year && day[1] == parseInt(month) + 1 && day[2] == date) {
                className = 'in'
            }
        }
        if (month == this.currentMonth && date == this.currentDay) {

            dayStr += '<li class="active" ' + className + '>' + date + '</li>';
        } else {
            dayStr += '<li class=' + className + '>' + date + '</li>';
        }

        weekday++

        if (weekday % 7 == 0) {
            weekday = 0;
            //dayStr += '<br/>';
        }
    }

    // 补齐后面的空格
    for (let j = 0; j < (7 - lastDayWeekDay - 1); j++) {
        dayStr += '<li></li>';
    }

    //dayStr += '</ul>';
    var dateHTML = '<ul class="dateNumber">'
    dateHTML += dayStr
    dateHTML += '</ul>'
    this.dom.innerHTML = weekHTML + dateHTML
}
Calendar.prototype.preMonth = function() {
    this._getPreMonth(this.year + '-' + this.month + '-01')
    this.initDate()
}
Calendar.prototype.nextMonth = function() {
    this._getNextMonth(this.year + '-' + this.month + '-01')
    this.initDate()
}
Calendar.prototype.getCurrentDate = function() {
    var date = new Date(this.year, this.month, 1)
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1
    }
}

/**
 * 获取上一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
Calendar.prototype._getPreMonth = function(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + day2;
    this.year = year2
    this.month = month2
    for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].year == year2 && parseInt(this.data[i].month)-1 == parseInt(month2)) {
            this.signDays = this.data[i].signDays
        }
    }
}

/**
 * 获取下一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
Calendar.prototype._getNextMonth = function(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }

    var t2 = year2 + '-' + month2 + '-' + day2;
    this.year = year2
    this.month = month2
    for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].year == year2 && parseInt(this.data[i].month)-1 == parseInt(month2)) {
            this.signDays = this.data[i].signDays
        }
    }
}