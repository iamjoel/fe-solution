import moment from 'moment';

const t = (str: string) => str; // 国际化

export const formatFromNow = (date: number | string | Date): string => {
    const time = moment(date);

    const JUST_NOW = t('刚刚'),
        SEC_FORMAT = t('秒前'),
        MIN_FORMAT = t('分钟前'),
        HOUR_FORMAT = t('小时前'),
        DAY_FORMAT = t('天前'),
        YEAR_FORMAT = 'MM-DD',
        ALL_FORMAT = 'YYYY-MM-DD';

    const now = moment(),
        duration = (now as any) - (time as any);
    let str = '';

    if (time.isAfter(now)) {
        // 如果时间比系统时间还要新，则显示完全时间
        str = time.format(ALL_FORMAT);
    } else {
        if (
            moment()
                .year()
                .toString() === time.format('YYYY')
        ) {
            if (duration < 1000) {
                str = JUST_NOW;
            } else if (duration < 60000) {
                str = moment.duration(duration).seconds() + SEC_FORMAT;
            } else if (duration < 3600000) {
                str = moment.duration(duration).minutes() + MIN_FORMAT;
            } else if (duration < 3600000 * 24) {
                str = moment.duration(duration).hours() + HOUR_FORMAT;
            } else if (duration < 3600000 * 24 * 3) {
                str = moment.duration(duration).days() + DAY_FORMAT;
            } else {
                str = time.format(YEAR_FORMAT);
            }
        } else {
            str = time.format(ALL_FORMAT);
        }
    }

    return str;
};
