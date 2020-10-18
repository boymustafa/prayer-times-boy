import {action, configure, observable} from 'mobx';

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
}


export default new LocationStore()
