export default {
    workflows: {
        disabled_plan:
            'Requires {upgrade}, available for plans Advanced and Enterprise',
        upgrade: 'upgrade',
        description: {
            main: 'Automate messages and emails with DailyBot or external apps triggered by check-ins, forms, and in-chat commands.',
            links: "{learnMore} {'|'} {getIdeas}", // eslint-disable-line
            learn_more: '📖 Learn more',
            get_ideas: '💡 Get inspired with some ideas here ➝',
        },
        general: {
            pre_condition: 'Pre condition added',
            btn_create_workflow: 'Create Workflow',
            tp_element_removed: 'An associated item has been deleted',
            item_deleted: 'Item deleted',
            issues: {
                check_in:
                    '(This item was removed, please select a new check-in or change the trigger)',
                form: '(This item was removed, please select a new form or change the trigger)',
                command:
                    '(This item was removed, please select a new command or change the trigger)',
                workflow:
                    '(This item was removed, please select a new workflow or change the trigger)',
            },
            trigger_type: {
                modal: {
                    title: 'Are you sure?',
                    description: "You changes won't be saved", // eslint-disable-line
                    confirm: 'Yes, take me out',
                    cancel: 'No, continue editing',
                },
                actions: {
                    edit: 'Edit',
                    add_action_below: 'Add action below',
                    delete: 'Delete',
                },
                discard: 'Change trigger',
                popover_discard: 'Back to the trigger gallery',
                command_execution: {
                    title: 'User runs a shortcut/command',
                    description:
                        'Starts when a given in-chat custom command is triggered',
                },
                scheduled_task: {
                    title: 'On a schedule',
                    description: 'Based on a date and time scheduled',
                },
                special_date: {
                    title: 'A key date occurs',
                    description: 'Starts when a special date occurs',
                },
                followup_response_completed: {
                    title: 'User completes a check-in',
                    description: 'Starts when a check-in receives a full response',
                },
                followup_response_with_blockers: {
                    title: 'User reports a blocker in a check-in',
                    description: 'When a check-in response has blockers/attention points',
                },
                form_response_completed: {
                    title: 'Form received new response/record',
                    description: 'Starts when a given form gets a new record',
                },
                form_response_updated: {
                    title: 'Form record is updated',
                    description: "Starts when a form's record is changed", // eslint-disable-line
                },
                form_response_approved: {
                    title: 'Form record is approved',
                    description: "Starts when a form's record is approved", // eslint-disable-line
                },
                form_response_denied: {
                    title: 'Form record is denied',
                    description: "Starts when a form's record is denied", // eslint-disable-line
                },
                workflow_finished: {
                    title: 'Another Workflow has finished',
                    description: 'Starts when some other workflow was completed',
                },
                activity_logged: {
                    title: 'Activity logged in DailyBot',
                    description:
                        'Starts when a external activity is tracked (GitHub, Jira Software, etc)',
                },
                universal_event: {
                    title: 'Event sent to Workflow Trigger API',
                    description: 'Starts programmatically with API call',
                },
                kudos_given: {
                    title: 'Kudos given by any person',
                    description: 'Starts when some kudos activity happens',
                },
                user_added_to_organization: {
                    title: 'User is added to this organization',
                    description:
                        'Starts when a user is added to DailyBot for the first time',
                },
                user_added_to_team: {
                    title: 'User is added to a team',
                    description: 'Starts when a user is added to any team',
                },
                user_removed_from_team: {
                    title: 'User is removed from a team',
                    description: 'Starts when a user is removed from any team',
                },
                setting: {
                    command_execution: {
                        title: 'Shortcut/command',
                        description:
                            'Any of your in-chat custom commands appear here. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    special_date: {
                        lb_user_teams: 'From specific users or teams (optional)',
                        ht_user_teams:
                            'By default, dates will be taken from the entire organization',
                        lb_selector_date: 'Type of special date',
                        // eslint-disable-next-line quotes
                        lb_birthday: "It's a teammate's birthday",
                        // eslint-disable-next-line quotes
                        lb_anniversary: "It's a teammate's work anniversary",
                        lb_time: 'What time?',
                        hint_timezone: 'Based on organization time zone {timezone}',
                        trigger_label: {
                            lb_important_date: 'Trigger date: {type}',
                            lb_time: 'Trigger time: {time}',
                            lb_timezone: 'Based on timezone <strong>{timezone}</strong>',
                        },
                    },
                    scheduled_task: {
                        title: 'Cron expression',
                        description:
                            'Type a valid cronjob expression. Based on timezone {timezone} {learnMore}',
                        learn_more: 'Learn more',
                        lb_basic: 'Basic',
                        lb_advanced: 'Advanced',
                        lb_description: 'Advanced instruction: {instruction}',
                        basic: {
                            lb_custom_day: 'When?',
                            lb_time: 'What time?',
                            lb_monthly: 'When does it start?',
                            lb_days: 'On which days?',
                            lb_recurrence: 'Frequency',
                            hint_monthly: 'Repeat every {day} of the month.',
                            hint_timezone: 'Based on organization time zone - {timezone}',
                            recurrence_options: {
                                once: 'Once',
                                daily: 'Daily',
                                week_day: 'On Weekdays (Mon - Fri)',
                                weekly: 'Weekly',
                                monthly: 'Monthly',
                            },
                        },
                        trigger_label: {
                            lb_frequency: 'Frequency: {frequency}',
                            lb_monthly: 'Repeat every {day} of the month.',
                            lb_date: 'On {date}',
                            lb_days: 'Trigger days: {days}',
                            lb_time: 'Trigger time: {time}',
                            lb_timezone: 'Based on timezone <strong>{timezone}</strong>',
                            days: {
                                '0': 'Sunday',
                                '1': 'Monday',
                                '2': 'Tuesday',
                                '3': 'Wednesday',
                                '4': 'Thursday',
                                '5': 'Friday',
                                '6': 'Saturday',
                                '7': 'Sunday',
                            },
                        },
                    },
                    followup_response_completed: {
                        title: 'Check-in',
                        description:
                            'List filtered by check-ins with responses visible by you. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    followup_response_with_blockers: {
                        title: 'Check-in',
                        description:
                            'List filtered by check-ins with responses visible by you. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    form_response_completed: {
                        title: 'Form',
                        description:
                            'List filtered by forms that are accessible by you. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    form_response_updated: {
                        title: 'Form',
                        description:
                            'List filtered by forms that are accessible by you. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    form_response_approved: {
                        title: 'Form',
                        description:
                            'List filtered by forms that are accessible by you. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    form_response_denied: {
                        title: 'Form',
                        description:
                            'List filtered by forms that are accessible by you. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    workflow_finished: {
                        title: 'Workflow',
                        description: 'Select any other workflow. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    activity_logged: {
                        title: 'External Activity',
                        description:
                            'Activities based on your external integrations like GitHub, Jira Software, etc. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    universal_event: {
                        title: 'API input configuration',
                        description:
                            'Type the event_type string and (optionally) the secret you are sending via trigger API. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    kudos_given: {
                        title: 'Kudos given',
                        description: 'Triggering when kudos activity happens. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    user_added_to_organization: {
                        title: 'New User Added to Organization',
                        description:
                            'Triggering when a user is added to this org, for the first time. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    user_added_to_team: {
                        title: 'User Added to Team',
                        description:
                            'Triggering when a user is added to a team. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    user_removed_from_team: {
                        title: 'User Removed from Team',
                        description:
                            'Triggering when a user is removed from a team. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    send_bot_message: {
                        title: "Send a message via chatbot as {'@'}DailyBot", // eslint-disable-line
                        description: 'Description. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    send_email_message: {
                        title: 'Send an email message',
                        description: 'Description. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    trigger_custom_command: {
                        title: 'Trigger a custom command',
                        description:
                            'It triggers the command via chatbot in selected DMs or channels. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    select_random_form_response: {
                        title: 'Select a random Form record',
                        description: 'Fetches a random response from a form. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    insert_form_response: {
                        title: 'Insert form record',
                        description:
                            'Inserts a new form response/record into the given form. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    run_ai_gpt_prompt: {
                        title: 'Process response with AI',
                        description:
                            'Generates content based on a previous input. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    trigger_followup: {
                        title: 'Check-in',
                        description: 'Starts a new check-in flow. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    trigger_followup_report: {
                        title: 'Check-in',
                        description: 'Send check-in report aggregated. {learnMore}',
                        learn_more: 'Learn more',
                    },
                    send_kudos: {
                        title: 'Give kudos to someone',
                        description:
                            'Sends kudos cards to people of your choice. {learnMore}',
                        learn_more: 'Learn more',
                    },
                },
            },
            action_type: {
                labels: {
                    users: 'Users: ',
                    teams: 'Teams: ',
                    channels: 'Channels: ',
                    delay: 'Delay',
                    message: 'Message: ',
                    subject: 'Subject: ',
                    involved_users: 'Involved users: ',
                    form: 'Form: ',
                    check_in: 'Check-in: ',
                    command: 'Command: ',
                },
                modal: {
                    title: 'Are you sure?',
                    description: "You changes won't be saved", // eslint-disable-line
                    confirm: 'Yes, take me out',
                    cancel: 'No, continue editing',
                },
                discard: 'Change action',
                popover_discard: 'Back to the action gallery',
                send_bot_message: {
                    title: 'Send a chat message',
                    description:
                        "Sends a chat message via {'@'}DailyBot to DMs or channels", // eslint-disable-line
                    description_hangouts:
                        "Sends a chat message via {'@'}DailyBot to DMs or spaces", // eslint-disable-line
                },
                send_email_message: {
                    title: 'Send an email message',
                    description:
                        'Sends an email to DailyBot users or any email addresses',
                },
                trigger_custom_command: {
                    title: 'Run a command',
                    description:
                        'Runs a command and sends output to chat channels or DMs',
                    description_hangouts:
                        'Runs a command and sends output to chat spaces or DMs',
                },
                select_random_form_response: {
                    title: 'Select random Form record',
                    description:
                        'Fetches a random form record to be used by the next action',
                },
                insert_form_response: {
                    title: 'Insert Form record',
                    description: 'Creates a form record in a given form',
                },
                run_ai_gpt_prompt: {
                    title: 'Generate content with AI',
                    description: 'Generates content based on a given input',
                },
                trigger_followup: {
                    title: 'Send a check-in reminder',
                    description: 'Sends the user a reminder to fill out their report',
                },
                trigger_form: {
                    title: 'Send a Form reminder',
                    description: 'Ask your team to complete one form via channel or DM',
                    description_hangouts:
                        'Ask your team to complete one form via space or DM',
                },
                trigger_followup_report: {
                    title: 'Post a consolidated report',
                    description: 'Send the consolidated report of a Check-in',
                },
                send_kudos: {
                    title: 'Give kudos to someone',
                    description: 'Sends kudos cards to people of your choice',
                },
                select_ff_responses: {
                    title: 'Fetch responses over a period of time',
                    description:
                        'Get all check-in or form responses from a specific time range',
                },
                no_actions: {
                    title: 'No actions',
                    description: 'No actions',
                },
            },
            delay: {
                wait: 'Wait',
                after_trigger: 'before running this action step',
            },
            delay_type: {
                minutes: 'Minutes',
                hours: 'Hours',
                days: 'Days',
                weeks: 'Weeks',
            },
            modal_discard: {
                title: 'Are you sure?',
                description: "Your changes won't be saved.", // eslint-disable-line
                lb_discard: 'Yes, leave',
                lb_save: 'No, continue creating',
            },
        },
        workflow_list: {
            title: 'Workflows',
            nav_title: 'Workflows',
            table: {
                pl_search_input: 'Search for a workflow',
                head: {
                    name: 'Workflow Name',
                    trigger_type: 'Trigger Type',
                    action_summary: 'Action summary',
                    availability: 'Status',
                    last_activity: 'Last activity',
                    pl_search_input: 'Search for a workflow',
                    total_run: 'Total runs',
                    last_run: 'Last run',
                },
                content: {
                    name: {
                        inactive: 'Inactive',
                    },
                    actions: {
                        view_workflow: 'View workflow',
                        edit_workflow: 'Edit workflow',
                        delete_workflow: 'Delete workflow',
                        activate_workflow: 'Activate workflow',
                        deactivate_workflow: 'Deactivate workflow',
                    },
                    status: {
                        active: 'Active',
                        inactive: 'Inactive',
                    },
                    created_by: 'Created by {user}',
                    last_edited_at: 'Last edited {date}',
                    last_run_at: '{date}',
                },
                empty_case: 'No results for this search.',
                empty_case_reset_filters: 'Reset filters',
                empty_case_text: 'Create your first workflow to get started',
                empty_case_deny_text:
                    'No workflow in sight! Once admins create workflows you’ll be able to see them.',
                empty_case_create_button: 'Create Workflow',
            },
        },
        workflow_remove: {
            title: 'Please confirm',
            message: 'Are you sure you want to permanently delete this workflow?',
            buttons: {
                yes: 'Yes, delete it',
                no: 'No, cancel',
            },
            success: 'Workflow deleted',
        },
        workflow_edition: {
            success: 'Workflow saved',
            title: {
                edition: 'Edit Workflow',
                creation: 'Create a DailyBot Workflow',
            },
            description: {
                edition:
                    'Automate a step-by-step process with triggers and actions. {linkViewMore}',
                creation:
                    'Automate a step-by-step process with triggers and actions. {linkViewMore}',
                link_view_more: 'Learn More',
            },
            contextual_users: {
                workflow_owner: {
                    value: 'workflow_owner',
                    description: 'Workflow owner',
                    applicability: '*',
                },
                workflow_email_owner: {
                    value: 'workflow_owner',
                    description: "Workflow owner's email", // eslint-disable-line
                },
                checkin_owner: {
                    value: 'checkin_owner',
                    description: 'Check-in owner',
                    applicability:
                        'followup_response_completed,followup_response_with_blockers',
                },
                checkin_editors: {
                    value: 'checkin_editors',
                    description: 'Check-in editors',
                    applicability:
                        'followup_response_completed,followup_response_with_blockers',
                },
                checkin_participants: {
                    value: 'checkin_participants',
                    description: 'Check-in participants',
                    applicability:
                        'followup_response_completed,followup_response_with_blockers',
                },
                form_owner: {
                    value: 'form_owner',
                    description: 'Form owner',
                    applicability:
                        'form_response_completed,form_response_updated,form_response_approved,form_response_denied',
                },
                form_approvers: {
                    value: 'form_approvers',
                    description: 'Form approvers',
                    applicability:
                        'form_response_completed,form_response_updated,form_response_approved,form_response_denied',
                },
                contextual_user: {
                    value: 'contextual_user',
                    description: 'The user who caused this workflow activity to happen',
                    applicability: '*',
                },
                contextual_user_email: {
                    value: 'contextual_user',
                    description:
                        "The user's email who caused this workflow activity to happen", // eslint-disable-line
                },
            },
            form: {
                hint_variables: "Type {'{'}{'{'} to insert variables", // eslint-disable-line
                no_name: 'Untitled workflow',
                lb_active_toggle: 'Active',
                lb_workflow_name: 'Name',
                pl_workflow_name: 'Type a simple name',
                lb_workflow_description: 'Purpose',
                pl_workflow_description:
                    'Optional: type a better description for what this workflow accomplishes',
                lb_trigger_type: 'Trigger type',
                pl_trigger_type: 'Select a trigger type',
                lb_trigger: 'When',
                lb_trigger_description: 'This event happens:',
                lb_action: 'Then',
                lb_action_description: 'Perform this action:',
                lb_message: 'Message to send',
                lb_pre_condition: 'Pre condition (advanced)',
                pl_pre_condition:
                    "Example: \n{'{'}{'%'} if my_condition {'%'}{'}'} \n  continue \n{'{'}{'%'} endif {'%'}{'}'}", // eslint-disable-line
                hp_pre_condition:
                    "Learn how to <a href='https://help.dailybot.com/hc/en-us/articles/19660270651539' target='_blank'>build pre-conditions.</a>", // eslint-disable-line
                question: {
                    lb_form_section:
                        'Include responses from your form as part of the context',
                    lb_form_section_sub:
                        'Form responses added below the prompt for combined analysis.',
                    lb_followup_section:
                        'Include responses from your check-in as part of the context',
                    lb_followup_section_sub:
                        'Check-in responses added below the prompt for combined analysis.',
                    text: 'Text question',
                    numeric: 'Numeric question',
                    boolean: 'Yes/No question',
                    multiple_choice: 'Multiple Choice question',
                },
                saved: {
                    lb_type_of_action: 'Type of action: ',
                    lb_tone_of_voice: 'Tone of voice: ',
                    lb_custom_prompt: 'Custom prompt: ',
                    lb_includes_question_followup:
                        'Includes check-in responses from <strong>{name}</strong>',
                    lb_includes_question_form:
                        'Includes form responses from <strong>{name}</strong>',
                    lb_no_includes_question_followup:
                        'Does not include check-in responses from <strong>{name}</strong>',
                    lb_no_includes_question_form:
                        'Does not include form responses from <strong>{name}</strong>',
                    lb_prompt: 'Custom prompt: ',
                    hint_saved:
                        "↳ Response saved in the variable {'{'}{'{'}prev_step.ai_response{'}'}{'}'}.", // eslint-disable-line
                },
                prompt: {
                    lb_free_prompt: 'Prompt/Input',
                    pl_free_prompt:
                        'Enter details like the recipient’s name and type of email you want to send. You can provide additional context according to the tone you want to use, too.',
                    lb_summarize_report: 'Summarize report',
                    pl_summarize_report:
                        "We've created a custom prompt to ensure a high-quality summary, but feel free to add more details in the text area if needed. It's completely optional.", // eslint-disable-line
                    lb_summarize: 'Input text or document',
                    pl_summarize:
                        'Enter the longer piece of text or document you want to summarize. You can insert variables to use check-in or form responses as input, and you can provide additional context or specify the length of the summary you want.',
                    lb_social_networks: 'Product, campaign, or event details',
                    pl_social_networks:
                        'Enter the details of the product, campaign, or event you want to promote and the message or update you want to share on your social media platform of choice. You can provide additional context or specify the social media platform you want to use.',
                    lb_ads_campaign: 'Product, service details, and constraints',
                    pl_ads_campaign:
                        "Enter the details of the product or service you want to promote and any specific details or constraints you want to highlight. We'll generate compelling and persuasive text for your ad campaign.", // eslint-disable-line
                    lb_motivational_quote: 'Topic or context',
                    pl_motivational_quote:
                        "Enter a topic or area where you need motivation and we'll generate a motivational quote to help inspire you. ", // eslint-disable-line
                    lb_joke: 'Context or subject',
                    pl_joke:
                        "Enter a context or subject for the joke and we'll generate a humorous statement or joke. You can also leave all of this up to DailyBot.", // eslint-disable-line
                    lb_alternative_idea: 'Existing idea, context or constraints',
                    pl_alternative_idea:
                        "Enter the idea you want to explore and provide any context or constraints that may be relevant. We'll generate a list of creative and original ideas as alternatives.", // eslint-disable-line
                    lb_redact_email: 'Context of the desired email message',
                    pl_redact_email:
                        'Enter details like the recipient’s name and type of email you want to send. You can provide additional context according to the tone you want to use, too.',
                    lb_redact_text_message: 'Recipient, message, etc.',
                    pl_redact_text_message:
                        'Enter the recipient’s name and the message you want to send via chat. You can provide additional context or specify the chat platform you want to target.',
                    lb_seo_optimized_text: 'Topic or keyword',
                    pl_seo_optimized_text:
                        'Enter a topic or keyword you want to optimize content for. You can also provide additional context or specify the length and style of the content you want.',
                },
                lb_gpt_tone: 'Tone of voice',
                hp_gpt_tone:
                    '"Tone of voice" is how synthetic speech conveys emotions and intentions.',
                lb_prompt_action: 'Type of action',
                tip_prompt_action: 'Suggest an action',
                lb_llm_model: 'AI Model',
                lb_model: 'AI Model: ',
                lb_basic: 'Basic (GPT4o-mini)',
                lb_advanced: 'Advanced (GPT 4)',
                lb_anthropic: 'Advanced II (Claude 3)',
                lb_o1_preview: 'Latest (O1-preview)',
                lb_o1_mini: 'Latest (O1-mini)',
                let_us_know: 'Let us know',
                hint_random_form_record:
                    "The selected response will be saved in the variable {'{'}{'{'}prev_step.responses.response_N{'}'}{'}'} – so it can be used in the next action.", // eslint-disable-line
                hint_random_form_record_saved:
                    "↳ Response saved in the variable {'{'}{'{'}prev_step.responses.response_N{'}'}{'}'} – N refers to the number of questions you want to get the random record.", // eslint-disable-line
                hint_anniversary_trigger_saved:
                    "↳ Work anniversaries are saved in the variable {'{'}{'{'}anniversary_years{'}'}{'}'}.", // eslint-disable-line
                tp_add_action: 'Add action',
                lb_add_delay: 'Add delay',
                lb_add_pre_condition: 'Add pre condition',
                tp_remove_delay: 'Remove delay',
                tp_remove_pre_condition: 'Remove pre condition',
                btn_submit: {
                    create_workflow: 'Save & activate',
                    create_as_draft: 'Save as draft',
                    update_workflow: 'Save workflow',
                    cancel_update: 'Discard changes',
                    create_and_finish: 'Create and finish',
                    update_and_finish: 'Update and finish',
                    create_trigger: 'Save trigger',
                    cancel_trigger: 'Cancel',
                    create_action: 'Save action',
                    cancel_action: 'Cancel',
                },
                config_trigger_type: {
                    command_execution: {
                        lb_object_uuid: 'Command',
                        pl_object_uuid: 'Type the command name',
                    },
                    scheduled_task: {
                        lb_frequency_cron: 'Cron expression',
                        pl_frequency_cron: '0 0 * * *',
                    },
                    followup_response_completed: {
                        lb_object_uuid: 'Check-in',
                        pl_object_uuid: 'Type the Check-in name',
                    },
                    followup_response_with_blockers: {
                        lb_object_uuid: 'Check-in',
                        pl_object_uuid: 'Type the Check-in name',
                    },
                    form_response_completed: {
                        lb_object_uuid: 'Form',
                        pl_object_uuid: 'Type the Form name',
                    },
                    form_response_updated: {
                        lb_object_uuid: 'Form ',
                        pl_object_uuid: 'Type the Form name',
                    },
                    form_response_approved: {
                        lb_object_uuid: 'Form',
                        pl_object_uuid: 'Type the Form name',
                    },
                    form_response_denied: {
                        lb_object_uuid: 'Form ',
                        pl_object_uuid: 'Type the Form name',
                    },
                    workflow_finished: {
                        lb_object_uuid: 'Another Workflow',
                        pl_object_uuid: 'Type the Workflow name',
                    },
                    user_added_to_team: {
                        lb_object_uuid: 'Team',
                        pl_object_uuid: 'Type the Team name',
                    },
                    user_removed_from_team: {
                        lb_object_uuid: 'Team',
                        pl_object_uuid: 'Type the Team name',
                    },
                    activity_logged: {
                        lb_activity_type: 'Activity type',
                        pl_activity_type:
                            'Select the activity that triggers this workflow (it depends on your integrations)',
                        activity_type: {
                            all: 'Any activity',
                            codepush: 'Code push',
                            pull_request_created: 'Pull request created',
                            pull_request_merged: 'Pull request merged',
                            task_created: 'Task created',
                            task_updated: 'Task updated',
                            task_status_updated: 'Task status updated',
                            task_item_checked: 'Task item checked',
                            worklog_created: 'Worklog created',
                            project_released: 'Project released',
                            sprint_closed: 'Sprint closed',
                            generic_activity: 'Custom activity (via API)',
                        },
                    },
                    universal_event: {
                        lb_event_type: 'Event type',
                        pl_event_type: 'Type the event_type string',
                        lb_secret: 'Secret to validate the HTTP event request (optional)',
                        pl_secret: 'Type the secret string',
                    },
                },
                action: {
                    lb_delay_time: 'Time',
                    pl_delay_time: 'Input a number',
                    lb_delay_unit: 'Unit time',
                    pl_delay_unit: 'Select the unit time',
                    lb_select_action_type: 'Action type',
                    pl_select_action_type: 'Select action type',
                    lb_subject_email: 'Email subject',
                    pl_subject_email: 'Type a subject',
                    lb_from_name: 'Who sends the email?',
                    pl_from_name:
                        'Type a name to help the receiver understand who sends the notification',
                    lb_emails: 'Custom emails',
                    pl_emails: 'Type emails separated by commas, avoid duplicates',
                    lb_message: 'Message',
                    pl_message: 'Type a message',
                    lb_form: 'Form',
                    pl_form: 'Type a Form name',
                    lb_command_trigger_type: 'Enable free mode input',
                    lb_command_use_output: 'Just use command output for next step',
                    lb_command_uuid: 'Command/shortcut',
                    pl_command_uuid: 'Type the command',
                    lb_command_free: 'Type any in-chat command to run',
                    pl_command_free:
                        'Type any command to run via bot - e.g. pomodoro 3 30/10',
                    hint_command_free:
                        'DailyBot will run this command and display its output in channels or direct messages (DMs).',
                    lb_followup_uuid: 'Check-in',
                    pl_followup_uuid: 'Type the Check-in name',
                    lb_form_uuid: 'Form',
                    pl_form_uuid: 'Type the Form name',
                    lb_prompt: 'Prompt to be executed',
                    lb_select_members_teams_channels: 'Users, Teams or Channels',
                    pl_select_members_teams_channels: 'Find users, teams or channels',
                    lb_select_members_or_teams_kudos:
                        'People or teams (who will receive kudos)',
                    lb_select_members_or_teams:
                        'People or teams (who will receive the message)',
                    pl_select_members_or_teams: 'Find users or teams',
                    lb_select_members: 'Users (DMs)',
                    lb_select_members_alternative: 'Users (DMs)',
                    lb_select_members_email: 'User emails',
                    ht_select_members_email:
                        'The message will be sent to the email of the selected users',
                    lb_select_members_command: 'Users (DMs)',
                    pl_select_members: 'Find users',
                    lb_select_channels: 'Chat channels',
                    lb_select_channels_hangouts: 'Chat spaces',
                    lb_select_channels_alternative: 'Chat channels',
                    lb_select_channels_email: 'Chat channels',
                    lb_select_channels_command: 'Chat channels',
                    pl_select_channels: 'Find channels',
                    lb_contextual_users: 'Users (DMs) who are involved in this flow',
                    lb_contextual_users_email: 'User emails involved in this flow.',
                    lb_contextual_users_command:
                        'Users (DMs) who are involved in this flow',
                    lb_contextual_users_kudos:
                        'User involved in this flow (who will receive kudos)',
                    pl_contextual_users: 'Select a user related to this workflow run',
                    lb_set_delay: 'Delay for action',
                    toggle_set_delay:
                        'Define a delay time to execute the following action',
                    lb_fill_target_1: 'Define at',
                    lb_fill_target_2: 'least one target',
                    lb_fill_target_3: 'to send the output ⬇️',
                    prompt_type: {
                        lb_free_prompt: 'Free prompt',
                        pl_free_prompt:
                            'Receive a prompt or suggestion to help start writing.',
                        lb_summarize_report: 'Summarize report',
                        pl_summarize_report:
                            'Take a look at an example of the generated report <a href="https://help.dailybot.com/hc/en-us/articles/33511966270227-AI-Workflows-Sample-Output" target="_blank">here.</a>',
                        lb_summarize: 'Summarize',
                        pl_summarize:
                            'Sum up a longer piece of text or idea into a shorter, condensed version.',
                        lb_social_networks: 'Write a text for a social network post',
                        pl_social_networks:
                            'Write a message or update to share on any social media platform.',
                        lb_ads_campaign: 'Write a copy for an ad campaign',
                        pl_ads_campaign:
                            'Compose the text for an ad or promotional campaign.',
                        lb_motivational_quote: 'Give me a motivational quote',
                        pl_motivational_quote:
                            'Generate a motivational quote to provide encouragement or inspiration.',
                        lb_joke: 'Write a funny joke',
                        pl_joke:
                            'Come up with a joke or humorous statement to make people laugh.',
                        lb_alternative_idea: 'Brainstorm an alternative idea',
                        pl_alternative_idea:
                            'Generate new creative ideas as alternative to an existing one.',
                        lb_redact_email: 'Write an email message',
                        pl_redact_email:
                            'Compose a message to be sent via email, typically in a more professional tone.',
                        lb_redact_text_message: 'Compose an instant message for the chat',
                        pl_redact_text_message:
                            'Compose a brief message to be sent via SMS or WhatsApp.',
                        lb_seo_optimized_text: 'Write an SEO optimized sentence or content',
                        pl_seo_optimized_text:
                            'Create content that is optimized for search engine rankings.',
                    },
                    tone_type: {
                        lb_friendly: 'Friendly',
                        lb_casual: 'Casual',
                        lb_direct_and_assertive: 'Assertive',
                        lb_encouraging: 'Encouraging',
                        lb_funny: 'Funny',
                        lb_excited: 'Excited',
                        lb_professional: 'Professional',
                        lb_bold: 'Bold',
                        lb_formal: 'Formal',
                    },
                    select_ff_responses: {
                        lb_form_checkin: 'Select a check-in or form',
                        pl_form_checkin: 'Type a check-in or form name',
                        lb_period: 'Time range',
                        ht_period: 'Collect up to {count} responses',
                        tip_message: `💡 Tip: Use the {'{{'}prev_step.last_responses{'}}'} var in the next action to access the responses fetched. E.g., generate a summary using the "Generate content with AI" action. {learnMore}.`, // eslint-disable-line
                        tip_message_learn_more: 'Learn more',
                        period_option_text: 'Last {days} days',
                    },
                    select_command_output: {
                        lb: 'Return result',
                        ht: 'Select how to use the command output',
                        in_workflow_hint:
                            "The command will run internally within this workflow and the output will be available in the next action as {'{'}{'{'}prev_step.output.text{'}'}{'}'}", // eslint-disable-line
                        options: {
                            false: 'In Chat',
                            true: 'In Workflow',
                        },
                    },
                },
            },
        },
        search_table: {
            search_by: {
                all: 'All workflows',
                me: 'Created by me',
                others: 'Created by others',
                active: 'Active workflows',
                inactive: 'Inactive workflows',
            },
            order_by: {
                alphabetical: 'Alphabetical',
                recent: 'Recent activity',
                created: 'Date created',
                total: 'Total runs',
            },
        },
    },
}