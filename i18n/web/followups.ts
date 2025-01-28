export default {
    followups: {
        description: {
            main: 'Check-ins are automated questions that you can set for your team on a regular basis.', // eslint-disable-line
            links: "{learnMore} {'|'} {getIdeas}", // eslint-disable-line
            learn_more: '📖 Learn more',
            get_ideas: '⚡ View in-chat commands',
            title_video: 'How to create a Check-in?',
        },
        search_table: {
            search_by: {
                all: 'All check-ins',
                active: 'Active check-ins',
                running: 'Running today',
                pending: 'My pending reports',
                recent: 'Recent blockers',
                inactive: 'Inactive check-ins',
            },
            order_by: {
                alphabetical: 'Alphabetical',
                recent: 'Recent activity',
                next: 'Next execution',
            },
        },
        onboarding: {
            title: 'Create your first stand-up meeting',
            subtitle: 'You can create more kinds of check-ins later',
            title_finish: 'This is great!',
            subtitle_finish: 'Your first stand-up is ready',
            description_finish: {
                message:
                    'DailyBot will contact your team via chat so you all fill out the standup reports. Now you can {0}, {1} and {2}.',
                manage_teams: 'manage your teams',
                invite_members: 'invite members',
                create_more_followups: 'create more check-ins',
            },
            lb_name: 'Name your check-in',
            pl_name: 'Example: Team Standups',
            lb_select_channel: 'Channel for sharing reports',
            pl_channel: 'Search for a channel',
            lb_empty_message: "Can't find the channel?", // eslint-disable-line
            empty_case_not_found_channel:
                "No channels matching this search. <br> If your channel doesn't show up, please add <strong>{'@'}DailyBot</strong> to the channel first.", // eslint-disable-line
            empty_case_channels_hangouts:
                "It wasn't possible to find any Space <br> where <strong>{'@'}DailyBot</strong> is a member. <br> Please add the bot to a Space and reload this page.", // eslint-disable-line
            tp_slack:
                "If you're configuring a private channel,<br> please add <strong>{'@'}DailyBot</strong> to the private channel first. <a href='{urlSupport}' target='_blank'>Learn more</a>", // eslint-disable-line
            tp_hangouts: `Please make sure to include <strong>{'@'}DailyBot</strong> as a member of the Space in <a href='{urlHangouts}' target='_blank'>Google Chat</a>.
                        If you're facing issues, try removing/adding the bot back to the Space. <strong>Update this user list or this web page</strong> to see the Space in the dropdown.`,
            lb_hour: 'Time limit for reports',
            lb_toggle_hour:
                'Define a time limit for responses and then send an aggregated report to the channel',
            lb_toggle_hour_hangouts:
                'Define a time limit for responses and then send an aggregated report to the space',
            tp_hour:
                "This check-in is triggered via API or workflows and doesn't have a time limit. If you're running this check-in via workflows, consider using the action 'Post a consolidated report' to activate this instead.", // eslint-disable-line
            small_message_custom_report_time:
                'The organization´s time zone is <strong>{timezone}.</strong>',
            lb_default_settings: 'default settings',
            lb_questions: 'Questions to ask:',
            text_questions: '{count} question) | {count} questions',
            tp_questions_by_default: {
                question_1: 'What did you complete yesterday?',
                question_2: 'What are you planning to work today?',
                question_3: 'Do you have any blockers?',
            },
            lb_frequency: 'Frequency',
            text_weekly_on_weekdays: 'Weekly on weekdays',
            lb_team: 'Team:',
            text_team: '({count} member) | ({count} members)',
            setting_before:
                'Each team member will get a daily reminder to fill in the report, based on their time zone and work start time. You can modify the frequency and questions later.',
            learn_more: ' Learn more',
            btn_save_followup: 'Save',
            lk_skip_step: 'Skip this step',
            btn_finish_followup: 'Finish',
        },
        main_layout: {
            followup_select: {
                title: 'Check-in',
                title_mobile: 'Select a Check-in',
                inactive: 'Inactive',
            },
            response_from_web: {
                popover_today_date:
                    'This check-in does not allow filling out reports before {time}',
                popover_today_date_with_custom_timezone:
                    'This check-in does not allow filling out reports before {time} on time zone {timezone}',
                popover_previous_dates:
                    'Filling out reports for previous dates is disabled for this check-in',
                popover_future_dates:
                    'Filling out reports for future dates is disabled for this check-in',
                popover_limit_responses_reached:
                    "You've reached the monthly limit of {limit} check-in responses.", // eslint-disable-line
                popover_limit_responses_history_reached:
                    'You need upgrade your plan to unblock responses history limits.',
                btn_create: 'Fill out Report',
                btn_edit: 'Edit Responses',
                btn_delete: 'Delete Report',
            },
        },
        general: {
            followups: 'Check-ins',
            export_responses: 'Export Responses',
            view_more: 'View more',
            dropdown_mobile_title: 'Settings View',
            help: {
                p_1: 'DailyBot will help your team with check-ins (like daily stand-up meetings) to make sure everyone is on the right track.',
                p_2: "You'll be able to see what's everyone working on, identify blockers and understand their motivation index.", // eslint-disable-line
                link: 'Learn why stand-up meetings are powerful',
                description:
                    'Run agile workflows, automate team updates, retrospectives or any kind of periodic check-in like 1:1 meetings or internal feedback.',
            },
            actions_only_admin:
                'These settings are only available for administrators',
            en: 'English',
            es: 'Español',
            pt: 'Português',
            frequencies: {
                scheduled_task: {
                    title: 'Cron expression',
                    description: 'Type a valid cronjob expression. {learnMore}',
                    learn_more: 'Learn more',
                },
                start_on: 'Starting on',
                hint_start_on_monthly: 'Repeat every {day} of the month.',
                hint_start_on_yearly: 'Repeat every {day}',
                hint_start_on: 'Starts running on {date}',
                basic: 'Basic',
                advanced: 'Advanced',
                monthly: 'Monthly',
                custom: 'Custom',
                label_advanced_selector: 'Frequency',
                every_daily: 'Daily',
                every_week: 'Weekly',
                every_two_weeks: 'Bi-weekly',
                every_three_weeks: 'Every 3 weeks',
                every_four_weeks: 'Monthly',
                every_five_weeks: 'Every 5 weeks',
                every_eight_weeks: 'Every 8 weeks',
                every_twelve_weeks: 'Quarterly',
                every_twenty_four_weeks: 'Semi-annually',
                every_fifty_two_weeks: 'Annually',
                hint_aprox_every: 'Approx every {number} weeks',
                premium_tag: '(Requires upgrade)',
                popover_hint:
                    'Some choices requires upgrade, available from the Essentials plan', // eslint-disable-line
            },
            trigger_time_types: {
                at_each_member_work_start_time: "At participant's work start time", // eslint-disable-line
                at_custom_time: 'At a given time',
                at_random_time_after_member_work_start_time:
                    "Randomly, after participant's work start time ", // eslint-disable-line
                at_random_time_after_custom_time: 'Randomly, after a given time ',
            },
            followup_privacy_setting_options: {
                only_owner: 'Only the owner',
                managers_and_admins: 'Admins, managers and team admins',
                owner_and_members: 'Participants and owner',
                managers_and_members: 'Admins, managers and participants',
                org_admins: 'Organization administrators',
                everyone: 'Everyone',
            },
            // TODO: This copy v2 will be deleted when release the creation and edition check-ins flow
            followup_privacy_setting_options_v2: {
                only_owner: 'Owner / editors',
                managers_and_admins:
                    'Owner / editors / org admins / managers / team admins',
                owner_and_members: 'Owner / editors / participants',
                managers_and_members:
                    'Owner / editors / participants / org admins / managers',
                org_admins: 'Owner / editors / org admins',
                everyone: 'Everyone in the organization',
                premium_tag: '(Requires upgrade)',
            },
            followup_edit_setting_options: {
                only_owner: 'Owner / editors',
                admins_managers_and_team_admins:
                    'Owner / editors / org admins / managers / team admins',
            },
            template_category_navigator: {
                title_all: 'All',
                title_custom: 'My Custom Templates',
                empty_case_category: 'There are no templates in this category.',
                lk_create_checkin: 'Customize questions',
                empty_case_custom_templates: {
                    base: 'You don’t have any custom template yet. {link}',
                    link: 'Create One.',
                },
            },
            top_actions: {
                edit_followup: 'Configure Check-in',
                small_title_edit_followup: 'Configure',
                export_responses: 'Export',
                create_response: 'Fill out Report',
                small_title_create_response: 'Fill out Report',
                edit_response: 'Edit Responses',
                small_title_edit_response: 'Edit Responses',
                delete_response: 'Delete Report',
                create_template: 'Create Template',
                create_button: 'Create Template',
                automations: 'Automations ({count})',
            },
            more_actions: {
                create_followup: 'Create Check-in',
                go_to_settings: 'Global Settings',
            },
            participants: {
                teams: '{count} team | {count} teams',
                members: '{count} member | {count} members',
                connector: 'and',
            },
        },
        empty_case_projects: {
            message_admin: 'Please create your first Check-in to get started.',
            message_member: `
          <p>Hey, welcome!</p>
          <p>An org administrator should add you to a Team and Check-in so you can fill out your stand-ups or reports.</p>
          <p>You can see the email of your administrator(s) from your own profile page, in case you want to contact them.</p>
          <p>For now, try giving Kudos to your team or wait until you can fill out reports.</p>
        `,
            create_followup: 'Create a Check-in',
        },
        members_pending_response: {
            subtitle:
                '{count} member pending to respond | {count} members pending to respond ',
            pl_search: 'Search',
            empty_case_search: 'No members matching this search.',
            count_members: '{count} members',
            reminder: 'Send reminder',
            reminder_loading: 'Sending reminder...',
            reminder_all: 'Send reminder to all',
            reminder_all_loading: 'Sending reminder to all...',
            success_reminder: 'Reminder sent',
            errors: {
                params_validation_error: 'One or more params are invalid.',
                one_or_more_users_uuids_are_invalid: 'One or more users are invalid.',
                one_or_more_users_already_complete_the_response:
                    'One or more users already completed the check-in.',
                one_or_more_users_cannot_be_contacted_by_chat:
                    'One or more users cannot be contacted by chat.',
            },
        },
        dashboard: {
            nav_title: 'Home',
            you_dont_have_permission:
                'The visibility for this check-in is restricted, you may not be able to see all the data.',
            not_exist_reports_read_permission:
                "No reports on this day. Try a different date or wait for your team's responses.", // eslint-disable-line
            pl_search_input: 'Search for a Check-in',
            lb_in_chat: 'View in-chat commands',
            modal_chat: {
                title: 'Try Check-ins in your chat',
                sub_title:
                    "Use the following commands to interact with the chatbot in DMs or in channels mentioning {'@'}DailyBot.", // eslint-disable-line
                body_modal:
                    "<ul><li>Type <span class='code'>checkin</span> in a direct message to start to fill out your check-in or stand-up report on demand.</li><li><span class='code'>checkin status</span> to get the status of your check-ins.</li><li><span class='code'>checkin for YYYY-MM-DD</span> to fill out a check-in report on a specific date (past or future).</li><li><span class='code'>checkin edit</span> in a direct message to edit your check-in responses.</li><li><span class='code'>checkin reset</span> to remove your report from a check-in.</li><li><span class='code'>report</span> or <span class='code'>report {'@'}user</span> to see a full daily report, or someone else's report.</li></ul>", // eslint-disable-line
                learn_more: 'Learn more about Check-ins.',
            },
            new_home: {
                inactive_main_title: 'Check-ins',
                description:
                    'Showing {totalCheckins} active check-in. | Showing {totalCheckins} active check-ins.',
                inactive_link: 'See inactives ({totalCheckinsInactives})',
                inactive_button: 'Inactive check-ins',
                active_button: 'Active check-ins',
                inactive_description:
                    'Showing {totalCheckinInactives} inactive check-in. | Showing {totalCheckinInactives} inactives check-ins.',
                only_actives_link: 'See only active ones ({totalCheckinsActives})',
                create_checkin_btn: 'Create Check-in',
                main_dropdown: {
                    custom_templates: 'Manage question templates',
                    global_settings: 'Manage feature settings',
                    help: 'Learn more about check-ins',
                },
            },
            not_exist_reports_write_permission: {
                base: 'No reports on this day.',
                link: 'Submit your report',
            },
            see_full_report: 'See full report',
            dailies_amount: {
                base: '{responders} {br} of {expected}',
                responders:
                    '<strong>{responders}</strong> response out | <strong>{responders}</strong> responses out ',
                expected: '<strong>{expected}</strong> expected',
            },
            problems_amount: {
                base: '{blockers} or {br} {points}',
                blockers:
                    '<strong>{blockers}</strong> blocker | <strong>{blockers}</strong> blockers',
                points: 'attention point | attention points ',
            },
            pending_responses_amount: {
                base: '{pending} {text}',
                text: '<strong>{count}</strong> pending response | <strong>{count}</strong> pending responses',
            },
            pending_responses_send_reminders: 'Send reminders',
            view_all_members: 'View all',
            kudos: {
                improve_motivation: {
                    message: '{link} to your team',
                    link: 'Give kudos',
                },
                keep_motivation: 'Nice!{br} Great team mood',
            },
            backslap: {
                all_users_filled: 'All users filled out {br} the reports',
                non_blockers: 'No blockers or {br} attention points',
            },
            motivational_chart_void: {
                description:
                    "You'll see an anonymous chart. It appears when 3 or more people have responded to a question about motivation.", // eslint-disable-line
            },
            motivational_chart: {
                title: 'Team motivation metrics',
                description:
                    'Motivational progress of your team during the past weeks.',
                title_tooltip: 'Based on {members} responses',
                very_bad: 'Very bad 😞 ',
                bad: 'Bad 🤨 ',
                good: 'Good 🙂 ',
                nice: 'Very good 😃 ',
                very_nice: 'Excellent 🤩 ',
            },
            checkin_card: {
                description_date: {
                    last_activity: 'Last activity {lastResponse} -',
                    expecting_activity: 'Expecting responses {lastResponse}. ',
                },
                teammates_blocked:
                    '{question_translated_text} (blockers or attention points reported)',
                summary_responses: '{question_translated_text} (last responses)',
                link_view_own_responses: 'Edit responses',
                lb_tag_new: 'New',
                link_view_responses: 'View all responses',
                link_configure_checkin: 'Configure',
                link_activity: 'View activity log',
                link_reactivate_checkin: 'Activate Check-in',
                link_fill_out: 'Fill out report',
                link_see_more_blockers: 'See full report',
                only_see_myown_responses: 'You can only see your own responses.',
                alert_finish_setup: {
                    message: 'Only you as participant. Do you want to add more members?',
                    lb_discard: 'Discard',
                    lb_review: 'Add',
                },
                tags: {
                    today: 'Running today',
                    tomorrow: 'Running tomorrow',
                    other: 'Scheduled for {date}',
                    inactive: 'Inactive',
                    unscheduled: 'Unscheduled',
                },
                deactivate_automatic_trigger:
                    'This check-in was configured to run only via API or Workflows',
                activity_followup_card: {
                    view_activity_log: 'View activity log',
                    add_participants: 'Add participants',
                    add_channel: 'Add channel',
                    participants: '{amount} participant | {amount} participants',
                    no_channel: 'no channel',
                    reporting: '#{channel}',
                    amount: '+{amount}',
                    team_participation: 'Completion rate',
                    response_on_time: 'Responses on time',
                    responses_tooltip:
                        'Responses received before <strong>{hour}</strong>',
                    team_mood: 'Team mood',
                    team_mood_hint:
                        'This chart is only activated for check-ins with 3 or more people',
                    team_mood_hide: 'Hide Team mood for this check-in',
                    team_mood_show: 'Show Team mood for this check-in',
                    responses:
                        'No responses | {success}/{expected} responses | {success}/{expected} responses',
                },
                more_options: {
                    settings: 'Configure',
                    duplicate: 'Duplicate',
                    checkin_detail: 'Check-in details',
                    contextual_workflows: 'Contextual workflows',
                    export_data: 'Export data',
                    delete: 'Delete',
                    deactivated: 'Deactivate',
                    copy_id: 'Copy ID',
                    copy_id_message: 'Check-in ID was copied to clipboard',
                    activate: 'Activate Check-in',
                    copy_link_to_respond: 'Share link',
                    copy_link_message: 'Copied to clipboard',
                    see_aggregated_report: 'See aggregated report',
                    run_followup: 'Run check-in',
                },
                modal_duplicate: {
                    title: 'Duplicate Check-in ',
                    duplicate_btn: 'Duplicate',
                    cancel_btn: 'Cancel',
                },
                motivation: {
                    title_without_score: 'Team mood',
                    title_with_score: 'Team mood {score}',
                    description:
                        'Based on responses of <b>{basedMembers}</b> check-in participants.',
                    description_anonymous:
                        'Based on anonymous responses of <b>{basedMembers}</b> check-in participants.',
                    see_mood_link: 'See mood stats',
                    empty_case_description: {
                        more_3_users:
                            'You’ll see an anonymous summary here. It appears when 3 or more people have responded to a question about motivation.',
                        less_3_users:
                            'The motivational chart is only activated for check-ins with 3 or more people.',
                        more_3_users_short: '· Unlock with 3 or more mood responses',
                        dont_have_enough_data: {
                            message:
                                'Average <b>{motivation}</b> based on <b>{responses}</b> responses on <b>{date}</b>.',
                            tooltip:
                                "Your team's motivational chart will show up here when you have more data. {link}", // eslint-disable-line
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
                            message: 'Motivational progress of your team during {period}:',
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
                metrics: {
                    percent_done: 'Done',
                    responses_counter:
                        'of {totalResponses} response | of {totalResponses} responses',
                    blocker:
                        'blocker or attention point reported | blockers or attention points reported',
                    check_last_responses: 'Check last responses to "{question}":',
                    hint_blocker:
                        '{tip} I can notify you of these blockers automatically 🔥 {learn}',
                    lb_tip: 'Tip:',
                    lb_learn: 'Learn how!',
                },
                empty_cases: {
                    checkin_title: 'No reports on this day.',
                    title_admin: 'Please create your first Check-in to get started.',
                    title_admin_only_inactive:
                        'No active check-ins. Ready to start a new one?',
                    title_member:
                        'No check-in in sight! Once admins create check-ins you’ll be able to see them.',
                    description_member: {
                        '1': 'An org administrator should add you to a Team and Check-in so you can fill out your stand-ups or reports.',
                        '2': {
                            common:
                                'You can see the email of your administrator(s) from settings members page, in case you want to contact them.',
                            guest:
                                'You can contact them at any of these emails: {orgAdminsMembers}',
                        },
                        '3': 'For now, try giving Kudos to your team or wait until you can fill out reports.',
                    },
                },
            },
            aggregated_report: {
                title:
                    '{count} aggregated report available | {count} aggregated reports available',
                based_on:
                    'Based on {template} template | Based on {template} templates',
                info: 'An aggregated report consolidates check-ins created using the same question template.',
                modal: {
                    title: 'See aggregated reports for multiple check-ins',
                    subtitle: 'Based on check-ins with the same question template',
                    lb_template_selector: 'Parent question template',
                    btn_submit: 'See report',
                    lb_followup_selector: 'Select the check-ins for your report',
                    pl_followup_selector: 'Type the Check-in Name',
                },
                daily_aggregated: {
                    title: 'Report based on {name}',
                    subtitle: 'Aggregating {amount} check-ins - {link}',
                    change: 'Change',
                },
            },
        },
        edit_create_followup: {
            pl_checkin_name: 'Enter the name',
            advanced_options: 'Additional settings',
            privacy_settings: 'Privacy Settings',
        },
        edit_followup: {
            title: 'Edit Check-in',
            lb_question_for_team: 'Questions to ask',
            tp_question_for_team: 'Time to ask',
            lb_toggle_use_user_defined_work_days:
                "Consider each user's workdays and avoid check-ins if they don't work that day", // eslint-disable-line
            btn_save_changes: 'Save changes',
            success_message: 'Check-in updated',
            message_denied_access_to_edit:
                'You no longer have permissions to edit this check-in.',
            view_questions_template: 'View Questions',
            btn_edit_question: 'Edit questions',
            btn_upgrade_now_to_edit_questions: 'Upgrade Now',
            lb_upgrade_plan_to_edit: 'Upgrade your plan to edit questions',
            lb_allow_different_dates: 'Allow submitting reports on any dates',
            lb_toggle_allow_different_dates:
                'Allow users to submit reports for past or future dates, such as last week’s report.',
            lb_allow_reports_on_previous_dates: 'Allow reports on past dates',
            lb_toggle_allow_reports_on_previous_dates:
                "Enable to allow users to post responses for a previous date, e.g. submitting now their previous weeks' report", // eslint-disable-line
            lb_allow_reports_on_future_dates: 'Allow reports on future dates',
            lb_toggle_allow_reports_on_future_dates:
                "Enable to allow users to post responses for a future date, e.g. submitting now their next weeks' report", // eslint-disable-line
            lb_allow_reports_before_trigger_time:
                'Allow responses before the start reminder time',
            lb_toggle_allow_reports_before_trigger_time:
                'Enable to allow participants to post responses before the reminder time has been reached.',
            lb_is_trigger_based: 'Run check-in only via API or Workflows',
            lb_toggle_is_trigger_based:
                'Check-in will only be initiated upon request through the API or Workflows that have been configured. {link}',
            lb_toggle_is_trigger_based_link: 'Learn more',
            override_template_fields: 'Overwrite Intro/Outro message in the template',
            lb_custom_template_intro: 'Intro message',
            pl_custom_template_intro: 'Type a intro message (optional)',
            lb_custom_template_outro: 'Outro or thank you message',
            pl_custom_template_outro: 'Type an outro or thank-you message (optional)',
            questions: {
                title: 'Questions',
            },
            drawer_threads: {
                title: 'Real time reporting',
                description:
                    'You can choose how to post your reports in <strong>{platform}</strong>. See examples below:',
                individual: 'Individual reports',
                grouped: 'All responses grouped in a thread',
                channel: 'In a channel',
                thread: 'In a thread channel',
            },
            basic_info: {
                title: 'Frequency',
                on_days: 'On which days?',
                reminder_start_time: {
                    label: 'Start time',
                    placeholder: 'Start time choices',
                    requires_upgrade_basic:
                        'Some choices requires upgrade, available from the Essentials plan',
                },
                danger_zone: {
                    title: 'Danger zone',
                    deactivate_section: {
                        label: 'Deactivate this check-in',
                        description:
                            'Deactivation will prevent the bot from asking the check-in members. You will not lose report data.',
                        button: 'Deactivate',
                    },
                    reactivate_section: {
                        label: 'Reactivate this check-in',
                        description:
                            'Reactivation will resume the bot’s automatic questions among check-in members.',
                        button: 'Reactivate',
                    },
                    delete_section: {
                        title: 'Delete this check-in',
                        description:
                            'Deleting the check-in will not be able to recover the data, it is irreversible!',
                        button: 'Delete',
                    },
                },
            },
            participants: {
                title: 'Participants',
                add_participants: {
                    title: 'Add or remove participants',
                },
                list_participants: {
                    lb_timezone: '{timezone} - {difference}',
                    lb_init_work: 'Starts work at {time}',
                    title: 'Control additional settings for participants',
                    how_many_participants: {
                        base: 'This check-in is currently {counter}',
                        counter: 'targeting {count} member. | targeting {count} members.',
                    },
                    automatic_question_info:
                        'If you turn off automatic questions, member can still fill out reports optionally, but won’t get bot notifications.',
                    pl_filter_table_members: 'Filter current participants...',
                    table_headers: {
                        name: 'Participant',
                        source: 'Source',
                        automatic_questions: 'Automatic questions?',
                        individual_source: 'Individual',
                        empty_case: 'No results for this search.',
                        owner_role: 'Owner',
                        editor_role: 'Editor',
                        actions: {
                            assign_as_owner: 'Transfer ownership',
                            give_view_only_permissions: 'Make read-only participant',
                            remove_view_only_permissions: 'Allow responses from participant',
                            give_editor_permission: 'Give editor permissions',
                            remove_editor_permission: 'Remove editor permissions',
                        },
                        modal_confirm_transfer_owner: {
                            title: 'Transfer ownership',
                            message:
                                'Do you want to transfer your ownership of this check-in to {newOwnerName}?',
                            btn_confirm: 'Yes, transfer',
                            link_cancel: 'No, keep me as owner',
                        },
                    },
                    message_about_owners: 'Check-in Owner: {ownerName}',
                    message_about_team: {
                        base: 'If you want to add/remove users from specific teams, go to the {teamsManageLink} page.',
                        teams_manage_link: 'Teams Management',
                    },
                },
            },
            sharing: {
                title: 'Sharing',
                lb_activity_tracking: 'Activity tracking',
                description_activity_tracking:
                    'Include a summary of each participant’s activity in external tools', // eslint-disable-line
            },
            cancel_modal: {
                title: 'Are you sure?',
                message: 'Your changes won’t be saved.',
                btn_confirm: 'Yes, take me out',
                link_goback: 'No, continue editing',
            },
        },
        create_followup: {
            title: 'Create new check-in',
            using: 'Using the',
            template: 'template',
            all_templates: 'All templates',
            system_default: 'Dailybot templates',
            organization_templates: 'Organization templates',
            continue: 'Continue',
            continue_last_step: 'Change template and continue',
            finish_followup: 'Save changes',
            cancel: 'Cancel',
            empty_case_search: 'You have no template results for this search.',
            link_empty_case: 'Reset filters',
            error_open_followup:
                'This template might not exist or is no longer available. Please select another template',
            not_allowed_use_custom_template:
                'Upgrade your plan for using your custom question templates',
            choose_questions: {
                title: 'Create Check-in',
                subtitle: 'Start by selecting the questions',
                subtitle_customize_questions: 'Customize questions',
            },
            steps: {
                step_1: 'Questions',
                step_2: 'Participants / Frequency',
                step_3: 'Reporting',
            },
            modal_add_spaces: {
                title: 'Add spaces to your check-in',
                step_1:
                    'To add DailyBot to a space: <br> <br> 1. Open the space.<br> 2. Type <strong>@DailyBot</strong> in your message.<br> 3. Select "DailyBot" from the <strong>Apps</strong> list.<br> 4. Click <strong>Add to Space.</strong>', // eslint-disable-line
                step_2:
                    'If you encounter issues doing this:<br>Type <strong>@DailyBot addchannel</strong> instead.', // eslint-disable-line
                step_3:
                    'Once successful, you’ll receive a greeting message from DailyBot. Repeat this process for each channel where you want to receive reports.',
                step_4: 'Still having trouble? 🤔 <br> Contact support for assistance.',
                view: 'Create a ticket',
            },
            cancel_modal: {
                title: 'Are you sure?',
                message:
                    'Your progress won’t be saved and you haven’t completed the creation.',
                btn_confirm: 'Yes, take me out',
                link_goback: 'No, continue editing',
            },
            default_input: 'Search by template name or keyword',
            set_it_up: {
                title: "Let's set it up", // eslint-disable-line
                lb_who_is: 'Who is filling out the reports?',
                pl_who_is: 'Enter names of people or teams...',
                ht_who_is: 'The bot will ask both members and teams',
                ht_name:
                    '(Ex. New iPhone App, 360° Meetings, Design Team Building,...)',
            },
            how_often: {
                title: 'How often?',
            },
            success_flow: {
                title: 'Well Done!',
                message:
                    'Your Check-in {followupName} is ready.{br}DailyBot will start getting responses on {nextDate}.',
                next_date: '{nameDay}, {month} {day}, {year}',
                btn_finish: 'Go to Daily Report',
                lnk_create_another: 'Create another check-in',
            },
            reports_setting: {
                condition_to_send_aggregated_report: {
                    label: 'Under which condition?',
                    options: {
                        always: 'Always, even if no responses are collected',
                        there_is_at_least_one_report_completed:
                            'Only when there is at least one response',
                        there_is_at_least_one_report_pending:
                            'Only when someone is pending to respond',
                    },
                },
                thread_responses_in_aggregated_report: {
                    label: 'Include reports in this summary',
                    options: {
                        always: 'Yes, all reports',
                        responses_with_blockers:
                            'Only reports with blockers or attention points',
                        // eslint-disable-next-line prettier/prettier, quotes
                        never: "Don't include reports",
                    },
                },
                notify_late: 'Share late reports in the channel(s)',
            },
            reports_privacy: {
                hlp_sharing_reports:
                    'All chat channel participants will see the reports posted there.',
                requires_upgrade_basic:
                    'Requires upgrade, available from the Essentials plan',
                requires_upgrade_standard_enterprise: {
                    lb_upgrade:
                        'Requires {link}, available for plans Advanced and Enterprise',
                    link: 'upgrade',
                },
                manage_integrations: 'Manage integrations',
                pl_privacy_settings: 'Choose the roles',
                ht_privacy_followup_owner: 'Check-in Owner: {ownerName}',
                ht_not_available_privacy_settings:
                    'This privacy setting is not available in your plan.',
                create: {
                    ht_everyone:
                        'Everyone can see responses, even if they are not participants on this check-in.',
                    ht_default:
                        "Assign check-in editors on “Participants” from the Reminders tab. <a href='https://help.dailybot.com/hc/en-us/articles/360058230553-Introduction-to-the-user-roles-in-DailyBot' target='_blank'>Learn about roles</a>", // eslint-disable-line
                    ht_owner_editor:
                        "The most restrictive. You can appoint editors on the “Participants” tab <strong><i>(after creating the check-in).</i></strong> <a href='https://help.dailybot.com/hc/en-us/articles/360058230553-Introduction-to-the-user-roles-in-DailyBot' target='_blank'>Learn about roles</a>", // eslint-disable-line
                },
                edit: {
                    ht_everyone:
                        '<br>Everyone can see responses, even if they are not participants on this check-in.',
                    ht_default:
                        "<br>You can appoint editors on the “Participants” tab. <a href='https://help.dailybot.com/hc/en-us/articles/360058230553-Introduction-to-the-user-roles-in-DailyBot' target='_blank'>Learn about roles</a>", // eslint-disable-line
                    ht_owner_editor:
                        "<br>The most restrictive. You can appoint editors on the “Participants” tab. <a href='https://help.dailybot.com/hc/en-us/articles/360058230553-Introduction-to-the-user-roles-in-DailyBot' target='_blank'>Learn about roles</a>", // eslint-disable-line
                },
                lb_anonymous_responses: 'Collect anonymous responses',
                lb_toggle_anonymous_responses: 'Make all the responses anonymous',
                lb_secure_deletion: 'Secure deletion',
                lb_toggle_secure_deletion:
                    'Turn ON to protect this check-in from being deleted.',
                hint_anonymous_responses: {
                    was_marked: "It was marked as anonymous and you can't change it.", // eslint-disable-line
                    warning:
                        'It will be always anonymous, you won’t be able to change this later.',
                },
                lb_activity_tracking: 'Activity tracking',
                description_activity_tracking:
                    'Include a summary of each participant’s activity in external tool', // eslint-disable-line
                lb_select_channel: 'Channels to post responses',
                pl_channel: 'Search for channels',
                lb_channel_empty_message: "Can't find the channel?", // eslint-disable-line
                lb_select_channel_hangouts: 'Select spaces to share the reports',
                pl_channel_hangouts: 'Search for spaces',
                lb_channel_empty_message_hangouts: "Can't find the space?", // eslint-disable-line
                empty_case_not_found_channel:
                    "No channels matching this search. <br> If your channel doesn't show up, please add <strong>{'@'}DailyBot</strong> to the channel first.", // eslint-disable-line
                empty_case_channels_hangouts:
                    "It wasn't possible to find any Space <br> where <strong>{'@'}DailyBot</strong> is a member. <br> Please add the bot to a Space and reload.", // eslint-disable-line
                lb_toggle_reports: 'Send reports one by one, as they get completed',
                lb_privacy_settings: 'Responses visibility in the web app',
                post_settings: {
                    lb_post_responses_in_thread:
                        'Post last responses (after time limit) in the thread',
                    lb_post_responses_only_if_pending:
                        'Send consolidated report only if there are pending responses',
                    lb_post_responses_if_no_one:
                        'Send consolidated report even no one has filled out the report',
                },
                tp_slack: {
                    text: "If you're configuring a private channel, please add {'@'}DailyBot to the private channel first. {link}", // eslint-disable-line
                    link: 'Learn more',
                    dailybot: "{'@'}Dailybot", // eslint-disable-line
                },
                tp_old_slack:
                    "If you're configuring a private channel, please add <strong>{'@'}DailyBot</strong> to the private channel first. <a href='https://help.dailybot.com/hc/en-us/articles/360056375274-I-can-t-find-my-private-channel-in-DailyBot-s-channel-lists' target='_blank'>Learn more</a>", // eslint-disable-line
                tp_old_hangouts: `Please add <strong>{'@'}DailyBot</strong> to a Space in <a href='{urlHangouts}' target='_blank'>Google Chat</a>.
                        If you're facing issues, try removing/adding the bot back in the Space. <strong>Reload the page</strong> if necessary to see the Space in the dropdown.`,
                lb_hour: 'Post a summary of all reports after a set time',
                lb_toggle_hour: 'Set a time limit for the summary',
                tp_hour:
                    "This check-in is triggered via API or workflows and doesn't have a time limit. If you're running this check-in via workflows, consider using the action 'Post a consolidated report' to activate this instead.", // eslint-disable-line
                lb_one_by_one: 'Post reports one by one as they get completed',
                small_message_custom_report_time:
                    "The organization's time zone is <strong>{timezone}</strong>.", // eslint-disable-line
                confirm_anonymous: {
                    title: '⚠ Collecting Anonymous Responses ⚠',
                    outstanding_description: 'This action will be permanent',
                    description:
                        'Once you mark this check-in as anonymous, all the responses will be turned anonymous and you cannot change this later.',
                    btn_confirm: 'Got it',
                    link_back: 'Cancel',
                },
                lb_edit_permissions_settings:
                    'Who can edit to Permissions to edit check-in',
                pl_edit_permissions_settings: 'Choose the roles',
                one_by_one_report: {
                    title: 'Post reports as they are completed',
                    subtitle: 'Choose how to share reports',
                    options: {
                        channel: 'In the selected channel(s)',
                        channel_hangouts: 'In the selected space(s)',
                        thread: 'In a dedicated thread',
                    },
                },
            },
            additional_reminders: {
                lb_title: 'Send additional reminders?',
                lb_info_toggle:
                    "Send reminders to participants who haven't completed the report.", // eslint-disable-line
                lb_reminders_max_count: 'How many reminders?',
                lb_reminders_frequency_time: 'How often?',
                lb_reminders_frequency_time_option: 'Every {minutes} min',
                lb_reminders_trigger_condition: 'Mode',
                info_reminders_trigger_condition:
                    "<strong>Smart reminders:</strong> DailyBot spreads the reminders automatically based on each user's time zone and the check-in settings.<br /><br/><strong>Custom reminders:</strong> customize how many reminders you send, and how often you want to send them.<br/><br/><strong>Tip:</strong> don't overuse reminders and avoid noise.", // eslint-disable-line
                trigger_condition_options: {
                    smart_frequency: 'Smart reminders',
                    fixed_frequency: 'Custom reminders',
                },
            },
            previous_view_template_modal: {
                continue: 'Continue',
                lk_select_another: 'Explore different templates',
            },
            errors: {
                followup_name_invalid: 'The check-in name format is invalid.',
                followup_privacy_no_available:
                    'The privacy option chosen for check-in is not available to the member user role',
                followup_rate_limit:
                    'Hey! Please wait 1 minute to create more Check-ins.',
            },
        },
        daily_report: {
            nav_title: 'Daily Report',
            nav_title_small: 'Daily',
            nav_aggregated_title: 'Aggregated Report',
            nav_aggregated_title_small: 'Aggregated',
            load_more_responses: 'Scroll down for more responses.',
            report: 'From: {report}',
            empty_case: {
                lastday: 'There are no reports about the previous day activity.',
                today: 'There are no reports about plans for Today.',
                problems: 'No blockers reported.',
            },
            drawer_response: {
                // eslint-disable-next-line quotes
                title: "{name}'s responses",
                empty_case: 'No reports for this day',
            },
            date_description: {
                created_on: 'Filled on',
                scheduled_for: 'Published on',
                shared: 'Posted ',
                edited: '(Edited)',
                at: 'at',
                last_edited: 'Last edited on',
                edit_responses_link: 'Edit responses',
            },
            respond_from_web: {
                respond_followup: 'Fill out your report',
                edit_followup_response: 'Edit your responses',
                delete_followup_response: 'Delete your responses',
                special_var_question: 'Question: {question}',
                drawer: {
                    lb_link_feedback: 'Give feedback',
                },
                respond: {
                    title: 'Fill out your report',
                    subtitle_anonymous: 'Your response is fully anonymous',
                    check_ins:
                        'This is a report for these check-ins: <strong>{checkins}</strong>',
                },
                edit: {
                    title: 'Edit this report',
                    footer: 'Last edited on {date} at {hour}',
                    toast_message: 'Report updated',
                },
                delete: {
                    btn_description: 'Delete response',
                    title: 'Please confirm',
                    message: 'Are you sure you want to permanently delete your report?',
                    toast_message: 'Report deleted',
                },
                form: {
                    text: 'Type text response',
                    numeric: 'Type numeric response',
                    select: 'Choose a response',
                    yes: 'yes',
                    no: 'no',
                    btn_respond: 'Submit responses',
                    btn_save: 'Update responses',
                    btn_back: 'Back',
                    btn_next: 'Next',
                    disclaimer_report_form: {
                        main: 'Never send passwords - {report}',
                        report: 'Report malicious form',
                    },
                },
                toast_message_error: {
                    dont_belong: "You're not a member of this check-in", // eslint-disable-line
                    followup_inactive:
                        'This check-in is inactive and cannot accept responses',
                    followup_not_found:
                        "The check-in you're opening was deleted or couldn't be found", // eslint-disable-line
                    limit_responses_reached:
                        "You've reached the monthly limit of {limit} check-in responses.", // eslint-disable-line
                    followup_without_responses: "You don't have responses for this date.", // eslint-disable-line
                    questions_has_changed:
                        'The questions for this check-in have changed, reload and enter again.',
                    previous_responses_are_not_allowed:
                        'It is not allowed to respond for previous dates in this check-in.',
                },
                success_case: {
                    title: 'Thanks for submitting your check-in report!',
                    subtitle: {
                        checkins_joined:
                            'You just completed your report for check-ins: {checkins}.',
                        fill_out_checkin_report:
                            "Let's continue filling out the <b>{followup}</b> Check-in report", // eslint-disable-line
                        fill_out_form_response:
                            "Let's continue filling out the <b>{form}</b> Form response", // eslint-disable-line
                    },
                    buttons: {
                        view_responses: 'See all responses',
                        fill_out_checkin_report: 'Fill out checkin report',
                        fill_out_form_response: 'Fill out form response',
                    },
                },
            },
        },
        summary: {
            nav_title: 'Analytics',
            nav_title_small: 'Analytics',
            lb_responses: 'Response | Responses',
            lb_average: 'Average',
            lb_view_responses: 'View',
            lb_top_blockers: 'Teammates with most attention points',
            empty_case: "There isn't summary data for this date", // eslint-disable-line
            permissions_empty_case:
                'The visibility for this check-in is restricted, you may not be able to see the data.',
            label_chart_week_of: 'Week of {date}',
            drawer: {
                title: {
                    expected_responses: 'Completion rate',
                    response_on_time: 'Responses on time',
                },
                expected_responses:
                    '{percentage}% - {received} out of {total} expected response',
                lb_response_on_time:
                    '{percentage}% - {received} responses on time of {total} responses',
                hint: 'This metric excludes time off',
                search: 'Search participants',
                participants: 'Participants',
                completed: '% of participation',
                response_on_time: 'Response on time',
                response_on_time_tooltip:
                    'Responses received before <strong>{time}</strong>',
                time_off: '{days} day off | {days} days off',
                lost: '{amount} missed report | {amount} missed reports',
                exclude: 'Not expected',
                away_today: 'Off today',
                responses: '{responses}%',
                responses_on_time_info: '{percentage}% on time',
                participation: '{participation}% participation',
                expected_participation:
                    '{name} completed {responses} out of {expected} expected responses',
                on_time_participation:
                    'Out of {total} responses from <strong>{name}</strong>, {success} of them were on time.',
                on_time_participation_full:
                    "All of <strong>{name}'s</strong> responses were on time.", // eslint-disable-line
                complete: 'Completed',
            },
            active_on_demand: {
                banner: {
                    title:
                        'Check-ins has been updated to include new features & improvements',
                    message: {
                        main: 'The new Analytics feature helps you understand the behavior of any check-in report over time. {link}',
                        link: 'Learn more',
                    },
                    lk_active: 'Activate Analytics',
                },
                modal: {
                    title: 'We’re preparing your data',
                    message:
                        'You have activated analytics for your check-ins. We will notify you by private message once your data is ready.',
                    lk_ok: 'Got it',
                    lk_go_to_analytics: 'Go to Analytics',
                },
                message_to_processing_data: {
                    title: 'Working on it...',
                    description:
                        'You have activated analytics for your check-ins. We will notify you once your data is ready.',
                },
                message_to_activate:
                    'With these metrics you can analyze the evolution of what’s happening with their team during daily stand-ups, retrospective meetings, 1:1 reports, and more.',
            },
            limit_summary: {
                title: {
                    main: 'Upgrade your plan to the view statistics {period}',
                    period_one_month: 'of the last month',
                    period_three_months: 'of the last 3 months',
                    period_six_months: 'of the last 6 months',
                    period_one_year: 'of the last year',
                },
                message:
                    'Your current plan has limits, you need upgrade your plan to be able to travel in time and see all the reports and activity of your team.',
            },
            header_charts: {
                total_responses: {
                    title: 'Completion rate',
                    lb_completed: 'Completed',
                    lb_not_completed: 'No completed',
                    lb_chart_expected_responses:
                        '{responses} out of {expected_responses} expected response | {responses} out of {expected_responses} expected responses',
                },
                responses_on_time: {
                    title: 'Responses on time',
                    lb_completed_on_time: 'Completed on time',
                    lb_not_completed_on_time: 'Not completed on time',
                    lb_not_responses: 'No responses',
                },
                team_mood: {
                    title: 'Team mood',
                    lb_motivation: 'Motivation',
                },
            },
            metric_legend: {
                lb_average_per_month: 'Average per month',
                lb_average: 'Average',
            },
            metric_labels: {
                blockers: 'Blockers or attention points',
                average: 'Average',
            },
            range_times: {
                today_date: 'Today ({date})',
                specific_date: 'Last activity ({date})',
                one_month: 'Last month',
                three_months: 'Last 3 months',
                six_months: 'Last 6 Months',
                one_year: 'Last year',
            },
            boolean_tooltips: {
                timeline: '{responses} response | {responses} responses',
                specific_date:
                    'Based on {responses} response | Based on {responses} responses',
            },
            numeric_tooltips: {
                timeline:
                    'Based on {responses} response | Based on {responses} responses',
            },
            multi_choices_tooltips: {
                timeline: '{responses} response | {responses} responses',
                specific_date: '{responses} response | {responses} responses',
            },
            blockers_tooltips: {
                timeline:
                    '{blockers} blocker or attention point | {blockers} blockers or attention points',
                specific_date:
                    '{blockers} blocker or attention point | {blockers} blockers or attention points',
            },
        },
        my_responses: {
            title: 'View my responses',
            btn_edit_responses: 'Edit responses',
            lb_last_edited: 'Last edited on {date} at {hour}',
            lk_delete_responses: 'Delete these responses',
        },
        activity_log: {
            view_activity_log: 'View activity log',
            popover_text: 'View full activity log',
            title: 'Activity log',
            subtitle: 'Daily stand-up',
            description: 'Easily monitor the activity of all your integrations here',
            filter: {
                activity_log_filter_time: {
                    today: 'Today ({date})',
                    beginning_of_time: 'All time',
                    last_week: 'Last 7 days',
                    last_two_weeks: 'Last 15 days',
                    last_four_weeks: 'Last 30 days',
                    custom_date: 'Custom period',
                    last_year: 'Last year',
                },
                date: 'Filter by date',
                range: 'Choose range',
                participant: {
                    lb_participant: 'Filter by participant',
                    pl_all_users: 'All participants',
                    pl_user: '1 participant selected',
                    pl_users: '{amount} participants selected',
                },
                modal: {
                    title: 'Filter by specific people',
                    pl_filter: 'Select specific people to filter',
                    lb_filter: 'All participants are selected by default',
                    btn_save: 'Apply',
                },
                integration: {
                    lb_integration: 'Filter by integration',
                    all_integrations: 'All integrations',
                    clickup: 'ClickUp',
                    github: 'GitHub',
                    trello: 'Trello',
                    zapier: 'Zapier',
                    jira: 'Jira Software',
                    bitbucket: 'Bitbucket',
                    linear: 'Linear',
                    shortcut: 'Shortcut',
                },
            },
            table: {
                empty_lb:
                    'No activity yet? No worries! Get started by setting up your first integration.',
                empty_btn: 'Go to Integrations',
                activity: '{friendly_name} - {link}',
                search: 'Search',
                empty_case: 'No results for this search.',
                empty_case_reset_filters: 'Reset filters',
            },
            chart: {
                labels: {
                    January: 'Week of Jan',
                    February: 'Week of Feb',
                    March: 'Week of Mar',
                    April: 'Week of Apr',
                    May: 'Week of May',
                    June: 'Week of Jun',
                    July: 'Week of Jul',
                    August: 'Week of Aug',
                    September: 'Week of Sep',
                    October: 'Week of Oct',
                    November: 'Week of Nov',
                    December: 'Week of Dec',
                },
                months: {
                    January: 'January',
                    February: 'February',
                    March: 'March',
                    April: 'April',
                    May: 'May',
                    June: 'June',
                    July: 'July',
                    August: 'August',
                    September: 'September',
                    October: 'October',
                    November: 'November',
                    December: 'December',
                },
                summary: {
                    total_activities: 'Total activities',
                    clickup: 'ClickUp activities',
                    trello: 'Trello activities',
                    bitbucket: 'Bitbucket activities',
                    shortcut: 'Shortcut activities',
                    jira: ' Jira Software activities',
                    linear: 'Linear activities',
                    github: 'GitHub activities',
                    generic: 'Generic activities',
                },
            },
        },
        activity: {
            nav_title: 'Activity',
            filter_title: 'Search and filters',
            answers_subtitle: 'Filter by questions',
            lb_query_subtitle: 'Search on responses',
            pl_query_subtitle: 'Search...',
            members_subtitle: 'Filter by members',
            loading_all: 'Loading...',
            filter_all: 'Select all',
            filter_none: 'Unselect all',
            reset_search: 'Reset search',
            anonymous_empty_case_members: 'This is an anonymous check-in',
            upgrade_limit_message:
                'It looks like you’re traveling in time, which is useful and possible with DailyBot. However, you just hit the limit for your current plan. Unlock full history by upgrading your plan.',
            show_more: 'Show more',
            show_less: 'Show less',
            empty_case: {
                description: 'No data available',
                reset_filters: 'Reset filters',
                not_exist_reports:
                    'There are no reports for this check-in yet. <br> Once you start filling your report, the responses will appear here.',
            },
            end_dailies_reached: {
                title: 'Your journey with DailyBot started here',
                subtitle: "You can't go further", // eslint-disable-line
                go_top_button: 'Back to top',
            },
            plan_limit_case: {
                discover_before_date:
                    'Upgrade your plan to access reports prior to {date}',
                discover_before_message:
                    'Your current plan has limits, you need upgrade your plan to be able to travel in time and see all the reports and activity of your team.',
                upgrade: 'Upgrade plan',
            },
            question_changed: 'The questions in the filter were changed.',
            question_not_exist: '(question - no exist inside template)',
        },
        settings: {
            // TODO: this code will be deprecated after release the new layout
            nav_title: 'Manage Check-ins',
            nav_title_small: 'Manage',
            //
            title: 'Check-in Settings',
        },
        user_preferences: {
            nav_title: 'My Preferences',
            subtitle: 'Configuring my preferences',
            title_features_form: 'Features',
            title_reporting_form: 'Reporting and email notifications',
            lb_select_work_days: 'Work days',
            lb_reports_by_email: 'Check-in reports by email',
            check_reports_by_email:
                'Get an <strong>email report</strong> once each check-in aggregated report is ready',
            lb_reports_by_chat: 'Check-in reports by private chat',
            check_reports_by_chat:
                'Get a <strong>private message</strong> report once each check-in aggregated report is ready',
            lb_daily_digest_notifications: 'Email digests',
            lb_daily_digest_notifications_require_upgrade:
                'Email digests (requires upgrade)',
            daily_digest_switch: "Get a daily digest with the previous day's summary", // eslint-disable-line
            lb_weekly_digest_notifications: 'Weekly digests',
            lb_weekly_digest_notifications_require_upgrade:
                'Weekly digests (requires upgrade)',
            weekly_digest_switch:
                'Get a weekly digest with a summary of week highlights',
            tp_select_date: 'Choose dates',
            days_of_work_disabled_and_user_is_admin: `To modify the work days, activate the option: “<b>Allow users to specify their own working days</b>” in <a href='{link}'>Check-ins settings</a>.`, // eslint-disable-line
            days_of_work_disabled_and_user_is_member:
                'Workdays have been set organization-wide by your admin',
            lb_hour_init_work: 'Work start time',
            pl_hour_init_work: 'Work start time',
            tp_hour_init_work:
                'Your current time zone is {timezone}. You can change it from your user profile.',
            lb_join_responses: 'Re-using my responses',
            tip_join_responses:
                'Admin turned on this feature org-wide for consistency',
            lb_answer_on_modal: 'Chatbot response preference',
            d_answer_on_modal:
                'Enable to respond via pop-up form, or disable to respond inline within the chat.',
            tip_disable_feature: 'Enable this action by turning on this feature',
            d_join_responses:
                'Use the same reply for all the check-ins I’m a member of if they share the same questions.',
            lb_ignore_followups_frequencies:
                'Display all check-in options in chat “checkin” command',
            d_ignore_followups_frequencies:
                'When enabled, the chatbot will allow users to fill out any of their check-ins when they type the command “checkin”, regardless of check-in frequencies.',
            lb_bot_onboarding_tips_enabled: 'Enable chatbot onboarding tips',
            d_bot_onboarding_tips_enabled:
                'When enabled, the chatbot will display some learning tips to users after filling out their check-ins. Notice these tips only show up in the first weeks of using DailyBot.',
            tp_join_responses:
                "If enabled, your responses will be posted on all the check-ins that have the same kind of questions for that day. <a href='https://help.dailybot.com/hc/en-us/articles/360058246593-Re-using-your-responses-for-several-Follow-Ups' target='_blank'>Learn more</a>.", // eslint-disable-line
            pl_weekly_digest_day: 'Select a week day',
            nav_banner_title: 'Stay in the loop with email digests',
            nav_banner_description:
                'Upgrade your plan to use the email digests features.',
            nav_banner_title_upgrade_button: 'Upgrade plan',
        },
        custom_question: {
            nav_title: 'Custom Questions',
            subtitle:
                'Browse the catalog and manage your own questions for your check-ins.',
            title: 'Custom Questions',
            create_new_title: 'Create new template',
            create_button: 'Create Template',
            lb_enabled: 'Feature enabling',
            tp_enabled:
                'Enable to be able to change the questions DailyBot asks everyday. Keep in mind that changing it will affect the questions for all teams.',
            upgrade_limit_message:
                'Custom questions are a great way to create a more natural conversation with your teammates. Unlock this feature by upgrading your plan.',
            enabled: 'Enable custom questions for my organization?',
            info_language:
                "DailyBot's chatbot is now configured to speak {0}, for better UX we encourage you to use the same language for your custom questions. You can change the Chatbot's language at {1}", // eslint-disable-line
            url_settins_org: 'Organization Configuration',
            restore_question: 'Restore Fields',
            error_maxlength: 'You exceeded the maximum number of characters',
            lb_bot_question: 'Bot question',
            lb_report_title: 'Report title',
            lb_help:
                'It is the same question but in short version for dashboard or reports',
            restore_success_message:
                'You have restored the question and report title by default',
            tp_disabled_change_question_type:
                "This question has already collected responses, so you can't change its type.", // eslint-disable-line
        },
        my_followups: {
            nav_title: 'Manage Check-ins',
            nav_title_small: 'Manage',
            nav_title_create: 'Create Check-in',
            title: 'Check-ins',
            subtitle: 'Manage your check-ins',
            btn_create_followups: 'Create Check-in',
            btn_manage_teams: 'Manage Teams',
            team_name: 'Team {name}',
            count_members: '({count} Member) | ({count} Members)',
            messages: {
                edited: 'Check-in updated',
                created: 'Check-in created',
                deactivated: 'Check-in deactivated',
                activated: 'Check-in activated',
                deleted: 'Check-in deleted',
                duplicated: 'Check-in duplicated',
            },
            contextual_workflow: {
                header: 'Automations',
                last_trigger_at: 'Last run: {date}',
                empty_description: '<i>No description</i>',
                created_by: 'Created by {name}',
                active: 'Active ({amount})',
                trigger: 'When:',
                action: 'Then:',
                channel_dm:
                    '<strong>Channel or DM</strong> (that will receive the message)',
                email: '<strong>Email</strong> (that will receive the message)',
                bnt_create: 'Create',
                btn_cancel: 'Cancel',
                new_automation: 'New automation',
                workflow_link:
                    "<a href='/commands/workflows-and-scheduling/edit/{uuid}' target='_blank'>{name}</a>", // eslint-disable-line
                followup_response_with_blockers:
                    'User reports a blocker in this check-in',
                send_bot_message: 'Send a DM to me',
                hint_send_bot_message: '(add more recipients later)',
                send_email_message: 'Send an email notification to',
                template: {
                    chat: {
                        name: 'Blocker notification via chat',
                        description:
                            'Send the blockers reported in this check-in to people via DM or specific channels.',
                    },
                    email: {
                        name: 'Blocker notification via email',
                        description:
                            'Send blockers reported in this check-in to specific emails.',
                    },
                    scratch: {
                        name: 'Create from scratch',
                        description: 'Choose your own setup and flow.',
                    },
                },
                errors: {
                    emails: 'Check email format, avoid duplicates',
                },
                footer: {
                    give_feedback: 'Give feedback',
                    learn: 'Learn about Automations',
                },
            },
            details: {
                owner: 'Owner',
                full_name:
                    "<a href='/settings/members/{uuid}' target='_blank'> {name}</a>", // eslint-disable-line
                frequency: 'Frequency',
                format_frequency: '{frequency}, {every}',
                reminder_time: 'Reminder time',
                start_on: 'Will start collecting responses on {date}',
                timezone: 'Based on your time zone: {timezone}',
                start_time_fixed: 'At your work start time',
                random_time_fixed: 'Random, after your work start time',
                random_time: 'Random, after',
                time_limit: 'Time limit',
                format_time_limit: '{time} ({timezone})',
                notice: 'Notice',
                anonymous: 'Responses are anonymous',
                restricted: 'This check-in has restricted visibility',
                copy_id: 'Copy Check-in ID',
            },
            item: {
                count_participants: '{count} member | {count} members',
                count_followups: 'Completed check-ins: ( {count} )',
                anonymous_ribbon: 'Anonymous',
                last_followup: 'Last check-in:',
                template: 'Using the {template} template.',
                noTemplate:
                    'There is <strong>no template</strong> related to this Check-In yet.',
                create_new: 'Create a new check-in',
                member_preferences: 'Manage members',
                export_data: 'Export data',
                delete: 'Delete',
                deactivated: 'Deactivate',
                copy_id: 'Copy ID',
                copy_id_message: 'Check-in ID was copied to clipboard',
                activate: 'Activate Check-in',
                settings: 'Edit settings',
                view_owner: 'Owned by {ownerName}',
                next_question_date_message: {
                    next_date_and_frequency_message:
                        '{nextDaysMessage} {frequencyMessage} ',
                    next_report_message: '- Next report is on {nextDateMessage}.',
                    next_date_message: {
                        nex_date:
                            '<span class="month">{month}</span> <span class="day">{day}</span>, <span class="year">{year}</span>',
                    },
                    next_days_message: {
                        several_days:
                            'Active each {stringDays}, | Active on days {stringDays},',
                        weekdays: 'Active on weekdays,',
                        all_week_days: 'Active everyday,',
                        cron: 'Frequency: Advanced instruction: {cron}',
                    },
                    frequencies_message: {
                        every_week: 'every week',
                        every_two_weeks: 'every two weeks',
                        every_three_weeks: 'every three weeks',
                        every_four_weeks: 'every four weeks',
                        every_five_weeks: 'every five weeks',
                        every_eight_weeks: 'every two months',
                        every_twelve_weeks: 'every three months',
                        every_twenty_four_weeks: 'every six months',
                        every_fifty_two_weeks: 'every year',
                    },
                    days_of_week: {
                        monday: 'Monday',
                        tuesday: 'Tuesday',
                        wednesday: 'Wednesday',
                        thursday: 'Thursday',
                        friday: 'Friday',
                        saturday: 'Saturday',
                        sunday: 'Sunday',
                        and: 'and',
                    },
                },
            },
            empty_case_followups_message: `
          <p>You don’t have access to any team check-ins here.</p>
          <p>It might be that you're not part of any check-in or don’t have enough permissions to access them.</p>
        `,
            config_followup: {
                title_create: 'Configure new Check-in',
                title_column_1: 'Questions and Frequency',
                title_column_2: 'Reporting and Privacy',
                title_participants: 'Participants',
                title_edit: 'Edit Check-in',
                title_view: '{name} Check-in',
                btn_create: 'Create Check-in',
                btn_edit: 'Save',
                btn_continue: 'Continue',
                lb_frequency: 'Frequency',
                lb_name: 'Name',
                pl_name: 'Type a clear name that gives context of the goal',
                ht_name:
                    '(Example: New iPhone App Standups, Team Retrospective, 1-1 Meeting, Design Team Check-in,...)',
                lb_team: 'Add or remove participants',
                pl_team: 'Select a team',
                pl_team_members: 'Search members or teams',
                ht_general:
                    'New members join General automatically. Set it up here to add them to this check-in',
                lb_toggle_synchronize_from_channel:
                    'Keep check-in participants in sync with selected channels',
                lb_question_for_team: 'Questions for this team',
                tp_question_for_team:
                    'The template defines the questions to be prompted. Browse and manage your templates from the "Question Templates" page.',
                pl_question_for_team: 'Select a template',
                repeat_on_this_days: 'Repeat on these days',
                on_days: 'On which days?',
                lb_use_user_defined_work_days: 'About work days',
                lb_toggle_use_user_defined_work_days:
                    "Consider each participant's work days and avoid this check-in if they don't work that day.", // eslint-disable-line
                lb_allow_different_dates: 'Allow submitting reports on any dates',
                lb_toggle_allow_different_dates:
                    'Allow users to submit reports for past or future dates, such as last week’s report.',
                lb_deactivate_automatic_trigger:
                    'Run check-in only via API or Workflows',
                lb_toggle_deactivate_automatic_trigger:
                    'Check-in will only be initiated upon request through the API or workflows that have been configured.',
                lb_allow_reports_on_previous_dates: 'Allow reports on past dates',
                lb_toggle_allow_reports_on_previous_dates:
                    "Enable to allow participants to post responses for a previous date, e.g. submitting now their previous weeks' report", // eslint-disable-line
                lb_allow_reports_on_future_dates: 'Allow reports on future dates',
                lb_toggle_allow_reports_on_future_dates:
                    "Enable to allow participants to post responses for a future date, e.g. submitting now their next weeks' report", // eslint-disable-line
                lb_allow_reports_before_trigger_time:
                    'Allow responses before the start reminder time',
                lb_toggle_allow_reports_before_trigger_time:
                    'Enable to allow participants to post responses before the reminder time has been reached.',
                lb_activity_tracking: 'Activity tracking',
                lb_toggle_activity_tracking:
                    "Attach a summary to the responses with each participant's activity in external tools", // eslint-disable-line
                lb_select_channel: 'Share reports in a channel',
                lb_overwrite_intro_outro:
                    'Overwrite the intro/outro messages from this template',
                lb_toggle_overwrite_intro_outro:
                    'Create a unique intro and outro message for this specific check-in.',
                pl_channel: 'Search for a channel',
                lb_channel_empty_message: "Can't find the channel?", // eslint-disable-line
                empty_case_not_found_channel:
                    "No channels matching this search. <br> If your channel doesn't show up, please add <strong>{'@'}DailyBot</strong> to the channel first.", // eslint-disable-line
                empty_case_channels_hangouts:
                    "It wasn't possible to find any Space <br> where <strong>{'@'}DailyBot</strong> is a member. <br> Please add the bot to a Space and reload.", // eslint-disable-line
                lb_toggle_reports: 'Send reports one by one, as they get completed',
                lb_privacy_settings: 'Responses visibility in the web app',
                post_settings: {
                    lb_post_responses_in_thread:
                        'Post last responses (after time limit) in the thread',
                    lb_post_responses_only_if_pending:
                        'Send consolidated report only if there are pending responses',
                    lb_post_responses_if_no_one:
                        'Send consolidated report even no one has filled out the report',
                },
                pl_privacy_settings: 'Choose the roles',
                small_message_not_available_privacy_settings:
                    'This privacy setting is not available in your plan.',
                lb_anonymous_responses: 'Collect anonymous responses',
                lb_toggle_anonymous_responses: 'Make all the responses anonymous',
                lb_confirmed_toggle_anonymous_responses:
                    'All the responses are anonymous',
                small_message_anonymous_responses:
                    'It will be always anonymous, you won’t be able to change this later.',
                small_message_confirmed_anonymous_responses:
                    'It will be always anonymous, you cannot change this setting.',
                small_message_not_available_anonymous_responses:
                    'The anonymous responses are not available in your plan.',
                lb_hour: 'Time limit for report',
                lb_toggle_hour:
                    'Define a time limit to then post an aggregated report to the chat channel',
                tp_hour:
                    "This check-in is triggered via API or workflows and doesn't have a time limit. If you're running this check-in via workflows, consider using the action 'Post a consolidated report' to activate this instead.", // eslint-disable-line
                lb_toggle_hour_no_admin:
                    'Is it define a time limit for send responses and then aggregate reports to the channel?',
                small_message_custom_report_time:
                    "Based on organization's time zone is <strong>{timezone}</strong>.", // eslint-disable-line
                small_message_custom_report_time_custom_timezone:
                    'Based on custom time zone.',
                small_message_custom_report_time_action: {
                    change: 'Change',
                    reset: "Use organization's time zone", // eslint-disable-line
                },
                frequency: 'When should it be triggered?',
                pl_frequency: 'Select a frequency',
                other_options: 'Other options',
                lb_empty_message: "Can't find the channel?", // eslint-disable-line
                lb_start_happening: 'When should it start running?',
                ht_start_happening:
                    'The questions will be triggered based on the frequency settings, but only after {pickerDate}',
                hint_start_on: 'Starts running on {date}',
                hint_start_on_yearly: 'Repeat every {date}',
                choose_date: 'Choose date',
                tp_slack: {
                    text: "If you're configuring a private channel, please add {'@'}DailyBot to the private channel first. {link}", // eslint-disable-line
                    link: 'Learn more',
                    dailybot: "{'@'}Dailybot", // eslint-disable-line
                },
                tp_old_slack:
                    "If you're configuring a private channel, please add <strong>{'@'}DailyBot</strong> to the private channel first. <a href='https://help.dailybot.com/hc/en-us/articles/360056375274-I-can-t-find-my-private-channel-in-DailyBot-s-channel-lists' target='_blank'>Learn more</a>", // eslint-disable-line
                tp_old_hangouts: `Please add <strong>{'@'}DailyBot</strong> to a Space in <a href='{urlHangouts}' target='_blank'>Google Chat</a>.
                        If you're facing issues, try removing/adding the bot back in the Space. <strong>Reload the page</strong> if necessary to see the Space in the dropdown.`,
                lb_custom_trigger_time: 'Start reminder time',
                lb_custom_trigger_timezone: 'Custom reminder time zone',
                lb_custom_report_timezone: 'Custom report time zone',
                small_message_custom_trigger_time:
                    "Based on each participant's time zone.", // eslint-disable-line
                small_message_custom_trigger_time_custom_timezone:
                    'Based on custom time zone.',
                small_message_custom_trigger_time_action: {
                    change: 'Set universal time zone',
                    reset: "Use each participant's time zone", // eslint-disable-line
                },
                small_message_custom_trigger_time_limit: {
                    change: 'Set universal time zone',
                    reset: "Use organization's time zone", // eslint-disable-line
                },
                confirm_anonymous: {
                    title: '⚠ Collecting Anonymous Responses ⚠',
                    outstanding_description: 'This action will be permanent',
                    description:
                        'Once you mark this check-in as anonymous, all the responses will be turned anonymous and you cannot change this later.',
                    btn_confirm: 'Confirm this change',
                    link_back: 'Back',
                },
                templates: {
                    subtitle_created_by_dailybot: 'Template by DailyBot',
                    subtitle_created_by_user: 'Template by {user}',
                    subtitle_upgrade_for_use_it: 'Upgrade now',
                    lb_upgrade_to_special_vars: 'Apply this template.',
                    learn_more: 'Learn more',
                    popover_upgrade_template:
                        'Sometimes it\'s useful for the respondents to see their previous response as context when filling out a new standup report.<br><br>When DailyBot asks "what did you complete?" it can show what the respondent said was going to be completed.',
                    popover_upgrade_template_switch:
                        'Try it now by switching to the template: <b>Daily Standup with previous response context. </b>',
                    popover_upgrade_template_switch_link:
                        '<span class="link">Switch now.<span>',
                    popover_upgrade_template_learn_more:
                        'Learn more about including previous response\'s variables into your question templates <a target="_blank" class="link" href="https://help.dailybot.com/hc/en-us/articles/1500003985922-Use-special-variables-to-add-previous-responses">here</a>.',
                    hint: 'Want to show the previous response as context for the respondent?',
                },
            },
            remove_followup: {
                title: 'Confirm deletion',
                message: 'Are you sure you want to delete this check-in?',
            },
            mange_members: {
                title: '{name} Check-in members',
                manage_notice: {
                    message:
                        'Members of this check-in come from {0} team, you can {1} to add/remove members in {0} and those changes will be reflected here.',
                    manage_teams: 'manage your teams',
                    invite_members: 'invite members',
                    create_more_followups: 'create more check-ins',
                },
                add_member: 'Add {integrationType} member by name or email...',
                emptycase_add_member: 'You already invited all the available users.',
                find_member: 'Search for member of {orgName}',
                do_questions: 'Automatic questions?',
                do_questions_help:
                    'You can enable/disable the automatic bot question for specific team members.',
                read_more: 'Read more',
                remove_member: {
                    title: 'Confirm removal',
                    message: 'Are you sure you want to remove this member?',
                },
            },
        },
        general_settings: {
            // TODO: this code will be deprecated after release the new layout
            nav_title: 'General Settings',
            //
            nav_title_v2: 'Global Settings',
            title: 'General Settings',
            subtitle: 'Manage the key organization settings around check-ins',
            title_form: 'Main settings',
            tp_bot_notifications:
                'Enable this feature if you want DailyBot to ask the questions automatically.',
            check_bot_notifications: 'Enable bot automatic questions',
            check_active_days: 'Allow users to specify their own working days?',
            lb_select_work_days: 'Choose work days',
            tp_select_work_days: `Choose the days on which DailyBot will ask team members to do a daily check-in.
        This is the default value for all members, in case that you have disabled the option for them to define their own days.
        `,
            tp_motivation:
                'If enabled, DailyBot asks each person about their mood and motivation, every week, and anonymously. You can see a chart with results.',
            check_active_motivation_question: 'Enable motivation question',
            check_show_motivational_chart:
                'Show motivational chart to everyone in the organization',
            hint_show_motivational_chart:
                'If disabled, only administrators will see the charts.',
            lb_select_motivation_days: 'Choose day for the motivation question',
            'learn_about_check-ins': 'Learn more about Check-ins',
            lb_join_responses: 'Consolidate reports across the organization',
            d_join_responses:
                "Allows users to respond only once to a set of questions and have their responses copied to all the check-ins that are using the same question template for the current day. <a href='https://help.dailybot.com/hc/en-us/articles/360058246593-Re-using-your-responses-for-several-Follow-Ups' target='_blank'>Learn more.</a>", // eslint-disable-line
            join_responses_modal: {
                title_active: "<strong>You're activating Consolidated Report</strong>", // eslint-disable-line
                title_deactive: "<strong>You're deactivating this feature</strong>", // eslint-disable-line
                description_active:
                    'Are you sure you want to activate it for everyone in the organization? Only org admins can change it.',
                description:
                    'Would you like to update this field for all users in your organization?',
            },
        },
        export_followup_data: {
            title: 'Export responses as {format}',
            subtitle: 'Exporting {count} check-in | Exporting {count} check-ins',
            description_date_range:
                'Choose a date interval to export the check-in responses.',
            lb_export_to: 'Export as',
            btn_export: 'Export',
            select_other_followups: {
                message: {
                    link_text: 'Include more pages',
                    text: '{0} with data from other check-ins',
                },
                pl_search: 'Search check-ins',
                add_all: 'All',
                add_none: 'None',
                empty_case_search: 'No results to show',
            },
        },
        run_followup_data: {
            title: 'Run check-in',
            options: {
                test: 'Run as test',
                everyone: 'Run for all participants',
            },
            hint: {
                test: {
                    message:
                        "Only you'll get a DM reminder, if you're not a participant, we'll add you. Your response will be posted in the channel (if set up).", // eslint-disable-line
                    note: '<b>Note:</b> Running this test deletes your response from today.',
                },
                everyone: {
                    message:
                        'All check-in participants who haven’t completed their report today will get the DM reminder.', // eslint-disable-line
                    note: '<b>Note:</b> You can only manually run the check-in <b>once a day.</b>',
                },
            },
            message: {
                success: {
                    everyone: 'Reminders sent to participants successfully',
                    test: 'Reminder sent successfully to you',
                },
                error: 'There was an error triggering the check-in',
            },
            buttons: {
                run: 'Run check-in',
                cancel: 'No, cancel',
            },
        },
        regex_parser_settings: {
            settings_section: {
                title: 'Text replacement for incoming responses',
                description:
                    "Use regular expressions to make on-the-fly text replacements in the users' check-in responses.", // eslint-disable-line
                descriptionLink: 'Manage replacements.',
                hint: {
                    message:
                        'DailyBot uses the regular expressions to parse check-in responses and kudos. {0}',
                    link: 'Learn more',
                },
            },
            modal: {
                emptyCase: 'No replacement has been defined yet.',
                readOnlyCase:
                    'This setting only can be updated by an "Organization Admin" or a "Team Manager".',
                title: "Text replacement for users' responses", // eslint-disable-line
                subtitle: {
                    text_line_1:
                        'Regular expressions require technical knowledge, be careful when changing these settings. {text_line_2}',
                    text_line_2:
                        'These regexes are used when processing check-in responses and kudos. {link}',
                    link: 'Learn More',
                },
                form: {
                    fields: {
                        regex: {
                            label: 'Regular Expression',
                            placeholder: 'Regular Expression',
                            error: "Verify this expression and it's replacement", // eslint-disable-line
                        },
                        replacement: {
                            label: 'Replace for',
                            placeholder: 'Replace for',
                            error: "Verify this replacement and it's regex", // eslint-disable-line
                        },
                    },
                    buttons: {
                        add: '+ Add one more',
                        addFirst: "Let's start", // eslint-disable-line
                        cancel: 'Cancel',
                        cancelReadOnly: 'Close',
                        update: 'Save',
                    },
                    errors: {
                        server_field_error:
                            'There is an invalid expression or replacement, please verify them an try again.<br/>You can try <a href="https://www.regextester.com/" target="_blank">this tool</a> if the problem persists, or visit our blog to <a href="https://help.dailybot.com/hc/en-us/articles/360056377514-Set-replacement-regexes-on-responses-in-Follow-Ups" target="_blank">learn more.</a>',
                    },
                },
            },
        },
        smart_reports: {
            based_on: 'Insights based on {daily} check-in',
            profile: 'Go to user profile',
            lb_checkin_responses: 'Check-in responses',
            lb_checkin_blockers: 'Check-in blockers',
            lb_kudos: 'Kudos received',
            lb_late_responses: 'Late responses',
            loading_message: 'Crafting user insights, just a moment...',
            filter_by_dates: {
                last_week: 'Last week',
                last_month: 'Last month',
                last_3_months: 'Last 3 months',
                all_time: 'All time',
            },
            user_info: {
                lb_user_info: 'User info',
                lb_occupation: 'Occupation: ',
                lb_timezone: 'Time zone: ',
                lb_work_days: 'Work days: ',
                lb_work_start_time: 'Work start time: ',
                lb_upcoming_time_off: 'Upcomming time off: ',
            },
            activity_summary: {
                lb_activity_summary: 'Activity summary',
                lb_last_response: 'Last response:',
                lb_total_activities: 'Total activities:',
            },
            insights: {
                lb_work_insight: 'Work insights',
                lb_block_summary: 'Block summary',
                lb_highlights: 'Highlights',
                lb_last_blockers: 'Last blockers',
                lb_sentiment_recommendation: 'Mood recommendation',
                lb_last_kudos_received: 'Last kudos received',
                lb_mood: 'Mood',
            },
            insights_title: {
                lb_last_blockers:
                    'Explore the challenges {userName} faced in the last 5 updates',
                lb_last_kudos_received: 'Some kudos given by the team 🎉',
            },
            insights_empty_case: {
                lb_last_blockers: "They don't have any blocker reported recently.", // eslint-disable-line
                lb_last_kudos_received:
                    "{userName} hasn't received kudos yet. Be the first to appreciate {userName}'s work! {link}", // eslint-disable-line
                link: 'Give kudos.',
            },
            footer: {
                // eslint-disable-next-line quotes
                lb_only_admin: "You're seeing this because your role is {userRole}",
                lb_ask: 'Was this report helpful? {link}',
                lb_link_feedback: 'Give feedback',
                lb_link_learn_more: 'Learn about User Insights',
            },
        },
        templates: {
            modal_questions: {
                questions: 'Questions',
                frequency: 'Frequency:',
            },
        },
    },
}