export default {
    tasks: {
        general: {
            tasks: 'Tasks',
        },
        description: {
            main: 'Let me help you track your tasks.',
            links: "{learnMore} {'|'} {getIdeas}", // eslint-disable-line
            learn_more: '📖 Learn more',
            get_ideas: '⚡ View in-chat commands',
        },
        dashboard: {
            title: 'Manage tasks',
            description: 'Browse the list and manage your own tasks.',
            create_task_button: 'Create tasks',
            empty_case_text: 'Create your first Task to get started',
            lb_in_chat: 'View in-chat commands',
            modal_chat: {
                title: 'Try Tasks in your chat',
                sub_title:
                    "Use the following commands to interact with the chatbot in DMs or in channels mentioning {'@'}DailyBot.", // eslint-disable-line
                body_modal:
                    "Each form you create in DailyBot can have an associated word with it (sort of like an associated command) so you can type this command and instantly launch the form within the chat to start filling it out.     <br><br><ul><li>Type <span class='code'>forms</span>  to know your forms created and their associated <strong>form shortcut</strong> if any.</li><li><span class='code'>forms search {'{'}word-to-find{'}'}</span> to search forms by name.</li><li><span class='code'>{'{'}form shortcut{'}'}</span> of a form to start to fill out it.</li><li><span class='code'>{'{'}form shortcut{'}'} search {'{'}word-to-find{'}'}</span> to search the word in the responses of a specific form.</li></ul>", // eslint-disable-line
                learn_more: 'Learn more about Tasks.',
            },
            table: {
                pl_search_input: 'Search for a task',
                pl_search_response_input: 'Search for a response',
                head: {
                    user: 'User',
                    name: 'Name',
                    status: 'Status',
                    start_date: 'Start date',
                    due_date: 'Due date',
                    date: 'Created at',
                    actions: '',
                },
                content: {
                    actions: {
                        change: 'Change status',
                        edit: 'Configure',
                        complete: 'Complete',
                        remove: 'Delete',
                        duplicate_task: 'Duplicate',
                    },
                    createdBy: 'Created by {user}',
                    undefined_date: 'Undefined',
                },
                empty_case: 'No results for this search.',
                empty_case_reset_filters: 'Reset filters',
            },
        },
        messages: {
            task_created: 'Task created successfully',
            task_updated: 'Task updated successfully',
            task_duplicated: 'Task duplicated successfully',
            task_deleted: 'Task deleted successfully',
            task_completed: 'Task completed successfully',
        },
        status: {
            todo: 'To do',
            in_progress: 'In progress',
            completed: 'Completed',
            cancelled: 'Cancelled',
            pending: 'Pending',
        },
        priority: {
            urgent: 'Urgent',
            high: 'High',
            medium: 'Medium',
            low: 'Low',
        },
        complexity: {
            xs: 'XS',
            s: 'S',
            m: 'M',
            l: 'L',
        },
        search_table: {
            search_by: {
                all: 'All tasks',
                in_progress: 'In progress',
                completed: 'Completed',
                todo: 'To do',
                pending: 'Pending',
            },
            order_by: {
                alphabetical: 'Alphabetical',
                recent: 'Date created',
                total: 'Total runs',
            },
        },
        activity: {
            change: {
                status_change: '{name} has set the status to {status}',
                priority_change: '{name} has set the priority to {status}',
                complexity_change: '{name} has set the complexity to {status}',
                date_change: '{name} has set the dates to {status}',
                ai_suggestion: 'DailyBot has taken action - {action}',
            },
        },
        modals: {
            limit_template: {
                title: 'Unlock Tasks',
                description:
                    'Your current plan lets you create up to {num_limited} tasks. Upgrade your plan to create unlimited tasks',
                call_to_action: 'Upgrade plan',
            },
            create: {
                title: 'Create task',
                title_update: 'Update task',
                title_update_status: 'Update status',
                name: 'Task name',
                placeholder: 'Input the task name',
                status: 'Status',
                start_date: 'Start date',
                due_date: 'Due date',
                create_btn: 'Create',
                update_btn: 'Update',
                cancel_btn: 'Cancel',
            },
        },
    },
}