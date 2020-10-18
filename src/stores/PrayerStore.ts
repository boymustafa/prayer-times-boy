import {action, computed, configure, observable} from 'mobx';

configure({
    enforceActions: 'observed'
});

class PrayerStore{
    @observable prayerTimes = {};

    @action setPrayerTimes(prayerTimes: {}) {
        this.prayerTimes = prayerTimes;
    }


    @computed
    get prayerTimesOnly(){
        const times = Object.entries(this.prayerTimes).map(([key, value]) => ({key,value}));
        return times.filter(function (m){
                return !['imsak', 'midnight', 'sunrise', 'sunset'].includes(m.key)
            }
        )
    }

    @computed
    get sortedPrayerTimesOnly(){
        return this.prayerTimesOnly
            .sort((a,b)=>b[1]-a[1],{})
    }

    @computed
    get currentPrayer(){
        const currentHour = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
        return this.sortedPrayerTimesOnly.filter(function (m){
                return m.value <= currentHour
            }
        ).slice(-1)[0];


    }
}

export default new PrayerStore()
