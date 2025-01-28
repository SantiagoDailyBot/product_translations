export default {
    forms: {
        description: {
            main: 'Lets you collect data from your team or external users on demand.', // eslint-disable-line
            links: "{learnMore} {'|'} {getIdeas}", // eslint-disable-line
            learn_more: '📖 Learn more',
            get_ideas: '⚡ View in-chat commands',
            title_video: 'How to use Forms?',
        },
        layout: {
            table: 'Table',
            more_actions: {
                configure_form: 'Configure form',
                learn_more: 'Learn more about forms',
            },
        },
        errors: {
            form_not_found: "You are trying to access a form that doesn't exist", // eslint-disable-line
            limit_responses_reached:
                "You've reached the monthly limit of {limit} form responses.", // eslint-disable-line
            form_protected: 'Form is protected. Requires authorization to delete it',
        },
        general: {
            title: 'Forms',
            menu: {
                home: 'Home',
                forms_list: 'Forms',
                dashboard: 'Forms Management',
                settings: 'Skill Settings',
            },
        },
        form_summary: {
            nav_title: 'Summary',
        },
        form_responses: {
            nav_title: 'Records',
            modal_delete: {
                title: 'Delete responses',
                description: 'You are cleaning up this form, are you sure about it?',
                confirm: 'Yes, clean-up responses',
                cancel: 'No, keep responses',
            },
        },
        formDetail: {
            total_responses: '{totalResponses} responses in total',
            scroll_vertically: '(scroll vertically to see all columns)',
            fill_out_form: 'Fill out Form',
            share_link: 'Share Link',
            notification: 'Send notification',
            btn_deactivate_forms: 'Deactivate Form',
            btn_activate_forms: 'Activate Form',
            btn_delete_responses: 'Delete Responses',
            btn_delete_forms: 'Delete Form',
            configure_form: 'Configure Form',
            empty_case_text: 'Create your first response to get started',
            empty_case_system_form:
                'Responses to this form can only be completed through the DailyBot management system.',
            next_answer: 'Next response',
            export_responses: 'Export',
            expand_rows: 'Expand rows',
        },
        wizard: {
            quick_forms_through_chat: 'Quick forms through chat',
            see_reports_and_metrics_on_web: 'See reports and metrics on web',
            convenient_for_all_involved: 'Convenient for all involved',
        },
        settings: {
            title: 'Settings',
            description: 'Manage organization and personal settings',
            learn_about_forms: 'Learn about Forms',
            organization: {
                title: 'Organization settings',
                general: {
                    title: 'General',
                    allow_send_notifications_by_bot:
                        'Allow send bot notifications (direct messaging)',
                    allow_send_notifications_by_email:
                        'Allow send notifications by email',
                },
            },
            user: {
                title: 'My Preferences',
                notifications: {
                    title: 'Notifications',
                    get_notifications_by_bot: 'Get bot notifications (direct messaging)',
                    get_notifications_by_email: 'Get notifications by email',
                },
            },
        },
        dashboard: {
            title: 'Manage forms',
            description: 'Browse the catalog and manage your own forms.',
            create_form_button: 'Create form',
            empty_case_text: 'Create your first Form to get started',
            empty_case_deny_text:
                'No forms in sight! Once admins create forms you’ll be able to see them.',
            lb_in_chat: 'View in-chat commands',
            modal_chat: {
                title: 'Try Forms in your chat',
                sub_title:
                    "Use the following commands to interact with the chatbot in DMs or in channels mentioning {'@'}DailyBot.", // eslint-disable-line
                body_modal:
                    "Each form you create in DailyBot can have an associated word with it (sort of like an associated command) so you can type this command and instantly launch the form within the chat to start filling it out.     <br><br><ul><li>Type <span class='code'>forms</span>  to know your forms created and their associated <strong>form shortcut</strong> if any.</li><li><span class='code'>forms search {'{'}word-to-find{'}'}</span> to search forms by name.</li><li><span class='code'>{'{'}form shortcut{'}'}</span> of a form to start to fill out it.</li><li><span class='code'>{'{'}form shortcut{'}'} search {'{'}word-to-find{'}'}</span> to search the word in the responses of a specific form.</li></ul>", // eslint-disable-line
                learn_more: 'Learn more about Forms.',
            },
            table: {
                pl_search_input: 'Search for a Form',
                pl_search_response_input: 'Search for a response',
                head: {
                    user: 'User',
                    name: 'Name',
                    privacy: 'Availability',
                    template: 'Questions',
                    status: 'Status',
                    records: 'Total records',
                    reporting: 'Reporting',
                    last_activity: 'Last activity',
                    date: 'Date',
                    actions: '',
                    shortcut: 'Shortcut',
                },
                content: {
                    start_on: {
                        label: 'Start On',
                    },
                    end_on: {
                        label: 'End On',
                        empty: 'Never',
                    },
                    channel: {
                        label: 'Channel',
                        empty: 'No channel selected',
                    },
                    actions: {
                        view: 'View results',
                        copy_link: 'Share link',
                        edit: 'Configure',
                        remove: 'Delete',
                        fill_out_form: 'Fill out form',
                        duplicate_form: 'Duplicate',
                        notify_on_channel: 'Send notification',
                        deactivate: 'Deactivate',
                        activate: 'Activate',
                        singular_deactivated: 'Deactivated',
                        singular_activated: 'Activated',
                        export_data: 'Export responses',
                        delete_responses: 'Delete all responses',
                    },
                    status: {
                        inactive: 'Inactive',
                        user_can_not_see_responses: 'Responses visibility is restricted.',
                        only_owner: 'Only you can see the responses.',
                        only_team: 'Only Team {team} can see the responses.',
                        is_system_form: '⚙️ Is system form.',
                    },
                    createdBy: 'Created by {user}',
                    lastEditedField: 'Last edited',
                    undefined_shortcut: 'Undefined',
                    lastEditedFieldBy: {
                        user: 'by {user}',
                        you: 'by you',
                    },
                },
                empty_case: 'No results for this search.',
                empty_case_reset_filters: 'Reset filters',
                'popover-approval-flow': 'Approval Flow Enabled',
            },
        },
        export_forms_responses: {
            title: 'Export responses as {format}',
            lb_export_to: 'Export as',
            btn_export: 'Export',
        },
        formCRUD: {
            layout_create: {
                title: 'Create Form',
                subtitle_edit_questions: 'Edit questions',
                steps: {
                    step_1: 'Questions',
                    step_2: 'Setup',
                },
                cancel_modal: {
                    title: 'Are you sure?',
                    message: 'Your changes won’t be saved.',
                    btn_confirm: 'Yes, leave',
                    link_go_back: 'No, continue creating',
                },
            },
            layout_edit: {
                title: 'Edit Form',
                subtitle_edit_questions: 'Edit questions',
                lk_questions: 'Questions',
                lk_setup: 'Setup',
                success_edit: 'Form updated',
                cancel_modal: {
                    title: 'Are you sure?',
                    message: 'Your changes won’t be saved.',
                    btn_confirm: 'Yes, leave',
                    link_go_back: 'No, continue editing',
                },
            },
            advanced_options: 'Advanced Options',
            danger_zone: 'Danger Zone',
            choose_questions: {
                customize_questions: 'Customize questions',
            },
            success: {
                createTitle: 'The form is ready',
                updateTitle: 'Form updated',
                message:
                    'Do you want send a notification to complete your form {name} into the channel now?',
                notificationSentSuccessMessage: 'Notification sent.',
                buttons: {
                    finish: 'Finish',
                    send_notification: 'Send',
                    copy_link: 'Copy link',
                },
            },
            form: {
                createTitle: 'Create Form',
                updateTitle: 'Update Form',
                unanswered: 'Unanswered',
                textLinkSuccessMessage: 'Copied to clipboard.',
                subtitle: {
                    create: 'Add a new form',
                    update: 'Update the form',
                },
                status: {
                    active: 'Active',
                    inactive: 'Inactive',
                },
                fields: {
                    name: {
                        label: 'Form Name',
                        placeholder: 'Type a clear name that gives context of the goal',
                    },
                    chatops: {
                        label: 'ChatOps & Custom Commands',
                        placeholder: 'Type a short text',
                        text: 'Activate a chat shortcut to trigger this form in a channel or direct message',
                        text_hangouts:
                            'Activate a chat shortcut to trigger this form in a space or direct message',
                        example: 'Type {shortcut}',
                    },
                    channel: {
                        label: 'Select channels to share responses',
                        label_hangouts: 'Select spaces to share responses',
                    },
                    allow_public_responses: {
                        label: 'Allow public responses',
                        copy_link: 'Share link',
                    },
                    branding_form: {
                        text: "Brand your form using your organization's logo.", // eslint-disable-line
                        popover_upgrade: {
                            main: '{link}. Available from the Advanced and Enterprise plan.',
                            link: 'Requires upgrade',
                            link_no_admin:
                                'Contact your organization administrator to upgrade the plan',
                        },
                        preview_avatar: 'Preview',
                        empty_case_disclaimer: {
                            main: "To activate you should set up your organization's logo {link}", // eslint-disable-line
                            link: 'here',
                        },
                    },
                    privacy: {
                        label: 'Who can see reports on the web app?',
                        placeholder: 'Who can see reports on the web app?',
                        options: {
                            everyone: 'Everyone',
                            owner: 'Only me',
                        },
                    },
                    template: {
                        label: 'Questions to ask:',
                        placeholder: 'Select a template',
                    },
                    start_on: {
                        label: 'When should it start running?',
                    },
                    end_on: {
                        label: 'When should it stop running?',
                    },
                    collect_responses_anonymously: {
                        label: 'Collect responses anonymously',
                    },
                    email_and_name_mandatory: {
                        label: 'Make the email and name mandatory',
                    },
                    publicly_available: {
                        label: 'Publicly available',
                    },
                    active: {
                        label: 'Deactivate this form',
                        text: 'The form will not accept responses. You can reactivate it at anytime.',
                    },
                    deactivate: {
                        label: 'Reactivate this form',
                        text: 'The form will accept responses again. You can deactivate it at any time.',
                    },
                    available_on_list_view: {
                        text: 'Keep the form visible in the home list for everyone.',
                    },
                    secure_deletion_enabled: {
                        label: 'Secure deletion',
                        description:
                            'Turn ON to protect this Form, so that no one can delete it.',
                    },
                    approval_flow_enabled: {
                        label: 'Use form for Approval Flow',
                        description:
                            'New submissions will be filed for approval. Choose who can approve/reject requests below.',
                    },
                    notification_approval_channel: {
                        label: 'Select a channel to notificate requests approvals',
                    },
                    approvers: {
                        placeholder: 'Select who can approve or deny requests',
                    },
                },
                button: {
                    continue: 'Continue',
                    create: 'Create form',
                    update: 'Update form',
                    delete: 'Delete',
                    activate: 'Activate',
                    deactivate: 'Deactivate',
                    update_finish: 'Update and finish',
                    cancel_creation: 'Cancel creation',
                },
                alerts: {
                    deactivated: {
                        success: 'The form was successfully {action}',
                        error: 'An error occurred while trying to {action} the form',
                    },
                },
            },
        },
        delete: {
            label: 'Delete this form permanently',
            text: 'Your form and all associated data will be permanently deleted.',
            title: 'Please confirm',
            delete: 'Delete',
            message: 'Are you sure you want to permanently delete this form?',
            toast_message: 'Form deleted',
        },
        duplicate: {
            toast_message: 'Form duplicated',
        },
        delete_responses: {
            label: 'Delete all form responses',
            text: 'All form responses will be deleted. This cannot be undone.',
        },
        modals: {
            activate: {
                title: 'Activate form',
                text: 'Do you really want to activate the <b>{formname}</b> form?',
                success_message: 'This form has been activated',
            },
            deactivate: {
                title: 'Deactivate form',
                text: 'Do you really want to deactivate the <b>{formname}</b> form?',
                success_message: 'This form has been deactivated',
            },
            notify_on_channels: {
                title: 'Notify on Channel',
                description:
                    'Do you want send a notification to complete your form into the channel now?',
            },
            notification: {
                title: 'Send notification',
                description:
                    'Ask your team to complete the <b>{formname}</b> form via channel or DM',
                items_description: 'Select channels or DMs to send a notification',
                dm_notification: 'Send test notification to my DM',
                optional_message: 'Message (optional)',
            },
            limit_template: {
                title: 'Unlock Forms',
                description:
                    'Your current plan lets you create up to {num_limited} forms. Upgrade your plan to create unlimited forms',
                call_to_action: 'Upgrade plan',
            },
        },
        formResponse: {
            search_table: {
                search_by: {
                    all: 'All responses',
                    me: 'Created by me',
                    others: 'Created by others',
                    active: 'Active responses',
                    inactive: 'Inactive responses',
                },
                order_by: {
                    alphabetical: 'Alphabetical',
                    recent: 'Date created',
                    total: 'Total runs',
                },
            },
            subtitle: {
                external_organization: 'Form created by external organization',
            },
            newResponseCreated: 'New form response created successfully.',
            public: {
                footer:
                    'Form built with <a href="https://www.dailybot.com/">DailyBot.com</a>',
            },
            is_anonymous: {
                label: 'Complete form as anonymous user',
            },
            guest_user: {
                full_name: {
                    label: 'Your name',
                    placeholder: 'Type your name',
                },
                email: {
                    label: 'Your email',
                    placeholder: "name{'@'}dailybot.com", // eslint-disable-line
                },
            },
            responses_required: '* Required',
            success: {
                title: 'Thank you for submitting the form',
                create_another_form:
                    'Create forms that connect to your chat. In less than 1 minute.',
                view_results: 'View results',
                view_home: 'Finish',
                call_to_action: 'Submit another response',
            },
            update: {
                toast_message: 'Form response updated',
            },
            modal: {
                title: 'Please confirm',
                toast_message: 'Form response deleted',
                message:
                    'Are you sure you want to permanently delete this form response?',
            },
            table: {
                actions: {
                    edit: 'Edit',
                    delete: 'Delete',
                },
            },
            flow_status: {
                title: 'Approval Status',
                approved: '✔️ Approved',
                denied: '🚫 Denied',
                null: '⏳ Pending',
                pending_request: 'Pending request',
                approve: 'Approve',
                deny: 'Deny',
                success_approval: 'Request approved succesfully',
                success_deny: 'Request denied successfully',
            },
            flow_detail: {
                title: {
                    approved: '✔ Request approved by:',
                    denied: '🚫 Request denied by:',
                },
                conector_date: 'on',
            },
        },
        search_table: {
            search_by: {
                all: 'All forms',
                me: 'Created by me',
                public: 'Public forms',
                approval: 'With approval flows',
            },
            order_by: {
                alphabetical: 'Alphabetical',
                recent: 'Recent activity',
                total: 'Total records',
            },
        },
    },
}