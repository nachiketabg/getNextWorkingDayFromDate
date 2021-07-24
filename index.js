exports.getNextWorkingDayFromDate = (fromDate, noDays, holidays) => {
    const moment = require('moment')
    const checkIfWeekEnd = (date) => {
        const day = moment(date).format('ddd');
        if (day == "Sun" || day == "Sat") {
            return true
        }
        return false
    }
    let howManyDays = 0;
    if (noDays < 0) {
        let currentDate = moment(fromDate).subtract(1, 'days')
        while (noDays != 0) {
            if (checkIfWeekEnd(currentDate)) {
                howManyDays += 1
                currentDate = moment(currentDate).subtract(1, 'days')
            }
            if (holidays) {
                if (holidays.includes(moment(currentDate).format('YYYY-MM-DD'))) {
                    howManyDays += 1
                    currentDate = moment(currentDate).subtract(1, 'days')
                    continue
                }
            }
            currentDate = moment(currentDate).subtract(1, 'days')
            howManyDays += 1
            noDays += 1
        }
        return moment(fromDate).subtract(howManyDays, 'days')
    } else if (noDays > 0) {
        let currentDate = moment(fromDate).add(1, 'days')
        while (noDays != 0) {
            if (checkIfWeekEnd(currentDate)) {
                howManyDays += 1
                currentDate = moment(currentDate).add(1, 'days')
                continue
            }
            if (holidays) {
                if (holidays.includes(moment(currentDate).format('YYYY-MM-DD'))) {
                    howManyDays += 1
                    currentDate = moment(currentDate).add(1, 'days')
                    continue
                }
            }
            currentDate = moment(currentDate).add(1, 'days')
            howManyDays += 1
            noDays -= 1
        }
        return moment(fromDate).add(howManyDays, 'days')
    }
}


