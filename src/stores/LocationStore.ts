import {action, computed, configure, observable} from 'mobx';

configure({
    enforceActions: 'observed'
});
class LocationStore{
    @observable location = '';
    @observable prayerTimes = {};

    @action setLocation(location: string) {
        this.location = location;
    }

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
}

export default new LocationStore()
