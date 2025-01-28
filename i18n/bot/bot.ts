export default {
    "daily": {
        "finish": "Well done! Keep up the momentum and have a fantastic day!  🙌\n> To edit this report, type `checkin edit`.",
        "later": "Ok, you can complete your reports later by typing `checkin`.",
        "fail": "I'm having issues processing your response, please try again later by typing `checkin`?",
        "dailyExists": "Your check-in is already completed, please type *report* to see your latest update or type *`checkin reset`* to delete your response from today.",
        "resetDailyNoAction": "You haven't finished your today's check-in.\nType *`checkin`* to me in a direct message to respond to your check-ins for the day, or wait until your next check-in, I'll remind you.",
        "resetDailySuccess": "Ok, I deleted your response.\nYou can start again by typing *`checkin`* 🙂",
        "resetDailyFail": "I'm having trouble deleting your report, it might be temporary. Sorry and please try asking me later for this.",
        "motDay": "At the end of your report, I'll ask you an additional question about motivation 😉",
        "snoozed": "Ok, your check-in has been snoozed for {{{timeValue}}} minutes.",
        "resetFollowups": {
            "followupRemoved": "Ok, I deleted your response related to *{{{followupName}}}*.\nPlease type *`checkin`* to start over with your update.",
            "followupRemovedJoinResponses": "Ok, I deleted your today's response related to these check-ins: *{{{followupsNames}}}*.\nPlease type *`checkin`* to start over with your update."
        },
        "followups": {
            "choices": {
                "starterMultipleOptions": "Here are your check-ins for today, {{{date}}}. Please select a check-in to start or type `cancel` to stop this process.",
                "starterMultipleOptionsForTomorrow": "Here are your check-ins for {{{date}}}. Please select a check-in to start or type `cancel` to stop this process.",
                "selectStarterMultipleOptions": "Here are your check-ins for today, {{{date}}}. Choose one to start your report:",
                "selectStarterMultipleOptionsForTomorrow": "Here are your check-ins for {{{date}}}. Choose one to start your report:",
                "selectStarterMultipleOptionsPastReports": "These are your pending reports for {{{date}}}",
                "nextFollowup": "Let's continue with the pending updates. Please select a check-in to continue:",
                "nextFinalFollowup": "Thanks, would you like to fill out your final check-in report? This is *{{{followupName}}}*.",
                "nextFinalFollowupJoinResponses": "Would you like to fill out your final check-in report? This update is for: *{{{followupsNames}}}*.",
                "notPending": "There's no more pending check-ins.",
                "notNumber": "Please type a number between 1 and {{{totalPendingFollowups}}} or type `cancel` to stop this process. _Check the number at the beginning of each Check-in_."
            },
            "askToAnswerOnModal": "Thank you for your response. There is a new way for *filling out check-ins via pop-up form*. Would you like to try it next time?",
            "tryNewModal": "Try pop-up form (new)",
            "tryNewModalResponse": "Your response preference has been saved. You can always switch back to the inline version by typing `popup off` or in [your feature settings]({{{url}}}).\nHere's a preview of how your recent report looks in the pop-up form:",
            "keepInLine": "Keep responding in-chat",
            "keepInLineResponse": "Your preference has been saved. You can always modify it later in [your feature settings.]({{{url}}})",
            "fillOutFollowup": "Fill out followup",
            "fillOutWeb": "Fill out on Web",
            "startFollowupToday": "Nice, this is your update for *{{{followupName}}}*. _Type `cancel` to stop or step back with `back`._",
            "startFollowupTodayModals": "Nice, this is your update for this check-in.",
            "startFollowupOtherDate": "Let's start completing your pending *{{{followupName}}}* check-in on {{{date}}}. _Type `cancel` to stop or step back with `back`._",
            "startMultiplePastOrFutureFollowup": "Nice, this is your update for {{{date}}} for *{{{followupName}}}*. _Type `cancel` to stop or step back with `back`._",
            "startFollowupAnonymous": "> *_Important: this response will be anonymous._*",
            "startFollowupTodayJoinResponses": "Nice, this is an update for these check-ins: *{{{followupsNames}}}*. _Type `cancel` to stop or step back with `back`._",
            "startFollowupOtherDateJoinResponses": "Nice, this is an update on {{{date}}} for these check-ins: *{{{followupsNames}}}*. _Type `cancel` to stop or step back with `back`._",
            "triggerOtherFollowup": "Let's continue filling out the *{{{followupName}}}* Check-in report",
            "triggerOtherForm": "Let's continue filling out the *{{{formName}}}* Form. You can also fill it out [on the web]({{{url}}}).",
            "followupFinished": "Well done! Your update for *{{{followupName}}}* was completed.",
            "followupFinishedJoinResponses": "Well done! Your update was completed for these check-ins: *{{{followupsNames}}}*.",
            "allFollowupsFinished": {
                "common": "Well done! Keep up the momentum and have a fantastic day!  🙌\n> To edit this report, type `checkin edit`.",
                "slack": "Well done! Keep up the momentum and have a fantastic day!  🙌\n> Edit your responses inline in Slack to update the report.",
                "modalConfirmation": "Well done! Keep up the momentum and have a fantastic day!  🙌\n> Remember that by typing `popup off` or in [your feature settings]({{{url}}}), you can switch back to the *inline version*."
            },
            "webTip": {
                "noLink": "\n\n_Tip: you can also fill out reports and update responses on the web app._",
                "slack": "Tip: you can edit responses directly in this chat. Also, feel free to update or fill out reports on the [web app]({{{url}}}).",
                "hangouts": "Tip: you can edit your responses or fill out reports on the [web app]({{{url}}}).",
                "msteams": "Tip: you can edit your responses or fill out reports on the [web app]({{{url}}}).",
                "discord": "Tip: you can edit responses directly in this chat. Also, feel free to update or fill out reports on the [web app]({{{url}}})."
            },
            "update": {
                "notNumber": "Please type a number between 1 and {{{totalCompletedFollowups}}} or type `cancel` to stop this process. _Check the number at the beginning of each Follow-Up_.",
                "later": "Ok, you can edit your check-in report later by typing *`checkin edit`*.",
                "modal": {
                    "title": "Editing check-in",
                    "buttons": {
                        "submit": "Save",
                        "close": "Cancel"
                    },
                    "choices": {
                        "placeholder": "Type and choice an option."
                    }
                }
            }
        },
        "introCommunications": {
            "multimodal": "🎙️ In a hurry? Use your voice:"
        }
    },
    "_COMMENT_SYSTEM_HANDLERS": "----- SYSTEM HANDLERS -----",
    "system": {
        "_COMMENT_CORE": "----- CORE -----",
        "core": {
            "MaintenanceWindow": {
                "text": "*🔧 System under maintenance*\n\nOur engineering team is working on a scheduled maintenance.\n\nPlease try again later and thanks for your patience.\n\n[🟢 See Status Page](https://status.dailybot.com)"
            }
        }
    },
    "_COMMENT_BOT_INTERACTION_HANDLERS": "----- BOT INTERACTION HANDLERS -----",
    "bot_interaction": {
        "_COMMENT_AI": "----- AI -----",
        "ai": {
            "common": {
                "notEnabled": {
                    "usage": {
                        "common": "The AI Assistant feature is turned off in your DailyBot settings.",
                        "admin": "The AI Assistant feature is turned off in your DailyBot settings. You can [enable it here.]({{{url}}})"
                    },
                    "read": {
                        "common": "Org Admins deactivated the AI Assistant feature for the entire organization.",
                        "admin": "The AI Assistant feature is off for your organization. [Enable it here.]({{{url}}})"
                    },
                    "write": {
                        "common": "Org Admins deactivated the AI Assistant feature for the entire organization.",
                        "admin": "The AI Assistant feature is off for your organization. [Enable it here.]({{{url}}})"
                    }
                }
            },
            "AIFallback": {
                "errors": {
                    "openAI": {
                        "noResponse": "I’m sorry, I didn’t quite get that or there was an issue with your AI request.\n[See here](https://help.dailybot.com/hc/en-us/articles/14568647682067) to learn how to talk to the AI, or type `help` to learn more about what I can do for you.",
                        "callsLimitReached": {
                            "response": "Your organization has reached its monthly limit of AI interactions. Upgrade your plan for unlimited AI interactions. Or check our [website](https://www.dailybot.com/guides) to explore other features! – These are your options:",
                            "trialAnnounce": "> 💡 *Your organization has reached its monthly limits of AI interactions. You now have {{{totalAITrialCalls}}} more questions available.*",
                            "buttons": {
                                "button1": {
                                    "member": "Ask Admin for Upgrade",
                                    "admin": "Contact Us for Upgrade Options"
                                },
                                "button2": "Get An Individual Plan"
                            }
                        }
                    }
                },
                "AIDisclaimer": {
                    "supportTicket": {
                        "subject": "Report AI-generated inaccurate content",
                        "description": "Hi DailyBot Team, I get this AI-generated inaccurate content:"
                    },
                    "inChatDisclaimer": {
                        "response": "AI-generated content may be incorrect."
                    }
                }
            }
        },
        "_COMMENT_CORE": "----- CORE -----",
        "core": {
            "common": {
                "channelException": "I can help you! However it should be via direct message.\nPlease type *`{{{command}}}`* in a DM to proceed."
            },
            "UserApprovalOnboarding": {
                "approved": "Hello! Your request to join the organization has been approved by {{adminName}}. Welcome to Dailybot!",
                "declined": "Hello! We regret to inform you that your request has been declined by {{adminName}}."
            },
            "AnonymousUser": {
                "telegram": {
                    "onboardingMessage": {
                        "dm": "Hey {{{userName}}}! - I'm DailyBot, it's great to meet you. 🙌.\n\nYou must have an existing DailyBot account to interact with me here in Telegram.\nAre you ready? Just type: `setup your_account_user_id`\n\n*How to get your user id?*\n- Visit your profile: {{{userProfileUrl}}}\n- Tap the three dots at the top right\n- Select \"Copy User ID\"",
                        "channel": "Hey {{{userName}}}! - I'm DailyBot, and ready to work with you in Telegram 🙌.\nSend me a private message to setup your account."
                    },
                    "setupAction": {
                        "dm": {
                            "success": "Ok, I started pairing your account now... please open your email and confirm the setup.\nThe link will expire in 30 minutes.",
                            "errors": {
                                "invalid_request_data": "Sorry, there was an error. Either this account is not valid, or you already paired it. Try again.",
                                "user_or_organization_not_found": "Sorry, there was an error. Either this account is not valid, or you already paired it. Try again.",
                                "pairing_failed": "Sorry, there was an error. Either this account is not valid, or you already paired it. Try again.",
                                "telegram_feature_not_available": "Sorry, there was an error. Your account has not permissions to install telegram."
                            }
                        },
                        "channel": "Hey {{{userName}}}! before we dive in, let's get things rolling by sending me a private message."
                    }
                }
            },
            "AddChannel": {
                "channelAdded": "You can now use this channel for configuring check-in reports and other settings on the web application.",
                "channelAlreadyAdded": "This channel has already been added previously. You can use this channel for configuring check-in reports and other settings on the web application.",
                "directMessageException": "This command is not available on direct message. Try again on a public or private channel, typing: `@DailyBot add_channel`"
            },
            "OrganizationFreeVersion": {
                "message": "Your trial period expires today, we hope you enjoyed DailyBot so far.\n\nUpgrade your organization to continue using your check-ins, kudos, and commands.\n[See upgrade options]({{{url}}})."
            },
            "ActivateOrganizationContext": {
                "text": "Done! Your context for the *{{{organizationName}}}* organization is active."
            },
            "ChangeOrganizationContext": {
                "onboardingFlow": "These are some organizations available for you. Choose one to connect:",
                "changeContext": {
                    "intro": "You are connected to the *{{{organizationName}}}* organization.",
                    "action": "These are other organizations available to you.\nSelect one if you want to change your active context:"
                }
            },
            "SkipConfig": {
                "skipParticipants": "Got it. You can add participants later! In the meantime, type `assistant` to get information about how I can help you with my AI capabilities.",
                "skipParticipantsWithParticipantsFlow": "Got it, you can add more participants later on from the web app.\n\n💡 Tip: You can use natural language to ask me questions about our team, like: \"What's the team's progress last week?\" or \"What's @username's progress this week?\"",
                "skipChannel": "Got it – Something important to know is that you can use natural language to ask me questions about our team, like: \"What's the team's progress last week?\" or \"What's @username's progress this week?\"",
                "skipChannelWithParticipantsFlow": "Got it, do you want to add more participants to this check-in?"
            },
            "OnboardingFlow": {
                "directMessage": {
                    "intro": {
                        "text": {
                            "intro": "Hey! I’m DailyBot 👋\n\nI'll take your chat and collaboration to the next level with daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, in-chat automations and more. Take a look at this [2-min video](https://www.youtube.com/watch?v=zHZnGl4c-9g). 👀",
                            "introMsTeams": "Hey, I'm DailyBot. I help teams collaborate better with daily standups, check-in reports and team recognition right from Teams. ✌️ Some things I can help with right off the bat:\n\n- *See completed tasks*: Check what your teammates have finished using digestible reports.\n- *Track ongoing work*: Just ask and I’ll fill you in on what anyone is working on.\n- *Spot blockers*: Find out what’s causing delays in real time.\n\n",
                            "introHangouts": "Hey, I’m DailyBot! I help teams collaborate more effectively with daily standups, check-in reports, and team recognition—right from Google Chat. ✌️ Here’s what I can assist you with right away:\n\n- *See completed tasks*: Check what your teammates have finished using digestible reports.\n- *Track ongoing work*: Just ask and I’ll fill you in on what anyone is working on.\n- *Spot blockers*: Find out what’s causing delays in real time.\n\n",
                            "termsAndPrivacy": "> Take some time to review the *[Terms](https://www.dailybot.com/legal/terms-and-conditions)* and *[Privacy Policy](https://www.dailybot.com/legal/privacy-policy)*.\n\n",
                            "outro": "You can visit my dashboard to know more about your new team:"
                        },
                        "extraAdminIntro": {
                            "hangouts": "If you like the way DailyBot keeps things organized and simple, you can create an account now and enjoy less sync meetings and busy work. Sounds fair enough?",
                            "msteams": "Love how organized and easy this sounds? Complete your registration and set up your first check-in to see me in action:",
                            "discord": "⬇️ *Complete your onboarding* with the button below:"
                        }
                    },
                    "pairingFinished": {
                        "intro": "Hey! Well done 👏\n\nPlease go back to the web to complete your set up:",
                        "buttonText": "Set up now"
                    },
                    "guestUserShouldAddedFirst": {
                        "slack": "Hi! You're not member of DailyBot yet, please ask an administrator to add you to a team, after that, we'll be able to start working together 😄"
                    },
                    "userRequireCreateAccount": {
                        "text": "Hey! I’m DailyBot 👋 — It’s great to meet you.\n\nI’ll take your chat and collaboration to the next level with daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, in-chat automations and more. [Learn more](http://www.dailybot.com/) or take a look at this [2-min video](https://www.youtube.com/watch?v=zHZnGl4c-9g). 👀",
                        "textTermsAndPrivacy": "> Take some time to review the *[Terms of Service](https://www.dailybot.com/legal/terms-and-conditions)* and *[Privacy Policy](https://www.dailybot.com/legal/privacy-policy)*.",
                        "question": {
                            "text": "Want to create an account?",
                            "buttons": {
                                "yes": "Sign up",
                                "no": "No"
                            }
                        },
                        "botAnswerInteractiveButtons": {
                            "yesIntro": "Nice choice! Let’s start working together 😄",
                            "yesAdmin": "Please go to the web to complete your set up:",
                            "yesMember": "_Type *help* to learn more about me, or type *dashboard* to access my web app at any moment._",
                            "no": "Ok, we can do this later. Just send me a text whenever you’re ready.\n\nFeel free to check out [the website]({{{urlLanding}}}) to learn more about the product 😄"
                        }
                    }
                },
                "channelMessage": {
                    "firstTimeAdded": {
                        "directMessageFromChannelTrigger": "Hey! Thanks for adding me to your team, I’m really honored. Please use the following link to set me up:",
                        "channel": {
                            "intro": "*Hi! Nice to meet you all*, I’m thrilled to be here — I’m DailyBot and I help you automate daily updates, stand-up meetings, check-ins, retrospectives, and track team motivation. [Learn more]({{{urlLanding}}}) or visit our [support center]({{{urlSupport}}}) if you need help.",
                            "setup": {
                                "hangouts": "Want to give me a shot? *Send me a private message* to get started.",
                                "msteams": "We need to complete the account setup, *{{{userName}}}* just became an administrator and I’m sending you a private message with simple instructions to complete the configuration."
                            }
                        }
                    },
                    "organizationAlreadyExist": {
                        "intro": "Hey! Nice to meet you. 👋\nI’m DailyBot — I take chat and collaboration to the next level: daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, and more. [Learn more]({{{urlLanding}}}) or take a look at this [2min video.](https://www.youtube.com/watch?v=zHZnGl4c-9g)",
                        "outro": {
                            "common": "Send me a private message to set up your account, it’s easy.",
                            "discord": {
                                "text": "Click on the following button to setup your account on this server, it’s easy.",
                                "button": "Set up your account"
                            }
                        }
                    }
                },
                "msteams": {
                    "completeSetup": {
                        "withOutTeam": "{{{first_name}}}, seems like you're eager to see what I can do! 😊While adding me to your team is best to experience my full capabilities, *let's set up your first check-in so you can see me in action:*\n 1. Click the 'Set up check-in' button below.\n 2. Follow the quick steps to complete your registration and create your check-in.\n No worries about adding me to a team yet! We will do that later after you see how easy it is to get started with async team check-ins.",
                        "setupCheckinButtonText": "Set up check-in"
                    }
                },
                "addTeamButtonText": "Add to a team",
                "setupCheckinButtonText": "Set up check-in",
                "registrationButtonText": "Set up now",
                "goToDashboard": "Go to dashboard",
                "completeOnboarding": "Complete Onboarding"
            },
            "FeedbackInit": {
                "response": "Hey *[user]*, thanks for using DailyBot! We'd love to hear your feedback on how we can improve it. If you have any questions or need support, please visit our support center.",
                "buttons": {
                    "feedbackText": "Send Feedback",
                    "supportText": "Visit Support"
                }
            },
            "FeedbackStarter": {
                "response": "Nice, I love feedback. Please write a comment and I'll make sure that my team reviews it. I'll wait up to 10 minutes for that message, or type *`cancel`* to stop this process."
            },
            "FeedbackSender": {
                "response": "Got it! Thanks for sharing your feedback.",
                "empty": "The feedback message should not be empty, write your feedback and try to send it again.",
                "cancel": "Ok, we can do it later. I'd really love to read your feedback, feel free to share it when you're ready."
            },
            "Invite": {
                "error": "We encountered an issue while processing your invitations. Please try again later. If the problem persists, contact support for assistance.",
                "mainIntentMember": "Invite new people from your {{{platform}}} workspace to the DailyBot account. Ensure you're an Admin or Manager to run this action.",
                "status": "Here's the status of your invitations:",
                "usersAlreadyInvited": "✅ *Existing users:* These users were already part of the application:",
                "usersSuccessfullyInvited": "*🎉 Successfully added:* These users have been added without any issues:",
                "usersSuccessfullyInvitedByEmail": "The following users are not part of your {{{platform}}} workspace yet, so they've been invited as guests:",
                "thanks": "Thank you for inviting new members to join! 🚀",
                "guestInviteConfirmation": "Would you like to proceed with sending guest invitations to these users?",
                "btnYes": "✅ Yes, send invitations",
                "btnNo": "❌ No"
            },
            "InviteGuest": {
                "error": "We encountered an issue while processing your invitations. Please try again later. If the problem persists, contact support for assistance.",
                "guestSuccess": "🎉 Guest users have been successfully invited! They will receive an email with instructions to join."
            },
            "Help": {
                "text": "Hey, your wish is my command, and these are my available commands:",
                "textWithAI": "Your wish is my command, I'm your assistant equipped with capabilities to help you with a variety of tasks.\nSimply type your question in the chat to get started or type one of my available [commands](https://help.dailybot.com/hc/en-us/articles/360056361774-What-are-the-commands-accepted-by-DailyBot):",
                "tips": {
                    "1": "In a direct message just send me the command, in channels you should tag me with *`@DailyBot`* before the command.",
                    "2": "Need extra help? Check out [our FAQs page]({{{url}}}) for more info."
                },
                "dropdown": {
                    "selector": {
                        "label": "Quick Actions",
                        "placeholder": "Select an option"
                    },
                    "assistant": "Learn how to use the AI assistant",
                    "dashboard": "Go to the Web App",
                    "daily": "Discover Check-ins",
                    "kudos": "Discover Kudos",
                    "tour": "Explore Product",
                    "forms": "Discover Forms",
                    "commands": "Discover Commands"
                },
                "commands": {
                    "assistant": "Type *`assistant`* to get information about how can I help you with my AI capabilities.",
                    "daily": "Type *`checkin`* in a direct message to start your daily update.",
                    "dailyStatus": "Type *`checkin status`* in a direct message to get the status about your daily updates.",
                    "dailyReset": "Type *`checkin reset`* to remove your report from today.",
                    "dailyEdit": "Type *`checkin edit`* in a direct message to edit your daily responses.",
                    "dailyHelp": "Type *`checkin help`* to see more commands related to check-ins.",
                    "report": {
                        "slack": "Type *`report`* or *`report @user`* to see a full daily report, or someone else's report.",
                        "hangouts": "Type *`report`* or *`report @user`* to see a full daily report, or someone else's report.",
                        "msteams": "Type *`report`* to see a full daily report.",
                        "discord": "Type *`report`* or *`report @user`* to see a full daily report, or someone else's report."
                    },
                    "dashboard": "Type *`dashboard`* to see all your team reports, history, settings and more.",
                    "setTimeOff": "Type *`set time off`* to configure your own time off from work.",
                    "commands": "Type *`commands`* to see all custom commands.",
                    "commandsHelp": "Type *`commands help`* to see more help commands.",
                    "settings": "Type *`settings`* to get a quick overview of your organization, teams and profile settings.",
                    "feedback": "Type *`feedback`* to send me your comments or suggestions.",
                    "news": "Type *`news`* to read about announcements, new features and changes.",
                    "disable": "Type *`disable`* to disconnect me. I won't be able to send you more messages. You can re-enable me later by sending me a message.",
                    "kudos": {
                        "directMessage": "Type *`kudos to`* *@user1* *@user2* _message_ or *`++`* *@user* _message_, to give kudos, the message is optional.",
                        "channel": "Type *@dailybot* *`kudos to`* *@user1* *@user2* _message_ or *@dailybot* *`++`* *@user* _message_, to give kudos, the message is optional."
                    },
                    "kudosStatus": "Type *`kudos status`* or *`kudos me`* to get the status about your Kudos.",
                    "kudosLeaderboard": "Type *`kudos leaderboard`* or *`kudos top`* to see your organization kudos leaderboard.",
                    "kudosHelp": "Type *`kudos help`* to see more commands related to kudos.",
                    "forms": "Type *`forms`* to know your forms created and their associated *form shortcut* if any.",
                    "formsHelp": "Type *`forms help`* to see more commands related to forms.",
                    "extras": "Type *`extras`* to see all extra available DailyBot commands.",
                    "time": "Type *`time`* *@user1* *@user2* to see the time for mentioned user.",
                    "timezone": "Type *`timezone`* *timezoneName* to know the time in specific timezones.",
                    "textformat": "Type *`textformat`* to see all available text formats for current platform."
                },
                "commands_title": {
                    "basic": "*Basic commands:*",
                    "other": "*Other commands:*"
                }
            },
            "Hello": {
                "response": "Hey [user]! Have a great day and remember I'm so happy about being your friend.\nType *`help`* to learn more about me, or type *`dashboard`* to access my web app at any moment."
            },
            "ButtonCallbackUrl": {
                "success": "Ok, it's done",
                "error": "There was an error:"
            },
            "Dashboard": "Ok, please *[follow this link]({{{url}}})* to access the web dashboard.",
            "discordDashboard": {
                "text": "Ok, please click this button to access the web dashboard.",
                "label": "Dashboard"
            },
            "News": {
                "blog": "Take a look at *[my blog](https://www.dailybot.com/blog/)* to read about tips, key learnings and other content that our team is sharing.",
                "changelog": "Read my *[release notes](https://www.dailybot.com/blog/release-notes/)* to stay in the loop about new features and improvements."
            },
            "Datetime": {
                "info": "The time information for your user is:",
                "infoMentionedUsers": "The time information for mentioned user is:",
                "infoMentionedUsersMultiple": "The time information for mentioned users is:",
                "dateTimeInfo": "{{{datetime}}} — {{{timezone}}}",
                "infoNotFound": "The mentioned user is not an active member of DailyBot organization.",
                "infoNotFoundMultiple": "The mentioned users are not active members of DailyBot organization.",
                "infoMissing": "*Note:* _If the time information of any mentioned user does not appear, it is because he is not an active member of DailyBot organization._"
            },
            "CommandUpdated": "This command has been changed, please type *`help`* to see all current commands.",
            "DisableBotAction": "Chatbot has been deactivated.\n 🟡 Notice: This will impact the delivery of DailyBot reminders or DM notifications.\nFeel free to continue using the *[Web Application]({{{url}}})*, or click below to reactivate the bot.",
            "Activate": "Re-activate",
            "EnableBotAction": {
                "enable": "Hey! Welcome back, I'm ready to help you.\nYou can *[login into the web application]({{{url}}})* to check your settings.",
                "previouslyEnabled": "It seems that you had enabled me previously, I'm ready to help you.\nPlease type *`help`* to know more about how I can help you."
            },
            "InactiveBot": "👋 I'm here to help, but the bot is currently deactivated for you.\nDo you want to activate it?",
            "YesActivate": "Yes, activate",
            "InactiveUser": {
                "isInactive": "Hey! Sorry for this, your DailyBot account for {{{platform}}} has been deactivated. Please contact an administrator if you want to enable it.",
                "isUnapproved": "Hey, we have sent your request to the organization. An admin should approve you first as a DailyBot member. Please contact your DailyBot or {{{platform}}} workspace administrator, or wait for an admin to accept you on DailyBot."
            },
            "Settings": {
                "info": "This is a quick overview of your settings. You can manage these settings on my *[Web Application]({{{url}}})*:",
                "organization": "\n*[Organization settings]({{{url}}}):*\n{{{linePrefix}}}*Name:* {{{ orgName }}}\n{{{linePrefix}}}*Timezone:* {{{ orgTimezone }}}\n{{{linePrefix}}}*Work start time:* {{{ hourInitWork }}}\n{{{linePrefix}}}*Bot Language:* {{{ botLanguage }}}",
                "teamsTitle": "\n*[Teams settings]({{{url}}}):*",
                "teamInfo": "\n{{{linePrefix}}}{{{index}}}. *Team:* {{{ teamName }}}\n{{{linePrefix}}}- *Members:* {{{ membersTotal }}}\n{{{linePrefix}}}- *Timezone:* {{{ teamTimezone }}}\n{{{linePrefix}}}",
                "members": "\n*[Organization Members settings]({{{url}}}):*\n{{{linePrefix}}}*Members:* {{{membersTotal}}}\n{{{linePrefix}}}*Organization Admins:* {{{orgAdminsTotal}}}\n{{{linePrefix}}}*Team Managers:* {{{managersTotal}}}",
                "profile": "\n*[Profile settings]({{{url}}}):*\n{{{linePrefix}}}*Name:* {{{ userName }}}\n{{{linePrefix}}}*Timezone:* {{{ userTimezone }}}\n{{{linePrefix}}}*Work start time:* {{{hourInitWork}}}\n{{{linePrefix}}}*Role:* {{{userRole}}}"
            },
            "TextFormatsPreview": {
                "text": "Hi there! The following is a list of the different formats I support.\nYou can also see this *[support article](https://www.dailybot.com)* to know more about how to build responses with these formats.",
                "markdown": {
                    "strong": "*This is a bold text*",
                    "italic": "_This is an italic text_",
                    "strikethrough": "~This is a strikethrough text~",
                    "blockquote": "> This is a blockquote text",
                    "header": {
                        "msteams": {
                            "1": "# Header Level 1: This is a header text",
                            "2": "## Header Level 2: This is a header text",
                            "3": "### Header Level 3: This is a header text"
                        }
                    },
                    "unordererList": "This is an unorderer list:\n- Item 1\n- Item 2\n- Item 3",
                    "ordererList": "This is an orderer list:\n1. Item 1\n2. Item 2\n3. Item 3",
                    "highlight": "`This is a text highlighted`",
                    "codeBlock": "```\nThis is a code block line 1\nThis is a code block line 2\n```",
                    "link": "[This text contains a link](https://www.dailybot.com)",
                    "image": "There is a text formatted with an image below:\n![This text contains a image](https://d2e7nn6oh5ucns.cloudfront.net/images/SEO/ImgSEO_1x.png)"
                }
            },
            "Thanks": {
                "1": "Oh, don't you even mention it. I'm always happy to help.",
                "2": "It's always my pleasure.",
                "3": "You are so very welcome.",
                "4": "It's no trouble at all. 😊",
                "5": "Anytime! it's always my pleasure. 😊"
            },
            "Timezone": {
                "info": "The time information for the typed timezone is:",
                "tzSiteInfo": "Visit [this site](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) to get the complete list of timezone values.",
                "inputRequired": "A timezone or offset value is required. _Example:`timezone UTC` or `timezone +1`_\nYou can also type `timezone list` to get the complete list of timezone values.",
                "tzInvalid": "This is not a valid timezone value.",
                "tzResultsFound": "I found {{{total}}} results that match with the written timezone:",
                "tzResultsFoundMany": "I found {{{total}}} results that match with the written timezone.\nThese are the first 10 results:",
                "offsetInfo": "The time information for the typed offset is:",
                "offsetInvalid": "The offset value should be between -12 and +14."
            },
            "ActivatePromoCode": {
                "userNotAuthorized": "Hey, almost there! You’re not authorized to activate this code, please ask a DailyBot admin to do it.",
                "orgPlanIsNotFree": "Sorry about this: the code cannot be activated. Seems like you already have another DailyBot plan. Please try again or contact support.",
                "codeIsRequired": "You’re getting closer to activating your plan with a special code. To do this, type `activate code YOURCODE`.",
                "activation": {
                    "success": "Hey, it’s done! You just upgraded your DailyBot plan with this code. See more details on your [plan page]({{{url}}}). Enjoy your upgraded plan.",
                    "error": {
                        "redemption_failed": "Sorry, this code could not be redeemed. Either the code is not valid or it has expired.",
                        "redemption_not_authorized": "Sorry, there was a problem when validating this code. Either your account is not eligible or the code is not valid."
                    }
                }
            },
            "SkillsHelp": {
                "followups": {
                    "intro": "Check-ins are automated questions you can set for your team on a regular basis.",
                    "commands": {
                        "1": "Type *`checkin`* in a direct message to start your check-in update.",
                        "2": "Type *`checkin status`* in a direct message to get the status of your check-ins.",
                        "3": "Type *`checkin for YYYY-MM-DD`* to fill out a check-in report on a specific date (past or future)",
                        "4": "Type *`checkin edit`* in a direct message to edit your check-in responses.",
                        "5": "Type *`checkin reset`* to remove your report from a check-in.",
                        "6": "Type *`report`* or *`report @user`* to see a complete report or someone else's report."
                    }
                },
                "kudos": {
                    "intro": "Kudos let you recognize a teammate's work and congratulate them. You can make the kudos public on a specific channel. Give kudos and create a great company culture.",
                    "commands": {
                        "1": "Type *`kudos to @user1 @user2 {message}`* to give kudos, the message is optional.",
                        "2": "Type *`kudos leaderboard`* to see your organization's kudos leaderboard.",
                        "3": "Type *`kudos me`* to get a summary of your kudos history."
                    },
                    "outro": "Give kudos to your team!\n`kudos to @teammate1 @teammate2 for the great presentation today!`"
                },
                "forms": {
                    "intro": "Forms let you collect data from your team or external users on demand.\n\nFYI — Each form you create in DailyBot can have an associated word with it (sort of like an associated command) so you can type this command and instantly launch the form within the chat to start filling it out.",
                    "commands": {
                        "1": "Type *`forms`* to know your forms created and their associated *form shortcut* if any.",
                        "2": "Type *`forms search {word-to-find}`* to search forms by name.",
                        "3": "Type *`{form shortcut}`* of a form to start to fill out it.",
                        "4": "Type *`{form shortcut} search {word-to-find}`* to search the word in the responses of a specific form."
                    }
                },
                "commands": {
                    "intro": "Commands are words you type in your chat with DailyBot to trigger quick actions.",
                    "commands": {
                        "1": "Type *`commands`* to see all commands available.",
                        "2": "Type *`commands me`* to see all your custom commands.",
                        "3": "Type *`commands addons`* to see all pre-build commands (add-ons) from DailyBot.",
                        "4": "Type *`commands forms`* to see all your forms shortcuts."
                    }
                },
                "mood": {
                    "intro": "DailyBot helps you track the team's mood.\n\nEvery week, with a simple in-chat question DailyBot gets anonymous feedback about your team's mood. Then it gives you a graph with the trends that you can later analyze. You'll find the graph on the dashboard next to each Check-in since it's built based on its participants.\n\nYou can view the privacy and [team mood settings here]({{{url}}})."
                }
            },
            "Undefined": {
                "response": {
                    "aiAssistantNotAvailable": "I didn't quite get that. I understand some commands you can [see here](https://help.dailybot.com/hc/en-us/articles/360056361774-What-are-the-commands-accepted-by-DailyBot) in this guide.\nType `help` for more info.",
                    "aiAssistantAvailable": {
                        "aiAssistantEnabled": "I didn't quite get that. You can either try one of the commands listed in [our guides](https://help.dailybot.com/hc/en-us/articles/360056361774-What-are-the-commands-accepted-by-DailyBot).\nType `help` for more info, or you can simply ask me a question or make a request using natural language. Our AI is always here to help you out!",
                        "aiAssistantDisabled": {
                            "assistantEnabledForTheOrganization": "I didn't quite get that. I understand some commands you can see here in [our guides](https://help.dailybot.com/hc/en-us/articles/360056361774-What-are-the-commands-accepted-by-DailyBot).\nType help for more info. By the way, you can activate the AI Assistant feature by typing `assistant`.",
                            "assistantDisabledForTheOrganization": {
                                "admin": "I didn't quite get that. I understand some commands you can see here in [our guides](https://help.dailybot.com/hc/en-us/articles/360056361774-What-are-the-commands-accepted-by-DailyBot).\nType `help` for more info. By the way, as an admin, you can activate the AI Assistant feature for your organization in the [AI web app settings]({{{url}}}).",
                                "member": "I didn't quite get that. I understand some commands you can see here in [our guides](https://help.dailybot.com/hc/en-us/articles/360056361774-What-are-the-commands-accepted-by-DailyBot).\nType `help` for more info. By the way, you can ask to your admin activate the AI Assistant feature for your organization."
                            }
                        }
                    }
                },
                "cancel": "There is nothing to cancel at this time."
            },
            "PairAccount": {
                "response": "Alright, here is your authentication code: {{{ code }}}"
            }
        },
        "_COMMENT_ASSISTANT": "----- ASSISTANT -----",
        "assistant": {
            "AssistantSetup": {
                "responseOffPrefix": "> *🔴 The AI Assistant is currently turned off.*",
                "response": "I'm your *AI Assistant*, equipped with capabilities to help you with a variety of tasks. Simply type your question in the chat to get started. [Learn more](https://help.dailybot.com/hc/en-us/articles/14568647682067).",
                "tips": {
                    "1": "> 🗣️ Talk to me naturally, but be aware that my AI responses can be [inaccurate](https://help.dailybot.com/hc/en-us/articles/14565231930771) at times.",
                    "2": "> ❓ Use a question mark at the end of your questions for best results.",
                    "3": "> 🧵 Start your prompt with the `:thread` emoji if you want me to reply in-thread.",
                    "4": "> 📣 Be specific and concise for the best answers."
                },
                "buttons": {
                    "turnOn": "Enable Personal AI Assistant",
                    "turnOff": "Disable Personal AI Assistant"
                }
            },
            "AssistantSetupAction": {
                "response": {
                    "turnOn": "🟢 With the AI Assistant enabled, you and your team can ask questions and make requests in natural language. Type `assistant off` to disable my AI capabilities.",
                    "alreadyOn": "The AI Assistant is already enabled.",
                    "turnOff": "🔴 With the AI Assistant disabled, you and your team will not be able to use natural language to ask questions or make requests. *Turn ON* the AI Assistant to improve your daily workflow.",
                    "alreadyOff": "The AI Assistant is already disabled."
                }
            },
            "AssistantUpgradeRequest": {
                "response": "Sure, choose how you would like to subscribe:",
                "buttons": {
                    "monthly": "Monthly individual plan",
                    "annual": "Yearly individual plan"
                },
                "errors": {
                    "noPremiumLinkFound": "To upgrade your individual DailyBot AI Assistant [contact us](https://help.dailybot.com/hc/en-us/requests/new?tf_subject=About%20AI%20Upgrade%20Options&tf_anonymous_requester_email={{{ email }}}&tf_1500002559602={{{ platform }}}&tf_description=Hi%20DailyBot,%20%20I%27m%20interested%20in%20learning%20more%20about%20AI%20upgrade%20options%20for%20my%20organization.%20Could%20you%20please%20give%20me%20some%20information?%20Thank%20you) to upgrade your plan."
                }
            },
            "AssistantRequestToAdmin": {
                "response": "Request sent! An admin will let you know if AI Assistant is approved for the organization.\nIn the meantime, you can still use [our other features](https://www.dailybot.com/resources)."
            },
            "AssistantAdminRequestUpgradeInstructions": {
                "response": "To upgrade your DailyBot AI Assistant feature [contact us](https://help.dailybot.com/hc/en-us/requests/new?tf_subject=About%20AI%20Upgrade%20Options&tf_anonymous_requester_email={{{ email }}}&tf_1500002559602={{{ platform }}}&tf_description=Hi%20DailyBot,%20%20I%27m%20interested%20in%20learning%20more%20about%20AI%20upgrade%20options%20for%20my%20organization.%20Could%20you%20please%20give%20me%20some%20information?%20Thank%20you) to upgrade your plan."
            }
        },
        "_COMMENT_FOLLOWUP": "----- FOLLOW-UP -----",
        "followups": {
            "common": {
                "notEnabled": {
                    "usage": {
                        "common": "The Check-ins feature is turned off in your DailyBot settings.",
                        "admin": "The Check-ins feature is turned off in your DailyBot settings. You can [enable it here.]({{{url}}})"
                    },
                    "read": {
                        "common": "Org Admins deactivated the Check-ins feature for the entire organization.",
                        "admin": "The Check-ins feature is off for your organization. [Enable it here.]({{{url}}})"
                    },
                    "write": {
                        "common": "Org Admins deactivated the Check-ins feature for the entire organization.",
                        "admin": "The Check-ins feature is off for your organization. [Enable it here.]({{{url}}})"
                    }
                },
                "skillPreferencesUrl": "You can review your Check-ins preferences [here]({{{url}}}).",
                "followupResponseFlow": {
                    "introOutroSpecialCase": "*About {{{followupName}}}:* {{{introOutro}}}",
                    "cancel": "Got it, canceled. When you're ready, simply type `checkin` to resume your reports for today or `checkin help` for additional options."
                },
                "followupEditResponseFlow": {
                    "cancel": "Ok, it's canceled. Once you're ready, please type *`checkin edit`* to edit your check-in reports."
                },
                "followupMenuInfo": {
                    "toBeStarted": {
                        "optional": "Optional",
                        "pendingToResponseAnonymous": "_your response will be fully anonymous_",
                        "pendingToResponseAnonymousButtonText": "(Anonymous)"
                    },
                    "toGetReport": {
                        "responses": {
                            "1": "response",
                            "n": "responses"
                        }
                    },
                    "status": {
                        "completed": "Response completed",
                        "completedAnonymous": "Response completed anonymously",
                        "pending": "*Waiting for your response*",
                        "pendingLater": "For later today",
                        "pendingAnonymous": "*Waiting for your anonymous response*",
                        "pendingLaterAnonymous": "For later today. Anonymous response"
                    },
                    "reportLinkText": "[{{{report_name}}}]({{{url}}})"
                },
                "responseLimitReached": {
                    "pull": {
                        "admin": "Want more montlhy check-in responses? You can [upgrade your plan]({{{url}}}), or share your thoughts about us on [this page](https://www.trustpilot.com/evaluate/dailybot.com), then let us know at support@dailybot.com to get 20 extra responses for your team. 🚀",
                        "member": "Your team has reached the Free check-in responses limit for this month. You can ask your admin to [upgrade](https://www.dailybot.com/pricing/) or share your thoughts about us on [this page](https://www.trustpilot.com/evaluate/dailybot.com), then let us know at support@dailybot.com to get 20 extra responses for your team. 🚀",
                        "adminWithOutLinks": "Want more monthly check-in responses? You can upgrade your plan directly through the DailyBot web app. 🚀",
                        "memberWithOutLinks": "Your team has reached the Free check-in responses limit for this month. You can ask your admin to upgrade the plan in the DailyBot web app. 🚀"
                    },
                    "push": {
                        "admin": "Hi! How are you doing?\n\nJust letting you know that your team has reached the limit of check-in responses for this month. But don't worry! You can [upgrade your plan]({{{url}}}), or share your thoughts about us on [this page](https://www.trustpilot.com/evaluate/dailybot.com), then let us know at support@dailybot.com to get 20 extra responses for your team. 🚀",
                        "member": "Your team just reached the Free check-in responses limit for this month. You can ask your admin to [upgrade the plan](https://www.dailybot.com/pricing/ or share your thoughts about us on [this page](https://www.trustpilot.com/evaluate/dailybot.com), then let us know at support@dailybot.com to get 20 extra responses for your team. 🚀",
                        "adminWithOutLinks": "Hi! How are you doing?\n\nJust letting you know that your team has reached the limit of check-in responses for this month. But don't worry! You can upgrade your plan directly through the DailyBot web app. 🚀",
                        "memberWithOutLinks": "Your team just reached the Free check-in responses limit for this month. You can ask your admin to upgrade the plan in the DailyBot web app. 🚀"
                    },
                    "twitterTextToShare": "I set up @DailyBot to handle our daily standup meetings and I've managed to free up lots of time from in-person standups. You should check it out: www.dailybot.com"
                },
                "errors": {
                    "notResponsesAcceptedByInactiveFollowUp": "Sorry, looks like the check-in *{{{followupName}}}* has been deactivated, you can review your Check-in preferences [here]({{{url}}}).",
                    "noFollowupsFound": "There are no followups active to be shown.",
                    "notNumber": "Please type a number between 1 and {{{totalChoices}}} or type `cancel` to stop the process. _Check the number at the beginning of each check-in_.",
                    "failTemplate": "I'm having issues processing your response. It seems that you have changed the check-in template, can you please try again by typing `checkin`?"
                }
            },
            "FollowupPopUp": {
                "common": "Type `popup on` to respond via pop-up form, or `popup off` to respond inline within the chat.",
                "on": "Your response preference has been saved. You can switch to the inline version by typing `popup off` or in [your feature settings]({{{url}}}).",
                "off": "Your response preference has been saved. To respond using the pop-up form version, type `popup on` or in [your feature settings]({{{url}}})."
            },
            "FollowupDraft": {
                "common": "Type `followup_draft on` to get draft of your followups, or `followup_draft off` to respond inline within the chat.",
                "on": "Your response preference has been saved. You can switch to the inline version by typing `followup_draft off`.",
                "off": "Your response preference has been saved. To get draft of your followup, type `followup_draft on`."
            },
            "FollowupDailyUpdateStarter": {
                "response": {
                    "noFollowupsToEdit": "There's no completed Check-ins for edit.",
                    "updateFollowup": "Please select the check-in to edit:"
                }
            },
            "FollowupReportStarter": {
                "response": {
                    "chooseFollowup": "Please tell me which Check-in report you'd like to get for {{{date}}} (*type the number*) or type _cancel_ to stop this process:",
                    "chooseFollowupMentionedUsers": "These users are involved in several check-ins.\nPlease tell me which check-in report you want to get for {{{date}}} (*type the number*) or type _cancel_ to stop this process:"
                }
            },
            "FollowupReportSelection": {
                "cancel": "Ok, it's canceled. Once you're ready, please type *`checkin report`* to get the reports for the check-ins that you belong."
            },
            "FollowupDailySnoozed": {
                "snoozeMinutes": "Ok, I’ll remind you in *{{{time}}} minutes*.",
                "snoozeHour": "Ok, I’ll remind you in *{{{time}}} hour*.",
                "snoozeHours": "Ok, I’ll remind you in *{{{time}}} hours*.",
                "extraTime": {
                    "slack": "Want to change the snooze time? Select a custom one (optional)",
                    "hangouts": "Want to change the snooze time? Select a custom one (optional)",
                    "msteams": "Want to change the snooze time? Select a custom one (optional)",
                    "discord": "Want to change the snooze time? Select a custom one (optional)"
                },
                "selectorPlaceholder": "Choose an option",
                "minutes": "minutes",
                "hour": "hour",
                "hours": "hours"
            },
            "FollowupDailySkipped": {
                "response": "Ok, you can fill out your reports later by typing *`checkin`*.",
                "question": "Alternatively, you can `set time off` from work to stop your reminders while you're away:",
                "interactive": {
                    "actions": {
                        "1": {
                            "buttonAndDisplayText": "Off just for today",
                            "buttonAndDisplayText_ac": "Time off configured",
                            "value": "set time off 1 day"
                        },
                        "2": {
                            "buttonAndDisplayText": "Off for next 3 days",
                            "buttonAndDisplayText_ac": "Time off configured",
                            "value": "set time off 3 day"
                        },
                        "3": {
                            "buttonAndDisplayText": "More options",
                            "buttonAndDisplayText_ac": "More options",
                            "value": "set time off"
                        },
                        "4": {
                            "buttonAndDisplayText": "Just skip for today",
                            "buttonAndDisplayText_ac": "Ok, check-in skipped for today",
                            "value": "set time off end"
                        }
                    }
                }
            },
            "FollowupDailyStatus": {
                "intro": {
                    "withFollowups": "Today's check-in status ({{{date}}}):",
                    "emptyFollowups": "No check-ins due today. To fill out for another date, type `checkin for YYYY-MM-DD`",
                    "noActiveOrPendingFollowups": "You don't have any active check-ins to complete for {{{date}}}."
                },
                "tip": "To fill in a report for a specific date, past or future, simply type `checkin for YYYY-MM-DD`",
                "dropdown": {
                    "placeholder": "Select an option",
                    "label": "Select a Check-in"
                },
                "dropdownForCheckins": {
                    "selector": {
                        "label": "Quick Actions",
                        "placeholder": "Complete pending reports"
                    },
                    "checkPastPendingReports": "From the past 7 days",
                    "checkinsForTomorrow": "For tomorrow",
                    "completeReportsForToday": "For today",
                    "checkReportsForSpecificDate": "From a specific date",
                    "noPendingCheckinsforLastWeek": "You have no pending reports from the last 7 days. If you want to check a different date, type `checkin for YYYY-MM-DD`"
                }
            },
            "FollowupConfigChannel": {
                "success": "Perfect, the channel was set up 👌!\n 💡 Tip: You can use natural language to ask me questions about our team, like: \"{{{username}}}'s progress this week?\"",
                "configParticipants": "Perfect, the channel was set up 👌 now add more participants to this check-in and start collaborating with your team!"
            },
            "FollowupDailyQuestion": {
                "goBack": {
                    "fail": "> _Oh! You almost got me 🤔, this is already the *first question* for this check-in, type your response or `cancel` to stop this process._",
                    "success": "> _Consider it done, let's repeat the *previous question*._"
                },
                "answerNotValid": {
                    "text": "> _Please type a *valid text* to respond to this question._",
                    "numeric": "> _Please type a *valid number* to respond to this question._",
                    "boolean": "> _This question expects as answer *one of the options presented*, please try again._",
                    "multiple_choice": "> _This question expects as answer *one of the options presented*, please try again._"
                },
                "buttonEditResponsesAfterDaily": "Edit my responses",
                "msgExtFallbackMessage": "> _You are already in the middle of the report. Be sure to complete it before starting another one._",
                "buttonInviteParticipants": "Invite on the web app",
                "msgInviteParticipants": "Great! 🥳 Do not forget to come back here when you have invited more participants in your check-in.\n\n💡 Tip: You can use natural language to ask me questions about our team, like: \"{{{username}}}'s progress this week?\"",
                "buttonSkipForNow": "Skip for now",
                "onboardingParticipants": "Thank you for your response! Your report was shared to the *#{{{channel}}}*\n\n You're currently the only participant in this check-in, add more participants and start collaborating with your team!",
                "onboardingChannel": "Thanks for your response! ⬆️ Here's a preview of how the report would look in a channel.\n",
                "onboardingChannelSelector": "Set a default channel to share future reports with your team:",
                "errors": {
                    "templateVersionConflict": "Hey, an editor just modified the questions of this check-in. Use *`checkin`* to fill out the updated version, and give your responses a touch-up if needed."
                }
            },
            "FollowupDailyUpdateResponses": {
                "title": "Ok, let’s do this.",
                "placeholder": "What response do you want to edit?",
                "questionTitle": {
                    "hangouts": "<b>For the question:</b><br><br>{{{questionTitle}}}<br><br><b>You responded:</b>",
                    "msteams": "{{{questionTitle}}}",
                    "discord": "For the question:\n{{{questionTitle}}}"
                },
                "buttons": {
                    "edit": "Edit",
                    "save": "Save",
                    "cancel": "Cancel"
                },
                "editResponsesWithConditionalQuestionsTip": "The *{{{ followupName }}}* check-in contains conditional logic.\n[Follow this link]({{{url}}}) to edit it on the web."
            },
            "FollowupDailyUpdateSingleResponse": {
                "text": "You are editing the question, type *`cancel`* if you don't want to modify your current response. \n\n{{{title}}}\n> {{{previousAnswer}}}\n\nType your new response:",
                "success": {
                    "slack": "Done! Your responses have been updated. 👏",
                    "hangouts": "Done! Your response has been updated. 👏",
                    "msteams": "Done! Your responses have been updated. 👏",
                    "discord": "Done! Your responses have been updated. 👏"
                },
                "answerNotValid": {
                    "text": "> _Please type a *valid text* to respond to this question._",
                    "numeric": "> _Please type a *valid number* to respond to this question._",
                    "boolean": "> _This question expects as answer *one of the options presented*, please try again._",
                    "multiple_choice": "> _This question expects as answer *one of the options presented*, please try again._"
                },
                "cancelEdit": "Ok, it's canceled.\nRemember you can always edit your responses using the `checkin edit` command"
            },
            "FollowupResetSelection": {
                "cancel": "Ok, I didn't delete anything."
            },
            "FollowupResetStarter": {
                "notCompletedFollowupsFound": "You haven't responded to any check-ins for {{{date}}}.\nPlease type *`checkin`* to complete your responses.",
                "response": {
                    "oneOption": {
                        "1": "Do you want to delete your response for {{{date}}} related to *{{{followupName}}}*?",
                        "n": "Do you want to delete your Check-in responses for {{{date}}}? _Those are: *{{{followupsNames}}}*_"
                    },
                    "multipleOptions": "These are your check-in responses for {{{date}}}: _(type the number of the check-in to reset or type `cancel` to stop this process)_."
                }
            }
        },
        "_COMMENT_KUDOS": "----- KUDOS -----",
        "kudos": {
            "common": {
                "notEnabled": {
                    "usage": {
                        "common": "The Kudos feature is turned off in your DailyBot settings.",
                        "admin": "The Kudos feature is turned off in your DailyBot settings. You can [enable it here.]({{{url}}})"
                    },
                    "read": {
                        "common": "Org Admins deactivated the Kudos feature for the entire organization.",
                        "admin": "The Kudos feature is off for your organization. [Enable it here.]({{{url}}})"
                    },
                    "write": {
                        "common": "Sorry, the send Kudos feature is not available to you.",
                        "admin": "The send Kudos feature is off for your organization. [Enable it here.]({{{url}}})"
                    }
                }
            },
            "KudosInviteUser": {
                "success": "Done! The users were invited successfully.",
                "cancel": "Ok, it's canceled.",
                "cancelWithUsers": "Ok, I'll send the kudos to the actual users:\n{{{users}}}"
            },
            "AddKudos": {
                "success": "Done. Giving kudos is rewarding, keep it up!",
                "successNoChannel": "Kudos delivered 👏",
                "channelSelector": {
                    "label": "Kudos delivered 👏 think this awesome gesture deserves to be shared on a channel? ",
                    "placeholder": "Select a channel"
                },
                "yes": "Done! *#{{{channel}}}* is now your default kudos channel.",
                "no": "Okay, you can set the default channel later.",
                "sharedOnChannel": "Your kudos are live on *#{{{channel}}}*! Make this the go-to channel for future kudos?",
                "sharedOnChannelMember": "Great! The kudos were shared on *#{{{channel}}}*.",
                "predeterminedChannel": "The kudos are shared in the *#{{{channel}}}* channel.",
                "errors": {
                    "no_users_found": "Sorry, looks like the person you're giving kudos to doesn't have an active DailyBot account.\nPlease try again or invite them to use DailyBot.",
                    "no_users_found_invite": "It seems like the person you're trying to give kudos to isn't part of your organization yet.\nWould you like to invite them to join and try again?",
                    "btnInvite": "Invite and send kudos",
                    "btnCancel": "Cancel",
                    "no_valid_users": "You can't give *[kudos]({{{url}}})* to yourself, but I like your intentions and I give kudos to you!",
                    "kudos_rate_limit_reached": "Hey! Please wait 5 minutes to give more Kudos.",
                    "params_validation_error": "You should specify a team member to give kudos, try using the command like this:",
                    "noOriginalGiver": "You aren't the original giver for this Kudos, if you wanna give one just type `kudos` *@user* _message_",
                    "kudos_usage_limit_reached": "Your current plan lets you give kudos up to {{{usage_limit}}} times per month.\n[Upgrade your plan]({{{url}}}) to unlock these limits and open up new possibilities for peer recognition or wait until next month to continue with positive feedback.",
                    "action_forbidden": "You are not allowed to give these kudos.\nIt seems that you are not part of the organization where these kudos were originally given.",
                    "user_limit_reached": "Looks like you've reached your daily kudos limit. You'll be able to give kudos again tomorrow."
                },
                "kudos_plus_plus": {
                    "giver": {
                        "repeated_kudos_error": "Oh! Looks like you already gave *[kudos]({{{url}}})*, but thank you for your great intention.",
                        "you_can_not_give_kudos_to_yourself": "You can't give *[kudos]({{{url}}})* to yourself, but I like your intentions and I give kudos to you!"
                    },
                    "receiver": {
                        "message": "Wow! More good news 👏, *{{{kudoGiverName}}}* is giving *[kudos to you]({{{url}}})*",
                        "company_value": " based on this team value: *{{{companyValueName}}}*"
                    }
                },
                "selectCompanyValue": "This is nice! Which team value would you like to highlight?",
                "selectCompanyValueTip": {
                    "slack": "> Choosing one is required, otherwise the kudos will be discarded.",
                    "hangouts": "> Choosing one is required, otherwise the kudos will be discarded.",
                    "msteams": "> Choosing one is required, otherwise the kudos will be discarded.",
                    "discord": "> Choosing one is required, otherwise the kudos will be discarded."
                },
                "onlyOneReceiver": "Great! You’re about to give kudos to *{{{user}}}*.",
                "selectTeammate": "Ok, who’s getting the kudos?",
                "noUsersInOrg": "I didn’t find any teammates with this name. Try again?\n\nType kudos to _teammate name_",
                "sendKudosWithoutCompanyValueButton": "None, just give kudos"
            },
            "AddKudosWithCompanyValue": {
                "success": "Done. Giving kudos is rewarding, keep it up!",
                "successNoChannel": "Kudos delivered 👏",
                "predeterminedChannel": "The kudos are shared in the *#{{{channel}}}* channel.",
                "errors": {
                    "no_users_found": "Sorry, looks like the person you're giving kudos to doesn't have an active DailyBot account.\nPlease try again or invite them to use DailyBot.",
                    "no_valid_users": "You can't give *[kudos]({{{url}}})* to yourself, but I like your intentions and I give kudos to you!",
                    "kudos_rate_limit_reached": "Hey! Please wait 5 minutes to give more Kudos.",
                    "params_validation_error": {
                        "slack": "You should specify a team member to give kudos, try using the command like this:",
                        "hangouts": "You can only give kudos in *chat rooms*, go to a chat room and try to use the command like this:",
                        "msteams": "You can only give kudos in *channels*, go to a channel and try to use the command like this:",
                        "discord": "You should specify a team member to give kudos, try using the command like this:"
                    }
                }
            },
            "KudosStatus": {
                "title": "Here's a quick summary of Kudos around you, you’re great!",
                "empty_case": "It looks like you haven’t received kudos yet.",
                "empty_case_tip": "Here's a tip: give Kudos to your team members, I know you’ll get some Kudos back.",
                "kudos_given_title": "*Kudos that my team gave me*",
                "kudos_given_to_me_title": "*Kudos I’ve given to others*",
                "kudos_to": "- \"{{{message}}}\" to {{{user}}} on {{{date}}}",
                "kudos_by": "- \"{{{message}}}\" by *{{{user}}}* on {{{date}}}",
                "kudos_to_empty": "- \"Kudos to you\" to {{{user}}} on {{{date}}}",
                "kudos_by_empty": "- \"Kudos to you\" by *{{{user}}}* on {{{date}}}",
                "view_more": "*[View more]({{{url}}})*"
            },
            "Leaderboard": {
                "alert_title": "Kudos Leaderboard",
                "last_month_title": "This is the *kudos leaderboard*:",
                "leaderboard_title": "This is the *kudos leaderboard [{{{leaderboardOrdering}}}]* for the past 7 days:",
                "leaderboard_ordering": {
                    "kudos_given": "top givers",
                    "kudos_received": "top receivers"
                },
                "info": "_This leaderboard is showing data from all team members across the organization._",
                "congrats": "Congrats and keep it up! ✨",
                "user_row": {
                    "slack": "*{{{user}}}* with *{{{score}}}* kudos",
                    "hangouts": "<b>{{{user}}}</b> with <b>{{{score}}}</b> kudos",
                    "msteams": "<b>{{{user}}}</b> with <b>{{{score}}}</b> kudos",
                    "discord": "#{{{position}}} {{{user}}} with {{{score}}} kudos"
                },
                "view_more": {
                    "slack": "*[View more in the web app]({{{url}}})*",
                    "hangouts": "*[View more in the web app]({{{url}}})*",
                    "msteams": "*[View more in the web app]({{{url}}})*",
                    "discord": "View more in the web app"
                },
                "empty_case": {
                    "main": "It looks like no Kudos have been given yet. Why don’t you get started now?",
                    "example": "Try *@DailyBot* kudos to *@someone* for some great reason!"
                },
                "errors": {
                    "leaderboard_restricted": "Hey! I’m afraid that for now I can only show the leaderboard if a DailyBot administrator asks for it. But this setting can be changed by an admin."
                }
            }
        },
        "_COMMANDS": "----- COMMANDS -----",
        "commands": {
            "common": {
                "notEnabled": {
                    "usage": {
                        "common": "The Commands feature is turned off in your DailyBot settings.",
                        "admin": "The Commands feature is turned off in your DailyBot settings. You can [enable it here.]({{{url}}})"
                    }
                },
                "commandsNotEnabledAdmin": "The Commands feature is turned off in your DailyBot settings. You can [enable it here.]({{{url}}})",
                "commandsNotEnabled": "The Commands feature is turned off in your DailyBot settings.",
                "commandsNotEnabledTrigger": "Org Admins deactivated the trigger commands feature for your role.",
                "commandsAddonsDisabled": "The `{{{command}}}` feature is turned off in your DailyBot settings.",
                "commandsAddonsDisabledAdmin": "The `{{{command}}}` feature is turned off in your DailyBot settings. You can [enable it here.]({{{url}}})"
            },
            "CommandsHelp": {
                "emptyCase": "Hey,\n\nYou haven’t created custom commands yet.\n\nYou can create your own commands and shortcuts and make them available here in the chat through myself.\n\n[Create your first command]({{{url}}}).",
                "commandsList": {
                    "intro": "Here we go, these are my custom commands for you:",
                    "outro": "[Create and manage]({{{url}}}) commands."
                }
            },
            "CustomCommands": {
                "invocationsLimitReached": "You've reached the weekly limit of your custom commands. Wait until next week or [upgrade your plan]({{{url}}}).",
                "workflow": {
                    "form": {
                        "message": {
                            "direct_message": "Ok, here’s the form: *{{{formName}}}*.",
                            "channel": "Ok, here’s the form: *{{{formName}}}*.",
                            "triggered_from_workflow": "Please complete the form *{{{formName}}}* as part of our workflow.",
                            "intro_message": "Ok, here’s the form *{{{formName}}}*. _Type `cancel` to stop or step back with `back`._"
                        },
                        "buttonText": "Fill out form",
                        "channel": {
                            "buttonText": "Fill out in DM",
                            "buttonTextWeb": "Fill out on the web"
                        },
                        "direct_message": {
                            "buttonText": "Fill out here",
                            "buttonTextWeb": "Fill out on the web"
                        },
                        "inactive": "The form *{{{formName}}}* is currently unavailable.",
                        "small_words": "For best results, we recommend a search with at least 3 letters.",
                        "found_responses_less_limit": "I found *{{{resultsAmount}}}* results that match your search. Take a look below:",
                        "found_responses_more_limit": "I found *{{{resultsAmount}}}* results for your search. I will show the latest 10 responses:",
                        "not_found_responses": "I didn't find any results for your search in this form. Want to try different keywords?"
                    }
                }
            }
        },
        "_FORMS": "----- FORMS -----",
        "forms": {
            "common": {
                "notEnabled": {
                    "usage": {
                        "common": "The Forms feature is turned off in your DailyBot settings.",
                        "admin": "The Forms feature is turned off in your DailyBot settings. You can [enable it here.]({{{url}}})"
                    },
                    "read": {
                        "common": "Org Admins deactivated the Forms feature for the entire organization.",
                        "admin": "The Forms feature is off for your organization. [Enable it here.]({{{url}}})"
                    },
                    "write": {
                        "common": "Org Admins deactivated the Forms feature for the entire organization.",
                        "admin": "The Forms feature is off for your organization. [Enable it here.]({{{url}}})"
                    }
                }
            },
            "generic": {
                "slack": {
                    "modalView": {
                        "buttons": {
                            "submit": "Save",
                            "close": "Cancel"
                        },
                        "errorLabel": "*⚠️ One or more fields values are invalid*",
                        "field": {
                            "questionTypeLabel": {
                                "numeric": "numeric"
                            },
                            "questionTypeFile": {
                                "text": "Attach image"
                            }
                        }
                    }
                }
            },
            "FormsStarter": {
                "intro_message": "Ok, here’s the form *{{{formName}}}*. _Type `cancel` to stop or step back with `back`._",
                "msgExtFallbackMessage": "> _You are already in the middle of another form response. Be sure to complete it before starting another one._"
            },
            "FormsQuestion": {
                "cancel": "Ok, we can do this later.",
                "cancelIntent": "Ok, to launch this form again use the command `{{{formIntent}}}`",
                "responseSubmitted": "> Thank you for submitting the form",
                "answerNotValid": {
                    "text": "> _Please type a *valid text* to respond to this question._",
                    "numeric": "> _Please type a *valid number* to respond to this question._",
                    "boolean": "> _This question expects as answer *one of the options presented*, please try again._",
                    "multiple_choice": "> _This question expects as answer *one of the options presented*, please try again._"
                }
            },
            "FormsList": {
                "emptyCase": "You don’t have any form created yet.\n\nYou can create your own forms and shortcuts and make them available here in the chat through myself.\n\n[Create your first form]({{{url}}}).",
                "emptyCaseSearch": "I haven’t found the form you are looking for.\nType *`forms`* to see all the forms available or [create your own forms]({{{url}}}) so you can use them here in the chat.",
                "intro": "These are the forms available for you:",
                "outro": "Create and manage more forms [here]({{{url}}}).",
                "formDetail": {
                    "simple": {
                        "link": "• [{{{formName}}}]({{{formUrl}}})",
                        "noLink": "• {{{formName}}}"
                    },
                    "withShortcut": {
                        "link": "• [{{{formName}}}]({{{formUrl}}}) — To launch, type *`{{{formShortcut}}}`*",
                        "noLink": "• {{{formName}}} — To launch, type *`{{{formShortcut}}}`*"
                    }
                }
            }
        },
        "_MOOD": "----- MOOD -----",
        "mood": {
            "MoodQuestion": {
                "response": "Psst! Let's do this secretly. 🤐 What's your motivation about work this week? score from 1 to 5 _(5 being high motivation)_.",
                "interactive": {
                    "actions": {
                        "1": {
                            "buttonAndDisplayText": "😔 · 1",
                            "value": "1"
                        },
                        "2": {
                            "buttonAndDisplayText": "🤨 · 2",
                            "value": "2"
                        },
                        "3": {
                            "buttonAndDisplayText": "😐 · 3",
                            "value": "3"
                        },
                        "4": {
                            "buttonAndDisplayText": "😊 · 4",
                            "value": "4"
                        },
                        "5": {
                            "buttonAndDisplayText": "🤩 · 5",
                            "value": "5"
                        }
                    }
                },
                "errors": {
                    "notNum": "You should type a number from 1 to 5 _(1 is low motivation and 5 is high motivation)_.",
                    "alreadyCompleted": "You already completed your motivation tracking this week."
                },
                "thanks": "Thanks! your answer will be kept anonymous.",
                "cancel": "Ok, it's canceled. Once you're ready, please type *`motivation`* to fill out your motivation this week."
            }
        },
        "_REMINDER": "----- REMINDER -----",
        "reminder": {
            "ReminderCreate": {
                "error": "Oops! It seems like you forgot to tell me something.",
                "errorPast": "Oops! It seems like you've entered a past date. 📅 Choose a future date so I can set up your reminder. Just try again!",
                "success": "✅ Your reminder has been set successfully!",
                "outro": "• *What:* *{{{task}}}* \n• *When:* {{{date}}} ({{{timezone}}})",
                "help": "_💡 Want to manage your reminders? Type `list_reminders` to view them_"
            },
            "RemindersList": {
                "empty": "Currently you don't have configured reminders.",
                "intro": "📋 Here are your upcoming reminders ({{{timezone}}}):",
                "option": "{{{index}}}. \"{{{tasks}}}\" \n*When:* {{{date}}} - `ID = {{{id}}}`",
                "outro": "⚙️ _To delete a reminder, type `delete_reminder {id}`_"
            },
            "RemindersDeletion": {
                "error": "Oops! It seems like you forgot to tell me something.",
                "success": "🗑️ Reminder deleted successfully!\n\n\"{{{reminder}}}\" \n*Originally scheduled for:* {{{date}}}",
                "noItemSimple": "Oops! I couldn't find that reminder.",
                "noItem": "Oops! I couldn't find that reminder. However, you still have these reminders pending:\n",
                "noItemOption": "• {{{tasks}}} - `ID = {{{id}}}`",
                "noItemOutro": "⚙️ _To delete a reminder, type `delete_reminder {id}`_"
            },
            "ReminderComplete": "Hey there! 👋 Just a gentle reminder about *{{{task}}}*, that you configured before ⏰. Have a great day!"
        }
    },
    "_COMMENT_PLATFORM_EVENTS": "----- PLATFORM EVENTS HANDLERS -----",
    "platform_event": {
        "_COMMENT_CORE": "----- CORE -----",
        "core": {
            "MemberJoinedToDirectMessage": "Hey! thanks for installing me again.",
            "MemberJoinedToChannel": {
                "intro": "*Hi everyone!* I’m thrilled to be here.\nI’m DailyBot and I help you automate daily updates, stand-up meetings, check-ins, retrospectives, and track team motivation.",
                "extra": {
                    "slack": "Now you can share reports in this channel.",
                    "hangouts": "Now you can share reports in this chat room.",
                    "msteams": "Now you can receive reports in any channel of this team. All members from this team can now join DailyBot or be invited by an admin.",
                    "discord": "Now you can share reports in this channel."
                },
                "addTeamIntro": "Hey, {{{first_name}}}, I’m DailyBot. Thanks for having me in your team! 🤠\n\nI help teams work together more effectively with features like daily standups, team check-ins, and recognition. ✌️\n\n*To start, let’s set up your first check-in* so you can dip a toe in the water. It only takes a minute and lets you experience the power of asynchronous check-ins right away!\n1. Click \"Set up check-in\" below.\n2. Follow the easy steps to complete registration and create your first check-in.\n3. Get ready for smoother team communication and less wasted time in meetings!",
                "dmIntro": "Hey, {{{first_name}}}, thanks for having me in your team! 🤠\n\nComplete your team registration real quick and set up your first check-in. It only takes a minute and lets you experience the power of asynchronous standups right away!\n\n*Ready to try it out?*\n1. Click \"Set up check-in\" below.\n2. Follow the easy steps to complete registration and create your first check-in.\n3. Get ready for smoother team communication and less wasted time in meetings!",
                "dmTeamAdded": "Thanks for adding me to your team! 🤠\n\nLet’s set up your first check-in so you can continue with your journey. It only takes a minute and lets you experience the power of asynchronous check-ins right away!",
                "dmTeamAddedWithFollowup": "Thanks for adding me to your team! 🤠\n\nNow you can add participants and channels to your existing check-in. Let’s bring your team on board!",
                "setupCheckinButtonText": "Set up check-in",
                "addParticipantsButtonText": "Add participants",
                "introGroupChat": "*Hi everyone!* I’m thrilled to be here.\nI’m DailyBot and I help you automate daily updates, stand-up meetings, check-ins, retrospectives, and track team motivation.\n\nType *`help`* to learn more about me."
            },
            "ChooseGmailInvitation": {
                "chooseButtons": "Hey there! You currently have some pending invitations. Click on them if you want to accept the invitation and join in.",
                "getInvitations": "See pending invitations"
            },
            "PlatformTabOpened": {
                "onboarding": {
                    "intro": "Hi! Nice to meet you! 👋\n\nI’m DailyBot and I’m here to help you automate daily updates, stand-up meetings, check-ins, retrospectives and track mood in your team.",
                    "info": "Discover some *use cases* for DailyBot:\n\n📋 Daily Standups for Scrum or Agile teams \n💻 Recurring retrospective meetings in Slack\n🎯 Periodic check-ins about team goals or OKRs\n👥 Automated 1-1s in Slack\n📅 Weekly or monthly feedback from team\n\n\n\nYou can also track your team mood, and enable more types of check-ins with your team.\n\n[Learn more]({{{urlLanding}}}) or visit [our support center]({{{urlSupport}}}) if you need any help."
                },
                "greeting": "*Hi {{{userName}}}* 👏",
                "emptyFollowups": {
                    "intro": "📋 It seems that you don’t have any pending check-in tasks for today.",
                    "info": "Get the most out of DailyBot by automating more check-ins and async meetings with your team.\n\n[Don’t miss our product updates](https://www.dailybot.com/blog/release-notes/), [check out our blog](https://www.dailybot.com/blog/), and visit [our support center](https://help.dailybot.com/hc/en-us) if you need any help."
                },
                "withFollowups": {
                    "intro": "📋 You have some check-ins for today, this is the list and status:",
                    "info": "🍩 Tip: try typing *“help”* in a private message and I’ll show you all the commands that you can use."
                }
            },
            "MessageChanged": {
                "errorUpdatingMessage": {
                    "daily_response_does_not_exist": "Sorry, it seems the response that you are trying to update was removed previously.\nType me *`checkin`* to fill out a new check-in response.",
                    "update_question_with_conditional_logic_not_allowed": "Sorry, the response that you are trying to update contains a conditional flow.\nTo update it, try again typing the *`checkin edit`* command."
                }
            },
            "ShareChannelExternalInteractionHandler": {
                "response": "Sorry, I can only reply to users from the main DailyBot organization who added me in this shared channel.\nBut you can also install me on your own Slack workspace [following this link]({{{url}}}) 😊"
            }
        }
    },
    "_COMMENT_MESSAGE_EXTENSION": "----- MESSAGE EXTENSION HANDLERS -----",
    "message_extension": {
        "core": {
            "SearchPeopleMsgExt": {
                "card": {
                    "facts": {
                        "occupation": "⚙️ What I do",
                        "birthday": "🎂 Birthday",
                        "joined": "➡️ Joined",
                        "timezone": "⌛ Time zone",
                        "localtime": "🕒 Local time"
                    },
                    "activitySummary": {
                        "checkins": {
                            "title": "Check-ins Summary",
                            "noCheckins": "No check-ins summary available for this user",
                            "facts": {
                                "checkinResponses": "✅ Check-in responses",
                                "checkinBlockers": "🔥 Check-in blockers",
                                "lateResponses": "⏰ Late responses",
                                "kudosReceived": "👏 Kudos received"
                            }
                        },
                        "kudos": {
                            "title": "Kudos Summary",
                            "facts": {
                                "kudosReceived": "👏 Kudos received",
                                "recentKudos": "📅 Recent kudos"
                            }
                        },
                        "aiInsights": {
                            "title": "AI Insights"
                        },
                        "activity": {
                            "title": "Activity Summary"
                        }
                    },
                    "actions": {
                        "openProfile": "View dashboard profile ↗"
                    }
                }
            }
        },
        "followups": {
            "FollowupsPendingMsgExt": {
                "card": {
                    "title": "Check-in: {{{followupName}}}",
                    "subtitle": "This check-in has {{{totalQuestions}}} questions.",
                    "description": {
                        "default": "Fill out before the end of the day",
                        "beforeReportTime": "Fill out before {{{timeForReport}}} {{{timezone}}}."
                    },
                    "actions": {
                        "fillOut": "Fill out today's response",
                        "showQuestions": {
                            "label": "Show Questions ▾",
                            "description": "These are the questions included in this check-in:"
                        }
                    }
                }
            },
            "FollowupsBlockersAndSummaryMsgExt": {
                "card": {
                    "title": "Check-in: {{{followupName}}}",
                    "subtitle": "This check-in has {{{totalQuestions}}} questions.",
                    "description": {
                        "default": "Last activity {{{lastActivityDate}}}.",
                        "expectedResponses": "Expected responses {{{lastActivityDate}}}.",
                        "nextReportDate": "Next report is on {{{date}}}",
                        "summary": {
                            "completedPercentage": {
                                "default": "⌛ {{{completedPercentage}}}% done",
                                "100": "🙌 {{{completedPercentage}}}% done"
                            },
                            "completed": {
                                "default": "🤔 {{{completed}}} of {{{totalUsers}}} responses",
                                "100": "👏 {{{completed}}} of {{{totalUsers}}} responses"
                            },
                            "blockers": {
                                "default": "🔥 {{{blockers}}} blocker or attention point"
                            }
                        }
                    },
                    "actions": {
                        "webappLink": "Explore reports & Analytics ↗",
                        "showQuestions": {
                            "label": "Show Questions ▾",
                            "description": "These are the questions included in this check-in:"
                        }
                    }
                }
            },
            "errors": {
                "noResponsesFoundTitle": "No responses found for this check-in.",
                "noResponsesFoundText": "Try filling out your responses using the checkin command."
            }
        },
        "forms": {
            "SearchFormMsgExt": {
                "card": {
                    "title": "Form: {{{formName}}}",
                    "subtitle": "This form has {{{totalQuestions}}} questions.",
                    "actions": {
                        "fillOut": "Fill out response",
                        "showQuestions": {
                            "label": "Show Questions ▾",
                            "description": "These are the questions included in this form:"
                        }
                    }
                }
            }
        },
        "common": {
            "onboarding": {
                "onboardingTitle": "Welcome to DailyBot! Type me a message on DM to get started."
            }
        }
    },
    "_COMMENT_BOT_TASK_HANDLERS": "----- TASK HANDLERS -----",
    "bot_task": {
        "core": {
            "UserMemberJoined": {
                "message": {
                    "general": "Hey! I’m DailyBot 👋 \n\n You've been invited to the *{{{orgName}}}* organization by an administrator.\nI'll take your chat and collaboration to the next level with daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, in-chat automations and more. Take a look at this *[2min video.](https://www.youtube.com/watch?v=zHZnGl4c-9g)* 👀\n\n> Take some time to review the *[Terms of Service](https://www.dailybot.com/legal/terms-and-conditions)* and *[Privacy Policy](https://www.dailybot.com/legal/privacy-policy)*.\n\nYou can visit *[my dashboard]({{{url}}})* to know more about your team.",
                    "discord": "Hey! I’m DailyBot 👋 \n\n You've been invited to the *{{{orgName}}}* organization by an administrator.\nI'll take your chat and collaboration to the next level with daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, in-chat automations and more. Take a look at this *[2min video.](https://www.youtube.com/watch?v=zHZnGl4c-9g)* 👀\n\n> Take some time to review the *[Terms of Service](https://www.dailybot.com/legal/terms-and-conditions)* and *[Privacy Policy](https://www.dailybot.com/legal/privacy-policy)*.\n\n⬇️ *Complete your onboarding* with the button below:"
                },
                "btn": {
                    "message": "Complete onboarding"
                }
            },
            "DeliverMessage": {
                "message": "{{{message}}}",
                "messageWithSender": "{{{message}}}"
            },
            "BotContextSwitched": {
                "message": "Bot session changed to *\"{{{organizationName}}}\"* Organization."
            },
            "NotifyCompletedOnboarding": {
                "intro": {
                    "common": {
                        "admin": {
                            "description1": "Hi there! It’s great to meet you.👋 \n I’m DailyBot and I’m ready to start working with you at *{{{orgName}}}*.",
                            "description2": {
                                "withLink": "Once you’ve [invited your teammates]({{{url}}}), we can start running *Check-ins*, create *Forms*, give *Kudos* to your team, or run *ChatOps* with your custom commands.",
                                "withoutLink": "Once you’ve invited your teammates, we can start running *Check-ins*, create *Forms*, give *Kudos* to your team, or run *ChatOps* with your custom commands."
                            }
                        },
                        "member": "Hi there! It’s great to meet you. 👋 I’m DailyBot and I’m ready to start working with you.\n\nYou can start running *Check-ins*, or create *Forms*, give *Kudos* to your team, and run *ChatOps* with your custom commands."
                    },
                    "hangouts": {
                        "description": "Hey! I’m ready to start working with you.\n\nI'll take your chat and collaboration to the next level with daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, in-chat automations and more. Take a look at this [2-min video](https://www.youtube.com/watch?v=zHZnGl4c-9g). 👀",
                        "extra": "TIP: You should tag me (@DailyBot) on spaces where you’ll want to share reports in the future. [Learn more](https://help.dailybot.com/hc/en-us/articles/4407873021203)"
                    }
                },
                "dashboard": "> Type *`dashboard`* to access the web app at any moment, or *`help`* to know what else I can do for you."
            },
            "AskForCreateFollowup": {
                "createFollowup": "To get started, let's create your first *{{{template}}}* check-in:",
                "btnCreate": "Create {{{template}}}"
            },
            "NotifyCompletedAdvancedOnboarding": {
                "intro": {
                    "common": {
                        "admin": {
                            "description1": "Hey *{{{userName}}}*! 👋 I’m DailyBot. It's awesome to be on board at {{{orgName}}}! 🎉",
                            "description2": "I'm here to help you track team progress, spot any blockers, and ensure everyone stays in sync.",
                            "description3": "Type *`help`* to learn more about me, or type *`dashboard`* to access my web app at any moment."
                        },
                        "member": "Hi there! It’s great to meet you. 👋 I’m DailyBot and I’m ready to start working with you.\n\nYou can start running *Check-ins*, or create *Forms*, give *Kudos* to your team, and run *ChatOps* with your custom commands."
                    },
                    "hangouts": {
                        "description": "Hey! I’m ready to start working with you.\n\nI'll take your chat and collaboration to the next level with daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, in-chat automations and more. Take a look at this [2-min video](https://www.youtube.com/watch?v=zHZnGl4c-9g). 👀",
                        "extra": "TIP: You should tag me (@DailyBot) on spaces where you’ll want to share reports in the future. [Learn more](https://help.dailybot.com/hc/en-us/articles/4407873021203)"
                    },
                    "msteams": {
                        "description": "{{{first_name}}}, while adding me to your team is best to experience my full capabilities, *let's set up your first check-in so you can see me in action.*\n\nIt takes less than a minute. Take it for a spin yourself and see how it can benefit your team:",
                        "checkinButton": "Set up check-in"
                    }
                },
                "dashboard": "> Type *`dashboard`* to access the web app at any moment, or *`help`* to know what else I can do for you."
            },
            "NotifyAIUseCaseActivated": {
                "response": {
                    "intro": "Hello there, it's fantastic to meet you! 👋\nI'm DailyBot, and I'm excited to work with you at *{{{orgName}}}*.\n\nAs your AI assistant, I have an arsenal of tools to help you achieve more throughout your day.\n\nHere's a quick overview of what I can do in chat:",
                    "tips": {
                        "1": "> 🤠 Help with questions of all kinds",
                        "2": "> ✍️ Assist with writing, grammar, and translation",
                        "3": "> 🧑‍💻 Solve coding questions and provide code examples",
                        "4": "> 👩‍💼 Conduct all sorts of research *and more that you can see in [our guide](https://www.dailybot.com/guides/ai)!*"
                    },
                    "outro": "Invite your teammates if you want me to help them with tasks, too. Whenever you need me, just ask me in natural language; if it's in channel/space you should mention me (@DailyBot).\n\nYou can also type `help` to explore my other features or `dashboard` to access the web app - now let's get started!"
                }
            }
        },
        "followups": {
            "FollowupInviteBotToChannel": "*Hi everyone!* I'm DailyBot and I've been invited here to share check-in reports about *{{{followupName}}}*.",
            "FollowupDailyStart": {
                "response": {
                    "dailyReminder": {
                        "onboarding": "I'll now be facilitating *{{{templateName}}} check-ins*. Here's how we'll collaborate: send me your updates for the day and I'll share your progress with your peers. I will also provide useful insights on your dashboard.\nTo try this out, complete your first check-in report here 👇",
                        "bntStart": "Start {{{templateName}}}",
                        "oneChoice": "Hey! Are you ready to fill out the *{{{followupName}}}* report now? You can also do that [on the web]({{{url}}}).",
                        "oneChoiceAdvancedFrequency": "Hey! Are you ready to fill out the *{{{followupName}}}* report now?",
                        "oneChoiceInsideContext": "☝️ Hey! The report for *{{{followupName}}}* is waiting to be completed.",
                        "multipleChoices": "Hey! Are you ready to complete your reports now?",
                        "multipleChoicesInsideContext": "☝️ Hey! Your reports are waiting to be completed.",
                        "askedByUser": "Hey, *{{{userName}}}* is asking you to fill out this report: [*{{{followupName}}}*]({{{url}}}) for {{{date}}}. Please do it once you’re ready."
                    }
                },
                "interactive": {
                    "actions": {
                        "yes": {
                            "buttonText": "Yes, I'm ready",
                            "displayText": "Yes, I'm ready",
                            "value": "Yes"
                        },
                        "snooze": {
                            "buttonText": "Snooze",
                            "displayText": "Snooze 15 minutes",
                            "value": "Snooze"
                        },
                        "no": {
                            "buttonText": "No, skip",
                            "displayText": "No, skip",
                            "value": "No"
                        },
                        "completeItNow": {
                            "buttonText": "Fill out here",
                            "displayText": "Fill out here",
                            "value": "Yes"
                        },
                        "completeItNowFromWebApp": {
                            "buttonText": "Fill out on the web",
                            "displayText": "Fill out on the web",
                            "value": "Yes"
                        }
                    }
                }
            },
            "FollowupDailyNotCompleted": {
                "response": {
                    "noDaily": {
                        "1": "The time limit for your {{{followupsNames}}} just passed, and your report wasn’t submitted. Complete your check-in to keep your team in sync. 😉",
                        "n": "The time limit for a couple of your check-ins just passed, and your reports weren’t submitted."
                    },
                    "halfDaily": "Heads up! I just shared the check-in report but you didn't finish yours, you can still fill it in 😉"
                },
                "dropdown": {
                    "placeholder": "Complete your reports to keep your team in sync. 😉",
                    "label": "Select a Check-in"
                }
            }
        },
        "vacation": {
            "VacationInitReport": {
                "info": {
                    "1": "News! A team member is taking time off from work:",
                    "n": "News! Some team members are taking time off from work:"
                },
                "memberOff": "> {{{userFullName}}} will be off from *{{{initDate}}}* to *{{{endDate}}}*"
            },
            "VacationEndReport": {
                "info": {
                    "1": "News! A team member is back after taking some time off:",
                    "n": "News! Some team members are back after taking some time off:"
                }
            }
        },
        "kudos": {
            "KudosConfigReportingChannel": {
                "message": "I gave you some kudos to celebrate your efforts in building a more async team (via DailyBot)! ",
                "channelSelector": {
                    "label": "Want to share them on a channel to inspire others?",
                    "placeholder": "Select a channel"
                },
                "hint": "💡 Want to spread some positivity yourself? Just type @DailyBot kudos (Teammate name), followed by a quick message about why they’re awesome."
            },
            "KudosOneByOneChannelReport": {
                "title": {
                    "channel": "Hey, {{{usersReceiversNames}}} got kudos! 👏",
                    "directMessage": "Hey, You just got kudos! 👏"
                },
                "congrats": {
                    "content": " Congrats!",
                    "emoji": {
                        "common": "✨"
                    }
                },
                "thanks": "Take some time to appreciate your teammates.",
                "thanksChannel": "Celebrate with your team!",
                "givenBy": "Given by {{{userSenderName}}}",
                "companyValueGiver": {
                    "slack": "{{{companyValue}}}",
                    "hangouts": "<b>{{{companyValue}}}</b>",
                    "msteams": "*{{{companyValue}}}*",
                    "discord": "{{{companyValue}}}"
                },
                "emptyContent": "Kudos to you",
                "predeterminedChannel": {
                    "info": "The kudos were shared in *#{{{channel}}}* channel.",
                    "directMessageExtra": "Take a moment to stop by and say thank you."
                },
                "buttons": {
                    "kudosBack": "How to give kudos",
                    "kudosPlusPlus": "Kudos ++"
                },
                "kudosPlusUsersWithCounters": {
                    "content": {
                        "1": "*{{{usersNames}}}* has given kudos too.",
                        "n": "*{{{usersNames}}}* have given kudos too."
                    },
                    "contentWithMoreLink": {
                        "1": "*{{{usersNames}}}* and *[{{{counter}}} more]({{{url}}})* has given kudos too.",
                        "n": "*{{{usersNames}}}* and *[{{{counter}}} more]({{{url}}})* have given kudos too."
                    }
                },
                "educate": {
                    "link": {
                        "slack": "Give kudos on the *[web app]({{{url}}})* or send them here in DM with DailyBot by typing `kudos` to *@user1 @user2* {message}. If you're on a channel, remember to tag @DailyBot.",
                        "discord": "Give kudos on the *web app* or send them here in DM with DailyBot by typing `kudos` to *user* {message}. If you're on a channel, remember to tag @DailyBot and @mention the users.",
                        "hangouts": "Give kudos on the *[web app]({{{url}}})* or send them here in DM with DailyBot by typing `kudos` to *user* {message}. If you're on a space, remember to tag @DailyBot and @mention the users.",
                        "msteams": "Give kudos on the *[web app]({{{url}}})* or send them here in DM with DailyBot by typing `kudos` to *user* {message}. If you're on a channel, remember to tag @DailyBot and @mention the users."
                    }
                }
            },
            "KudosTeamReminder": {
                "common": "Hey {{{username}}},\n\nIt’s a beautiful day and it’d be great if you take a few minutes to reflect about how your teammates are doing and then give kudos and positive feedback to them.",
                "extra": "Give kudos by typing *`kudos to @teammate for your great ideas!`* or *`++ @teammate`*."
            },
            "KudosWeeklyReport": "Hey *{{{username}}}*,\n\nCongrats! the team has given kudos to you in the past days. This means you’re doing great and your work is making a positive impact.",
            "seeMoreLink": "See all your kudos *[in the webapp]({{{link_to_my_kudos}}})*."
        },
        "forms": {
            "FormsNotifyFillReport": {
                "message": {
                    "team": {
                        "slack": "<!channel> Hi team 👋 *{{{userName}}}* wants you to fill out the *{{{formName}}}* form.",
                        "hangouts": "Hi team 👋 *{{{userName}}}* wants you to fill out the *\"{{{formName}}}\"* form.",
                        "msteams": "Hi team 👋 *{{{userName}}}* wants you to fill out the *\"{{{formName}}}\"* form.",
                        "discord": "@here Hi team 👋 *{{{userName}}}* wants you to fill out the [*{{{formName}}}*]({{{url}}}) form."
                    },
                    "direct_message": {
                        "slack": "Hi {{{targetUserName}}} — *{{{userName}}}* wants you to fill out the *{{{formName}}}* form.",
                        "hangouts": "Hi {{{targetUserName}}} — *{{{userName}}}* wants you to fill out the *\"{{{formName}}}\"* form.",
                        "msteams": "Hi {{{targetUserName}}} — *{{{userName}}}* wants you to fill out the *\"{{{formName}}}\"* form.",
                        "discord": "Hi {{{targetUserName}}} — *{{{userName}}}* wants you to fill out the [*{{{formName}}}*]({{{url}}}) form."
                    }
                },
                "note": "Note: "
            }
        }
    },
    "_REPORTS": "----- REPORTS -----",
    "reports": {
        "followups": {
            "questionsWithSpecialVars": {
                "previous_response_date": "`None`",
                "empty_previous_response": "`No responses`"
            },
            "singleReport": {
                "newReportArrived": {
                    "slack": "Here is an update for [*{{{skillObjectName}}}*]({{{url}}}) check-in by {{{full_name}}}:",
                    "hangouts": "Here is an update for [*{{{skillObjectName}}}*]({{{url}}}) check-in:",
                    "msteams": "Here is an update for <b><a href=\"{{{url}}}\">{{{skillObjectName}}}</a></b> check-in:",
                    "discord": "Here is an update for [*{{{skillObjectName}}}*]({{{url}}}) check-in:"
                },
                "newReportArrivedFromDifferentDate": {
                    "slack": "Here is an update for [*{{{skillObjectName}}}*]({{{url}}}) check-in by {{{full_name}}} on *{{{responseDate}}}*:",
                    "hangouts": "Here is an update for [*{{{skillObjectName}}}*]({{{url}}}) check-in on *{{{responseDate}}}*:",
                    "msteams": "Here is an update for <b><a href=\"{{{url}}}\">{{{skillObjectName}}}</a></b> check-in on *{{{responseDate}}}*:",
                    "discord": "Here is an update for [*{{{skillObjectName}}}*]({{{url}}}) check-in on *{{{responseDate}}}*:"
                },
                "footerActionLink": {
                    "slack": "[See report on DailyBot]({{{url}}})",
                    "hangouts": "<font color=\"#757575\"><i><a href=\"{{{url}}}\">View full report</a></i></font>",
                    "msteams": "<b><a href=\"{{{url}}}\">See full report ↗</a></b>",
                    "discord": "[View full report]({{{url}}})"
                },
                "activitySummary": {
                    "title": "Activity summary",
                    "integrationsTitle": "{{{total}}} {{{integrationName}}} Updates",
                    "eventNameWithTotal": "{{{eventName}}} ({{{total}}} events)",
                    "eventWithLink": {
                        "slack": "• [{{{eventMessage}}}]({{{url}}})",
                        "hangouts": "• <a href=\"{{{url}}}\">{{{eventMessage}}}</a>",
                        "msteams": "• [{{{eventMessage}}}]({{{url}}})",
                        "discord": "• [{{{eventMessage}}}]({{{url}}})"
                    }
                }
            },
            "threadReport": {
                "reportTitleThreadHeader": {
                    "oneByOneReport": "🧵 Here all *{{{skillObjectName}}}* reports for *{{{date}}}*",
                    "aggregatedReport": "Hey! These are the *{{{skillObjectName}}}* reports for *{{{date}}}*"
                },
                "summary": {
                    "responses": {
                        "1": "ℹ️ *{{{total}}} response*",
                        "n": "ℹ️ *{{{total}}} responses*"
                    },
                    "blockers": {
                        "1": "🔥 *{{{total}}} blocker or attention point* reported by {{{users}}}",
                        "n": "🔥 *{{{total}}} blockers or attention points* reported by {{{users}}}"
                    },
                    "membersAfterTime": {
                        "1": "⏰ *{{{total}}} response completed after report time* by {{{users}}}",
                        "n": "⏰ *{{{total}}} responses completed after report time* by {{{users}}}"
                    },
                    "pendingMembers": {
                        "1": "⏳ Participant who did not respond yet:\n{{{users}}}",
                        "n": "⏳ Participants who did not respond yet:\n{{{users}}}"
                    }
                },
                "actionText": {
                    "simple": "[View web report]({{{url}}})",
                    "withActivityLog": "[View web report]({{{url}}}) | [View activity log]({{{urlActivityLog}}})"
                }
            }
        },
        "forms": {
            "singleReport": {
                "newReportArrived": {
                    "slack": "Here is a new response for the [*{{{skillObjectName}}}*]({{{url}}}) form:",
                    "hangouts": "Here is a new response for the [*{{{skillObjectName}}}*]({{{url}}}) form:",
                    "msteams": "Here is a new response for the <b><a href=\"{{{url}}}\">{{{skillObjectName}}}</a></b> form:",
                    "discord": "Here is a new response for the [*{{{skillObjectName}}}*]({{{url}}}) form:"
                },
                "footerActionLink": {
                    "slack": "[See report on DailyBot]({{{url}}})",
                    "hangouts": "<font color=\"#757575\"><i><a href=\"{{{url}}}\">View full report</a></i></font>",
                    "msteams": "<b><a href=\"{{{url}}}\">See full report ↗</a></b>",
                    "discord": "[View full report]({{{url}}})"
                },
                "activitySummary": {
                    "title": "Activity summary",
                    "integrationsTitle": "{{{total}}} {{{integrationName}}} Updates",
                    "eventNameWithTotal": "{{{eventName}}} ({{{total}}} events)",
                    "eventWithLink": {
                        "slack": "• [{{{eventMessage}}}]({{{url}}})",
                        "hangouts": "• <a href=\"{{{url}}}\">{{{eventMessage}}}</a>",
                        "msteams": "• [{{{eventMessage}}}]({{{url}}})",
                        "discord": "• [{{{eventMessage}}}]({{{url}}})"
                    }
                },
                "approvalFlow": {
                    "approved": "✅ *Approved* by *{{{approvers}}}* {{{date}}} \n 📝 _Signature: {{{signatureStamp}}}_",
                    "denied": "❌ *Denied* by *{{{approvers}}}* {{{date}}} \n 📝 _Signature: {{{signatureStamp}}}_"
                }
            }
        },
        "common": {
            "footerActionLink": {
                "discord": "[See complete report on the web]({{{url}}})"
            }
        }
    },
    "_COMMENT_COMMON": "----- COMMON -----",
    "common": {
        "and": "and",
        "today": "today",
        "article": "on",
        "at": "at"
    },
    "test": {
        "plain": "Hello!",
        "plainWithVar": "Hello {{{username}}}!",
        "markdown": "Hello *User*!",
        "markdownWithVars": "Hello *{{{username}}}*!"
    },
    "tour": {
        "description": "I'll show you how to get the most out of DailyBot 🚀— Start your way:",
        "buttons": {
            "assistant": {
                "tour": "AI Assistant",
                "assistantActivated": "📖 How to use the AI"
            },
            "checkIns": "Check-ins",
            "forms": "Forms",
            "kudos": "Kudos",
            "teamMood": "Team Mood",
            "chatops": "Chat Ops",
            "inviteUsers": "Invite Users"
        }
    },
    "default": "Default",
    "defaultVarTranslator": "{{{text}}}",
    "booleanResponses": {
        "yes": "Yes",
        "no": "No",
        "no_now": "Not now",
        "previous": "Previous",
        "next": "Next"
    },
    "connectors": {
        "and": "and"
    },
    "error": "Oh no! I am experiencing some problems with my system. Try again later or send me a *[support ticket here](https://help.dailybot.com/hc/en-us/requests/new)*.",
    "errors": {
        "plan_max_seats_limit_reached": "Sorry, your DailyBot organization has reached the maximum number of users available in the plan.\n\nA DailyBot administrator should add more licenses to solve it."
    },
    "language": {
        "en": "English",
        "es": "Spanish",
        "pt": "Portuguese"
    },
    "role": {
        "ADMIN_ORG": "Organization Admin",
        "MANAGER": "Team Manager",
        "ADMIN": "Team Admin",
        "MEMBER": "Member"
    },
    "threads": {
        "thread": "Thread"
    },
    "multimedia": {
        "teams": {
            "see_more": "[See the attached file.]({{{url}}})"
        },
        "warnings": {
            "common": {
                "freePlan": {
                    "admin": "ℹ️ [Upgrade]({{{url}}}) to a paid plan to upload files on your reports.",
                    "member": "ℹ️ To be able to upload files on your reports, you need a paid plan.",
                    "communication": {
                        "message": "Well done! Keep up the momentum and have a fantastic day!  🙌\n> 💡 Want to add a picture to your next check-in? Upgrade to a paid plan and unlock this powerful feature and tons more!",
                        "buttons": {
                            "upgrade": "Upgrade today",
                            "learnMore": "Learn more"
                        }
                    }
                },
                "maxFiles": "ℹ️ Only the first 5 images are saved per submission.",
                "communication": "ℹ️ Thanks for checking in! Want to make your reports even more impactful? Well now you can *upload images* to showcase your progress. [Learn more →](https://www.dailybot.com/blog-post/images-in-reports)"
            },
            "slack": {
                "noPermissionToReadFiles": {
                    "admin": "ℹ️ *Before you upload this:* I need an extra permission to process images securely via Slack. [Enable image uploads here →]({{{url}}})",
                    "member": "ℹ️ *Before you upload this:* I need an extra permission from a Slack admin to process images securely via chat. [Learn how →](https://help.dailybot.com/hc/en-us/articles/29488039850259)"
                },
                "requestPermission": {
                    "admin": "Thanks for checking in! You can now make your reports even sleeker with *image uploads!* ✨ I just need an extra permission to process them securely via Slack. [Enable image uploads]({{{url}}})",
                    "member": {
                        "message": "Thanks for checking in! You can now make your reports even sleeker with *image uploads!* ✨ I just need an extra permission to process them securely via Slack. [Learn more →](https://www.dailybot.com/blog-post/images-in-reports)",
                        "buttons": {
                            "requestPermission": "Request permission"
                        }
                    },
                    "dmAdminMessage": {
                        "message": "Heads up! {{{memberName}}} wants to use images in their reports, but we need an extra permission from a Slack admin to process images securely. [Enable image uploads here]({{{allowMediaFilesURL}}}) | [Learn more](https://help.dailybot.com/hc/en-us/articles/29488039850259)",
                        "afterMessage": "Done! Your permission was requested."
                    }
                }
            }
        }
    }
}
