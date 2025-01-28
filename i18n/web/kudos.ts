export default {
    kudos: {
        description: {
            main: "Lets you recognize a teammate's work and make it public in a specific channel.", // eslint-disable-line
            main_hangouts:
                "Lets you recognize a teammate's work and make it public in a specific space.", // eslint-disable-line
            links: "{learnMore} {'|'} {getIdeas}", // eslint-disable-line
            learn_more: '📖 Learn more',
            get_ideas: '⚡ View in-chat commands',
            title_video: 'How to give Kudos?',
        },
        general: {
            title: 'Kudos',
            leaderboard: 'Leaderboard',
            tp_total_plus_kudos: 'Plus {totalPlusKudos} kudos++',
            tp_total_plus_kudos_zero: '{totalPlusKudos} kudos++',
            alternative_titles: {
                received: "Kudos I've received", // eslint-disable-line
                given: "Kudos I've given to my teammates", // eslint-disable-line
                team_values: 'Team values',
            },
            menu: {
                home: 'Home',
                activity: 'My Activity',
                title_small_activity: 'Activity',
                company_values: 'Team Values',
                title_small_company_values: 'Values',
                given: 'Given',
                received: 'Received',
                settings: 'Kudos Settings',
            },
            modal_limit_template: {
                title: 'Give kudos without limits',
                description:
                    'Your current plan lets you give kudos up to {kudosUsageLimits} times per month. Upgrade your plan to unlock these limits and open up new possibilities for peer recognition.',
                call_to_action: 'Upgrade Plan',
            },
        },
        buttons: {
            send_kudo: 'Give kudos',
            finish: 'Finish',
        },
        home: {
            hi: 'Hi',
            congrats: 'congrats!',
            welcome: 'welcome!',
            description:
                "Your team is showing you support and you're making great impact.", // eslint-disable-line
            all_my_kudos: 'View all kudos and messages',
            lb_in_chat: 'View in-chat commands',
            modal_chat: {
                title: 'Try Kudos in your chat',
                sub_title:
                    "Use the following commands to interact with the chatbot in DMs or in channels mentioning {'@'}DailyBot.", // eslint-disable-line
                body_modal:
                    "<ul><li>Type <span class='code'>kudos to {'@'}user1 {'@'}user2 {'{'} message {'}'}</span> to give kudos, the message is optional.</li><li><span class='code'>kudos leaderboard</span> to see your organization's kudos leaderboard.</li><li><span class='code'>kudos me</span> to get a summary of your kudos history.</li></ul>Example: <span class='code'>kudos to {'@'}teammate1 {'@'}teammate2</span> for the great presentation today!<br><br>", // eslint-disable-line
                learn_more: 'Learn more about Kudos.',
            },
            leaderboard: {
                title: 'Leaderboard',
                order_description: {
                    kudos_received: 'Top receivers',
                    kudos_given: 'Top givers',
                },
                description_empty:
                    "You'll see here the top positions and their total kudos. Idea: create rewards or games with your team around this leaderboard.", // eslint-disable-line
                permissions:
                    'The leaderboard is not visible right now. It can be enabled by administrators and it shows ranking based on given or received kudos.',
                header_1: 'Position',
                header_2: 'Total',
                header_3: 'Teammate',
                leaderboard_filter_time: {
                    beginning_of_time: 'All time',
                    last_week: 'Last 7 days',
                    last_four_weeks: 'Last 30 days',
                    custom_date: 'Custom period',
                },
                pl_filter_by_period: 'Select a period',
                pl_filter_by_team: 'Select a team',
                leaderboard_filter_teams: {
                    all_teams: 'All teams',
                    teams_user_belongs_to: 'Teams user belongs to',
                },
                export: {
                    title: 'Export leaderboard as {format}',
                    lb_filter_by: 'Filter by',
                    lb_export_to: 'Export as',
                    btn_export: 'Export',
                    lb_include_messages: 'Include kudos messages',
                    success_message: 'Your data has been successfully exported',
                    error_message:
                        "An error has occurred while exporting. Try again. If the problem persists, please contact support{'@'}dailybot.com", // eslint-disable-line
                },
                total_score: '👏 {totalScore} Total',
            },
            stats: {
                titles: {
                    kudos_received: 'kudos',
                    kudos_given: 'kudos',
                    more: 'more',
                    empty: 'You can go up',
                    position_up_1: 'position up',
                    position_up_n: 'positions up',
                    user: '{user} (you)',
                },
                descriptions: {
                    kudos_received: 'received from<br> teammates',
                    kudos_given: 'given to teammates',
                    comparison: 'from past weeks',
                    comparison_empty: 'from past weeks',
                    percentage: 'than last month',
                    percentage_empty: 'than last month',
                    impact: "you're making impact", // eslint-disable-line
                    kudos_received_subtitle: 'with {numberKudos} kudos received',
                    kudos_given_subtitle: 'with {numberKudos} kudos given',
                    kudos_received_no_summary:
                        'Your name will appear here if you are member of this team and have received Kudos',
                    kudos_given_no_summary:
                        'Your name will appear here if you are member of this team and have given Kudos',
                },
            },
            comments: {
                title: 'How great! Check out these kudos given to you…',
                'title-empty-case': 'There are no Kudos to see yet',
                empty_case_subtitle:
                    'Don’t worry! With your contributions, they will come in no time',
                has_one_kudos: 'Congratulations! You got your first Kudos',
                has_one_kudos_subtitle: 'Check out this nice comment',
                has_more_than_one_kudos: 'Wow! Look at all your Kudos',
                has_more_than_one_kudos_subtitle:
                    'Check out all the nice things your team has to say',
                description_empty:
                    'Kudos that you receive will appear here. <br>Get started by giving kudos, you’ll surely get kudos back!',
                empty_kudo_message: 'Kudos to you',
                kudos_received: 'By {author} · {date}',
                kudos_given: 'You gave kudos to {author} · {date}',
                info_activity_sended: 'Given to {reciver} · {date}',
                info_activity_empty_sended: 'Given to someone · {date}',
            },
            chart_key_impact: {
                title: 'Your key impact',
                description: {
                    '1': '{company_values_total} team value impacted by you, {url}',
                    n: '{company_values_total} team values impacted by you, {url}',
                },
                descriptionUrlText: 'see the team values.',
            },
        },
        activity: {
            title_won_kudos: "{time}, you've got kudos and {count} messages", // eslint-disable-line
            anonymous_comment: 'By an anonymous user · {date}',
            anonymous_comment_empty: 'By an anonymous user · {date}',
            anonymous_comment_sended: 'You gave kudos anonymously · {date}',
            anonymous_comment_empty_sended: 'You gave kudos anonymously · {date}',
            empty_kudos_list_kudos_received:
                "You haven't received kudos from your team yet", // eslint-disable-line
            empty_kudos_list_kudos_given:
                "You haven't given any kudos to your teammates yet", // eslint-disable-line
            select_option: {
                kudos_given: "Kudos I've given to my teammates", // eslint-disable-line
                kudos_received: 'Kudos given to me',
            },
            encourage: {
                title: 'Kudos are encouraging, right?',
                text: 'You are doing great {user}!',
                secondary_text:
                    'Take some time, praise and make someone happy by giving some kudos.',
            },
            key_times: {
                current_month: 'This month',
                last_month: 'Last month',
                last_two_month: 'Last two months',
            },
        },
        settings: {
            new_title: 'Kudos Settings',
            title: 'Settings',
            description: 'Manage organization and personal settings',
            learn_about_kudos: 'Learn about Kudos',
            organization: {
                title: 'Organization settings',
                leaderboard_all_kudos:
                    'Combine kudos and kudos++ in leaderboard totals',
                hint_all_kudos:
                    'If this setting is on, the totals will always show kudos and kudos++ added up. If it is off, it will show the kudos++ as separate information.',
                team_values_required: 'Require "team value" choice to give kudos',
                team_values_required_hint:
                    'When activated, everyone must select a ‘Team Value’ before they can give kudos to someone.',
                team_values_required_tooltip: 'Upgrade your plan to swith on',
                team_values_required_tooltip_empty:
                    'Should create team values to turn ON',
                reminders: {
                    title: 'Team weekly reminders',
                    reminder: 'Remind the team to reflect and give kudos to my teammates',
                    report: 'Send an encouraging weekly report to the team',
                },
                privacy: {
                    title: 'Anonymous kudos',
                    description: 'Allow anonymous kudos and messages',
                },
                filters: {
                    title: 'Leaderboard visibility',
                    public_across_the_company: 'Public across the company',
                    filtered_by_team_membership: 'Restricted by team membership',
                    only_org_admins_and_managers:
                        'Restricted to organization admins and managers',
                },
                kudos_allowed_per_day: {
                    title: 'Daily kudos allowed per user',
                    tip: 'This sets the daily maximum number of kudos that each user can give.',
                    options: {
                        UNLIMITED: 'Unlimited',
                        FIVE: '5',
                        TEN: '10',
                        FIFTEEN: '15',
                    },
                },
                ordering: {
                    title: 'Leaderboard type',
                    kudos_received: 'Based on received kudos',
                    kudos_given: 'Based on given kudos',
                },
                channelPost: {
                    title: 'Use a chat channel to post all new kudos',
                    title_hangouts: 'Use a space to post all new kudos',
                    search: 'Search for a channel',
                    emptySelection: "-Don't post to a channel-", // eslint-disable-line
                },
            },
            user: {
                title: 'My Preferences',
                reports: {
                    title: 'Reports about kudos activity',
                    email_title: 'Email notifications',
                    bot_title: 'Bot notifications',
                    weekly_email: 'Weekly email report with recent kudos given to me',
                    weekly_bot: 'Weekly private message with recent kudos given to me',
                    team_email: 'Weekly email reminder to give kudos to my teammates',
                    team_bot:
                        'Weekly private message reminder to give kudos to my teammates',
                    bot_one_by_one_dm_report:
                        'Get a private message when someone gives kudos to me',
                },
            },
        },
        details: {
            title: {
                otherPeople: '{users} got kudos! 👏',
                youSingular: 'Wow, you got kudos! 👏',
                youPlural1: 'Wow, you and 1 teammate got kudos! 👏',
                youPluraln: 'Wow, you and {teammates} teammates got kudos! 👏',
                otherPeople1: '{users} and 1 more teammate got kudos! 👏',
                otherPeoplen: '{users} and {teammates} more teammates got kudos! 👏',
            },
            kudosComment: 'Given by {userName}',
            kudosChildrenTitle: {
                '1': '🎉 And {counter} teammate joined with kudos ++',
                n: '🎉 And {counter} teammates joined with kudos ++',
            },
        },
        send: {
            limits: {
                title: "Looks like you've reached your daily kudos limit", // eslint-disable-line
                subtitle: "You'll be able to give {amount} more tomorrow.", // eslint-disable-line
            },
            success: {
                title: {
                    '1': 'Nice! {name} is very lucky',
                    n: 'Nice! Your teammates are very lucky',
                },
                message_1: 'Thanks for appreciating your team.',
                message_2:
                    'Kudos are a great way to show support and encourage the team.',
                send_another: 'Give more kudos',
            },
            form: {
                title: 'Give kudos',
                subtitle: 'Make someone happy',
                lb_teammate: 'Kudos to',
                pl_teammate: 'Choose teammate(s) ',
                pl_message_none:
                    'Send a nice note to make it more meaningful (optional)',
                pl_message: 'Send a nice note to {teammateName} (optional)',
                lb_message: 'Ex. Thanks for being an awesome teammate!',
                lb_channel: 'Would you like to post it on a chat channel? (optional)',
                lb_channel_hangouts: 'Would you like to post it on a space? (optional)',
                pl_channel: 'Search for a channel',
                select_channel_void_option: '-No, only notify privately-',
                lb_anonymous: 'Give my kudos anonymously',
                btn_submit: 'Send',
                allow_channel_option: "-Don't post to a channel-", // eslint-disable-line
                channel_define: 'Kudos are automatically posted to ',
                channel_default_description:
                    'Configuration assigned by the organization admin',
                company_value: {
                    label: 'Which team value is being highlighted? (optional)',
                    label_required: 'Which team value is being highlighted?',
                    hint: 'Highlight your teammate’s impact',
                    placeholder: 'Select a team value',
                },
                errors: {
                    kudos_rate_limit_reached:
                        'Hey! Please wait 5 minutes to give more Kudos',
                },
            },
        },
        wizard: {
            lets_celebrate: 'Let’s celebrate wins!',
            spread_positivity: 'Spread positivity',
            create_rewards: 'Create rewards and have fun!',
        },
        company_values: {
            dashboard: {
                title: 'Team values',
                company_value_item_actions: {
                    give_kudos: 'Give kudos around this value',
                    edit: 'Edit',
                    remove: 'Remove',
                },
                graphics: {
                    title: 'Analytics',
                    radar: {
                        title: 'Only org administrators can see this.',
                        all_time_label: 'All the time',
                        last_30_days_label: 'Last 30 days',
                    },
                    line: {
                        title: 'Appreciation and recognition over time.',
                    },
                    line_company_detail: {
                        label: 'Weekly kudos',
                    },
                },
                empty_case: {
                    title:
                        'A chart will appear once you have at least 3 team values configured.<br>Only org administrators can see this.',
                },
            },
            stats: {
                detail_company_value: {
                    members_recognized_one: 'team members',
                    members_recognized_two: 'have been recognized',
                    kudos_given_one: 'kudos given',
                    kudos_given_two: 'around this value',
                    title_stat: 'Recognition over time',
                },
            },
            system_default_list: {
                title: 'Add team values',
                subtitle: 'Select one or more from this list or create your own',
                buttons: {
                    skip: 'Skip and create my own',
                    add_selected: 'Continue',
                },
            },
            empty_case: {
                title: 'Add your team values',
                title_premium: 'Add your team values',
                subtitle_premium:
                    'This feature requires a paid <strong>Advanced</strong> plan.',
                description:
                    'Having a clear set of values helps your team understand what you stand for. Your team values, or company values, give guidance for work and a sense of security. As a result, employees are more likely to make the right decisions.',
                description_premium:
                    'Having a clear set of values helps your team understand what you stand for. Your team values, or company values, give guidance for work and a sense of security. As a result, employees are more likely to make the right decisions. This feature requires a paid Advanced plan.',
                button_text: 'Get started',
                button_text_premium: 'Upgrade now',
                text_member:
                    'The initial configuration only can be done by Organization Admin or Team Manager.',
                system_default_list_empty:
                    "There aren't team values defined right now.", // eslint-disable-line
            },
            forms: {
                create: {
                    title: 'Add a team value',
                    subtitle:
                        'This team value will be seen by your team and can be chosen when giving kudos',
                    success: {
                        title: 'What a great step!',
                        message_1:
                            'Your team can now refer to this value when giving kudos:',
                        message_1_plural:
                            'Your team can now refer to these values when giving kudos:',
                        button: 'Finish',
                        link: 'Add another one',
                    },
                },
                update: {
                    title: 'Edit a team value',
                    subtitle: 'The changes will affect kudos related to this team value',
                    success: 'The team value was updated',
                },
                delete: {
                    title: 'Please confirm',
                    message:
                        'The team value will be fully archived and this is irreversible',
                    text: 'Delete this team value',
                    toast_message: 'The team value was deleted',
                },
                fields: {
                    company_value: {
                        label: 'Team value',
                        placeholder: 'Type...',
                        hint: 'Use a short and direct name',
                    },
                    emoji: {
                        label: 'Emoji',
                        placeholder: ':)',
                    },
                    description: {
                        label: 'Short description',
                        placeholder:
                            'Add a simple description to help your team understand how to contribute to this value...',
                    },
                },
                link_suggested: 'Skip, see recommendations',
                buttons: {
                    create: 'Save and continue',
                    update: 'Save',
                },
                errors: {
                    company_value_should_be_unique:
                        'This team value already exists, try creating another one',
                },
            },
            companyValueItem: {
                addNewItem: 'Add a team value',
            },
            modal_limit_template: {
                title: 'Create unlimited team values',
                description:
                    'Your current plan supports up to 3 team values. Upgrade your plan to unlock these limits and open up new possibilities for team recognition.',
                call_to_action: 'Upgrade Plan',
            },
        },
    },
}