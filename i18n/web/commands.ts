export default {
    commands: {
        common: {
            command: 'Command',
        },
        description: {
            main: 'Run in-chat automations with your own custom commands. Commands is the right tool to create quick shortcuts.',
            links: "{learnMore} {'|'} {getIdeas}", // eslint-disable-line
            learn_more: '📖 Learn more',
            get_ideas: '⚡ View in-chat commands',
            title_video: 'How to create custom commands?',
            title_pomodoro: 'What is a Pomodoro?',
            title_watercooler: 'What is a Watercooler?',
        },
        addons_description: {
            main: 'Automation and Add-ons let you integrate time-saving workflows to your day-to-day.',
            links: "{learnMore} {'|'} {getIdeas}", // eslint-disable-line
            learn_more: '📖 Learn more',
            get_ideas: '⚡ View in-chat commands',
        },
        search_table: {
            search_by: {
                all: 'All commands',
                me: 'Created by me',
                text: 'Text commands',
                forms: 'Form commands',
                custom: 'Custom code commands',
            },
            order_by: {
                alphabetical: 'Alphabetical',
                type: 'Type',
            },
        },
        skill_name: 'ChatOps',
        general: {
            title: 'Automation & Add-Ons',
            title_nav: 'Workflows & Commands',
            menu: {
                home: 'Home',
                commands_list: 'Commands',
                settings: 'Skill Settings',
            },
        },
        buttons: {
            create_command: 'Create command',
            finish: 'Finish',
            popover: {
                upgrade_plan:
                    'You need upgrade your plan to unblock command creation limits',
            },
        },
        custom_commands: {
            title: 'Commands',
            nav_title: 'Commands',
            description:
                'You can define commands that reply with predefined text or even create workflows connecting commands to your own system or apps.<br/><a href="https://www.dailybot.com/docs/commands" target="_blank">Learn to build</a> your own <strong>Command (HTTPS)</strong> endpoint.',
            empty_case_deny_text:
                'No command in sight! Once admins create Commands you’ll be able to see them.',
            title_filter: 'Filter by owner:',
            pl_search_input: 'Search by command name',
            commands_filter_type: {
                all_commands: 'All commands',
                created_by_me: 'Created by me',
            },
            commandsList: {
                title: 'Available commands',
                table_empty_case:
                    'There are not elements available to show with the current filter applied.',
                table: {
                    labels: {
                        command: 'Command',
                        help: 'Help',
                        type: 'Type',
                        availability: 'Availability',
                        availabilityOptions: {
                            channelAndPrivate: 'Channels and direct messages',
                            channelAndPrivate_hangouts: 'Spaces and direct messages',
                            private: 'Direct messages',
                        },
                        lastEdited: 'Last Edited',
                        lastEditedField: 'Last edited',
                        lastEditedFieldBy: {
                            user: 'by {user}',
                            you: 'by you',
                        },
                        actions: {
                            edit_command: 'Edit command',
                            edit_form: 'Edit form',
                            show_form: 'Show form',
                            show_command: 'Show command',
                            delete: 'Delete command',
                        },
                        createdBy: 'Created by {user}',
                        https: 'HTTPS command',
                    },
                    fields: {
                        typeOptions: {
                            text: 'Text',
                            sync_fetch: 'HTTPS',
                            async_push: 'HTTPS',
                            form: 'Form',
                            code_sandbox: 'Custom code',
                        },
                    },
                    search: {
                        placeholder: 'Search for a command',
                    },
                },
                modal_limit_template: {
                    title: 'Create commands without limits',
                    description:
                        'Your current plan lets you create up to 5 commands. Upgrade your plan to unlock these limits and open up new ways to operate in the chat.',
                    call_to_action: 'Upgrade Plan',
                },
            },
            tips: {
                '1': {
                    title: 'How can I use a command or shortcut?',
                    description: {
                        '1': 'Go to the chatbot and open the direct messages with DailyBot (or a channel) and type your command.',
                        '2': "<strong>As an example:</strong> if you create a command named “<strong>my brand assets</strong>”, go to the chat platform and type <strong>{'@'}DailyBot my brand assets</strong>.", // eslint-disable-line
                    },
                    items: {
                        '1': "Type <strong>{'@'}DailyBot commands</strong> to see a list of your own commands", // eslint-disable-line
                        '2': "Type <strong>{'@'}DailyBot extras</strong> to see DailyBot’s native commands", // eslint-disable-line
                    },
                },
                '2': {
                    link: 'See intro video',
                },
            },
        },
        directory: {
            title: 'Automation and Add-ons',
            nav_title: 'Built-in Add-Ons',
            description: {
                main: 'Run in-chat automations with DailyBot’s built-in commands and your own custom ones. {learnMore}',
                learn_more: 'Learn more',
            },
            lb_in_chat: 'View in-chat commands',
            modal_chat: {
                title: 'Try Commands in your chat',
                sub_title:
                    "Use the following commands to interact with the chatbot in DMs or in channels mentioning {'@'}DailyBot.", // eslint-disable-line
                body_modal:
                    "<ul><li>Type <span class='code'>commands</span>  to see all commands available.</li><li><span class='code'>commands me</span> to see all your custom commands.</li><li><span class='code'>commands addons</span> to see all pre-build commands (add-ons) from DailyBot (virtual coffee, pomodoro, etc)</li><li><span class='code'>commands forms</span> to see all your forms shortcuts.</li></ul>", // eslint-disable-line
                learn_more: 'Learn more about Commands/ChatOps.',
            },
        },
        settings: {
            title: 'Settings',
            description: 'Manage organization and personal settings',
            learn_about_commands: 'Learn about Commands',
            organization: {
                title: 'Organization settings',
                general: {
                    title: 'General',
                    allow_private_commands: 'Allow private commands (direct messaging)',
                },
            },
            user: {
                title: 'My Preferences',
                notifications: {
                    title: 'Reports about commands activity',
                    get_news_about_global_commands_by_email:
                        'Get news about global commands by email',
                },
            },
        },
        commandForm: {
            success: {
                createTitle: 'Done! I got a new command',
                updateTitle: 'Command updated',
                message_1: 'Type {intent} from your chat application.',
                create_another: 'Create another command',
            },
            form: {
                createTitle: 'Create Command',
                updateTitle: 'Update Command',
                subtitle: {
                    create: 'Create a command to use via chatbot',
                    update: 'Update the command to use via chatbot',
                },
                fields: {
                    intent: {
                        label: 'Command',
                        placeholder: 'Type a short text',
                        hint: 'Type this command in your DailyBot chat to trigger it.',
                    },
                    code: {
                        label: 'Build your own code (JavaScript)',
                        placeholder: 'Type your own code',
                    },
                    help: {
                        label: 'Command description',
                        placeholder: 'Type a description',
                        hint: 'A short message to explain what the command will do or how to use it.',
                    },
                    privacy: {
                        label: 'Who can use it?',
                        placeholder: 'Who can use it?',
                        hint: 'The command will be available for the selected team.',
                        options: {
                            everyone: 'Everyone',
                            owner: 'Me',
                        },
                    },
                    restricted_to_direct_message: {
                        label: 'Make it only available on direct message?',
                        hint: "Turn it OFF to make the command available in both direct message with {'@'}DailyBot and channels.", // eslint-disable-line
                        hint_hangouts:
                            "Turn it OFF to make the command available in both direct message with {'@'}DailyBot and spaces.", // eslint-disable-line
                    },
                    type: {
                        label: 'What will the command do?',
                        placeholder: 'What will the command do?',
                        hint: 'Select how you want the command to work.',
                        options: {
                            text: 'Respond with predefined text',
                            sync_fetch: 'Make a request to an API (synchronous)',
                            async_push: 'Respond later, with asynchronous API (Async)',
                            form: 'Trigger a Form',
                            code_sandbox: 'Run Custom Code',
                        },
                    },
                    http_method_type: {
                        label: 'What is the type of HTTP method?',
                        placeholder: 'HTTP method type',
                    },
                    response: {
                        label: 'Text response',
                        placeholder:
                            'Type the response that DailyBot will give when the command is triggered.',
                    },
                    url: {
                        label: 'What is the endpoint URL? (HTTPS)',
                        placeholder: 'https://',
                        hint: 'Your HTTP POST endpoint should respond within 10 seconds with JSON or Text.',
                        hintExtra: 'View signature.',
                    },
                    url_response_param: {
                        label: 'JSON param (optional)',
                        placeholder: 'jsonFieldName',
                        hint: 'Optional, only if you want to return data contained in a given field.',
                    },
                    signature: {
                        label: 'Signature',
                        hint: 'Request header "X-DailyBot-Signature" will be sent to the endpoint URL.',
                        successAction: 'Signature copied to clipboard!',
                    },
                    form: {
                        label: 'Choose the form',
                        placeholder: 'Choose the form',
                    },
                },
                errors: {
                    intent_duplicated_or_public_intent:
                        'You organization already has a command (intent) with this name, or this name is reserved by DailyBot.',
                    intent_is_a_reserved_word: 'This name is reserved by DailyBot.',
                    public_commands_can_not_be_updated:
                        "Public commands can't be updated.", // eslint-disable-line
                    public_commands_can_not_be_deleted:
                        "Public commands can't be deleted.", // eslint-disable-line
                },
                button: {
                    create: 'Save',
                    create_and_finish: 'Save & quit',
                    update: 'Update',
                    update_and_finish: 'Update & quit',
                    delete: 'Delete command',
                    test: 'Test command',
                    toggle: {
                        code_editor_view: 'Open Code Editor',
                        command_config_view: 'Command Config View',
                        test_command_view: 'Test Command View',
                    },
                },
            },
            danger_zone: {
                label: 'Delete this Command',
                hint: 'Deleting the command will not be able to recover the data, it is irreversible.',
            },
            debugCommand: {
                chatHint: {
                    hint: 'Type your command name',
                    hintWithParams:
                        'Type your command name followed by optional parameters',
                    example: 'Example: `{intent}`',
                    exampleWithParams: 'Example: `{intent} param1 param2`',
                    params: 'param1 param2',
                },
                botTyping: 'is typing...',
                send: 'Send',
                botResponse: {
                    form: {
                        message: {
                            directMessage:
                                'Ok, here’s the form: <b>{formName}</b>. Remember you can also fill it out <a href="{url}" target="_blank">on the web</a>.',
                            channel: 'Ok, here’s the form: <b>{formName}</b>.',
                        },
                        buttonText: 'Fill out form',
                    },
                    try_it_on_platform: {
                        message:
                            'See the interaction result on <b>{platform}</b> direct message',
                        buttonText: 'Open {platform}',
                    },
                },
                extraActions: {
                    showRawOutput: 'Show raw output',
                    expandChat: 'Expand chat',
                    expandCodeEditor: 'Expand code editor',
                    openCodeEditor: 'Open code editor',
                    customCommandEditor: 'Custom Command Editor',
                    lb_test_code: 'Test Chat Simulator — ',
                    ht_test_code:
                        'any changes made during testing will be automatically saved and deployed',
                    tp_code: 'Enlarge Editor',
                    tp_chat: 'Enlarge Test Chat Simulator',
                    tryItOnPlatform: 'Try it on {platform}',
                },
            },
        },
        delete: {
            title: 'Please confirm',
            message: 'Are you sure you want to permanently delete this command?',
            toast_message: 'Command deleted',
        },
        wizard: {
            make_simple_shortcuts: 'Make simple shortcuts',
            customize_experience: 'Customize your chat experience',
            connect_apps: 'Connect with your apps',
        },
    },
}