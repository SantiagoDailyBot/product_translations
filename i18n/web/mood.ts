export default {
    mood: {
        general: {
            title: 'Mood',
        },
        home: {
            filter_by: {
                everyone: 'Everyone',
                only_me: 'My responses',
            },
            motivation: {
                title_without_score: 'Team mood',
                title_with_score: 'Team mood {score}',
                title_with_score_short: 'Team mood {score}. {link}',
                title_with_score_shorter: '{score}',
                title_with_score_short_view_more: 'View more',
                description:
                    'Based on responses of <b>{basedMembers}</b> {groupOfUsers} participants. <span class="view-more-chart">View more.</span>',
                description_anonymous:
                    'Based on anonymous responses of <b>{basedMembers}</b> {groupOfUsers} participants. <span class="view-more-chart">View more.</span>',
                see_mood_link: 'See mood stats',
                see_more: 'Ver más',
                empty_case_description: {
                    more_3_users:
                        'You’ll see an anonymous summary here. It appears when 3 or more people have responded to a question about motivation.',
                    less_3_users:
                        'The motivational chart is only activated for {groupOfUsers} with 3 or more people.',
                    dont_have_enough_data: {
                        message:
                            'Average <b>{motivation}</b> based on <b>{responses}</b> responses on <b>{date}</b>.',
                        tooltip:
                            "Your team's motivational chart will show up here when you have more data. {link}", // eslint-disable-line
                    },
                    group_of_users: {
                        team: 'team',
                        teams: 'teams',
                        organization: 'organization',
                        check_in: 'check-in',
                        check_ins: 'check-ins',
                    },
                },
                rating: {
                    excellent: 'is excellent',
                    very_good: 'is very good',
                    good: 'is good',
                    bad: 'is bad',
                    very_bad: 'is very bad',
                },
                graphic: {
                    title: 'Average',
                    title_tooltip: 'Average of {average} based on {members} responses',
                },
                modal: {
                    title: 'Team motivation metrics',
                    subtitle: {
                        message_by_team: 'Your team’s mood during {period}:',
                        message_by_only_me: 'Your mood during {period}:',
                        period_last_months: 'the last month | the last {months} months',
                        period_last_year: 'the last year',
                    },
                    period_selector: {
                        last_months: 'Last month | Last {months} months',
                        last_year: 'Last year',
                    },
                    up_to: 'Up',
                    down_to: 'Down',
                    average: {
                        all_time: '{average} all time average',
                        period: '{avgPeriod} average for the period selected',
                    },
                    not_enough_data:
                        'After a few more entries, you will see the team’s mood over time.',
                },
            },
        },
        settings: {
            title: 'Mood Settings',
            motivation_chart: {
                title: 'Motivation chart',
                lb_select_a_trigger_day: 'When should it be triggered?',
            },
        },
    },
}