export default {
    general: {
        tour: {
            slack: 'How to navigate DailyBot? - Slack',
            msteams: 'How to navigate DailyBot? - Microsoft Teams',
            discord: 'How to navigate DailyBot? - Discord',
            hangouts: 'How to navigate DailyBot? - Hangouts',
        },
        errors: {
            unexpected:
                'Something went wrong with the server :(, please try again later.',
            invalid_date: 'Invalid date, you must enter a valid date.',
            permission_denied: 'You do not have permission to perform this action.',
            delete_organization: {
                organization_name_not_matched: 'The organization name should match',
                organization_name_missing: 'Organization name missing',
                already_been_scheduled_for_deletion:
                    'Organization has already scheduled for deletion',
            },
        },
        table: {
            search_filter: {
                order_by: 'Sort by: ',
                filter_by: 'Filter by: ',
            },
        },
        flash: {
            update_data: 'Data saved',
            user_deactivated: 'User deactivated',
            error_on_response: 'There was an error, please try again',
            error_on_update_rol: "You can't update yourself your role", // eslint-disable-line
            member_approved: 'Done! Member approved',
            member_declined: 'Member request declined',
            new_user_in_not_plan_free:
                'Member invited! New active members may affect your subscription fee.',
            expired_session: 'Your session has expired',
            new_version_was_released: {
                message:
                    "<div class='reload-message-main-content'><span class='img-rocket'></span> We just released a new version!</div><span class='reload-page'>Reload page</span>", // eslint-disable-line
            },
            has_achieved_max_seats_allowed:
                'Your plan only allows you to add {count} member. | Your plan only allows you to add {count} members.',
            many_request_short_time: 'Too many requests. Please try again later.',
            dont_have_enough_permissions: "You don't have permission to this action", // eslint-disable-line
        },
        actions: {
            copy_message: 'It was copied to clipboard.',
        },
        shortcuts: {
            command_bar: {
                mac: 'Search & actions (⌘ + K)',
                others: 'Search & actions (Ctrl + K)',
            },
        },
        platforms: {
            slack: {
                channel: 'Channel',
                private_channel: 'Private channel',
                group: 'Group',
            },
            msteams: {
                channel: 'Channel',
                private_channel: 'Private channel',
            },
            hangouts: {
                channel: 'Space',
                private_channel: 'Private channel',
            },
            discord: {
                channel: 'Channel',
                private_channel: 'Private channel',
            },
        },
        tooltip_video: 'Click here to watch a video tutorial',
        new: 'New!',
        inactive: 'Inactive',
        team: 'Team',
        add_team: 'Create team',
        plan: 'Plan',
        configuration: 'Settings',
        configuration_teams: 'Teams',
        captcha_form_terms_message:
            'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.',
        release_notes: 'Product Updates ✨',
        logout: 'Log out',
        loading: 'Loading',
        login_with_integration: 'Sign in with {0}',
        add_to_integration: 'Add to {0}',
        signup_with_integration: 'Sign up with {0}',
        members: 'Members',
        active_members: '{amount} active members',
        members_pending: 'Pending for approval',
        new_members_pending_navtitle: 'Members pending for approval',
        signup_with_slack: 'Add to Slack',
        signup_with_hangouts: 'Add to Google Chat',
        signup_with_msteams: 'Add to Microsoft Teams',
        more_resources_menu: 'More resources',
        view_more_menu: 'View more',
        features: 'Features',
        feature_settings: 'Manage features',
        user_feature_settings: 'My features settings',
        user_features: {
            title: 'My Preferences',
        },
        manage_features: {
            new_title: 'Manage features',
            subtitle:
                // eslint-disable-next-line quotes
                "Customize your organization's workspace: Toggle and fine-tune tools to match your preferences.",
            manage: 'Manage',
            discover: 'Discover',
            personal_setting: 'Personal settings',
            disabled_plan: 'Upgrade your plan to customize features',
            cancel: 'No, discard',
            accept_disable: 'Yes, deactivate',
            accept_enable: 'Yes, activate',
            ai: {
                title: 'AI Assistant',
                user_preferences: 'My AI Assistant Preferences',
                description:
                    'Experience an AI-powered chat assistant, designed for smarter conversations.',
                manage: {
                    title: 'Manage AI Assistant',
                    description:
                        'Automate messages and emails effortlessly using DailyBot. {link}',
                    description_link: 'How it works?',
                },
                updateModal: {
                    title_off: 'Deactivate AI Assistant Feature',
                    title_on: 'Activate AI Assistant Feature',
                    description_on:
                        'This action will activate the AI Assistant feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the AI Assistant feature for all members of the organization, including all AI Assistant that have been created. Are you sure?',
                },
            },
            followups: {
                title: 'Check-ins',
                user_preferences: 'My Check-ins Preferences',
                description:
                    'Automated questions that you can set for your team on a regular basis.',
                manage: {
                    title: 'Manage Check-ins',
                    description:
                        'Automated questions that you can set for your team on a regular basis. {link}',
                    description_link: 'Go to Check-ins.',
                    enable_label: 'Enable Check-ins feature for the entire organization',
                    enable_description:
                        'Turn off to disable Check-ins organization-wide. Sidebar and chatbot access will be disabled.',
                    access: {
                        title: 'Manage feature access for Members',
                        description:
                            'All admins and managers will have access to this feature. Use the toggles below to determine the visibility settings for users with the role of “Member”. {learnMore}',
                        create: 'Create Check-ins',
                        response: 'Fill out Check-ins',
                        access_web: 'Access to the Check-ins section on the WebApp',
                    },
                },
                updateModal: {
                    title_off: 'Deactivate Check-ins Feature',
                    title_on: 'Activate Check-ins Feature',
                    description_on:
                        'This action will activate the Check-ins feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Check-ins feature for all members of the organization, including all Check-ins that have been created. Are you sure?',
                },
            },
            forms: {
                title: 'Forms',
                description:
                    'Lets you collect data from your team or external users on demand.',
                manage: {
                    title: 'Manage Forms',
                    description:
                        'Lets you collect data from your team or external users on demand. {link}',
                    description_link: 'Go to Forms.',
                    enable_label: 'Enable Forms feature for the entire organization',
                    enable_description:
                        'Turn off to disable Forms organization-wide. Sidebar and chatbot access will be disabled.',
                    access: {
                        title: 'Manage feature access for Members',
                        description:
                            'All admins and managers will have access to this feature. Use the toggles below to determine the visibility settings for users with the role of “Member”. {learnMore}',
                        create: 'Create Forms',
                        response: 'Fill out Forms',
                        access_web: 'Access to the Forms section on the WebApp',
                    },
                },
                updateModal: {
                    title_off: 'Deactivate Forms Feature',
                    title_on: 'Activate Forms Feature',
                    description_on:
                        'This action will activate the Form feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Form feature for all members of the organization, including all Forms that have been created. Are you sure?',
                },
            },
            kudos: {
                title: 'Kudos',
                user_preferences: 'My Kudos Preferences',
                description:
                    // eslint-disable-next-line quotes
                    "Lets you recognize a teammate's work and make it public in a specific channel.",
                manage: {
                    title: 'Manage Kudos',
                    description:
                        // eslint-disable-next-line quotes
                        "Lets you recognize a teammate's work and make it public in a specific channel. {link}",
                    description_hangouts:
                        // eslint-disable-next-line quotes
                        "Lets you recognize a teammate's work and make it public in a specific space. {link}",
                    description_link: 'Go to Kudos.',
                    enable_label: 'Enable Kudos feature for the entire organization',
                    enable_description:
                        'Turn off to disable Kudos organization-wide. Sidebar and chatbot access will be disabled.',
                    access: {
                        title: 'Manage feature access for Members',
                        description:
                            'All admins and managers will have access to this feature. Use the toggles below to determine the visibility settings for users with the role of “Member”. {learnMore}',
                        create: 'Give kudos',
                        access_web: 'Access to the Kudos section on the WebApp',
                    },
                },
                updateModal: {
                    title_off: 'Deactivate Kudos Feature',
                    title_on: 'Activate Kudos Feature',
                    description_on:
                        'This action will activate the Kudos feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Kudos feature for all members of the organization, including all Kudos that have been created. Are you sure?',
                },
            },
            workflows: {
                title: 'Workflows',
                description:
                    'Automate messages and emails effortlessly using DailyBot.',
                manage: {
                    title: 'Manage Workflows',
                    description:
                        'Automate messages and emails effortlessly using DailyBot. {link}',
                    description_link: 'Go to Workflows.',
                    enable_label: 'Enable Workflows feature for the entire organization',
                    enable_description:
                        'Toggle Off to deactivate Workflows organization-wide; WebApp and bot access disabled.',
                    access: {
                        title: 'Manage feature access for Members',
                        description:
                            'All admins and managers will have access to this feature. Use the toggles below to determine the visibility settings for users with the role of “Member”. {learnMore}',
                        create: 'Create workflows',
                        access_web: 'Access to the Workflows section on the WebApp',
                    },
                },
                updateModal: {
                    title_off: 'Deactivate Workflows Feature',
                    title_on: 'Activate Workflows Feature',
                    description_on:
                        'This action will activate the Workflows feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Workflows feature for all members of the organization, including all Workflows that have been created. Are you sure?',
                    cancel: 'No, discard',
                    accept_disable: 'Yes, disable',
                    accept_enable: 'Yes, enable',
                },
            },
            mood: {
                title: 'Team mood',
                description: 'Team mood tracker for enhanced collaboration.',
                manage: {
                    title: 'Manage Team mood',
                    description: 'Team sentiment tracker for enhanced collaboration.',
                    description_link: 'Go to Workflows.',
                    enable_label:
                        'Enable motivation question for the entire organization',
                    enable_description:
                        'If enabled, DailyBot asks each person about their mood and motivation, every week, and anonymously. You can see a chart with results.',
                    access: {
                        title: 'Manage feature access for Members',
                        description:
                            'All admins and managers will have access to this feature. Use the toggles below to determine the visibility settings for users with the role of “Member”. {learnMore}',
                        create: 'Create workflows',
                        access_web: 'Access to the Workflows section on the WebApp',
                    },
                },
                updateModal: {
                    title_off: 'Deactivate Team Mood Feature',
                    title_on: 'Activate Team Mood Feature',
                    description_on:
                        'This action will activate the Team Mood feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Team Mood feature for all members of the organization. Are you sure?',
                },
            },
            commands: {
                title: 'Custom commands',
                description:
                    'The right tool to create quick in-chat shortcuts - automations.',
                manage: {
                    title: 'Manage Commands',
                    description:
                        'The right tool to create quick in-chat shortcuts - automations. {link}',
                    description_link: 'Go to Commands.',
                    enable_label: 'Enable Commands feature for the entire organization',
                    enable_description:
                        'Toggle Off to deactivate Custom Commands organization-wide; WebApp and bot access disabled.',
                    access: {
                        title: 'Manage feature access for Members',
                        description:
                            'All admins and managers will have access to this feature. Use the toggles below to determine the visibility settings for users with the role of “Member”. {learnMore}',
                        create: 'Create commands',
                        access_web: 'Access to the Commands section on the WebApp',
                        usage: 'Use commands on chat',
                    },
                },
                updateModal: {
                    title_off: 'Deactivate Commands Feature',
                    title_on: 'Activate Commands Feature',
                    description_on:
                        'This action will activate the Commands feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Commands feature for all members of the organization, including all Commands that have been created. Are you sure?',
                },
            },
            virtualcoffee: {
                title: 'Virtual coffee',
                description: 'Have random 1:1 meetings with your teammates.',
                updateModal: {
                    title_off: 'Deactivate Virtual coffee Feature',
                    title_on: 'Activate Virtual coffee Feature',
                    description_on:
                        'This action will activate the Virtual coffee feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Virtual coffee feature for all members of the organization, including all Virtual coffee that have been activated. Are you sure?',
                },
            },
            watercooler: {
                title: 'Watercooler',
                description: 'Set aside some time for casual conversations.',
                updateModal: {
                    title_off: 'Deactivate Watercooler Feature',
                    title_on: 'Activate Watercooler Feature',
                    description_on:
                        'This action will activate the Watercooler feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Watercooler feature for all members of the organization, including all Watercooler that have been activated. Are you sure?',
                },
            },
            birthday: {
                title: 'Birthday',
                description:
                    'Celebrate birthdays at work with personal reminders and team notifications in chat.',
                updateModal: {
                    title_off: 'Deactivate Birthday Feature',
                    title_on: 'Activate Birthday Feature',
                    description_on:
                        'This action will activate the Birthday feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Birthday feature for all members of the organization, including all Birthday that have been activated. Are you sure?',
                },
            },
            match: {
                title: 'Match',
                description:
                    'Automate 1:1 intros between the team and a new collaborator.',
                updateModal: {
                    title_off: 'Deactivate Match Feature',
                    title_on: 'Activate Match Feature',
                    description_on:
                        'This action will activate the Match feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Match feature for all members of the organization, including all Match that have been activated. Are you sure?',
                },
            },
            pomodoro: {
                title: 'Pomodoro',
                description: 'Run pomodoro sessions in chat with custom alerts.',
                updateModal: {
                    title_off: 'Deactivate Pomodoro Feature',
                    title_on: 'Activate Pomodoro Feature',
                    description_on:
                        'This action will activate the Pomodoro feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Pomodoro feature for all members of the organization, including all Pomodoro that have been activated. Are you sure?',
                },
            },
            countdown: {
                title: 'Countdown',
                description: 'Set a daily countdown to an important milestone.',
                updateModal: {
                    title_off: 'Deactivate Countdown Feature',
                    title_on: 'Activate Countdown Feature',
                    description_on:
                        'This action will activate the Countdown feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Countdown feature for all members of the organization, including all Countdown that have been activated. Are you sure?',
                },
            },
            virtualcommute: {
                title: 'Virtual commute',
                description: 'Set a time to disconnect from work.',
                updateModal: {
                    title_off: 'Deactivate Virtual Commute Feature',
                    title_on: 'Activate Virtual Commute Feature',
                    description_on:
                        'This action will activate the Virtual Commute feature for all organization members, including chatbot interaction. Are you sure?',
                    description_off:
                        'This action will deactivate the Virtual Commute feature for all members of the organization, including all Virtual Commute that have been activated. Are you sure?',
                },
            },
        },
        slide_toggle_dark_mode: 'Dark mode <span class="mg-lf-4">🌙</span>',
        change_organization: {
            action: 'Change organization',
            modal: {
                title: 'Change your active organization',
                active_organization: 'Your active organization',
                subtitle:
                    'These are DailyBot organizations connected to your same chat application',
                create_or_join_to_organization: 'See more options',
            },
        },
        apps: {
            followups: 'Check-ins',
            kudos: 'Kudos',
        },
        skills: {
            checkin: 'Check-In | Check-Ins',
            kudos: 'Kudos | Kudos',
            form: 'Form | Forms',
            command: 'Command | Commands',
            mood: 'Mood | Mood',
            virtualcoffee: 'Virtual Coffee | Virtual Coffees',
            watercooler: 'watercooler | watercoolers',
            birthday: 'Birthday | Birthdays',
            virtualcommute: 'Virtual Commute | Virtual Commutes',
            pomodoro: 'Pomodoro | Pomodoros',
            assistant: 'DailyBot AI',
        },
        skills_soon: 'More Skills',
        tp_skills_coming_soon: {
            title: 'Make simple shortcuts',
            subtitle: 'Coming soon!\n',
            message: `
          <p>The <strong>Commands  Skill</strong> will let you automate repetitive actions or request.</p>
          <p>The bot can respond with a simple text or data from your own system or apps.</p>
        `,
        },
        tp_skills_soon_mobile: `DailyBot is much more than check-ins. Soon you'll find here new Skills.
      DailyBot will be helping you with more tasks of your workflow.`,
        teams: 'Teams',
        preferences: 'My account',
        upgrade_plan: 'Upgrade now',
        manage_plan: 'Manage plan',
        organization: 'Organization settings',
        integrations_settings: 'API & integrations',
        users: 'Members',
        validation: {
            required: 'Complete this field',
            email:
                "This email is not valid, please enter a valid email address (user{'@'}domain.com).", // eslint-disable-line
            password: 'At least {min} chars length',
            url: "It isn't a valid URL", // eslint-disable-line
            minLength: 'This field requires at least {min} characters',
            minLengthPassword: 'The password requires at least {min} characters.',
            shouldNotBeEmpty: 'The field should not be empty',
            urlShouldBeValidAndSecure: 'The field url should be valid and secure',
            maxLength: 'This field cannot be longer than {maxLength} characters',
            numeric: 'This field should be numeric',
        },
        events: {
            email_sent: 'Email with instructions sent',
            email_error: 'Verify your email address',
        },
        en: 'English',
        es: 'Español',
        pt: 'Português',
        name_plan: "<span class='name-plan'>{name}</span> Plan", // eslint-disable-line
        trial: {
            trial_left:
                '{days} days left of {plan} trial. Upgrade to keep enjoying DailyBot with no limits.',
            trial_final_day: 'Trial ends today',
            upgrade_plan: 'Upgrade plan',
        },
        upgrade_notification: {
            title: 'Free plan. Unlock features and limits',
            upgrade_plan: 'Upgrade plan',
        },
        modals: {
            discard_changes: {
                title: 'Are you sure?',
                message: "Your changes won't be saved.", // eslint-disable-line
                btn_confirm: 'Yes, take me out',
                link_goback: 'No, continue editing',
            },
            invite_gchat_members: {
                gmail_organization: {
                    title: 'Invite your team via email',
                },
                title: 'Invite your team via email to {organization}',
                subtitle: 'They must be members of your G-Suite organization',
                description: 'Or share this link with your team',
                btn_invite_people: 'Send invitation',
                btn_invite_people_loading: 'Sending invites…',
                btn_invite_people_success: 'Invitations have been sent correctly',
                errors: {
                    already_sended:
                        'The invitation has already been sent to one of the listed users.',
                    adding_duplicate: 'You are trying to add the same email twice',
                },
            },
            skill_intro_modal: {
                title: 'Intro to {skill}',
                subtitle: 'Let’s watch a 1-minute video to get you started.',
            },
        },
        quickly_actions_popmenu: {
            nav_title: 'Quick actions',
            links: {
                create_checkin: 'Create check-in',
                create_template: 'Create template',
                create_command: 'Create shortcut/command',
                create_form: 'Create form',
                create_teams: 'Create team',
                create_workflows: 'Create workflow',
                give_kudos: 'Give kudos',
                invite_users: 'Invite members',
                create_use_case: 'Explore kits for your team’s priorities ✨',
            },
        },
        industry_types: {
            engineering: 'Engineering',
            product_management: 'Product Management',
            project_management: 'Project / Program Management',
            design: 'Design',
            marketing_growth: 'Marketing / Growth',
            operations: 'Operations / Facilities',
            customer_success: 'Customer support & success',
            humans_resources: 'Human Resources / People',
            it: 'IT',
            sales: 'Sales / Business Dev',
            finance: 'Finance',
            legal: 'Legal',
            research: 'Research / Training',
            advertising_marketing: 'Advertising, Marketing, and PR',
            banking_final: 'Banking, Financial services and Insurance',
            education_training: 'Education and Training',
            healthcare: 'Healthcare',
            telecommunications: 'IT & Telecommunications',
            manufacturing: 'Manufacturing',
            media_and_entertainment: 'Media & Entertainment',
            retail_and_ecommerce: 'Retail & E-commerce',
            software: 'Software',
            others: 'Others',
        },
        department_types: {
            engineering: 'Engineering',
            product_management: 'Product Management',
            project_management: 'Project / Program Management',
            design: 'Design',
            marketing_growth: 'Marketing / Growth',
            operations: 'Operations / Facilities',
            customer_success: 'Customer support & success',
            humans_resources: 'Human Resources / People',
            it: 'IT',
            sales: 'Sales / Business Dev',
            finance: 'Finance',
            legal: 'Legal',
            research: 'Research / Training',
            communication: 'Communications / PR',
            others: 'Others',
        },
        terms_link: 'Terms of service',
        privacy_link: 'Privacy policy',
    },
    dailyReport: {
        activitySummary: {
            title: 'Activity summary',
            integrationsTitle: '{total} {integrationName} Updates',
        },
    },
    header: {
        home: 'Home',
        notification: {
            LIMIT_FREE_DAILIES: {
                text: "You've reached the monthly limit of {limit} check-in responses. {link}", // eslint-disable-line
                link: 'Upgrade plan.',
            },
            UNPAID: {
                text: 'We couldn’t renew your DailyBot subscription. {0} by {1} to avoid service interruption.',
                link: 'Please update your payment method',
            },
            organization_pending_to_delete: {
                text: 'Your Organization data will be deleted. If you need to stop this process, please {0}.',
                link: 'contact our support team',
            },
            NOT_EXIST_CHANNELS: {
                text: "Important: Add DailyBot to a team in your Microsoft Teams app. Already done? {0} {'|'} {1}.", // eslint-disable-line
                link: 'Learn how',
                reload: 'Reload',
            },
            USER_WITHOUT_CHAT_INTEGRATION: {
                text: "Find DailyBot in Google Chat before you can start using it from the chat. Already done? {reload} {'|'} {link}", // eslint-disable-line
                reload: 'Reload',
                link: 'Learn how',
            },
            GMAIL_SUPPORT: {
                text: '🚀 <b>New: Gmail Support!</b> Collaborate seamlessly across platforms with DailyBot! 👉',
                link: 'Live on Product Hunt',
            },
        },
    },
    empty_skills: {
        message:
            'The administrator has not finished the setup for this organization.',
    },
    member_table: {
        add_type_action: {
            filter: 'Filter',
            by_email: 'Add user by email',
        },
        user_name: 'User',
        last_activity: 'Last activity',
        username: 'Username',
        avatar: 'Profile photo',
        active: 'Active',
        total_members: '{count} members',
        total_active_members: '{count} active members',
        email: 'Email address',
        state: 'Status',
        role: 'Role',
        timezone: 'Time zone',
        difference_up: '{hour} hours ahead',
        difference_down: '{hour} hours behind',
        difference_none: 'Same as your time',
        lb_hour_init: 'Starts work at {time}',
        lb_hour_init_strong: '<strong>Starts work</strong> at {time}',
        actions: 'Actions',
        appoint_admin: 'Add administrator role',
        remove_admin: 'Remove administrator role',
        remove: 'Delete',
        status: 'Billing Status',
        inactive: 'Inactive',
        requested_on: '· Requested {requested_time_text}',
        tp_roles: {
            title: 'Role',
            admin: {
                title: 'Org Administrator',
                content: 'Gives full admin permissions over the entire organization.',
            },
            manager: {
                title: 'Teams Manager',
                content:
                    'Gives permissions to create/configure any teams in the organization.',
            },
            team_admin: {
                title: 'Team admin',
                content: 'Gives permissions to configure specific teams.',
            },
            read_more: 'Read more',
        },
        button: {
            approve: 'Approve',
            decline: 'Decline',
        },
        invite_by_email: {
            success: 'The invite was sent!',
            error: "The invite couldn't be sent", // eslint-disable-line
            error_email_exist: 'This invite was previously sent',
        },
        invite_members_msteams: {
            text: '⚠️ ️Add DailyBot to a team in your Microsoft Teams app. {0}',
            link: 'Learn how',
        },
        search: {
            placeholder: 'Search for a member of the organization',
        },
        edit_external_username: 'Type the member’s username',
    },
    auth_connection: {
        common: {
            signing: 'Signing in…',
            authentication_message: 'Take a deep breath',
        },
        common_errors: {
            user_error: {
                title: 'Access Error',
            },
            btn_go_back: 'Go back',
            restricted_access: {
                title: 'Almost there!',
                message: {
                    one_admin:
                        'Great, you just joined the organization but an administrator must approve your membership before you can use DailyBot. In case you want to contact the admin: {admins}.',
                    many_admin:
                        'Great, you just joined the organization but an administrator must approve your membership before you can use DailyBot. In case you want to contact the admins: {admins}.',
                },
            },
            internal_error: {
                title: 'Our server is temporarily unavailable',
                message:
                    'There was an error on our side, sorry. Please try again or wait a few minutes if the issue persists.',
                btn_go_back: 'Try again',
            },
            token_expired: {
                title: 'Link expired',
                message:
                    'The link to open DailyBot got expired, please try again with a new link.',
            },
            token_not_valid: {
                title: 'Sorry, this link has expired',
                message:
                    'The link is no longer available. Trying to sign up or login? Get a new link by sending a private message to DailyBot with the word: dashboard',
            },
            organization_does_not_exist: {
                title: 'Trying to sign up?', // eslint-disable-line
                message:
                    'Redirecting for signup in 5 seconds. Already a member? Check the correct workspace.',
                btn_go_back: 'Go back',
            },
            user_does_not_exist: {
                title: 'You must register',
                message: "Your account doesn't exist, Please go back to sign up first", // eslint-disable-line
                btn_go_back: 'Go back to sign up',
            },
            platform_or_external_ids_not_valid: {
                title: "Organization doesn't exist.", // eslint-disable-line
                message: 'Please create an account first.',
            },
            bot_account_inactive: {
                title: 'Please re-connect Slack',
                message:
                    'DailyBot was revoked from your Slack workspace, but there was an issue during the re-authorization process.',
                btn_go_back: 'Try again',
            },
            missing_bot_permissions: {
                title: 'Mising bot permissions',
                message:
                    "Please make sure to check all the bot's permissions. the following permissions were not checked:", // eslint-disable-line
                message_support: {
                    base: 'To learn more about these permissions {PermissionsLink}',
                    Permissions_link: 'check it out this',
                },
                btn_go_back: 'Try again',
            },
        },
        slack: {
            user_access_denied: {
                title: 'The Slack connection failed',
                message:
                    'You may have exceeded the limit of authorized Slack apps, or there was another Authentication error, please try again.',
                btn_text: 'Try again',
            },
            user_aborted_process: {
                title: 'The integration was not completed',
                message:
                    'The process was aborted before we could integrate with your chat, try again if it was by mistake. If you have privacy concerns, read more about data permissions and our commitment to security here.',
                btn_text: 'Try again',
            },
            state_session_has_expired: {
                title: 'The authentication token expired',
                message:
                    'We couldn’t authenticate you in a reasonable time so stop this process. Try again if you still want to continue.',
                btn_text: 'Try again',
            },
            cannot_install_an_org_installed_app: {
                title: 'Error while installing the app',
                message:
                    'This can happen if you don’t have enough permissions to install the app. If that’s the case, see how you can complete the process with the help of an admin.',
                btn_text: 'Continue',
            },
            token_revoked: {
                title: 'The app could not be found',
                message:
                    'DailyBot has been removed from your workspace. Install the app again.',
            },
            token_expired: {
                title: 'The authentication token expired',
                message:
                    'We couldn’t authenticate you in a reasonable time so stop this process. Try again if you still want to continue.',
                btn_text: 'Try again',
            },
            account_inactive: {
                title: 'You don’t have an active account in your workspace',
                message:
                    "We couldn't continue because your Slack account is currently inactive. Try reactivating it or using a different account to continue.", // eslint-disable-line
                btn_text: 'Go back',
            },
            no_permission: {
                title: 'No tienes permiso para continuar',
                message:
                    'No tienes suficientes permisos para continuar. Pero no te preocupes — mira cómo puedes completar el proceso con la ayuda de un administrador.',
                btn_text: 'Continuar',
            },
            ekm_access_denied: {
                title: 'You cannot sign in via Slack',
                message:
                    'An admin has deactivated signing in via Slack. Try email and password to continue.',
                btn_text: 'Go back',
            },
            missing_scope: {
                title: 'We don’t have enough permissions to continue',
                message:
                    'We don’t have enough permissions to continue. But don’t fret — see how you can complete the process with the help of an admin.',
                btn_text: 'Continue',
            },
            team_added_to_org: {
                title: 'You cannot continue until this workspace is fully migrated',
                message:
                    'The workspace associated with your request is currently undergoing migration to an Enterprise Organization. Operations in the platform will be intermittently unavailable until the transition is complete.',
                btn_text: 'Go back',
            },
            two_factor_setup_required: {
                title: 'Activate 2-factor authentication to continue',
                message:
                    "If you're a member of more than one Slack workspace, you’ll need to set up 2FA for each account separately to sign in. If you’re having problems, contact your workspace admin for help.", // eslint-disable-line
                btn_text: 'Go back',
            },
            service_unavailable: {
                title: 'Sign in via Slack is temporarily unavailable',
                message:
                    'There was an error while trying to complete your request. Please try again or wait a few minutes if the issue persists.',
                btn_text: 'Try again',
            },
            ratelimited: {
                title: 'Sign in via Slack is temporarily unavailable',
                message:
                    'There was an error while trying to complete your request. Please try again or wait a few minutes if the issue persists.',
                btn_text: 'Try again',
            },
            accesslimited: {
                title: 'Sign in via Slack is temporarily unavailable',
                message:
                    'There was an error while trying to complete your request. Please try again or wait a few minutes if the issue persists.',
                btn_text: 'Try again',
            },
            fatal_error: {
                title: 'Slack has an internal error',
                message:
                    'There was an error while trying to complete your request. Please try again or wait a few minutes if the issue persists.',
                btn_text: 'Try again',
            },
            internal_error: {
                title: 'Slack has an internal error',
                message:
                    'There was an error while trying to complete your request. Please try again or wait a few minutes if the issue persists.',
                btn_text: 'Try again',
            },
            user_not_found: {
                title: 'User not found in Slack',
                message:
                    "We couldn't find your user in Slack. Contact the workspace admin.", // eslint-disable-line
                btn_text: 'Go back',
            },
            user_not_visible: {
                title: 'User not visible in Slack',
                message:
                    "We couldn't find your user in Slack. Contact the workspace admin.", // eslint-disable-line
                btn_text: 'Go back',
            },
            too_many_users: {
                title: 'Unexpected error from Slack',
                message:
                    'We received an unexpected error from Slack: “Too many users”, please try again.',
                btn_text: 'Go back',
            },
            org_login_required: {
                title: 'You cannot continue until this workspace is fully migrated',
                message:
                    'The workspace is undergoing an enterprise migration and will not be available until migration is complete.',
                btn_text: 'Go back',
            },
            user_disabled: {
                title: 'User disabled :(',
                message:
                    'This user has been disabled for {organizationName} organization at Slack.',
            },
            internal_error_system_with_slack: {
                title: "We couldn't complete your request", // eslint-disable-line
                message:
                    'There was an error on our side, sorry. Please try again or wait a few minutes if the issue persists.',
                btn_text: 'Try again',
            },
            // Temporally. The code is returned when the org has installed more than 10 apps
            invalid_code: {
                title: 'Error installing DailyBot in your workspace',
                message:
                    'You may have exceeded the limit of authorized Slack apps, or there was another Authentication error, please try again.',
                btn_text: 'Try again',
            },
        },
        hangouts: {
            user_access_denied: {
                title: 'Error connecting with Google :(',
                message:
                    'We detected an error during the Google auth process, please try again.',
            },
            user_disabled: {
                title: 'User disabled :(',
                message:
                    'This user has been disabled for {organizationName} organization at Google Chat.',
            },
            is_not_a_gsuite_account: {
                title: 'A G Suite account is required',
                message:
                    'To connect DailyBot with Google Chat, you should provide a G Suite Account',
            },
            state_session_has_expired: {
                title: 'The authentication token expired',
                message:
                    'We couldn’t authenticate you in a reasonable time so stop this process. Try again if you still want to continue.',
                btn_text: 'Try again',
            },
        },
        msteams: {
            user_access_denied: {
                title: 'Error connecting with Microsoft Teams :(',
                message:
                    'We detected an error during the Microsoft auth process, please try again.',
            },
            user_disabled: {
                title: 'User disabled :(',
                message:
                    'This user has been disabled for {organizationName} organization at Microsoft Teams.',
            },
            state_session_has_expired: {
                title: 'The authentication token expired',
                message:
                    'We couldn’t authenticate you in a reasonable time so stop this process. Try again if you still want to continue.',
                btn_text: 'Try again',
            },
        },
        discord: {
            user_access_denied: {
                title: 'Error connecting with Discord :(',
                message:
                    'We detected an error during the Discord auth process, please try again.',
            },
            state_session_has_expired: {
                title: 'The authentication token expired',
                message:
                    'We couldn’t authenticate you in a reasonable time so stop this process. Try again if you still want to continue.',
                btn_text: 'Try again',
            },
        },
    },
    component: {
        time_picker: {
            lb_today: 'Today',
            lb_yesterday: 'Yesterday',
            lb_tomorrow: 'Tomorrow',
            lb_previous_week: 'Previous week',
            lb_next_week: 'Next week',
        },
        slide_toggle: {
            active: 'Yes',
            disabled: 'No',
        },
        profile_image: {
            update: 'Update',
            save: 'Save',
            cancel: 'Cancel',
        },
        notification_modal: {
            no_cancel: 'No, cancel',
            yes_continue: 'Yes, continue',
            send: 'Send',
            cancel: 'Cancel',
            yes_delete: 'Yes, delete',
            ok: 'Ok',
            yes: 'Yes',
            no: 'No',
        },
        paginator_table: {
            of: 'of',
        },
        stepper_component: {
            of: 'Step {current} of {totals}',
        },
        picker_date_range: {
            lb_from: 'From',
            lb_until: 'Until',
            lb_select_date: 'Choose date',
            lb_prev: 'Go to the previous report',
            lb_next: 'Go to the next report',
        },
        days_of_week_short: {
            sunday: 'Sun',
            monday: 'Mon',
            tuesday: 'Tue',
            wednesday: 'Wed',
            thursday: 'Thu',
            friday: 'Fri',
            saturday: 'Sat',
        },
        days_of_week_long: {
            sunday: 'Sunday',
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday',
        },
        days: '{from} to {to}',
        loading: {
            label: 'Loading',
        },
        find_add_member: {
            lb_synced_channels:
                'Members synced from channel: {channels} | Members synced from channels: {channels}',
            lb_synced_automatically_channels:
                'Members synced automatically from channel: {channels} | Members synced automatically from channels: {channels}',
            lk_update_channels: 'Change synced channels',
            lk_updating_channels: 'Syncing members from channels...',
            btn_update_channels: 'Save changes',
            btn_cancel: 'Cancel',
            searching_by_email: 'Searching by email...',
            discord: {
                searching: 'Searching by name...',
                empty_case_not_result: 'No results found.',
                empty_case_try_find_email:
                    "Try typing the exact email, e.g. <strong>person{'@'}company.com</strong>", // eslint-disable-line
            },
            msteams: {
                empty_case_not_result: 'No results found.',
                empty_case_try_find_email: `Please make sure <strong>{'@'}DailyBot</strong> is added to your Team inside your Microsoft Teams workspace.
                                        <a target="_blank" href="https://help.dailybot.com/hc/en-us/articles/4401865165843">Learn More.</a>`,
            },
            slack: {
                empty_case_not_result: 'No results found.',
                empty_case_try_find_email:
                    "Try typing the exact email, e.g. <strong>person{'@'}company.com</strong>", // eslint-disable-line
                add_info_text:
                    'For organizations with more than 500 users, we suggest you to add users by email.',
            },
            hangouts: {
                empty_case: 'No results found.',
                empty_case_try_find_email:
                    'Try typing the exact email, e.g. {exampleEmails}',
                empty_case_example_email: "person{'@'}{domainUrl}", // eslint-disable-line
                empty_case_or_email: 'or',
                empty_case_email:
                    '<p>User not found.</p><p>You can invite <strong>{email}</strong> to join your team.</p>',
                empty_case_email_button: 'Send invite by email',
                add_info_text:
                    "We recommend reading <a href='https://help.dailybot.com/hc/en-us/articles/4409461662355' target='_blank'>these instructions</a> to understand how to add members from your Google Chat organization.", // eslint-disable-line
            },
        },
        select_team_mate: {
            empty_case_not_result: 'No results found.',
        },
        imageFile: {
            errors: {
                fileSize: 'The size of the image must be less than 1MB',
                fileType: 'Please select an image file',
                fileReaderAPI:
                    'Sorry, your browser does not support the FileReader API',
            },
        },
        input_file: {
            btn_upload: 'Upload File',
            placeholder: 'Select a file to upload',
        },
        copy_link: {
            error_message:
                "Your device didn't allow to copy, please try yourself selecting and copying this link: {link}", // eslint-disable-line
            text_copy_link: 'Copy Link',
        },
        google_suite_directory_connect: {
            add: 'Add from:',
            suite: 'Workspace',
        },
        platform_inactive_info: {
            msteams: {
                common: {
                    message:
                        'Our communication with Microsoft Teams failed. {action} or try again after a few minutes.',
                    action: 'Please reload the page',
                },
            },
            slack: {
                common: {
                    message: 'Chat integration revoked, {action}',
                    action: 'click here to reconnect',
                },
            },
            hangouts: {
                common: {
                    message: 'Chat integration revoked, {action}',
                    action: 'click here to reconnect',
                },
            },
        },
        select_time: {
            lb_hour: 'Time',
            pl_hour: 'HH',
            pl_minute: 'MM',
        },
        select_date: {
            lb_month: 'Month',
            lb_day: 'Day',
            pl_month: 'MM',
            pl_day: 'DD',
            months: {
                '0': 'January',
                '1': 'February',
                '2': 'March',
                '3': 'April',
                '4': 'May',
                '5': 'June',
                '6': 'July',
                '7': 'August',
                '8': 'September',
                '9': 'October',
                '10': 'November',
                '11': 'December',
            },
        },
        find_select_channel: {
            common: {
                lb_channel: 'Select a channel',
                pl_channel: 'Search for a channel',
                empty_case_channels:
                    "No channels matching this search. <br> If your channel doesn't show up, please add <strong>{'@'}DailyBot</strong> to the channel first.", // eslint-disable-line
                hint: "For private channels, type “<strong>{'@'}DailyBot</strong>” to add the bot first. <a href='https://help.dailybot.com/hc/en-us/articles/360056375274-I-can-t-find-my-private-channel-in-DailyBot-s-channel-lists' target='_blank'>Learn more</a>", // eslint-disable-line
            },
            msteams: {
                hint: "For private channels, type “<strong>{'@'}DailyBot</strong>” to add the bot first. <a href='https://help.dailybot.com/hc/en-us/articles/360056375274-I-can-t-find-my-private-channel-in-DailyBot-s-channel-lists' target='_blank'>Learn more</a>", // eslint-disable-line
            },
            discord: {
                hint: "For private channels, open the channel settings > Permissions > Add members or roles to add DailyBot. <a href='https://help.dailybot.com/hc/en-us/articles/360056375274-I-can-t-find-my-private-channel-in-DailyBot-s-channel-lists' target='_blank'>Learn more</a>", // eslint-disable-line
            },
            hangouts: {
                label: 'Space for sharing reports',
                button_message: "Can't find the space?", // eslint-disable-line
                empty_case_channels:
                    "It wasn't possible to find any Space <br> where <strong>{'@'}DailyBot</strong> is a member. <br> Please add the bot to a Space and reload.", // eslint-disable-line
                hint: 'Add <strong>{\'@\'}DailyBot</strong> to a Space on Google Chat. So users can interact with the bot publicly. <a target="_blank" href="{learnHowLink}">Learn how</a>', // eslint-disable-line
                drawer_hint:
                    'Add {dailybot} to a Space on Google Chat. So users can interact with the bot publicly. {learnHowLink}', // eslint-disable-line
            },
        },
        tag_selector_from_platform: {
            common: {
                lb_channel: 'Select a channel',
                pl_channel: 'Search for a channel',
                learn_how: 'Learn how',
                learn_more: 'Learn more',
                hint: "If you're configuring a private channel, type <strong>{'@'}DailyBot</strong> and hit enter to add DailyBot to your channel. <a href='https://help.dailybot.com/hc/en-us/articles/360056375274-I-can-t-find-my-private-channel-in-DailyBot-s-channel-lists' target='_blank'>Learn more</a>", // eslint-disable-line
                empy_case_select_members: {
                    main: 'Can’t find the person? {link}',
                    link: 'Invite people',
                    allow_invite:
                        'No matches found. <strong>Check</strong> if the user is in the <strong>{platform} space.</strong>',
                },
                non_members_hint:
                    'Based on your selection, {count} person will be invited to DailyBot | Based on your selection, {count} people will be invited to DailyBot',
            },
            slack: {
                hint: "If you're configuring a private channel, type <strong>{'@'}DailyBot</strong> and hit enter to add DailyBot to your channel. <a href='https://help.dailybot.com/hc/en-us/articles/28903872768403-How-can-I-configure-DailyBot-for-reports-in-public-and-private-channels-on-Slack' target='_blank'>Learn more</a>", // eslint-disable-line
                empy_case_select_channels: {
                    main: 'Can’t find your channel? {link}',
                    link: 'Find out how to locate it.',
                },
            },
            msteams: {
                hint: 'To select channels, add {dailybot} to a Team in your MS Teams chat app. {learnHow}',
                tp_learn_how:
                    'Open Microsoft Teams > Teams > Select a team > Manage team > Apps > Search DailyBot > Add to a team > Configure',
                empy_case_select_channels: {
                    main: 'Can’t find your channel? {link}',
                    link: 'Find out how to locate it.',
                },
                custom_empty_case: {
                    not_found: 'No participants found.',
                    invite: 'Please {workspace} to access members.',
                    lnk_workspace: 'add DailyBot to a MSTeams space',
                },
            },
            discord: {
                hint: "If configuring a private channel, find the channel, go to <strong>Edit Channel > Permissions > Add members or roles</strong>, and add DailyBot. <a href='https://help.dailybot.com/hc/en-us/articles/28903896609939-How-can-I-configure-DailyBot-for-reports-in-public-and-private-channels-on-Discord' target='_blank'>Learn how</a>", // eslint-disable-line
                empy_case_select_channels: {
                    main: 'Can’t find your channel? {link}',
                    link: 'Find out how to locate it.',
                },
            },
            hangouts: {
                hint: 'To select Chat Spaces, add {dailybot} to a Space in Google Chat. {learnHow}',
                tp_learn_how:
                    'Open Google Chat > Select a space > Click on the name > Add people & apps > Type DailyBot > Select & Invite.',
                empy_case_select_channels: {
                    main: 'Can’t find your space? {link}',
                    link: 'Find out how to locate it.',
                },
                custom_empty_case: {
                    not_found: 'No participants found.',
                    invite:
                        'Send an {invite} or use {workspace} to add them from your Google Chat space',
                    lnk_invite: 'invite link',
                    lnk_workspace: 'Google Workspace',
                },
            },
        },
        select_members_from_platform: {
            lb_select_all: 'Select all',
            lb_clear_filter: 'Clean',
            lb_toggle_import_from_channels: 'Sync from a channel',
            lb_toggle_participants: 'Participants',
            info_message_about_charge:
                'Channel sync can automatically add more users/seats to your DailyBot account.',
            pl_select_channels:
                'Find and select up to {maxChannels} channel | Find and select up to {maxChannels} channels',
            pl_select_spaces:
                'Find and select up to {maxChannels} space | Find and select up to {maxChannels} spaces',
        },
        generic_autocomplete: {
            void_option_text: "-Don't send-", // eslint-disable-line
        },
        browser_disclaimer: {
            disclaimer:
                'Your web browser seems to be incompatible and DailyBot might not work as expected.',
            link_browsers: 'Upgrade web browser now.',
        },
        skill_wizard_steper: {
            skip_link: 'Skip tour',
            buttons: {
                next: 'Next',
                back: 'Back',
                finish: 'Get started',
            },
        },
        d_timeline: {
            btn_today: 'Today',
        },
        d_tiptap_editor: {
            lb_enter_url_image: 'Enter the url of your image here',
            menu_bar_options: {
                bold: 'Bold',
                italic: 'Italic',
                strikethrough: 'Strikethrough',
                underline: 'Underline',
                code: 'Code',
                code_block: 'Code Block',
                bulleted_list: 'Bulleted List',
                ordered_list: 'Ordered List',
                blockquote: 'Blockquote',
                insert_link: 'Link',
                menububble_link: {
                    btn_confirm: 'Confirm',
                    btn_cancel: 'Cancel',
                    btn_unlink: 'Unlink',
                    btn_edit: 'Edit',
                },
            },
        },
        questions_type: {
            total_responses: '{count} response | {count} responses',
            see_more_content: 'See more',
            see_less_content: 'See less',
            view_all: 'View all',
            no_response_empty_case: 'No Response.',
            last_response: {
                main: 'Last response, {date}',
                today: 'Today {hour}',
            },
        },
        universal_search: {
            empty_case: {
                form: 'Create form',
                command: 'Create new command',
                workflow: 'Create workflow',
                team: 'Create team',
                followup: 'Create check-in',
                followup_with_visible_responses: 'Create check-in',
            },
        },
        help_button: {
            title: 'Help',
            items: {
                find_answers: 'Find answers',
                contact_us: 'Contact us',
            },
        },
    },
    login: {
        title: 'Welcome!',
        title_welcome_back: 'Welcome back!',
        subtitle: 'To get started, log in here',
        lb_title: "Don't you have an account? ", // eslint-disable-line
        lb_register_link: 'Create account.',
        or_inclusive: 'or',
        with_another_platform: 'Log in with other platform',
        with_email_title: 'Log in with your email',
        lb_email: 'Email',
        pl_email: 'Type your email',
        lb_organization: 'Organization',
        pl_organization: 'Choose your organization',
        tp_organization: 'Please select the organization you want to sign in',
        lb_password: 'Password',
        pl_password: 'Type your password',
        btn_submit: 'Log in',
        register: 'sign up',
        forget_password: 'Forgot your password?',
        email_sent: 'Instructions to continue have been sent to',
        email_verify:
            ' If after a while you did not receive the instructions, verify that you have written the email correctly.',
        error_400: 'Sorry, your email or password is incorrect. Please try again',
        error_429: 'Your user account is locked. Please check your email to unlock',
    },
    access_by_invite: {
        title: 'Welcome',
        subtitle: 'You are joining {orgName}',
        or_inclusive: 'or',
        login_with_other: 'Sign in with another organization',
    },
    register: {
        title: 'Create account',
        lb_title: 'If you have an account, ',
        lb_title_link: 'you can log in.',
        lb_title_trial: 'Free trial 15 days',
        or_inclusive: 'or',
    },
    recovery_password: {
        title: 'Reset your password',
        lb_title: 'Just remembered it? ',
        lb_title_link: 'Try to log in.',
        lb_email: 'Email',
        pl_email: 'Type your email',
        btn_submit: 'Start process',
        result_error:
            "The email address doesn't correspond to a DailyBot user account", // eslint-disable-line
        message_incorrect: "This account wasn't created with Google Chat", // eslint-disable-line
        result_ok: {
            title: 'Reset in progress',
            description:
                "<p>We've sent you an email.</p><p>Please check your email inbox. If you don't get it in a few minutes then check your spam folder or try again.</p>", // eslint-disable-line
            btn_submit: 'Go back',
        },
        login_with_email_and_password_disable: {
            title: 'Action not permitted',
            description: `
        <p>Sorry, you are not allowed to login with email/password. Use Single Sign-On, or contact your DailyBot administrator.</p>
      `,
        },
        not_founded_account: "We weren't able to identify you.", // eslint-disable-line
        invalid_captcha_action:
            'Seem that your activity to recover the password is suspicious, please try more later.',
    },
    reset_password: {
        title: 'Reset your password',
        lb_title: 'Just remembered it? ',
        lb_title_link: 'Try to log in',
        lb_new_password: 'New password',
        pl_new_password: 'Type a new password',
        result_ok: {
            title: 'Congrats! <br> You just reset your password.',
            description: `
        <p>Now you have access again to your account. You can continue enjoying DailyBot and the features it has for you.</p>
      `,
            btn_submit: 'Continue',
        },
        token_expired: {
            title: 'Link expired',
            description:
                'The link you followed has expired. Try again and we’ll send you a new link to recover your password.',
            btn_submit: 'Trying again',
        },
        result_error: 'The security link has expired',
        btn_submit: 'Reset',
    },
    set_password: {
        title: "Let's set your password", // eslint-disable-line
        lb_password: 'Password',
        pl_password: 'Type a password',
        lb_repeat_password: 'Repeat the password',
        pl_repeat_password: 'Type the password again',
        btn_submit: 'Continue',
    },
    password_validator_feedback: {
        min: 'Use a longer keyboard pattern with more turns and minimal 12 characters',
        uppercase: 'Uppercase characters are needed',
        lowercase: 'Lowercase characters are needed',
        symbols: 'Must contain at least one symbol',
        digits: 'At least one digit is required',
    },
    unlock_account: {
        success: {
            title: 'Unlocked Account',
            description: 'Your DailyBot account has been unlocked.',
            btn_login: 'Go to login',
        },
        token_expired: {
            title: 'Link expired',
            description:
                'The link to unlock your account has expired. Please try to log in again.',
            btn_login: 'Go to login',
        },
    },
    select_organization: {
        title: 'Go to Dashboard',
        title_joining: 'Joining to Organization',
        subtitle: 'Logging in with {email}',
        lb_organization: 'Organization',
        pl_organization: 'Choose a organization',
        btn_submit: 'Next',
    },
    select_organization_to_join: {
        title: 'Welcome to DailyBot',
        subtitle: 'There are already some members using DailyBot in your company.',
        organization_description_plural: '{members} members.',
        organization_description_single: '{members} members.',
        btn_join: 'Join now',
        btn_ask_join: 'Ask to join',
        btn_switch: 'Switch now',
        btn_switch_to: 'Switch to {organizationName}',
        btn_back: 'Go back',
        pending_approve: 'Pending approval',
        inactive_member: 'Inactive member',
        current_org: 'Current organization',
        create_new_organization: 'Create new organization',
        create_new_organization_description:
            'Create a separate DailyBot organization to work with your team.',
        pending_approval: 'Pending approval',
        user_is_inactive_member: 'Inactive member',
        pending_approval_description:
            'We notified the admins at <b>{organizationName}</b> so they invite you to join. Check you email later, when you get invited you’ll receive an email.',
        footer_logout_btn: 'Log out and get in with another account',
        ask_to_join_success_message: 'Ask to join sended successfully.',
        last_activity: 'Active {days} days ago.',
        last_activity_today: 'Active today.',
        join_now_modal: {
            title: 'Please confirm',
            subtitle:
                'You can only have one active organization, please be sure that <b>{organizationName}</b> is the one you want to join.',
            ok: 'Yes, continue',
            cancel: 'No, cancel',
        },
        create_org_modal: {
            title: 'Comfirm your action',
            subtitle:
                'Please be sure that you can create a new DailyBot Organization and give a new name.',
            placeholder: 'Organization name',
            ok: 'Yes, continue',
            cancel: 'No, cancel',
        },
        ask_join_modal: {
            title: 'Almost there!',
            subtitle:
                'We notified the admins at <b>{organizationName}</b> so they invite you to join. Check you email later, when you get invited you’ll receive an email.',
            cancel: 'Ok, I’ll check my email',
        },
    },
    two_factor_auth: {
        title: 'Confirm your identity',
        subtitle: "To continue, please enter the code we've sent you via email:", // eslint-disable-line
        pl_code: 'Code',
        btn_submit: 'Continue',
        session_expired_message: 'This code has expired, please try again',
    },
    github_students: {
        confirmation: {
            successful_title: 'Great! Your GitHub Student Account was validated',
            successful_subtitle:
                "Done! We're giving you 6 months of unlimited everything with the GitHub plan for up to 10 users, please be aware that this DailyBot+GitHub plan is intended for school or academic usage.", // eslint-disable-line
            check_terms: 'I understand its purpose',
            not_available:
                "We're sorry, this offer is not available for you. Your organization or chat workspace already enabled a GitHub Student Developer Pack in the past.", // eslint-disable-line
            failed_title: 'GitHub Account not valid',
            failed_subtitle:
                "We're sorry, you don't have a valid GitHub Student account for this offer. Use our Free version or upgrade to any of our plans.", // eslint-disable-line
            go_home: 'Go home',
        },
        loading_message: 'Validating your GitHub Student Account',
    },
    unsubscribe_notifications: {
        title: 'You’ve been successfully unsubscribed',
        message_news:
            "You'll no longer receive emails about <strong>our product updates</strong> at <strong>{email}</strong>.", // eslint-disable-line
        message_system:
            "You'll no longer receive emails about <strong>system notifications</strong> related to DailyBot at <strong>{email}</strong>", // eslint-disable-line
        message_kudos_weekly_report:
            "You'll no longer receive emails about <strong>kudos reports</strong> at <strong>{email}</strong>", // eslint-disable-line
        message_kudos_team_reminder:
            "You'll no longer receive emails about <strong>kudos reminders</strong> at <strong>{email}</strong>", // eslint-disable-line
        reactivate_message:
            'If you want to undo this, go to Profile and search for this notification to reactivate it.',
        btn_continue: 'Back to login',
    },
    finish_organization_onboarding: {
        title: 'Hey, welcome!',
        subtitle:
            'Looks like someone started configuring DailyBot for your organization ({orgName}) in the past, but never completed the process. ',
        message:
            'Would you like to take over the administrator role to complete this setup? ',
        btn_continue: 'Yes, continue as admin',
        notice_about_admin:
            "We'll let the previous admin know about this change, the contact email is {emailAdmin}.", // eslint-disable-line
        error: 'There was an error, please sign out, sign in and try again.',
        sign_out: 'Sign out',
    },
    preregister: {
        title: 'Create account',
        title_add_platform: 'Add to your chat platform',
        subtitle_add_platform:
            'You should authorize the app so it can be installed',
        lb_user_name: 'Name',
        pl_user_name: 'John Doe',
        lb_user_email: 'Work email',
        pl_user_email: "name{'@'}work-email.com", // eslint-disable-line
        grant_permission_start: "Grant the permissions and don't worry. ", // eslint-disable-line
        grant_permission_link: 'DailyBot is secure ',
        grant_permission_end:
            "and can only process messages when it is {'@'}mentioned.", // eslint-disable-line
        ask_for_permission: "Don't you have the permissions to install it?", // eslint-disable-line
        add_to_slack: 'Add DailyBot to your Slack',
        btn_add_to_slack: 'Add to Slack',
        add_to_discord: 'Add DailyBot to your Discord',
        btn_add_to_discord: 'Add to Discord',
        add_to_teams: 'Add DailyBot to your Microsoft Teams',
        btn_add_to_teams: 'Add to Microsoft Teams',
        add_to_hangouts: 'Add DailyBot to your Google Chat',
        btn_add_to_hangouts: 'Add to Google Chat',
        btn_ask_for_help: 'Ask for help',
        hint_ask_for_help:
            'You can share a special link or send an email with instructions to your chat platform administrator.',
        or: '-or-',
        send_help: {
            back: 'Back',
            lb_type_email: 'Type an email to send the installation guide',
            pl_type_email: 'Email address',
            btn_send: 'Send',
            copy_link: 'Copy link and share it yourself',
            hint: 'Hint: If you your at a startup your admin is probably your CTO, but if you work at a large organization it might be your IT department.',
        },
        thanks: 'Thank you for this!',
        send_instructions:
            'We will send instructions to this person as soon as possible so that you can register your organization.',
        twitter: 'Follow us on Twitter',
        linkedin: 'Follow us on LinkedIn',
        discord: 'Join Discord',
        help: 'Need help?',
        contact_link: 'Contact our support team',
        clipboard: {
            any: 'Hi, since you are our organization’s admin could you please help me by installing DailyBot on our chat workspace? Here are the instructions to install on:\n\u2022 Slack: https://bit.ly/3OETI59\n\u2022 MS Teams: https://bit.ly/3Q2wVBE\n\u2022 Google Chat: https://bit.ly/3S5yXmc\n\u2022 Discord: https://bit.ly/3Q0EhW0',
            slack:
                'Hi, since you are our organization’s admin could you please help me by installing DailyBot on our Slack? Here are the instructions: https://bit.ly/3OETI59',
            discord:
                'Hi, since you are our organization’s admin could you please help me by installing DailyBot on our Discord server? Here are the instructions: https://bit.ly/3Q0EhW0',
            teams:
                'Hi, since you are our organization’s admin could you please help me by installing DailyBot on our Microsoft Teams space? Here are the instructions: https://bit.ly/3Q2wVBE',
            hangouts:
                'Hi, since you are our organization’s admin could you please help me by installing DailyBot on our Google Chat? Here are the instructions: https://bit.ly/3S5yXmc',
        },
        zendesk_title: 'I need help creating my account',
        zendesk_message:
            'Hi there! I am having issues creating my account and I was wondering if you could help me. Thank you!',
    },
    onboarding: {
        title: 'Get it running by following these steps',
        progress_step: 'Step {current} of {quantity}',
        newOrganization_title: 'Create new organization',
        btn_next: 'Next',
        btn_finish: 'Finish',
        btn_invite_members: 'Invite and Continue',
        btn_skip: 'Skip this step',
        out_of_onboarding: 'Sign in with another account',
        installing: 'Installing Skills',
        link_logout: 'Sign in with another account',
        terms: {
            lb_check: {
                base: 'Agree to the {termsLink} and {privacyLink} before DailyBot can assist you with your tasks', // eslint-disable-line
                terms_link: 'terms of use',
                privacy_link: 'privacy policy',
            },
        },
        promotions: {
            lb_check:
                'Agree to receive tips, tutorials, offers or discounts at some point (optional)',
        },
        step_1: {
            title:
                "{name}, hi! 👋 I’m DailyBot <br> I'll take care of your team’s check-ins", // eslint-disable-line
            title_discord:
                "Hi! 👋 I’m DailyBot <br> I'll take care of your team’s check-ins", // eslint-disable-line
            connected: 'DailyBot is now connected to:',
            lb_reason: 'How did you find out about me?',
            reason: {
                organic: 'Search engine (Google, Bing, etc)',
                marketplace: 'Marketplace / App directory',
                friend: 'Friend or colleague recommendation',
                social_media: 'Social media',
                blog: 'Blog or publication',
                custom: 'Other',
            },
            lb_roles: 'What’s your role?',
            roles: {
                ceo: 'Owner / CEO / Founder',
                engineering: 'Engineering Team Lead / Manager',
                product_manager: 'Product Manager',
                scrum_master: 'Scrum Master',
                developer: 'Developer',
                marketing: 'Marketing Team Lead / Manager',
                hr: 'HR and Operations',
                member: 'Team member',
                custom: 'Other',
            },
            lb_custom_role: 'Type your job role:',
            pl_custom_role: 'Tell us what you do',
            lb_organization_name: 'What’s your organization name?',
            pl_organization_name: 'Type your organization name',
            btn_next: 'Next: Set up your check-in',
            validation: {
                min_length: 'Must be at least {min} characters',
            },
        },
        step_2: {
            title: 'Let’s set up your first {template}',
            lb_invite: 'Invite the participants of this check-in',
            lb_channel: 'Select a #channel for sharing reports',
            dailybot: 'DailyBot',
            template_copy:
                '<strong>DailyBot</strong> <br />  Hey <strong>{name}</strong>! These are your <strong>{template}</strong> questions: <br /> <br /> {questions} You can customize your check-in later.',
            template_0_question_0: 'What have you done since yesterday?',
            template_0_question_1: 'What will you do today?',
            template_0_question_2:
                'Is there anything that is blocking your progress?',
            btn_next: 'Finish: Create Check-in',
            empty_case_members: {
                slack:
                    'No participants available. <strong>Check</strong> if they’re in your Slack space.',
                hangouts:
                    'No participants available. <strong>Check</strong> if they’re in your Google Chat space.',
                msteams:
                    'No participants available. <strong>Check</strong> if they’re in your MSTeams space.',
                discord:
                    'No participants available. <strong>Check</strong> if they’re in your Discord space.',
            },
        },
        setup: {
            title_organization: 'Tell us about your company',
            subtitle_organization: 'Get it running by following these steps',
            title_user_profile: 'Welcome to {name}',
            subtitle_user_profile: 'Join your team on DailyBot',
            lb_organization_name: 'Name',
            pl_organization_name: 'Type the name of your company',
            lb_industry: 'What industry are you in?',
            pl_industry: 'Select an industry',
            lb_department: 'Your department',
            pl_department: 'Choose your department',
            lb_hour_init: 'Work start time',
            pl_hour_init: 'Choose the time when the work day begins',
            lb_timezone: 'Time zone',
            lb_user_timezone: 'Your current time zone',
            pl_timezone: 'Choose a time zone',
            lb_language: 'Language',
            pl_language: 'Select a language',
            msg_is_not_web_app_language:
                '{language} is available for the bot, but not for this app.',
            web_app_language_not_supported: {
                pt: 'Portuguese',
            },
        },
        plan_to_use_dailybot: {
            title: 'Choose a focus area for your team',
            footer_message:
                'I can help you activate quick actions and flows for your team based on your selection', // eslint-disable-line
        },
        select_members: {
            title: 'Invite your team',
            loading: 'Loading...',
            notify_people: 'Send a welcome message to members invited',
            discord: {
                empty_case:
                    "You should add <strong>{'@'}DailyBot</strong> to a channel in Discord first. You can do it now and reload this page to invite members.", // eslint-disable-line
                subtitle: {
                    p_1: 'New members will join a default team named {teamName}.',
                    p_2: 'You can create or change teams later.',
                },
            },
            slack: {
                empty_case:
                    "You should add <strong>{'@'}DailyBot</strong> to a channel in Slack first. You can do it now and reload this page to invite members.", // eslint-disable-line
                subtitle: {
                    p_1: 'New members will join a default team named {teamName}.',
                    p_2: 'You can create or change teams later.',
                },
            },
            hangouts: {
                empty_case:
                    "You should add <strong>{'@'}DailyBot</strong> to a channel in Google Chat first. You can do it now and reload this page to invite members.", // eslint-disable-line
                subtitle: {
                    p_1: 'New members will join a default team named {teamName}.',
                    p_2: 'You can create or change teams later.',
                },
            },
            msteams: {
                empty_case:
                    'You should add {DailyBot} to a Team in Microsoft Teams first. You can do it now and reload this page to invite members. {learnMore} ',
                learn_more: 'Learn how.',
                subtitle: {
                    p_1: 'New members will join a default DailyBot team named {teamName}.',
                    p_2: 'You can create or change teams later.',
                },
            },
        },
        hangouts: {
            title: 'Connect with DailyBot',
            explain: "You're almost done! Complete these 4 steps:", // eslint-disable-line
            explain_1: '1. {gChatLink} using {email}',
            explain_2:
                '2. Find the <strong>+ icon</strong> to start a new conversation',
            explain_3:
                '3. <strong>"Find apps"</strong> and search for <strong>DailyBot</strong>', // eslint-disable-line
            explain_4: "4. <strong>Say hi</strong> — That's it!", // eslint-disable-line
            link: 'Access Google Chat',
            gChat_url: 'Open Google Chat',
            instructions: 'Having trouble following the previous GIF? {learnMore}',
            learn_more: 'Check out this detailed guide.',
            hint: 'Once you interact with DailyBot via chat you can continue.',
            skip: 'Skip this step for now',
        },
        invite_by_email: {
            title: 'Invite your team',
            subtitle: {
                p_1: 'New members will join a default team named {teamName}.',
                p_2: 'You can create or change teams later.',
            },
            pl_emails: "Add emails like johndoe{'@'}{domainUrl}, etc...", // eslint-disable-line
            notice_link: {
                base: '{proTip} Send this link to your teammates for a quick sign-up',
                pro_tip: 'Tip:',
            },
            copy_link: 'Copy Link',
            link_copied: 'Link copied to clipboard!',
        },
    },
    home_page: {
        add_dailybot_modal: {
            title: 'Set up DailyBot in your team',
            description:
                "You're almost done! Please <strong>add DailyBot</strong> to one of your <strong>teams</strong>. This allows us to access channels and participants, ensuring a smoother experience for you.", // eslint-disable-line
            btn_ok: 'Add DailyBot to a team',
        },
        welcome_modal: {
            title: 'Welcome to DailyBot!',
            description:
                "You've successfully created your first <strong>{template}</strong> check-in!", // eslint-disable-line
            reminder:
                'Hey! Are you ready to fill out the <strong>{template}</strong> report now?',
            footer:
                'An interactive <strong>checklist</strong> on the homepage will help you set everything up! <br> Please take a look 👀',
            hint: 'You can modify the schedule and settings later.',
            btn_ok: 'Get started',
        },
        modal_create: {
            lb_followup: 'Check-in name',
            pl_followup: 'Type a name',
            lb_participants: 'Invite participants to this check-in',
            lb_channel: 'Select a #channel for sharing reports',
            lb_emails: 'Invite the participants of this check-in by email',
            pl_emails: 'Add emails separated by commas (,)',
        },
        activities2: {
            title: 'Hey! {userName}, have a great day {emoji}',
            lets_start: 'Let’s start with the basics',
            onboarding_activities: {
                modal_add_dailybot: {
                    title: 'Add DailyBot to a team in Microsoft Teams',
                    step_1:
                        "1. Go to the  <a class='link' href='https://teams.microsoft.com/l/app/82bfb2e1-cad3-4e99-8995-5d140f295ef2' target='_blank'>DailyBot modal</a> in microsoft teams", // eslint-disable-line
                    step_2:
                        '2. Click <strong>Add to a team</strong> and choose an initial channel from the team where you want DailyBot to be available.',
                    step_3:
                        '3. If all looks good, click <strong>Set up a bot</strong> at the bottom of the modal window.',
                    step_4:
                        "4. If all went well, you'll get a welcome message like this in your team’s channel:", // eslint-disable-line
                    hint: 'You need to add DailyBot to a team before you can invite members, or see and select channels for your reporting activities.',
                    hint_2:
                        'If you have any questions, please create a ticket so we can help you.', // eslint-disable-line
                    view: 'View article',
                },
                add_dailybot: {
                    name: 'First add DailyBot to a Team in your Microsoft Teams app',
                    lnk_text: 'Learn how',
                },
                create_followup: {
                    name: 'Create your first Daily Standup',
                    lnk_text: 'Let’s start',
                },
                finish_setup: {
                    name: 'Add participants to your Daily Standup',
                    lnk_text: 'Configure check-in',
                },
                connect_integration: {
                    name: 'Connect your first integration',
                    lnk_text: 'See integrations',
                },
                view_followup: {
                    name: 'See Daily Standup report',
                    lnk_text: 'Go to Daily report',
                },
                reload: 'Reload page',
            },
        },
        boost: {
            title: 'Knowledge Center',
            help: {
                title: 'Help Center',
                description: 'Get support and answers',
            },
            updates: {
                title: 'Product Updates',
                description: 'Latest features and improvements',
            },
            blog: {
                title: 'DailyBlog',
                description: 'Tips and trends',
            },
            academy: {
                title: 'DailyBot Academy',
                description: 'Learn how to use DailyBot',
            },
        },
        quick_action: {
            title: 'Quick actions',
            kudos: {
                title: 'Give kudos',
                description: 'Recognize teammates Send your first kudos',
            },
            invite: {
                title: 'Invite your team',
                description: 'Add and manage team members',
            },
            settings: {
                title: 'Set org settings',
                description: 'Set up organization preferences',
            },
            profile: {
                title: 'Set your personal account',
                description: 'Personalize your profile',
            },
        },
        recent_updates: {
            title: 'Recent Updates',
            status: 'You have {link}',
            active_checkins: '{amount} active check-in | {amount} active check-ins',
            cards: {
                create_checkin: 'Create check-in',
                config: 'Configure check-in',
                add_participant: 'Add participants',
                created_at: 'Created on {day} at {hour}',
                last_response: 'Last response on {day} at {hour}',
            },
            finishModalSetup: {
                title: 'Add participants to your Daily Standup',
                ok: 'Save changes',
                aux: 'Advanced setup',
                title_create: 'Create your first Daily Standup',
                ok_create: 'Create check-in',
                aux_create: 'Advanced setup',
                frequency:
                    '<strong>{frequency} ({days})</strong> at <strong>{time}</strong>',
                at_member_work_start_time: "participant's work start time", // eslint-disable-line
                hangouts_alert:
                    'To see Google Chat members, first invite them using the methods above',
                hangouts_alert_gmail:
                    'To see Google Chat members, first invite them using {link}',
                lnk_invite: 'the invite members page.',
                msteams_alert:
                    'To see MS Teams members & channels, first invite DailyBot to a Team. <a href="https://help.dailybot.com/hc/en-us/articles/4401865165843" target="_blank">Learn more</a>',
            },
        },
        activities: {
            title: 'Hey, {userName} {emoji}',
            subtitle: {
                onboarding: 'Welcome to DailyBot',
                checkins_to_complete:
                    'Have a great day! These are your activities for today',
                empty_case_activities:
                    'Have a great day! Read the reports to stay in sync with your team.',
                empty_case_all_activities:
                    'Have a great day! You have no pending activities at the moment.',
            },
            btn_workflow: 'Try new Workflows 🚀',
            common_activities: {
                onboarding: {
                    invite_users: {
                        name: 'Bring your team onboard',
                        hidden_content:
                            'Invite members so they can participate in the stand-ups and recognitions to the team.',
                        lk_text: 'Invite users',
                    },
                    create_team: {
                        name: 'Create teams and manage members',
                        hidden_content: 'Create teams and manage members',
                        lk_text: 'Add a new team',
                    },
                    watch_intro_video: {
                        name: 'A quick intro? Watch this video we created for you',
                        hidden_content:
                            'Daily check-ins, forms, mood, kudos and shortcuts automation.',
                        lk_text: 'Watch video',
                    },
                    create_followup: {
                        name: 'Create the first Stand-Up Meeting',
                        hidden_content:
                            'Track automatically what your team is up to. Run agile daily stand-ups.',
                        lk_text: 'Create Check-In',
                    },
                },
                team_mood: {
                    name: 'Team mood',
                    hidden_content:
                        'Check how your team is feeling and take action if necessary.',
                    lk_text: 'Check team mood',
                },
                empty_case: {
                    give_kudos: {
                        name: 'Take some time to give kudos to your team',
                        hidden_content: 'Take some time to give kudos to your team',
                        lk_text: 'Give kudos',
                    },
                },
            },
            list: {
                done: 'done',
                cta_fill_out_report: 'Fill out report',
                cta_see_reports: 'See reports',
                view_more_activities:
                    'See {count} more activity for today | See {count} more activities for today',
                view_less_activities:
                    'See only {count} activity | See only {count} activities',
                mark_as_done: 'Mark as done',
                manage_mood_settings: 'Manage mood settings',
                hidden_content: {
                    base: '{percentage}% done · {responses} of {expected}.',
                    base_blockers:
                        '{percentage}% done · {blockers} · {responses} of {expected}.',
                    expected: '{count} response | {count} responses',
                    blockers: '{emoji} {count} blocker | {emoji} {count} blockers',
                },
            },
        },
        guide: {
            title_new_user: 'Get started',
            title_old_user: 'Explore DailyBot',
            subtitle:
                'Learn about the advantages and possibilities that DailyBot has to accompany your team',
            followups: {
                title: 'Improve performance with team check-ins',
                retrospective: {
                    name: 'Run a retrospective. Make a pause to think',
                    hidden_content:
                        'Retrospective check-ins help you identify what’s going well and what needs to improve',
                    lk_text: 'Create retrospective',
                },
                weekly_executive: {
                    name: 'Track executive goals and priorities',
                    hidden_content:
                        'Run a weekly executive check-in with managers and teams to make progress in the right direction',
                    lk_text: 'Set up weekly check-in',
                },
                the_1_to_1_meeting: {
                    name: 'Periodic and asynchronous 1:1 check-ins',
                    hidden_content:
                        'Automate 1:1 check-ins to monitor mood, goals, and to provide feedback',
                    lk_text: 'Set up a written 1:1',
                },
                icebreaker: {
                    name: 'Icebreakers with your team to start off the week',
                    hidden_content:
                        'Get to know your teammates and have fun in the process',
                    lk_text: 'Create an icebreaker',
                },
                mental_health_check: {
                    name: 'Be attentive to the mental health of your team',
                    hidden_content:
                        'Get a better sense of what you can do to support your team members',
                    lk_text: 'Run mental health check',
                },
                meeting_prep: {
                    name: 'Prepare efficient meetings with your team',
                    hidden_content: 'All team  prepared for a recurring meeting',
                    lk_text: 'Create Meeting Prep',
                },
                personal_wellness: {
                    name: 'Automate your team’s personal wellness',
                    hidden_content:
                        'Check on your team’s well-being without being invasive',
                    lk_text: 'Run a wellness check-in',
                },
                covid_19_health_check: {
                    name: 'Check on employees during COVID-19',
                    hidden_content:
                        'Regular health checks with the team to see who needs attention',
                    lk_text: 'Create health check',
                },
                sprint_health_check: {
                    name: 'Monitor your development sprint health',
                    hidden_content:
                        'Check whether the sprint is going well or deliveries are at risk',
                    lk_text: 'Check sprint health',
                },
                fun_remote: {
                    name: "Explore your team's imagination with Team Activity Idea", // eslint-disable-line
                    hidden_content:
                        'Opinions and ideas on what activity to do remote vs in person',
                    lk_text: 'Create team activity idea',
                },
                create_followup_without_template: {
                    name: 'Get periodic updates from your team',
                    hidden_content: 'Create Check-in',
                    lk_text: 'Create Check-in',
                },
            },
            kudos: {
                title: 'Improving your team mood',
                give_kudos: {
                    name: 'Make someone happy with kudos',
                    hidden_content:
                        'Send kudos to one or more members of your team to recognize their achievements',
                    lk_text: 'Give kudos',
                },
                go_to_settings: {
                    name: 'Monitor your team motivation',
                    hidden_content: 'Understand and improve your team’s motivation',
                    lk_text: 'Manage motivation tracking',
                },
            },
            customize_experience: {
                title: 'Customize your experience',
                create_shortcuts: {
                    name: 'Create chatbot shortcuts',
                    hidden_content:
                        'Keep things handy in the chat with custom shortcuts a.k.a chat commands',
                    lk_text: 'Create commands',
                },
                customize_questions: {
                    name: 'Manage your own custom questions for check-ins',
                    hidden_content:
                        'Use custom questions to tailor check-ins to your team’s every need',
                    lk_text: 'Create question template',
                },
                configure_profile_timezone: {
                    name: 'Configure your profile and timezone',
                    hidden_content: 'Configure your personal and work information',
                    lk_text: 'Manage my preferences',
                },
                connect_task_manager: {
                    name: 'Connect your task manager',
                    hidden_content:
                        'Integrate your preferred task manager and receive updates on your daily reports',
                    lk_text: 'Sync tasks',
                },
            },
        },
        recent_activity: {
            title: 'Check-ins with recent activity',
            subtitle_template: 'Review your summary of check-ins on your team. {0}',
            link_view_checkins: 'View all Check-ins',
            last_response: 'Last response on {lastDateReported}',
        },
        team_mood: {
            title: 'Team Mood',
            subtitle_base_responses:
                'Based on responses from {totalOrgMembers} member. | Based on responses from {totalOrgMembers} members.',
            subtitle_empty_case: "You'll see the summary of your team's motivation", // eslint-disable-line
            average: {
                title: 'Averages',
                all_time: '{0} all time',
                last_month: '{0} last month',
                activity_last_month: 'Average last responses',
            },
        },
    },
    profile: {
        nav_title: 'User Profile',
        title: 'My account',
        inactive: '{name} (Inactive)',
        lb_export_data: 'Export data',
        lb_copy_id: 'Copy User ID',
        edit: 'Edit',
        preview: {
            status: 'Status',
            active: 'Active',
            inactive: 'Inactive',
            what_i_do: 'What I do',
            email: 'Email',
            secondary_email: 'Secondary email',
            role: 'Role',
            birthday: 'Birthday',
            joined: 'Joined',
            time_off: 'Time off',
            time_zone: 'Work time zone',
            work_days: 'Work days',
            work_start_time: 'Work start time',
            local_time: 'Local time',
            difference_up: "You're {hour} hours ahead of {name}", // eslint-disable-line
            difference_down: "You're {hour} hours behind of {name}", // eslint-disable-line
            difference_none: 'Same as local time',
            unfilled: '-',
            error_message: {
                error_404: 'User not found',
            },
        },
        export_title: 'Data export',
        export_btn: 'Export data',
        export_text: `
        <p>
          We collect the following data about a user:
        </p>
        <ul class="list-type-line mg-tp-25">
          <li>Basic user data</li>
          <li>Daily reports</li>
          <li>Motivation metrics answers</li>
        </ul>
      `,
        export_done_text: `
        <h3>Ok! we're preparing the data.</h3>
        <h3 class="mg-tp-24">
          Once we have the data ready, we'll send you an email with a download link.
        </h3>
      `,
        disable_details:
            'The data will remain stored in case you want to re-activate the member later.',
        export_done_btn: 'Close and back to DailyBot',
        export_429_error: 'Action already performed. Processing data, please wait.',
        basic_information: 'Basic information',
        profile_data: 'Profile data',
        lb_avatar: 'Profile photo',
        lb_email: 'Email',
        lb_secondary_email: 'Secondary email',
        hint_secondary_email: {
            before_change: {
                by_admin: {
                    main: '{link} that you can link to the {userName} integration accounts.',
                    link: 'Add secondary email',
                },
                by_itself_user: {
                    main: '{link} that you can link to your integration accounts.',
                    link: 'Add secondary email',
                },
            },
            confirmed: {
                by_admin: {
                    main: '{userAdmin} set up this email to integrate your external accounts with DailyBot. {link}',
                    link: 'Change',
                },
                by_itself_user: {
                    main: 'We use this email to integrate external tools to DailyBot. {link}',
                    link: 'Change',
                },
            },
            pending_to_approve_started: {
                by_itself_user: {
                    main: 'The email is pending approval. If you want to register another email, please initiate the process to {link}.',
                    link: 'change it',
                },
                by_admin: {
                    main: '{userAdmin} has set up this email to integrate your external accounts with DailyBot. The email is pending approval. Please check your inbox and confirm or {link}.',
                    link: 'change it',
                },
            },
        },
        modal_secondary_email: {
            title: {
                add: 'Add secondary email',
                change: 'Change secondary email',
                verification_success_1: 'Email Verification Successful',
                verification_success_2: 'Your email was verified',
            },
            pl_secondary_email: {
                by_admin: "Type user's email", // eslint-disable-line
                by_self_user: 'Type your email',
            },
            description: {
                add: {
                    by_itself_user: {
                        main: 'Use this email to match your DailyBot account with 3rd-party integrations that may require a different address. {link}',
                        link: 'Learn more',
                    },
                    by_admin: {
                        main: "Use this email to match {userName}'s account with 3rd-party integrations that may require a different address. {link}", // eslint-disable-line
                        link: 'Learn more',
                    },
                },
                pending_to_approve: {
                    by_itself_user: {
                        main_1:
                            'Confirmation message sent to {secondaryEmail}. Verify your email using the magic link. {link}.',
                        main_2:
                            'You have 24 hours to complete the verification. Check your inbox (or spam folder if not found)',
                        link: 'Resend email',
                    },
                    by_admin: {
                        main_1:
                            'Confirmation message sent to {secondaryEmail}. {userName} must verify the email using the magic link. {link}.',
                        main_2:
                            '{userName} has 24 hours to complete the verification. They should check their inbox (or spam folder if not found)',
                        link: 'Resend email',
                    },
                },
                // Use this email to match the DailyBot account of the user with 3rd-party integrations that may require a different address.
                verification_success:
                    'We verified your secondary email, <strong>{secondaryEmail}</strong> <br><br> Now this email can be used to match your DailyBot user with your third-party integrations.',
                close_window: 'You can close this window now.',
                resend_email_message:
                    'Your email has been sent again, check your inbox',
                footer_description: {
                    sign_in: {
                        main: 'To access DailyBot, {link}',
                        link: 'Sign In',
                    },
                    support: {
                        main: 'Need help? {link}',
                        link: 'Contact our support team',
                    },
                },
            },
            buttons: {
                no_cancel: 'No, cancel',
                verify_email: 'Verify email',
                pending_to_approve: 'Ok',
                verification_success: 'Done',
            },
            errors: {
                maximum_resend_attempts:
                    'Maximum resend attempts to email reached, please try more later',
                token_has_expired:
                    'The link to confirm the secondary email has expired, please start the process again.',
                secondary_and_primary_same_email:
                    'You must use a different email than your primary one.',
            },
        },
        lb_organization_time_off: 'Set organization-wide time off work',
        lb_name: 'Full name',
        pl_name: 'Type your name',
        pl_birth_date: 'Birthday',
        pl_birth_date_choose: 'Choose your birthday',
        lb_occupation: 'What I do',
        lb_bio: 'About me',
        pl_bio: 'Type a few words about yourself',
        lb_role: 'Role',
        pl_role: 'Select a role',
        pl_find_me: 'Select an option',
        pl_occupation: 'What you do in your organization',
        organization: 'My organization',
        organization_data: 'Organization data',
        my_organization_role: 'My role:',
        team_data: 'My teams',
        skills: 'Skills',
        notifications: 'Notifications by email',
        lb_news_about_dailybot: 'Features, system and news about DailyBot',
        lb_system_notifications_dailybot:
            'DailyBot Skills and system notifications',
        lb_hacks_and_promotions_about_dailybot:
            'Tips, tutorials, offers and discounts',
        you_role: 'Your role',
        language: 'Dashboard Language',
        tp_language:
            'It only changes the language for the Dashboard (not for the bot)',
        lb_language: 'Language',
        pl_language: 'Select a language',
        tp_update_password:
            "You don't require a password as you've signed up using a third party auth system. You can also set a password in order to login with DailyBot's own auth system.", // eslint-disable-line
        message_create_password:
            "You don't require a password as you've signed up using a third party auth system. You can also set a password in order to login with DailyBot's own auth system.", // eslint-disable-line
        lb_create_password: 'Create password',
        lb_update_password: 'Change password',
        lb_password: 'Password',
        lb_current_password: 'Your current password',
        pl_current_password: 'Type your current password',
        msg_error_current_password: 'The password is incorrect',
        lb_new_password: 'New password',
        pl_new_password: 'Type your new password',
        lb_repeat_password: 'Repeat new password',
        pl_repeat_password: 'Type the new password again',
        msg_error_repeat_password: 'The password must be the same as the new one',
        bt_submit_password: 'Save',
        password_changed:
            'Your password was updated. Your session will be closed now.',
        admins: 'Admin(s)',
        view_more: '(see more)',
        view_less: '(see less)',
        work_details: 'Work details',
        schedule_title: 'Schedule',
        lb_hour_init_work: 'Work start time',
        pl_hour_init_work: 'Work start time',
        lb_work_anniversary: 'Work anniversary',
        ht_work_anniversary: 'Set anniversary for team celebration',
        lb_timezone: 'Time zone',
        tp_timezone: `You can define your own time zone. Members in your org can have different time zones.
        <a class='link' href='https://help.dailybot.com/hc/en-us/articles/360056363474-Is-it-possible-to-have-different-time-zones-in-my-organization-given-that-my-team-is-spread-across-different-countries' target='_blank'>Learn more</a>.`,
        pl_timezone: 'Type to filter by location or GMT',
        lb_timeoff: 'Time off work',
        check_active_timeoff: 'Define time off from work or vacation',
        txt_no_timeoff: 'You have not set up any time off periods.',
        txt_no_timeoff_member: '{name} has not set any time off.',
        txt_no_timeoff_org:
            'You have not set up any future time off periods for your organization',
        txt_timeoff: 'You have 1 or more time off periods set.',
        txt_timeoff_member: '{name} has 1 or more time off periods set.',
        txt_timeoff_org:
            'Your organization has 1 or more upcoming time-off periods.',
    },
    organization: {
        subtitle: 'Organization Settings',
        nav_title: 'Organization',
        organization_data: 'Organization data',
        lb_avatar: 'Organization logo',
        lb_name: 'Name',
        pl_name: 'Organization name',
        channel: 'Communication channel',
        connected_date: 'Connected to {platform}',
        connection_error: 'Chat integration revoked. Please re-login.',
        connection_successful: 'Active',
        horary: 'Schedule',
        lb_hour_init_work: 'Work start time',
        tp_hour_init_work:
            'DailyBot uses this time to know when to contact your team. Each member can set their preferences.',
        pl_hour_init_work: 'Pick a time for when work starts…',
        lb_time: 'Time preferences',
        lb_timezone: 'Time zone',
        tp_timezone:
            "This is the main time zone, it's set by default for new members but they can also configure their own time zone. <a class='link' href='https://help.dailybot.com/hc/en-us/articles/360056363474-Is-it-possible-to-have-different-time-zones-in-my-organization-given-that-my-team-is-spread-across-different-countries' target='_blank'>Learn more</a>.", // eslint-disable-line
        pl_timezone: 'Choose main time zone',
        no_timezone_options: 'No results are found for this search.',
        lb_timeoff: 'Time off from work',
        check_active_timeoff:
            'Define time off from work or vacation for your organization',
        lb_security: 'Security',
        lb_allow_login_with_email: 'Allow signing in with email/password',
        tp_allow_login_with_email:
            'If you disable this feature, users must use the single sign on to get into DailyBot.',
        lb_configure_two_factor_auth:
            'Force two factor authentication for email/password logins',
        lb_configure_dashboard_command:
            'Allow users to login to the web app using the chatbot "dashboard" command',
        lb_configure_custom_session_timeout_enabled:
            'Enable custom session timeout',
        lb_members_with_visibility_restricted:
            'Limit member access to organization information.<br><a target="_blank" href="https://help.dailybot.com/hc/en-us/articles/15514905154707">Learn more.</a>',
        lb_hint_configura_custom_session_timeount:
            'Current DailyBot session timeout is 365 days',
        session_timeout_options: 'Inactivity timeout',
        session_timeout_option_900: '15 minutes',
        session_timeout_option_1800: '30 minutes',
        session_timeout_option_3600: '1 hour',
        session_timeout_option_7200: '2 hours',
        session_timeout_option_21600: '6 hours',
        session_timeout_option_86400: '24 hours',
        session_timeout_option_129600: '36 hours',
        teams_data: 'Teams',
        total_member_by_team: '{count} Member | {count} Members',
        chat_preferences: 'Chat preferences',
        language: 'Bot language',
        bot_language: 'Bot language',
        edit_basic_information_to_specific_member: {
            title: 'Who can edit basic settings of your DailyBot users?',
            hint: 'Team admins and managers will be able to edit basic settings of users that belong to teams they manage.',
            options: {
                org_admins: 'Org Administrators',
                managers_and_team_admins: 'Org Admins, Team Managers, Team Admins',
            },
        },
        lb_language: 'Language',
        tp_language:
            "DailyBot's chatbot will use this language to communicate with all users", // eslint-disable-line
        tp_language_no_admin: 'DailyBot language for chatting',
        lb_domains: 'Connected domains',
        lb_domains_support: 'Do you need to connect more domains?',
        lb_export_data: 'Export data',
        lb_delete_organization: 'Delete organization',
        feature_segregation: {
            label: 'Features',
            features: {
                followups: {
                    label: 'Check-ins',
                    description: 'Check-ins description',
                },
                kudos: {
                    label: 'Kudos',
                    description: 'Kudos description',
                },
                ai: {
                    label: 'AI',
                    description: 'AI description',
                },
                forms: {
                    label: 'Forms',
                    description: 'Forms description',
                },
                commands: {
                    label: 'Commands',
                    description: 'Commands description',
                },
                workflows: {
                    label: 'Workflows',
                    description: 'Workflows description',
                },
                integrations: {
                    label: 'Integrations',
                    description: 'Integrations description',
                },
            },
            feature_enabled_by: '{featureName} enabled by:',
            enabled_on_chat: 'Chat',
            enabled_on_web: 'Web',
            updateModal: {
                title: 'Please confirm',
                subtitle_on: 'Activate "{featureName}" feature',
                subtitle_off: 'Deactivate "{featureName}" feature',
                description_on:
                    'By turning on this feature, you will enable it for all members of your organization. Are you sure you want to proceed?',
                description_off:
                    'By turning off this feature, you will disable it for all members of your organization. Are you sure you want to proceed?',
            },
        },
        dashboard_user_language: {
            title: 'Dashboard preferences',
            hint: 'If you enable this setting, you will change the dashboard language for all members.',
            label: 'Change dashboard language for all members',
            selector_label: 'Dashboard language for all members',
        },
        modal: {
            restrict_members: {
                title: 'Confirm access level change',
                description:
                    'You’re limiting the <strong>access of users with Member roles</strong> to organization info. They won’t see users, teams, or channels. Proceed?',
                disabled_description:
                    'By turning off this feature, users with Member roles will have full access to organization information, including users, teams, and channels. Are you sure you want to proceed?',
            },
            export_data: {
                title: 'Data export',
                title_list: 'The data collected about this organization:',
                list: {
                    '1': 'Organization identification data',
                    '2': 'Team and members basic info',
                    '3': 'User daily reports',
                    '4': 'Motivation metrics',
                },
                btn_ok: 'Export data',
            },
            init_work_time: {
                title: 'Change work start time',
                update: 'Change time for all members of the organization',
                save: 'Save',
            },
            notify_export_data: {
                title: "Ok! We're working on exporting the data", // eslint-disable-line
                description:
                    "Once we have the data ready, you'll receive an email with a download link.", // eslint-disable-line
                link_ok: 'Close and go back',
            },
            delete_account: {
                feedback_title: " You're deleting your Organization", // eslint-disable-line
                feedback_btn_continue: 'Continue deletion',
                feedback_btn_cancel: 'Cancel process',
                title: 'Organization deletion',
                description:
                    'Deleting the organization {orgName} causes all of its data to be destroyed. Your request will be processed by our system in 5 days.',
                lb_name: 'Organization name',
                pl_name: 'For safety, type the organization name',
                btn_ok: 'Delete organization',
            },
            notify_delete_account: {
                title: 'Your organization will be deleted',
                description:
                    '<strong>The deletion will be processed in 5 days</strong>. If you need to stop this process, please contact our support team.',
                link_ok: 'Ok, sign out',
            },
            'table-users': {
                title: 'Users of {name} Organization',
                add_member: 'Add {integrationType} member by name or email...',
                add_member_google_directory:
                    'Type an e-mail or name from Google Directory to invite',
                emptycase_add_member: 'You already invited all the available users.',
                find_member: 'Search for member of {orgName}',
                appoint_admin: 'Add <strong>Org Administrator</strong> role',
                appoint_manager: 'Add <strong>Teams Manager</strong> role',
                remove_admin: 'Remove <strong>Org Administrator</strong> role',
                remove_manager: 'Remove <strong>Teams Manager</strong> role',
                disabled: 'Deactivate member',
                copy_id: 'Copy User ID',
                enabled: 'Activate member',
                link_invitation_members: {
                    hangouts:
                        '<strong>Invite your co-workers via URL.</strong> They must be members of your G-Suite org:',
                },
                copy_invitation_link: 'Copy invitation link',
                success_message_send_invitation: 'Invitation sent',
                new_user_in_not_plan_free:
                    'Member invited! New active members may affect your subscription fee. | Members invited! New active members may affect your subscription fee.',
                remove: {
                    title: 'Confirm the deactivation of member',
                    text: 'The data will remain stored in case you want to re-activate the member later.',
                    btn_yes: 'Deactivate',
                    btn_cancel: 'Cancel',
                },
                errors: {
                    invalid_user_external_data: 'Invalid user external data',
                    expecting_array_list_of_members: 'Expecting array list of members',
                    expecting_integer_team_id: 'Expecting integer team id',
                    team_id_is_not_provided_to_invite_member:
                        'Team id is not provided to invite member',
                    user_to_invite_not_found: 'User to invite not found',
                    user_to_invite_does_not_belong_to_this_organization:
                        'User to invite does not belong to this organization',
                    member_is_already_part_of_organization:
                        'Member is already part of organization',
                    params_validation_error: 'One or more params are invalid',
                },
            },
            pending_user: {
                title: 'Manage member requests',
                subtitle: '{count} pending member | {count} pending members',
            },
            text_pending_onboarding: 'Unfinished onboarding',
            text_bot_disabled:
                'The chatbot is deactivated for this user. Ask them to type "enable" via DM to activate it again.',
            text_bot_cannot_send_messages: {
                base: 'The bot is not working for this user because of their Discord privacy settings. {link}',
                link: 'Learn more',
            },
        },
        timezone_hour_modal: {
            sync_hour_init_work: {
                title: {
                    base: 'Updating "{type_field}" {br} of the organization',
                    type_field: 'work start time',
                },
                text: 'Do you want this field to be additionally updated for all members of the organization?',
                success_sync_message:
                    'Work start time was updated for all members of your organization.',
                success_not_sync_message: 'Work start time was updated only for you.',
            },
            sync_timezone: {
                title: {
                    base: 'Updating "{type_field}" {br} of the organization',
                    type_field: 'time zone',
                },
                text: 'Do you want this field to be additionally updated for all members of the organization?',
                success_sync_message:
                    'Time zone was updated for all members of your organization.',
                success_not_sync_message: 'Time zone was updated only for you.',
            },
        },
        timeoff_modal: {
            sync_timeoff: {
                title: {
                    base: 'Schedule time off for your organization',
                    type_field: 'time off',
                },
                text: 'If you schedule time off during this period, everyone in your organization will miss their automated reminders. Are you sure?',
                success_sync_message:
                    'Time off was updated for all members of your organization.',
                success_not_sync_message: 'Time off changes canceled',
                confirm_text: "Yes, I'm sure", // eslint-disable-line
                cancel_text: 'No, nevermind',
            },
        },
        timeoff_deactivation_modal: {
            sync_timeoff: {
                title: {
                    base: 'Disable time off for your organization',
                    type_field: 'time off',
                },
                text: 'If you disable time off, everyone in your organization will reactivate their automated reminders. Are you sure?',
                success_sync_message:
                    'Time off was disabled for all members of your organization.',
                success_not_sync_message: 'Time off changes canceled',
                confirm_text: "Yes, I'm sure", // eslint-disable-line
                cancel_text: 'No, nevermind',
            },
        },
    },
    members: {
        title: 'Members',
        time_off_modal: {
            title: 'Manage your time off',
            title_member: 'Manage {name} time off',
            title_org: 'Manage organization-wide time off',
            subtitle_org: 'The configured time off will be applied to all members',
            pl_name: 'Type a simple name (Optional)',
            empty: 'You have not set up any future time off periods.',
            header_type: 'Type',
            header_name: 'Name',
            header_date: 'Date',
            dateFormat: 'From <strong>{start}</strong> Until <strong>{end}</strong>',
            personal: 'Personal',
            company: 'Company',
            addTimeOff: 'Add time off',
            manageTimeOff: 'Manage time off',
            viewTimeOff: 'View time off',
            success: 'The new time off period has been successfully set',
            nameTimeOff: 'Time off - {day} days',
            confirmation_delete: 'Delete this time off?',
            lb_yes: 'Yes',
            lb_no: 'No',
            error_date: 'Please select a date',
            save: 'Save',
        },
        preview: 'Preview',
        subtitle: {
            main: '{activeMembers} - {inactiveMembers}',
            auxillary: '{Members}',
            active_members: '{count} active | {count} active ',
            inactive_members: '{count} inactive member | {count} inactive members',
            only_active_members: '{count} active member | {count} active members',
        },
        pl_search_members: 'Search for member of DailyBot',
        btn_add_member: 'Invite people',
        text_time_off: '<strong>Time off</strong> until {month} {day}, {year}',
        text_time_off_start:
            'Time off until scheduled for {monthStart} {dayStart}, {yearStart} until {monthEnd} {dayEnd}, {yearEnd}',
        text_view_ony: 'Read-only',
        lb_export_members: 'Export members data',
        lb_update_members: 'Bulk edit member info',
        lb_sync_members: 'Sync all profile photos from Slack',
        lb_syncing_members: 'Syncing all profile photos from Slack',
        lb_invite_guest_members: 'Invite guests (external people)',
        message_synced_members: 'Synced all profile photos from Slack',
        table_members: {
            fields: {
                user: 'User',
                role: 'Role',
                billing_status: 'Billing Status',
            },
            empty_case: {
                description: 'No results for this search.',
                reset_filters: 'Reset filters',
            },
        },
        add_members: {
            title: 'Invite people to DailyBot',
            subtitle: 'Invite specific people from your chat platform',
            lb_select_members: 'Select the people to add',
            pl_search_members: 'Search by name or email',
            btn_send: 'Invite',
            btn_send_hangouts: 'Send invitation via email',
            discord: {
                pl_search_members: 'Search by name',
                empty_case: "We didn't find people pending to be invited to DailyBot", // eslint-disable-line
            },
            slack: {
                empty_case: "We didn't find people pending to be invited to DailyBot", // eslint-disable-line
            },
            msteams: {
                empty_case: `You should add <strong>{'@'}DailyBot</strong> to a Team in Microsoft Teams first. You can do it now and reload this page to invite members.
                          <a target="_blank" href="https://help.dailybot.com/hc/en-us/articles/4401865165843">Learn more.</a>`,
                empty_case_with_teams_added:
                    'You have no users to invite from your team, they are all already in DailyBot',
                empty_case_require_select_a_team:
                    'You must first select a team to see users to invite here',
                select_team: 'Invite from specific team in MS Teams',
                select_team_help_text:
                    "Can’t find your MS Teams’ team here? <a class='link' href='https://help.dailybot.com/hc/en-us/articles/4401865165843-Add-DailyBot-to-a-team-in-Microsoft-Teams' target='_blank'>Learn how to install DailyBot</a>", // eslint-disable-line
                select_team_placeholder: 'Select a team to filter',
            },
            hangouts: {
                members_hangouts: 'Organization Members on Google Chat',
                empty_case: "Can't see your team users?", // eslint-disable-line
                tp_message:
                    "Each user from your team should first add <strong>{'@'}DailyBot</strong> and send a message to him on <a class='link' href='{urlHangouts}' target='_blank'>Google Chat</a>.", // eslint-disable-line
            },
        },
        msteams_teams_label: 'Is DailyBot installed in my team?',
        teams_info_modal: {
            title: 'DailyBot is properly installed in these teams',
            title_empty:
                'DailyBot is not properly installed in your teams on Microsoft',
            table: {
                header: 'Your teams',
            },
            footer: {
                question: "Can't find your team?", // eslint-disable-line
                guide:
                    "Check out <a href='{urlGuide}' target='_blank'>this quick guide</a> to troubleshoot.", // eslint-disable-line
            },
        },
    },
    teams: {
        title: 'Manage your teams',
        subtitle:
            'You can use your teams for configuring check-ins, filtering mood charts, giving kudos and more.',
        nav_title: 'Teams',
        team_data_edit: 'Settings view',
        lb_name: 'Name',
        pl_name: 'Team name',
        lb_creation_date: 'creation date',
        connected_date: 'Team created on',
        by_default_lb: 'Default',
        syncing_members: 'Updating members...',
        tp_by_default: {
            title: 'Your org always requires a default team',
            message:
                'Members will join this team automatically when they sign up by themeselves to your org.',
        },
        tp_synchronized_channels: 'Synced with {channels} | Synced with {channels}',
        tp_synchronized_automatically_channels:
            'Synced automatically with {channels} | Synced automatically with {channels}',
        lb_state: 'Status',
        pl_state: 'Is it active?',
        lb_delete: 'delete team',
        msg_delete: "You won't be able recover the team or its related data", // eslint-disable-line
        delete_team: 'Delete team',
        set_default: 'Set by default',
        copy_uuid: 'Copy team ID',
        edit_team: 'Edit team',
        settings_skill:
            "Go to <span class='name-skill'>{skill}</span> configuration", // eslint-disable-line
        config_skill: 'Configure',
        active_skill: 'Enable',
        empty_teams: "You don't have any teams yet", // eslint-disable-line
        message: {
            deleted: 'Team deleted',
            name_updated: 'Team name updated',
            by_default: 'Team set as default for new members',
        },
        modal: {
            'table-users': {
                title: '{name} team members',
                add_member: 'Add {integrationType} member by name or email...',
                emptycase_add_member: 'You already invited all the available users.',
                find_member: 'Search for member of {teamName}',
                success_message_changed_synced_channels:
                    'There will be a charge for members who require a DailyBot license to sync.',
                success_message_changed_synced_automatically_channels:
                    'The team participants will sync automatically with selected channels',
            },
            create_team: {
                new_team_title: 'Create new team',
                was_created_team_title: 'You just created a team!',
                name: 'Name your team',
                include_myself: 'Include me in the team',
                placeholder: 'Type the name for your team',
                pl_search: 'Search by name or email',
                'add-all': 'all',
                none: 'none',
                empty_case_search: 'No results found',
                loading_members: 'Loading...',
                lb_sync_team_participants_with_channels:
                    'Keep sync with all users from chat channel',
                close_next: 'Close and continue',
                btn_next: 'Create',
                count_selected: "You've chosen {count} of {total}", // eslint-disable-line
                guide_text_to_create_team:
                    'You’ll become a member of this team as owner, you can change that later.',
                message_success:
                    'Now you can add members to your team {0} and use this Team when setting up check-ins, giving kudos, or creating chatbot shortcuts.',
                btn_finish: 'Finish',
                lk_create_other_team: 'Create another team',
                discord: {
                    add_member: 'Add Discord members',
                    empty_case:
                        "You should add <strong>{'@'}DailyBot</strong> to a channel in Discord first. You can do it now and reload this page to invite members.", // eslint-disable-line
                },
                slack: {
                    add_member: 'Add Slack members',
                    empty_case:
                        "You should add <strong>{'@'}DailyBot</strong> to a channel in Slack first. You can do it now and reload this page to invite members.", // eslint-disable-line
                },
                msteams: {
                    add_member: 'Add Microsoft Teams members',
                    empty_case: `You should add <strong>{'@'}DailyBot</strong> to a Team in Microsoft Teams first. You can do it now and reload this page to invite members.
                          <a target="_blank" href="https://help.dailybot.com/hc/en-us/articles/4401865165843">Learn more.</a>`,
                },
                hangouts: {
                    add_members: 'Add members',
                    members_hangouts: 'Organization Members on Google Chat',
                    empty_case: "Can't see your team users?", // eslint-disable-line
                    tp_message:
                        "Each user from your team should first add <strong>{'@'}DailyBot</strong> and send a message to him on <a class='link' href='{urlHangouts}' target='_blank'>Google Chat</a>.", // eslint-disable-line
                },
            },
            remove_member: {
                title: 'Confirm removal',
                text: 'Are you sure you want to remove this member?',
            },
        },
        remove: {
            title: 'Confirm removal',
            text: 'Are you sure you want to remove this team?',
        },
        remove_notify: {
            title: 'Deletion confirmed',
            text: 'The team has been deleted',
        },
        'table-users': {
            appoint_admin: 'Add <strong>Team Administrator</strong> role',
            remove_admin: 'Remove <strong>Team Administrator</strong> role',
            remove: 'Remove member',
        },
    },
    billing_info: {
        title: 'Plan information',
        sidebar_title: 'Billing plan',
        plan_free: 'Free',
        nav_title: 'Plan',
        plan: 'Plan',
        next_billing: 'Next bill on ',
        check_plans: 'check plans',
        show_more: 'Show more',
        description_plan: 'Description',
        payment_billing_info: 'Payment and Billing Information',
        payment_method: 'Payment method',
        billing_period: 'Billing Period',
        update: 'Update',
        change: 'Change',
        save: 'Save',
        annually_period: 'Yearly',
        monthly_period: 'Monthly',
        billing_information: 'Billing info',
        billing_information_empty_case: {
            message: 'You don’t have any billing or payment info available.',
            upgrade: 'Start by upgrading your plan',
        },
        what_includes: {
            on_free: '🔭  See your current limits ->',
            on_basic: '🌟 See what’s in your plan ->',
            on_standard: '🚀 See what’s in your plan ->',
            on_enterprise: '🛰️ See what’s in your plan ->',
        },
        invoice_email: 'Email for invoices',
        pl_invoice_email: 'Update email',
        date: 'Date',
        number_users: 'Total users',
        description: 'Description',
        cost: 'Total',
        status: 'Status',
        invoice: 'Invoice',
        get_invoice: 'View invoice',
        auto_join: {
            title: 'Allow new members and add them to plan automatically',
            description:
                'You can allow new members to join your organization and get attached to this billing plan. If you disable this preference, administrators will have to approve each new membership.',
            lb_slide: 'Allow members to auto-join plan',
        },
        payment_history: {
            title: 'Payments history',
            description: "You don't have any previous payments yet.", // eslint-disable-line
            upgrade_text: 'Start by upgrading your plan',
        },
        plan_info: {
            active_member_label: '{totalActiveMembers} active members',
            active_members_info: 'There are {activeLabel} in your plan.',
            flat_fee_members_info: 'Up to {limit} on your plan.',
            active_members_and_total_seats_for_enterprise_info:
                'You are using {totalActiveMembers} of {totalSeatsInPlan} allowed licenses.',
            undefined_total_seats: 'a yet not defined number of',
            name_plan: '{namePlan} Plan',
            name_plan_canceled: '{namePlan} plan (canceled)',
            free_description:
                'Enjoy a limited version of DailyBot. Not all features included.',
            renewal_info:
                "Upcoming renewal on <span class='date'>{date}</span> for <span class='amount'>{amount}</span> <span class='period'>( {period} )</span>", // eslint-disable-line
            renewal_info_with_discount:
                "Your plan has a {percentage}% discount. Upcoming renewal on <span class='date'>{date}</span> for <span class='amount'>{amount}</span> <span class='period'>( {period} )</span>", // eslint-disable-line
            renewal_info_without_price:
                "Upcoming renewal on <span class='date'>{date}</span> <span class='period'>( {period} )</span>", // eslint-disable-line
            renewal_info_with_trial_plan:
                "Your trial expires on <span class='date'>{date}</span> and will be downgraded to Free (with limits).", // eslint-disable-line
            renewal_info_promo_code_lifetime: 'Lifetime',
            licenses_valid: "Licenses valid until <span class='date'>{date}</span>", // eslint-disable-line
            cancel_success:
                'We understand. Your subscription cancellation will be effective on {date}. Thank you for being part of DailyBot!',
            cancel_success_to_free: 'Trial canceled, you are now in Free plan',
            yearly: 'Annual',
            monthly: 'Monthly',
            manage_active_members: 'Manage active members',
            upgrade_button: 'Change plan',
            upgrade_trial_button: 'Upgrade your trial',
            contact_us_button: 'Contact us',
            upgrade_plan: 'Change',
            notice_interruption_days:
                "We'll make <strong>{attempts} payment collection attempts</strong> during the following <strong>{days} days</strong> after the payment due date.", // eslint-disable-line
            notice_interruption:
                '<strong>Important:</strong> we couldn’t process your last subscription payment.',
            warning_plan_with_discount:
                'Your plan currently has a discount, if you change your plan there won’t be a discount applied.',
            promo_code: 'Promo code: {promoCode}',
        },
        invoice_info: {
            name_plan: '{namePlan} Plan',
            user: 'Users',
            yearly: 'Annual',
            monthly: 'Monthly',
        },
        modify_enterprise_plan: {
            title: 'Modify your plan',
            message:
                'Need to add more users or improve your plan? Please contact {emailSupport}.',
            reseller_message:
                'This plan was acquired through a reseller. Please contact them to review terms or make changes. {resellerContactInfo}',
        },
        update_subscription: 'Update billing information',
        cancel_subscription: 'Cancel Subscription',
        invoice_not_availabe: 'Not available',
        status_items: {
            PAID: 'Paid',
            UNPAID: 'Unpaid',
        },
        github_max_seats_modal: {
            title: 'About the Pack',
            description:
                ' You can get our GitHub Student Developer Pack. This pack can be applied if you have up to {maxSeatsAllowed} organization members. Please review the members and make sure you have {maxSeatsAllowed} or less, and then try again.',
            link_manage_members: 'Manage members',
            link_try_again: 'Try again',
        },
    },
    integrations: {
        nav_title: 'API & integrations',
        description:
            'Connect DailyBot with other tools your team is using and create efficient workflows through your chat.',
        connect_your_app: {
            link_learn: 'here',
            link_share: 'Share it with us!',
            learn: 'Learn how to connect your apps {link}',
            // eslint-disable-next-line quotes
            share: "Don't see the app you use? {link}",
        },
        api_webhook: {
            link_learn: 'Developer API',
            learn: 'Read more about our {link}',
        },
        dropdown_mobile_title: 'Integrations view',
        help_text_with_link: {
            base: 'Visit the {link} for more details.',
            link: 'integrations help page',
        },
        upgrade_description:
            'To activate the integrations you need an Advanced or Enterprise plan. We invite you to upgrade your plan.',
        upgrade_popup_description: '{upgrade} your plan to use this function',
        upgrade_popup_text: 'Upgrade',
        enabled: 'enabled',
        connect: 'Connect',
        disconnect: {
            label: 'Disconnect',
            success_message: 'Integration disconnected',
        },
        edit_username: {
            title: 'Manage members',
            subtitle: 'Manage user mapping with {integration}',
            description:
                'Manage the {integration} usernames for each of users to make sure that this integration will work and DailyBot will correlate properly the user’s {integration} activity within DailyBot',
            members_link: 'View user list',
            success_update: 'Username updated',
            member_table: {
                empty_case: 'You don’t have registered members yet',
                empty_date: 'No activity yet',
            },
        },
        error: {
            exist_username: 'This username exist for other user or integration',
            delete_username: 'It’s not possible to delete this field',
            invalid_api_key:
                'Invalid input. Please enter your Linear Personal API Key.',
            unauthorized: 'Invalid input. Please enter your Shortcut API Token.',
        },
        api_keys: {
            nav_title: 'API Keys',
            nav_title_small: 'Keys',
            title: 'Integrations',
            subtitle: 'Manage your API keys for integrations',
            strange_key: 'Only Owners can see their API keys',
            generate_api_key: {
                title: 'API Keys',
                subtitle:
                    'API keys can be used to interact with the DailyBot API. Learn more with our <a href="{url}" target="_blank">API documentation.',
                btn_generate: 'Generate API Key',
                btn_regenerate: 'Generate another API Key',
                success_message: 'Your Secret API Key was generated successfully.',
                error_message_unavailable:
                    'Invalid input. Please enter your ClickUp API Key.',
                copy_message: 'It was copied to clipboard.',
                modal: {
                    create: {
                        title: 'Create new API Key',
                        description: 'Name your API key',
                        placeholder: 'Type the name of your API key',
                        btn_generate: 'Generate',
                        btn_edit: 'Save',
                        message_api_key_added: 'Your API key was successfully',
                    },
                    edit: {
                        title: 'Edit API Key',
                    },
                    regenerate: {
                        title: 'Regenerate your API Key',
                        description:
                            'This action may cause your integration to stop functioning. Carefully review it before proceeding.',
                        btn_done: 'Regenerate',
                        btn_discard: 'Discard',
                        success_message: 'API Key was regenerated',
                    },
                    delete: {
                        title: 'Are you sure that you want delete your API Key?',
                        description:
                            'This action will cause some integrations to stop working and you cannot rollback this operation.',
                        btn_done: 'Yes, Delete API Key',
                        success_message: 'API Key was deleted',
                    },
                    cancel_btn: 'Cancel',
                },
            },
            secrete_api_key: {
                title: 'Secret API Key',
                secrete_copied_message: 'Secret API Key copied!',
                empty_case: 'You don’t have an API Key yet. Press Generate API  Key',
            },
            api_keys_board: {
                header: {
                    head: {
                        name: 'Name',
                        key: 'API Key',
                        owner: 'Owner',
                        created_at: 'Created at',
                        last_usage_at: 'Last usage at',
                        actions: '',
                    },
                },
                content: {
                    nameNotDefined: 'Not defined',
                    actions: {
                        regenerate: 'Regenerate',
                        edit: 'Edit',
                        show: 'Show',
                        hide: 'Hide',
                        copy: 'Copy',
                        activate: 'Activate',
                        deactivate: 'Deactivate',
                        remove: 'Delete',
                    },
                },
            },
        },
        organization_private_keys: {
            nav_title: 'Private Keys',
            nav_title_small: 'Private Keys',
            about_private_keys: {
                title: 'Your private keys ({count})',
                description:
                    'Private keys can be used in the configuration of your webhooks to add authentication extra level with an external service and have two-step authentication. {learnMore}',
                description_learn_more: 'Learn more.',
                btn_add_private_key: 'Create private key',
            },
            keys_board: {
                header: {
                    name: 'Name',
                    key_type: 'Type',
                    key_format_type: 'Format type',
                },
                content: {
                    key_type: {
                        RSA: 'RSA',
                        JKS: 'JKS',
                        X509: 'X509',
                        KEY_CERTIFICATE_PAIR: 'KEY_CERTIFICATE_PAIR',
                    },
                    key_format_type: {
                        text: 'Text',
                        file: 'File',
                    },
                },
                empty_case: 'You have not configured any private keys yet.',
            },
            modal_delete_private_key: {
                title: 'Are you sure you want to delete this private key?',
                description:
                    'This will cause that an external service will stop receiving events from this private key.',
                btn_done: 'Yes, delete this private key',
                cancel_btn: 'Cancel',
                success_message: 'Private key deleted',
            },
            manage_private_keys: {
                form: {
                    title: {
                        create: 'Create Private Key',
                        update: 'Update Private Key',
                    },
                    subtitle: {
                        create: 'Add a new private key to use via outgoing webhooks',
                        update: 'Update private key to use via outgoing webhooks',
                    },
                    fields: {
                        name: {
                            label: 'Name',
                            placeholder: 'Type a name',
                        },
                        key_type: {
                            label: 'Key type',
                            placeholder: 'Select key type',
                            options: {
                                RSA: 'RSA',
                                JKS: 'JKS',
                                X509: 'X509',
                                KEY_CERTIFICATE_PAIR: 'KEY_CERTIFICATE_PAIR',
                            },
                        },
                        key_format_type: {
                            label: 'Key format type',
                            placeholder: 'Select key format type',
                            options: {
                                TEXT: 'Text',
                                FILE: 'File',
                            },
                        },
                        ascii_key: {
                            label: 'Ascii key',
                            placeholder: 'Type ascii key',
                        },
                        password: {
                            label: 'Password',
                            label_change_password: '(Change password)',
                            placeholder: 'Type password (optional)',
                            hint: "This password will be used to access the information of the private key file if it's required.", // eslint-disable-line
                        },
                        upload_file: {
                            placeholder: 'Select a file {fileType}',
                        },
                        auth_params: {
                            label: 'Auth params',
                            hint: 'The authentication params will be used to build the headers and data in the authenticate request with the external service.',
                        },
                    },
                    button: {
                        create: 'Create private key',
                        update: 'Update private key',
                        delete: 'Delete private key',
                    },
                    success_message: 'Private key created successfully',
                },
            },
        },
        outgoing_webhooks: {
            nav_title: 'Outgoing Webhooks',
            nav_title_small: 'Webhooks',
            title: 'Outgoing Webhooks',
            subtitle: 'Manage webhook endpoints that receive events from DailyBot',
            about_webhooks: {
                title: 'Your hooks ( {count} )',
                btn_add_web_hook: 'Add webhook',
                description: {
                    message:
                        'Outgoing webhooks allow you to send DailyBot activity to external services and custom integrations. {link} {icon_link} for more details.',
                    link: 'Check out our Webhook API documentation',
                },
            },
            config_web_hooks: {
                title: 'Payload URL',
                test_web_hooks: 'Test Webhook',
                empty_case: 'You have not configured any webhooks yet.',
            },
            read_more_about_web_hooks: {
                message: 'Read more about from our {link}',
                link: 'Developer API',
            },
            webhooks_board: {
                header: {
                    head: {
                        name: 'Name',
                        url: 'Url',
                        objects: 'Subscriptions',
                        last_execution: 'Last execution',
                        actions: '',
                    },
                },
                content: {
                    nameNotDefined: 'Not defined',
                    inactive: '(inactive)',
                    subscribed_objects: {
                        followup: '(Check-in)',
                        form: '(Form)',
                        no_subscriptions:
                            'All check-ins and forms that the owner ({ownerFullName}) of this webhook has access to.',
                    },
                    last_execution: {
                        last_execution_request: 'Last execution request',
                        last_execution_response: 'Last execution response',
                        last_execution_empty: 'No executions have been submitted yet.',
                        failed_attempts: {
                            singular: '{total} failed attempt',
                            plural: '{total} failed attempts',
                        },
                    },
                    actions: {
                        edit: 'Edit',
                        activate: 'Activate',
                        deactivate: 'Deactivate',
                        remove: 'Remove',
                    },
                },
            },
            modal_manage_web_hook: {
                configure_url_web_hook: {
                    title: 'Add Webhook',
                    lb_url_web_hook: 'Webhook URL',
                    pl_url_web_hook: 'Paste your webhook URL',
                    lb_name_web_hook: 'Webhook name',
                    pl_name_web_hook: 'Type a name for the webhook',
                    lb_bearer_web_hook: 'Bearer Token',
                    pl_bearer_web_hook: 'Paste the bearer authentication (optional)',
                    description: {
                        message:
                            'Outgoing webhooks allow you to send DailyBot activity to external services and custom integrations. {link} for more details.',
                        link: 'Check out our Webhook API documentation',
                    },
                    lb_active_web_hook: 'Active',
                },
                auth_type: {
                    label: 'Auth type',
                    placeholder: 'Select auth type',
                    hint: 'Auth type required by the external service.',
                    options: {
                        NONE: 'None',
                        OAUTH_20: 'Oauth 2.0',
                        HTTPS: 'HTTPS',
                    },
                },
                auth_key: {
                    label: 'Auth key',
                    placeholder: 'Select auth key',
                    hint: 'Private auth key will be used to authenticate with the external service. {hintLink}',
                    hint_link: 'Create private key.',
                },
                auth_access_url: {
                    label: 'Auth access url',
                    placeholder: 'Type auth access url',
                    hint: 'Auth access url will be used to authenticate with the external service.',
                },
                configure_web_hooks_events: {
                    title: 'Configure Webhook Events',
                    subtitle: 'Define events to notify to this webhook',
                },
                modify_web_hooks_events: {
                    title: 'Modify your webhook',
                    subtitle: 'Change URL, hook events or check-in subscriptions',
                },
                web_hooks_events: {
                    title: 'Hook events',
                    followups_response_finished: 'Check-in response completed',
                    followups_response_updated: 'Check-in response updated',
                    followups_response_deleted: 'Check-in response deleted',
                    followups_response_report_ready: 'Check-in aggregated report ready',
                    mood_feedback_completed: 'Anonymous mood tracking responded',
                    forms_response_created: 'Form response created',
                    forms_response_updated: 'Form response updated',
                    forms_response_deleted: 'Form response deleted',
                },
                filter_by_subscribed_object: {
                    label: 'Filter events per check-in or forms',
                    placeholder: 'Add a check-in or form',
                    followup: '(Check-in) {name}',
                    form: '(Form) {name}',
                    object_inactive: ' - inactive',
                    description:
                        "Select events coming from check-ins or forms. If you don't select any, it will report all events that the owner ({webHookOwner}) of this webhook has access to.", // eslint-disable-line
                    web_hook_owner_you: 'You',
                    void_option: 'Not filtered',
                },
                btn_add_web_hook: 'Add webhook',
                btn_edit_web_hook: 'Save webhook',
                message_webhook_added: 'Webhook created',
                message_webhook_modified: 'Webhook modified',
                message_webhook_deactivated: 'Webhook deactivated',
                message_webhook_activated: 'Webhook activated',
            },
            modal_delete_web_hook: {
                title: 'Are you sure you want to delete this webhook?',
                description:
                    'This will cause that an external service will stop receiving events from this webhook.',
                btn_done: 'Yes, delete this webhook',
                cancel_btn: 'Cancel',
                success_message: 'Webhook deleted',
            },
        },
        workflow_trigger: {
            nav_title: 'Workflow Trigger [Beta]',
            title: 'Workflow Trigger Integration',
            subtitle:
                'Send any event to DailyBot to then trigger a DailyBot Workflow.',
            web_hook: {
                title: 'Trigger API incoming Webhook',
                subtitle:
                    'Send HTTP POST requests to this URL to push an event to DailyBot and create new workflows that will trigger when such events are processed.',
                label: 'Your Webhook URL',
                web_hooks_events: {
                    description:
                        'Some examples of what you can achieve with these workflows:',
                    event_1:
                        'Broadcast custom events from your system as DailyBot notifications in channels, DMs, or emails.',
                    event_2:
                        'Once a check-in is completed, send a message via chat to a manager, or send an email to third party.',
                    event_3:
                        'Once a form response is given, take the response and broadcast via chatbot DMs to one or many users all at once.',
                    event_4:
                        'Once a meeting finished, dispatch an event to DailyBot, then DailyBot can trigger a check-in or form to survey a participant.',
                },
            },
        },
        activity_api: {
            nav_title: 'Activity API',
            title: 'Activity API Integration',
            subtitle:
                'Log any user/employee activity in DailyBot (from any context or any tool)',
            web_hook: {
                title: 'Incoming Webhook for Activity Logging',
                subtitle:
                    "Add any user activity to DailyBot so it shows up in the DailyBot check-in reports or user's activity feeds.", // eslint-disable-line
                label: 'Your Webhook URL for Activity Tracking',
                web_hooks_events: {
                    description: 'Examples of activities you can log in DailyBot:',
                    event_1:
                        'The user completed a meeting via Zoom, Google Calendar or some other external tool',
                    event_2:
                        'The user completed a milestone in a project management tool',
                    event_3:
                        'Any App event coming via Zapier: CRM updates, demo booked, phone call made, etc.',
                },
            },
        },
        github: {
            nav_title: 'GitHub',
            title: 'GitHub Integration',
            subtitle: 'Attach GitHub activity to check-in reports',
            web_hook: {
                title: 'Incoming Webhook',
                subtitle:
                    "Configure your GitHub repositories to share event updates with DailyBot. These events and information will be summarized in each user's check-ins.", // eslint-disable-line
                label: 'Your Webhook URL for GitHub',
                web_hooks_events: {
                    description: 'DailyBot currently supports the following events:',
                    event_1: 'Code push',
                    event_2: 'Pull-request created',
                    event_3: 'Issues',
                },
            },
            external_user: {
                title: 'Your GitHub ID or Username',
                description:
                    'DailyBot wil try to match GitHub users automatically based on email or full name. It is recommended that you configure your own user for accurate matching.',
                pl_external_user_id: 'Your GitHub username',
                success_message: 'GitHub Username updated',
            },
        },
        jira: {
            nav_title: 'Jira Software',
            title: 'Jira Software Integration',
            subtitle:
                'Attach Jira Software issues activity into your check-in reports',
            web_hook: {
                title: 'Incoming Webhook',
                subtitle:
                    "Configure your Jira Software projects to share event updates with DailyBot. These events and information will be summarized in each user's check-ins.", // eslint-disable-line
                label: 'Your Webhook URL for Jira Software',
                web_hooks_events: {
                    description: 'DailyBot currently supports the following events:',
                    event_1: 'Issue created, updated, deleted, worklog updated',
                    event_2: 'Comment created',
                    event_3: 'Sprint closed, version released',
                },
            },
            external_user: {
                title: 'Your Jira Software ID or Username',
                description:
                    'DailyBot wil try to match Jira Software users automatically based on full name. It is recommended that you configure your own user for accurate matching.',
                pl_external_user_id: 'Your Jira Software username',
                success_message: 'Jira Software Username updated',
            },
        },
        bitbucket: {
            nav_title: 'Bitbucket',
            title: 'Bitbucket Integration',
            subtitle: 'Attach Bitbucket activity to check-in reports',
            web_hook: {
                title: 'Incoming Webhook',
                subtitle:
                    "Configure your Bitbucket repositories to share event updates with DailyBot. These events and information will be summarized in each user's check-ins.", // eslint-disable-line
                label: 'Your Webhook URL for Bitbucket',
                web_hooks_events: {
                    description: 'DailyBot currently supports the following events:',
                    event_1: 'Code push',
                    event_2: 'Pull-request created',
                },
            },
            external_user: {
                title: 'Your Bitbucket ID or Username',
                description:
                    'DailyBot wil try to match Bitbucket users automatically based on email or full name. It is recommended that you configure your own user for accurate matching.',
                pl_external_user_id: 'Your Bitbucket username',
                success_message: 'Bitbucket Username updated',
            },
        },
        calendar: {
            nav_title: 'Google Calendar',
            title: 'Set up this integration',
            subtitle:
                "Configure your Google Calendar to share event updates with DailyBot. These events and details will be summarized in each user's check-ins. Visit the {link} for more details.", // eslint-disable-line
            subtitle_link: 'integrations help page',
            title_email: 'Email',
            subtitle_email:
                'This is the email address currently linked to your integration. To change it, please disconnect this email and then connect a different one.',
            title_default: 'Calendar by default',
            subtitle_default:
                'You already have your Google Calendar connected. Now, set one of your calendars as the primary to prioritize it for all scheduling and integrations.',
            title_about: 'About this integration',
            description_about:
                "When you respond in your daily standup, you'll have access to your calendar events from both yesterday and today. This will help you organize your reports and plan your day more effectively.", // eslint-disable-line
            messages: {
                untracking_correctly: 'Unsyncing calendar correctly',
                tracking_correctly: 'Syncing added',
            },
            table: {
                label_team_tracker: 'Calendar being tracked',
                empty_case_text: "You don't have Google calendar syncs yet", // eslint-disable-line
                actions: {
                    delete: 'Delete',
                },
            },
            add_calendar: {
                title: 'Your calendars',
                subtitle:
                    'Add calendars from the email you connected to view and manage your events.',
                button: 'Add calendar',
                button_default: 'Set as default',
            },
            modal: {
                title: 'Add calendar',
                subtitle:
                    'Select a calendar you want to track. You can later choose which check-ins will display this activity.',
                button: 'Start syncing',
                untrack_title: 'Unsyncing Calendar',
                untrack_text:
                    'Please confirm that you want to stop sync activity from the calendar {board_name}.',
                untrack_button: 'Yes, unsyncing',
                untrack_button_cancel: 'Cancel',
                empty_case_text: "You don't have Google calendar syncs yet", // eslint-disable-line
                field_search_placeholder: 'Search calendar in your account',
            },
        },
        clickup: {
            nav_title: 'ClickUp',
            title: 'ClickUp Integration',
            web_hook: {
                description_1:
                    'Enable this integration to track what is happening in your ClickUp workspaces and attach a simple summary to your check-ins.',
                description_2:
                    "This integration requires your ClickUp API token and you can revoke permissions at any moment. It currently supports tracking: tasks creation, tasks status updates. Visit the <a href='https://help.dailybot.com/hc/en-us/articles/4403790179475-Integrate-ClickUp-and-DailyBot' target='_blank'>integrations help page </a> for more details.", // eslint-disable-line
            },
            external_user: {
                title: 'ClickUp API token',
                description:
                    'DailyBot wil try to connect ClickUp users automatically using your API token.',
                pl_external_user_id: 'Your API token',
                btn_connect: 'Connect',
                btn_refresh: 'Refresh',
                success_message: 'ClickUp API token updated',
            },
            teams: {
                title: 'ClickUp workspaces',
                subtitle: 'Manage the workspaces that you want to track with DailyBot.',
                add_team_btn: 'Add workspace',
                table: {
                    label_team_tracker: 'Workspaces being tracked',
                    label_occupation: 'Occupation',
                    empty_case_text: "You don't have ClickUp workspaces in follow-up yet", // eslint-disable-line
                    actions: {
                        delete: 'Delete',
                        track: 'Track folder',
                    },
                },
            },
            messages: {
                untracking_correctly: 'Untracking team correctly',
                tracking_correctly: 'Tracking added',
            },
            modal: {
                title: 'Track a ClickUp team',
                subtitle:
                    'Select a team that you want to track, you can later define on which check-ins you’d like to see this activity. ',
                button: 'Start tracking',
                untrack_title: 'Untracking team',
                untrack_text:
                    'Please confirm that you want to stop tracking activity from the team {board_name}.',
                untrack_button: 'Yes, untrack',
                untrack_button_cancel: 'Cancel',
                empty_case_text: "You don't have teams to track", // eslint-disable-line
                field_search_placeholder: 'Search for a team to track',
            },
            modal_folder: {
                title: 'Track a ClickUp folders',
                subtitle:
                    'Select the folders you want to track, you can later define on which check-ins you’d like to see this activity. ',
                button: 'Start tracking',
                untrack_title: 'Untracking team',
                untrack_text:
                    'Please confirm that you want to stop tracking activity from the team {board_name}.',
                untrack_button: 'Yes, untrack',
                untrack_button_cancel: 'Cancel',
                empty_case_text: "You don't have teams to track", // eslint-disable-line
                field_search_placeholder: 'Search for a team to track',
            },
        },
        shortcut: {
            nav_title: 'Shortcut',
            title: 'Shortcut Integration',
            subtitle: 'Attach Shortcut activity to check-in reports',
            web_hook: {
                title: 'Incoming Webhook',
                subtitle:
                    'Enable this integration to track what is happening in your Shortcut boards and attach a simple summary to your check-ins.',
                label: 'Your Webhook URL for Shortcut',
                web_hooks_events: {},
            },
            external_user: {
                title: 'Enter your API Token',
                description:
                    'Enter and save your Shortcut API Token below (You can generate your API token from the Settings section of your Shortcut account).',
                pl_external_user_id: 'Your Shortcut token',
                success_message: 'Shortcut token updated',
            },
        },
        linear: {
            nav_title: 'Linear',
            title: 'Linear Integration',
            subtitle: 'Attach Linear activity to check-in reports',
            web_hook: {
                title: 'Incoming Webhook',
                subtitle:
                    'Enable this integration to track what is happening in your Linear Issues and attach a simple summary to your check-ins.',
                label: 'Your Webhook URL for Linear',
                web_hooks_events: {},
            },
            external_user: {
                title: 'Enter your Personal API key',
                description:
                    'Fill and save a Linear API token below. (You can generate an API token from the Settings section of your Linear account)',
                pl_external_user_id: 'Your Linear token',
                success_message: 'Linear token updated',
            },
        },
        trello: {
            nav_title: 'Trello',
            title: 'Trello Integration',
            subtitle:
                'Track and attach Trello Cards activity to your check-in reports',
            auth_view_title: 'Connecting with Trello to get you authorization',
            web_hook: {
                title: 'Set up this integration',
                subtitle:
                    'Enable this integration to track what is happening in your Trello boards and attach a simple summary to your check-ins.',
                subtitle_2:
                    'This integration requires OAuth with Trello and you can revoke permissions at any moment. It currently supports tracking: card creation, card updates, comments, completed checklists.',
                btn_connect: 'Connect Trello',
            },
            external_user: {
                title: 'Your Trello ID or Username',
                subtitle:
                    'If your Trello ID is not defined, DailyBot will try to match users based on full name.',
                pl_external_user_id: 'Trello ID or Username',
                success_message: 'Trello Username updated',
            },
            boards: {
                title: 'Trello boards',
                subtitle: 'Manage the boards that you want to track with DailyBot.',
                add_board_btn: 'Add board',
                table: {
                    label_board_tracker: 'Boards being tracked',
                    label_added_by: 'Added by',
                    empty_case_text: "You don't have Trello boards connected yet", // eslint-disable-line
                    actions: {
                        delete: 'Delete',
                    },
                },
            },
            modal: {
                title: 'Track a Trello board',
                subtitle:
                    'Select a board that you want to track, you can later define on which check-ins you’d like to see this activity. ',
                button: 'Start tracking',
                untrack_title: 'Untracking board',
                untrack_text:
                    'Please confirm that you want to stop tracking activity from the board {board_name}.',
                untrack_button: 'Yes, untrack',
                untrack_button_cancel: 'Cancel',
                empty_case_text: "You don't have boards to track", // eslint-disable-line
                field_search_placeholder: 'Search for a board to track',
            },
            disconnect: {
                title: 'Integration connection',
                button: 'Disconnect Trello',
            },
            messages: {
                untracking_correctly: 'Untracking board correctly',
                tracking_correctly: 'Tracking added',
                another_connection_added_yet:
                    'Another user connected this app previously',
            },
        },
        zapier: {
            nav_title: 'Zapier',
            title: 'Zapier Integration',
            subtitle: 'Attach Bitbucket activity to check-in reports',
            web_hook: {
                title: 'Incoming Webhook',
                subtitle:
                    "Configure your Bitbucket repositories to share event updates with DailyBot. These events and information will be summarized in each user's check-ins.", // eslint-disable-line
                label: 'Your Webhook URL for Bitbucket',
                web_hooks_events: {
                    description: 'DailyBot currently supports the following events:',
                    event_1: 'Code push',
                    event_2: 'Pull-request created',
                },
            },
            external_user: {
                title: 'Your Bitbucket ID or Username',
                description:
                    'DailyBot wil try to match Bitbucket users automatically based on email or full name. It is recommended that you configure your own user for accurate matching.',
                pl_external_user_id: 'Your Bitbucket username',
                success_message: 'Bitbucket Username updated',
            },
        },
    },
    enterprise_modal: {
        title: 'Upgrade your plan',
        description:
            'DailyBot Premium plans offer better stability, security, enhanced privacy measures for your data, unlimited features and priority support.',
        lk_view_more: 'Learn more',
    },
    payment: {
        step_1: 'Choose Plan',
        step_2: 'Confirmation & Checkout',
        deal_plan: 'Need a different pricing? Let’s make a deal →',
        remove_plan: {
            title: 'You’re canceling your subscription',
            subtitle: 'Please let us know what happened',
            pl_text_area:
                'Please write down your feedback to continue, we appreciate it!',
            reasons_about_cancellation: {
                missing_features_i_need: {
                    title: 'Missing features I need',
                    placeholder: 'What features are important to you?',
                },
                too_expensive: {
                    title: 'Too expensive',
                    placeholder:
                        'What can justify the product’s cost, or, what is the ideal price point for you?',
                },
                technical_issues: {
                    title: 'Technical issues',
                    placeholder: 'How did these technical issues lead to your decision?',
                },
                shutting_down_the_company: {
                    title: 'Shutting down the company',
                    placeholder:
                        'Can you tell us about your experience with the product?',
                },
                not_sure_how_to_use: {
                    title: 'Not sure how to use it',
                    placeholder:
                        'What did you find to be complex or confusing about the product?',
                },
                dont_use_it_anymore: {
                    title: "Don't use it anymore", // eslint-disable-line
                    placeholder: 'What is the reason for the lack of engagement?',
                },
                other: {
                    title: 'Other (please explain below)',
                    placeholder: 'What can we do to make DailyBot better for you?',
                },
            },
            pl_feedback_optional: 'Type any additional comments (required)',
            pl_feedback_required: 'Tell us your reason here…',
            cancel_action: 'I don’t want to cancel',
            continue_action: 'Cancel subscription',
            retention_too_expensive: {
                title: "We're sorry for that 💸", // eslint-disable-line
                description:
                    'We understand your situation and we’d love to offer you a better pricing so you can continue using DailyBot.',
                contact_us_title: 'Are you interested?',
                btn_cancel: 'Yes, I’m interested',
                btn_continue: 'No, I’m not interested',
                subject_zendesk: "I'm interested in a nice discount.", // eslint-disable-line
                description_zendesk_cancel_plan:
                    "Hi,\n\nI'd love to explore further options to keep my subscription.", // eslint-disable-line
                description_zendesk_delete_org:
                    "Hi,\n\nI'd like to try out a paid option, but your price point doesn't work for me.\n\nWhat are my options?", // eslint-disable-line
            },
            retention: {
                missing_features_i_need: {
                    main: {
                        title: 'Thanks for the feedback',
                        description:
                            'Before you cancel, could you have a quick 10-minute call with our product specialists? Your use case could be on our roadmap.',
                        btn_cancel: '10 minute call',
                        btn_continue: 'Cancel subscription',
                        btn_continue_delete_org: 'Continue  deletion',
                    },
                },
                too_expensive: {
                    main: {
                        title: 'Too expensive',
                        description:
                            'We understand. As a startup we also know that budgets might be tight, that’s why we don’t want you to go just yet. What if I told you that I could give you {percent_discount}% off permanently for this plan? Would you give us another chance then?',
                        btn_cancel: "I'll take the {percent_discount}% off", // eslint-disable-line
                        btn_continue: 'Cancel subscription',
                        btn_continue_delete_org: 'Continue  deletion',
                        get_discount_message:
                            'Awesome! Your discount has been applied, thank you for staying with us!',
                    },
                    alternative: {
                        title: "We're sorry for that 💸", // eslint-disable-line
                        description:
                            'We understand your situation, and we’d love to offer you a better pricing so you can continue using DailyBot. <br><br> <b>Are you interested?</b>',
                        btn_cancel: 'Yes, I’m interested',
                        btn_continue: 'No, I’m not interested',
                    },
                },
                shutting_down_the_company: {
                    main: {
                        title: 'Shutting down the company',
                        description: `We're truly sorry to hear that. However, we don’t want this to be the end of this relationship. If you enjoyed using DailyBot we want to succeed with you no matter where you go. That’s why if you come back to DailyBot with your next company/project we'll give you 3 months of our Advanced Plan for free. <br> <br>
                Once you're ready, email us at <a href="mailto:support{'@'}dailybot.com">support{'@'}dailybot.com</a>, let us know your organization info and we'll give you your perk! <br> <br>
                'Until then, we wish you the best!`,
                        btn_continue: 'Cancel subscription',
                        btn_continue_delete_org: 'Delete organization',
                    },
                },
                not_sure_how_to_use: {
                    main: {
                        title: 'Thanks for the feedback',
                        description:
                            'Before you cancel, could you have a quick 10-minute call with our product specialists? Help us understand your use case, and receive priority support.',
                        btn_cancel: '10 minute call',
                        btn_continue: 'Cancel subscription',
                        btn_continue_delete_org: 'Continue  deletion',
                    },
                },
                dont_use_it_anymore: {
                    main: {
                        title: 'Thanks for the feedback', // eslint-disable-line
                        description:
                            'Before you cancel, could you have a quick 10-minute call with our product specialists? Help us understand your use case, and receive priority support.', // eslint-disable-line
                        btn_cancel: '10 minute call',
                        btn_continue: 'Cancel subscription',
                        btn_continue_delete_org: 'Continue  deletion',
                    },
                },
                other: {
                    main: {
                        title: 'Thanks for the feedback',
                        description:
                            'Before you cancel, could you have a quick 10-minute call with our product specialists? Help us understand what we could do better, your feedback can make a big difference for us.',
                        btn_cancel: '10 minute call',
                        btn_continue: 'Cancel subscription',
                        btn_continue_delete_org: 'Continue  deletion',
                    },
                },
            },
        },
        choose_plan: {
            title: 'Choose the plan that suits you',
            flat_fee_title: 'A flat fee for your team size',
            subtitle:
                'Add super powers to DailyBot, get the best option based on your needs.✨',
            flat_fee_subtitle:
                'Start for free or choose the best option based on your team size',
            disclaimer_yearly: '* Prices are shown monthly but billed annually',
            lb_monthly: 'Monthly',
            lb_yearly: 'Annual',
            lb_discount: 'with discount',
            card_plan: {
                per_user: 'per active user',
                big_teams: 'For big teams',
                limited_users: 'Up to {limit} users',
                enterprise_limit_users: 'More than 100 users',
                shorted_month: '/mo*',
                shorted_year: '/year*',
                popular: 'Popular',
                your_plan: 'Your Plan',
                never_expire: 'It never expires',
                expire_on: 'Expires on: {date}',
                required_renewal:
                    '<div>Renewal required</div> <div>(update billing info)</div>',
                contact_us: 'Contact us',
                upgrade: 'Upgrade',
                downgrade: 'Downgrade',
                change_plan: 'Choose Plan',
                cancel_plan: 'Cancel Plan',
                frequency_YEARLY: 'Yearly',
                frequency_MONTHLY: 'Monthly',
                change_from_YEARLY: 'Change to Monthly',
                change_from_MONTHLY: 'Change to Yearly',
                trial_left: 'You have {days} days left of trial',
                trial_final_day: 'Trial ends today',
                flat_fee_plan_unavailable:
                    'Your active users exceed the limit of this plan',
            },
            features_table: {
                show_more: 'See all features',
                show_less: 'See less',
                all_features: 'All features',
            },
            compare_plans_and_features: {
                title: 'Compare our plans and features',
                description:
                    'DailyBot adapts to your team size and organization. <br> Contact us to learn about volume discounts and payment options.',
                link: 'See a full comparison of our plans.',
            },
            support_cards: {
                item_1: {
                    title: 'Frequently Asked Questions',
                    description:
                        'You have questions and we do have answers! Visit our FAQs or contact us at any time.',
                    link: 'Check all our FAQs',
                },
                item_2: {
                    title: 'Are you an NGO or an Open Source Project?',
                    description:
                        'We value what you do. We’ll show our support by giving you special access to Premium.',
                    link: 'Contact us and get DailyBot Premium!',
                },
            },
            flat_fee_plans_options: {
                dynamic: 'Up to {limit} users',
                enterprise: 'more than 100 users',
            },
            max_seat_blocked_view: {
                title: "Oops! We couldn't let you in", // eslint-disable-line
                description:
                    'Your DailyBot organization has reached the maximum number of users for the current plan. To add more, please contact your DailyBot administrator',
            },
        },
        checkout: {
            title_first_plan: 'Let’s finish setting your plan up!',
            subtitle_first_plan:
                'Confirm the active users for your <strong>{planName} Plan</strong> and enter payment details.',
            title_upgrade: 'Upgrade your plan',
            subtitle_upgrade:
                'Confirm the active users in order to upgrade to <strong>{planName} Plan</strong>',
            title_downgrade: 'Downgrade your plan',
            subtitle_downgrade:
                'Confirm the active users to downgrade your plan to <strong>{planName} Plan</strong>',
            title_change_frequency_YEARLY: 'Change to monthly',
            subtitle_change_frequency_YEARLY:
                'Confirm the active users to change your plan to <strong>{planName} Plan monthly</strong>',
            title_change_frequency_MONTHLY: 'Change to yearly',
            subtitle_change_frequency_MONTHLY:
                'Confirm the active users to change your plan to <strong>{planName} Plan yearly</strong>',
            btn_confirm_upgrade: 'Confirm Upgrade',
            btn_confirm_downgrade: 'Confirm Downgrade',
            btn_confirm_change_frequency_YEARLY: 'Change',
            btn_confirm_change_frequency_MONTHLY: 'Change',
            btn_loading: 'Processing',
            information_plan: {
                plan: '<span>{planName}</span> Plan',
                change_plan: 'Change',
                monthly_plan: 'Monthly Plan',
                yearly_plan: 'Annual Plan',
                users_active: '{count} active member | {count} active members',
                limited_users: 'Up to {limit} users',
                manage_users: 'Manage active members',
                per_user_month: 'per user / per month',
                per_user_year: 'per user / per year',
                subtotal: 'Subtotal',
                discount: 'Discount ({percentage})',
                taxes: 'Sales tax ({percentageTaxes})',
                taxes_disclaimer: {
                    message:
                        'When a product is purchased through Paddle, the country from which the purchase is made may charge Taxes. {link}',
                    link: 'See more',
                },
                total_monthly_payment: 'Total Monthly Payment',
                total_yearly_payment: 'Total Annual Payment',
                discount_notice_yearly: {
                    base: '{saving} {amount} ({percent})',
                    saving: 'By paying annually, you’re saving',
                },
                discount_notice_monthly: {
                    base: 'Get the Annual Plan and {saveUp}',
                    save_up: 'save up to {percent}',
                },
                discount_notice_coupon: '{discount} discount before taxes',
            },
        },
        processing_payment: {
            success: {
                title: 'Your plan is ready!',
                description:
                    'Your subscription is confirmed and now you and your team can start enjoying the new plan.',
                btn: 'Continue',
            },
            error: {
                title: 'Oh no! Something went wrong',
                description:
                    "We detected an issue during the plan upgrade process. This is not usual, please try again or get assistance by contacting us at <a href='mailto:{emailSupport}'>{emailSupport}</a>.", // eslint-disable-line
                btn: 'Go back to plans',
            },
            process_text: 'We are processing your payment',
        },
    },
    limit_feature_modal: {
        title: 'Unlock this feature 😎',
        description:
            'Get the most out of DailyBot! This feature and some others are only available to organizations that have a paid plan.',
        lk_view_more: 'Upgrade Plan',
    },
    experiment_plans_modal: {
        free: {
            title: 'Your trial period has expired',
            subtitle: 'We hope you enjoyed DailyBot during this time',
            description:
                'We invite you to upgrade your plan to continue using Check-ins, Kudos, ChatOps, and more features we’re creating for you.',
            confirmation_btn: 'See upgrade options',
            extend_free_trial: 'Extend your free trial',
            delete_organization: 'Delete organization',
            member: {
                description:
                    'The trial days for the organization to which you belong have ended.',
                solution:
                    'But you can contact {admins_fullname} and ask him to upgrade your current plan to continue enjoying all the tools that DailyBot offers you.',
                confirmation_btn: 'Log out',
            },
        },
        zendesk: {
            extend_trial: {
                title: 'I’d like to extend my trial',
                description:
                    'My trial has expired and I’d like to extend it to further explore the product. Can you help and extend my trial a bit longer?',
            },
        },
    },
    reinstall_slack: {
        start_to_reinstall: {
            title: 'Updating your Slack integration',
            general_description:
                'At DailyBot, our aim is to always keep your data secure and protected.',
            why_important: {
                title: 'Why is this update important?',
                description: `
           • <a href="https://medium.com/slack-developer-blog/more-precision-less-restrictions-a3550006f9c3" target="_blank">Slack recently introduced support for granular permissions/scopes,</a> which we are implementing in order to provide a more secure experience.<br>
           • Granular scopes allow you to authorize only the necessary actions that DailyBot can perform.
          `,
            },
            should_do: {
                title: 'What are the steps?',
                description:
                    'It\'s simple, you just need to update the integration by clicking on the "Update integration" button below. This will revoke all existing permissions and will guide you to authorize a smaller subset of new ones.',
            },
            'pre-requisites': {
                title: 'Important',
                description:
                    'Please <strong>make sure that your Slack account has the "Admin" role</strong> which allows you to install Apps and integrations on your Slack Workspace. Otherwise, DailyBot will be disconnected until an administrator adds it or approves it.',
            },
            support:
                "Need support? <a href='{urlLearnMore}' target='_blank'>Learn more</a> or send us an email at <a href='mailto:{emailSupport}'>{emailSupport}</a>", // eslint-disable-line
            question_to_start: 'Ready to start?',
            btn_reinstall: 'Update integration',
            error_message: {
                uninstall_slack:
                    'Please try again later. It seems there was an error when performing this process.',
                reinstall_slack:
                    "<p>We identified a problem during the update. Please contact us at <a href='mailto:{emailSupport}'>{emailSupport}</a>.</p>", // eslint-disable-line
            },
        },
        confirmed_reinstall: {
            title: 'Great! The update was completed',
            title_with_notices: 'Update completed, <br> but one more step required',
            success_message: {
                normal_case:
                    'Your security is very important and we thank you for taking this step. <br> You can continue using DailyBot as usual.',
                private_channels: {
                    title: 'Important',
                    description: `
             <p>You can continue using DailyBot, but it was not possible to auto-add DailyBot to your <strong>private channels.</strong></p>
             <p>Please add DailyBot manually (in Slack) to these private channels: <br>
              <strong>{listPrivateChannels}</strong>
             </p>
             <p>
              If this is not done, the in-channel reporting for these check-ins will not work:<br>
               <strong>{listFollowups}</strong>
             </p>
            `,
                },
            },
            error_message: {
                title: 'Something went wrong!',
                description:
                    "Please contact us at <a href='mailto:{emailSupport}'>{emailSupport}</a> and we'll help you out.", // eslint-disable-line
            },
            btn_ok: 'Go to dashboard',
        },
    },
    user_role: {
        NON_MEMBER: 'Non-member',
        MEMBER: 'Member',
        MEMBER_LIMITED: 'Member - Limited access',
        USER: 'User',
        ADMIN: 'Team Administrator',
        MANAGER: 'Teams Manager',
        ADMIN_ORG: 'Org Administrator',
        GUEST: 'Guest',
    },
    description_role: {
        ADMIN_ORG: {
            title: 'You are an admin of this org',
            description:
                'You can create/manage teams and edit organization settings.',
        },
        MANAGER: {
            title: 'You are teams manager',
            description: 'You can manage teams in the organization.',
        },
        ADMIN: {
            title: 'You are a team admin',
            description: 'You can manage this team.',
        },
    },
    footer: {
        contact_us: 'Contact us',
        terms: 'Terms and conditions',
        support: 'FAQs and support',
        privacy: 'Privacy policy',
        blog: 'Read the blog',
        only_support: 'Support',
        legal: 'Legal Terms',
        dailybot_academy: 'DailyBot Academy 📖',
    },
    feedback_snack_alert: {
        title: 'Are you enjoying DailyBot? ✨',
        description: 'With your suggestions, help us bring the best ideas to life.',
        btn_goto_form: 'Share feedback',
    },
    updateMembersModal: {
        lb_title: 'Update members data',
        lb_subtitle: 'Update your org members data with a quick CSV upload',
        lb_select: 'Select file',
        lb_hint_select: 'Upload CSV up to 5MB',
        lb_invalid_size_file: 'Please attach a file under 5MB',
        lb_invalid_headers_file:
            'Invalid template. Download and modify the template below',
        lb_description: 'You must use {link} to update the member’s data.',
        lb_link: 'this template',
        lb_button: 'Upload',
        lb_button_close: 'Close',
        // eslint-disable-next-line quotes
        lb_title_confirmation: "Great, you've got it!",
        // eslint-disable-next-line quotes
        lb_subtitle_confirmation: "Quick overview of your team's data update",
        lb_success_label:
            'Successfully update: <strong>{amount} member</strong> | Successfully update: <strong>{amount} members</strong>',
        lb_error_label:
            'Error update: <strong>{amount} member</strong> | Error update: <strong>{amount} members</strong>',
        lb_learn_how: 'Learn how.',
    },
    inviteGuestMembersModal: {
        title: 'Invite Guests',
        subtitle:
            'Add external members to your organization. They can register with email and fill out check-ins by email/web.',
        form: {
            emails: {
                label: 'Guests',
                placeholder: 'Add emails separated by commas (,)',
            },
            teams: {
                label: 'Once they register, add them to a team (optional)',
                placeholder: 'Select a team',
            },
        },
        btnYes: 'Invite',
        btnCancel: 'Cancel',
        success: 'Invitations sent to guest members',
    },
    use_cases: {
        modal_ai: {
            title: "You've added AI to your DailyBot assistant ", // eslint-disable-line
            subtitle:
                'Welcome to DailyBot. Get ready to try a better way to work and boost your productivity. With automated workflows and natural-sounding content generation, DailyBot AI makes your workday easier and more efficient. Start your journey below!',
            try_message: 'Try asking something to DailyBot to start',
            hint: "Always mention {'@'}DailyBot in s channel when you want to start a conversation", // eslint-disable-line
            send_me_tips:
                'Please send me tips on how to use these best practices with DailyBot AI',
            btn_success: 'Get started',
        },
        setup_use_case: {
            title:
                'Here are {useCasesNumber} new template to help you start | Here are {useCasesNumber} new templates to help you start',
            description:
                "We added these templates based from your previous selection: {useCase}. They are best practices that you can use as-is or customize more to your liking. <a href='{learnMore}' target='_blank'>Learn more about these templates</a>", // eslint-disable-line
            lk_learn_more_description: 'Learn more about them.',
            pl_participants_selector: 'Select your check-in participants',
            permissions_checkins: {
                only_me_and_add_participants_later:
                    'Only me and add participants to each later',
                only_me: 'Only me',
                everyone_in_default_team:
                    'Everyone I invite to DailyBot ({defaultTeam} Team)',
                everyone_in_selected_channel: 'Everyone from the selected channel',
            },
            tp_description_template_object: {
                checkins: {
                    question: 'It collects the following info:',
                },
                kudos:
                    "Includes team values like <span class='meta-description-team-values'>{teamValues}</span> and more.", // eslint-disable-line
            },
            message_error_use_has_activated_before:
                'This use case was already activated for this org',
            btn_active: 'Active',
            btn_cancel: 'Cancel',
            ck_receive_tips:
                'Please send me tips about how to use these best practices with DailyBot.',
            already_activated: 'Already activated',
            lk_learn_more_about_a_use_case: 'Learn more',
        },
        setup_success: {
            title: "You're ready to start using DailyBot", // eslint-disable-line
            subtitle:
                "Explore DailyBot to know what you activated. <a href='{linkGuide}' target='_blank'>Here is a guide to help you get started</a>", // eslint-disable-line
            btn_success: 'Close',
            go_to: 'Go to',
            dailybot_for: 'DailyBot for',
            go_to_home: 'Go to Home',
            invite_members: {
                message_invite:
                    "Now, let's invite your team to collaborate with you on DailyBot", // eslint-disable-line
                btn_invite: 'Invite people',
            },
            summary_title: {
                checkin: '{total} Check-In | {total} Check-Ins',
                kudos: '{total} value for Kudos | {total} values for Kudos',
                form: '{total} Form | {total} Forms',
                command: '{total} Command | {total} Commands',
                mood: 'Mood',
                virtualcoffee: 'Virtual Coffee',
                watercooler: 'Watercooler',
                birthday: 'Birthday',
                virtualcommute: 'Virtual Commute',
                pomodoro: 'Pomodoro',
                assistant: 'AI add-on',
            },
            main_tip: {
                checkin:
                    "Use <span class='code'>checkin help</span> to learn how we're automating your reports", // eslint-disable-line
                kudos:
                    "Use <span class='code'>kudos help</span> to learn how to give kudos and use team values", // eslint-disable-line
                form: "Use <span class='code'>forms help</span> to learn how you can start collecting data for your forms", // eslint-disable-line
                command:
                    "Use <span class='code'>command help</span> to learn how to trigger your commands to retrieve useful data", // eslint-disable-line
                mood: "Use <span class='code'>mood help</span> to learn how to trigger your commands to fill your mood status", // eslint-disable-line
                virtualcoffee:
                    "Use <span class='code'>virtual coffee help</span> to automate virtual coffee matchings for your team", // eslint-disable-line
                watercooler:
                    "Use <span class='code'>{'@'}DailyBot watercooler</span> to get fun conversation starters from DailyBot", // eslint-disable-line
                birthday:
                    "Use <span class='code'>birthday help</span> to learn how to setup your birthday", // eslint-disable-line
                virtualcommute:
                    "Use <span class='code'>virtual commute help</span> to get reminders to disconnect from work", // eslint-disable-line
                pomodoro:
                    "Use <span class='code'>pomodoro help</span> to learn how to use the pomodoro technique in chat", // eslint-disable-line
                match:
                    "Use <span class='code'>match help</span> to learn more about automatic 1:1 intros", // eslint-disable-line
                assistant:
                    "Use <span class='code'>assistant</span> to get information about how can I help you with my AI capabilities.", // eslint-disable-line
            },
            secondary_tip: {
                checkin:
                    'Participants in this check-in will receive notifications via bot with the questions they should answer according to the frequency.',
                kudos:
                    "If you'd like to send kudos to a teammate, try sending them from the bot or from the web.", // eslint-disable-line
                form: "Each form has an associated shortcut to easily trigger it from the chat - Just type <b>form-shortcut</b> via DM to DailyBot. In a channel don't forget tag to <b>{'@'}DailyBot</b>", // eslint-disable-line
                command:
                    "Use DailyBot's built-in commands or build your own custom ones to automate tasks in chat.", // eslint-disable-line
                mood: 'Tracking your team motivation.',
                virtualcoffee:
                    'Improve communication among teammates through virtual coffees on a weekly basis. Type <b>virtual coffee</b> in the chat to start.',
                watercooler:
                    'Type <b>watercooler</b> in a public channel and the bot will generate conversation starters outside of formal for your team.',
                birthday:
                    'Share your birthday with your teammates and celebrate together.',
                virtualcommute:
                    'Set clear boundaries between work and life at the end of your shift with automatic reminders. Type <b>virtual commute</b> to set up.',
                pomodoro:
                    'Use <b>pomodoro</b> in chat to block out a time period of 25 minutes, work uninterrupted for that period, then take a five-minute break.',
                match:
                    "Use <span class='code'>match</span> to instantly automate 1:1 intros between the team and new collaborators.", // eslint-disable-line
                assistant: '',
            },
        },
        explore: {
            title: 'Choose a focus area for your team',
            tip: 'I can help you activate quick actions and flows for your team based on your selection',
        },
    },
    table: {
        empty_case: {
            title: 'No data available',
        },
        empty_case_filters: {
            title: 'No results for this search.',
            button: {
                text: 'Reset filters',
            },
        },
    },
    multimedia: {
        attach_image: 'Attach image',
        add_image: 'Add image',
        attach_image_tip: 'Attach an image in JPG, PNG, or JPEG format, up to 5 MB',
        errors: {
            max_file_size: 'Invalid image size. \nPlease attach an image under 5 MB',
        },
    },
    black_friday_campaign: {
        modal: {
            title: 'The best deal of the year is here 😎',
            description: {
                trial_users:
                    'Cyber Week is here! Unlock your team’s full potential with <br> 30% OFF any plan for 6 months. (Valid for limited time)',
                free_users:
                    'Cyber Week is here! Ready to upgrade your workflows? <br> Get 50% OFF any plan for 6 months. (Valid for limited time)',
            },
            btn: {
                trial_users: 'Upgrade Now',
                free_users: 'Claim Your Discount',
            },
            copy_clipboard: 'Coupon Code copied to clipboard',
        },
        banner: {
            description:
                '🚀<b class="mg-lf-4">Cyber Week is here!</b> Unlock your team’s full potential with {percentage} OFF any plan for 6 months.',
            link: 'Learn more.',
        },
    },
}