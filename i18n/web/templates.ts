export default {
    templates: {
        question_templates: {
            limit_free: '',
            title: 'Choose questions template',
            recommendation: 'Start from a template',
            view_all: 'Show all templates',
            nav_title: 'Question templates',
            nav_title_small: 'Templates',
            nav_banner_title: 'Build your templates',
            nav_banner_description:
                'Upgrade to your plan and get the most out of DailyBot by customizing your team check-ins questions.',
            nav_banner_call_to_action: 'Upgrade plan',
            has_conditional_logic: 'Has conditional logic',
            list: {
                title: 'Question Templates',
                subtitle:
                    'Browse the catalog and manage your own questions for your check-ins.',
                create_button: 'Create template',
                blank_template: 'Create from blank template',
                based_template: 'Create based on {name}',
                error_templated_related_to_followups:
                    "You can't delete this template as there are check-ins using it.", // eslint-disable-line
                modal_delete: {
                    title: 'Are you sure you want to delete this template?',
                    template_used_title: 'Cannot delete template',
                    template_used_description:
                        'This template is used by {followups} check-in(s)',
                },
                detail: {
                    owner: 'created by {owner}',
                    questions: '{count} Questions | {count} Question | {count} Questions',
                    view: 'View questions',
                    edit: 'Edit',
                    delete: 'Delete',
                },
                previous_view_template: {
                    subtitle: {
                        questions:
                            '{questions} Questions | {questions} Question | {questions} Questions',
                        followups:
                            'Used by {followups} check-in | Used by {followups} check-ins',
                    },
                    question_type_requires: '{type} question',
                    question_type: '{type} response',
                    question_type_multiple_choice: 'Single-choice question',
                    question_type_boolean: 'Yes/No',
                    question_type_text: 'Text',
                    question_type_numeric: 'Numeric',
                    btn_create_followup_from_this: 'Use this template',
                    btn_create_template_from_this: 'Create a template based on this one',
                    btn_create_followup_with_this_questions:
                        'Create check-in with these questions',
                    lb_upgrade_plan: 'Subscribe to a plan to use it',
                    lb_upgrade_plan_to_edit: 'Subscribe to a plan to edit it',
                },
            },
            template: {
                title_new: 'Creating new template',
                see_recommendations: 'Create from templates',
                title_edit_questions: 'Edit questions',
                title_edit: 'Edit template',
                sub_title_new:
                    'Create your own template. It can be used by any of your teams.',
                sub_title_edit:
                    'These changes will take effect in all the check-ins that use this template.',
                lb_template_name: 'Name',
                pl_template_name: 'Type template name',
                lb_name: 'Name',
                pl_name: 'Type a clear name that gives context of the goal',
                lb_description: 'Goal or description',
                pl_description: 'Type a goal or description',
                add_question: '+ Add Question',
                lb_blockers_questions:
                    'When to show critical/blockers responses in web and reports?',
                lb_slide_blockers_questions:
                    'Turn ON to show answers despite of the content. Turn OFF to only show positive answers',
                title_frequency: 'Default frequency',
                description_frequency:
                    'Frequency that will be used when you use these questions template.',
                lb_frequency: 'Frequency',
                lb_days: 'On these days',
                notice:
                    'Notice: when you configure a check-in based on this template, you’ll be allowed to override this configuration.',
                bt_discard: 'Discard changes',
                bt_cancel: 'Cancel creation',
                bt_cancel_comes_checkin_flow: 'Go back',
                bt_save: 'Continue',
                bt_save_create_checkin: 'Save and create check-in',
                bt_save_continue_checkin: 'Save and continue',
                message_updated_template: 'Template updated',
                message_created_template: 'Template created',
                message_created_template_continue_flow:
                    'Question template is ready, continue creating your check-in',
                message_template_form_error: 'You have errors in the form',
                alert_upgrade_plan: {
                    message:
                        'You can create and save your own templates. To use them, upgrade your plan.',
                    link: 'Upgrade Plan',
                },
                bot_message: {
                    title_intro: 'Intro message',
                    lb_intro: 'Intro message',
                    pl_intro: 'Type a intro message (optional)',
                    title_outro: 'Final or thank you message',
                    lb_outro: 'Outro message',
                    pl_outro: 'Type an outro or thank-you message (optional)',
                },
                questions: {
                    section_title: 'Questions',
                    title: 'Question # {number}',
                    title_for_question_type_selection: 'click for select',
                    error_special_var_index:
                        "Question number doesn't exist in this template.", // eslint-disable-line
                    subtitle: 'Question will be in this slot',
                    lb_bot_question: 'Question',
                    lb_bot_question_index: 'Question {index}',
                    lb_bot_short_question_index: 'Short question {index}',
                    lb_bot_questions: 'Questions',
                    lb_report_title: 'Title shown in web & chat report',
                    lb_reports_titles: 'Title shown in web & chat report',
                    lb_blocker: 'This question is marked as critical or blocker.',
                    marked_critical_blocker: 'Mark as critical/blocker.',
                    unmark_critical_blocker: 'Unmark as critical/blocker.',
                    variation_sent: 'Sent variation: ',
                    marked_hidden_question:
                        'Responses received to this question will be excluded from the report posted via chat.',
                    warning_message_new_question:
                        'Changing the question type may change the analytics charts for the already collected responses.',
                    learn_more: 'Learn more',
                    delete: 'Delete',
                    mark_blocker: 'Mark as critical/blocker',
                    unmark_blocker: 'Unmark as critical/blocker',
                    hide_from_chat: 'Exclude responses from reports posted via chat',
                    show_on_chat: 'Include responses in reports posted via chat',
                    mark_required: 'Required',
                    lb_add_logic: 'Add logic',
                    lb_show_logic: 'Show logic',
                    lb_hide_logic: 'Hide logic',
                    lb_adding_logic: 'Adding logic to your questions',
                    lb_total_rules:
                        ' ({totalLogicRules} Rule) | ({totalLogicRules} Rules)',
                    lb_question_variation: 'Add variations',
                    lb_show_questions_variation: 'Show variations ({total})',
                    pl_emtpy_option_error: 'This option cannot be empty',
                    pl_duplicated_option_error: 'Option is duplicated',
                    pl_max_length_option_error: 'Max length of 25 characters',
                    pl_emtpy_or_duplicated_option_error: 'Option is empty or duplicated',
                    pl_question_type: '{question_type} response',
                    pl_question_type_boolean: 'Yes/No response',
                    pl_question_type_numeric: 'Numeric response',
                    pl_question_type_text: 'Open-ended response',
                    pl_question_type_multiple_choice: 'Multiple Choice response',
                    lb_question_type_boolean: 'Yes/No',
                    lb_question_type_text: 'Open-ended',
                    lb_question_type_numeric: 'Numeric',
                    lb_question_type_multiple_choice: 'Multiple Choice',
                    lb_positive_response_type: 'Yes label',
                    lb_negative_response_type: 'No Label',
                    lb_choice_response_type: 'Choices',
                    lb_choice_add_button: '+ Add Choice',
                    lb_choice_placeholder: 'Choice {index}',
                    lb_change_question_type: 'change',
                    lb_cancel_change_question_type_edition: 'Cancel',
                    pl_question_type_text_hint:
                        'The respondent can write any text without restrictions',
                    pl_question_type_numeric_hint:
                        'A numeric response will be required. It also accepts numbers with decimals',
                    pl_question_type_choice_hint:
                        'Give your members the option to choose an answer. You can add up to 25 answers buttons.',
                    pl_question_type_boolean_hint:
                        'An useful Yes/No option, the respondent must select one to move forward.',
                    true_value_boolean_question: 'Yes',
                    false_value_boolean_question: 'No',
                    nice_value_choice_question: 'Nice',
                    improving_value_choice_question: 'Improving',
                    blocked_value_choice_question: 'Blocked',
                    example_value_text_question:
                        'Great! I feel good because you can answer open text...',
                    block_drag: 'You can not drag the item if has questions with logic.',
                    hint_logic:
                        'You can add conditional logic to your questions. Jump between different questions and more.',
                    hint_contains_logic:
                        'These questions may jump between different questions based on the answers.',
                    hint_contains_logic_single:
                        'This question has conditional logic that can change the flow of the next questions based on participant responses.',
                    read_more: 'Read more here.',
                    hint_logic_no_allowed:
                        'On the last question it is not possible to add conditions. ',
                    empty_case_conditional_logic:
                        'Some previous questions contains conditional logic, therefore it may not have answers here.',
                    blocker_options: {
                        mark_critical_blocker: 'Mark as blocker response.',
                    },
                },
                logic: {
                    title: 'Modifying question logic',
                },
                rules: {
                    lb_rule: 'Rule',
                    lb_add_rule: 'Add rule',
                    lb_reset_logic: 'Reset logic',
                    lb_remove_all_rules: 'Remove all rules',
                    lb_if_response: 'If the response',
                    lb_add_another_condition: 'Add another condition',
                    lb_remove_rule: 'Remove this rule',
                    lb_trigger_workflow: 'Trigger workflow',
                    lb_then: 'Then',
                    lb_in_all_other_cases: 'In ALL other cases',
                    lb_always: 'Always',
                    placeholder_action: {
                        lb_and: 'And',
                        lb_or: 'Or',
                        lb_is_equal_to: 'Is equal to',
                        lb_value: 'Value',
                    },
                    condition_operator: {
                        options: {
                            is_equal_to: 'Is equal to',
                            is_not_equal_to: 'Is not equal to',
                            contains: 'Contains',
                            not_contains: 'Not contains',
                            greater_than: 'Greater than',
                            greater_or_equal_than: 'Greater or equal than',
                            lower_than: 'Lower than',
                            lower_or_equal_than: 'Lower or equal than',
                            begins_with: 'Begins with',
                            not_begins_with: 'Not begins with',
                            ends_with: 'Ends with',
                            not_ends_with: 'Not ends with',
                        },
                    },
                    condition_logic_connector: {
                        options: {
                            and: 'And',
                            or: 'Or',
                        },
                    },
                    condition_comparison_value: {
                        pl_comparison_value: 'Comparison value',
                        pl_select_option: 'Select an option',
                        void_option: 'Choice {number}',
                        option: 'Choice {number} - {text}',
                    },
                    condition_logic_action: {
                        pl_select_question: 'Select a question',
                        pl_select_checkin: 'Select a Checkin',
                        pl_select_form: 'Select a Form',
                        void_question: 'Question {number}',
                        question: 'Question {number} - {text}',
                        lb_option_go_to_end: 'End of the Check-In',
                        options: {
                            jump_to: 'Go to',
                            trigger_checkin: 'Trigger check-in',
                            trigger_form: 'Trigger form',
                        },
                    },
                    limits: {
                        free: {
                            rules: 'Upgrade to a paid plan to add more rules',
                            conditions: 'Upgrade to a paid plan to add more conditions',
                        },
                    },
                },
                special_vars: {
                    see_response: 'see previous response ',
                    void_case: 'Nothing, you have not filled out reports yet',
                    previous_response_date: {
                        description: 'Adds the date of the user’s previous response.',
                        preview: ' DD-MM-YYYY ',
                    },
                    previous_response: {
                        title: 'Your previous response',
                        description:
                            'Add a response from your previous check-in. Use the #n to specify the question number. <a class="link" href="https://help.dailybot.com/hc/en-us/articles/1500003985922-Use-special-variables-to-add-previous-responses" target="_blank">Learn more</a>',
                        preview: ' previous answer to question ',
                    },
                },
                modal_update: {
                    title: 'Please confirm this action',
                    use_by:
                        'Modifying this template will take effect in check-ins that use it. This template is used by {followups} check-ins.',
                },
                modal_custom_templates_disabled: {
                    admin_case: {
                        title: 'Very good! {br} Just one more step',
                        description:
                            'The template was saved, however you require to upgrade your plan to be able to use your own templates for check-ins.',
                        call_to_action: 'Upgrade Plan',
                    },
                    member_case: {
                        title: 'Very good! {br} One last step',
                        description:
                            'The template was saved, but an admin needs to upgrade the organization plan before you can use it.',
                        call_to_action: 'Return to Templates',
                    },
                },
                modal_limit_template: {
                    title: 'Unlock Question Templates',
                    description:
                        'Your current plan does not support using your own question templates. Upgrade your plan to run check-ins with your own custom questions.',
                    call_to_action: 'Upgrade Plan',
                },
                modal_confirm_delete_question: {
                    title: 'Delete question',
                    description:
                        'The previous question has conditional logic, so it will be deleted.',
                    yes_continue: 'Yes, continue',
                    no_cancel: 'No, cancel',
                },
                modal: {
                    title: 'Add variations',
                    subtitle: 'Each report will feature a randomly selected variation.',
                    form: {
                        title: 'Set of variations',
                        add: 'Add variation',
                        ai_suggestion: 'AI suggestions',
                        order_check:
                            'Variations will be introduced in the established order.',
                        variations_placeholder: 'Type a variation',
                        discard: 'Discard',
                        save: 'Save',
                    },
                },
            },
            drawer: {
                btn_use: 'Use this template',
                footer_hint: 'You can customize the questions and frequency later.',
            },
            cards: {
                scratch: {
                    title: 'Start from scratch',
                    description:
                        'Create your own questions for a custom check-in with your team.',
                    btn_create: 'Create from scratch',
                },
            },
        },
        question_type: {
            boolean: 'Yes/No',
            text: 'Open-ended',
            numeric: 'Numeric',
            multiple_choice: 'Multiple Choice',
        },
    },
}