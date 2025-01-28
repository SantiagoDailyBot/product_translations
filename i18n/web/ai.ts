export default {
    ai: {
        general: {
            title: 'DailyBot+ AI',
        },
        settings: {
            new_title: 'AI Settings',
            organization: {
                title: 'Organization settings',
                enable_ai_assistant: {
                    title: 'AI Assistant for your chat workspace',
                    description:
                        'Activate AI assistance to provide GPT-like responses to your team chat experience. {learnMore}',
                    hint: "💡 What's the best image size for a LinkedIn post?", // eslint-disable-line
                    link: 'AI usage policy',
                    help_description: 'Read this guide to get started.',
                    learn_more: 'Learn more',
                },
                enable_ai_function_calling: {
                    title: 'AI Insights with your data',
                    description:
                        // eslint-disable-next-line quotes
                        "Allow the AI assistant to provide insights based on your team's check-ins reports. {learnMore}",
                    hint: '💡 What was my plan today in the daily standup?', // eslint-disable-line
                    link: 'Learn more.',
                    help_description: 'Read this guide to get started.',
                    learn_more: 'Learn more',
                },
                enable_ai_workflows: {
                    title: 'Enable AI for organization-wide workflows',
                    description:
                        'Org-wide AI workflows will use data (check-ins, forms, etc.) sent to OpenAI for processing.',
                    hint: 'Find it in sidebar: Automation and Add-ons -> {link}',
                    help_description: 'Read this guide to get started.',
                    learn_more: 'Learn more',
                },
                ai_workflow_usage: {
                    title: 'Workflow runs with AI ({count}%)',
                    description:
                        'Your current plan supports {count} workflow runs per month',
                    unlimited: 'Unlimited',
                },
                enable_channels_to_interact_only_with_ai_assistant: {
                    title: 'Enable channels for AI use only',
                    title_hangouts: 'Enable spaces for AI use only',
                    description:
                        'Empower your chat experience only with responses from AI virtual assistant, disabling all kinds of commands on specific channels.',
                    description_hangouts:
                        'Empower your chat experience only with responses from AI virtual assistant, disabling all kinds of commands on specific spaces.',
                },
                ai_assistant_enabled_for_external_users_on_channels: {
                    title: 'Allow external users to interact with DailyBot’s AI',
                    description: 'These interactions will count towards your limits.',
                },
            },
            user: {
                title: 'My Preferences',
                enable_ai_assistant: {
                    title: 'Activate my AI virtual assistant',
                    description:
                        'This setting applies only for your own individual account.',
                    hint: "⭐ Try asking DailyBot privately, 'What is the image size for a LinkedIn Post?", // eslint-disable-line
                    help_description: 'Read this guide to get started.',
                    learn_more: 'Learn more',
                    help_description_disabled:
                        'An org admin disabled this option for your organization. You can ask an admin to activate these features again.',
                },
                respond_in_threads: {
                    title: 'Always respond in threads',
                    hint: '🧵 Start your prompt with :thread: emoji if you want me to reply in-thread.',
                },
                assistant_usage: {
                    title: 'Assistant responses with AI completed',
                    description:
                        'Your current plan supports {count} assistant responses per month.',
                    hint: "To upgrade your individual plan type <span class='code-text'>assistant</span> in DM with DailyBot.", // eslint-disable-line
                },
                premium_assistant: {
                    title: '✅ Personal AI plan active',
                    description: 'You have unlimited access to the Personal AI assistant',
                },
            },
        },
        prevTitle: 'Welcome to',
        title: 'Introducing AI',
        description:
            'We’re introducing fantastic AI features that will make DailyBot a better personal chat assistant, helping you breeze through your workday. With our powerful AI add-on, DailyBot provides instant answers to your questions, right within the chat. Plus, our AI-powered workflows automate repetitive tasks with generative natural content, reducing your stress and hassle. Say goodbye to tedious tasks and hello to a smarter, more efficient way of working.',
        features: {
            chat: {
                title: 'AI in your chat',
                short_description:
                    'Use DailyBot to get quick answers to your questions.',
                long_description:
                    "Just start a conversation and ask away! Imagine DailyBot as your genius assistant who's always ready to help, whether you need to complete a task or simply want to chat. Let DailyBot make your workday easier and more enjoyable.", // eslint-disable-line
                link: 'Say hey to DailyBot',
            },
            workflows: {
                title: 'AI in your workflows',
                short_description:
                    'DailyBot uses AI and workflows to automate the generation of natural-sounding content for you.',
                long_description:
                    'From company memos to emails to social media posts, DailyBot can help automate many workday tasks to increase productivity. Create your first workflow and experience a smarter way of working.',
                link: 'Automate your first task using workflows',
            },
        },
        guide: 'Manage Settings',
        footer: {
            settings: {
                label: 'Get started with ',
                link: 'our guide',
            },
            privacy_police: {
                label: 'Read the ',
                link: 'AI usage policy',
            },
            ideas: {
                label: '💡 Do you have any ideas? ',
                link: 'Let us know',
            },
        },
    },
}